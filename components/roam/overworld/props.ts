// The Overworld's props, each a list of coloured boxes (voxels.ts). Base
// colours are what a prop looks like under plain white light; the sky
// (sky.ts) tints them through the sun and shade lights. Landmarks are
// built facing +z; the scene turns them to face the road.

import * as THREE from "three"
import { CRYSTAL, RUNNER_SHARED, RUNNER_STANDING, type Px } from "../../sprites"
import { type Box, boxesGeometry, centered, extrudePx, offset } from "./voxels"
import {
  BEACH_REACH,
  fencePosts,
  islandOutline,
  LOOP_LENGTH,
  MOUNTAIN,
  PASTURE,
  POND,
  ROAD,
  roadPoint,
  type Vec2,
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

/** A worn or lush patch of grass, flat on the ground, about 2 x 1 */
export function patchBoxes(variant: number): Box[] {
  const color = variant === 0 ? C.grassDark : C.grassLight
  return [
    { x: -1, y: 0, z: -0.4, w: 2, h: 0.01, d: 0.8, color },
    { x: -0.6, y: 0, z: -0.6, w: 1.1, h: 0.01, d: 0.2, color },
    { x: -0.3, y: 0, z: 0.4, w: 0.9, h: 0.01, d: 0.2, color },
  ]
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

/** Stepped terraces: the big mountain behind the north straight */
export function mountainGeometry(): THREE.BufferGeometry {
  const boxes: Box[] = []
  const { x, z, baseHalfX, baseHalfZ, layers, layerHeight } = MOUNTAIN
  const colors = [C.mountainLow, C.mountainLow, C.mountainMid, C.mountainMid, C.mountainHigh, C.mountainPeak]
  for (let i = 0; i < layers; i++) {
    const shrink = 1 - i * 0.16
    const hx = baseHalfX * shrink
    const hz = baseHalfZ * (1 - i * 0.12)
    // the peak sits west of centre, like the Title Screen's mountain
    const cx = x - i * 2.4
    boxes.push(centered(cx, i * layerHeight, z, hx * 2, layerHeight, hz * 2, colors[i]))
    // ledges break up the silhouette
    boxes.push(centered(cx + hx * 0.55, i * layerHeight, z + hz * 0.15, hx * 0.5, layerHeight * 1.35, hz * 1.4, colors[i]))
  }
  // a foothill to the east
  boxes.push(centered(x + 30, 0, z + 2, 14, 2.4, 10, C.mountainLow))
  boxes.push(centered(x + 31, 2.4, z + 2, 8, 1.8, 6, C.mountainMid))
  return boxesGeometry(boxes)
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
export function coastWaterShapes(): { shallow: THREE.Shape; foam: THREE.Shape; pond: THREE.Shape } {
  const shallow = shapeFrom(islandOutline(1.16))
  shallow.holes.push(new THREE.Path(islandOutline(1.0).map((p) => new THREE.Vector2(p.x, -p.z))))
  const foam = shapeFrom(islandOutline(1.03))
  foam.holes.push(new THREE.Path(islandOutline(0.995).map((p) => new THREE.Vector2(p.x, -p.z))))
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

// ---- Landmarks ----
// Placeholders until the art pass decides each Landmark's look: one
// recognisable structure per Zone, about six units wide and three to four
// tall, its front facing +z.

export interface LandmarkModel {
  boxes: Box[]
  /** a part that turns slowly (the save crystal) */
  spinner?: Box[]
  spinnerY?: number
  /** top of the structure, where its label hangs */
  height: number
}

function checkerStrip(x0: number, x1: number, y: number, z: number, size: number): Box[] {
  const boxes: Box[] = []
  let i = 0
  for (let x = x0; x < x1 - 0.001; x += size, i++) {
    boxes.push({ x, y, z, w: size, h: size, d: 0.08, color: i % 2 ? C.ink : C.cream })
    boxes.push({ x, y: y + size, z, w: size, h: size, d: 0.08, color: i % 2 ? C.cream : C.ink })
  }
  return boxes
}

function titleArch(): LandmarkModel {
  // The race's start arch: the Title Screen is where every run begins
  const boxes: Box[] = [
    centered(-2.6, 0, 0, 0.7, 3.2, 0.7, C.purple),
    centered(2.6, 0, 0, 0.7, 3.2, 0.7, C.purple),
    centered(-2.6, 0, 0, 0.9, 0.3, 0.9, C.purpleDark),
    centered(2.6, 0, 0, 0.9, 0.3, 0.9, C.purpleDark),
    centered(0, 2.55, 0, 6.0, 0.9, 0.5, C.sunset),
    centered(0, 3.45, 0, 6.2, 0.16, 0.6, C.gold),
    centered(0, 2.45, 0, 6.2, 0.12, 0.6, C.gold),
    ...checkerStrip(-1.4, 1.4, 2.66, 0.26, 0.2),
  ]
  // the start line, painted across the ground in front
  for (let i = 0; i < 12; i++) {
    boxes.push({ x: -3 + i * 0.5, y: 0, z: 1.6, w: 0.5, h: 0.02, d: 0.25, color: i % 2 ? C.ink : C.cream })
    boxes.push({ x: -3 + i * 0.5, y: 0, z: 1.85, w: 0.5, h: 0.02, d: 0.25, color: i % 2 ? C.cream : C.ink })
  }
  return { boxes, height: 3.6 }
}

function statsKiosk(): LandmarkModel {
  // A character-card booth with the Runner on its screen
  const portrait = offset(
    extrudePx([...RUNNER_SHARED, ...RUNNER_STANDING] as Px[], 16, 20, 0.075, 0.06),
    0,
    0.95,
    1.0
  )
  return {
    boxes: [
      centered(0, 0, -0.3, 4.2, 2.6, 2.4, C.purple),
      centered(0, 0.9, 0.93, 1.9, 1.62, 0.06, C.cream),
      ...portrait,
      centered(-1.5, 1.6, 0.92, 0.7, 0.18, 0.05, C.gold), // stat bars
      centered(-1.5, 1.3, 0.92, 0.5, 0.18, 0.05, C.sky),
      centered(-1.5, 1.0, 0.92, 0.6, 0.18, 0.05, C.magenta),
      centered(0, 0, 1.15, 4.4, 0.9, 0.5, C.purpleLight),
      centered(0, 2.6, -0.1, 4.8, 0.3, 3.0, C.sunset),
      centered(0, 2.9, -0.1, 4.0, 0.2, 2.4, C.sunsetLight),
    ],
    height: 3.1,
  }
}

function questBoard(): LandmarkModel {
  const notes: Box[] = [
    centered(-1.6, 1.4, 0.16, 0.8, 0.9, 0.04, C.cream),
    centered(-0.5, 1.15, 0.16, 0.8, 1.0, 0.04, C.gold),
    centered(0.6, 1.45, 0.16, 0.9, 0.8, 0.04, C.cream),
    centered(1.65, 1.1, 0.16, 0.7, 0.9, 0.04, C.sunsetLight),
  ]
  return {
    boxes: [
      centered(-2.4, 0, 0, 0.35, 2.9, 0.35, C.trunk),
      centered(2.4, 0, 0, 0.35, 2.9, 0.35, C.trunk),
      centered(0, 0.85, 0, 5.2, 1.85, 0.26, C.wood),
      centered(0, 0.85, 0.02, 5.4, 0.12, 0.3, C.woodDark),
      centered(0, 2.62, 0.02, 5.4, 0.12, 0.3, C.woodDark),
      ...notes,
      centered(0, 2.9, 0, 5.8, 0.26, 0.9, C.purple),
      // the "!" of a quest giver
      centered(0, 3.5, 0, 0.3, 0.75, 0.3, C.gold),
      centered(0, 3.25, 0, 0.3, 0.18, 0.3, C.purple),
      centered(0, 3.05, 0, 0.3, 0.2, 0.3, C.gold),
    ],
    height: 4.3,
  }
}

function aidStation(): LandmarkModel {
  // The race's aid station: the Inventory is what a runner carries
  const boxes: Box[] = [
    centered(0, 0.78, 0.6, 4.6, 0.16, 1.3, C.cream),
    centered(-2.1, 0, 0.6, 0.14, 0.78, 1.1, C.canvas),
    centered(2.1, 0, 0.6, 0.14, 0.78, 1.1, C.canvas),
    centered(0, 0, -0.9, 1.6, 0.9, 0.9, C.wood),
    centered(0, 0.9, -0.9, 1.7, 0.12, 1.0, C.gold),
  ]
  const cups = [C.gold, C.sunset, C.sky, C.magenta, C.gold, C.sky]
  cups.forEach((color, i) => boxes.push(centered(-1.8 + i * 0.5, 0.94, 0.55, 0.22, 0.28, 0.22, color)))
  boxes.push(centered(1.5, 0.94, 0.75, 0.5, 0.6, 0.5, C.sky))
  boxes.push(centered(1.5, 1.54, 0.75, 0.2, 0.12, 0.2, C.cream))
  for (const [px, pz] of [[-2.5, -1.5], [2.5, -1.5], [-2.5, 1.5], [2.5, 1.5]]) {
    boxes.push(centered(px, 0, pz, 0.14, 2.6, 0.14, C.canvas))
  }
  for (let i = 0; i < 6; i++) {
    boxes.push({ x: -3 + i, y: 2.6, z: -1.8, w: 1, h: 0.3, d: 3.6, color: i % 2 ? C.cream : C.sunset })
  }
  boxes.push(centered(0, 2.9, 0, 6.2, 0.14, 3.8, C.sunsetLight))
  return { boxes, height: 3.2 }
}

function arcade(): LandmarkModel {
  const boxes: Box[] = []
  for (const x of [-1.25, 1.25]) {
    boxes.push(
      centered(x, 0, 0, 1.6, 2.9, 1.4, C.purple),
      centered(x, 1.45, 0.71, 1.24, 0.95, 0.06, C.ink),
      centered(x, 1.55, 0.74, 1.02, 0.72, 0.03, x < 0 ? C.sky : C.magenta),
      centered(x, 1.0, 0.84, 1.6, 0.22, 0.5, C.purpleLight),
      centered(x - 0.35, 1.22, 0.92, 0.16, 0.08, 0.16, C.gold),
      centered(x + 0.15, 1.22, 0.92, 0.16, 0.08, 0.16, C.magenta),
      centered(x + 0.45, 1.22, 0.92, 0.16, 0.08, 0.16, C.sky),
      centered(x, 2.6, 0.62, 1.6, 0.34, 0.2, C.gold),
      centered(x, 2.9, 0, 1.7, 0.12, 1.5, C.purpleDark),
    )
  }
  return { boxes, height: 3.4 }
}

function savePoint(): LandmarkModel {
  // the Save Point's crystal, without the pedestal rows of its sprite
  const crystal = extrudePx(CRYSTAL.slice(0, 7), 11, 11, 0.17, 0.5)
  return {
    boxes: [
      centered(0, 0, 0, 2.6, 0.45, 2.6, C.stone),
      centered(0, 0.45, 0, 1.9, 0.3, 1.9, C.stoneLight),
      centered(-2.4, 0, 0.6, 0.3, 1.8, 0.3, C.stone),
      centered(2.4, 0, 0.6, 0.3, 1.8, 0.3, C.stone),
      centered(-2.4, 1.8, 0.6, 0.45, 0.4, 0.45, C.gold),
      centered(2.4, 1.8, 0.6, 0.45, 0.4, 0.45, C.gold),
    ],
    spinner: crystal,
    spinnerY: 1.1,
    height: 3.2,
  }
}

function raceClock(): LandmarkModel {
  return {
    boxes: [
      centered(0, 0, 0, 1.2, 3.0, 0.8, C.purple),
      centered(0, 2.0, 0.42, 2.6, 0.9, 0.12, C.ink),
      centered(-0.8, 2.25, 0.5, 0.3, 0.42, 0.04, C.gold),
      centered(-0.3, 2.25, 0.5, 0.3, 0.42, 0.04, C.gold),
      centered(0.3, 2.25, 0.5, 0.3, 0.42, 0.04, C.gold),
      centered(0.8, 2.25, 0.5, 0.3, 0.42, 0.04, C.gold),
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
