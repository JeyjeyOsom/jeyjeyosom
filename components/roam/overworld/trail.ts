// The Gel trail (CONTEXT.md: Gel): until the visitor has stood at every
// Landmark's door, a line of Gels runs from the start arch along the road
// to the next Landmark they haven't reached, then on from that one to the
// next. Its progress is the SIGHTSEER Medal's set, so it ends when that
// Medal is earned. Running over a Gel takes it with a chime; it isn't
// scored (Gels are Play Mode's score).

import * as THREE from "three"
import { GEL } from "../../sprites"
import { type LandmarkPlacement, landmarkLocal, LOOP_LENGTH, roadPoint, type Solid, type Vec2, walkable } from "./level"
import { PX, PY, pxBoxes } from "./landmarks"
import { resolveMove, type RunnerState } from "./movement"
import { boxesGeometry } from "./voxels"

/** Ground between Gels, in world units */
export const SPACING = 2.4
/** Off the road's centre toward the Landmark the trail leads to */
const LANE = 0.95
const LIFT = 0.16
const REACH = 0.75
const POP = 0.3

/** A point in world space from a Landmark's own frame (x across its front, z out of it) */
function fromLocal(l: LandmarkPlacement, lx: number, lz: number): Vec2 {
  const c = Math.cos(l.angle)
  const s = Math.sin(l.angle)
  return { x: l.x + lx * c + lz * s, z: l.z - lx * s + lz * c }
}

/** Which side of the road a Landmark stands: +1 away from the loop's centre */
function sideOf(l: LandmarkPlacement): number {
  const p = roadPoint(l.s)
  return Math.sign((l.x - p.x) * p.nx + (l.z - p.z) * p.nz) || 1
}

function lane(s: number, side: number): Vec2 {
  const p = roadPoint(s)
  return { x: p.x + p.nx * side * LANE, z: p.z + p.nz * side * LANE }
}

/**
 * The way from a point beside a Landmark to its door: straight when the
 * door faces that way, otherwise round the near corner of its footprint
 */
export function doorPath(l: LandmarkPlacement, from: Vec2): Vec2[] {
  const p = landmarkLocal(l, from.x, from.z)
  const front = l.hz + 1
  if (p.z >= front - 0.4) return [from, l.door]
  const sx = (p.x >= 0 ? 1 : -1) * (l.hx + 1)
  return [from, fromLocal(l, sx, p.z), fromLocal(l, sx, front), l.door]
}

/**
 * The trail from one Landmark's door to another's: out to the road, along
 * it the way laps run, and in to the far door, as Gel spots every SPACING
 */
export function trailPoints(from: LandmarkPlacement, to: LandmarkPlacement): Vec2[] {
  const fromSide = sideOf(from)
  const toSide = sideOf(to)
  const endS = to.s > from.s ? to.s : to.s + LOOP_LENGTH
  const line: Vec2[] = doorPath(from, lane(from.s, fromSide)).reverse()
  for (let s = from.s + 1; s < endS; s += 1) {
    // across the road over the first few metres, to the far Landmark's side
    const k = Math.min(1, (s - from.s) / 6)
    line.push(lane(s, fromSide + (toSide - fromSide) * k))
  }
  line.push(...doorPath(to, lane(endS, toSide)))

  // even steps along the line, from just off the first door to just short of the last
  const spots: Vec2[] = []
  let next = 1.6
  let walked = 0
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1]
    const b = line[i]
    const len = Math.hypot(b.x - a.x, b.z - a.z)
    while (next <= walked + len) {
      const k = (next - walked) / len
      spots.push({ x: a.x + (b.x - a.x) * k, z: a.z + (b.z - a.z) * k })
      next += SPACING
    }
    walked += len
  }
  while (spots.length && Math.hypot(spots[spots.length - 1].x - to.door.x, spots[spots.length - 1].z - to.door.z) < 0.6) spots.pop()
  return spots
}

export interface TrailHost {
  glow: THREE.Material
  shadow: THREE.Material
  flatDisc: () => THREE.BufferGeometry
  solids: Solid[]
  reduceMotion: boolean
  /** a Gel was taken here */
  picked: (at: Vec2) => void
}

interface TrailGel {
  group: THREE.Group
  gel: THREE.Mesh
  shadow: THREE.Mesh
  x: number
  z: number
  phase: number
  takenAt: number | null
}

export class GelTrail {
  private readonly scene: THREE.Scene
  private readonly host: TrailHost
  private readonly order: LandmarkPlacement[]
  private readonly visited: Set<string>
  private readonly geometry: THREE.BufferGeometry
  private readonly disc: THREE.BufferGeometry
  private gels: TrailGel[] = []
  private target: string | null = null
  private yaw = 0

  constructor(scene: THREE.Scene, landmarks: LandmarkPlacement[], visited: string[], host: TrailHost) {
    this.scene = scene
    this.host = host
    this.order = [...landmarks].sort((a, b) => a.s - b.s)
    this.visited = new Set(visited)
    this.geometry = boxesGeometry(pxBoxes(GEL, -3 * PX, 8 * PY, 0, 0.06))
    this.disc = host.flatDisc()
    this.lay(null)
  }

  /** The Landmark the trail leads to now, if any */
  get leadsTo(): string | null {
    return this.target
  }

  /** The Runner stood at a Landmark's door */
  visit(zoneId: string) {
    if (this.visited.has(zoneId)) return
    this.visited.add(zoneId)
    if (zoneId === this.target) this.lay(this.order.find((l) => l.zoneId === zoneId) ?? null)
  }

  /** Turn the Gels to face the camera */
  setYaw(yaw: number) {
    this.yaw = yaw
    for (const g of this.gels) g.gel.rotation.y = yaw
  }

  update(t: number, r: RunnerState) {
    const still = this.host.reduceMotion
    for (let i = this.gels.length - 1; i >= 0; i--) {
      const g = this.gels[i]
      if (g.takenAt !== null) {
        const k = (t - g.takenAt) / POP
        if (k >= 1 || still) {
          this.scene.remove(g.group)
          this.gels.splice(i, 1)
          continue
        }
        // up and away, shrinking
        g.gel.position.y = LIFT + k * 0.6
        g.gel.scale.setScalar(1 - k * 0.7)
        continue
      }
      // a stepped bob of one pixel, each a little out of time with the next
      g.gel.position.y = LIFT + (still || ((t / 0.9 + g.phase) % 1) < 0.5 ? 0 : PY)
      if (r.h < 0.9 && Math.hypot(r.x - g.x, r.z - g.z) < REACH) {
        g.takenAt = t
        g.shadow.visible = false
        this.host.picked({ x: g.x, z: g.z })
      }
    }
  }

  dispose() {
    this.clear()
    this.geometry.dispose()
    this.disc.dispose()
  }

  private clear() {
    for (const g of this.gels) this.scene.remove(g.group)
    this.gels = []
  }

  /** Lay the trail to the next Landmark not yet visited, from `from` (or the one before it) */
  private lay(from: LandmarkPlacement | null) {
    this.clear()
    const n = this.order.length
    const at = this.order.findIndex((l) => !this.visited.has(l.zoneId))
    if (at < 0 || n < 2) {
      this.target = null
      return
    }
    const to = this.order[at]
    const start = from && from !== to ? from : this.order[(at - 1 + n) % n]
    this.target = to.zoneId
    trailPoints(start, to).forEach((p, i) => {
      if (!this.clearAt(p)) return
      const group = new THREE.Group()
      group.position.set(p.x, 0, p.z)
      const gel = new THREE.Mesh(this.geometry, this.host.glow)
      gel.rotation.y = this.yaw
      const shadow = new THREE.Mesh(this.disc, this.host.shadow)
      shadow.scale.set(0.24, 1, 0.14)
      shadow.renderOrder = 1
      group.add(gel, shadow)
      this.scene.add(group)
      this.gels.push({ group, gel, shadow, x: p.x, z: p.z, phase: (i * 0.17) % 1, takenAt: null })
    })
  }

  /** Somewhere the Runner can reach: on land and out of every solid */
  private clearAt(p: Vec2): boolean {
    if (!walkable(p.x, p.z)) return false
    const q = resolveMove(p.x, p.z, p.x, p.z, this.host.solids, walkable, 0.2)
    return Math.abs(q.x - p.x) < 1e-3 && Math.abs(q.z - p.z) < 1e-3
  }
}
