// How the Runner moves in the Overworld (ADR 0003): a circle on flat
// ground that slides along boxes and circles, no physics engine. Pure
// functions over plain state, so the rules can be reasoned about (and
// tested) without a renderer.

import { type Solid, type Vec2 } from "./level"

export type Facing = "left" | "right" | "up" | "down"

export interface RunnerState {
  x: number
  z: number
  vx: number
  vz: number
  /** height of the hop above the ground */
  h: number
  vh: number
  airborne: boolean
  facing: Facing
  /** pressing a direction this step */
  moving: boolean
  sprinting: boolean
}

/** What the keyboard asks for this step, in screen terms */
export interface Intent {
  /** -1 left .. 1 right */
  x: number
  /** -1 down (toward the camera) .. 1 up (away) */
  y: number
  sprint: boolean
  jump: boolean
}

/** The camera's ground-plane axes: where "screen right" and "screen up" point */
export interface ScreenAxes {
  right: Vec2
  up: Vec2
}

export const RUN_SPEED = 4.5
export const SPRINT_SPEED = 6.3
const ACCEL = 40 // reaches run speed in about a tenth of a second
const DECEL = 22 // the slide to a stop
const JUMP_VELOCITY = 5.6
const GRAVITY = 24
export const RUNNER_RADIUS = 0.32

export function newRunner(x: number, z: number, facing: Facing = "right"): RunnerState {
  return { x, z, vx: 0, vz: 0, h: 0, vh: 0, airborne: false, facing, moving: false, sprinting: false }
}

function moveToward(current: number, target: number, maxDelta: number): number {
  if (Math.abs(target - current) <= maxDelta) return target
  return current + Math.sign(target - current) * maxDelta
}

/** Push a circle out of one solid; returns the corrected centre */
function pushOut(x: number, z: number, r: number, solid: Solid): Vec2 {
  if (solid.kind === "circle") {
    const dx = x - solid.x
    const dz = z - solid.z
    const d = Math.hypot(dx, dz)
    const min = r + solid.r
    if (d >= min) return { x, z }
    if (d < 1e-6) return { x: solid.x + min, z }
    return { x: solid.x + (dx / d) * min, z: solid.z + (dz / d) * min }
  }
  const cx = Math.min(Math.max(x, solid.minX), solid.maxX)
  const cz = Math.min(Math.max(z, solid.minZ), solid.maxZ)
  const dx = x - cx
  const dz = z - cz
  const d = Math.hypot(dx, dz)
  if (d >= r) return { x, z }
  if (d > 1e-6) return { x: cx + (dx / d) * r, z: cz + (dz / d) * r }
  // centre inside the box: leave by the shallowest side
  const exits = [
    { x: solid.minX - r, z, depth: x - solid.minX },
    { x: solid.maxX + r, z, depth: solid.maxX - x },
    { x, z: solid.minZ - r, depth: z - solid.minZ },
    { x, z: solid.maxZ + r, depth: solid.maxZ - z },
  ]
  exits.sort((a, b) => a.depth - b.depth)
  return { x: exits[0].x, z: exits[0].z }
}

/** Resolve a move from (x0, z0) toward (x1, z1) against the world */
export function resolveMove(
  x0: number,
  z0: number,
  x1: number,
  z1: number,
  solids: Solid[],
  walkable: (x: number, z: number) => boolean,
  r = RUNNER_RADIUS
): Vec2 {
  let p = { x: x1, z: z1 }
  for (let pass = 0; pass < 3; pass++) {
    for (const s of solids) p = pushOut(p.x, p.z, r, s)
  }
  if (walkable(p.x, p.z)) return p
  // The coast and the pond: slide along whichever axis stays on land
  if (walkable(p.x, z0)) return { x: p.x, z: z0 }
  if (walkable(x0, p.z)) return { x: x0, z: p.z }
  return { x: x0, z: z0 }
}

function facingFor(ix: number, iy: number, current: Facing): Facing {
  if (ix === 0 && iy === 0) return current
  if (Math.abs(ix) >= Math.abs(iy)) return ix > 0 ? "right" : "left"
  return iy > 0 ? "up" : "down"
}

export function stepRunner(
  s: RunnerState,
  intent: Intent,
  dt: number,
  axes: ScreenAxes,
  solids: Solid[],
  walkable: (x: number, z: number) => boolean
): RunnerState {
  // Keyboard diagonals are no faster than straight lines
  const len = Math.hypot(intent.x, intent.y)
  const ix = len > 1 ? intent.x / len : intent.x
  const iy = len > 1 ? intent.y / len : intent.y
  const moving = len > 0

  const speed = intent.sprint ? SPRINT_SPEED : RUN_SPEED
  const tx = (axes.right.x * ix + axes.up.x * iy) * speed
  const tz = (axes.right.z * ix + axes.up.z * iy) * speed
  const rate = (moving ? ACCEL : DECEL) * dt
  const vx = moveToward(s.vx, tx, rate)
  const vz = moveToward(s.vz, tz, rate)

  const next = resolveMove(s.x, s.z, s.x + vx * dt, s.z + vz * dt, solids, walkable)

  let { h, vh, airborne } = s
  if (intent.jump && !airborne) {
    airborne = true
    vh = JUMP_VELOCITY
  }
  if (airborne) {
    vh -= GRAVITY * dt
    h += vh * dt
    if (h <= 0) {
      h = 0
      vh = 0
      airborne = false
    }
  }

  // A wall eats the speed it stopped, so the Pace drops when blocked. A
  // push never adds speed: a moving solid (a car) shoving him out of its
  // way would otherwise turn the shove into a long slide.
  let nvx = (next.x - s.x) / dt
  let nvz = (next.z - s.z) / dt
  const cap = Math.hypot(vx, vz)
  const got = Math.hypot(nvx, nvz)
  if (got > cap) {
    const k = got > 1e-9 ? cap / got : 0
    nvx *= k
    nvz *= k
  }

  return {
    x: next.x,
    z: next.z,
    vx: nvx,
    vz: nvz,
    h,
    vh,
    airborne,
    facing: facingFor(ix, iy, s.facing),
    moving,
    sprinting: moving && intent.sprint,
  }
}

// ---- Pace (CONTEXT.md) ----
// Scaled so that running reads as Juan's 5K pace (5:43/km) and sprinting
// as roughly his 400 m pace: the watch on his wrist, not a speedometer.
const METERS_PER_UNIT = 1000 / 343 / RUN_SPEED

/** "5:43" for a speed in units per second, or null when standing still */
export function formatPace(unitsPerSecond: number): string | null {
  if (unitsPerSecond < 0.4) return null
  const secondsPerKm = 1000 / (unitsPerSecond * METERS_PER_UNIT)
  if (secondsPerKm > 59 * 60) return null
  const total = Math.round(secondsPerKm)
  const m = Math.floor(total / 60)
  const sec = total % 60
  return `${m}:${String(sec).padStart(2, "0")}`
}
