// The textures the engine paints for itself: the Runner's sprite sheet
// (every facing and pose, with the headlamp lit and unlit, recoloured for
// a Kit) and the waterfall's streak pattern.

import {
  HEADLAMP_LIT,
  HEADLAMP_LIT_FRONT,
  RUNNER_BACK_A,
  RUNNER_BACK_B,
  RUNNER_BACK_JUMP,
  RUNNER_BACK_SHARED,
  RUNNER_BACK_STANDING,
  RUNNER_BACK_WATCH,
  RUNNER_FRAME_A,
  RUNNER_FRAME_B,
  RUNNER_FRONT_A,
  RUNNER_FRONT_B,
  RUNNER_FRONT_JUMP,
  RUNNER_FRONT_SHARED,
  RUNNER_FRONT_STANDING,
  RUNNER_FRONT_WATCH,
  RUNNER_JUMP,
  RUNNER_SHARED,
  RUNNER_STANDING,
  RUNNER_WATCH,
  type Px,
} from "../../sprites"
import type { Facing } from "./movement"

// The sprite sheet: one row per headlamp state, and for each facing (side,
// front, back) the same run of poses
export const POSES = ["stand", "a", "b", "jump", "watch"] as const
export type Pose = (typeof POSES)[number]
export const FRAME_COLS = 3 * POSES.length
export const FACING_SET: Record<Facing, number> = { right: 0, left: 0, down: 1, up: 2 }
/** Which way the headlamp throws its beam (rotation about y from +x) */
export const LAMP_ANGLE: Record<Facing, number> = { right: 0, up: Math.PI / 2, left: Math.PI, down: -Math.PI / 2 }

/** Paint the sheet; a Kit swaps the singlet's two colours */
export function drawRunnerAtlas(
  canvas: HTMLCanvasElement = document.createElement("canvas"),
  kit?: { top: string; bottom: string }
): HTMLCanvasElement {
  canvas.width = 16 * FRAME_COLS
  canvas.height = 40
  const g = canvas.getContext("2d")!
  g.clearRect(0, 0, canvas.width, canvas.height)
  const swap = (fill: string) => {
    const f = fill.toUpperCase()
    if (kit && f === "#FF9A4A") return kit.top
    if (kit && f === "#7EC8E8") return kit.bottom
    return fill
  }
  const sets: Array<{ shared: Px[]; lamp: Px[]; poses: Record<Pose, Px[]> }> = [
    {
      shared: RUNNER_SHARED,
      lamp: HEADLAMP_LIT,
      poses: { stand: RUNNER_STANDING, a: RUNNER_FRAME_A, b: RUNNER_FRAME_B, jump: RUNNER_JUMP, watch: RUNNER_WATCH },
    },
    {
      shared: RUNNER_FRONT_SHARED,
      lamp: HEADLAMP_LIT_FRONT,
      poses: {
        stand: RUNNER_FRONT_STANDING,
        a: RUNNER_FRONT_A,
        b: RUNNER_FRONT_B,
        jump: RUNNER_FRONT_JUMP,
        watch: RUNNER_FRONT_WATCH,
      },
    },
    {
      shared: RUNNER_BACK_SHARED,
      lamp: [],
      poses: {
        stand: RUNNER_BACK_STANDING,
        a: RUNNER_BACK_A,
        b: RUNNER_BACK_B,
        jump: RUNNER_BACK_JUMP,
        watch: RUNNER_BACK_WATCH,
      },
    },
  ]
  for (let lit = 0; lit < 2; lit++) {
    sets.forEach(({ shared, lamp, poses }, set) => {
      POSES.forEach((name, k) => {
        const pose = poses[name]
        const ox = (set * POSES.length + k) * 16
        const oy = lit * 20
        for (const [x, y, w, h, fill] of [...shared, ...pose, ...(lit ? lamp : [])]) {
          g.fillStyle = swap(fill)
          g.fillRect(ox + x, oy + y, w, h)
        }
      })
    })
  }
  return canvas
}

// The waterfall's texture: 12 x 12 texels of three tones (deep, mid, foam)
// in streaks, recoloured whenever the sky changes
export const WATER_SIZE = 12
export const WATER_PATTERN: Uint8Array = (() => {
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
