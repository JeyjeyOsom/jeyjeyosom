// The Overworld's weather (CONTEXT.md: Overworld). In AUTO the island gets
// an occasional shower, some light, some heavy; the menu can also hold it
// CLEAR or RAIN (a downpour). Rain is drawn on the screen's own pixel grid:
// one-pixel streaks in two layers, falling at a slant that steepens in the
// gusts. Drops splash on the ground and ring the water, puddles gather on
// and beside the road and dry afterwards, and the light turns grey (the
// lamps come on in a downpour). The heaviest showers bring lightning and,
// a moment later, thunder. Dry days have cloud shadows drifting over the
// island. Two numbers carry the rain: `intensity`, how hard it's raining
// now, and `wetness`, which lags behind it both ways.

import * as THREE from "three"
import { islandReach, LOOP_LENGTH, mulberry32, POND, ROAD, roadPoint, type Vec2, walkable } from "./level"
import { decalMaterial } from "./materials"
import { mixColor, type SkyLight } from "./sky"

export type WeatherMode = "auto" | "clear" | "rain"

/** The wind the clouds drift on, units a second */
const WIND = { x: 1.3, z: 0.5 }
/** Clouds wrap round a field this far out from the island's centre */
const CLOUD_FIELD = { x: 125, z: 95 }
const CLOUD_DENSITY = 0.22
/** How long a gust takes to swell and fall, seconds */
const GUST_S = 1.8

const RAIN_VERTEX = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

// One-pixel streaks on the internal pixel grid. Each column (sheared, so
// the rain falls at a slant) carries drops at its own speed and spacing;
// uDensity thins them. A far layer, slower and darker, sits behind.
const RAIN_FRAGMENT = /* glsl */ `
  uniform float uTime;
  uniform float uDensity;
  uniform float uShear;
  uniform vec3 uNear;
  uniform vec3 uFar;
  float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }
  bool drop(vec2 p, float shear, float base, float spread, float gapBase, float gapSpread, float seed) {
    float col = floor(p.x + p.y * shear) + seed;
    float h = hash(col);
    float speed = base + h * spread;
    float gap = gapBase + hash(col + 7.13) * gapSpread;
    float y = p.y + uTime * speed + h * 977.0;
    float k = floor(y / gap);
    float len = 3.0 + floor(hash(col * 1.71 + k) * 4.0);
    if (mod(y, gap) > len) return false;
    return hash(col * 3.31 + k * 1.37) < uDensity;
  }
  void main() {
    vec2 p = floor(gl_FragCoord.xy);
    if (drop(p, uShear, 190.0, 110.0, 70.0, 90.0, 0.0)) {
      gl_FragColor = vec4(uNear, 1.0);
    } else if (drop(p, uShear * 0.73, 120.0, 60.0, 50.0, 70.0, 431.0)) {
      gl_FragColor = vec4(uFar, 1.0);
    } else {
      discard;
    }
  }
`

/** A lightning flash: the island lit pale and hard for a blink */
export function flashGrade(light: SkyLight, k: number): SkyLight {
  if (k <= 0) return light
  return {
    ...light,
    sun: mixColor(light.sun, 0xf2f4ff, k * 0.85),
    sunI: light.sunI * (1 + 1.8 * k),
    shade: mixColor(light.shade, 0xb8c2e8, k * 0.6),
    shadeI: light.shadeI * (1 + 0.7 * k),
    sea: mixColor(light.sea, 0xc8d0f0, k * 0.5),
    foam: mixColor(light.foam, 0xffffff, k * 0.6),
  }
}

/** The sky's light under rain: greyer, cooler, dimmer, by how hard it falls */
export function rainGrade(light: SkyLight, k: number): SkyLight {
  if (k <= 0) return light
  return {
    sun: mixColor(light.sun, 0x9aa4c0, k * 0.7),
    sunI: light.sunI * (1 - 0.42 * k),
    shade: mixColor(light.shade, 0x7c86a8, k * 0.5),
    shadeI: light.shadeI * (1 - 0.1 * k),
    sea: mixColor(light.sea, 0x5b6684, k * 0.5),
    seaDeep: mixColor(light.seaDeep, 0x46506c, k * 0.5),
    foam: mixColor(light.foam, 0xc8d0e0, k * 0.4),
    sprite: mixColor(light.sprite, 0xc6cbdc, k * 0.4),
    // in a downpour the lamps come on, whatever the hour
    lamps: light.lamps || k > 0.6,
  }
}

export class Weather {
  mode: WeatherMode = "auto"
  /** how hard it's raining, 0..1 */
  intensity = 0
  /** how wet the ground is, 0..1: slower to come and slower to go */
  wetness = 0
  /** a gust blowing through the rain now, 0..1 */
  gust = 0
  /** a lightning flash now, 0..1 */
  flash = 0

  private readonly reduceMotion: boolean
  private raining = false
  /** how hard this shower falls, when it's at its height */
  private strength = 1
  private nextChange: number
  private readonly rand = mulberry32(2207)
  private gustAt = -Infinity
  private nextGust = 0
  private heavy = false
  private boltAt = -Infinity
  private nextBolt = 0
  private thunderAt: number | null = null
  private readonly puddleSpots: Array<{ x: number; z: number; rot: number; sx: number; sz: number }> = []
  private readonly clouds: THREE.InstancedMesh
  private readonly cloudMat = decalMaterial(0x2b1b57, 0, { falloff: true, land: true })
  private readonly cloudLobes: Array<{ x: number; z: number; sx: number; sz: number }> = []
  private sunny = 1

  private readonly overlay = new THREE.Scene()
  private readonly overlayCamera = new THREE.Camera()
  private readonly rainMat: THREE.ShaderMaterial
  private readonly ripples: THREE.InstancedMesh
  private readonly rippleMat = decalMaterial(0xf6fbff, 0.7, { shape: "ring" })
  private readonly rippleLife: Array<{ x: number; y: number; z: number; born: number }> = []
  private readonly puddleMat = decalMaterial(0x46506c, 0, { falloff: true })
  private readonly m = new THREE.Matrix4()

  constructor(scene: THREE.Scene, flatDisc: () => THREE.BufferGeometry, reduceMotion: boolean, now: number) {
    this.reduceMotion = reduceMotion
    // the first shower comes a minute or two in
    this.nextChange = now + 70 + this.rand() * 80

    this.rainMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDensity: { value: 0 },
        uShear: { value: 0.3 },
        uNear: { value: new THREE.Color(0xd8e0f0) },
        uFar: { value: new THREE.Color(0x9aa6c4) },
      },
      vertexShader: RAIN_VERTEX,
      fragmentShader: RAIN_FRAGMENT,
      depthTest: false,
      depthWrite: false,
    })
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.rainMat)
    quad.frustumCulled = false
    this.overlay.add(quad)

    // rings where drops hit the water
    this.ripples = new THREE.InstancedMesh(flatDisc(), this.rippleMat, 28)
    this.ripples.count = 0
    this.ripples.frustumCulled = false
    this.ripples.renderOrder = 1
    scene.add(this.ripples)

    // puddles: on the road's edges and the verges, laid lengthwise
    const spots: Array<{ x: number; z: number; rot: number; sx: number; sz: number }> = []
    const rand = mulberry32(919)
    for (let i = 0; i < 70; i++) {
      const p = roadPoint(rand() * LOOP_LENGTH)
      const off = (rand() < 0.5 ? -1 : 1) * (ROAD.halfWidth * (0.4 + rand() * 0.9))
      spots.push({
        x: p.x + p.nx * off,
        z: p.z + p.nz * off,
        rot: Math.atan2(-p.tz, p.tx),
        sx: 1.0 + rand() * 1.6,
        sz: 0.5 + rand() * 0.5,
      })
    }
    for (let i = 0; i < 40; i++) {
      const x = (rand() * 2 - 1) * 70
      const z = (rand() * 2 - 1) * 50
      if (!walkable(x, z) || islandReach(x, z) > 0.88) continue
      spots.push({ x, z, rot: rand() * Math.PI, sx: 0.8 + rand() * 1.4, sz: 0.5 + rand() * 0.6 })
    }
    this.puddleSpots = spots
    const puddles = new THREE.InstancedMesh(flatDisc(), this.puddleMat, spots.length)
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    spots.forEach((s, i) => {
      q.setFromAxisAngle(up, s.rot)
      this.m.compose(new THREE.Vector3(s.x, 0.003, s.z), q, new THREE.Vector3(s.sx, 1, s.sz))
      puddles.setMatrixAt(i, this.m)
    })
    puddles.instanceMatrix.needsUpdate = true
    puddles.renderOrder = 1
    puddles.frustumCulled = false
    scene.add(puddles)

    // cloud shadows: a few lumpy clouds of three lobes each, drifting with
    // the wind and wrapping round a field larger than the island
    const crand = mulberry32(4471)
    for (let c = 0; c < 9; c++) {
      const cx = (crand() * 2 - 1) * CLOUD_FIELD.x
      const cz = (crand() * 2 - 1) * CLOUD_FIELD.z
      const size = 5 + crand() * 6
      for (let l = 0; l < 3; l++) {
        this.cloudLobes.push({
          x: cx + (l - 1) * size * 0.45 + crand() * 1.5,
          z: cz + (crand() * 2 - 1) * size * 0.2,
          sx: size * (l === 1 ? 1.1 : 0.75),
          sz: size * (l === 1 ? 0.7 : 0.5),
        })
      }
    }
    this.clouds = new THREE.InstancedMesh(flatDisc(), this.cloudMat, this.cloudLobes.length)
    this.clouds.renderOrder = 1
    this.clouds.frustumCulled = false
    this.clouds.position.y = 0.002
    scene.add(this.clouds)
    this.moveClouds(now)
  }

  /** Where the clouds have drifted to by `now` (still under reduced motion) */
  private moveClouds(now: number) {
    const t = this.reduceMotion ? 0 : now
    const wrap = (v: number, half: number) => ((((v + half) % (2 * half)) + 2 * half) % (2 * half)) - half
    this.cloudLobes.forEach((l, i) => {
      this.m.makeScale(l.sx, 1, l.sz)
      this.m.setPosition(wrap(l.x + WIND.x * t, CLOUD_FIELD.x), 0, wrap(l.z + WIND.z * t, CLOUD_FIELD.z))
      this.clouds.setMatrixAt(i, this.m)
    })
    this.clouds.instanceMatrix.needsUpdate = true
  }

  /** The puddle under a point, if the ground's wet enough for one to show */
  puddleAt(x: number, z: number): boolean {
    if (this.wetness < 0.35) return false
    return this.puddleSpots.some((s) => {
      const dx = x - s.x
      const dz = z - s.z
      if (Math.abs(dx) > 1.5 || Math.abs(dz) > 1.5) return false
      const c = Math.cos(s.rot)
      const sn = Math.sin(s.rot)
      const lx = dx * c - dz * sn
      const lz = dx * sn + dz * c
      return (lx / (0.45 * s.sx)) ** 2 + (lz / (0.45 * s.sz)) ** 2 < 1
    })
  }

  /** A foot through a puddle: rings on it */
  splashPuddle(x: number, z: number, now: number) {
    this.ripple(x, 0.006, z, now)
    this.ripple(x + 0.15, 0.006, z - 0.1, now + 0.08)
  }

  /** How hard the wind blows the trees: a breeze, more in rain, most in a gust */
  get wind(): number {
    if (this.reduceMotion) return 0
    return Math.min(1.4, this.intensity * 0.6 + this.gust * 0.8)
  }

  setMode(mode: WeatherMode, now: number) {
    this.mode = mode
    this.nextChange = now + 60 + this.rand() * 60
  }

  /**
   * Advance the weather. Returns splash spots for the island's particles,
   * a few each frame while it rains, around the camera's focus, and
   * whether thunder sounds this frame.
   */
  update(dt: number, now: number, focus: Vec2): { splashes: Vec2[]; thunder: boolean } {
    // AUTO: a shower of a minute or two, then a few minutes dry; never on
    // its own under reduced motion
    if (this.mode === "auto" && !this.reduceMotion && now > this.nextChange) {
      this.raining = !this.raining
      this.nextChange = now + (this.raining ? 60 + this.rand() * 60 : 160 + this.rand() * 160)
      // a shower is a drizzle or a downpour, or anything between
      if (this.raining) this.strength = 0.55 + this.rand() * 0.45
    }
    const want = this.mode === "rain" ? 1 : this.mode === "clear" || this.reduceMotion ? 0 : this.raining ? this.strength : 0
    const step = (target: number, current: number, up: number, down: number) =>
      target > current ? Math.min(target, current + dt / up) : Math.max(target, current - dt / down)
    this.intensity = step(want, this.intensity, 6, 8)
    this.wetness = step(want, this.wetness, 18, 40)

    // gusts: every few seconds while it rains, a swell and a fall
    if (this.intensity > 0.2 && !this.reduceMotion && now > this.nextGust) {
      this.gustAt = now
      this.nextGust = now + 4 + this.rand() * 6
    }
    const g = (now - this.gustAt) / GUST_S
    this.gust = g >= 0 && g < 1 ? Math.sin(Math.PI * g) * Math.min(1, this.intensity * 1.3) : 0

    // lightning in the heaviest showers, the thunder a moment after it
    const heavy = this.intensity >= 0.85
    if (heavy && !this.heavy) this.nextBolt = now + 3 + this.rand() * 6
    this.heavy = heavy
    let thunder = false
    if (heavy && now > this.nextBolt) {
      this.boltAt = now
      this.thunderAt = now + 0.6 + this.rand() * 1.8
      this.nextBolt = now + 14 + this.rand() * 22
    }
    if (this.thunderAt !== null && now >= this.thunderAt) {
      this.thunderAt = null
      thunder = true
    }
    // a bright blink, a dimmer one, a last bright one, then gone; never under reduced motion
    const b = now - this.boltAt
    this.flash = this.reduceMotion || b < 0 || b > 0.5 ? 0 : b < 0.07 ? 1 : b < 0.15 ? 0.3 : b < 0.21 ? 0.8 : 0.8 * (1 - (b - 0.21) / 0.29)

    this.rainMat.uniforms.uTime.value = this.reduceMotion ? 3.7 : now
    this.rainMat.uniforms.uDensity.value = this.intensity * 0.32
    this.rainMat.uniforms.uShear.value = 0.3 + this.gust * 0.35
    this.puddleMat.uniforms.uDensity.value = this.wetness * 0.6
    this.cloudMat.uniforms.uDensity.value = CLOUD_DENSITY * this.sunny * Math.max(0, 1 - this.intensity * 2.5) * (1 - this.wetness * 0.5)
    if (!this.reduceMotion) this.moveClouds(now)

    const splashes: Vec2[] = []
    if (this.intensity > 0.05 && !this.reduceMotion) {
      const n = Math.floor(this.intensity * 60 * dt + this.rand())
      for (let i = 0; i < n; i++) {
        const x = focus.x + (this.rand() * 2 - 1) * 13
        const z = focus.z + (this.rand() * 2 - 1) * 10
        const reach = islandReach(x, z)
        const inPond = ((x - POND.x) / POND.rx) ** 2 + ((z - POND.z) / POND.rz) ** 2 < 0.9
        if (inPond) this.ripple(x, 0.013, z, now)
        else if (reach > 1.02) this.ripple(x, -0.33, z, now)
        else if (walkable(x, z)) splashes.push({ x, z })
      }
    }
    this.updateRipples(now)
    return { splashes, thunder }
  }

  private ripple(x: number, y: number, z: number, now: number) {
    if (this.rippleLife.length >= 28) this.rippleLife.shift()
    this.rippleLife.push({ x, y, z, born: now })
  }

  private updateRipples(now: number) {
    while (this.rippleLife.length && now - this.rippleLife[0].born > 0.45) this.rippleLife.shift()
    this.rippleLife.forEach((r, i) => {
      // widening in three steps
      const s = 0.3 + Math.floor(Math.max(0, now - r.born) / 0.15) * 0.22
      this.m.makeScale(s * 1.3, 1, s)
      this.m.setPosition(r.x, r.y, r.z)
      this.ripples.setMatrixAt(i, this.m)
    })
    this.ripples.count = this.rippleLife.length
    this.ripples.instanceMatrix.needsUpdate = true
  }

  /** Recolour the rain, ripples and puddles from the sky */
  setSky(light: SkyLight) {
    // the sun casts the cloud shadows: full by day, fainter at dusk, none
    // at night (nor in a downpour, which dims the sun as much)
    this.sunny = Math.min(1, Math.max(0, (light.sunI - 0.25) / 0.25))
    ;(this.rainMat.uniforms.uNear.value as THREE.Color).setHex(mixColor(light.foam, 0xffffff, 0.2))
    ;(this.rainMat.uniforms.uFar.value as THREE.Color).setHex(mixColor(light.sea, light.foam, 0.45))
    ;(this.rippleMat.uniforms.uColor.value as THREE.Color).setHex(light.foam)
    ;(this.puddleMat.uniforms.uColor.value as THREE.Color).setHex(mixColor(light.seaDeep, 0x23222e, 0.35))
  }

  /** Draw the rain over the frame just rendered */
  render(renderer: THREE.WebGLRenderer) {
    if (this.intensity <= 0.01) return
    const auto = renderer.autoClear
    renderer.autoClear = false
    renderer.render(this.overlay, this.overlayCamera)
    renderer.autoClear = auto
  }

  dispose() {
    this.rainMat.dispose()
    this.overlay.traverse((o) => {
      if (o instanceof THREE.Mesh) o.geometry.dispose()
    })
  }
}
