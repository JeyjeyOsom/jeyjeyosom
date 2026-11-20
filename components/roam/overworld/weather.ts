// Rain in the Overworld (CONTEXT.md: Overworld). In AUTO the island gets an
// occasional shower; the menu can also hold it CLEAR or RAIN. Rain is drawn
// on the screen's own pixel grid: one-pixel streaks in two layers, falling
// at a slant. Drops splash on the ground and ring the water, puddles gather
// on and beside the road and dry afterwards, and the light turns grey (the
// lamps come on in a downpour). Two numbers carry it all: `intensity`, how
// hard it's raining now, and `wetness`, which lags behind it both ways.

import * as THREE from "three"
import { islandReach, LOOP_LENGTH, mulberry32, POND, ROAD, roadPoint, type Vec2, walkable } from "./level"
import { decalMaterial } from "./materials"
import { mixColor, type SkyLight } from "./sky"

export type WeatherMode = "auto" | "clear" | "rain"

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
    if (drop(p, 0.3, 190.0, 110.0, 70.0, 90.0, 0.0)) {
      gl_FragColor = vec4(uNear, 1.0);
    } else if (drop(p, 0.22, 120.0, 60.0, 50.0, 70.0, 431.0)) {
      gl_FragColor = vec4(uFar, 1.0);
    } else {
      discard;
    }
  }
`

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

  private readonly reduceMotion: boolean
  private raining = false
  private nextChange: number
  private readonly rand = mulberry32(2207)

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
  }

  setMode(mode: WeatherMode, now: number) {
    this.mode = mode
    this.nextChange = now + 60 + this.rand() * 60
  }

  /**
   * Advance the weather. Returns splash spots for the island's particles,
   * a few each frame while it rains, around the camera's focus.
   */
  update(dt: number, now: number, focus: Vec2): Vec2[] {
    // AUTO: a shower of a minute or two, then a few minutes dry; never on
    // its own under reduced motion
    if (this.mode === "auto" && !this.reduceMotion && now > this.nextChange) {
      this.raining = !this.raining
      this.nextChange = now + (this.raining ? 60 + this.rand() * 60 : 160 + this.rand() * 160)
    }
    const want = this.mode === "rain" ? 1 : this.mode === "clear" || this.reduceMotion ? 0 : this.raining ? 1 : 0
    const step = (target: number, current: number, up: number, down: number) =>
      target > current ? Math.min(target, current + dt / up) : Math.max(target, current - dt / down)
    this.intensity = step(want, this.intensity, 6, 8)
    this.wetness = step(want, this.wetness, 18, 40)

    this.rainMat.uniforms.uTime.value = this.reduceMotion ? 3.7 : now
    this.rainMat.uniforms.uDensity.value = this.intensity * 0.32
    this.puddleMat.uniforms.uDensity.value = this.wetness * 0.6

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
    return splashes
  }

  private ripple(x: number, y: number, z: number, now: number) {
    if (this.rippleLife.length >= 28) this.rippleLife.shift()
    this.rippleLife.push({ x, y, z, born: now })
  }

  private updateRipples(now: number) {
    while (this.rippleLife.length && now - this.rippleLife[0].born > 0.45) this.rippleLife.shift()
    this.rippleLife.forEach((r, i) => {
      // widening in three steps
      const s = 0.3 + Math.floor((now - r.born) / 0.15) * 0.22
      this.m.makeScale(s * 1.3, 1, s)
      this.m.setPosition(r.x, r.y, r.z)
      this.ripples.setMatrixAt(i, this.m)
    })
    this.ripples.count = this.rippleLife.length
    this.ripples.instanceMatrix.needsUpdate = true
  }

  /** Recolour the rain, ripples and puddles from the sky */
  setSky(light: SkyLight) {
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
