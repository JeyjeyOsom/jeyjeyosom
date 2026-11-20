// The Overworld's props, each a list of coloured boxes (voxels.ts). Base
// colours are what a prop looks like under plain white light; the sky
// (sky.ts) tints them through the sun and shade lights. The Landmarks
// live in landmarks.ts.

import * as THREE from "three"
import { type Box, boxesGeometry, type Cell, centered } from "./voxels"
import {
  BEACH_REACH,
  fencePosts,
  GROUND_PIXEL,
  ISLAND_RX,
  ISLAND_RZ,
  islandOutline,
  islandReach,
  LOOP_LENGTH,
  MOUNTAIN,
  mulberry32,
  PASTURE,
  type Placement,
  PIER,
  PLUNGE,
  POND,
  ROAD,
  roadPoint,
  terrace,
  type Vec2,
  WATERFALL,
} from "./level"

// ---- Colours ----
export const C = {
  grass: 0x6e9a55,
  grassDark: 0x5c8447,
  grassLight: 0x82ad62,
  sand: 0xe8d2a2,
  sandDark: 0xd7bb88,
  cliff: 0x9a7656,
  asphalt: 0x4e4a5e,
  roadLine: 0xefe6d6,
  roadDash: 0xffc94d,
  trunk: 0x8f6c4b,
  trunkDark: 0x76573a,
  frond: 0x4f8f4a,
  frondDark: 0x3e7641,
  frondLight: 0x66a656,
  coconut: 0x6b4a2e,
  rock: 0x8f8699,
  rockLight: 0xa79fb0,
  rockDark: 0x766e83,
  cowWhite: 0xf2eadb,
  cowTan: 0xe8dac5,
  cowSpot: 0x4a4038,
  muzzle: 0xc9a5a0,
  hoof: 0x8a7a66,
  fence: 0xcaa47b,
  fencePost: 0xa9845e,
  mountainLow: 0x5b7a5a,
  mountainMid: 0x55705a,
  mountainHigh: 0x6f6a80,
  mountainPeak: 0x8c849a,
  purple: 0x55408f,
  purpleLight: 0x6e55a8,
  purpleDark: 0x3e2a73,
  gold: 0xffc94d,
  sunset: 0xff7a3d,
  sunsetLight: 0xffa05c,
  magenta: 0xc2366b,
  cream: 0xfff4e3,
  sky: 0x7ec8e8,
  ink: 0x23222e,
  wood: 0x9c7452,
  woodDark: 0x7f5c3f,
  stone: 0x766d84,
  stoneLight: 0x8f86a0,
  canvas: 0xd9d2e3,
} as const

// ---- Scenery ----

/** A leaning palm, about three units tall, crown pointing up */
export function palmBoxes(): Box[] {
  const boxes: Box[] = []
  const lean = 0.07
  for (let i = 0; i < 6; i++) {
    boxes.push(centered(i * lean, i * 0.5, 0, 0.34, 0.5, 0.34, i % 2 ? C.trunkDark : C.trunk))
  }
  const top = 3.0
  const cx = 6 * lean
  // Fronds fan out in eight directions, drooping as they reach
  const dirs: Array<[number, number]> = [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7],
  ]
  dirs.forEach(([dx, dz], i) => {
    const color = i % 3 === 0 ? C.frondLight : i % 3 === 1 ? C.frond : C.frondDark
    const steps: Array<[number, number, number]> = [
      [0.35, 0.05, 0.5],
      [0.8, -0.05, 0.46],
      [1.2, -0.25, 0.4],
      [1.5, -0.55, 0.32],
    ]
    for (const [dist, dy, size] of steps) {
      boxes.push(centered(cx + dx * dist, top + dy, dz * dist, size, 0.14, size, color))
    }
  })
  boxes.push(centered(cx, top + 0.05, 0, 0.6, 0.22, 0.6, C.frond))
  boxes.push(centered(cx + 0.18, top - 0.22, 0.12, 0.2, 0.2, 0.2, C.coconut))
  boxes.push(centered(cx - 0.16, top - 0.24, -0.08, 0.2, 0.2, 0.2, C.coconut))
  boxes.push(centered(cx + 0.02, top - 0.26, -0.2, 0.2, 0.2, 0.2, C.coconut))
  return boxes
}

/**
 * Rasterise a shape onto the ground's pixel grid, `cellPx` screen pixels
 * per cell, so its edge steps like hand-placed pixels instead of a
 * polygon's. `value` is below 1 inside the shape; cells between 1 and
 * `rim` fill on a checkerboard, a dithered edge. Each row merges into runs.
 */
export function rasterize(
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number },
  value: (x: number, z: number) => number,
  rim: number,
  color: number,
  cellPx = 2
): Cell[] {
  const cw = GROUND_PIXEL.x * cellPx
  const cd = GROUND_PIXEL.z * cellPx
  const i0 = Math.floor(bounds.minX / cw)
  const i1 = Math.ceil(bounds.maxX / cw)
  const j0 = Math.floor(bounds.minZ / cd)
  const j1 = Math.ceil(bounds.maxZ / cd)
  const cells: Cell[] = []
  for (let j = j0; j < j1; j++) {
    let run: number | null = null
    for (let i = i0; i <= i1; i++) {
      const v = i < i1 ? value((i + 0.5) * cw, (j + 0.5) * cd) : Infinity
      const on = v < 1 || (v < rim && ((i + j) & 1) === 0)
      if (on && run === null) run = i
      if (!on && run !== null) {
        cells.push({ x: run * cw, z: j * cd, w: (i - run) * cw, d: cd, color })
        run = null
      }
    }
  }
  return cells
}

/** Worn (variant 0) or lush (1) patches of grass: lumpy blobs with a
 *  dithered rim, each shaped by its own seed */
export function patchCells(patches: Placement[], variant: number): Cell[] {
  const color = variant === 0 ? C.grassDark : C.grassLight
  const cells: Cell[] = []
  for (const p of patches) {
    const rand = mulberry32(Math.round(p.x * 977) ^ Math.round(p.z * 131))
    const k = p.scale
    const blobs = [{ x: 0, z: 0, rx: 1.4 * k, rz: 0.62 * k }]
    for (let b = 0; b < 2; b++) {
      blobs.push({
        x: (rand() - 0.5) * 1.8 * k,
        z: (rand() - 0.5) * 0.7 * k,
        rx: (0.45 + rand() * 0.5) * k,
        rz: (0.3 + rand() * 0.28) * k,
      })
    }
    const value = (x: number, z: number) =>
      Math.min(...blobs.map((b) => Math.hypot((x - p.x - b.x) / b.rx, (z - p.z - b.z) / b.rz)))
    const reach = 2.6 * k
    cells.push(
      ...rasterize({ minX: p.x - reach, maxX: p.x + reach, minZ: p.z - reach / 2, maxZ: p.z + reach / 2 }, value, 1.28, color)
    )
  }
  return cells
}

export function bushBoxes(variant: number): Box[] {
  const [a, b] = variant === 0 ? [C.frond, C.frondDark] : [C.frondLight, C.frond]
  return [
    centered(0, 0, 0, 1.0, 0.5, 0.8, b),
    centered(-0.1, 0.5, 0.05, 0.7, 0.3, 0.6, a),
    centered(0.38, 0, 0.1, 0.5, 0.36, 0.5, a),
  ]
}

export function rockBoxes(variant: number): Box[] {
  if (variant === 0) {
    return [
      centered(0, 0, 0, 0.9, 0.42, 0.7, C.rock),
      centered(0.08, 0.42, -0.04, 0.58, 0.26, 0.48, C.rockLight),
    ]
  }
  if (variant === 1) {
    return [
      centered(0, 0, 0, 0.6, 0.34, 0.6, C.rockDark),
      centered(0.42, 0, 0.1, 0.4, 0.22, 0.4, C.rock),
    ]
  }
  return [
    centered(0, 0, 0, 1.0, 0.5, 0.8, C.rock),
    centered(-0.1, 0.5, 0.05, 0.7, 0.32, 0.55, C.rockLight),
    centered(-0.05, 0.82, 0, 0.36, 0.18, 0.3, C.rockLight),
  ]
}

export function tuftBoxes(): Box[] {
  return [
    centered(-0.1, 0, 0, 0.07, 0.24, 0.07, C.grassLight),
    centered(0.04, 0, 0.05, 0.07, 0.32, 0.07, C.grassDark),
    centered(0.13, 0, -0.04, 0.07, 0.2, 0.07, C.grassLight),
  ]
}

const PETALS = [0xffe3a3, 0xf6a6c0, 0xfff4e3]
export function flowerBoxes(variant: number): Box[] {
  return [
    centered(0, 0, 0, 0.06, 0.2, 0.06, C.frondDark),
    centered(0, 0.2, 0, 0.18, 0.12, 0.18, PETALS[variant % PETALS.length]),
  ]
}

/** A cow facing +x, without its head (which grazes separately) */
export function cowBodyBoxes(variant: number): Box[] {
  const hide = variant === 0 ? C.cowWhite : C.cowTan
  const boxes: Box[] = [
    centered(0, 0.5, 0, 1.4, 0.7, 0.72, hide),
    centered(-0.72, 0.85, 0, 0.1, 0.4, 0.1, hide), // tail
    centered(-0.74, 0.62, 0, 0.14, 0.14, 0.14, C.cowSpot),
  ]
  for (const [lx, lz] of [[0.5, 0.25], [0.5, -0.25], [-0.5, 0.25], [-0.5, -0.25]]) {
    boxes.push(centered(lx, 0.1, lz, 0.18, 0.4, 0.18, hide))
    boxes.push(centered(lx, 0, lz, 0.2, 0.12, 0.2, C.hoof))
  }
  if (variant === 0) {
    boxes.push(centered(-0.2, 0.9, 0.2, 0.5, 0.31, 0.34, C.cowSpot))
    boxes.push(centered(0.35, 0.75, -0.25, 0.34, 0.3, 0.24, C.cowSpot))
  }
  return boxes
}

/** The head, built around its pivot at the neck (0, 0, 0), facing +x */
export function cowHeadBoxes(variant: number): Box[] {
  const hide = variant === 0 ? C.cowWhite : C.cowTan
  return [
    centered(0.22, -0.2, 0, 0.44, 0.42, 0.46, hide),
    centered(0.48, -0.2, 0, 0.12, 0.22, 0.36, C.muzzle),
    centered(0.3, 0.14, 0.3, 0.12, 0.1, 0.18, hide), // ears
    centered(0.3, 0.14, -0.3, 0.12, 0.1, 0.18, hide),
    centered(0.38, 0.0, 0.17, 0.06, 0.08, 0.06, C.cowSpot), // eyes
    centered(0.38, 0.0, -0.17, 0.06, 0.08, 0.06, C.cowSpot),
  ]
}

// Oncoming Traffic's identities (Traffic.tsx), as boxes, facing +x
const GLASS = 0xa8d4e8
const TIRE = 0x17131f
const TRIM = 0x23222e
const LIGHT = 0xffe3a3
const TAIL = 0xe8452f
export const CAR_COLORS: Array<[number, number]> = [
  [0xb6453a, 0x8e332c],
  [0x3f6e8c, 0x2f5269],
]

/** A car's lamps lit, a hair proud of the body, drawn unlit at Dusk */
export function carLampBoxes(): Box[] {
  const on = 0xfff4d6
  const tail = 0xff5a3c
  return [
    centered(1.13, 0.43, 0.34, 0.06, 0.16, 0.24, on),
    centered(1.13, 0.43, -0.34, 0.06, 0.16, 0.24, on),
    centered(-1.13, 0.43, 0.34, 0.06, 0.16, 0.24, tail),
    centered(-1.13, 0.43, -0.34, 0.06, 0.16, 0.24, tail),
  ]
}

/** Brake lamps, brighter and larger than the tail lamps, while a car waits */
export function carBrakeBoxes(): Box[] {
  return [centered(-1.14, 0.41, 0.34, 0.06, 0.2, 0.28, 0xff3b2a), centered(-1.14, 0.41, -0.34, 0.06, 0.2, 0.28, 0xff3b2a)]
}

export function carBoxes(body: number, roof: number): Box[] {
  const boxes: Box[] = [
    centered(0, 0.22, 0, 2.2, 0.5, 1.1, body),
    centered(-0.12, 0.72, 0, 1.2, 0.42, 1.0, roof),
    centered(0.49, 0.76, 0, 0.06, 0.32, 0.86, GLASS),
    centered(-0.73, 0.76, 0, 0.06, 0.32, 0.86, GLASS),
    centered(-0.12, 0.79, 0.5, 0.96, 0.24, 0.02, GLASS),
    centered(-0.12, 0.79, -0.5, 0.96, 0.24, 0.02, GLASS),
    centered(1.12, 0.24, 0, 0.06, 0.16, 1.0, TRIM),
    centered(-1.12, 0.24, 0, 0.06, 0.16, 1.0, TRIM),
    centered(1.12, 0.44, 0.34, 0.04, 0.14, 0.22, LIGHT),
    centered(1.12, 0.44, -0.34, 0.04, 0.14, 0.22, LIGHT),
    centered(-1.12, 0.44, 0.34, 0.04, 0.14, 0.22, TAIL),
    centered(-1.12, 0.44, -0.34, 0.04, 0.14, 0.22, TAIL),
  ]
  for (const [wx, wz] of [[0.68, 0.5], [0.68, -0.5], [-0.68, 0.5], [-0.68, -0.5]]) {
    boxes.push(centered(wx, 0, wz, 0.48, 0.46, 0.2, TIRE))
  }
  return boxes
}

export function fenceGeometry(): THREE.BufferGeometry {
  const boxes: Box[] = []
  for (const p of fencePosts()) boxes.push(centered(p.x, 0, p.z, 0.18, 0.9, 0.18, C.fencePost))
  const { minX, maxX, minZ, maxZ } = PASTURE
  const mid = (minX + maxX) / 2
  const railsX: Array<[number, number, number]> = [
    [minX, maxX, minZ],
    [minX, mid - 2.5, maxZ],
    [mid + 2.5, maxX, maxZ],
  ]
  for (const [x0, x1, z] of railsX) {
    for (const y of [0.32, 0.66]) boxes.push({ x: x0, y, z: z - 0.05, w: x1 - x0, h: 0.1, d: 0.1, color: C.fence })
  }
  for (const x of [minX, maxX]) {
    for (const y of [0.32, 0.66]) boxes.push({ x: x - 0.05, y, z: minZ, w: 0.1, h: 0.1, d: maxZ - minZ, color: C.fence })
  }
  return boxesGeometry(boxes)
}

/** A small hillside tree: trunk and a two-tier crown */
function hillTree(x: number, y: number, z: number, k: number, dark: boolean): Box[] {
  return [
    centered(x, y, z, 0.18 * k, 0.4 * k, 0.18 * k, C.trunkDark),
    centered(x, y + 0.32 * k, z, 0.86 * k, 0.5 * k, 0.74 * k, dark ? C.frondDark : C.frond),
    centered(x + 0.06 * k, y + 0.82 * k, z - 0.04 * k, 0.52 * k, 0.32 * k, 0.46 * k, dark ? C.frond : C.frondLight),
  ]
}

/**
 * The big mountain behind the north straight: stepped terraces whose
 * south faces carry the detail the camera sees. Thin shelves catch the
 * sun as light lines, cracks read as dark strokes, trees stand on the
 * steps, boulders break the foot, and a spring on the fourth terrace
 * leaves room for the waterfall (waterfallGeometry).
 */
export function mountainGeometry(): THREE.BufferGeometry {
  const boxes: Box[] = []
  const rand = mulberry32(5143)
  const { z, layers, layerHeight } = MOUNTAIN
  const colors = [C.mountainLow, C.mountainLow, C.mountainMid, C.mountainMid, C.mountainHigh, C.mountainPeak]
  // the south faces are always in shade, so they wear a paler skin than
  // the tops to read as rock rather than a hole
  const faces = [0x86a77f, 0x86a77f, 0x7f9a80, 0x7f9a80, 0x8f8aa3, 0xa59eb4]
  const shelves = [C.grassDark, C.grassDark, 0x6a8a5f, 0x6a8a5f, C.rockLight, C.rockLight]
  const cracks = [0x4a6649, 0x4a6649, 0x47604c, 0x47604c, 0x5d5870, 0x726b82]
  const fall = { minX: WATERFALL.x - WATERFALL.halfWidth - 0.45, maxX: WATERFALL.x + WATERFALL.halfWidth + 0.45 }
  const clearOfFall = (x0: number, x1: number) => x1 < fall.minX || x0 > fall.maxX
  const snap = (v: number) => Math.round(v * 16) / 16

  for (let i = 0; i < layers; i++) {
    const t = terrace(i)
    const l = t.ledge
    boxes.push(centered(t.cx, t.y, z, t.hx * 2, layerHeight, t.hz * 2, colors[i]))
    boxes.push({ x: l.minX, y: t.y, z: z - t.hz * 0.55, w: l.maxX - l.minX, h: layerHeight * 1.35, d: t.hz * 1.4, color: colors[i] })
    boxes.push({ x: t.minX, y: t.y, z: t.front, w: t.hx * 2, h: layerHeight - 0.01, d: 0.015, color: faces[i] })
    boxes.push({ x: l.minX, y: t.top, z: l.front, w: l.maxX - l.minX, h: layerHeight * 0.35 - 0.01, d: 0.015, color: faces[i] })

    // shelves along the south face
    for (let k = 0; k < Math.round(t.hx / 3); k++) {
      const w = snap(1.4 + rand() * 4.6)
      const x0 = snap(t.minX + 0.3 + rand() * (t.hx * 2 - w - 0.6))
      const y = t.y + 0.35 + Math.floor(rand() * (layerHeight - 0.75) * 8) / 8
      if (clearOfFall(x0, x0 + w)) boxes.push({ x: x0, y, z: t.front - 0.02, w, h: 0.1, d: 0.2, color: shelves[i] })
    }
    // cracks
    for (let k = 0; k < Math.round(t.hx / 4); k++) {
      const w = snap(0.12 + rand() * 0.14)
      const h = snap(0.5 + rand() * 1.0)
      const x0 = snap(t.minX + 0.4 + rand() * (t.hx * 2 - 0.8))
      const y = t.y + rand() * (layerHeight - h)
      if (clearOfFall(x0, x0 + w)) boxes.push({ x: x0, y, z: t.front - 0.02, w, h, d: 0.05, color: cracks[i] })
    }
    // trees on the step in front of the next terrace, and beside it
    if (i < layers - 1) {
      const next = terrace(i + 1)
      const count = i < 3 ? Math.round(t.hx / 2.2) : Math.round(t.hx / 4)
      for (let k = 0; k < count; k++) {
        const x = t.minX + 0.6 + rand() * (t.hx * 2 - 1.2)
        const scale = 0.8 + rand() * 0.45
        const dark = rand() < 0.55
        if (!clearOfFall(x - 0.5, x + 0.5) || (x > l.minX - 0.6 && x < l.maxX + 0.6)) continue
        const beside = x < next.minX - 0.6 || x > next.maxX + 0.6
        const back = beside ? z - t.hz + 0.5 : next.front + 0.45
        const tz = back + rand() * Math.max(0, t.front - 0.45 - back)
        boxes.push(...hillTree(x, t.top, tz, scale, dark))
      }
    }
  }

  // boulders along the foot, two of them flanking the pool
  const foot = terrace(0)
  for (let x = foot.minX + 1.2; x < foot.maxX - 1; x += 2.6 + rand() * 3) {
    if (Math.abs(x - PLUNGE.x) < PLUNGE.rx + 1.2) continue
    const w = 0.7 + rand() * 0.8
    boxes.push(centered(x, 0, foot.front - 0.25, w, 0.35 + rand() * 0.5, 0.7, rand() < 0.5 ? C.rock : C.rockDark))
  }
  for (const side of [-1, 1]) {
    boxes.push(centered(PLUNGE.x + side * (PLUNGE.rx + 0.5), 0, foot.front - 0.2, 1.0, 0.7, 0.8, C.rock))
    boxes.push(centered(PLUNGE.x + side * (PLUNGE.rx + 0.45), 0.7, foot.front - 0.25, 0.6, 0.3, 0.5, C.rockLight))
  }
  // the spring: a dark cleft on the fourth terrace, and stones at each lip
  const spring = terrace(WATERFALL.fromLayer)
  boxes.push(centered(WATERFALL.x, spring.top, spring.front - 1.35, 2.4, 0.65, 0.9, C.rockDark))
  for (let i = WATERFALL.fromLayer - 1; i >= 0; i--) {
    const t = terrace(i)
    for (const side of [-1, 1]) {
      boxes.push(centered(WATERFALL.x + side * (WATERFALL.halfWidth + 0.28), t.top, t.front - 0.3, 0.42, 0.28, 0.4, C.rock))
    }
  }

  // a foothill to the east
  boxes.push(centered(MOUNTAIN.x + 30, 0, z + 2, 14, 2.4, 10, C.mountainLow))
  boxes.push(centered(MOUNTAIN.x + 31, 2.4, z + 2, 8, 1.8, 6, C.mountainMid))
  boxes.push(...hillTree(MOUNTAIN.x + 26, 2.4, z + 6.2, 1, true))
  boxes.push(...hillTree(MOUNTAIN.x + 35.5, 2.4, z + 6.4, 0.9, false))
  return boxesGeometry(boxes)
}

/**
 * The waterfall's sheet of water: down each terrace face and across each
 * step, ending in the pool. UVs run across the stream (u) and along it in
 * texture repeats (v, one per two units), so a scrolling texture flows.
 */
export function waterfallGeometry(): THREE.BufferGeometry {
  const { x, halfWidth: hw, fromLayer } = WATERFALL
  const spring = terrace(fromLayer)
  const path: Array<[number, number]> = [[spring.top, spring.front - 0.9]]
  for (let i = fromLayer; i >= 0; i--) {
    const t = terrace(i)
    path.push([t.top, t.front], [t.y, t.front])
  }
  path.push([0, terrace(0).front + 0.9])

  const positions: number[] = []
  const uvs: number[] = []
  let v = 0
  for (let k = 0; k < path.length - 1; k++) {
    const [ya, za] = path[k]
    const [yb, zb] = path[k + 1]
    const len = Math.hypot(yb - ya, zb - za)
    // a hair off the rock: up on the steps, forward on the faces
    const dy = ya === yb ? 0.02 : 0
    const dz = za === zb ? 0.03 : 0
    const v0 = v / 2
    const v1 = (v + len) / 2
    const corners: Array<[number, number, number, number, number]> = [
      [x - hw, ya + dy, za + dz, 0, v0],
      [x + hw, ya + dy, za + dz, 1, v0],
      [x + hw, yb + dy, zb + dz, 1, v1],
      [x - hw, yb + dy, zb + dz, 0, v1],
    ]
    for (const i of [0, 1, 2, 0, 2, 3]) {
      const [px, py, pz, u, vv] = corners[i]
      positions.push(px, py, pz)
      uvs.push(u, vv)
    }
    v += len
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2))
  g.computeBoundingSphere()
  return g
}

// ---- Ground, sea and road ----

function shapeFrom(points: Vec2[]): THREE.Shape {
  // Shapes live in x/y; the ground lies in x/z, so y carries -z
  const shape = new THREE.Shape()
  points.forEach((p, i) => (i === 0 ? shape.moveTo(p.x, -p.z) : shape.lineTo(p.x, -p.z)))
  shape.closePath()
  return shape
}

function flatGeometry(shape: THREE.Shape, y: number, color: number): THREE.BufferGeometry {
  const g = new THREE.ShapeGeometry(shape, 1)
  g.rotateX(-Math.PI / 2)
  g.translate(0, y, 0)
  const count = g.getAttribute("position").count
  const col = new THREE.Color(color)
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) colors.set([col.r, col.g, col.b], i * 3)
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  return g
}

export function groundGeometries(): THREE.BufferGeometry[] {
  const sand = flatGeometry(shapeFrom(islandOutline(1)), 0, C.sand)
  const grass = flatGeometry(shapeFrom(islandOutline(BEACH_REACH)), 0.004, C.grass)
  // The coast's edge: a short sand cliff down to the sea
  const outline = islandOutline(1)
  const boxes: Box[] = []
  outline.forEach((p, i) => {
    const q = outline[(i + 1) % outline.length]
    const x0 = Math.min(p.x, q.x)
    const z0 = Math.min(p.z, q.z)
    boxes.push({
      x: x0 - 0.2,
      y: -0.42,
      z: z0 - 0.2,
      w: Math.abs(q.x - p.x) + 0.4,
      h: 0.41,
      d: Math.abs(q.z - p.z) + 0.4,
      color: C.sandDark,
    })
  })
  return [sand, grass, boxesGeometry(boxes, false)]
}

/** The shallow band of sea around the island and the foam at the waterline */
function ellipse(cx: number, cz: number, rx: number, rz: number, n = 48): Vec2[] {
  const pts: Vec2[] = []
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2
    pts.push({ x: cx + Math.cos(a) * rx, z: cz + Math.sin(a) * rz })
  }
  return pts
}

/** The wave's wash: a thin second foam line up the sand, shown on the beat */
export function washShape(): THREE.Shape {
  const wash = shapeFrom(islandOutline(0.992))
  wash.holes.push(new THREE.Path(islandOutline(0.983).map((p) => new THREE.Vector2(p.x, -p.z))))
  return wash
}

/** The waterfall's pool, and the churned ring of foam inside its rim */
export function plungeShapes(): { pool: THREE.Shape; foam: THREE.Shape } {
  const { x, z, rx, rz } = PLUNGE
  const foam = shapeFrom(ellipse(x, z, rx, rz, 32))
  foam.holes.push(new THREE.Path(ellipse(x, z + 0.05, rx - 0.2, rz - 0.16, 32).map((p) => new THREE.Vector2(p.x, -p.z))))
  return { pool: shapeFrom(ellipse(x, z, rx, rz, 32)), foam }
}

export function coastWaterShapes(): { shallow: THREE.Shape; foam: THREE.Shape; pond: THREE.Shape } {
  const shallow = shapeFrom(islandOutline(1.16))
  shallow.holes.push(new THREE.Path(islandOutline(1.0).map((p) => new THREE.Vector2(p.x, -p.z))))
  const foam = shapeFrom(islandOutline(1.016))
  foam.holes.push(new THREE.Path(islandOutline(0.997).map((p) => new THREE.Vector2(p.x, -p.z))))
  const pondPts: Vec2[] = []
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * Math.PI * 2
    pondPts.push({ x: POND.x + Math.cos(a) * POND.rx, z: POND.z + Math.sin(a) * POND.rz })
  }
  return { shallow, foam, pond: shapeFrom(pondPts) }
}

const DASH_PERIOD = LOOP_LENGTH / Math.round(LOOP_LENGTH / 2)

export function roadGeometry(): THREE.BufferGeometry {
  const positions: number[] = []
  const colors: number[] = []
  const col = new THREE.Color()
  const quad = (a: Vec2, b: Vec2, c: Vec2, d: Vec2, y: number, color: number) => {
    col.setHex(color)
    // wound so the quads face up
    for (const p of [a, c, b, a, d, c]) {
      positions.push(p.x, y, p.z)
      colors.push(col.r, col.g, col.b)
    }
  }
  const step = 0.5
  const n = Math.ceil(LOOP_LENGTH / step)
  const hw = ROAD.halfWidth
  const lineW = 0.12
  for (let i = 0; i < n; i++) {
    const s0 = i * step
    const s1 = Math.min((i + 1) * step, LOOP_LENGTH)
    const p = roadPoint(s0)
    const q = roadPoint(s1)
    const at = (r: typeof p, off: number): Vec2 => ({ x: r.x + r.nx * off, z: r.z + r.nz * off })
    // asphalt, then the two edge lines
    quad(at(p, -hw), at(q, -hw), at(q, hw), at(p, hw), 0.012, C.asphalt)
    quad(at(p, hw - 0.2 - lineW), at(q, hw - 0.2 - lineW), at(q, hw - 0.2), at(p, hw - 0.2), 0.016, C.roadLine)
    quad(at(p, -hw + 0.2), at(q, -hw + 0.2), at(q, -hw + 0.2 + lineW), at(p, -hw + 0.2 + lineW), 0.016, C.roadLine)
    // dashed centre line: about one unit on, one off, meeting cleanly
    // where the lap closes
    if ((s0 % DASH_PERIOD) < DASH_PERIOD / 2 - 0.01) {
      quad(at(p, -lineW / 2), at(q, -lineW / 2), at(q, lineW / 2), at(p, lineW / 2), 0.016, C.roadDash)
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  const normals = new Float32Array(positions.length)
  for (let i = 1; i < normals.length; i += 3) normals[i] = 1
  g.setAttribute("normal", new THREE.BufferAttribute(normals, 3))
  return g
}

// ---- Road paint and kerbs ----

const PAINT = 0xefe6d6
const SKID = 0x3f3b4d

/** Flat quads along the road: offsets across it (from the centreline) and a
 *  stretch along it, at height y */
function alongRoad(
  out: { positions: number[]; colors: number[] },
  s0: number,
  s1: number,
  off0: number,
  off1: number,
  y: number,
  color: number,
  step = 0.25
) {
  const col = new THREE.Color(color)
  for (let s = s0; s < s1 - 1e-6; s += step) {
    const a = roadPoint(s)
    const b = roadPoint(Math.min(s + step, s1))
    const p = (r: typeof a, off: number) => ({ x: r.x + r.nx * off, z: r.z + r.nz * off })
    const q = [p(a, off0), p(b, off0), p(b, off1), p(a, off1)]
    for (const i of [0, 2, 1, 0, 3, 2]) {
      out.positions.push(q[i].x, y, q[i].z)
      out.colors.push(col.r, col.g, col.b)
    }
  }
}

function flatBuffers(out: { positions: number[]; colors: number[] }): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry()
  g.setAttribute("position", new THREE.Float32BufferAttribute(out.positions, 3))
  g.setAttribute("color", new THREE.Float32BufferAttribute(out.colors, 3))
  const normals = new Float32Array(out.positions.length)
  for (let i = 1; i < normals.length; i += 3) normals[i] = 1
  g.setAttribute("normal", new THREE.BufferAttribute(normals, 3))
  g.computeBoundingSphere()
  return g
}

/**
 * Paint on the asphalt: a checkered start/finish band at the start arch, a
 * zebra crossing at every other Landmark, chevrons pointing the way round
 * the lap, tyre marks on two corners and a few manhole covers.
 */
export function roadPaintGeometry(crossings: number[], startS: number): THREE.BufferGeometry {
  const out = { positions: [] as number[], colors: [] as number[] }
  const hw = ROAD.halfWidth
  const y = 0.019
  // start / finish: three rows of checks across the road
  for (let row = 0; row < 3; row++) {
    for (let k = 0; k < 10; k++) {
      const off0 = -hw + (k * 2 * hw) / 10
      alongRoad(out, startS - 0.45 + row * 0.3, startS - 0.15 + row * 0.3, off0, off0 + (2 * hw) / 10, y, (row + k) % 2 ? C.ink : PAINT, 0.3)
    }
  }
  // zebra crossings
  for (const s of crossings) {
    for (let k = 0; k < 6; k++) {
      const off0 = -hw + 0.25 + k * 0.45
      alongRoad(out, s - 0.7, s + 0.7, off0, off0 + 0.25, y, PAINT, 0.35)
    }
  }
  // an arrow in the inner lane on each straight, pointing the way a lap
  // runs: a shaft, then a head narrowing a step at a time
  for (const s of [30, 100, 190, 280]) {
    const lane = -0.75
    alongRoad(out, s, s + 1.0, lane - 0.06, lane + 0.06, y, PAINT, 0.25)
    ;[0.5, 0.36, 0.22, 0.08].forEach((w, k) => {
      alongRoad(out, s + 1.0 + k * 0.125, s + 1.125 + k * 0.125, lane - w / 2, lane + w / 2, y, PAINT, 0.125)
    })
  }
  // tyre marks on two corners, two lines each
  for (const [s0, s1, off] of [[44, 56, 0.55], [222, 232, -0.6]] as const) {
    alongRoad(out, s0, s1, off, off + 0.07, y, SKID, 0.5)
    alongRoad(out, s0 + 0.4, s1 - 0.6, off + 0.3, off + 0.37, y, SKID, 0.5)
  }
  // manhole covers: a dark square with a lighter cross
  for (const [s, off] of [[120, -0.6], [262, 0.5], [335, -0.4]] as const) {
    alongRoad(out, s, s + 0.4, off - 0.2, off + 0.2, y, 0x3a3747, 0.4)
    alongRoad(out, s + 0.17, s + 0.23, off - 0.2, off + 0.2, y + 0.001, 0x5d5870, 0.06)
    alongRoad(out, s, s + 0.4, off - 0.03, off + 0.03, y + 0.001, 0x5d5870, 0.4)
  }
  return flatBuffers(out)
}

/** Kerbs along both edges: grey on the straights, red and white on the bends */
export function kerbGeometry(): THREE.BufferGeometry {
  const boxes: Box[] = []
  const hw = ROAD.halfWidth
  // half-unit kerb stones on the straights; on the bends, small square
  // blocks in red and white, which follow a curve without turning
  let k = 0
  for (let s = 0; s < LOOP_LENGTH - 1e-6; k++) {
    const p = roadPoint(s + 0.125)
    const bend = Math.abs(p.tx) > 0.02 && Math.abs(p.tz) > 0.02
    const step = bend ? 0.25 : 0.5
    const q = roadPoint(s + step / 2)
    for (const side of [-1, 1]) {
      const cx = q.x + q.nx * side * (hw + 0.1)
      const cz = q.z + q.nz * side * (hw + 0.1)
      if (bend) {
        boxes.push(centered(cx, 0, cz, 0.2, 0.05, 0.2, Math.floor(k / 2) % 2 ? C.cream : C.magenta))
      } else {
        const along = Math.abs(q.tx) >= Math.abs(q.tz)
        boxes.push(centered(cx, 0, cz, along ? step + 0.02 : 0.14, 0.05, along ? 0.14 : step + 0.02, k % 2 ? C.rock : C.rockLight))
      }
    }
    s += step
  }
  return boxesGeometry(boxes)
}

/** A distance post on the verge: a pole and a plate reading the metres */
export function distancePostBoxes(metres: number, textBoxes: (text: string, cx: number, top: number, z: number, color: number) => Box[]): Box[] {
  const label = String(metres)
  const w = (label.length * 4 + 3) / 16
  return [
    centered(0, 0, 0, 0.1, 0.62, 0.1, C.cream),
    centered(0, 0.62, 0, w, 0.5, 0.06, C.cream),
    centered(0, 0.62, 0.031, w - 2 / 16, 0.07, 0.01, C.sunset),
    ...textBoxes(label, 0, 1.03, 0.035, C.ink),
  ]
}

/** A street lamp, its arm reaching along +x toward the road */
export function streetLampBoxes(): { pole: Box[]; bulb: Box[] } {
  return {
    pole: [
      centered(0, 0, 0, 0.26, 0.12, 0.26, 0x4a4658),
      centered(0, 0, 0, 0.12, 2.5, 0.12, 0x5d5870),
      { x: 0, y: 2.42, z: -0.05, w: 1.0, h: 0.08, d: 0.1, color: 0x5d5870 },
      centered(1.0, 2.32, 0, 0.36, 0.14, 0.22, 0x4a4658),
    ],
    bulb: [centered(1.0, 2.26, 0, 0.24, 0.06, 0.14, 0xfff1c4)],
  }
}

// ---- The coast's pixel edges ----

/**
 * Cells on the pixel grid where the island's reach falls in a band:
 * filled between `inner` and `outer`, dithered for `dither` beyond each
 * side. Each row only looks near the coast, where the band can be.
 */
export function coastBand(inner: number, outer: number, ditherIn: number, ditherOut: number, color: number, parity = 0): Cell[] {
  const cw = GROUND_PIXEL.x * 2
  const cd = GROUND_PIXEL.z * 2
  const lo = inner - ditherIn
  const hi = outer + ditherOut
  const cells: Cell[] = []
  for (let j = Math.floor((-hi * 1.1 * ISLAND_RZ) / cd); j <= Math.ceil((hi * 1.1 * ISLAND_RZ) / cd); j++) {
    const z = (j + 0.5) * cd
    const ez = z / ISLAND_RZ
    const xMax = ISLAND_RX * Math.sqrt(Math.max(0, (hi * 1.1) ** 2 - ez * ez))
    const xMin = ISLAND_RX * Math.sqrt(Math.max(0, (lo * 0.9) ** 2 - ez * ez))
    for (const sign of [-1, 1]) {
      let run: number | null = null
      const i0 = Math.floor(xMin / cw)
      const i1 = Math.ceil(xMax / cw)
      const flush = (end: number) => {
        if (run === null) return
        const a = sign > 0 ? run : -end
        cells.push({ x: a * cw, z: j * cd, w: (end - run) * cw, d: cd, color })
        run = null
      }
      for (let i = i0; i <= i1; i++) {
        const x = sign * (i + 0.5) * cw
        const r = i < i1 ? islandReach(x, z) : Infinity
        const on =
          (r >= inner && r <= outer) ||
          (((r >= lo && r < inner) || (r > outer && r <= hi)) && ((i + j + parity + (sign > 0 ? 0 : 1)) & 1) === 0)
        if (on && run === null) run = i
        if (!on) flush(i)
      }
      flush(i1)
    }
  }
  return cells
}

// ---- The pond's lily pads and reeds ----

export function lilyPadCells(): Cell[] {
  const rand = mulberry32(77)
  const cells: Cell[] = []
  for (let k = 0; k < 8; k++) {
    const a = rand() * Math.PI * 2
    const d = 0.25 + rand() * 0.5
    const cx = POND.x + Math.cos(a) * POND.rx * d
    const cz = POND.z + Math.sin(a) * POND.rz * d
    const r = 0.35 + rand() * 0.25
    cells.push(
      ...rasterize(
        { minX: cx - r, maxX: cx + r, minZ: cz - r, maxZ: cz + r },
        (x, z) => {
          // a disc with a notch cut in it
          const ang = Math.atan2(z - cz, x - cx)
          if (Math.abs(ang - a) < 0.35) return 9
          return Math.hypot((x - cx) / r, (z - cz) / (r * 0.8))
        },
        1,
        k % 2 ? C.frond : C.frondLight
      )
    )
  }
  return cells
}

export function pondFlowerBoxes(): Box[] {
  const rand = mulberry32(77)
  const boxes: Box[] = []
  for (let k = 0; k < 8; k++) {
    const a = rand() * Math.PI * 2
    const d = 0.25 + rand() * 0.5
    rand()
    if (k % 3) continue
    boxes.push(centered(POND.x + Math.cos(a) * POND.rx * d, 0.012, POND.z + Math.sin(a) * POND.rz * d, 0.14, 0.08, 0.14, 0xf6a6c0))
  }
  return boxes
}

export function reedBoxes(): Box[] {
  const rand = mulberry32(31)
  const boxes: Box[] = []
  for (let cluster = 0; cluster < 7; cluster++) {
    const a = -Math.PI * 0.95 + rand() * Math.PI * 0.9 // the north shore, behind the water
    const cx = POND.x + Math.cos(a) * POND.rx * 1.02
    const cz = POND.z + Math.sin(a) * POND.rz * 1.02
    for (let k = 0; k < 5; k++) {
      const x = cx + (rand() - 0.5) * 0.8
      const z = cz + (rand() - 0.5) * 0.4
      const h = 0.45 + rand() * 0.35
      boxes.push(centered(x, 0, z, 0.05, h, 0.05, k % 2 ? C.frondDark : C.frond))
      if (k % 2 === 0) boxes.push(centered(x, h - 0.04, z, 0.08, 0.16, 0.08, C.trunkDark))
    }
  }
  return boxes
}

// ---- The pier and its boat ----

export function pierGeometry(): THREE.BufferGeometry {
  const { x, z0, z1, halfWidth: hw } = PIER
  const boxes: Box[] = []
  // planks across, alternating tone, sitting just proud of the sand
  let k = 0
  for (let z = z0; z < z1 - 1e-6; z += 0.25, k++) {
    boxes.push({ x: x - hw, y: -0.14, z, w: hw * 2 - (k % 5 === 2 ? 0.25 : 0), h: 0.16, d: 0.23, color: k % 2 ? C.wood : C.woodDark })
  }
  // stringers along the edges and posts down into the water
  boxes.push({ x: x - hw - 0.04, y: -0.2, z: z0, w: 0.12, h: 0.12, d: z1 - z0, color: C.trunkDark })
  boxes.push({ x: x + hw - 0.08, y: -0.2, z: z0, w: 0.12, h: 0.12, d: z1 - z0, color: C.trunkDark })
  for (let z = z0 + 2.5; z <= z1; z += 2) {
    for (const side of [-1, 1]) boxes.push(centered(x + side * (hw - 0.05), -0.7, z, 0.18, 0.95, 0.18, C.trunk))
  }
  // a lantern post at the end, and a coil of rope
  boxes.push(centered(x + hw - 0.15, 0, z1 - 0.3, 0.12, 1.3, 0.12, C.trunkDark))
  boxes.push(centered(x - hw + 0.35, 0.02, z1 - 0.6, 0.34, 0.08, 0.34, C.canvas))
  return boxesGeometry(boxes, false)
}

/** A rowing boat moored beside the pier, facing +x */
export function boatBoxes(): Box[] {
  return [
    // the hull, narrowing to a bow at +x
    centered(-0.1, 0, 0, 1.8, 0.3, 0.84, C.purpleDark),
    centered(0.95, 0.04, 0, 0.3, 0.26, 0.56, C.purpleDark),
    centered(1.18, 0.08, 0, 0.16, 0.22, 0.28, C.purpleDark),
    // inside: floorboards and two thwarts
    centered(-0.1, 0.3, 0, 1.7, 0.02, 0.66, C.woodDark),
    centered(-0.45, 0.3, 0, 0.18, 0.08, 0.66, C.wood),
    centered(0.35, 0.3, 0, 0.18, 0.08, 0.66, C.wood),
    // gunwales, a ring of cream so the inside shows
    centered(-0.1, 0.3, 0.38, 1.8, 0.08, 0.08, C.cream),
    centered(-0.1, 0.3, -0.38, 1.8, 0.08, 0.08, C.cream),
    centered(-0.98, 0.3, 0, 0.08, 0.08, 0.84, C.cream),
    centered(0.95, 0.3, 0.26, 0.3, 0.08, 0.08, C.cream),
    centered(0.95, 0.3, -0.26, 0.3, 0.08, 0.08, C.cream),
    centered(1.15, 0.3, 0, 0.12, 0.08, 0.3, C.cream),
    // an oar resting across
    centered(-0.05, 0.38, 0.1, 1.3, 0.04, 0.06, C.trunk),
    centered(0.62, 0.38, 0.1, 0.24, 0.04, 0.14, C.trunk),
  ]
}
