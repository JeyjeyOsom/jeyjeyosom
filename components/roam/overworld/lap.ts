// The Lap (CONTEXT.md: Lap, Ghost): one circuit of the loop road in the
// running direction, from the start/finish line at the start arch back to
// it, timed on the Runner's watch. Eight checkpoints along the road must
// be passed in order, on the road, so cutting across the island doesn't
// count. The best Lap and the path it took (the Ghost) are kept in the
// visitor's browser. Pure logic over positions: no three.js.

import { LAP_START_S, LOOP_LENGTH, loopS, ROAD, roadDistance } from "./level"

const CHECKPOINTS = 8
/** How far from the centreline still counts as on the road */
const CORRIDOR = ROAD.halfWidth + 1.5
/** Ghost samples per second */
const RATE = 10
const STORE = "roam-lap"

export interface LapFinish {
  time: number
  newBest: boolean
}

export class LapTimer {
  running = false
  /** seconds into the current Lap */
  time = 0
  best: number | null = null
  /** the best Lap's path: x, z pairs, RATE per second */
  ghost: number[] | null = null
  private recording: number[] = []
  private nextCheckpoint = 0
  private prevLapS: number | null = null

  constructor() {
    try {
      const raw = localStorage.getItem(STORE)
      if (!raw) return
      const saved = JSON.parse(raw) as { best?: unknown; ghost?: unknown }
      if (typeof saved.best === "number" && saved.best > 0) this.best = saved.best
      if (Array.isArray(saved.ghost) && saved.ghost.every((v) => typeof v === "number")) this.ghost = saved.ghost
    } catch {
      /* storage unavailable or corrupt: start fresh */
    }
  }

  /** Forget the Lap in progress (a door, fast travel, a respawn) */
  reset() {
    this.running = false
    this.time = 0
    this.prevLapS = null
  }

  /**
   * Advance the watch by dt with the Runner at (x, z). `ticking` is false
   * while a panel pauses him. Returns the Lap he just finished, if any.
   */
  update(dt: number, x: number, z: number, ticking: boolean): LapFinish | null {
    const L = LOOP_LENGTH
    const onRoad = roadDistance(x, z) < CORRIDOR
    const lapS = (((loopS(x, z) - LAP_START_S) % L) + L) % L
    const prev = this.prevLapS
    this.prevLapS = onRoad ? lapS : null

    if (this.running && ticking) {
      this.time += dt
      while (this.recording.length / 2 < Math.floor(this.time * RATE) + 1) this.recording.push(x, z)
    }
    if (!onRoad || prev === null) return null

    const forward = prev > L - 8 && lapS < 8
    const backward = prev < 8 && lapS > L - 8
    if (backward) {
      // over the line the wrong way: that's no Lap
      this.running = false
      return null
    }
    if (this.running && this.nextCheckpoint < CHECKPOINTS) {
      const at = (this.nextCheckpoint * L) / CHECKPOINTS
      if (lapS >= at && lapS < at + 12) this.nextCheckpoint++
    }
    if (!forward) return null

    let finish: LapFinish | null = null
    if (this.running && this.nextCheckpoint >= CHECKPOINTS) {
      const time = this.time
      const newBest = this.best === null || time < this.best
      if (newBest) {
        this.best = time
        this.ghost = this.recording.map((v) => Math.round(v * 100) / 100)
        this.save()
      }
      finish = { time, newBest }
    }
    // every crossing starts the next Lap
    this.running = true
    this.time = 0
    this.nextCheckpoint = 1
    this.recording = [x, z]
    return finish
  }

  /** Where the Ghost is at this many seconds into its Lap, and which way it's going */
  ghostAt(time: number): { x: number; z: number; dx: number; dz: number } | null {
    const g = this.ghost
    if (!g) return null
    const i = time * RATE
    const i0 = Math.floor(i)
    if (i0 + 1 >= g.length / 2) return null
    const f = i - i0
    const x0 = g[i0 * 2]
    const z0 = g[i0 * 2 + 1]
    const x1 = g[i0 * 2 + 2]
    const z1 = g[i0 * 2 + 3]
    return { x: x0 + (x1 - x0) * f, z: z0 + (z1 - z0) * f, dx: x1 - x0, dz: z1 - z0 }
  }

  private save() {
    try {
      localStorage.setItem(STORE, JSON.stringify({ best: this.best, ghost: this.ghost }))
    } catch {
      /* storage full or unavailable: the best Lap lasts this visit */
    }
  }
}

/** "1:19.8" */
export function formatLap(seconds: number): string {
  const tenths = Math.floor(seconds * 10)
  const m = Math.floor(tenths / 600)
  const s = Math.floor((tenths % 600) / 10)
  return `${m}:${String(s).padStart(2, "0")}.${tenths % 10}`
}
