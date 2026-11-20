// The Overworld engine's public face: what the interface passes in (the
// Look) and everything the engine reports back through its callbacks.

import type { LapFinish } from "./lap"
import type { LifeEvent, LifeSfx } from "./life"
import type { ThumbStick } from "./controls"

export interface Look {
  /** 0: straight-on three-quarter view; 45: diamond */
  yaw: 0 | 45
  lens: "ortho" | "perspective"
  /** internal rows before the pixel upscale */
  rows: 180 | 270
  tones: 2 | 3
}

/** Juan's pick from the LOOK prototype (2026-11-20): the diamond angle
 *  through the slightly perspective lens */
export const DEFAULT_LOOK: Look = { yaw: 45, lens: "perspective", rows: 180, tones: 2 }

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
  /** where he stands on the island, for the minimap */
  world: { x: number; z: number }
  /** how fast he's going, in units a second (the tab-title runner) */
  speed: number
}

export type StepSurface = "road" | "grass" | "sand" | "wood" | "puddle"

export type OverworldSfx = LifeSfx | "horn" | "stone"

/** Things the Runner did that the interface keeps score of (Medals) */
export type OverworldEvent = LifeEvent | { kind: "pier" | "stones" | "honk" | "watch" | "banana" }

export interface LapReport {
  running: boolean
  /** seconds into the Lap, to the tenth */
  time: number
  best: number | null
  /** the Lap that just ended, if one did */
  finished: LapFinish | null
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
  /** a sound from something in view */
  onSfx: (name: OverworldSfx) => void
  /** the Lap on his watch changed (at most every tenth of a second) */
  onLap: (report: LapReport) => void
  /** the year to show while he runs the Quest Road, or null off it */
  onYear: (year: number | null) => void
  onEvent: (e: OverworldEvent) => void
  /** a footfall, and what it lands on */
  onStep: (surface: StepSurface) => void
  /** how near the coast he is, 0 inland .. 1 on the beach, for the surf */
  onAmbience: (waves: number) => void
  /** what the pointer is over, or null */
  onHover: (caption: string | null) => void
  /** a gamepad moved him (so the prompts can show its buttons) */
  onPad: () => void
  /** the touch thumb-stick: where it was planted and where the thumb is,
   *  in CSS pixels, and whether it's pushed far enough to sprint; null
   *  when no thumb is down */
  onStick: (stick: ThumbStick | null) => void
  /** a Landmark clicked in the scene */
  onOpen: (zoneId: string) => void
  /** how hard it's raining, 0..1, reported in twentieths */
  onRain: (intensity: number) => void
  onFrame: (report: FrameReport) => void
  onFrameTime: (ms: number) => void
  onContextLost: () => void
}
