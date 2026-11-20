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
  HEADLAMP_LIT,
  HEADLAMP_LIT_FRONT,
  RUNNER_BACK_A,
  RUNNER_BACK_B,
  RUNNER_BACK_JUMP,
  RUNNER_BACK_SHARED,
  RUNNER_BACK_STANDING,
  RUNNER_FRAME_A,
  RUNNER_FRAME_B,
  RUNNER_FRONT_A,
  RUNNER_FRONT_B,
  RUNNER_FRONT_JUMP,
  RUNNER_FRONT_SHARED,
  RUNNER_FRONT_STANDING,
  RUNNER_JUMP,
  RUNNER_SHARED,
  RUNNER_STANDING,
  type Px,
} from "../../sprites"
import {
  buildSolids,
  CAMERA_PITCH,
  DOOR_REACH,
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
  CAR_COLORS,
  carBoxes,
  carLampBoxes,
  coastWaterShapes,
  cowBodyBoxes,
  cowHeadBoxes,
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
import { landmarkModel, type LandmarkPart, type LandmarkScreen, type PartClock, PY as SCREEN_PY } from "./landmarks"
import { cycleLight, type Sky, type SkyCycle, SKIES, type SkyLight } from "./sky"
import { boxesGeometry, cellsGeometry } from "./voxels"

// Palette colours go to the screen exactly as written: no colour
// management between the hex codes and the framebuffer.
THREE.ColorManagement.enabled = false

export interface Look {
  /** 0: straight-on three-quarter view; 45: diamond */
  yaw: 0 | 45
  lens: "ortho" | "perspective"
  /** internal rows before the pixel upscale */
  rows: 180 | 270
  tones: 2 | 3
}

export const DEFAULT_LOOK: Look = { yaw: 0, lens: "ortho", rows: 180, tones: 2 }

export interface LabelPosition {
  zoneId: string
  /** where its label hangs, in CSS pixels of the host; may be off screen */
  x: number
  y: number
  onScreen: boolean
}

export interface FrameReport {
  labels: LabelPosition[]
  /** the Runner's chest, in CSS pixels of the host */
  runner: { x: number; y: number }
}

export interface OverworldCallbacks {
  /** the Landmark whose door the Runner is at, or null */
  onPrompt: (zoneId: string | null) => void
  /** the Landmark nearest the Runner, wherever he is */
  onNearest: (zoneId: string) => void
  onPace: (pace: string | null) => void
  onStuck: (stuck: boolean) => void
  onRespawn: () => void
  onMoved: () => void
  onJump: () => void
  onFrame: (report: FrameReport) => void
  onFrameTime: (ms: number) => void
  onContextLost: () => void
}

interface Options {
  zoneIds: string[]
  look: Look
  reduceMotion: boolean
  sky: Sky
}

const PIXELS_PER_UNIT = 16
const PITCH = CAMERA_PITCH
const CAMERA_DISTANCE = 60
const STEP = 1 / 120
const SPRITE_H = 1.25 / Math.cos(PITCH) // a vertical 20-pixel sprite, foreshortened back to 20 pixels
const SEE_THROUGH_RADIUS = 20 // internal pixels
/** How near the Runner must be to a Landmark's door to wake it */
const WAKE_REACH = 7
// The camera looks this far ahead of the Runner (up the screen), so he
// runs in the lower half and the Landmarks he faces fit above him
const LOOK_AHEAD = 2.4

// The sprite sheet: one row per headlamp state, and for each facing (side,
// front, back) the same run of poses
const POSES = ["stand", "a", "b", "jump"] as const
type Pose = (typeof POSES)[number]
const FRAME_COLS = 3 * POSES.length
const FACING_SET: Record<Facing, number> = { right: 0, left: 0, down: 1, up: 2 }

function drawRunnerAtlas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas")
  canvas.width = 16 * FRAME_COLS
  canvas.height = 40
  const g = canvas.getContext("2d")!
  const sets: Array<{ shared: Px[]; lamp: Px[]; poses: Record<Pose, Px[]> }> = [
    {
      shared: RUNNER_SHARED,
      lamp: HEADLAMP_LIT,
      poses: { stand: RUNNER_STANDING, a: RUNNER_FRAME_A, b: RUNNER_FRAME_B, jump: RUNNER_JUMP },
    },
    {
      shared: RUNNER_FRONT_SHARED,
      lamp: HEADLAMP_LIT_FRONT,
      poses: { stand: RUNNER_FRONT_STANDING, a: RUNNER_FRONT_A, b: RUNNER_FRONT_B, jump: RUNNER_FRONT_JUMP },
    },
    {
      shared: RUNNER_BACK_SHARED,
      lamp: [],
      poses: { stand: RUNNER_BACK_STANDING, a: RUNNER_BACK_A, b: RUNNER_BACK_B, jump: RUNNER_BACK_JUMP },
    },
  ]
  for (let lit = 0; lit < 2; lit++) {
    sets.forEach(({ shared, lamp, poses }, set) => {
      POSES.forEach((name, k) => {
        const pose = poses[name]
        const ox = (set * POSES.length + k) * 16
        const oy = lit * 20
        for (const [x, y, w, h, fill] of [...shared, ...pose, ...(lit ? lamp : [])]) {
          g.fillStyle = fill
          g.fillRect(ox + x, oy + y, w, h)
        }
      })
    })
  }
  return canvas
}

function gradientTexture(tones: 2 | 3): THREE.DataTexture {
  const values = tones === 2 ? [0, 255] : [0, 128, 255]
  const data = new Uint8Array(values.length * 4)
  values.forEach((v, i) => data.set([v, v, v, 255], i * 4))
  const tex = new THREE.DataTexture(data, values.length, 1, THREE.RGBAFormat)
  tex.minFilter = THREE.NearestFilter
  tex.magFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.needsUpdate = true
  return tex
}

// Decals: dithered shapes lying on the ground, in one colour, so they stay
// on the palette. A blob shadow is a disc at half density; a pool of lamp
// light thins toward its rim through a 4x4 ordered dither. A cone opens
// along the decal's +x, from its lamp at u = 0; a rect fills its square.
const DECAL_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * p;
  }
`
const DECAL_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uDensity;
  uniform float uShape;
  uniform float uFalloff;
  varying vec2 vUv;
  const float BAYER[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  void main() {
    vec2 d = vUv - 0.5;
    float r;
    if (uShape > 1.5) {
      r = max(abs(d.x), abs(d.y)) * 2.0;
    } else if (uShape > 0.5) {
      float hw = 0.12 + 0.38 * vUv.x;
      if (abs(d.y) > hw) discard;
      r = max(abs(d.y) / hw * 0.55, vUv.x);
    } else {
      r = length(d) * 2.0;
    }
    if (r > 1.0) discard;
    ivec2 q = ivec2(mod(floor(gl_FragCoord.xy), 4.0));
    float threshold = (BAYER[q.x + q.y * 4] + 0.5) / 16.0;
    if (threshold > uDensity * mix(1.0, 1.0 - r * r, uFalloff)) discard;
    gl_FragColor = vec4(uColor, 1.0);
  }
`

const DECAL_SHAPES = { disc: 0, cone: 1, rect: 2 } as const

function decalMaterial(color: number, density: number, opts: { shape?: keyof typeof DECAL_SHAPES; falloff?: boolean } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uDensity: { value: density },
      uShape: { value: DECAL_SHAPES[opts.shape ?? "disc"] },
      uFalloff: { value: opts.falloff ? 1 : 0 },
    },
    vertexShader: DECAL_VERTEX,
    fragmentShader: DECAL_FRAGMENT,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  })
}

// Glow: boxes drawn in their own colours, untouched by the sky's light
// (lamps, the save crystal), with a fixed step of shade per face so their
// shape still reads. uBoost pulses them.
const GLOW_VERTEX = /* glsl */ `
  varying vec3 vColor;
  varying float vShade;
  void main() {
    vColor = color;
    vec3 n = normalize(mat3(modelMatrix) * normal);
    vShade = n.y > 0.5 ? 1.0 : (n.z > 0.5 ? 0.9 : 0.78);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const GLOW_FRAGMENT = /* glsl */ `
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShade;
  void main() {
    gl_FragColor = vec4(min(vColor * vShade * uBoost, vec3(1.0)), 1.0);
  }
`

function glowMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uBoost: { value: 1 } },
    vertexShader: GLOW_VERTEX,
    fragmentShader: GLOW_FRAGMENT,
    vertexColors: true,
  })
}

// The waterfall's texture: 12 x 12 texels of three tones (deep, mid, foam)
// in streaks, recoloured whenever the sky changes
const WATER_SIZE = 12
const WATER_PATTERN: Uint8Array = (() => {
  const p = new Uint8Array(WATER_SIZE * WATER_SIZE)
  let seed = 7
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const streak = (u: number, tone: number, min: number, max: number) => {
    const start = Math.floor(rand() * WATER_SIZE)
    const length = min + Math.floor(rand() * (max - min + 1))
    for (let v = 0; v < length; v++) p[((start + v) % WATER_SIZE) * WATER_SIZE + u] = tone
  }
  for (let u = 0; u < WATER_SIZE; u++) {
    const edge = u === 0 || u === WATER_SIZE - 1
    // the edges churn white; the body is deep water with long pale streaks
    // and a short fleck of foam here and there
    for (let v = 0; v < WATER_SIZE; v++) p[v * WATER_SIZE + u] = edge ? 2 : 0
    if (edge) {
      streak(u, 1, 2, 4)
      continue
    }
    if (u % 3 !== 1) streak(u, 1, 3, 7)
    if (rand() < 0.45) streak(u, 2, 1, 2)
  }
  return p
})()

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
    door: Vec2
    centre: Vec2
    wake: number
    parts: Array<{ mesh: THREE.Mesh; part: LandmarkPart }>
    screens: Array<{ screen: LandmarkScreen; g: CanvasRenderingContext2D; tex: THREE.CanvasTexture; drawnAt: number }>
  }> = []
  private readonly openedAt = performance.now()
  private readonly cowHeads: Array<{ head: THREE.Object3D; phase: number }> = []
  /** Oncoming Traffic: cars lapping the other way, stopping for the Runner */
  private readonly cars: Array<{ group: THREE.Group; s: number; speed: number; solids: Array<Solid & { kind: "circle" }> }> = []
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

  // camera rig
  private readonly focus = new THREE.Vector3()
  private readonly pan = new THREE.Vector3()
  private axes = { right: { x: 1, z: 0 }, up: { x: 0, z: -1 } }
  private size = { iw: 320, ih: 180, scale: 1, left: 0, top: 0 }

  // input
  private readonly held = { up: false, down: false, left: false, right: false, sprint: false }
  private jumpQueued = false
  private inputEnabled = true
  private drag: { x: number; y: number } | null = null

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

    this.landmarks = placeLandmarks(options.zoneIds)
    this.scenery = scatterScenery(this.landmarks)
    this.solids = buildSolids(this.landmarks, this.scenery)
    this.buildWorld()

    const runnerGeo = new THREE.PlaneGeometry(1, SPRITE_H)
    runnerGeo.translate(0, SPRITE_H / 2, 0)
    this.runnerMesh = new THREE.Mesh(runnerGeo, this.runnerMat)
    this.runnerMesh.renderOrder = 2
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

    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onVisibility = this.onVisibility.bind(this)
    this.onPointerDown = this.onPointerDown.bind(this)
    this.onPointerMove = this.onPointerMove.bind(this)
    this.onPointerUp = this.onPointerUp.bind(this)
    this.onContextLost = this.onContextLost.bind(this)
    this.tick = this.tick.bind(this)
    window.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("keyup", this.onKeyUp)
    window.addEventListener("blur", this.onBlur)
    document.addEventListener("visibilitychange", this.onVisibility)
    this.canvas.addEventListener("pointerdown", this.onPointerDown)
    window.addEventListener("pointermove", this.onPointerMove)
    window.addEventListener("pointerup", this.onPointerUp)
    this.canvas.addEventListener("webglcontextlost", this.onContextLost)

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
    this.releaseKeys()
    this.stop()
  }

  setInputEnabled(enabled: boolean) {
    this.inputEnabled = enabled
    if (!enabled) this.releaseKeys()
  }

  /** Put the Runner at a Landmark's door, camera and all */
  placeAt(zoneId: string, facing: Facing = "down") {
    const l = this.landmarks.find((m) => m.zoneId === zoneId) ?? this.landmarks[0]
    if (!l) return
    this.runner = newRunner(l.door.x, l.door.z, facing)
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
      old.dispose()
    }
    this.camera = this.makeCamera()
    this.resize()
  }

  dispose() {
    this.stop()
    this.resizeObserver.disconnect()
    window.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("keyup", this.onKeyUp)
    window.removeEventListener("blur", this.onBlur)
    document.removeEventListener("visibilitychange", this.onVisibility)
    this.canvas.removeEventListener("pointerdown", this.onPointerDown)
    window.removeEventListener("pointermove", this.onPointerMove)
    window.removeEventListener("pointerup", this.onPointerUp)
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

  private add(geometry: THREE.BufferGeometry, material: THREE.Material, renderOrder = 0): THREE.Mesh {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.renderOrder = renderOrder
    mesh.matrixAutoUpdate = false
    mesh.updateMatrix()
    this.scene.add(mesh)
    return mesh
  }

  private instanced(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    items: Array<{ x: number; z: number; rot: number; scale: number }>,
    scaleXZ?: (s: number) => [number, number]
  ): THREE.InstancedMesh {
    const mesh = new THREE.InstancedMesh(geometry, material, Math.max(items.length, 1))
    mesh.count = items.length
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    items.forEach((it, i) => {
      q.setFromAxisAngle(up, it.rot)
      const [sx, sz] = scaleXZ ? scaleXZ(it.scale) : [it.scale, it.scale]
      m.compose(new THREE.Vector3(it.x, 0, it.z), q, new THREE.Vector3(sx, it.scale, sz))
      mesh.setMatrixAt(i, m)
    })
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
    this.scene.add(mesh)
    return mesh
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
    this.add(flat(water.pond, 0.008), this.shallowMat)
    const plunge = plungeShapes()
    this.add(flat(plunge.pool, 0.008), this.shallowMat)
    this.add(flat(plunge.foam, 0.01), this.foamMat)
    this.add(roadGeometry(), this.solidMat)
    this.add(mountainGeometry(), this.occluderMat)
    this.add(waterfallGeometry(), this.waterMat, 1)
    this.add(fenceGeometry(), this.solidMat)

    const s = this.scenery
    this.instanced(boxesGeometry(palmBoxes()), this.occluderMat, s.palms)
    this.instanced(this.flatDisc(), this.shadowMat, s.palms, (k) => [1.5 * k, 1.1 * k])
    for (let v = 0; v < 3; v++) {
      const rocks = s.rocks.filter((r) => r.variant === v)
      this.instanced(boxesGeometry(rockBoxes(v)), this.occluderMat, rocks)
    }
    for (let v = 0; v < 2; v++) {
      const patches = s.patches.filter((p) => p.variant % 2 === v)
      this.add(cellsGeometry(patchCells(patches, v), 0.006 + v * 0.0005), this.solidMat)
    }
    for (let v = 0; v < 2; v++) {
      const bushes = s.bushes.filter((b) => b.variant % 2 === v)
      this.instanced(boxesGeometry(bushBoxes(v)), this.occluderMat, bushes)
      this.instanced(this.flatDisc(), this.shadowMat, bushes, (k) => [1.4 * k, 1.0 * k])
    }
    this.instanced(boxesGeometry(tuftBoxes()), this.solidMat, s.tufts)
    for (let v = 0; v < 3; v++) {
      this.instanced(boxesGeometry(flowerBoxes(v)), this.solidMat, s.flowers.filter((f) => f.variant === v))
    }

    // the herd
    const bodies = [boxesGeometry(cowBodyBoxes(0)), boxesGeometry(cowBodyBoxes(1))]
    const heads = [boxesGeometry(cowHeadBoxes(0)), boxesGeometry(cowHeadBoxes(1))]
    s.cows.forEach((c, i) => {
      const group = new THREE.Group()
      group.position.set(c.x, 0, c.z)
      group.rotation.y = c.rot
      const body = new THREE.Mesh(bodies[c.variant], this.occluderMat)
      const head = new THREE.Mesh(heads[c.variant], this.occluderMat)
      head.position.set(0.68, 1.0, 0)
      head.rotation.z = -0.55 // grazing
      const shadow = new THREE.Mesh(this.flatDisc(), this.shadowMat)
      shadow.scale.set(2.0, 1, 1.1)
      group.add(body, head, shadow)
      this.scene.add(group)
      this.cowHeads.push({ head, phase: i * 1.7 })
    })

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
      group.add(lit, beam, tail)
      this.lamps.push(lit, beam, tail)
      this.scene.add(group)
      // two circles hugging the body, front and back: one round circle
      // reached out of the lane far enough to shove a Runner standing at
      // a door beside the road
      const solids = [0, 1].map(() => ({ kind: "circle" as const, x: 0, z: 0, r: 0.6 }))
      this.solids.push(...solids)
      const car = { group, s: at * LOOP_LENGTH, speed: 0, solids }
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
        mesh.position.set(sh.x, 0, sh.z)
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
    const blocked =
      !!r &&
      (Math.hypot(r.x - ahead.x, r.z - ahead.z) < 1.7 || Math.hypot(r.x - here.x, r.z - here.z) < 1.6)
    const target = blocked || this.reduceMotion ? 0 : CRUISE
    const rate = target < car.speed ? 14 : 3
    car.speed = target > car.speed ? Math.min(target, car.speed + rate * dt) : Math.max(target, car.speed - rate * dt)
    car.s = (car.s - car.speed * dt + LOOP_LENGTH) % LOOP_LENGTH
    const now = lanePoint(car.s)
    const snapped = this.camera ? this.snapToPixels(now.x, now.z) : now
    car.group.position.set(snapped.x, 0, snapped.z)
    // heading against the lap: the reverse of the road's tangent
    car.group.rotation.y = Math.atan2(now.p.tz, -now.p.tx)
    car.solids.forEach((c, i) => {
      const along = i === 0 ? 0.55 : -0.55
      c.x = now.x + now.p.tx * along
      c.z = now.z + now.p.tz * along
    })
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
    return this.look.lens === "ortho"
      ? new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400)
      : new THREE.PerspectiveCamera(30, 1, 1, 400)
  }

  private resize() {
    const w = Math.max(1, this.host.clientWidth)
    const h = Math.max(1, this.host.clientHeight)
    const scale = Math.max(1, Math.floor(h / this.look.rows))
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
    if (this.look.lens !== "ortho") return
    // Move the camera in whole screen pixels so nothing shimmers
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

  private applySky(light: SkyLight) {
    this.sun.color.setHex(light.sun)
    this.sun.intensity = light.sunI * Math.PI
    this.shade.color.setHex(light.shade)
    this.shade.intensity = light.shadeI * Math.PI
    this.seaMat.color.setHex(light.seaDeep)
    this.shallowMat.color.setHex(light.sea)
    this.foamMat.color.setHex(light.foam)
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

  private isTyping(e: KeyboardEvent): boolean {
    const t = e.target as HTMLElement | null
    return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)
  }

  private onKeyDown(e: KeyboardEvent) {
    if (!this.inputEnabled || this.isTyping(e) || e.metaKey || e.ctrlKey || e.altKey) return
    let handled = true
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        this.held.up = true
        break
      case "ArrowDown":
      case "KeyS":
        this.held.down = true
        break
      case "ArrowLeft":
      case "KeyA":
        this.held.left = true
        break
      case "ArrowRight":
      case "KeyD":
        this.held.right = true
        break
      case "ShiftLeft":
      case "ShiftRight":
        this.held.sprint = true
        break
      case "Space":
        if (!e.repeat) this.jumpQueued = true
        break
      case "KeyR":
        if (!e.repeat) this.cb.onRespawn()
        break
      default:
        handled = false
    }
    if (handled) e.preventDefault()
  }

  private onKeyUp(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        this.held.up = false
        break
      case "ArrowDown":
      case "KeyS":
        this.held.down = false
        break
      case "ArrowLeft":
      case "KeyA":
        this.held.left = false
        break
      case "ArrowRight":
      case "KeyD":
        this.held.right = false
        break
      case "ShiftLeft":
      case "ShiftRight":
        this.held.sprint = false
        break
    }
  }

  private releaseKeys() {
    this.held.up = this.held.down = this.held.left = this.held.right = this.held.sprint = false
    this.jumpQueued = false
    this.drag = null
  }

  private onBlur() {
    this.releaseKeys()
  }

  private onVisibility() {
    this.hidden = document.visibilityState === "hidden"
    if (this.hidden) {
      this.releaseKeys()
      this.stop()
    } else {
      this.wake()
    }
  }

  // Look around: drag the view; any movement key glides it home
  private onPointerDown(e: PointerEvent) {
    if (e.button !== 0 || !this.inputEnabled) return
    this.drag = { x: e.clientX, y: e.clientY }
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.drag) return
    const dx = e.clientX - this.drag.x
    const dy = e.clientY - this.drag.y
    this.drag = { x: e.clientX, y: e.clientY }
    const k = 1 / (this.size.scale * PIXELS_PER_UNIT)
    const { right, up } = this.axes
    const dRight = -dx * k
    const dUp = (dy * k) / Math.sin(PITCH)
    this.pan.x += right.x * dRight + up.x * dUp
    this.pan.z += right.z * dRight + up.z * dUp
    const len = Math.hypot(this.pan.x, this.pan.z)
    if (len > 24) this.pan.multiplyScalar(24 / len)
  }

  private onPointerUp() {
    this.drag = null
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
    const intent = {
      x: (this.held.right ? 1 : 0) - (this.held.left ? 1 : 0),
      y: (this.held.up ? 1 : 0) - (this.held.down ? 1 : 0),
      sprint: this.held.sprint,
      jump: false,
    }
    this.acc += dt
    while (this.acc >= STEP) {
      intent.jump = this.jumpQueued
      this.jumpQueued = false
      const wasAirborne = this.runner.airborne
      this.runner = stepRunner(this.runner, intent, STEP, this.axes, this.solids, walkable)
      if (this.runner.airborne && !wasAirborne) this.cb.onJump()
      this.acc -= STEP
    }
    const r = this.runner
    if (r.moving && !this.moved) {
      this.moved = true
      this.cb.onMoved()
    }

    this.updateStuck(dt, r.moving)

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

    // which frame of the sheet
    let pose: Pose = "stand"
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

    // the sprite sits on whole screen pixels, mirrored for left
    const hop = Math.round(r.h * Math.cos(PITCH) * PIXELS_PER_UNIT) / (Math.cos(PITCH) * PIXELS_PER_UNIT)
    const pos = this.snapToPixels(r.x, r.z)
    this.runnerMesh.position.set(pos.x, hop, pos.z)
    this.runnerMesh.scale.x = r.facing === "left" ? -1 : 1
    const shrink = 1 - Math.min(r.h / 1.5, 0.4)
    this.runnerShadow.position.set(pos.x, 0, pos.z)
    this.runnerShadow.scale.set(0.95 * shrink, 1, 0.5 * shrink)

    this.stirStations(dt, now, false)
    if (this.reduceMotion) return
    // the herd grazes in two poses, like the Title Screen's cows
    for (const c of this.cowHeads) {
      const beat = ((now / 1000 + c.phase) % 2.6) / 2.6
      c.head.rotation.z = beat < 0.64 ? -0.55 : 0.1
    }
    // the waterfall falls a texel at a time
    this.waterTex.offset.y = -Math.floor(now / 85) / WATER_SIZE
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
      const clock: PartClock = { t, wake: st.wake, lit: this.lampsLit, elapsed, still: this.reduceMotion }
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
    if (this.look.lens !== "ortho") return { x, z }
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
    this.cb.onFrame({ labels, runner: this.runnerOnScreen() })

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
