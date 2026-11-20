// The dog (CONTEXT.md: Overworld): a tan aspin who waits by the pasture
// gate until the Runner comes by, then falls in at his side for the rest
// of the visit, and on later visits too. He runs where the Runner runs,
// keeps up when he sprints, sits and wags when he stops, hops when he
// jumps, follows him through fast travel, and barks when clicked.
// Remembered in the visitor's browser (roam-dog).

import * as THREE from "three"
import { PASTURE, type Solid, type Vec2, walkable } from "./level"
import { bubbleBoxes } from "./life"
import { resolveMove, type RunnerState } from "./movement"
import { type Box, boxesGeometry, centered } from "./voxels"

const STORE = "roam-dog"
const COAT = 0xc8894a
const COAT_DARK = 0xa86e3a
const CHEST = 0xf2e6d0
const NOSE = 0x2b2522
const RADIUS = 0.25

/** Where he waits: just outside the pasture's gate */
const GATE = { x: (PASTURE.minX + PASTURE.maxX) / 2 + 1.2, z: PASTURE.maxZ + 1.4 }

export type DogSfx = "bark"

export interface DogHost {
  occluder: THREE.Material
  glow: THREE.Material
  shadow: THREE.Material
  flatDisc: () => THREE.BufferGeometry
  solids: Solid[]
  reduceMotion: boolean
  sfx: (name: DogSfx, at: Vec2) => void
}

function bodyBoxes(): Box[] {
  return [
    centered(0, 0.32, 0, 0.62, 0.3, 0.3, COAT), // body
    centered(0.08, 0.3, 0, 0.3, 0.06, 0.26, CHEST), // belly
    centered(0.36, 0.4, 0, 0.12, 0.24, 0.26, CHEST), // chest
  ]
}

function headBoxes(): Box[] {
  return [
    centered(0, 0, 0, 0.26, 0.24, 0.26, COAT),
    centered(0.17, 0.02, 0, 0.14, 0.12, 0.16, CHEST), // muzzle
    centered(0.24, 0.08, 0, 0.04, 0.05, 0.06, NOSE),
    centered(0.07, 0.12, 0.08, 0.04, 0.05, 0.04, NOSE), // eyes
    centered(0.07, 0.12, -0.08, 0.04, 0.05, 0.04, NOSE),
    centered(-0.05, 0.24, 0.09, 0.08, 0.1, 0.06, COAT_DARK), // ears up
    centered(-0.05, 0.24, -0.09, 0.08, 0.1, 0.06, COAT_DARK),
  ]
}

function legBoxes(dx: number, dz: number): Box[] {
  return [centered(dx, 0, dz, 0.08, 0.32, 0.08, COAT), centered(dx, 0, dz, 0.09, 0.05, 0.09, CHEST)]
}

/** A curled tail, its pivot at the rump */
function tailBoxes(): Box[] {
  return [centered(-0.04, 0, 0, 0.08, 0.16, 0.08, COAT), centered(0.0, 0.14, 0, 0.1, 0.08, 0.08, CHEST)]
}

export class Dog {
  private readonly host: DogHost
  private readonly group = new THREE.Group()
  private readonly body = new THREE.Group()
  private readonly head: THREE.Mesh
  private readonly tail: THREE.Mesh
  private readonly legs: THREE.Mesh[] = []
  private readonly woof: THREE.Mesh
  private readonly poof: THREE.Mesh
  /** waiting at the gate, or at his side */
  private following: boolean
  private x = GATE.x
  private z = GATE.z
  private heading = Math.PI / 2
  private h = 0
  private vh = 0
  private hopAt = Infinity
  private woofUntil = 0
  private poofUntil = 0
  private side = 1
  private stillSince = 0
  /** the way the Runner last ran: his resting spot is set from this, which
   *  holds still while he does (the dog's own facing turns toward him) */
  private lastDir = { x: 0, z: 1 }

  constructor(scene: THREE.Scene, host: DogHost) {
    this.host = host
    let met = false
    try {
      met = localStorage.getItem(STORE) === "1"
    } catch {
      /* storage unavailable */
    }
    this.following = met

    const body = new THREE.Mesh(boxesGeometry(bodyBoxes()), host.occluder)
    this.head = new THREE.Mesh(boxesGeometry(headBoxes()), host.occluder)
    this.head.position.set(0.38, 0.52, 0)
    this.tail = new THREE.Mesh(boxesGeometry(tailBoxes()), host.occluder)
    this.tail.position.set(-0.31, 0.56, 0)
    this.tail.rotation.z = 0.5
    for (const [dx, dz] of [[0.2, 0.1], [0.2, -0.1], [-0.2, 0.1], [-0.2, -0.1]]) {
      const leg = new THREE.Mesh(boxesGeometry(legBoxes(0, 0)), host.occluder)
      leg.position.set(dx, 0, dz)
      this.legs.push(leg)
    }
    this.body.add(body, this.head, this.tail, ...this.legs)
    const shadow = new THREE.Mesh(host.flatDisc(), host.shadow)
    shadow.scale.set(0.9, 1, 0.5)
    shadow.renderOrder = 1
    this.group.add(this.body, shadow)
    scene.add(this.group)

    this.woof = new THREE.Mesh(boxesGeometry(bubbleBoxes("WOOF")), host.glow)
    this.woof.visible = false
    scene.add(this.woof)
    // a puff of dust when he catches up across the island
    this.poof = new THREE.Mesh(
      boxesGeometry([centered(-0.2, 0.05, 0.1, 0.16, 0.12, 0.16, CHEST), centered(0.18, 0.12, -0.05, 0.14, 0.1, 0.14, CHEST), centered(0, 0.25, 0, 0.12, 0.1, 0.12, CHEST)]),
      host.occluder
    )
    this.poof.visible = false
    scene.add(this.poof)

    this.place()
  }

  /** The dog's group, for a pointer's caption and click */
  get object(): THREE.Object3D {
    return this.group
  }

  get isFollowing(): boolean {
    return this.following
  }

  get position(): Vec2 {
    return { x: this.x, z: this.z }
  }

  /** A click or a tap: a bark and a wag */
  bark(t: number) {
    this.woofUntil = t + 1.1
    this.host.sfx("bark", this.position)
  }

  /**
   * The Runner was put at a door (fast travel, back from a page): catch up,
   * on the open side, away from the Landmark whose front faces `out`
   */
  arrive(runner: RunnerState, t: number, out: Vec2) {
    if (!this.following) return
    this.lastDir = { x: -out.x, z: -out.z }
    this.besides(runner)
    this.poofUntil = t + 0.35
  }

  /** Advance him; `jumped` is the Runner leaving the ground this frame */
  update(dt: number, t: number, r: RunnerState, jumped: boolean) {
    if (!this.following) {
      // lying by the gate until the Runner comes near
      if (Math.hypot(r.x - this.x, r.z - this.z) < 4) {
        this.following = true
        this.bark(t)
        try {
          localStorage.setItem(STORE, "1")
        } catch {
          /* storage unavailable */
        }
      }
      this.pose(t, false, true)
      return
    }

    if (jumped) this.hopAt = t + 0.18
    if (t >= this.hopAt && this.h === 0) {
      this.vh = 4.6
      this.hopAt = Infinity
    }
    if (this.h > 0 || this.vh > 0) {
      this.vh -= 22 * dt
      this.h = Math.max(0, this.h + this.vh * dt)
      if (this.h === 0) this.vh = 0
    }

    // too far behind (he was carried off by fast travel): catch up at once
    if (Math.hypot(r.x - this.x, r.z - this.z) > 14) {
      this.besides(r)
      this.poofUntil = t + 0.35
    }

    // a spot at his side, a little behind
    const speed = Math.hypot(r.vx, r.vz)
    if (speed > 0.3) this.lastDir = { x: r.vx / speed, z: r.vz / speed }
    const target = this.spot(r)
    const dx = target.x - this.x
    const dz = target.z - this.z
    const gap = Math.hypot(dx, dz)
    let moving = false
    if (gap > 0.25) {
      // keep up, a touch faster than he runs, slower when nearly there
      const pace = Math.min(Math.max(speed * 1.15, 2.2), 8) * Math.min(1, gap / 0.9)
      const step = Math.min(gap, pace * dt)
      // he goes round trees and Landmarks as the Runner does (but never
      // blocks the Runner himself)
      const next = resolveMove(this.x, this.z, this.x + (dx / gap) * step, this.z + (dz / gap) * step, this.host.solids, walkable, RADIUS)
      moving = Math.hypot(next.x - this.x, next.z - this.z) > 0.002
      this.x = next.x
      this.z = next.z
      if (moving) this.heading = Math.atan2(-dz, dx)
    }
    if (moving || speed > 0.3) this.stillSince = t
    // facing the Runner when they both stop
    if (!moving && speed < 0.3) this.heading = Math.atan2(-(r.z - this.z), r.x - this.x)
    this.pose(t, moving, false)
  }

  /** Room for him to stand here: on land, clear of every solid */
  private free(x: number, z: number): boolean {
    if (!walkable(x, z)) return false
    const p = resolveMove(x, z, x, z, this.host.solids, walkable, RADIUS)
    return Math.abs(p.x - x) < 1e-3 && Math.abs(p.z - z) < 1e-3
  }

  /**
   * His place beside the Runner: a little behind, on his side; if that's
   * inside a wall (the Runner at a Landmark's door, say), the other side,
   * then out in front
   */
  private spot(r: RunnerState): Vec2 {
    const d = this.lastDir
    const at = (back: number, side: number) => ({ x: r.x - d.x * back - d.z * 0.75 * side, z: r.z - d.z * back + d.x * 0.75 * side })
    for (const [back, flip] of [[0.9, 1], [0.9, -1], [-0.6, 1], [-0.6, -1]]) {
      const p = at(back, this.side * flip)
      if (this.free(p.x, p.z)) {
        this.side *= flip
        return p
      }
    }
    return at(0.9, this.side)
  }

  /** Put him straight at his place, for a fast travel */
  private besides(r: RunnerState) {
    this.side = -this.side
    const p = this.spot(r)
    this.x = p.x
    this.z = p.z
  }

  /** Legs, tail and head for this moment; lying at the gate, sitting when still */
  private pose(t: number, moving: boolean, waiting: boolean) {
    const still = this.host.reduceMotion
    const sitting = !waiting && !moving && t - this.stillSince > 1.2
    const stride = !still && moving && Math.floor(t * 9) % 2 === 1
    this.legs.forEach((leg, i) => {
      const front = i < 2
      leg.position.y = waiting ? -0.22 : sitting && !front ? -0.14 : 0
      leg.position.x = (front ? 0.2 : -0.2) + (stride ? (i % 2 ? 0.05 : -0.05) : 0)
    })
    this.body.position.y = waiting ? -0.2 : sitting ? -0.06 : this.h
    this.body.rotation.z = sitting ? 0.25 : 0
    const happy = t < this.woofUntil || sitting || moving
    this.tail.rotation.z = still ? 0.5 : happy ? [0.2, 0.8][Math.floor(t * (moving ? 10 : 6)) % 2] : 0.5
    this.head.position.y = waiting ? 0.42 : 0.52
    this.place()
    this.woof.visible = t < this.woofUntil
    this.woof.position.set(this.x, 1.25 + this.h, this.z)
    this.poof.visible = !still && t < this.poofUntil
    this.poof.position.set(this.x, 0, this.z)
    this.poof.scale.setScalar(1 + (this.poofUntil - t) * 1.5)
  }

  private place() {
    this.group.position.set(this.x, 0, this.z)
    this.group.rotation.y = this.heading
  }

  /** Turn his bubble to face the camera */
  setYaw(yaw: number) {
    this.woof.rotation.y = yaw
  }

  /** Cars wait for him too */
  near(x: number, z: number, d: number): boolean {
    return Math.hypot(x - this.x, z - this.z) < d
  }
}

export const DOG_CAPTION = "A GOOD DOG. AN ASPIN, IN FACT."
