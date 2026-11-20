// The island's life (CONTEXT.md: Overworld): the herd, birds pecking in
// the grass, crabs on the beach, a fish in the pond, fireflies at Dusk and
// butterflies at Dawn, and the marks the Runner leaves (dust, footprints in
// the sand, the cup he takes at the aid station). Each of them notices him
// in its own way. Under reduced motion they keep still and only the
// readable reactions remain (a cow's MOO, the cup).

import * as THREE from "three"
import { PY, textBoxes } from "./landmarks"
import {
  BEACH_REACH,
  GROUND_PIXEL,
  inPasture,
  islandPoint,
  islandReach,
  type LandmarkPlacement,
  mulberry32,
  PASTURE,
  type Placement,
  POND,
  roadDistance,
  type Solid,
  surfaceAt,
  type Vec2,
  WALK_REACH,
  walkable,
} from "./level"
import { decalMaterial, glowMaterial } from "./materials"
import type { RunnerState } from "./movement"
import { C, cowBodyBoxes, cowHeadBoxes } from "./props"
import { type Box, boxesGeometry, centered } from "./voxels"
import { textWidth } from "./font"

export type LifeSfx = "moo" | "flap" | "splash" | "cup"

export interface LifeOptions {
  reduceMotion: boolean
  cows: Placement[]
  flowers: Placement[]
  bushes: Placement[]
  aidStation: LandmarkPlacement | undefined
  /** the world's solids; the herd adds and moves its own */
  solids: Solid[]
  occluder: THREE.Material
  shadow: THREE.Material
  gradient: THREE.Texture
  flatDisc: () => THREE.BufferGeometry
  /** a sound and where it comes from; the engine plays only what's in view */
  sfx: (name: LifeSfx, at: Vec2) => void
}

export interface LifeFrame {
  dt: number
  /** seconds */
  t: number
  runner: RunnerState
  /** he left the ground, or came back down, this frame */
  jumped: boolean
  landed: boolean
  lit: boolean
  /** the camera's focus on the ground */
  focus: Vec2
}

const dist = (a: Vec2, b: Vec2) => Math.hypot(a.x - b.x, a.z - b.z)
/** The rotation about y that turns a +x-facing model toward (dx, dz) */
const headingTo = (dx: number, dz: number) => Math.atan2(-dz, dx)

function turnToward(current: number, target: number, max: number): number {
  let d = target - current
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return current + Math.max(-max, Math.min(max, d))
}

/** A speech bubble: a dark plate with a cream word and a tail */
function bubbleBoxes(text: string): Box[] {
  const w = (textWidth(text) + 4) / 16
  const h = 9 * PY
  return [
    centered(0, 0, 0, w, h, 0.04, C.ink),
    centered(0, -2 * PY, 0, 2 / 16, 2 * PY, 0.04, C.ink),
    ...textBoxes(text, 0, h - 2 * PY, 0.02, C.cream, 1, 0.03),
  ]
}

// ---- Pixel particles: dust, splashes, a tossed cup ----

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
  max: number
  size: number
  gravity: number
  color: number
}

class Particles {
  readonly mesh: THREE.InstancedMesh
  private readonly items: Particle[] = []
  private readonly m = new THREE.Matrix4()
  private readonly c = new THREE.Color()

  private readonly max: number

  constructor(scene: THREE.Scene, max = 160) {
    this.max = max
    this.mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial(), max)
    this.mesh.count = 0
    this.mesh.frustumCulled = false
    this.mesh.setColorAt(0, this.c.setHex(0xffffff))
    scene.add(this.mesh)
  }

  spawn(p: Omit<Particle, "life">) {
    if (this.items.length >= this.max) this.items.shift()
    this.items.push({ ...p, life: 0 })
  }

  update(dt: number) {
    let n = 0
    for (let i = this.items.length - 1; i >= 0; i--) {
      const p = this.items[i]
      p.life += dt
      if (p.life >= p.max) {
        this.items.splice(i, 1)
        continue
      }
      p.vy -= p.gravity * dt
      p.x += p.vx * dt
      p.y += p.vy * dt
      p.z += p.vz * dt
      if (p.y < 0) {
        p.y = 0
        p.vy = 0
        p.vx *= 0.4
        p.vz *= 0.4
      }
      // shrinks a whole step as it fades
      const s = p.life / p.max < 0.6 ? p.size : p.size / 2
      this.m.makeScale(s, s, s)
      this.m.setPosition(p.x, p.y + s / 2, p.z)
      this.mesh.setMatrixAt(n, this.m)
      this.mesh.setColorAt(n, this.c.setHex(p.color))
      n++
    }
    this.mesh.count = n
    this.mesh.instanceMatrix.needsUpdate = true
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true
  }

  setTint(hex: number) {
    ;(this.mesh.material as THREE.MeshBasicMaterial).color.setHex(hex)
  }
}

// ---- The herd ----

interface Cow {
  group: THREE.Group
  head: THREE.Mesh
  bang: THREE.Mesh
  moo: THREE.Mesh
  solid: Solid & { kind: "circle" }
  x: number
  z: number
  rot: number
  target: Vec2 | null
  until: number
  watching: boolean
  bangUntil: number
  mooUntil: number
  lastMoo: number
  phase: number
}

// ---- Birds ----

interface Bird {
  group: THREE.Group
  head: THREE.Mesh
  wingsUp: THREE.Mesh
  wingsDown: THREE.Mesh
  off: Vec2
  phase: number
}

interface Flock {
  birds: Bird[]
  at: Vec2
  from: Vec2
  to: Vec2
  flying: boolean
  t0: number
  dur: number
}

// ---- Crabs ----

interface Crab {
  group: THREE.Group
  x: number
  z: number
  /** along the coast, for scuttling sideways */
  tx: number
  tz: number
  state: "idle" | "scuttle" | "flee" | "hidden"
  until: number
  dir: number
}

export class IslandLife {
  private readonly scene: THREE.Scene
  private readonly o: LifeOptions
  private readonly rand = mulberry32(1206)
  private readonly glow = glowMaterial()
  readonly particles: Particles

  private readonly cows: Cow[] = []
  private readonly flocks: Flock[] = []
  private readonly crabs: Crab[] = []
  private readonly fish: THREE.Mesh
  private readonly ripples: THREE.Mesh[]
  private readonly rippleMat = decalMaterial(0xf6fbff, 0.6, { shape: "ring" })
  private jump: { from: Vec2; to: Vec2; t0: number } | null = null
  private nextJump = 4
  private readonly fireflies: THREE.InstancedMesh
  private readonly fireflyHomes: Array<Vec2 & { phase: number }> = []
  private readonly butterflies: Array<{ group: THREE.Group; open: THREE.Mesh; shut: THREE.Mesh; home: Vec2; phase: number }> = []

  private readonly footprints: THREE.InstancedMesh
  private readonly footprintMat: THREE.MeshToonMaterial
  private readonly prints: Array<{ x: number; z: number; born: number }> = []
  private lastPrint: Vec2 | null = null
  private printSide = 1
  private lastDust = 0

  private readonly cup: THREE.Mesh
  private takenAt = -Infinity
  private carryUntil = -Infinity
  private tossed = true

  private readonly m = new THREE.Matrix4()

  constructor(scene: THREE.Scene, options: LifeOptions) {
    this.scene = scene
    this.o = options
    this.particles = new Particles(scene)
    this.buildHerd()
    this.buildBirds()
    this.buildCrabs()

    this.fish = new THREE.Mesh(
      boxesGeometry([
        centered(0, 0, 0, 0.32, 0.12, 0.1, 0xff8a4a),
        centered(0.06, 0.08, 0, 0.12, 0.04, 0.06, 0xfff4e3),
        centered(-0.2, 0, 0, 0.08, 0.14, 0.04, 0xff7a3d),
      ]),
      this.o.occluder
    )
    this.fish.visible = false
    scene.add(this.fish)
    this.ripples = [0, 1].map(() => {
      const mesh = new THREE.Mesh(this.o.flatDisc(), this.rippleMat)
      mesh.visible = false
      mesh.renderOrder = 1
      scene.add(mesh)
      return mesh
    })

    // fireflies drift around the bushes and the pond at Dusk
    this.fireflies = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xfff1a0 }), 48)
    this.fireflies.frustumCulled = false
    const bushes = [...this.o.bushes]
    for (let i = 0; i < 48; i++) {
      const b = i % 4 === 0 ? { x: POND.x + (this.rand() - 0.5) * POND.rx * 2.4, z: POND.z + (this.rand() - 0.5) * POND.rz * 2.4 } : bushes[Math.floor(this.rand() * bushes.length)]
      if (!b) continue
      this.fireflyHomes.push({ x: b.x + (this.rand() - 0.5) * 1.6, z: b.z + (this.rand() - 0.5) * 1.2, phase: this.rand() * 10 })
    }
    scene.add(this.fireflies)

    // butterflies visit the flowers at Dawn
    const colors = [0xf6a6c0, 0xffe3a3, 0x7ec8e8, 0xfff4e3]
    const flowers = [...this.o.flowers].sort(() => this.rand() - 0.5).slice(0, 16)
    flowers.forEach((f, i) => {
      const color = colors[i % colors.length]
      const group = new THREE.Group()
      const open = new THREE.Mesh(
        boxesGeometry([
          centered(0, 0, 0.1, 0.19, 0.02, 0.16, color),
          centered(0, 0, -0.1, 0.19, 0.02, 0.16, color),
          centered(0, -0.01, 0, 0.14, 0.04, 0.04, C.ink),
        ]),
        this.o.occluder
      )
      const shut = new THREE.Mesh(
        boxesGeometry([centered(0, 0, 0, 0.16, 0.19, 0.03, color), centered(0, -0.01, 0, 0.14, 0.04, 0.04, C.ink)]),
        this.o.occluder
      )
      group.add(open, shut)
      scene.add(group)
      this.butterflies.push({ group, open, shut, home: { x: f.x, z: f.z }, phase: this.rand() * 10 })
    })

    // footprints in the sand
    this.footprintMat = new THREE.MeshToonMaterial({ color: 0xc4a46f, gradientMap: this.o.gradient })
    const flat = new THREE.PlaneGeometry(1, 1)
    flat.rotateX(-Math.PI / 2)
    this.footprints = new THREE.InstancedMesh(flat, this.footprintMat, 80)
    this.footprints.count = 0
    this.footprints.frustumCulled = false
    scene.add(this.footprints)

    // the cup he carries for a moment
    this.cup = new THREE.Mesh(
      boxesGeometry([centered(0, 0, 0, 0.18, 0.22, 0.18, C.cream), centered(0, 0.2, 0, 0.14, PY, 0.14, C.sky)]),
      this.o.occluder
    )
    this.cup.visible = false
    scene.add(this.cup)
  }

  /** Seconds since the Runner took a cup at the aid station */
  sinceCup(t: number): number {
    return t - this.takenAt
  }

  setGradient(gradient: THREE.Texture) {
    this.footprintMat.gradientMap = gradient
    this.footprintMat.needsUpdate = true
  }

  setSky(light: { sprite: number; foam: number }) {
    this.particles.setTint(light.sprite)
    ;(this.rippleMat.uniforms.uColor.value as THREE.Color).setHex(light.foam)
  }

  update(f: LifeFrame) {
    this.updateHerd(f)
    this.updateCup(f)
    this.updateFootprints(f)
    if (this.o.reduceMotion) {
      this.fireflies.visible = f.lit
      this.updateFireflies(f, true)
      for (const b of this.butterflies) b.group.visible = !f.lit
      this.updateButterflies(f, true)
      return
    }
    this.updateDust(f)
    this.updateBirds(f)
    this.updateCrabs(f)
    this.updateFish(f)
    this.updateFireflies(f, false)
    this.updateButterflies(f, false)
    this.particles.update(f.dt)
  }

  // ---- the herd ----

  private buildHerd() {
    const bodies = [boxesGeometry(cowBodyBoxes(0)), boxesGeometry(cowBodyBoxes(1))]
    const heads = [boxesGeometry(cowHeadBoxes(0)), boxesGeometry(cowHeadBoxes(1))]
    const bang = boxesGeometry(bubbleBoxes("!"))
    const moo = boxesGeometry(bubbleBoxes("MOO"))
    this.o.cows.forEach((c, i) => {
      const group = new THREE.Group()
      const body = new THREE.Mesh(bodies[c.variant], this.o.occluder)
      const head = new THREE.Mesh(heads[c.variant], this.o.occluder)
      head.position.set(0.68, 1.0, 0)
      head.rotation.z = -0.55
      const shadow = new THREE.Mesh(this.o.flatDisc(), this.o.shadow)
      shadow.scale.set(2.0, 1, 1.1)
      shadow.renderOrder = 1
      group.add(body, head, shadow)
      this.scene.add(group)
      const bubbles = [bang, moo].map((g) => {
        const mesh = new THREE.Mesh(g, this.glow)
        mesh.visible = false
        this.scene.add(mesh)
        return mesh
      })
      const solid = { kind: "circle" as const, x: c.x, z: c.z, r: 0.85 }
      this.o.solids.push(solid)
      this.cows.push({
        group,
        head,
        bang: bubbles[0],
        moo: bubbles[1],
        solid,
        x: c.x,
        z: c.z,
        rot: c.rot,
        target: null,
        until: 2 + i * 1.3,
        watching: false,
        bangUntil: 0,
        mooUntil: 0,
        lastMoo: -10,
        phase: i * 1.7,
      })
    })
  }

  private pickPasture(self: Cow): Vec2 | null {
    for (let k = 0; k < 12; k++) {
      const p = {
        x: PASTURE.minX + 1.6 + this.rand() * (PASTURE.maxX - PASTURE.minX - 3.2),
        z: PASTURE.minZ + 1.6 + this.rand() * (PASTURE.maxZ - PASTURE.minZ - 3.2),
      }
      if (dist(p, self) < 2 || dist(p, self) > 8) continue
      if (this.cows.some((c) => c !== self && (dist(p, c) < 2.4 || (c.target && dist(p, c.target) < 2.4)))) continue
      return p
    }
    return null
  }

  private updateHerd(f: LifeFrame) {
    const { t, dt, runner: r } = f
    for (const cow of this.cows) {
      const d = dist(r, cow)
      if (d < 5 && !cow.watching) {
        cow.watching = true
        cow.bangUntil = t + 0.9
      } else if (d > 6.5 && cow.watching) {
        cow.watching = false
        cow.until = t + 1.5 + this.rand() * 2
        cow.target = null
      }
      if (f.jumped && d < 3.6 && t - cow.lastMoo > 1.6) {
        cow.lastMoo = t
        cow.mooUntil = t + 1.3
        this.o.sfx("moo", cow)
      }

      if (!this.o.reduceMotion) {
        cow.group.position.y = 0
        if (cow.watching) {
          // head up, turning to face him
          cow.rot = turnToward(cow.rot, headingTo(r.x - cow.x, r.z - cow.z), dt * 2.2)
          cow.head.rotation.z = 0.1
        } else if (cow.target) {
          const dx = cow.target.x - cow.x
          const dz = cow.target.z - cow.z
          const len = Math.hypot(dx, dz)
          if (len < 0.08) {
            cow.target = null
            cow.until = t + 3 + this.rand() * 6
          } else {
            const want = headingTo(dx, dz)
            cow.rot = turnToward(cow.rot, want, dt * 1.6)
            const aligned = Math.max(0, Math.cos(want - cow.rot))
            const step = Math.min(len, 0.55 * aligned * dt)
            cow.x += (dx / len) * step
            cow.z += (dz / len) * step
            cow.head.rotation.z = 0.1
            cow.group.position.y = Math.floor(t * 4 + cow.phase) % 2 ? PY : 0
          }
        } else {
          // grazing, in two poses like the Title Screen's cows
          const beat = ((t + cow.phase) % 2.6) / 2.6
          cow.head.rotation.z = beat < 0.64 ? -0.55 : 0.1
          if (t > cow.until) cow.target = this.pickPasture(cow)
          if (!cow.target && t > cow.until) cow.until = t + 2
        }
        cow.group.position.x = cow.x
        cow.group.position.z = cow.z
        cow.group.rotation.y = cow.rot
        cow.solid.x = cow.x
        cow.solid.z = cow.z
      } else {
        cow.group.position.set(cow.x, 0, cow.z)
        cow.group.rotation.y = cow.rot
      }
      for (const [bubble, until] of [[cow.bang, cow.bangUntil], [cow.moo, cow.mooUntil]] as const) {
        bubble.visible = t < until
        bubble.position.set(cow.x, 1.75, cow.z + 0.2)
      }
      if (cow.moo.visible) cow.bang.visible = false
    }
  }

  // ---- birds ----

  private grassSpot(near?: Vec2, away?: Vec2): Vec2 | null {
    for (let k = 0; k < 40; k++) {
      let p: Vec2
      if (near && away) {
        const base = Math.atan2(near.z - away.z, near.x - away.x)
        const a = base + (this.rand() - 0.5) * 1.4
        const d = 12 + this.rand() * 12
        p = { x: near.x + Math.cos(a) * d, z: near.z + Math.sin(a) * d }
      } else {
        p = { x: (this.rand() * 2 - 1) * 70, z: (this.rand() * 2 - 1) * 50 }
      }
      if (!walkable(p.x, p.z) || surfaceAt(p.x, p.z) !== "grass" || inPasture(p.x, p.z, 2)) continue
      if (roadDistance(p.x, p.z) < 3.5 || islandReach(p.x, p.z) > BEACH_REACH - 0.06) continue
      return p
    }
    return null
  }

  private buildBirds() {
    const bodyGeo = boxesGeometry([
      centered(0, 0.06, 0, 0.2, 0.12, 0.12, 0x5d4b3f),
      centered(-0.13, 0.12, 0, 0.08, 0.04, 0.08, 0x4a3b31),
      centered(0.02, 0, 0.03, 0.02, 0.06, 0.02, C.gold),
      centered(0.02, 0, -0.03, 0.02, 0.06, 0.02, C.gold),
    ])
    const headGeo = boxesGeometry([centered(0, 0, 0, 0.09, 0.09, 0.09, 0x3f332b), centered(0.06, 0.03, 0, 0.04, 0.03, 0.03, C.gold)])
    const upGeo = boxesGeometry([centered(-0.02, 0.16, 0.1, 0.1, 0.14, 0.03, 0x7a6352), centered(-0.02, 0.16, -0.1, 0.1, 0.14, 0.03, 0x7a6352)])
    const downGeo = boxesGeometry([centered(-0.02, 0.1, 0.1, 0.12, 0.03, 0.1, 0x7a6352), centered(-0.02, 0.1, -0.1, 0.12, 0.03, 0.1, 0x7a6352)])
    for (let k = 0; k < 4; k++) {
      const at = this.grassSpot()
      if (!at) continue
      const birds: Bird[] = []
      for (let i = 0; i < 4; i++) {
        const group = new THREE.Group()
        const body = new THREE.Mesh(bodyGeo, this.o.occluder)
        const head = new THREE.Mesh(headGeo, this.o.occluder)
        head.position.set(0.11, 0.16, 0)
        const wingsUp = new THREE.Mesh(upGeo, this.o.occluder)
        const wingsDown = new THREE.Mesh(downGeo, this.o.occluder)
        wingsUp.visible = wingsDown.visible = false
        group.add(body, head, wingsUp, wingsDown)
        group.rotation.y = this.rand() * Math.PI * 2
        this.scene.add(group)
        const off = { x: (this.rand() - 0.5) * 1.6, z: (this.rand() - 0.5) * 1.1 }
        group.position.set(at.x + off.x, 0, at.z + off.z)
        birds.push({ group, head, wingsUp, wingsDown, off, phase: this.rand() * 10 })
      }
      this.flocks.push({ birds, at, from: at, to: at, flying: false, t0: 0, dur: 1 })
    }
  }

  private updateBirds(f: LifeFrame) {
    const { t, runner: r } = f
    for (const flock of this.flocks) {
      if (!flock.flying) {
        const d = dist(r, flock.at)
        if (d < 2.8 || (r.sprinting && d < 5)) {
          const to = this.grassSpot(flock.at, r)
          if (to) {
            flock.flying = true
            flock.from = flock.at
            flock.to = to
            flock.t0 = t
            flock.dur = dist(flock.at, to) / 6
            this.o.sfx("flap", flock.at)
          }
        }
        if (Math.abs(flock.at.x - f.focus.x) > 22 || Math.abs(flock.at.z - f.focus.z) > 18) continue
        for (const b of flock.birds) {
          const peck = Math.floor(t * 2.5 + b.phase * 7) % 3 === 0
          b.head.position.y = peck ? 0.08 : 0.16
          b.head.position.x = peck ? 0.14 : 0.11
          b.wingsUp.visible = b.wingsDown.visible = false
        }
        continue
      }
      let landed = 0
      const heading = headingTo(flock.to.x - flock.from.x, flock.to.z - flock.from.z)
      flock.birds.forEach((b, i) => {
        const p = Math.min(1, Math.max(0, (t - flock.t0 - i * 0.07) / flock.dur))
        if (p >= 1) landed++
        const x = flock.from.x + (flock.to.x - flock.from.x) * p + b.off.x
        const z = flock.from.z + (flock.to.z - flock.from.z) * p + b.off.z
        b.group.position.set(x, Math.sin(Math.PI * p) * (2.4 + (i % 2) * 0.4), z)
        b.group.rotation.y = heading
        const flap = Math.floor(t * 12 + i) % 2 === 0
        b.wingsUp.visible = p > 0 && p < 1 && flap
        b.wingsDown.visible = p > 0 && p < 1 && !flap
        b.head.position.set(0.11, 0.16, 0)
      })
      if (landed === flock.birds.length) {
        flock.flying = false
        flock.at = flock.to
        for (const b of flock.birds) b.group.rotation.y = this.rand() * Math.PI * 2
      }
    }
  }

  // ---- crabs ----

  private beachSpot(): { p: Vec2; tx: number; tz: number } {
    const theta = this.rand() * Math.PI * 2
    const reach = BEACH_REACH + 0.025 + this.rand() * (WALK_REACH - BEACH_REACH - 0.045)
    const p = islandPoint(theta, reach)
    const q = islandPoint(theta + 0.01, reach)
    const len = Math.hypot(q.x - p.x, q.z - p.z)
    return { p, tx: (q.x - p.x) / len, tz: (q.z - p.z) / len }
  }

  private buildCrabs() {
    const shell = 0xd9573b
    const light = 0xe8744f
    const geo = boxesGeometry([
      centered(0, 0.03, 0, 0.3, 0.1, 0.2, shell),
      centered(0, 0.13, 0, 0.22, 0.04, 0.14, light),
      centered(-0.06, 0.13, 0.07, 0.03, 0.08, 0.03, C.ink),
      centered(0.06, 0.13, 0.07, 0.03, 0.08, 0.03, C.ink),
      centered(-0.2, 0.04, 0.1, 0.1, 0.08, 0.1, light),
      centered(0.2, 0.04, 0.1, 0.1, 0.08, 0.1, light),
      centered(-0.19, 0, -0.04, 0.12, 0.03, 0.03, 0xb8442c),
      centered(0.19, 0, -0.04, 0.12, 0.03, 0.03, 0xb8442c),
      centered(-0.18, 0, -0.1, 0.1, 0.03, 0.03, 0xb8442c),
      centered(0.18, 0, -0.1, 0.1, 0.03, 0.03, 0xb8442c),
    ])
    for (let i = 0; i < 8; i++) {
      const { p, tx, tz } = this.beachSpot()
      const group = new THREE.Group()
      group.add(new THREE.Mesh(geo, this.o.occluder))
      group.position.set(p.x, 0, p.z)
      group.rotation.y = headingTo(tx, tz)
      this.scene.add(group)
      this.crabs.push({ group, x: p.x, z: p.z, tx, tz, state: "idle", until: this.rand() * 3, dir: 1 })
    }
  }

  private onBeach(x: number, z: number) {
    const reach = islandReach(x, z)
    return reach > BEACH_REACH + 0.015 && reach < WALK_REACH - 0.01
  }

  private updateCrabs(f: LifeFrame) {
    const { t, dt, runner: r } = f
    for (const crab of this.crabs) {
      const d = dist(r, crab)
      if (crab.state === "hidden") {
        if (t > crab.until) {
          const { p, tx, tz } = this.beachSpot()
          Object.assign(crab, { x: p.x, z: p.z, tx, tz, state: "idle", until: t + 1 })
          crab.group.visible = true
          crab.group.rotation.y = headingTo(tx, tz)
        }
        continue
      }
      if (crab.state !== "flee" && d < 2.2) {
        // away from him, sideways, as crabs go
        const side = (crab.x - r.x) * crab.tx + (crab.z - r.z) * crab.tz
        crab.dir = side >= 0 ? 1 : -1
        crab.state = "flee"
        crab.until = t + 0.6
      }
      if (crab.state === "idle" && t > crab.until) {
        crab.state = "scuttle"
        crab.dir = this.rand() < 0.5 ? -1 : 1
        crab.until = t + 0.5 + this.rand() * 0.8
      } else if (crab.state === "scuttle" && t > crab.until) {
        crab.state = "idle"
        crab.until = t + 1 + this.rand() * 3
      }
      if (crab.state === "flee" && t > crab.until) {
        // burrow, and come up somewhere else later
        crab.state = "hidden"
        crab.until = t + 7 + this.rand() * 6
        crab.group.visible = false
        continue
      }
      const speed = crab.state === "flee" ? 3.6 : crab.state === "scuttle" ? 1.1 : 0
      if (speed > 0) {
        const nx = crab.x + crab.tx * crab.dir * speed * dt
        const nz = crab.z + crab.tz * crab.dir * speed * dt
        if (this.onBeach(nx, nz)) {
          crab.x = nx
          crab.z = nz
        } else crab.dir = -crab.dir
      }
      const sink = crab.state === "flee" && t > crab.until - 0.2 ? -0.1 : 0
      crab.group.position.set(crab.x, sink + (speed > 0 && Math.floor(t * 10) % 2 ? PY : 0), crab.z)
    }
  }

  // ---- the fish in the pond ----

  private updateFish(f: LifeFrame) {
    const { t } = f
    const inView = Math.abs(POND.x - f.focus.x) < 26 && Math.abs(POND.z - f.focus.z) < 22
    if (!this.jump) {
      this.fish.visible = false
      if (t > this.nextJump && inView) {
        const a = this.rand() * Math.PI * 2
        const k = this.rand() * 0.55
        const from = { x: POND.x + Math.cos(a) * POND.rx * k, z: POND.z + Math.sin(a) * POND.rz * k }
        const h = this.rand() * Math.PI * 2
        this.jump = { from, to: { x: from.x + Math.cos(h) * 0.9, z: from.z + Math.sin(h) * 0.6 }, t0: t }
        this.ripple(0, from, t)
      }
    } else {
      const p = (t - this.jump.t0) / 0.7
      if (p >= 1) {
        this.ripple(1, this.jump.to, t)
        this.o.sfx("splash", this.jump.to)
        this.jump = null
        this.nextJump = t + 3 + this.rand() * 6
      } else {
        const { from, to } = this.jump
        this.fish.visible = true
        this.fish.position.set(from.x + (to.x - from.x) * p, 0.05 + 4 * 0.7 * p * (1 - p), from.z + (to.z - from.z) * p)
        this.fish.rotation.set(0, headingTo(to.x - from.x, to.z - from.z), (0.5 - p) * 1.6)
      }
    }
    // ripples widen in four steps and vanish
    this.ripples.forEach((mesh) => {
      const born = mesh.userData.born as number | undefined
      if (born === undefined) return
      const step = Math.floor((t - born) / 0.16)
      mesh.visible = step < 4
      const s = 0.5 + step * 0.35
      mesh.scale.set(s * 1.3, 1, s * 0.9)
    })
  }

  private ripple(i: number, at: Vec2, t: number) {
    const mesh = this.ripples[i]
    mesh.position.set(at.x, 0.012, at.z)
    mesh.userData.born = t
  }

  // ---- fireflies and butterflies ----

  private updateFireflies(f: LifeFrame, still: boolean) {
    this.fireflies.visible = f.lit
    if (!f.lit) return
    const t = still ? 0 : f.t
    this.fireflyHomes.forEach((h, i) => {
      const on = still || ((t * 0.7 + h.phase) % 1) < 0.55
      const x = h.x + Math.round(Math.sin(t * 0.6 + h.phase) * 10) / 16
      const z = h.z + Math.round(Math.cos(t * 0.45 + h.phase * 1.3) * 6) * GROUND_PIXEL.z
      const y = 0.45 + Math.round(Math.sin(t * 1.1 + h.phase * 2) * 4) * PY
      const s = on ? 0.09 : 0
      this.m.makeScale(s, s, s)
      this.m.setPosition(x, y, z)
      this.fireflies.setMatrixAt(i, this.m)
    })
    this.fireflies.count = this.fireflyHomes.length
    this.fireflies.instanceMatrix.needsUpdate = true
  }

  private updateButterflies(f: LifeFrame, still: boolean) {
    const t = still ? 0 : f.t
    for (const b of this.butterflies) {
      b.group.visible = !f.lit
      if (f.lit) continue
      if (!still && (Math.abs(b.home.x - f.focus.x) > 22 || Math.abs(b.home.z - f.focus.z) > 18)) continue
      const open = still || Math.floor(t * 7 + b.phase) % 2 === 0
      b.open.visible = open
      b.shut.visible = !open
      b.group.position.set(
        b.home.x + Math.sin(t * 0.8 + b.phase) * 0.9,
        0.45 + Math.round(Math.abs(Math.sin(t * 2.6 + b.phase)) * 3) * PY,
        b.home.z + Math.cos(t * 0.6 + b.phase * 1.3) * 0.6
      )
      b.group.rotation.y = Math.cos(t * 0.8 + b.phase) > 0 ? 0 : Math.PI
    }
  }

  // ---- the Runner's marks ----

  private updateDust(f: LifeFrame) {
    const { t, runner: r } = f
    const surface = surfaceAt(r.x, r.z)
    const color = surface === "road" ? 0x9a95a8 : surface === "sand" ? 0xf0dfb8 : 0xc9b98f
    if (f.landed) {
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2
        this.particles.spawn({
          x: r.x + Math.cos(a) * 0.2,
          y: 0.02,
          z: r.z + Math.sin(a) * 0.12,
          vx: Math.cos(a) * 1.3,
          vy: 0.7,
          vz: Math.sin(a) * 0.8,
          max: 0.42,
          size: 0.125,
          gravity: 2,
          color,
        })
      }
    }
    const speed = Math.hypot(r.vx, r.vz)
    if (r.sprinting && !r.airborne && speed > 5 && t - this.lastDust > 0.08) {
      this.lastDust = t
      this.particles.spawn({
        x: r.x - (r.vx / speed) * 0.25 + (this.rand() - 0.5) * 0.2,
        y: 0.02,
        z: r.z - (r.vz / speed) * 0.25,
        vx: -r.vx * 0.12,
        vy: 0.6 + this.rand() * 0.4,
        vz: -r.vz * 0.12,
        max: 0.5,
        size: 0.125,
        gravity: 0.6,
        color,
      })
    }
  }

  private updateFootprints(f: LifeFrame) {
    const { t, runner: r } = f
    if (r.moving && !r.airborne && surfaceAt(r.x, r.z) === "sand") {
      if (!this.lastPrint || dist(this.lastPrint, r) > 0.45) {
        const speed = Math.hypot(r.vx, r.vz) || 1
        this.printSide = -this.printSide
        this.prints.push({ x: r.x - (r.vz / speed) * 0.12 * this.printSide, z: r.z + (r.vx / speed) * 0.12 * this.printSide, born: t })
        if (this.prints.length > 80) this.prints.shift()
        this.lastPrint = { x: r.x, z: r.z }
      }
    }
    while (this.prints.length && t - this.prints[0].born > 9) this.prints.shift()
    this.prints.forEach((p, i) => {
      this.m.makeScale(2 / 16, 1, GROUND_PIXEL.z)
      this.m.setPosition(Math.round(p.x * 16) / 16, 0.003, p.z)
      this.footprints.setMatrixAt(i, this.m)
    })
    this.footprints.count = this.prints.length
    this.footprints.instanceMatrix.needsUpdate = true
  }

  /** Running past the aid station's table takes the cup on offer */
  private updateCup(f: LifeFrame) {
    const { t, runner: r } = f
    const aid = this.o.aidStation
    if (!aid) return
    const speed = Math.hypot(r.vx, r.vz)
    if (
      t - this.takenAt > 6 &&
      speed > 3 &&
      !r.airborne &&
      Math.abs(r.x - aid.x) < 2.3 &&
      r.z > aid.maxZ &&
      r.z < aid.maxZ + 1.6
    ) {
      this.takenAt = t
      this.carryUntil = t + 1.4
      this.tossed = false
      this.o.sfx("cup", r)
    }
    this.cup.visible = t < this.carryUntil
    if (this.cup.visible) {
      const ahead = r.facing === "left" ? -0.35 : r.facing === "right" ? 0.35 : 0
      this.cup.position.set(r.x + ahead, 1.35 + r.h, r.z + 0.05)
    } else if (!this.tossed) {
      // drained and tossed: a splash of water and the cup, over his shoulder
      this.tossed = true
      if (this.o.reduceMotion) return
      for (let i = 0; i < 6; i++) {
        this.particles.spawn({
          x: r.x,
          y: 1.4 + r.h,
          z: r.z,
          vx: (this.rand() - 0.5) * 1.6,
          vy: 1.2 + this.rand(),
          vz: (this.rand() - 0.5) * 0.8,
          max: 0.6,
          size: 0.0625,
          gravity: 9,
          color: C.sky,
        })
      }
      this.particles.spawn({ x: r.x, y: 1.4, z: r.z, vx: -r.vx * 0.3 - 0.6, vy: 3, vz: -r.vz * 0.3, max: 1.0, size: 0.16, gravity: 9, color: C.cream })
    }
  }
}
