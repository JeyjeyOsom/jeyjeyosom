// The Landmarks (CONTEXT.md: Landmark): one structure per Zone, about six
// units wide and three to four tall, built facing +z with its door in
// front. Each is static boxes plus a few moving parts, glowing parts and
// pixel screens. Parts animate on a clock that carries the Landmark's
// wake: 0 while the Runner is away, rising to 1 as he nears its door, so
// each one stirs when he arrives.
//
// Screens are canvases sized so one canvas pixel is one screen pixel (a
// vertical face is foreshortened by the camera's tilt). They carry only
// what a sign would carry, never Zone content (ADR 0002).

import type * as THREE from "three"
import {
  RUNNER_FRONT_JUMP,
  RUNNER_FRONT_SHARED,
  RUNNER_FRONT_STANDING,
  GEL,
  CRYSTAL,
  type Px,
} from "../../sprites"
import { CARTRIDGE_ART } from "../../cartridges"
import { drawText, textPx, textWidth } from "./font"
import { formatLap } from "./lap"
import { CAMERA_PITCH, GROUND_PIXEL } from "./level"
import { C } from "./props"
import { type Box, centered, extrudePx } from "./voxels"

/** One screen pixel across, and up a vertical face */
export const PX = 1 / 16
export const PY = 1 / (16 * Math.cos(CAMERA_PITCH))

export interface PartClock {
  /** seconds, monotonic */
  t: number
  /** 0 asleep .. 1 awake: how near the Runner is to the door */
  wake: number
  /** the sky's lamps are lit (Dusk) */
  lit: boolean
  /** seconds since the Overworld opened */
  elapsed: number
  /** reduced motion: hold one pose, skip transitions */
  still: boolean
  /** seconds since the Runner last took something here */
  since: number
  /** the Lap on his watch, if one is running, and the best Lap kept */
  lap: number | null
  best: number | null
}

export interface LandmarkPart {
  boxes: Box[]
  /** drawn unlit in its own colours (lamps, signs, the crystal) */
  glow?: boolean
  /** shown only while the lamps are lit */
  duskOnly?: boolean
  /** the part's pivot in the Landmark's frame; its boxes are relative to it */
  at?: [number, number, number]
  animate?: (part: THREE.Mesh, clock: PartClock) => void
}

export interface LandmarkScreen {
  cols: number
  rows: number
  /** centre of the screen, standing upright facing +z */
  at: [number, number, number]
  /** redraws per second */
  fps: number
  draw: (g: CanvasRenderingContext2D, clock: PartClock) => void
}

export interface LandmarkModel {
  boxes: Box[]
  parts?: LandmarkPart[]
  screens?: LandmarkScreen[]
  /** pools of light on the ground around it */
  pools?: Array<{ x: number; z: number; rx: number; rz: number; color: number }>
  /** where it shades the ground (the sun is high in the north-west), as
   *  rectangles given by their centres */
  shadows?: Array<{ x: number; z: number; w: number; d: number }>
  /** flat paving on the ground, under everything */
  floor?: Array<{ x: number; z: number; w: number; d: number; color: number }>
  /** top of the structure, where its label hangs */
  height: number
}

// ---- Helpers ----

/** A string in the 3x5 font as boxes on an upright face, centred on cx */
export function textBoxes(text: string, cx: number, top: number, z: number, color: number, scale = 1, depth = 0.03): Box[] {
  const x0 = cx - (textWidth(text) * PX * scale) / 2
  return textPx(text, 0, 0, "").map(([x, y, w, h]) => ({
    x: x0 + x * PX * scale,
    y: top - (y + h) * PY * scale,
    z,
    w: w * PX * scale,
    h: h * PY * scale,
    d: depth,
    color,
  }))
}

/** A string in the 3x5 font painted flat on a roof at height y, centred */
function roofText(text: string, cx: number, cz: number, y: number, color: number, scale = 1): Box[] {
  const gz = GROUND_PIXEL.z * scale
  const x0 = cx - (textWidth(text) * PX * scale) / 2
  const z0 = cz - (5 * gz) / 2
  return textPx(text, 0, 0, "").map(([x, row, w, h]) => ({
    x: x0 + x * PX * scale,
    y,
    z: z0 + row * gz,
    w: w * PX * scale,
    h: 0.01,
    d: h * gz,
    color,
  }))
}

/** Pixel rects as boxes on an upright face, one screen pixel each */
function pxBoxes(rects: Px[], x0: number, top: number, z: number, depth = 0.02): Box[] {
  return rects.flatMap(([x, y, w, h, fill]) =>
    fill.startsWith("#")
      ? [{ x: x0 + x * PX, y: top - (y + h) * PY, z, w: w * PX, h: h * PY, d: depth, color: parseInt(fill.slice(1), 16) }]
      : []
  )
}

function drawPx(g: CanvasRenderingContext2D, rects: Px[], dx: number, dy: number) {
  for (const [x, y, w, h, fill] of rects) {
    g.fillStyle = fill
    g.fillRect(x + dx, y + dy, w, h)
  }
}

/** A stepped bob of whole pixels, for parts that float */
const bob = (t: number, period: number, pixels: number, phase = 0) =>
  Math.floor((((t / period + phase) % 1) + 1) % 1 < 0.5 ? 0 : pixels) * PY

/** Small flags strung on a sagging line between two x positions */
function bunting(x0: number, x1: number, y: number, z: number, sag: number, colors: number[], every = 0.42) {
  const line: Box[] = []
  const flags: [Box[], Box[]] = [[], []]
  const n = Math.max(2, Math.round((x1 - x0) / every))
  for (let i = 0; i <= n * 3; i++) {
    const x = x0 + ((x1 - x0) * i) / (n * 3)
    const k = (x - (x0 + x1) / 2) / ((x1 - x0) / 2)
    line.push({ x, y: y - sag * (1 - k * k), z, w: (x1 - x0) / (n * 3) + 0.01, h: PY, d: 0.03, color: C.ink })
  }
  for (let i = 1; i < n; i++) {
    const x = x0 + ((x1 - x0) * i) / n
    const k = (x - (x0 + x1) / 2) / ((x1 - x0) / 2)
    const top = y - sag * (1 - k * k)
    const color = colors[i % colors.length]
    // a pennant: three pixels wide at the line, one at the tip
    flags[i % 2].push(
      { x: x - 1.5 * PX, y: top - 2 * PY, z, w: 3 * PX, h: 2 * PY, d: 0.03, color },
      { x: x - 0.5 * PX, y: top - 4 * PY, z, w: 1 * PX, h: 2 * PY, d: 0.03, color }
    )
  }
  return { line, flags }
}

/** Flags flutter while the Landmark is awake: the two sets lift in turn */
const flutter = (set: number) => (part: THREE.Mesh, c: PartClock) => {
  part.position.y = c.wake > 0.5 && Math.floor(c.t * 5) % 2 === set ? PY : 0
}

function checker(x0: number, y0: number, cols: number, rows: number, z: number, a: number, b: number): Box[] {
  const boxes: Box[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      boxes.push({ x: x0 + c * 2 * PX, y: y0 + (rows - 1 - r) * 2 * PY, z, w: 2 * PX, h: 2 * PY, d: 0.03, color: (r + c) % 2 ? a : b })
    }
  }
  return boxes
}

// ---- Title Screen: the start arch ----

function titleArch(): LandmarkModel {
  const boxes: Box[] = []
  for (const x of [-2.6, 2.6]) {
    boxes.push(
      centered(x, 0, 0, 0.92, 0.32, 0.92, C.purpleDark), // plinth
      centered(x, 0.32, 0, 0.8, 0.08, 0.8, C.purpleLight),
      centered(x, 0, 0, 0.7, 3.55, 0.7, C.purple),
      centered(x, 3.55, 0, 0.84, 0.14, 0.84, C.gold), // cap
      // a sponsor panel and its bolts
      centered(x, 1.0, 0.36, 0.46, 0.95, 0.02, C.cream),
      centered(x, 1.15, 0.375, 0.34, 2 * PY, 0.01, C.sunset),
      centered(x, 1.3, 0.375, 0.34, 2 * PY, 0.01, C.magenta),
      centered(x - 0.18, 1.9, 0.36, PX * 2, PY * 2, 0.02, C.purpleDark),
      centered(x + 0.18, 1.9, 0.36, PX * 2, PY * 2, 0.02, C.purpleDark)
    )
  }
  // the banner and its trim
  boxes.push(
    centered(0, 2.35, 0, 4.6, 1.1, 0.4, C.sunset),
    centered(0, 2.27, 0, 4.6, 0.08, 0.46, C.gold),
    centered(0, 3.45, 0, 4.6, 0.08, 0.46, C.gold),
    // START's drop shadow; the letters themselves glow (a part, below)
    ...textBoxes("START", PX * 2, 3.32 - PY * 2, 0.2, C.purpleDark, 2, 0.02),
    ...checker(-2.05, 2.55, 4, 3, 0.2, C.ink, C.cream),
    ...checker(2.05 - 8 * PX, 2.55, 4, 3, 0.2, C.ink, C.cream),
    // the race clock's housing
    centered(0, 3.53, 0, 1.85, 0.72, 0.36, C.ink),
    centered(0, 3.53, 0, 1.95, 0.06, 0.42, C.purpleDark)
  )
  // the start line and the timing mat behind it
  for (let i = 0; i < 12; i++) {
    boxes.push({ x: -3 + i * 0.5, y: 0, z: 1.6, w: 0.5, h: 0.02, d: 0.25, color: i % 2 ? C.ink : C.cream })
    boxes.push({ x: -3 + i * 0.5, y: 0, z: 1.85, w: 0.5, h: 0.02, d: 0.25, color: i % 2 ? C.cream : C.ink })
  }
  boxes.push({ x: -2.2, y: 0, z: 1.05, w: 4.4, h: 0.015, d: 0.45, color: C.ink })
  for (let i = 0; i < 9; i++) boxes.push(centered(-2 + i * 0.5, 0.015, 1.27, PX * 2, 0.01, 0.06, C.gold))

  const flags = bunting(-2.25, 2.25, 2.2, 0.22, 0.3, [C.gold, C.magenta, C.sky, C.cream])
  boxes.push(...flags.line)

  // balloon bunches on the caps, bobbing out of step
  const balloons = (side: number): LandmarkPart => {
    const b: Box[] = []
    const set: Array<[number, number, number]> = [
      [-0.2, 0.62, C.magenta],
      [0.18, 0.72, C.sky],
      [0, 0.98, C.gold],
    ]
    for (const [dx, dy, color] of set) {
      b.push(centered(dx, dy, 0, 0.36, 0.38, 0.3, color))
      b.push(centered(dx, dy + 0.05, 0, 0.44, 0.26, 0.24, color))
      b.push(centered(dx - 0.09, dy + 0.27, 0.15, PX * 2, PY * 2, 0.01, C.cream)) // shine
      b.push(centered(dx, dy - 0.06, 0, PX * 2, 0.06, PX * 2, color)) // knot
      b.push(centered(dx * 0.5, 0, 0, PX, dy - 0.06, PX, C.ink)) // string
    }
    return {
      boxes: b,
      at: [side * 2.6, 3.69, 0],
      animate: (p, c) => (p.position.y = 3.69 + bob(c.t, 1.6, 1, side > 0 ? 0.5 : 0)),
    }
  }

  return {
    boxes,
    parts: [
      {
        // lit letters, flashing in turn once the Runner is at the line
        boxes: textBoxes("START", 0, 3.32, 0.21, C.cream, 2, 0.03),
        glow: true,
        animate: (p, c) => {
          ;(p.material as THREE.ShaderMaterial).uniforms.uBoost.value = c.wake > 0.9 && Math.floor(c.t * 2.5) % 2 ? 0.82 : 1
        },
      },
      { boxes: flags.flags[0], animate: flutter(0) },
      { boxes: flags.flags[1], animate: flutter(1) },
      balloons(-1),
      balloons(1),
    ],
    screens: [
      {
        // the race clock: the Lap running, else the best Lap, else the
        // time since the Overworld opened
        cols: 25,
        rows: 7,
        at: [0, 3.53 + 0.36, 0.19],
        fps: 10,
        draw: (g, c) => {
          g.fillStyle = "#23222E"
          g.fillRect(0, 0, 25, 7)
          let text: string
          let color = c.wake > 0.5 ? "#FFE3A3" : "#FFC94D"
          if (c.lap !== null) {
            text = formatLap(c.lap)
          } else if (c.best !== null) {
            const showBest = Math.floor(c.t / 1.5) % 2 === 0 || c.still
            text = showBest ? "BEST" : formatLap(c.best)
            color = "#7EC8E8"
          } else {
            const s = Math.floor(c.elapsed)
            const colon = Math.floor(c.t * 2) % 2 === 0 || c.still ? ":" : " "
            text = `${String(Math.floor(s / 60) % 100).padStart(2, "0")}${colon}${String(s % 60).padStart(2, "0")}`
          }
          drawText(g, text, Math.floor((25 - textWidth(text)) / 2), 1, color)
        },
      },
    ],
    shadows: [
      { x: -2.35, z: 0.25, w: 0.95, d: 0.95 },
      { x: 2.85, z: 0.25, w: 0.95, d: 0.95 },
      // the banner's, thrown south-east onto the grass
      { x: 1.4, z: 0.7, w: 4.6, d: 0.4 },
    ],
    height: 4.6,
  }
}

// ---- Stats Screen: the character-card kiosk ----

const PORTRAIT_STAND = [...RUNNER_FRONT_SHARED, ...RUNNER_FRONT_STANDING]
const PORTRAIT_CHEER = [...RUNNER_FRONT_SHARED, ...RUNNER_FRONT_JUMP]

function statsKiosk(): LandmarkModel {
  const boxes: Box[] = [
    centered(0, 0, -0.55, 4.4, 3.0, 2.2, C.purple), // booth
    centered(0, 3.0, -0.55, 4.5, 0.1, 2.3, C.purpleDark),
    // bezel around the card screen
    centered(0, 0.84, 0.57, 2.95, 2.18, 0.04, C.ink),
    // counter, its gold edge, and the panel below
    centered(0, 0, 0.85, 4.6, 0.85, 0.6, C.purpleLight),
    centered(0, 0.85, 0.85, 4.7, 0.08, 0.68, C.gold),
    centered(0, 0.2, 1.16, 4.2, 0.4, 0.02, C.purpleDark),
    // posters either side: a sunset and a mountain
    centered(-1.85, 1.3, 0.56, 0.6, 0.95, 0.02, C.cream),
    centered(-1.85, 1.4, 0.575, 0.48, 0.5, 0.01, C.sunsetLight),
    centered(-1.85, 1.4, 0.58, 0.48, 0.16, 0.01, C.magenta),
    centered(-1.85, 1.75, 0.58, 0.2, 0.12, 0.01, C.gold),
    centered(1.85, 1.3, 0.56, 0.6, 0.95, 0.02, C.cream),
    centered(1.85, 1.4, 0.575, 0.48, 0.5, 0.01, C.sky),
    centered(1.85, 1.4, 0.58, 0.48, 0.2, 0.01, C.mountainLow),
    centered(1.8, 1.6, 0.585, 0.2, 0.18, 0.01, C.mountainHigh),
    // a stool at the counter
    centered(1.7, 0, 1.45, 0.1, 0.55, 0.1, C.ink),
    centered(1.7, 0.18, 1.45, 0.34, 0.05, 0.34, C.ink),
    centered(1.7, 0.55, 1.45, 0.46, 0.1, 0.46, C.magenta),
  ]
  // A striped canopy roof. It stops at the booth's front: the camera looks
  // down, so anything jutting out above the screen would hide its top rows.
  for (let i = 0; i < 8; i++) {
    const color = i % 2 ? C.cream : C.sunset
    boxes.push({ x: -2.4 + i * 0.6, y: 3.0, z: -1.75, w: 0.6, h: 0.16, d: 2.4, color })
  }
  boxes.push({ x: -2.45, y: 3.0, z: 0.62, w: 4.9, h: 0.16, d: 0.04, color: C.gold })
  // bulbs along the roof's edge, twinkling in two sets while awake
  const bulbs = (set: number): LandmarkPart => {
    const b: Box[] = []
    for (let i = set; i < 9; i += 2) b.push(centered(-2.4 + i * 0.6, 3.04, 0.68, PX * 2, PY * 2, PX * 2, 0xffe3a3))
    return {
      boxes: b,
      glow: true,
      duskOnly: true,
      animate: (p, c) => (p.visible = c.lit && (c.wake < 0.5 || Math.floor(c.t * 3) % 2 === set)),
    }
  }
  return {
    boxes,
    parts: [bulbs(0), bulbs(1)],
    screens: [
      {
        cols: 44,
        rows: 24,
        at: [0, 0.9 + (24 * PY) / 2, 0.6],
        fps: 10,
        draw: (g, c) => {
          g.fillStyle = "#140B2E"
          g.fillRect(0, 0, 44, 24)
          if (c.wake < 0.12) {
            // asleep: a cursor waits
            if (Math.floor(c.t * 1.5) % 2 === 0) {
              g.fillStyle = "#FFC94D"
              g.fillRect(3, 18, 3, 3)
            }
            return
          }
          // the card
          g.fillStyle = "#FFC94D"
          g.fillRect(0, 0, 44, 1)
          g.fillRect(0, 23, 44, 1)
          g.fillRect(0, 0, 1, 24)
          g.fillRect(43, 0, 1, 24)
          g.fillStyle = "#2B1B57"
          g.fillRect(2, 2, 17, 20)
          const cheer = c.wake > 0.95 && Math.floor(c.t / 0.45) % 2 === 1
          drawPx(g, cheer ? PORTRAIT_CHEER : PORTRAIT_STAND, 2, 2)
          drawText(g, "JUAN", 22, 3, "#FFF4E3")
          g.fillStyle = "#6E55A8"
          g.fillRect(22, 9, 20, 1)
          drawText(g, "42087", 22, 11, "#FFC94D")
          drawText(g, "P1", 22, 17, "#C2366B")
          if (Math.floor(c.t * 2) % 2 === 0) {
            g.fillStyle = "#FFF4E3"
            g.fillRect(31, 17, 3, 5)
          }
          // booting: the card draws in from the top behind a bright line
          const shown = Math.min(24, Math.ceil(((c.wake - 0.12) / 0.6) * 24))
          if (shown < 24) {
            g.fillStyle = "#140B2E"
            g.fillRect(0, shown, 44, 24 - shown)
            g.fillStyle = "#7EC8E8"
            g.fillRect(0, shown, 44, 1)
          }
        },
      },
    ],
    shadows: [{ x: 0.3, z: -0.3, w: 4.6, d: 2.6 }],
    height: 3.5,
  }
}

// ---- Quest Log: the quest board ----

function questBoard(): LandmarkModel {
  const boxes: Box[] = []
  for (const x of [-2.4, 2.4]) {
    boxes.push(
      centered(x, 0, 0, 0.35, 2.95, 0.35, C.trunk),
      centered(x, 0, 0, 0.45, 0.25, 0.45, C.trunkDark),
      centered(x - 0.09, 0.4, 0.18, PX, 2.2, 0.01, C.trunkDark) // grain
    )
  }
  boxes.push(
    centered(0, 0.85, 0, 5.2, 1.85, 0.26, C.wood),
    centered(0, 0.85, 0.02, 5.4, 0.12, 0.3, C.woodDark),
    centered(0, 2.62, 0.02, 5.4, 0.12, 0.3, C.woodDark)
  )
  // plank seams
  for (const y of [1.3, 1.75, 2.2]) boxes.push(centered(0, y, 0.135, 5.2, PY, 0.01, C.woodDark))
  // the roof: two courses of shingles and a ridge
  boxes.push(
    centered(0, 2.9, 0, 5.9, 0.16, 1.0, C.purpleDark),
    centered(0, 3.06, -0.05, 5.6, 0.16, 0.8, C.purple),
    centered(0, 3.22, -0.1, 5.3, 0.1, 0.5, C.purpleLight)
  )
  for (let i = 0; i < 14; i++) boxes.push(centered(-2.75 + i * 0.42, 2.9, 0.49, PX, 0.16, 0.02, C.purple))

  // the notes: every quest COMPLETE, so each carries a gold check
  const notes: Array<[number, number, number, number, number]> = [
    [-1.6, 1.4, 0.8, 0.9, C.cream],
    [-0.5, 1.15, 0.8, 1.0, C.cream],
    [0.6, 1.45, 0.9, 0.8, C.cream],
    [1.65, 1.1, 0.7, 0.9, C.sunsetLight],
  ]
  notes.forEach(([x, y, w, h, color], i) => {
    boxes.push(centered(x, y, 0.16, w, h, 0.04, color))
    boxes.push(centered(x, y + h - PY * 2, 0.185, PX * 2, PY * 2, 0.02, i % 2 ? C.gold : C.magenta)) // pin
    for (let line = 0; line < 3; line++) {
      const len = w * (0.7 - ((line + i) % 3) * 0.15)
      boxes.push({ x: x - w / 2 + 0.1, y: y + h - 0.28 - line * PY * 3, z: 0.18, w: len, h: PY, d: 0.01, color: C.ink })
    }
    // the check: a tick in gold
    const cx = x + w / 2 - 0.22
    const cy = y + 0.12
    boxes.push(
      { x: cx, y: cy + PY, z: 0.18, w: PX, h: PY, d: 0.012, color: C.gold },
      { x: cx + PX, y: cy, z: 0.18, w: PX, h: PY, d: 0.012, color: C.gold },
      { x: cx + 2 * PX, y: cy + PY, z: 0.18, w: PX, h: PY, d: 0.012, color: C.gold },
      { x: cx + 3 * PX, y: cy + 2 * PY, z: 0.18, w: PX, h: PY, d: 0.012, color: C.gold }
    )
  })
  // a crate and a barrel
  boxes.push(
    centered(-2.85, 0, 0.95, 0.6, 0.55, 0.55, C.wood),
    centered(-2.85, 0.27, 1.23, 0.6, PY, 0.01, C.woodDark),
    centered(-2.85, 0, 1.23, PX * 2, 0.55, 0.01, C.woodDark),
    centered(2.85, 0, 1.0, 0.5, 0.7, 0.5, C.trunk),
    centered(2.85, 0.12, 1.0, 0.56, 0.08, 0.56, C.trunkDark),
    centered(2.85, 0.5, 1.0, 0.56, 0.08, 0.56, C.trunkDark),
    centered(2.85, 0.7, 1.0, 0.42, 0.02, 0.42, C.woodDark)
  )

  // the quest giver's "!" on a little sign, glowing and bouncing while awake
  const markBob = (p: THREE.Mesh, c: PartClock) =>
    (p.position.y = 3.3 + (c.wake > 0.5 ? bob(c.t, 0.5, 2) : bob(c.t, 2.4, 1)))
  const signPlate: LandmarkPart = {
    boxes: [centered(0, 0, 0, 0.62, 1.1, 0.1, C.purpleDark), centered(0, -0.25, 0, PX * 2, 0.25, PX * 2, C.ink)],
    at: [0, 3.3, 0],
    animate: markBob,
  }
  const mark: LandmarkPart = {
    boxes: [
      // bar, neck, a one-pixel gap, then the dot
      { x: -2 * PX, y: 1.1 - 6 * PY, z: 0.05, w: 4 * PX, h: 5 * PY, d: 0.03, color: C.gold },
      { x: -1 * PX, y: 1.1 - 8 * PY, z: 0.05, w: 2 * PX, h: 2 * PY, d: 0.03, color: C.gold },
      { x: -2 * PX, y: 1.1 - 11 * PY, z: 0.05, w: 4 * PX, h: 2 * PY, d: 0.03, color: C.gold },
    ],
    glow: true,
    at: [0, 3.3, 0],
    animate: markBob,
  }
  // a lantern under the eave, lit at Dusk, swinging while awake: a frame
  // of four corner posts so its flame shows
  const lantern: LandmarkPart = {
    boxes: [
      centered(0, -0.12, 0, PX, 0.12, PX, C.ink),
      centered(0, -0.18, 0, 0.3, 0.06, 0.3, C.ink),
      centered(0, -0.48, 0, 0.3, 0.06, 0.3, C.ink),
      ...[-1, 1].flatMap((sx) => [-1, 1].map((sz) => centered(sx * 0.12, -0.42, sz * 0.12, PX, 0.24, PX, C.ink))),
    ],
    at: [2.0, 2.9, 0.45],
    animate: (p, c) => (p.rotation.z = c.wake > 0.5 ? [0, 0.12, 0, -0.12][Math.floor(c.t * 3) % 4] : 0),
  }
  const flame: LandmarkPart = {
    boxes: [centered(0, -0.41, 0, 0.16, 0.2, 0.16, 0xffc94d), centered(0, -0.36, 0, PX * 2, 0.1, 0.17, 0xfff4e3)],
    glow: true,
    duskOnly: true,
    at: [2.0, 2.9, 0.45],
    animate: (p, c) => {
      p.visible = c.lit
      p.rotation.z = c.wake > 0.5 ? [0, 0.12, 0, -0.12][Math.floor(c.t * 3) % 4] : 0
    },
  }
  return {
    boxes,
    parts: [signPlate, mark, lantern, flame],
    pools: [{ x: 2.0, z: 0.85, rx: 0.95, rz: 0.65, color: 0xffc94d }],
    shadows: [{ x: 0.35, z: 0.3, w: 5.6, d: 0.6 }],
    height: 4.3,
  }
}

// ---- Inventory: the aid station ----

function aidStation(): LandmarkModel {
  const boxes: Box[] = [
    // the table, its cloth and hem
    centered(0, 0.78, 0.6, 4.6, 0.16, 1.3, C.cream),
    centered(0, 0.3, 1.24, 4.6, 0.48, 0.03, C.cream),
    centered(0, 0.3, 1.255, 4.6, PY * 2, 0.02, C.sunset),
    centered(-2.1, 0, 0.6, 0.14, 0.78, 1.1, C.canvas),
    centered(2.1, 0, 0.6, 0.14, 0.78, 1.1, C.canvas),
    // supplies behind: a crate of Gels on a box
    centered(0, 0, -0.9, 1.6, 0.9, 0.9, C.wood),
    centered(0, 0.9, -0.9, 1.7, 0.12, 1.0, C.woodDark),
    centered(-0.2, 1.02, -0.9, 0.9, 0.42, 0.6, C.gold),
    ...pxBoxes(GEL, -0.2 - 3 * PX, 1.02 + 0.42 - 0.04, -0.59),
    // the water jug, its cap and tap
    centered(1.5, 0.94, 0.65, 0.5, 0.6, 0.5, C.sky),
    centered(1.5, 1.54, 0.65, 0.2, 0.12, 0.2, C.cream),
    centered(1.5, 1.1, 0.92, 0.1, 0.08, 0.06, C.ink),
    // a bin of crushed cups
    centered(2.75, 0, 1.45, 0.45, 0.6, 0.45, C.frondDark),
    centered(2.75, 0.6, 1.45, 0.5, 0.06, 0.5, C.ink),
    centered(2.68, 0.66, 1.4, PX * 3, PY * 2, PX * 3, C.cream),
    centered(2.85, 0.66, 1.5, PX * 2, PY * 2, PX * 2, C.cream),
  ]
  // a pyramid of cups: three, two, one
  const cupColors = [C.cream, C.cream, C.cream]
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 3 - row; i++) {
      const x = -1.95 + i * 0.24 + row * 0.12
      const y = 0.94 + row * 0.22
      boxes.push(centered(x, y, 0.5, 0.18, 0.2, 0.18, cupColors[row]))
      boxes.push(centered(x, y + 0.2 - PY, 0.5, 0.2, PY, 0.2, C.sky)) // rim
    }
  }
  // a row of cups poured and waiting
  ;[C.gold, C.sunset, C.sky, C.magenta].forEach((color, i) => {
    boxes.push(centered(-1.0 + i * 0.3, 0.94, 0.75, 0.2, 0.24, 0.2, C.cream))
    boxes.push(centered(-1.0 + i * 0.3, 1.16, 0.75, 0.16, PY, 0.16, color))
  })
  // a bunch of bananas, of course
  for (let i = 0; i < 4; i++) {
    const x = 0.55 + i * 0.1
    boxes.push(
      centered(x, 0.94, 0.55, 0.08, 0.08, 0.32, 0xffd84a),
      centered(x, 1.0, 0.36, 0.08, 0.08, 0.1, 0xffd84a),
      centered(x, 1.0, 0.74, 0.08, 0.08, 0.1, 0xffd84a),
      centered(x, 1.06, 0.31, 0.08, 0.06, 0.06, 0x6b4a2e)
    )
  }
  // tent poles and the striped canopy
  for (const [px, pz] of [[-2.5, -1.5], [2.5, -1.5], [-2.5, 1.5], [2.5, 1.5]]) {
    boxes.push(centered(px, 0, pz, 0.14, 2.6, 0.14, C.canvas))
    boxes.push(centered(px, 0, pz, 0.24, 0.08, 0.24, C.ink))
  }
  for (let i = 0; i < 6; i++) {
    boxes.push({ x: -3 + i, y: 2.6, z: -1.8, w: 1, h: 0.3, d: 3.6, color: i % 2 ? C.cream : C.sunset })
  }
  boxes.push(centered(0, 2.9, 0, 6.2, 0.14, 3.8, C.sunsetLight))
  // AID painted on the canopy's top, where the camera sees it; the front
  // keeps only a short fringe, since a deep valance would hide the table
  boxes.push(...roofText("AID", 0, -0.2, 3.04, C.cream, 3))
  for (let i = 0; i < 12; i++) boxes.push({ x: -3 + i * 0.5 + 0.1, y: 2.5, z: 1.76, w: 0.3, h: 0.1, d: 0.04, color: i % 2 ? C.cream : C.sunset })

  // the cup at the front edge, nudged forward while awake: run past the
  // table to take it, and a fresh one is poured a few seconds later
  const offer: LandmarkPart = {
    boxes: [centered(0, 0, 0, 0.2, 0.24, 0.2, C.cream), centered(0, 0.22, 0, 0.16, PY, 0.16, C.sky)],
    at: [0.2, 0.94, 1.05],
    animate: (p, c) => {
      p.visible = c.since > 5
      p.position.y = 0.94 + (c.wake > 0.5 ? bob(c.t, 0.6, 2) : 0)
    },
  }
  // the tap drips while awake
  const drip: LandmarkPart = {
    boxes: [centered(0, 0, 0, PX * 2, PY * 2, PX * 2, C.sky)],
    at: [1.5, 1.0, 0.95],
    animate: (p, c) => {
      const k = (c.t * 1.4) % 1
      p.visible = c.wake > 0.5
      p.position.y = 1.05 - Math.floor(k * 4) * PY * 2
    },
  }
  return {
    boxes,
    parts: [offer, drip],
    shadows: [{ x: 0.3, z: 0.35, w: 5.4, d: 3.3 }],
    height: 3.2,
  }
}

// ---- Level Select: two arcade cabinets ----

const LABEL_BG = "#140B2E"

function arcade(): LandmarkModel {
  const boxes: Box[] = []
  const parts: LandmarkPart[] = []
  const screens: LandmarkScreen[] = []
  ;[-1.25, 1.25].forEach((x, cab) => {
    boxes.push(
      centered(x, 0, -0.1, 1.6, 1.0, 1.2, C.purple), // lower body
      centered(x, 1.0, -0.2, 1.6, 1.9, 1.0, C.purple), // upper body
      centered(x, 1.0, 0.45, 1.6, 0.22, 0.66, C.purpleLight), // control panel
      centered(x, 2.9, -0.15, 1.7, 0.62, 1.1, C.purpleDark), // marquee hood
      centered(x, 3.52, -0.15, 1.75, 0.08, 1.15, C.gold),
      centered(x, 1.22, 0.31, 1.36, 1.38, 0.03, C.ink), // bezel
      // buttons and a coin door
      centered(x + 0.05, 1.22, 0.62, 0.14, 0.06, 0.14, C.gold),
      centered(x + 0.3, 1.22, 0.6, 0.14, 0.06, 0.14, C.magenta),
      centered(x + 0.55, 1.22, 0.58, 0.14, 0.06, 0.14, C.sky),
      centered(x, 0.25, 0.51, 0.7, 0.5, 0.02, C.purpleDark),
      // side art: a sunset stripe climbing the front
      ...[0, 1, 2, 3].map((k) => centered(x - 0.62 + k * 0.08, 0.1 + k * 0.1, 0.505, 0.08, 0.1, 0.02, k % 2 ? C.sunset : C.gold))
    )
    // the marquee: SELECT or LEVEL, lit
    parts.push({
      boxes: [
        centered(0, 0, 0, 1.5, 0.56, 0.03, cab ? C.magenta : C.sky),
        ...textBoxes(cab ? "SELECT" : "LEVEL", 0, 0.56 - PY * 1, 0.03, C.cream, 1, 0.02),
      ],
      glow: true,
      at: [x, 2.92, 0.42],
    })
    // coin slots, glowing red
    parts.push({
      boxes: [centered(-0.12, 0, 0, PX * 2, PY * 3, 0.02, 0xff5a3c), centered(0.12, 0, 0, PX * 2, PY * 3, 0.02, 0xff5a3c)],
      glow: true,
      at: [x, 0.45, 0.53],
    })
    // marquee bulbs chase while awake
    for (const set of [0, 1]) {
      const b: Box[] = []
      for (let i = set; i < 8; i += 2) b.push(centered(-0.75 + i * 0.214, 0, 0, PX * 2, PY * 2, 0.03, 0xffe3a3))
      parts.push({
        boxes: b,
        glow: true,
        at: [x, 2.88, 0.44],
        animate: (p, c) => (p.visible = c.wake < 0.5 || Math.floor(c.t * 6) % 2 === set),
      })
    }
    // the joystick wiggles while awake
    parts.push({
      boxes: [
        centered(0, 0, 0, 0.18, 0.04, 0.18, C.ink),
        centered(0, 0, 0, PX * 2, 0.22, PX * 2, C.ink),
        centered(0, 0.2, 0, 0.12, 0.1, 0.12, 0xe8452f),
      ],
      at: [x - 0.42, 1.22, 0.55],
      animate: (p, c) => (p.rotation.z = c.wake > 0.5 ? [0, 0.35, 0, -0.35][Math.floor(c.t * 4 + cab) % 4] : 0),
    })
    // the CRT: attract mode through every cover; asleep, it begs for a coin
    screens.push({
      cols: 18,
      rows: 13,
      at: [x, 1.22 + 0.04 + (13 * PY) / 2 + 0.08, 0.335],
      fps: 12,
      draw: (g, c) => {
        g.fillStyle = LABEL_BG
        g.fillRect(0, 0, 18, 13)
        if (c.wake < 0.2) {
          if (Math.floor(c.t * 1.2 + cab * 0.5) % 2 === 0) drawText(g, "COIN", 2, 4, "#FFC94D")
        } else {
          const step = c.t / 1.8 + cab * 0.5
          const k = Math.floor(step) % CARTRIDGE_ART.length
          drawPx(g, CARTRIDGE_ART[(k + cab * 2) % CARTRIDGE_ART.length], 0, -6)
          g.fillStyle = LABEL_BG
          g.fillRect(0, 11, 18, 2)
          for (let i = 0; i < CARTRIDGE_ART.length; i++) {
            g.fillStyle = i === (k + cab * 2) % CARTRIDGE_ART.length ? "#FFC94D" : "#3E2A73"
            g.fillRect(4 + i * 2, 11, 1, 1)
          }
          // a new cover wipes in from the top
          const p = step % 1
          if (p < 0.15 && !c.still) {
            const shown = Math.ceil((p / 0.15) * 11)
            g.fillStyle = LABEL_BG
            g.fillRect(0, shown, 18, 11 - shown)
            g.fillStyle = "#FFF4E3"
            g.fillRect(0, shown, 18, 1)
          }
        }
        // scanlines
        g.fillStyle = "rgba(0,0,0,0.22)"
        for (let y = 1; y < 13; y += 2) g.fillRect(0, y, 18, 1)
      },
    })
  })
  return {
    boxes,
    parts,
    screens,
    // arcade carpet in front of the cabinets
    floor: Array.from({ length: 12 * 4 }, (_, i) => {
      const cx = i % 12
      const cz = Math.floor(i / 12)
      return { x: -2.4 + cx * 0.4, z: 0.85 + cz * 0.24, w: 0.4, d: 0.24, color: (cx + cz) % 2 ? C.purpleDark : 0x7a2c5c }
    }),
    shadows: [{ x: 0.3, z: -0.1, w: 4.4, d: 1.5 }],
    height: 3.5,
  }
}

// ---- Save Point: the save crystal ----

function savePoint(): LandmarkModel {
  // the crystal without the pedestal rows of its sprite
  const crystal = extrudePx(CRYSTAL.slice(0, 7), 11, 11, 0.17, 0.5)
  const boxes: Box[] = [
    centered(0, 0, 0, 2.8, 0.3, 2.8, C.stone),
    centered(0, 0.3, 0, 2.3, 0.3, 2.3, C.stoneLight),
    centered(0, 0.6, 0, 1.8, 0.22, 1.8, C.stone),
    centered(0, 0.3, 1.155, 2.3, PY, 0.01, C.gold), // inlay
  ]
  // braziers on stone posts
  for (const x of [-2.4, 2.4]) {
    boxes.push(
      centered(x, 0, 0.6, 0.42, 0.2, 0.42, C.stone),
      centered(x, 0, 0.6, 0.3, 1.7, 0.3, C.stone),
      centered(x - 0.08, 0.3, 0.755, PX, 1.2, 0.01, C.stoneLight),
      centered(x, 1.7, 0.6, 0.55, 0.18, 0.55, C.ink),
      centered(x, 1.88, 0.6, 0.62, 0.06, 0.62, C.gold)
    )
  }
  // runes along the middle step, pulsing with the crystal
  const runes: Box[] = []
  const glyphs = ["010111010", "101010101", "111010010", "100111001", "011010110"]
  glyphs.forEach((bits, i) => {
    const x0 = -0.85 + i * 0.4
    for (let k = 0; k < 9; k++) {
      if (bits[k] !== "1") continue
      runes.push({ x: x0 + (k % 3) * PX, y: 0.5 - Math.floor(k / 3) * PY, z: 0, w: PX, h: PY, d: 0.01, color: 0x7ec8e8 })
    }
  })
  const pulse = (lo: number, hi: number) => (p: THREE.Mesh, c: PartClock) => {
    const steps = c.wake > 0.5 ? [lo, 1, hi, 1] : [lo, 1, 1, 1]
    ;(p.material as THREE.ShaderMaterial).uniforms.uBoost.value = steps[Math.floor(c.t / (c.wake > 0.5 ? 0.15 : 0.26)) % 4]
  }
  const parts: LandmarkPart[] = [
    {
      boxes: crystal,
      glow: true,
      at: [0, 1.1, 0],
      animate: (p, c) => {
        p.rotation.y = c.t * (0.9 + c.wake * 1.2)
        p.position.y = 1.1 + bob(c.t, 1.1, 1) + c.wake * PY * 2
        pulse(0.92, 1.1)(p, c)
      },
    },
    { boxes: runes, glow: true, at: [0, 0, 1.16], animate: pulse(0.8, 1.25) },
  ]
  // flames: three shapes in turn
  for (const x of [-2.4, 2.4]) {
    const shapes: Box[][] = [
      [centered(0, 0, 0, 0.36, 0.2, 0.36, 0xff7a3d), centered(0, 0.2, 0, 0.24, 0.2, 0.24, 0xffc94d), centered(0, 0.4, 0, 0.1, 0.12, 0.1, 0xfff4e3)],
      [centered(0, 0, 0, 0.36, 0.24, 0.36, 0xff7a3d), centered(0.04, 0.24, 0, 0.2, 0.16, 0.2, 0xffc94d), centered(-0.04, 0.4, 0, 0.1, 0.08, 0.1, 0xffc94d)],
      [centered(0, 0, 0, 0.36, 0.18, 0.36, 0xff7a3d), centered(-0.03, 0.18, 0, 0.24, 0.24, 0.24, 0xffc94d), centered(0.03, 0.42, 0, 0.1, 0.14, 0.1, 0xfff4e3)],
    ]
    shapes.forEach((shape, k) =>
      parts.push({
        boxes: shape,
        glow: true,
        at: [x, 1.94, 0.6],
        animate: (p, c) => (p.visible = Math.floor(c.t * 7 + (x > 0 ? 1 : 0)) % 3 === k),
      })
    )
  }
  // sparkles rising off the crystal, more of them while awake
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2
    parts.push({
      boxes: [centered(0, 0, 0, PX * 2, PY * 2, PX * 2, i % 2 ? 0xfff4e3 : 0xffe3a3)],
      glow: true,
      at: [Math.cos(angle) * 0.7, 1.2, Math.sin(angle) * 0.5],
      animate: (p, c) => {
        const k = (c.t * 0.5 + i / 7) % 1
        p.visible = i < 2 || c.wake > 0.5
        p.position.y = 1.0 + Math.floor(k * 20) * PY
        p.position.x = Math.cos(angle) * 0.7 + (Math.floor(k * 6) % 2 ? PX : 0)
      },
    })
  }
  // flagstones around the plinth
  const floor: LandmarkModel["floor"] = []
  for (let gx = -6; gx < 6; gx++) {
    for (let gz = -4; gz < 5; gz++) {
      const x = gx * 0.5 + 0.25
      const z = gz * 0.42 + 0.21
      const r = Math.hypot(x / 3.1, z / 2.0)
      if (r > 1 || (Math.abs(x) < 1.4 && Math.abs(z) < 1.4)) continue
      floor.push({ x: x - 0.23, z: z - 0.19, w: 0.46, d: 0.38, color: (gx + gz) % 2 ? C.stone : C.stoneLight })
    }
  }
  return {
    boxes,
    parts,
    floor,
    pools: [
      { x: 0, z: 0.2, rx: 2.4, rz: 2.0, color: C.gold },
      { x: -2.4, z: 1.0, rx: 0.8, rz: 0.55, color: C.sunsetLight },
      { x: 2.4, z: 1.0, rx: 0.8, rz: 0.55, color: C.sunsetLight },
    ],
    shadows: [{ x: 0.3, z: 0.25, w: 3.0, d: 3.0 }],
    height: 3.2,
  }
}

// ---- Records Screen: a race clock (benched with its Zone) ----

function raceClock(): LandmarkModel {
  return {
    boxes: [
      centered(0, 0, 0, 1.2, 3.0, 0.8, C.purple),
      centered(0, 2.0, 0.42, 2.6, 0.9, 0.12, C.ink),
      ...textBoxes("0:00", 0, 2.75, 0.48, C.gold, 2, 0.03),
    ],
    height: 3.2,
  }
}

const LANDMARK_MODELS: Record<string, () => LandmarkModel> = {
  title: titleArch,
  about: statsKiosk,
  experience: questBoard,
  skills: aidStation,
  projects: arcade,
  contact: savePoint,
  running: raceClock,
}

export function landmarkModel(zoneId: string): LandmarkModel {
  return (LANDMARK_MODELS[zoneId] ?? raceClock)()
}
