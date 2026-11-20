// The Overworld engine (ADR 0003): three.js on WebGL2, rendered small and
// scaled up with hard pixels, a camera that never rotates, the Runner as a
// flat sprite, and no physics engine. React owns the interface around it
// (RoamMode.tsx); this class owns the canvas, the frame loop and the
// movement keys, and reports what the interface needs through callbacks.
//
// Frame order, after folio-2025's ordered ticker: input -> movement (fixed
// steps) -> camera -> animation -> sky -> render -> report.

import * as THREE from "three"
import {
  buildSolids,
  BEACH_REACH,
  CAMERA_PITCH,
  DOOR_REACH,
  islandPoint,
  LAP_START_S,
  PIER,
  ROAD,
  roadside,
  type LandmarkPlacement,
  placeLandmarks,
  type Scenery,
  scatterScenery,
  type Solid,
  type Vec2,
  walkable,
  ISLAND_RX,
  ISLAND_RZ,
  LOOP_LENGTH,
  roadPoint,
} from "./level"
import { type Facing, formatPace, newRunner, type RunnerState, stepRunner } from "./movement"
import {
  boatBoxes,
  C,
  CAR_COLORS,
  carBoxes,
  coastBand,
  distancePostBoxes,
  kerbBoxes,
  lilyPadCells,
  pierGeometry,
  pondFlowerBoxes,
  reedBoxes,
  roadPaintGeometry,
  streetLampBoxes,
  washShape,
  carBrakeBoxes,
  carLampBoxes,
  coastWaterShapes,
  fenceGeometry,
  flowerBoxes,
  groundGeometries,
  mountainGeometry,
  bushBoxes,
  palmBoxes,
  patchCells,
  plungeShapes,
  roadGeometry,
  rockBoxes,
  tuftBoxes,
  waterfallGeometry,
} from "./props"
import { landmarkModel, type LandmarkPart, type LandmarkScreen, type PartClock, PY as SCREEN_PY, textBoxes } from "./landmarks"
import { METERS_PER_UNIT } from "./movement"
import { cycleLight, type Sky, type SkyCycle, SKIES, type SkyLight } from "./sky"
import { inPier, islandReach, surfaceAt } from "./level"
import { boxesGeometry, type Cell, cellsGeometry } from "./voxels"
import { decalMaterial, glowMaterial, gradientTexture } from "./materials"
import { IslandLife } from "./life"
import { Dog, DOG_CAPTION } from "./dog"
import { GelTrail } from "./trail"
import { Controls } from "./controls"
import { drawRunnerAtlas, FACING_SET, FRAME_COLS, LAMP_ANGLE, type Pose, POSES, WATER_PATTERN, WATER_SIZE } from "./textures"
import type { LapReport, Look, OverworldCallbacks, OverworldSfx } from "./types"
export * from "./types"
import { LapTimer } from "./lap"
import { QuestRoad } from "./questroad"
import { rainGrade, Weather, type WeatherMode } from "./weather"
import { QUESTS, questStartYear } from "../../zones/quests"

// Palette colours go to the screen exactly as written: no colour
// management between the hex codes and the framebuffer.
THREE.ColorManagement.enabled = false

interface Options {
  zoneIds: string[]
  look: Look
  reduceMotion: boolean
  sky: Sky
  /** the Landmark doors already stood at, for the Gel trail; null when it's done */
  trail: string[] | null
}

const PIXELS_PER_UNIT = 16
const PITCH = CAMERA_PITCH
const CAMERA_DISTANCE = 60
const STEP = 1 / 120
const SPRITE_H = 1.25 / Math.cos(PITCH) // a vertical 20-pixel sprite, foreshortened back to 20 pixels
const SEE_THROUGH_RADIUS = 20 // internal pixels
/** Rows on screen at each zoom step, as multiples of the Look's rows */
const ZOOM_ROWS = [1, 4 / 3, 2]
const ZOOM_KEY = "roam-zoom"
/** Island-wide meshes are cut into tiles this wide, and the road into
 *  stretches this long, so the camera only draws what it can see */
const TILE = 24
const ROAD_STRETCH = 30

/** Group things by the tile of the island they stand on */
function byTile<T>(items: T[], at: (item: T) => Vec2): Map<string, T[]> {
  const tiles = new Map<string, T[]>()
  for (const item of items) {
    const p = at(item)
    const key = `${Math.floor(p.x / TILE)},${Math.floor(p.z / TILE)}`
    const tile = tiles.get(key)
    if (tile) tile.push(item)
    else tiles.set(key, [item])
  }
  return tiles
}
export { STICK_RADIUS, STICK_SPRINT } from "./controls"
/** How near the Runner must be to a Landmark's door to wake it */
const WAKE_REACH = 7
// The camera looks this far ahead of the Runner (up the screen), so he
// runs in the lower half and the Landmarks he faces fit above him
const LOOK_AHEAD = 2.4

export class Overworld {
  private readonly host: HTMLElement
  private readonly canvas: HTMLCanvasElement
  private readonly renderer: THREE.WebGLRenderer
  private readonly scene = new THREE.Scene()
  private camera: THREE.OrthographicCamera | THREE.PerspectiveCamera
  private look: Look
  private readonly cb: OverworldCallbacks
  private readonly reduceMotion: boolean

  // world
  private readonly landmarks: LandmarkPlacement[]
  private readonly scenery: Scenery
  private readonly solids: Solid[]
  private readonly labelAnchors: Array<{ zoneId: string; pos: THREE.Vector3 }> = []
  /** each Landmark's moving parts and screens, and how awake it is */
  private readonly stations: Array<{
    zoneId: string
    door: Vec2
    centre: Vec2
    wake: number
    parts: Array<{ mesh: THREE.Mesh; part: LandmarkPart }>
    screens: Array<{ screen: LandmarkScreen; g: CanvasRenderingContext2D; tex: THREE.CanvasTexture; drawnAt: number }>
  }> = []
  private readonly openedAt = performance.now()
  private life: IslandLife | null = null
  private dog: Dog | null = null
  private trail: GelTrail | null = null
  private weather: Weather | null = null
  /** the sky before the rain greys it */
  private baseLight: SkyLight = SKIES.dusk
  private gradedAt = -1
  private lastRain = -1
  private readonly lap = new LapTimer()
  private lastLapReport = ""
  private questRoad: QuestRoad | null = null
  private lastYear: number | null | undefined = undefined
  private readonly ghostMesh: THREE.Mesh
  private readonly ghostTex: THREE.Texture
  /** whole-pixel zoom: 0 near (the Look's rows), 1 middle, 2 far */
  private zoom = 0
  /** where a click asked him to run, and its marker */
  private goal: Vec2 | null = null
  private readonly goalMarker: THREE.Mesh
  /** the pointer, for captions and clicks */
  private pointer: { x: number; y: number } | null = null
  private hoverAt = 0
  private hoverDirty = false
  private lastCaption: string | null = null
  private hovered: { caption: () => string; click?: () => void } | null = null
  private readonly pointables: Array<{ obj: THREE.Object3D; caption: () => string; click?: () => void }> = []
  private readonly raycaster = new THREE.Raycaster()
  private stridePhase = 0
  private lastWaves = -1
  /** events the interface has been told of once already */
  private readonly told = new Set<string>()
  private banana: THREE.Group | null = null
  private kit = { top: "#FF9A4A", bottom: "#7EC8E8" }
  /** whole-pixel wind in grass, flowers, reeds and palm crowns */
  private readonly swayTime = { value: 0 }
  /** the camera's right along the ground, which the sway follows */
  private readonly swayDir = { value: new THREE.Vector2(1, 0) }
  /** things that turn to face the camera: signs meant to be read */
  private readonly facers: THREE.Object3D[] = []
  private readonly swayMats: THREE.MeshToonMaterial[] = []
  private wash: THREE.Mesh | null = null
  private boat: THREE.Object3D | null = null
  private glints: THREE.InstancedMesh | null = null
  private readonly glintSpots: Array<{ x: number; z: number; phase: number }> = []
  /** Oncoming Traffic: cars lapping the other way, stopping for the Runner */
  private readonly cars: Array<{
    group: THREE.Group
    s: number
    speed: number
    solids: Array<Solid & { kind: "circle" }>
    brake: THREE.Mesh
    /** seconds spent waiting for the Runner, and when it last honked */
    waited: number
    honked: number
  }> = []
  /** what switches on at Dusk: car lamps and the light they throw */
  private readonly lamps: THREE.Object3D[] = []
  /** pools of light that glow brighter at Dusk */
  private readonly glowPools: THREE.ShaderMaterial[] = []

  // materials and lights
  private gradient: THREE.DataTexture
  private readonly solidMat: THREE.MeshToonMaterial
  private readonly occluderMat: THREE.MeshToonMaterial
  private readonly seaMat = new THREE.MeshBasicMaterial()
  private readonly shallowMat = new THREE.MeshBasicMaterial()
  private readonly foamMat = new THREE.MeshBasicMaterial()
  private readonly shadowMat: THREE.ShaderMaterial
  private readonly glowMat = glowMaterial()
  private readonly rectShadowMat = decalMaterial(0x2b1b57, 0.5, { shape: "rect" })
  private readonly beamMat = decalMaterial(0xffe3a3, 0.5, { shape: "cone", falloff: true })
  private readonly tailPoolMat = decalMaterial(0xe8452f, 0.34, { falloff: true })
  private readonly waterTex: THREE.DataTexture
  private readonly waterMat: THREE.MeshBasicMaterial
  private readonly runnerMat: THREE.MeshBasicMaterial
  private readonly runnerTex: THREE.CanvasTexture
  private readonly sun = new THREE.DirectionalLight()
  private readonly shade = new THREE.AmbientLight()
  private readonly seeThrough = { value: new THREE.Vector4(-1000, -1000, SEE_THROUGH_RADIUS, 0) }

  // the Runner
  private runner: RunnerState
  private readonly runnerMesh: THREE.Mesh
  private readonly runnerShadow: THREE.Mesh
  private animClock = 0
  private lampsLit = false
  /** when he last stood still, for the watch check */
  private stillSince = performance.now()
  private checkingWatch = false
  private jumped = false
  private landed = false
  private readonly lampPool: THREE.Mesh

  // camera rig
  private readonly focus = new THREE.Vector3()
  private readonly pan = new THREE.Vector3()
  private axes = { right: { x: 1, z: 0 }, up: { x: 0, z: -1 } }
  private size = { iw: 320, ih: 180, scale: 1, left: 0, top: 0 }

  // input
  private readonly controls: Controls
  private inputEnabled = true

  // loop
  private raf = 0
  private running = false
  private paused = true
  private hidden = false
  private last = 0
  private acc = 0
  private frameTimes: number[] = []
  private frameTimeAt = 0

  // reporting
  private lastPrompt: string | null | undefined = undefined
  private lastNearest = ""
  private lastPace: string | null | undefined = undefined
  private paceSpeed = 0
  private moved = false
  private stuck = { timer: 0, origin: { x: 0, z: 0 }, on: false }

  // sky
  private sky: Sky
  private cycle: { kind: SkyCycle; start: number } | null = null
  private cycleMs = 2800
  private cycleMid = 0.45

  private readonly resizeObserver: ResizeObserver
  private readonly tmp = new THREE.Vector3()

  constructor(host: HTMLElement, options: Options, callbacks: OverworldCallbacks) {
    this.host = host
    this.cb = callbacks
    this.look = options.look
    this.reduceMotion = options.reduceMotion
    this.sky = options.sky

    this.canvas = document.createElement("canvas")
    this.canvas.className = "roam-canvas"
    this.canvas.setAttribute("aria-hidden", "true")
    host.appendChild(this.canvas)

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: false,
        powerPreference: "default",
      })
    } catch (error) {
      this.canvas.remove()
      throw error
    }
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    this.renderer.setPixelRatio(1)

    this.gradient = gradientTexture(this.look.tones)
    this.solidMat = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: this.gradient })
    this.occluderMat = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: this.gradient })
    this.installSeeThrough(this.occluderMat)
    this.shadowMat = decalMaterial(0x2b1b57, 0.5)
    this.waterTex = new THREE.DataTexture(new Uint8Array(WATER_SIZE * WATER_SIZE * 4), WATER_SIZE, WATER_SIZE, THREE.RGBAFormat)
    this.waterTex.magFilter = THREE.NearestFilter
    this.waterTex.minFilter = THREE.NearestFilter
    this.waterTex.wrapS = THREE.RepeatWrapping
    this.waterTex.wrapT = THREE.RepeatWrapping
    this.waterTex.generateMipmaps = false
    this.waterMat = new THREE.MeshBasicMaterial({ map: this.waterTex, side: THREE.DoubleSide })

    this.runnerTex = new THREE.CanvasTexture(drawRunnerAtlas())
    this.runnerTex.magFilter = THREE.NearestFilter
    this.runnerTex.minFilter = THREE.NearestFilter
    this.runnerTex.generateMipmaps = false
    this.runnerTex.repeat.set(1 / FRAME_COLS, 0.5)
    this.runnerMat = new THREE.MeshBasicMaterial({
      map: this.runnerTex,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    })

    // Lights: the sun gives the lit tone, the shade light the shadow tone.
    // From behind, above and to the left, so roofs catch the sun and the
    // walls facing the camera fall into the shade colour.
    this.sun.position.set(-0.416, 0.885, -0.208)
    this.scene.add(this.sun, this.shade)

    // they face the camera the Overworld opens with
    this.landmarks = placeLandmarks(options.zoneIds, (options.look.yaw * Math.PI) / 180)
    this.scenery = scatterScenery(this.landmarks)
    this.solids = buildSolids(this.landmarks, this.scenery)
    this.buildWorld()
    this.life = new IslandLife(this.scene, {
      reduceMotion: this.reduceMotion,
      cows: this.scenery.cows,
      flowers: this.scenery.flowers,
      bushes: this.scenery.bushes,
      aidStation: this.landmarks.find((l) => l.zoneId === "skills"),
      solids: this.solids,
      occluder: this.occluderMat,
      shadow: this.shadowMat,
      gradient: this.gradient,
      flatDisc: () => this.flatDisc(),
      sfx: (name, at) => this.sfxAt(name, at),
      event: (e) => this.cb.onEvent(e),
    })
    this.buildBanana()
    this.pointables.push(...this.life.pointables())
    const dog = new Dog(this.scene, {
      occluder: this.occluderMat,
      glow: this.glowMat,
      shadow: this.shadowMat,
      flatDisc: () => this.flatDisc(),
      solids: this.solids,
      reduceMotion: this.reduceMotion,
      sfx: (name, at) => this.sfxAt(name, at),
    })
    this.dog = dog
    this.pointables.push({ obj: dog.object, caption: () => DOG_CAPTION, click: () => dog.bark(performance.now() / 1000) })
    if (options.trail) {
      this.trail = new GelTrail(this.scene, this.landmarks, options.trail, {
        glow: this.glowMat,
        shadow: this.shadowMat,
        flatDisc: () => this.flatDisc(),
        solids: this.solids,
        reduceMotion: this.reduceMotion,
        picked: (at) => {
          this.sfxAt("gel", at)
          for (let k = 0; k < 5; k++) {
            const a = (k / 5) * Math.PI * 2
            this.life?.particles.spawn({ x: at.x, y: 0.4, z: at.z, vx: Math.cos(a) * 0.9, vy: 1.6, vz: Math.sin(a) * 0.5, max: 0.4, size: 1 / 16, gravity: 5, color: 0xffc94d })
          }
        },
      })
    }
    this.weather = new Weather(this.scene, () => this.flatDisc(), this.reduceMotion, performance.now() / 1000)
    // the headlamp's pool of light, thrown ahead of him at Dusk
    this.lampPool = new THREE.Mesh(this.flatDisc(), decalMaterial(0xffe3a3, 0.42, { shape: "cone", falloff: true }))
    this.lampPool.scale.set(3.2, 1, 2.2)
    this.scene.add(this.lampPool)
    this.goalMarker = new THREE.Mesh(this.flatDisc(), decalMaterial(0xfff4e3, 0.7, { shape: "ring" }))
    this.goalMarker.visible = false
    this.scene.add(this.goalMarker)
    try {
      const z = Number(localStorage.getItem(ZOOM_KEY))
      if (z === 1 || z === 2) this.zoom = z
    } catch {
      /* storage unavailable */
    }
    this.questRoad = new QuestRoad(this.scene, {
      years: QUESTS.map(questStartYear).filter((y): y is number => y !== null),
      occluder: this.occluderMat,
      solid: this.solidMat,
      shadow: this.shadowMat,
      flatDisc: () => this.flatDisc(),
      solids: this.solids,
      reduceMotion: this.reduceMotion,
    })
    this.pointables.push(...this.questRoad.pointables())
    this.facers.push(...this.questRoad.pointables().map((p) => p.obj))

    const runnerGeo = new THREE.PlaneGeometry(1, SPRITE_H)
    runnerGeo.translate(0, SPRITE_H / 2, 0)
    this.runnerMesh = new THREE.Mesh(runnerGeo, this.runnerMat)
    this.runnerMesh.renderOrder = 2
    // the Ghost: the same sprite sheet, every other pixel, in pale lilac
    this.ghostTex = this.runnerTex.clone()
    this.ghostTex.needsUpdate = true
    const ghostMat = new THREE.MeshBasicMaterial({ map: this.ghostTex, alphaTest: 0.5, side: THREE.DoubleSide, color: 0xd8cdff })
    ghostMat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <alphatest_fragment>",
        "#include <alphatest_fragment>\n if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;"
      )
    }
    this.ghostMesh = new THREE.Mesh(runnerGeo, ghostMat)
    this.ghostMesh.renderOrder = 2
    this.ghostMesh.visible = false
    this.scene.add(this.ghostMesh)
    this.runnerShadow = new THREE.Mesh(this.flatDisc(), this.shadowMat)
    this.scene.add(this.runnerMesh, this.runnerShadow)
    this.stirStations(0, performance.now(), true)
    // Decals write no depth, so they must draw after the ground they lie on
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material instanceof THREE.ShaderMaterial && "uDensity" in obj.material.uniforms) {
        obj.renderOrder = Math.max(obj.renderOrder, 1)
      }
    })

    const start = this.landmarks[0]
    this.runner = newRunner(start?.door.x ?? 0, start?.door.z ?? 40)

    this.camera = this.makeCamera()
    this.applySky(SKIES[this.sky])

    this.onVisibility = this.onVisibility.bind(this)
    this.onContextLost = this.onContextLost.bind(this)
    this.tick = this.tick.bind(this)
    document.addEventListener("visibilitychange", this.onVisibility)
    this.canvas.addEventListener("webglcontextlost", this.onContextLost)
    this.controls = new Controls({
      canvas: this.canvas,
      enabled: () => this.inputEnabled,
      panBy: (dx, dy) => this.panBy(dx, dy),
      look: (x, y, dt) => this.lookBy(x, y, dt),
      zoom: (step) =>
        this.setZoom(step === "cycle" ? (this.zoom + 1) % ZOOM_ROWS.length : Math.max(0, Math.min(ZOOM_ROWS.length - 1, this.zoom + step))),
      respawn: () => this.cb.onRespawn(),
      act: (x, y, tap) => this.actAt(x, y, tap),
      hover: (at) => {
        // over the island: raycast there; off it: clear any caption
        if (at) this.pointer = at
        else if (this.lastCaption === null) return
        else this.pointer = null
        this.hoverDirty = true
      },
      stick: (stick) => this.cb.onStick(stick),
      usedPad: () => this.cb.onPad(),
    })

    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(host)
    this.resize()
  }

  // ---- public API ----

  /** Start (or restart) the frame loop */
  resume() {
    this.paused = false
    this.wake()
  }

  /** Stop rendering, e.g. while a door is open */
  pause() {
    this.paused = true
    this.controls.release()
    this.stop()
    this.goal = null
    this.pointer = null
    this.hovered = null
    if (this.lastCaption !== null) {
      this.lastCaption = null
      this.cb.onHover(null)
    }
  }

  setInputEnabled(enabled: boolean) {
    this.inputEnabled = enabled
    if (!enabled) this.controls.release()
  }

  /** Put the Runner at a Landmark's door, camera and all */
  placeAt(zoneId: string, facing: Facing = "down") {
    const l = this.landmarks.find((m) => m.zoneId === zoneId) ?? this.landmarks[0]
    if (!l) return
    this.runner = newRunner(l.door.x, l.door.z, facing)
    this.lap.reset()
    this.dog?.arrive(this.runner, performance.now() / 1000, l.facing)
    this.pan.set(0, 0, 0)
    this.focus.set(this.runner.x + this.axes.up.x * LOOK_AHEAD, 0, this.runner.z + this.axes.up.z * LOOK_AHEAD)
    this.stuck = { timer: 0, origin: { x: l.door.x, z: l.door.z }, on: false }
    this.cb.onStuck(false)
    this.lastPrompt = undefined
    if (!this.running) this.renderOnce()
  }

  /** The Landmark nearest the Runner */
  nearestZone(): string {
    return this.nearest().zoneId
  }

  /** Where the Runner is on the island, for the map */
  runnerPosition(): Vec2 {
    return { x: this.runner.x, z: this.runner.z }
  }

  landmarkPlacements(): LandmarkPlacement[] {
    return this.landmarks
  }

  /** The Runner's chest in CSS pixels of the host, for wipes centred on him */
  runnerOnScreen(): { x: number; y: number } {
    return this.toScreen(this.runner.x, 0.7 + this.runner.h, this.runner.z)
  }

  setSky(sky: Sky, cycle: SkyCycle | null, cycleMs: number, cycleMid: number) {
    this.cycleMs = cycleMs
    this.cycleMid = cycleMid
    if (cycle && !this.reduceMotion) {
      if (!this.cycle || this.cycle.kind !== cycle) this.cycle = { kind: cycle, start: performance.now() }
      return
    }
    this.cycle = null
    this.sky = sky
    this.applySky(SKIES[sky])
    if (!this.running) this.renderOnce()
  }

  setLook(look: Look) {
    const tonesChanged = look.tones !== this.look.tones
    this.look = look
    if (tonesChanged) {
      const old = this.gradient
      this.gradient = gradientTexture(look.tones)
      this.solidMat.gradientMap = this.gradient
      this.occluderMat.gradientMap = this.gradient
      for (const m of this.swayMats) m.gradientMap = this.gradient
      this.life?.setGradient(this.gradient)
      old.dispose()
    }
    this.camera = this.makeCamera()
    this.resize()
  }

  dispose() {
    this.stop()
    this.trail?.dispose()
    this.resizeObserver.disconnect()
    this.controls.dispose()
    document.removeEventListener("visibilitychange", this.onVisibility)
    this.canvas.removeEventListener("webglcontextlost", this.onContextLost)
    const materials = new Set<THREE.Material>()
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.InstancedMesh) {
        obj.geometry.dispose()
        const m = obj.material
        ;(Array.isArray(m) ? m : [m]).forEach((x) => materials.add(x))
      }
    })
    materials.forEach((m) => m.dispose())
    this.gradient.dispose()
    this.runnerTex.dispose()
    this.waterTex.dispose()
    this.weather?.dispose()
    this.ghostTex.dispose()
    for (const st of this.stations) for (const sc of st.screens) sc.tex.dispose()
    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.canvas.remove()
  }

  // ---- building the island ----

  private flatDisc(): THREE.BufferGeometry {
    const g = new THREE.PlaneGeometry(1, 1)
    g.rotateX(-Math.PI / 2)
    g.translate(0, 0.02, 0)
    return g
  }

  /** Let a pointer find this object and show its caption */
  private point<T extends THREE.Object3D>(obj: T, caption: string): T {
    this.pointables.push({ obj, caption: () => caption })
    return obj
  }

  private add(geometry: THREE.BufferGeometry, material: THREE.Material, renderOrder = 0): THREE.Mesh {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.renderOrder = renderOrder
    mesh.matrixAutoUpdate = false
    mesh.updateMatrix()
    this.scene.add(mesh)
    return mesh
  }

  /**
   * Scatter instances of one geometry, one InstancedMesh per tile of the
   * island so the camera skips the tiles it can't see (one mesh across the
   * whole island is always drawn in full)
   */
  private instanced(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    items: Array<{ x: number; z: number; rot: number; scale: number }>,
    scaleXZ?: (s: number) => [number, number]
  ): THREE.InstancedMesh[] {
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    return [...byTile(items, (it) => it).values()].map((tile) => {
      const mesh = new THREE.InstancedMesh(geometry, material, tile.length)
      tile.forEach((it, i) => {
        q.setFromAxisAngle(up, it.rot)
        const [sx, sz] = scaleXZ ? scaleXZ(it.scale) : [it.scale, it.scale]
        m.compose(new THREE.Vector3(it.x, 0, it.z), q, new THREE.Vector3(sx, it.scale, sz))
        mesh.setMatrixAt(i, m)
      })
      mesh.instanceMatrix.needsUpdate = true
      mesh.computeBoundingSphere()
      this.scene.add(mesh)
      return mesh
    })
  }

  /** Flat cells on the ground, one mesh per tile of the island */
  private addCells(cells: Cell[], y: number, material: THREE.Material) {
    for (const tile of byTile(cells, (c) => ({ x: c.x + c.w / 2, z: c.z + c.d / 2 })).values()) {
      this.add(cellsGeometry(tile, y), material)
    }
  }

  private buildWorld() {
    // the sea, the shallows, the foam line
    const sea = new THREE.PlaneGeometry(1400, 1400)
    sea.rotateX(-Math.PI / 2)
    sea.translate(0, -0.36, 0)
    this.add(sea, this.seaMat)
    const water = coastWaterShapes()
    const flat = (shape: THREE.Shape, y: number) => {
      const g = new THREE.ShapeGeometry(shape, 1)
      g.rotateX(-Math.PI / 2)
      g.translate(0, y, 0)
      return g
    }
    this.add(flat(water.shallow, -0.35), this.shallowMat)
    this.add(flat(water.foam, -0.345), this.foamMat)

    for (const g of groundGeometries()) this.add(g, this.solidMat)
    this.point(this.add(flat(water.pond, 0.008), this.shallowMat), "THE POND. SOMETHING SPLASHES.")
    const plunge = plungeShapes()
    this.add(flat(plunge.pool, 0.008), this.shallowMat)
    this.add(flat(plunge.foam, 0.01), this.foamMat)
    this.wash = this.add(flat(washShape(), 0.003), this.foamMat)
    // the coast's pixel edges: wet sand by the water, and grass and sand
    // dithered into each other where they meet
    this.addCells(coastBand(0.976, 1.0, 0.012, 0, 0xc4a676), 0.002, this.solidMat)
    this.addCells(coastBand(BEACH_REACH, BEACH_REACH, 0, 0.011, C.grass), 0.004, this.solidMat)
    this.addCells(coastBand(BEACH_REACH, BEACH_REACH, 0.011, 0, C.sand, 1), 0.0045, this.solidMat)
    // the road in stretches, so the camera skips the ones out of view
    for (let s = 0; s < LOOP_LENGTH; s += ROAD_STRETCH) this.add(roadGeometry(s, s + ROAD_STRETCH), this.solidMat)
    this.add(
      roadPaintGeometry(
        this.landmarks.filter((l) => l.zoneId !== "title").map((l) => l.s),
        LAP_START_S
      ),
      this.solidMat
    )
    for (const tile of byTile(kerbBoxes(), (b) => ({ x: b.x + b.w / 2, z: b.z + b.d / 2 })).values()) {
      this.add(boxesGeometry(tile), this.solidMat)
    }
    this.buildRoadside()
    this.point(this.add(pierGeometry(), this.occluderMat), "THE PIER.")
    const boat = new THREE.Mesh(boxesGeometry(boatBoxes(), false), this.occluderMat)
    boat.position.set(PIER.x + 1.9, -0.42, PIER.z1 - 2.2)
    boat.rotation.y = Math.PI / 2
    this.scene.add(boat)
    this.boat = boat
    this.point(boat, "A ROWING BOAT. NOT FOR HIRE.")
    this.add(cellsGeometry(lilyPadCells(), 0.011), this.solidMat)
    this.add(boxesGeometry(pondFlowerBoxes()), this.solidMat)
    this.add(boxesGeometry(reedBoxes()), this.swayMaterial("occluder", 0.2, 0.7))
    this.buildGlints()
    this.point(this.add(mountainGeometry(), this.occluderMat), "THE MOUNTAIN. ANOTHER DAY.")
    this.point(this.add(waterfallGeometry(), this.waterMat, 1), "THE WATERFALL.")
    this.point(this.add(fenceGeometry(), this.solidMat), "THE PASTURE FENCE.")

    const s = this.scenery
    for (const palms of this.instanced(boxesGeometry(palmBoxes()), this.swayMaterial("occluder", 1.6, 2.4), s.palms)) {
      this.point(palms, "A PALM.")
    }
    this.instanced(this.flatDisc(), this.shadowMat, s.palms, (k) => [1.5 * k, 1.1 * k])
    for (let v = 0; v < 3; v++) {
      const rocks = s.rocks.filter((r) => r.variant === v)
      this.instanced(boxesGeometry(rockBoxes(v)), this.occluderMat, rocks)
      this.instanced(this.flatDisc(), this.shadowMat, rocks, (k) => [1.1 * k, 0.8 * k])
    }
    for (let v = 0; v < 2; v++) {
      const patches = s.patches.filter((p) => p.variant % 2 === v)
      this.addCells(patchCells(patches, v), 0.006 + v * 0.0005, this.solidMat)
    }
    for (let v = 0; v < 2; v++) {
      const bushes = s.bushes.filter((b) => b.variant % 2 === v)
      this.instanced(boxesGeometry(bushBoxes(v)), this.occluderMat, bushes)
      this.instanced(this.flatDisc(), this.shadowMat, bushes, (k) => [1.4 * k, 1.0 * k])
    }
    this.instanced(boxesGeometry(tuftBoxes()), this.swayMaterial("solid", 0.08, 0.3), s.tufts)
    for (let v = 0; v < 3; v++) {
      this.instanced(boxesGeometry(flowerBoxes(v)), this.swayMaterial("solid", 0.12, 0.3), s.flowers.filter((f) => f.variant === v))
    }

    // Oncoming Traffic, in the outer lane
    const carGeos = CAR_COLORS.map(([body, roof]) => boxesGeometry(carBoxes(body, roof)))
    ;[0.18, 0.5, 0.83].forEach((at, i) => {
      const group = new THREE.Group()
      group.add(new THREE.Mesh(carGeos[i % carGeos.length], this.occluderMat))
      const shadow = new THREE.Mesh(this.flatDisc(), this.shadowMat)
      shadow.scale.set(2.7, 1, 1.5)
      group.add(shadow)
      // lamps lit, the beam they throw ahead, and a red glow behind
      const lit = new THREE.Mesh(boxesGeometry(carLampBoxes()), this.glowMat)
      const beam = new THREE.Mesh(this.flatDisc(), this.beamMat)
      beam.scale.set(3.6, 1, 2.4)
      beam.position.x = 1.15 + 1.8
      const tail = new THREE.Mesh(this.flatDisc(), this.tailPoolMat)
      tail.scale.set(1.3, 1, 1.7)
      tail.position.x = -1.75
      const brake = new THREE.Mesh(boxesGeometry(carBrakeBoxes()), this.glowMat)
      brake.visible = false
      group.add(lit, beam, tail, brake)
      this.lamps.push(lit, beam, tail)
      this.scene.add(group)
      this.point(group, "ONCOMING TRAFFIC. IT STOPS FOR YOU.")
      // two circles hugging the body, front and back: one round circle
      // reached out of the lane far enough to shove a Runner standing at
      // a door beside the road
      const solids = [0, 1].map(() => ({ kind: "circle" as const, x: 0, z: 0, r: 0.6 }))
      this.solids.push(...solids)
      const car = { group, s: at * LOOP_LENGTH, speed: 0, solids, brake, waited: 0, honked: -Infinity }
      this.cars.push(car)
      this.moveCar(car, 0)
    })

    // the Landmarks
    for (const l of this.landmarks) {
      const model = landmarkModel(l.zoneId)
      const group = new THREE.Group()
      group.position.set(l.x, 0, l.z)
      group.rotation.y = Math.atan2(l.facing.x, l.facing.z)
      group.add(new THREE.Mesh(boxesGeometry(model.boxes), this.occluderMat))
      const station: (typeof this.stations)[number] = {
        zoneId: l.zoneId,
        door: l.door,
        centre: { x: l.x, z: l.z },
        wake: this.reduceMotion ? 1 : 0,
        parts: [],
        screens: [],
      }
      for (const part of model.parts ?? []) {
        const mesh = new THREE.Mesh(boxesGeometry(part.boxes), part.glow ? glowMaterial() : this.occluderMat)
        const [px, py, pz] = part.at ?? [0, 0, 0]
        mesh.position.set(px, py, pz)
        group.add(mesh)
        station.parts.push({ mesh, part })
      }
      for (const screen of model.screens ?? []) {
        const canvas = document.createElement("canvas")
        canvas.width = screen.cols
        canvas.height = screen.rows
        const tex = new THREE.CanvasTexture(canvas)
        tex.magFilter = THREE.NearestFilter
        tex.minFilter = THREE.NearestFilter
        tex.generateMipmaps = false
        // one canvas pixel per screen pixel, the upright face foreshortened
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(screen.cols / 16, screen.rows * SCREEN_PY), new THREE.MeshBasicMaterial({ map: tex }))
        mesh.position.set(...screen.at)
        group.add(mesh)
        station.screens.push({ screen, g: canvas.getContext("2d")!, tex, drawnAt: -Infinity })
      }
      if (model.floor) group.add(new THREE.Mesh(cellsGeometry(model.floor, 0.007), this.solidMat))
      for (const sh of model.shadows ?? []) {
        const mesh = new THREE.Mesh(this.flatDisc(), this.rectShadowMat)
        mesh.scale.set(sh.w, 1, sh.d)
        // away from the sun by its height, turned into the Landmark's frame
        const sun = this.sun.position
        const k = (sh.lift ?? 0) / sun.y
        const wx = -sun.x * k
        const wz = -sun.z * k
        const c = Math.cos(l.angle)
        const sn = Math.sin(l.angle)
        mesh.position.set(sh.x + wx * c - wz * sn, 0, sh.z + wx * sn + wz * c)
        group.add(mesh)
      }
      for (const pool of model.pools ?? []) {
        const mat = decalMaterial(pool.color, 0.3, { falloff: true })
        const mesh = new THREE.Mesh(this.flatDisc(), mat)
        mesh.scale.set(pool.rx * 2, 1, pool.rz * 2)
        mesh.position.set(pool.x, 0, pool.z)
        group.add(mesh)
        this.glowPools.push(mat)
      }
      this.stations.push(station)
      const zoneId = l.zoneId
      this.pointables.push({ obj: group, caption: () => "A DOOR INTO THE PAGE.", click: () => this.cb.onOpen(zoneId) })
      this.scene.add(group)
      this.labelAnchors.push({ zoneId: l.zoneId, pos: new THREE.Vector3(l.x, model.height + 0.45, l.z) })
    }
  }

  /** Drive one car along the outer lane; it waits while the Runner is in its way */
  private moveCar(car: (typeof this.cars)[number], dt: number) {
    const LANE = 0.75
    const CRUISE = 5
    const lanePoint = (s: number) => {
      const p = roadPoint(s)
      return { x: p.x + p.nx * LANE, z: p.z + p.nz * LANE, p }
    }
    const here = lanePoint(car.s)
    const ahead = lanePoint(car.s - 2.4)
    const r = this.runner
    // it waits for the Runner, and for his dog
    const blocked =
      (!!r && (Math.hypot(r.x - ahead.x, r.z - ahead.z) < 1.7 || Math.hypot(r.x - here.x, r.z - here.z) < 1.6)) ||
      !!this.dog?.near(ahead.x, ahead.z, 1.4) ||
      !!this.dog?.near(here.x, here.z, 1.3)
    const target = blocked || this.reduceMotion ? 0 : CRUISE
    // brake lamps while it slows or waits; a honk if he lingers in its way
    car.brake.visible = !this.reduceMotion && (blocked || target < car.speed - 0.05)
    car.waited = blocked && !this.reduceMotion ? car.waited + dt : 0
    const now = performance.now() / 1000
    if (car.waited > 1.4 && now - car.honked > 4) {
      car.honked = now
      this.sfxAt("horn", car.solids[0])
      this.tellOnce("honk")
    }
    const rate = target < car.speed ? 14 : 3
    car.speed = target > car.speed ? Math.min(target, car.speed + rate * dt) : Math.max(target, car.speed - rate * dt)
    car.s = (car.s - car.speed * dt + LOOP_LENGTH) % LOOP_LENGTH
    const at = lanePoint(car.s)
    const snapped = this.camera ? this.snapToPixels(at.x, at.z) : at
    car.group.position.set(snapped.x, 0, snapped.z)
    // heading against the lap: the reverse of the road's tangent
    car.group.rotation.y = Math.atan2(at.p.tz, -at.p.tx)
    car.solids.forEach((c, i) => {
      const along = i === 0 ? 0.55 : -0.55
      c.x = at.x + at.p.tx * along
      c.z = at.z + at.p.tz * along
    })
  }

  /**
   * A copy of the ground or occluder material whose vertices sway with
   * the wind: a whole screen pixel along x, only above `from` and fully
   * from `to`, in gusts that roll across the island.
   */
  private swayMaterial(base: "solid" | "occluder", from: number, to: number): THREE.MeshToonMaterial {
    const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: this.gradient })
    if (base === "occluder") this.installSeeThrough(m)
    const before = m.onBeforeCompile.bind(m)
    const time = this.swayTime
    const swayDir = this.swayDir
    m.onBeforeCompile = (shader, renderer) => {
      before(shader, renderer)
      shader.uniforms.uSwayTime = time
      shader.uniforms.uSwayDir = swayDir
      shader.vertexShader =
        "uniform float uSwayTime;\nuniform vec2 uSwayDir;\n" +
        shader.vertexShader.replace(
          "#include <project_vertex>",
          /* glsl */ `vec4 mvPosition = vec4( transformed, 1.0 );
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          {
            float swayK = clamp((transformed.y - ${from.toFixed(3)}) / ${(to - from).toFixed(3)}, 0.0, 1.0);
            float gust = sin(uSwayTime * 1.7 + mvPosition.x * 0.31 + mvPosition.z * 0.17);
            mvPosition.xz += uSwayDir * floor(swayK * step(0.3, gust) + 0.5) / 16.0;
          }
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;`
        )
    }
    m.customProgramCacheKey = () => `sway-${base}-${from}-${to}`
    this.swayMats.push(m)
    return m
  }

  /** Distance posts every 50 metres, and street lamps that light at Dusk */
  private buildRoadside() {
    const { posts, lamps } = roadside(METERS_PER_UNIT)
    const verge = (s: number, off: number) => {
      const p = roadPoint(s)
      return { p, x: p.x - p.nx * off, z: p.z - p.nz * off }
    }
    for (const post of posts) {
      const { x, z } = verge(post.s, ROAD.halfWidth + 0.7)
      const mesh = this.add(boxesGeometry(distancePostBoxes(post.metres, textBoxes)), this.occluderMat)
      mesh.position.set(x, 0, z)
      mesh.updateMatrix()
      this.facers.push(mesh)
      this.point(mesh, `${post.metres} METRES INTO THE LAP.`)
      this.solids.push({ kind: "circle", x, z, r: 0.12 })
    }
    const { pole, bulb } = streetLampBoxes()
    const poleGeo = boxesGeometry(pole)
    const bulbGeo = boxesGeometry(bulb)
    for (const s of lamps) {
      const { p, x, z } = verge(s, ROAD.halfWidth + 0.9)
      const group = new THREE.Group()
      group.position.set(x, 0, z)
      // the arm reaches out over the road
      group.rotation.y = Math.atan2(-p.nz, p.nx)
      const glow = new THREE.Mesh(bulbGeo, this.glowMat)
      const pool = new THREE.Mesh(this.flatDisc(), decalMaterial(0xffe3a3, 0.36, { falloff: true }))
      pool.scale.set(2.6, 1, 2.0)
      pool.position.x = 1.0
      group.add(new THREE.Mesh(poleGeo, this.occluderMat), glow, pool)
      this.scene.add(group)
      this.point(group, "A STREET LAMP.")
      this.lamps.push(glow, pool)
      this.solids.push({ kind: "circle", x, z, r: 0.15 })
    }
  }

  private buildGlints() {
    for (let i = 0; i < 70; i++) {
      const p = islandPoint(Math.random() * Math.PI * 2, 1.05 + Math.random() * 0.4)
      this.glintSpots.push({ ...p, phase: Math.random() })
    }
    this.glints = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff }), this.glintSpots.length)
    this.glints.frustumCulled = false
    this.scene.add(this.glints)
    this.updateGlints(0)
  }

  /** Each glint flashes briefly, two pixels wide, now and then */
  private updateGlints(t: number) {
    const g = this.glints
    if (!g) return
    const m = new THREE.Matrix4()
    this.glintSpots.forEach((spot, i) => {
      const on = this.reduceMotion ? i % 4 === 0 : (t * 0.45 + spot.phase) % 1 < 0.12
      m.makeScale(on ? 2 / 16 : 0, 0.01, on ? 0.09 : 0)
      m.setPosition(spot.x, -0.34, spot.z)
      g.setMatrixAt(i, m)
    })
    g.instanceMatrix.needsUpdate = true
  }

  /** Occluders between the camera and the Runner dither away around him */
  private installSeeThrough(material: THREE.MeshToonMaterial) {
    const uniform = this.seeThrough
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uSeeThrough = uniform
      shader.fragmentShader =
        "uniform vec4 uSeeThrough;\n" +
        shader.fragmentShader.replace(
          "#include <clipping_planes_fragment>",
          /* glsl */ `#include <clipping_planes_fragment>
          {
            vec2 seeD = gl_FragCoord.xy - uSeeThrough.xy;
            if (dot(seeD, seeD) < uSeeThrough.z * uSeeThrough.z && gl_FragCoord.z < uSeeThrough.w - 0.0004) {
              if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;
            }
          }`
        )
    }
    material.customProgramCacheKey = () => "see-through"
  }

  // ---- camera ----

  private makeCamera(): THREE.OrthographicCamera | THREE.PerspectiveCamera {
    const yaw = (this.look.yaw * Math.PI) / 180
    this.axes = {
      right: { x: Math.cos(yaw), z: -Math.sin(yaw) },
      up: { x: -Math.sin(yaw), z: -Math.cos(yaw) },
    }
    this.runnerMesh.rotation.y = yaw
    this.runnerShadow.rotation.y = yaw
    this.swayDir.value.set(this.axes.right.x, this.axes.right.z)
    for (const f of this.facers) {
      f.rotation.y = yaw
      if (!f.matrixAutoUpdate) f.updateMatrix()
    }
    this.life?.setYaw(yaw)
    this.dog?.setYaw(yaw)
    this.trail?.setYaw(yaw)
    return this.look.lens === "ortho"
      ? new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400)
      : new THREE.PerspectiveCamera(30, 1, 1, 400)
  }

  private resize() {
    const w = Math.max(1, this.host.clientWidth)
    const h = Math.max(1, this.host.clientHeight)
    // the shorter side sets the pixel size, so a phone held upright still
    // gets a view about as wide as a landscape screen is tall
    const scale = Math.max(1, Math.floor(Math.min(w, h) / (this.look.rows * ZOOM_ROWS[this.zoom])))
    // even internal sizes keep the pixel grid centred
    const iw = Math.ceil(w / scale / 2) * 2
    const ih = Math.ceil(h / scale / 2) * 2
    this.size = { iw, ih, scale, left: Math.floor((w - iw * scale) / 2), top: Math.floor((h - ih * scale) / 2) }
    this.renderer.setSize(iw, ih, false)
    Object.assign(this.canvas.style, {
      width: `${iw * scale}px`,
      height: `${ih * scale}px`,
      left: `${this.size.left}px`,
      top: `${this.size.top}px`,
    })
    const halfW = iw / 2 / PIXELS_PER_UNIT
    const halfH = ih / 2 / PIXELS_PER_UNIT
    if (this.camera instanceof THREE.OrthographicCamera) {
      Object.assign(this.camera, { left: -halfW, right: halfW, top: halfH, bottom: -halfH })
    } else {
      this.camera.fov = (2 * Math.atan(halfH / CAMERA_DISTANCE) * 180) / Math.PI
      this.camera.aspect = iw / ih
    }
    this.camera.updateProjectionMatrix()
    if (!this.running) this.renderOnce()
  }

  private placeCamera() {
    const yaw = (this.look.yaw * Math.PI) / 180
    const flat = Math.cos(PITCH) * CAMERA_DISTANCE
    const cam = this.camera
    cam.position.set(
      this.focus.x + Math.sin(yaw) * flat,
      Math.sin(PITCH) * CAMERA_DISTANCE,
      this.focus.z + Math.cos(yaw) * flat
    )
    cam.lookAt(this.focus)
    cam.updateMatrixWorld()
    // Move the camera in whole screen pixels so nothing shimmers. The depth
    // lens is sized so a pixel is 1/16 of a unit at the focus, as the flat
    // lens is everywhere, so the same steps hold the ground near the Runner
    // still; only things well above or behind it drift by a fraction.
    const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0)
    const up = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1)
    const fwd = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 2)
    const p = cam.position
    const snap = (v: number) => Math.round(v * PIXELS_PER_UNIT) / PIXELS_PER_UNIT
    const a = snap(p.dot(right))
    const b = snap(p.dot(up))
    const c = p.dot(fwd)
    cam.position.copy(right.multiplyScalar(a)).add(up.multiplyScalar(b)).add(fwd.multiplyScalar(c))
    cam.updateMatrixWorld()
  }

  private toScreen(x: number, y: number, z: number): { x: number; y: number } {
    const v = this.tmp.set(x, y, z).project(this.camera)
    const { iw, ih, scale, left, top } = this.size
    return {
      x: left + Math.round((v.x * 0.5 + 0.5) * iw) * scale,
      y: top + Math.round((1 - (v.y * 0.5 + 0.5)) * ih) * scale,
    }
  }

  // ---- sky ----

  /** Light the island from the sky, greyed by however hard it's raining */
  private applySky(base: SkyLight) {
    this.baseLight = base
    const rain = this.weather?.intensity ?? 0
    this.gradedAt = rain
    const light = rainGrade(base, rain)
    this.weather?.setSky(light)
    this.paintSky(light)
  }

  private paintSky(light: SkyLight) {
    this.sun.color.setHex(light.sun)
    this.sun.intensity = light.sunI * Math.PI
    this.shade.color.setHex(light.shade)
    this.shade.intensity = light.shadeI * Math.PI
    this.seaMat.color.setHex(light.seaDeep)
    this.shallowMat.color.setHex(light.sea)
    this.foamMat.color.setHex(light.foam)
    ;(this.glints?.material as THREE.MeshBasicMaterial | undefined)?.color.setHex(light.foam)
    this.renderer.setClearColor(light.seaDeep)
    this.runnerMat.color.setHex(light.sprite)
    const shadow = new THREE.Color(light.shade).multiplyScalar(0.42)
    ;(this.shadowMat.uniforms.uColor.value as THREE.Color).copy(shadow)
    ;(this.rectShadowMat.uniforms.uColor.value as THREE.Color).copy(shadow)
    this.lampsLit = light.lamps
    for (const st of this.stations) {
      for (const { mesh, part } of st.parts) if (part.duskOnly) mesh.visible = light.lamps
    }
    for (const lamp of this.lamps) lamp.visible = light.lamps
    for (const pool of this.glowPools) pool.uniforms.uDensity.value = light.lamps ? 0.34 : 0.16
    this.life?.setSky(light)
    this.paintWater(light)
  }

  /** Recolour the waterfall's three tones from the sky */
  private paintWater(light: SkyLight) {
    const deep = new THREE.Color(light.sea)
    const foam = new THREE.Color(light.foam)
    const tones = [deep, deep.clone().lerp(foam, 0.45), foam].map((c) => [c.r * 255, c.g * 255, c.b * 255])
    const data = this.waterTex.image.data as Uint8Array
    WATER_PATTERN.forEach((tone, i) => data.set([...tones[tone], 255], i * 4))
    this.waterTex.needsUpdate = true
  }

  // ---- input ----

  private onVisibility() {
    this.hidden = document.visibilityState === "hidden"
    if (this.hidden) {
      this.controls.release()
      this.stop()
    } else {
      this.wake()
    }
  }

  /** Slide the view by a drag of dx, dy CSS pixels (mouse, or a second finger) */
  private panBy(dx: number, dy: number) {
    const k = 1 / (this.size.scale * PIXELS_PER_UNIT)
    const { right, up } = this.axes
    const dRight = -dx * k
    const dUp = (dy * k) / Math.sin(PITCH)
    this.pan.x += right.x * dRight + up.x * dUp
    this.pan.z += right.z * dRight + up.z * dUp
    const len = Math.hypot(this.pan.x, this.pan.z)
    if (len > 24) this.pan.multiplyScalar(24 / len)
  }

  /**
   * A click or a tap: act on what's there (a Landmark opens, a cow moos),
   * or run him to the spot if he can stand there. A tap also shows the
   * caption of what it touched, since a finger can't hover.
   */
  private actAt(clientX: number, clientY: number, tap: boolean) {
    if (tap) {
      this.pointer = { x: clientX, y: clientY }
      this.lastCaption = null
    }
    this.hoverNow()
    if (tap) this.pointer = null
    if (this.hovered?.click) {
      this.hovered.click()
      return
    }
    const p = this.groundAt(clientX, clientY)
    if (p && walkable(p.x, p.z)) {
      this.goal = p
      this.goalMarker.position.set(p.x, 0, p.z)
    }
  }

  /** The Landmark the Gel trail leads to, if it's still laid */
  get trailLeadsTo(): string | null {
    return this.trail?.leadsTo ?? null
  }

  /** The dog is running with him */
  get dogWithYou(): boolean {
    return !!this.dog?.isFollowing
  }

  /** A jump asked for by a touch button */
  jump() {
    this.controls.jump()
  }

  /** Look around with a stick, as a drag would */
  private lookBy(x: number, y: number, dt: number) {
    const { right, up } = this.axes
    this.pan.x += (right.x * x - up.x * y) * 14 * dt
    this.pan.z += (right.z * x - up.z * y) * 14 * dt
    const len = Math.hypot(this.pan.x, this.pan.z)
    if (len > 24) this.pan.multiplyScalar(24 / len)
  }

  /** Step to the next zoom, wrapping round (a touch button) */
  cycleZoom() {
    this.setZoom((this.zoom + 1) % ZOOM_ROWS.length)
  }

  /** Step the whole-pixel zoom, and remember it */
  setZoom(level: number) {
    if (level === this.zoom) return
    this.zoom = level
    try {
      localStorage.setItem(ZOOM_KEY, String(level))
    } catch {
      /* storage unavailable */
    }
    this.resize()
  }

  private ndc(clientX: number, clientY: number): THREE.Vector2 {
    const rect = this.canvas.getBoundingClientRect()
    return new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1)
  }

  /** The point on the ground under a screen position */
  private groundAt(clientX: number, clientY: number): Vec2 | null {
    this.raycaster.setFromCamera(this.ndc(clientX, clientY), this.camera)
    const hit = this.raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), new THREE.Vector3())
    return hit ? { x: hit.x, z: hit.z } : null
  }

  /** Find what the pointer is over, and tell the interface its caption */
  private hoverNow() {
    this.hoverDirty = false
    this.hoverAt = performance.now()
    let found: (typeof this.pointables)[number] | null = null
    if (this.pointer && this.inputEnabled) {
      this.raycaster.setFromCamera(this.ndc(this.pointer.x, this.pointer.y), this.camera)
      const hits = this.raycaster.intersectObjects(
        this.pointables.map((p) => p.obj),
        true
      )
      for (const hit of hits) {
        // decals are drawn dithered and flat: never what he points at
        const m = (hit.object as THREE.Mesh).material
        if (m instanceof THREE.ShaderMaterial && "uDensity" in m.uniforms) continue
        if (!hit.object.visible) continue
        let o: THREE.Object3D | null = hit.object
        while (o && !found) {
          found = this.pointables.find((p) => p.obj === o) ?? null
          o = o.parent
        }
        if (found) break
      }
    }
    this.hovered = found
    const caption = found ? found.caption() : null
    this.canvas.style.cursor = found?.click ? "pointer" : ""
    if (caption !== this.lastCaption) {
      this.lastCaption = caption
      this.cb.onHover(caption)
    }
  }

  private onContextLost(e: Event) {
    e.preventDefault()
    this.paused = true
    this.stop()
    this.cb.onContextLost()
  }

  // ---- loop ----

  private wake() {
    if (this.running || this.paused || this.hidden) return
    this.running = true
    this.last = performance.now()
    this.raf = requestAnimationFrame(this.tick)
  }

  private stop() {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  /** Rain: advance it, grey the light as it comes, splash the ground */
  private updateWeather(dt: number, now: number) {
    const w = this.weather
    if (!w) return
    const splashes = w.update(dt, now / 1000, { x: this.focus.x, z: this.focus.z })
    if (Math.abs(w.intensity - this.gradedAt) > 0.01 || (w.intensity === 0 && this.gradedAt > 0)) this.applySky(this.baseLight)
    for (const s of splashes) {
      // a two-pixel crown that's gone in a blink
      for (const side of [-1, 1]) {
        this.life?.particles.spawn({ x: s.x, y: 0.01, z: s.z, vx: side * 0.5, vy: 0.9, vz: 0, max: 0.16, size: 1 / 16, gravity: 6, color: 0xe4ecf8 })
      }
    }
    const rain = Math.round(w.intensity * 20) / 20
    if (rain !== this.lastRain) {
      this.lastRain = rain
      this.cb.onRain(rain)
    }
  }

  /** CLEAR, RAIN, or AUTO's occasional showers */
  setWeather(mode: WeatherMode) {
    this.weather?.setMode(mode, performance.now() / 1000)
  }

  /** Time the Lap; report it to the HUD at most every tenth of a second */
  private updateLap(dt: number) {
    const r = this.runner
    const finished = this.lap.update(dt, r.x, r.z, this.inputEnabled)
    const report: LapReport = {
      running: this.lap.running,
      time: Math.floor(this.lap.time * 10) / 10,
      best: this.lap.best,
      finished,
    }
    const key = `${report.running}|${report.time}|${report.best}`
    if (finished || key !== this.lastLapReport) {
      this.lastLapReport = key
      this.cb.onLap(report)
    }
  }

  /** The Ghost retraces the best Lap at the same time into the Lap */
  private updateGhost(now: number) {
    const g = this.lap.running ? this.lap.ghostAt(this.lap.time) : null
    this.ghostMesh.visible = !!g
    if (!g) return
    // which way it runs on screen, whatever the camera's angle
    const sx = g.dx * this.axes.right.x + g.dz * this.axes.right.z
    const sy = g.dx * this.axes.up.x + g.dz * this.axes.up.z
    const facing: Facing = Math.abs(sx) >= Math.abs(sy) * 0.8 ? (sx >= 0 ? "right" : "left") : sy > 0 ? "up" : "down"
    const moving = Math.hypot(g.dx, g.dz) > 0.02
    const pose: Pose = !moving ? "stand" : this.reduceMotion ? "a" : Math.floor(now / 130) % 2 ? "a" : "b"
    const col = FACING_SET[facing] * POSES.length + POSES.indexOf(pose)
    this.ghostTex.offset.set(col / FRAME_COLS, 0.5)
    const pos = this.snapToPixels(g.x, g.z)
    this.ghostMesh.position.set(pos.x, 0, pos.z)
    this.ghostMesh.scale.x = facing === "left" ? -1 : 1
    this.ghostMesh.rotation.y = this.runnerMesh.rotation.y
  }

  private tellOnce(kind: "pier" | "stones" | "honk" | "watch" | "banana") {
    if (this.told.has(kind)) return
    this.told.add(kind)
    this.cb.onEvent({ kind })
  }

  /** The secret banana, on the north-east beach behind the palms */
  private buildBanana() {
    const at = islandPoint(-0.62, 0.935)
    const group = new THREE.Group()
    const boxes = [0, 1, 2].flatMap((i) => [
      { x: -0.12 + i * 0.09, y: 0.02, z: -0.16, w: 0.08, h: 0.08, d: 0.32, color: 0xffd84a },
      { x: -0.12 + i * 0.09, y: 0.08, z: -0.22, w: 0.08, h: 0.08, d: 0.08, color: 0xffd84a },
      { x: -0.12 + i * 0.09, y: 0.08, z: 0.14, w: 0.08, h: 0.08, d: 0.08, color: 0xffd84a },
    ])
    boxes.push({ x: -0.12, y: 0.12, z: -0.27, w: 0.26, h: 0.06, d: 0.06, color: 0x6b4a2e })
    group.add(new THREE.Mesh(boxesGeometry(boxes), this.occluderMat))
    const glint = new THREE.Mesh(boxesGeometry([{ x: 0.12, y: 0.22, z: 0, w: 2 / 16, h: 0.1, d: 0.02, color: 0xfff4e3 }]), this.glowMat)
    group.add(glint)
    const shadow = new THREE.Mesh(this.flatDisc(), this.shadowMat)
    shadow.scale.set(0.6, 1, 0.4)
    group.add(shadow)
    group.position.set(at.x, 0, at.z)
    this.scene.add(group)
    this.banana = group
    this.point(group, "A BANANA?!")
  }

  /** Found already on an earlier visit: leave the beach empty */
  hideBanana() {
    if (this.banana) this.banana.visible = false
    this.told.add("banana")
  }

  private updateBanana(now: number) {
    const b = this.banana
    const r = this.runner
    if (!b || !b.visible || !r) return
    if (!this.reduceMotion) {
      b.children[0].position.y = Math.floor(now / 600) % 2 ? 1 / 16 : 0
      b.children[1].visible = Math.floor(now / 250) % 8 === 0
    }
    if (Math.hypot(r.x - b.position.x, r.z - b.position.z) < 0.75) {
      b.visible = false
      this.cb.onSfx("cup")
      this.tellOnce("banana")
    }
  }

  /** Dress the Runner in a Kit: his singlet's two colours */
  setKit(top: string, bottom: string) {
    this.kit = { top, bottom }
    const canvas = this.runnerTex.image as HTMLCanvasElement
    drawRunnerAtlas(canvas, this.kit)
    this.runnerTex.needsUpdate = true
    this.ghostTex.needsUpdate = true
    if (!this.running) this.renderOnce()
  }

  /** Play a sound only if its source is on screen, more or less */
  private sfxAt(name: OverworldSfx, at: Vec2) {
    if (Math.abs(at.x - this.focus.x) < 14 && Math.abs(at.z - this.focus.z) < 12) this.cb.onSfx(name)
  }

  private nearest(): LandmarkPlacement {
    let best = this.landmarks[0]
    let bestD = Infinity
    for (const l of this.landmarks) {
      const d = Math.hypot(l.door.x - this.runner.x, l.door.z - this.runner.z)
      if (d < bestD) {
        bestD = d
        best = l
      }
    }
    return best
  }

  private tick(now: number) {
    if (!this.running) return
    const dt = Math.min((now - this.last) / 1000, 1 / 30)
    const frameMs = now - this.last
    this.last = now

    for (const car of this.cars) this.moveCar(car, dt)

    // input -> movement, in fixed steps
    const intent = { ...this.controls.steer(dt), jump: false }
    // a clicked spot steers him until he gets there, a key takes over, or
    // he's stuck against something
    if (intent.x || intent.y || !this.inputEnabled || this.stuck.on) this.goal = null
    if (this.goal) {
      const dx = this.goal.x - this.runner.x
      const dz = this.goal.z - this.runner.z
      const d = Math.hypot(dx, dz)
      if (d < 0.3) this.goal = null
      else {
        intent.x = (dx * this.axes.right.x + dz * this.axes.right.z) / d
        intent.y = (dx * this.axes.up.x + dz * this.axes.up.z) / d
      }
    }
    this.goalMarker.visible = !!this.goal
    if (this.goal) {
      const s = this.reduceMotion || Math.floor(now / 300) % 2 ? 0.9 : 0.7
      this.goalMarker.scale.set(s, 1, s * 0.75)
    }
    if (this.hoverDirty && now - this.hoverAt > 60) this.hoverNow()
    this.acc += dt
    this.jumped = this.landed = false
    while (this.acc >= STEP) {
      intent.jump = this.controls.takeJump()
      const wasAirborne = this.runner.airborne
      this.runner = stepRunner(this.runner, intent, STEP, this.axes, this.solids, walkable)
      if (this.runner.airborne && !wasAirborne) {
        this.jumped = true
        this.cb.onJump()
      }
      if (!this.runner.airborne && wasAirborne) this.landed = true
      this.acc -= STEP
    }
    const r = this.runner
    if (r.moving && !this.moved) {
      this.moved = true
      this.cb.onMoved()
    }

    this.updateStuck(dt, r.moving)
    this.updateLap(dt)

    // camera: glide after the Runner; moving brings a panned view home
    if (r.moving) this.pan.multiplyScalar(Math.exp(-dt * 6))
    const tx = r.x + this.pan.x + this.axes.up.x * LOOK_AHEAD
    const tz = r.z + this.pan.z + this.axes.up.z * LOOK_AHEAD
    const k = 1 - Math.exp(-dt * 8)
    this.focus.x += (tx - this.focus.x) * k
    this.focus.z += (tz - this.focus.z) * k
    this.focus.x = Math.max(-ISLAND_RX, Math.min(ISLAND_RX, this.focus.x))
    this.focus.z = Math.max(-ISLAND_RZ, Math.min(ISLAND_RZ, this.focus.z))
    this.placeCamera()

    this.animate(dt, now)

    if (this.cycle) {
      const progress = (now - this.cycle.start) / this.cycleMs
      this.applySky(cycleLight(this.cycle.kind, progress, this.cycleMid))
    }
    this.updateWeather(dt, now)

    this.render()
    this.report(dt, frameMs, now)
    this.raf = requestAnimationFrame(this.tick)
  }

  private updateStuck(dt: number, moving: boolean) {
    const s = this.stuck
    const r = this.runner
    if (!moving) {
      s.timer = 0
      s.origin = { x: r.x, z: r.z }
      if (s.on) {
        s.on = false
        this.cb.onStuck(false)
      }
      return
    }
    s.timer += dt
    const travelled = Math.hypot(r.x - s.origin.x, r.z - s.origin.z)
    if (travelled > 0.6) {
      s.timer = 0
      s.origin = { x: r.x, z: r.z }
      if (s.on) {
        s.on = false
        this.cb.onStuck(false)
      }
    } else if (s.timer > 1.6 && !s.on) {
      s.on = true
      this.cb.onStuck(true)
    }
  }

  private animate(dt: number, now: number) {
    const r = this.runner
    const speed = Math.hypot(r.vx, r.vz)
    this.animClock += dt

    // which frame of the sheet; standing a while, he checks his watch
    if (r.moving || r.airborne || speed > 0.4) this.stillSince = now
    const idle = (now - this.stillSince) / 1000
    let pose: Pose = idle > 4 && (idle - 4) % 7 < 1.8 ? "watch" : "stand"
    // every watch check counts toward SPLIT CHECK, not just the first
    if (pose === "watch" && !this.checkingWatch) this.cb.onEvent({ kind: "watch" })
    this.checkingWatch = pose === "watch"
    if (r.airborne) pose = "jump"
    else if (speed > 0.4) {
      if (this.reduceMotion) pose = "a"
      else {
        const period = r.sprinting ? 0.11 : 0.15
        pose = Math.floor(this.animClock / period) % 2 === 0 ? "a" : "b"
      }
    }
    const col = FACING_SET[r.facing] * POSES.length + POSES.indexOf(pose)
    this.runnerTex.offset.set(col / FRAME_COLS, this.lampsLit ? 0 : 0.5)
    // a footfall on every stride, even when the sprite holds still
    const stride = Math.floor(this.animClock / (r.sprinting ? 0.11 : 0.15))
    if (stride !== this.stridePhase) {
      this.stridePhase = stride
      if (!r.airborne && speed > 0.4 && dt > 0) {
        const ground = inPier(r.x, r.z, -0.25) ? "wood" : surfaceAt(r.x, r.z)
        const wet = (this.weather?.wetness ?? 0) > 0.5 && (ground === "road" || ground === "grass")
        this.cb.onStep(wet ? "puddle" : ground)
      }
    }

    // the sprite sits on whole screen pixels, mirrored for left
    const hop = Math.round(r.h * Math.cos(PITCH) * PIXELS_PER_UNIT) / (Math.cos(PITCH) * PIXELS_PER_UNIT)
    const pos = this.snapToPixels(r.x, r.z)
    this.runnerMesh.position.set(pos.x, hop, pos.z)
    this.runnerMesh.scale.x = r.facing === "left" ? -1 : 1
    const shrink = 1 - Math.min(r.h / 1.5, 0.4)
    this.runnerShadow.position.set(pos.x, 0, pos.z)
    this.runnerShadow.scale.set(0.95 * shrink, 1, 0.5 * shrink)
    // the headlamp's beam on the ground, the way he faces
    this.lampPool.visible = this.lampsLit
    const beam = LAMP_ANGLE[r.facing] + (this.look.yaw * Math.PI) / 180
    this.lampPool.position.set(pos.x + Math.cos(beam) * 1.75, 0, pos.z - Math.sin(beam) * 1.75)
    this.lampPool.rotation.y = beam

    this.stirStations(dt, now, false)
    this.life?.update({
      dt,
      t: now / 1000,
      runner: r,
      jumped: this.jumped,
      landed: this.landed,
      lit: this.lampsLit,
      focus: { x: this.focus.x, z: this.focus.z },
      rain: this.weather?.intensity ?? 0,
      wet: this.weather?.wetness ?? 0,
    })
    this.dog?.update(dt, now / 1000, r, this.jumped)
    this.trail?.update(now / 1000, r)
    this.jumped = this.landed = false
    this.updateGhost(now)
    if (this.questRoad && r) {
      const { year, rising } = this.questRoad.update(now / 1000, r.x, r.z)
      for (const at of rising) {
        this.sfxAt("stone", at)
        if (!this.reduceMotion) {
          for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2
            this.life?.particles.spawn({ x: at.x + Math.cos(a) * 0.5, y: 0.05, z: at.z + Math.sin(a) * 0.3, vx: Math.cos(a) * 1.2, vy: 1, vz: Math.sin(a) * 0.6, max: 0.6, size: 0.125, gravity: 2, color: 0xc9b98f })
          }
        }
      }
      if (year !== this.lastYear) {
        this.lastYear = year
        this.cb.onYear(year)
      }
      if (rising.length && this.questRoad.allRisen()) this.tellOnce("stones")
    }
    if (r && r.z > PIER.z1 - 1 && Math.abs(r.x - PIER.x) < PIER.halfWidth) this.tellOnce("pier")
    this.updateBanana(now)
    if (this.reduceMotion) return
    // the waterfall falls a texel at a time
    this.waterTex.offset.y = -Math.floor(now / 85) / WATER_SIZE
    // wind, the wave's wash, the moored boat, glints on the sea
    this.swayTime.value = now / 1000
    if (this.wash) this.wash.visible = Math.floor(now / 850) % 3 === 0
    if (this.boat) this.boat.position.y = -0.42 + (Math.floor(now / 760) % 2 ? 1 / 16 : 0)
    this.updateGlints(now / 1000)
  }

  /**
   * Wake each Landmark as the Runner nears its door and let it stir: its
   * parts move and its screens redraw, but only near the camera. Under
   * reduced motion every Landmark stays awake and still, and only the
   * screens' readouts (the race clock) change.
   */
  private stirStations(dt: number, now: number, first: boolean) {
    const r = this.runner
    const t = this.reduceMotion ? 0 : now / 1000
    const elapsed = (now - this.openedAt) / 1000
    for (const st of this.stations) {
      if (!this.reduceMotion && r) {
        const near = Math.hypot(st.door.x - r.x, st.door.z - r.z) < WAKE_REACH ? 1 : 0
        const step = dt * 1.6
        st.wake = near > st.wake ? Math.min(near, st.wake + step) : Math.max(near, st.wake - step)
      }
      const inView = Math.abs(st.centre.x - this.focus.x) < 18 && Math.abs(st.centre.z - this.focus.z) < 16
      if (!first && !inView) continue
      const since = st.zoneId === "skills" && this.life ? this.life.sinceCup(now / 1000) : Infinity
      const clock: PartClock = {
        t,
        wake: st.wake,
        lit: this.lampsLit,
        elapsed,
        still: this.reduceMotion,
        since,
        lap: this.lap.running ? this.lap.time : null,
        best: this.lap.best,
      }
      if (first || !this.reduceMotion) {
        for (const { mesh, part } of st.parts) {
          if (part.duskOnly) mesh.visible = this.lampsLit
          part.animate?.(mesh, clock)
        }
      }
      for (const sc of st.screens) {
        if (!first && now - sc.drawnAt < 1000 / sc.screen.fps) continue
        sc.drawnAt = now
        sc.screen.draw(sc.g, clock)
        sc.tex.needsUpdate = true
      }
    }
  }

  /** Nudge a ground point so it lands on a whole screen pixel */
  private snapToPixels(x: number, z: number): Vec2 {
    const cam = this.camera
    const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0)
    const up = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1)
    const p = new THREE.Vector3(x, 0, z)
    const a = p.dot(right)
    const b = p.dot(up)
    const da = Math.round(a * PIXELS_PER_UNIT) / PIXELS_PER_UNIT - a
    const db = Math.round(b * PIXELS_PER_UNIT) / PIXELS_PER_UNIT - b
    // moving along the ground by db / sin(pitch) moves the screen by db
    const upGround = this.axes.up
    const g = db / Math.sin(PITCH)
    return {
      x: x + right.x * da + upGround.x * g,
      z: z + right.z * da + upGround.z * g,
    }
  }

  private render() {
    // the see-through circle follows the Runner's chest
    const r = this.runner
    const v = this.tmp.set(this.runnerMesh.position.x, 0.6 + r.h, this.runnerMesh.position.z).project(this.camera)
    const { iw, ih } = this.size
    this.seeThrough.value.set((v.x * 0.5 + 0.5) * iw, (v.y * 0.5 + 0.5) * ih, SEE_THROUGH_RADIUS, v.z * 0.5 + 0.5)
    this.renderer.render(this.scene, this.camera)
    this.weather?.render(this.renderer)
  }

  private renderOnce() {
    this.placeCamera()
    this.animate(0, performance.now())
    this.render()
    this.report(0, 0, performance.now())
  }

  private report(dt: number, frameMs: number, now: number) {
    const near = this.nearest()
    const r = this.runner
    const doorD = near ? Math.hypot(near.door.x - r.x, near.door.z - r.z) : Infinity
    const prompt = doorD < DOOR_REACH && !r.airborne ? near.zoneId : null
    if (prompt !== this.lastPrompt) {
      this.lastPrompt = prompt
      if (prompt) this.trail?.visit(prompt)
      this.cb.onPrompt(prompt)
    }
    if (near && near.zoneId !== this.lastNearest) {
      this.lastNearest = near.zoneId
      this.cb.onNearest(near.zoneId)
    }

    const speed = Math.hypot(r.vx, r.vz)
    this.paceSpeed += (speed - this.paceSpeed) * Math.min(1, dt * 5)
    const pace = r.moving ? formatPace(this.paceSpeed) : null
    if (pace !== this.lastPace) {
      this.lastPace = pace
      this.cb.onPace(pace)
    }

    const labels = this.labelAnchors.map(({ zoneId, pos }) => {
      const s = this.toScreen(pos.x, pos.y, pos.z)
      const onScreen = s.x > 0 && s.y > 0 && s.x < this.host.clientWidth && s.y < this.host.clientHeight
      return { zoneId, x: s.x, y: s.y, onScreen }
    })
    this.cb.onFrame({ labels, runner: this.runnerOnScreen(), world: { x: r.x, z: r.z }, speed: Math.hypot(r.vx, r.vz) })
    const waves = inPier(r.x, r.z) ? 1 : Math.max(0, Math.min(1, (islandReach(r.x, r.z) - 0.62) / 0.33))
    if (Math.abs(waves - this.lastWaves) > 0.04) {
      this.lastWaves = waves
      this.cb.onAmbience(waves)
    }

    if (frameMs > 0) {
      this.frameTimes.push(frameMs)
      if (this.frameTimes.length > 120) this.frameTimes.shift()
      if (now - this.frameTimeAt > 500) {
        this.frameTimeAt = now
        this.cb.onFrameTime(this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length)
      }
    }
  }
}
