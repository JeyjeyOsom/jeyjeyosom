// The Overworld's level data (CONTEXT.md: Overworld, Landmark): the island,
// the loop road, where each Landmark stands, and the scenery scatter. Pure
// data and geometry, no three.js, so the movement rules and the map read
// the same source of truth as the renderer.
//
// Units: one world unit is one 16-pixel tile, so the 16x20 Runner is one
// unit wide. The ground is y = 0; x runs east and z runs south, toward the
// camera at the default angle.

export interface Vec2 {
  x: number
  z: number
}

// ---- The camera's grid ----

/** The camera's tilt below the horizon; it never rotates (ADR 0003) */
export const CAMERA_PITCH = (42 * Math.PI) / 180
/** World units per screen pixel: across the screen, and along the ground
 *  into it, which the tilt stretches */
export const GROUND_PIXEL = { x: 1 / 16, z: 1 / (16 * Math.sin(CAMERA_PITCH)) }

// ---- The island ----

export const ISLAND_RX = 86
export const ISLAND_RZ = 66

/** The coastline's wobble: 1 is the plain ellipse */
function coastWobble(theta: number): number {
  return (
    1 +
    0.045 * Math.sin(3 * theta + 1.1) +
    0.03 * Math.sin(5 * theta + 2.3) +
    0.02 * Math.sin(7 * theta + 0.4)
  )
}

/** 0 at the island's centre, 1 at the waterline */
export function islandReach(x: number, z: number): number {
  const ex = x / ISLAND_RX
  const ez = z / ISLAND_RZ
  return Math.hypot(ex, ez) / coastWobble(Math.atan2(ez, ex))
}

/** Where the grass gives way to sand */
export const BEACH_REACH = 0.89
/** How far onto the sand the Runner may go */
export const WALK_REACH = 0.965

/** A point on the island at an angle and a reach (1 = waterline) */
export function islandPoint(theta: number, reach: number): Vec2 {
  const r = reach * coastWobble(theta)
  return { x: Math.cos(theta) * r * ISLAND_RX, z: Math.sin(theta) * r * ISLAND_RZ }
}

/** A closed outline of the island at a given reach (1 = waterline) */
export function islandOutline(reach: number, segments = 180): Vec2[] {
  const pts: Vec2[] = []
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2
    const r = reach * coastWobble(theta)
    pts.push({ x: Math.cos(theta) * r * ISLAND_RX, z: Math.sin(theta) * r * ISLAND_RZ })
  }
  return pts
}

// ---- The loop road: his training route ----
// A rounded rectangle, run in one direction: along the south straight
// toward the east, up the east side, west along the north straight, and
// back down the west side.

export const ROAD = {
  cx: 0,
  cz: 4,
  hx: 58,
  hz: 40,
  r: 18,
  halfWidth: 1.5,
} as const

interface LineSeg {
  kind: "line"
  length: number
  x0: number
  z0: number
  tx: number
  tz: number
}
interface ArcSeg {
  kind: "arc"
  length: number
  cx: number
  cz: number
  a0: number
}
type Segment = LineSeg | ArcSeg

const SEGMENTS: Segment[] = (() => {
  const { cx, cz, hx, hz, r } = ROAD
  const sx = hx - r // half-length of the north and south straights
  const sz = hz - r
  const arc = (Math.PI * r) / 2
  const line = (x0: number, z0: number, tx: number, tz: number, length: number): LineSeg => ({
    kind: "line",
    length,
    x0: cx + x0,
    z0: cz + z0,
    tx,
    tz,
  })
  const corner = (ccx: number, ccz: number, a0: number): ArcSeg => ({
    kind: "arc",
    length: arc,
    cx: cx + ccx,
    cz: cz + ccz,
    a0,
  })
  return [
    line(0, hz, 1, 0, sx),
    corner(sx, sz, Math.PI / 2),
    line(hx, sz, 0, -1, sz * 2),
    corner(sx, -sz, 0),
    line(sx, -hz, -1, 0, sx * 2),
    corner(-sx, -sz, -Math.PI / 2),
    line(-hx, -sz, 0, 1, sz * 2),
    corner(-sx, sz, -Math.PI),
    line(-sx, hz, 1, 0, sx),
  ]
})()

/** One lap, in world units */
export const LOOP_LENGTH = SEGMENTS.reduce((sum, s) => sum + s.length, 0)

export interface RoadPoint extends Vec2 {
  /** unit tangent in the running direction */
  tx: number
  tz: number
  /** unit normal pointing away from the loop's centre */
  nx: number
  nz: number
}

/** The road's centreline at distance s along the lap */
export function roadPoint(s: number): RoadPoint {
  let d = ((s % LOOP_LENGTH) + LOOP_LENGTH) % LOOP_LENGTH
  for (const seg of SEGMENTS) {
    if (d > seg.length) {
      d -= seg.length
      continue
    }
    let x: number, z: number, tx: number, tz: number
    if (seg.kind === "line") {
      x = seg.x0 + seg.tx * d
      z = seg.z0 + seg.tz * d
      tx = seg.tx
      tz = seg.tz
    } else {
      const a = seg.a0 - d / ROAD.r
      x = seg.cx + Math.cos(a) * ROAD.r
      z = seg.cz + Math.sin(a) * ROAD.r
      tx = Math.sin(a)
      tz = -Math.cos(a)
    }
    return { x, z, tx, tz, nx: -tz, nz: tx }
  }
  return roadPoint(0)
}

/** Distance from a point to the road's centreline */
export function roadDistance(x: number, z: number): number {
  const { cx, cz, hx, hz, r } = ROAD
  const qx = Math.abs(x - cx) - (hx - r)
  const qz = Math.abs(z - cz) - (hz - r)
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qz, 0))
  const inside = Math.min(Math.max(qx, qz), 0)
  return Math.abs(outside + inside - r)
}

/** How far along the lap the road's nearest point to (x, z) lies */
export function loopS(x: number, z: number): number {
  let best = Infinity
  let bestS = 0
  let acc = 0
  for (const seg of SEGMENTS) {
    let along: number
    let px: number
    let pz: number
    if (seg.kind === "line") {
      along = Math.min(Math.max((x - seg.x0) * seg.tx + (z - seg.z0) * seg.tz, 0), seg.length)
      px = seg.x0 + seg.tx * along
      pz = seg.z0 + seg.tz * along
    } else {
      // the arc's angle falls as it is run: a = a0 - along / r
      let delta = (seg.a0 - Math.atan2(z - seg.cz, x - seg.cx)) % (Math.PI * 2)
      if (delta < 0) delta += Math.PI * 2
      const span = seg.length / ROAD.r
      if (delta > span) delta = delta > span + (Math.PI * 2 - span) / 2 ? 0 : span
      along = delta * ROAD.r
      px = seg.cx + Math.cos(seg.a0 - delta) * ROAD.r
      pz = seg.cz + Math.sin(seg.a0 - delta) * ROAD.r
    }
    const d = Math.hypot(x - px, z - pz)
    if (d < best) {
      best = d
      bestS = acc + along
    }
    acc += seg.length
  }
  return bestS
}

// ---- Landmarks ----
// One per Zone, along the road in the World's order. Each stands beside the
// road and, like buildings in a 16-bit game, faces the camera, with its
// door in front of it. On the south straight they stand on the inner side
// so they never hide the Runner on the road.

interface LandmarkSlot {
  s: number
  side: 1 | -1
}

const LANDMARK_SLOTS: Record<string, LandmarkSlot> = {
  title: { s: 10, side: -1 },
  about: { s: 90, side: 1 },
  experience: { s: 160, side: 1 },
  skills: { s: 205, side: 1 },
  projects: { s: 270, side: 1 },
  running: { s: 327, side: -1 }, // benched with the Records Screen
  contact: { s: 343, side: -1 },
}

/** footprint along x (across the screen) and z (into it) */
export const LANDMARK_WIDTH = 6
export const LANDMARK_DEPTH = 3.6
/** How close the Runner must be to a Landmark's door to open it */
export const DOOR_REACH = 2.6

/** Where a lap starts and ends: the start arch's stretch of road */
export const LAP_START_S = 10

export interface LandmarkPlacement {
  zoneId: string
  /** its place along the lap */
  s: number
  /** centre of the structure's footprint */
  x: number
  z: number
  /** its turn about the vertical: the model is built facing +z */
  angle: number
  /** the way its front faces: toward the camera */
  facing: Vec2
  /** where the Runner stands to open it, just in front */
  door: Vec2
  /** the footprint's half width (across its front) and half depth */
  hx: number
  hz: number
  /** the turned footprint's axis-aligned bounds, for keeping scenery clear */
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

/**
 * Stand each Landmark beside the road, turned to face the camera (its
 * angle is the camera's yaw), so its front, its signs and its screens
 * meet the view square on. It is set back far enough that the turned
 * footprint stays clear of the road, and its door is in front of it.
 */
export function placeLandmarks(zoneIds: string[], yaw = 0): LandmarkPlacement[] {
  const fx = Math.sin(yaw)
  const fz = Math.cos(yaw)
  const ux = Math.cos(yaw) // across its front
  const uz = -Math.sin(yaw)
  const hx = LANDMARK_WIDTH / 2
  const hz = LANDMARK_DEPTH / 2
  const ex = hx * Math.abs(ux) + hz * Math.abs(fx)
  const ez = hx * Math.abs(uz) + hz * Math.abs(fz)
  return zoneIds.flatMap((zoneId) => {
    const slot = LANDMARK_SLOTS[zoneId]
    if (!slot) return []
    const p = roadPoint(slot.s)
    const ox = p.nx * slot.side
    const oz = p.nz * slot.side
    // how far the turned footprint reaches toward the road
    const reach = hx * Math.abs(ux * ox + uz * oz) + hz * Math.abs(fx * ox + fz * oz)
    const back = ROAD.halfWidth + 1.2 + reach
    const x = p.x + ox * back
    const z = p.z + oz * back
    return [
      {
        zoneId,
        s: slot.s,
        x,
        z,
        angle: yaw,
        facing: { x: fx, z: fz },
        door: { x: x + fx * (hz + 1), z: z + fz * (hz + 1) },
        hx,
        hz,
        minX: x - ex,
        maxX: x + ex,
        minZ: z - ez,
        maxZ: z + ez,
      },
    ]
  })
}

/** A point in a Landmark's own frame: x across its front, z out of it */
export function landmarkLocal(l: LandmarkPlacement, x: number, z: number): Vec2 {
  const dx = x - l.x
  const dz = z - l.z
  const c = Math.cos(l.angle)
  const s = Math.sin(l.angle)
  return { x: dx * c - dz * s, z: dx * s + dz * c }
}

// ---- Fixed features ----

export const PASTURE = { minX: -12, maxX: 20, minZ: -8, maxZ: 12 }
export const POND = { x: -32, z: -6, rx: 9, rz: 6 }
export const MOUNTAIN = { x: -8, z: -56, baseHalfX: 34, baseHalfZ: 9, layers: 6, layerHeight: 2.2 }

/** One of the mountain's stepped terraces; each is narrower, shallower and
 *  further west than the one below, so the peak sits west of centre */
export function terrace(i: number) {
  const hx = MOUNTAIN.baseHalfX * (1 - i * 0.16)
  const hz = MOUNTAIN.baseHalfZ * (1 - i * 0.12)
  const cx = MOUNTAIN.x - i * 2.4
  return {
    cx,
    hx,
    hz,
    minX: cx - hx,
    maxX: cx + hx,
    /** the south face, toward the camera */
    front: MOUNTAIN.z + hz,
    y: i * MOUNTAIN.layerHeight,
    top: (i + 1) * MOUNTAIN.layerHeight,
    /** the ledge that breaks up its silhouette, east of centre */
    ledge: { minX: cx + hx * 0.3, maxX: cx + hx * 0.8, front: MOUNTAIN.z + hz * 0.85 },
  }
}

/** A spring on the fourth terrace that steps down the south face */
export const WATERFALL = { x: -30, fromLayer: 3, halfWidth: 0.56 }
/** The pool at its foot */
export const PLUNGE = { x: -30, z: -45.9, rx: 2.4, rz: 1.3 }

/** A wooden pier off the south beach, walkable to its end */
export const PIER = { x: 24, z0: 57.5, z1: 71, halfWidth: 0.8 }

export function inPier(x: number, z: number, margin = 0): boolean {
  return Math.abs(x - PIER.x) < PIER.halfWidth + margin && z > PIER.z0 - margin && z < PIER.z1 + margin
}

export function inPlunge(x: number, z: number, margin = 0): boolean {
  const dx = (x - PLUNGE.x) / (PLUNGE.rx + margin)
  const dz = (z - PLUNGE.z) / (PLUNGE.rz + margin)
  return dx * dx + dz * dz < 1
}

export function inPond(x: number, z: number, margin = 0): boolean {
  const dx = (x - POND.x) / (POND.rx + margin)
  const dz = (z - POND.z) / (POND.rz + margin)
  return dx * dx + dz * dz < 1
}

export function inPasture(x: number, z: number, margin = 0): boolean {
  return (
    x > PASTURE.minX - margin &&
    x < PASTURE.maxX + margin &&
    z > PASTURE.minZ - margin &&
    z < PASTURE.maxZ + margin
  )
}

// ---- Seeded scatter ----

export function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export interface Placement extends Vec2 {
  /** rotation about the vertical axis, radians */
  rot: number
  scale: number
  variant: number
}

export interface Scenery {
  palms: Placement[]
  rocks: Placement[]
  tufts: Placement[]
  flowers: Placement[]
  bushes: Placement[]
  patches: Placement[]
  cows: Placement[]
}

function inMountain(x: number, z: number, margin: number): boolean {
  return (
    Math.abs(x - MOUNTAIN.x) < MOUNTAIN.baseHalfX + margin &&
    Math.abs(z - MOUNTAIN.z) < MOUNTAIN.baseHalfZ + margin + 4
  )
}

export function scatterScenery(landmarks: LandmarkPlacement[]): Scenery {
  const rand = mulberry32(42087) // his race bib
  const nearLandmark = (x: number, z: number, margin: number) =>
    landmarks.some(
      (l) =>
        (x > l.minX - margin && x < l.maxX + margin && z > l.minZ - margin && z < l.maxZ + margin) ||
        Math.hypot(x - l.door.x, z - l.door.z) < margin + 2
    )

  const blocked = (x: number, z: number, margin: number) =>
    islandReach(x, z) > WALK_REACH - 0.02 ||
    roadDistance(x, z) < ROAD.halfWidth + margin ||
    inPond(x, z, margin) ||
    inPasture(x, z, margin) ||
    inMountain(x, z, margin) ||
    inPier(x, z, margin + 0.6) ||
    nearLandmark(x, z, margin)

  const scatter = (
    count: number,
    margin: number,
    spacing: number,
    pick: () => Vec2,
    existing: Placement[] = []
  ): Placement[] => {
    const out: Placement[] = []
    let tries = 0
    while (out.length < count && tries < count * 40) {
      tries++
      const p = pick()
      if (blocked(p.x, p.z, margin)) continue
      if ([...existing, ...out].some((o) => Math.hypot(o.x - p.x, o.z - p.z) < spacing)) continue
      out.push({
        x: p.x,
        z: p.z,
        rot: rand() * Math.PI * 2,
        scale: 0.92 + rand() * 0.2,
        variant: Math.floor(rand() * 3),
      })
    }
    return out
  }

  const anywhere = (): Vec2 => ({
    x: (rand() * 2 - 1) * ISLAND_RX,
    z: (rand() * 2 - 1) * ISLAND_RZ,
  })
  const coastal = (): Vec2 => {
    const theta = rand() * Math.PI * 2
    const reach = 0.8 + rand() * 0.12
    return {
      x: Math.cos(theta) * reach * ISLAND_RX * coastWobble(theta),
      z: Math.sin(theta) * reach * ISLAND_RZ * coastWobble(theta),
    }
  }
  const nearPond = (): Vec2 => {
    const theta = rand() * Math.PI * 2
    const d = 1.2 + rand() * 0.9
    return { x: POND.x + Math.cos(theta) * POND.rx * d, z: POND.z + Math.sin(theta) * POND.rz * d }
  }

  const palms = [
    ...scatter(46, 1.4, 3.2, coastal),
    ...scatter(14, 1.4, 3.0, nearPond),
  ]
  palms.push(...scatter(26, 1.6, 4.5, anywhere, palms))

  const rocks = scatter(26, 1.0, 3, anywhere, palms)
  const bushes = scatter(70, 0.9, 2.5, anywhere, [...palms, ...rocks])
  const tufts = scatter(620, 0.3, 0.9, anywhere)
  const flowers = scatter(190, 0.4, 0.7, anywhere, tufts)
  // patches lie flat and square to the camera, like painted tiles
  const patches = scatter(260, 0.6, 2.2, anywhere).map((p) => ({ ...p, rot: 0 }))
  const onGrass = (p: Placement) => islandReach(p.x, p.z) < BEACH_REACH - 0.02

  const cows: Placement[] = [
    { x: -6, z: -2, rot: 0.4, scale: 1, variant: 0 },
    { x: 3, z: 5, rot: 2.2, scale: 1, variant: 1 },
    { x: 11, z: -3, rot: -0.6, scale: 1, variant: 0 },
    { x: 15, z: 7, rot: 3.6, scale: 1, variant: 1 },
    { x: -2, z: 8, rot: 1.5, scale: 1, variant: 1 },
  ]

  return {
    palms,
    rocks,
    tufts: tufts.filter(onGrass),
    flowers: flowers.filter(onGrass),
    bushes: bushes.filter(onGrass),
    patches: patches.filter(onGrass),
    cows,
  }
}

// ---- What the Runner stands on ----

export type Surface = "road" | "sand" | "grass"

export function surfaceAt(x: number, z: number): Surface {
  if (roadDistance(x, z) < ROAD.halfWidth) return "road"
  if (islandReach(x, z) > BEACH_REACH) return "sand"
  return "grass"
}

// ---- Collision ----

export type Solid =
  | { kind: "box"; minX: number; maxX: number; minZ: number; maxZ: number }
  /** a box turned by `angle` about its centre, with half sizes hx, hz */
  | { kind: "obb"; x: number; z: number; hx: number; hz: number; angle: number }
  | { kind: "circle"; x: number; z: number; r: number }

/** Where the Runner may stand: on the island, out of the pond and the
 *  pool, or out along the pier (a little inside its edges) */
export function walkable(x: number, z: number): boolean {
  if (inPier(x, z, -0.25)) return true
  return islandReach(x, z) < WALK_REACH && !inPond(x, z) && !inPlunge(x, z)
}

/** The fence posts around the pasture, every two units, with a gate gap
 *  on the south side so the Runner can visit the herd */
export function fencePosts(): Vec2[] {
  const { minX, maxX, minZ, maxZ } = PASTURE
  const posts: Vec2[] = []
  for (let x = minX; x <= maxX + 0.01; x += 2) {
    posts.push({ x, z: minZ })
    if (Math.abs(x - (minX + maxX) / 2) > 2.5) posts.push({ x, z: maxZ })
  }
  for (let z = minZ + 2; z < maxZ - 0.01; z += 2) {
    posts.push({ x: minX, z })
    posts.push({ x: maxX, z })
  }
  return posts
}

/** Fence rails as boxes between neighbouring posts */
export function fenceRails(): Solid[] {
  const { minX, maxX, minZ, maxZ } = PASTURE
  const mid = (minX + maxX) / 2
  const t = 0.15
  return [
    { kind: "box", minX, maxX, minZ: minZ - t, maxZ: minZ + t },
    { kind: "box", minX, maxX: mid - 2.5, minZ: maxZ - t, maxZ: maxZ + t },
    { kind: "box", minX: mid + 2.5, maxX, minZ: maxZ - t, maxZ: maxZ + t },
    { kind: "box", minX: minX - t, maxX: minX + t, minZ, maxZ },
    { kind: "box", minX: maxX - t, maxX: maxX + t, minZ, maxZ },
  ]
}

export function buildSolids(landmarks: LandmarkPlacement[], scenery: Scenery): Solid[] {
  const solids: Solid[] = []
  for (const l of landmarks) {
    solids.push({ kind: "obb", x: l.x, z: l.z, hx: l.hx, hz: l.hz, angle: l.angle })
  }
  for (const p of scenery.palms) solids.push({ kind: "circle", x: p.x, z: p.z, r: 0.35 })
  for (const r of scenery.rocks) solids.push({ kind: "circle", x: r.x, z: r.z, r: 0.45 * r.scale })
  for (const b of scenery.bushes) solids.push({ kind: "circle", x: b.x, z: b.z, r: 0.5 * b.scale })
  // the herd wanders, so the cows bring their own solids (life.ts)
  solids.push(...fenceRails())
  solids.push({
    kind: "box",
    minX: MOUNTAIN.x - MOUNTAIN.baseHalfX,
    maxX: MOUNTAIN.x + MOUNTAIN.baseHalfX,
    minZ: MOUNTAIN.z - MOUNTAIN.baseHalfZ,
    maxZ: MOUNTAIN.z + MOUNTAIN.baseHalfZ,
  })
  return solids
}

// ---- Roadside ----
// Distance posts every 50 metres from the start line, and street lamps on
// the inner verge, kept clear of the Landmarks' crossings and the posts.

export function roadside(metersPerUnit: number): { posts: Array<{ s: number; metres: number }>; lamps: number[] } {
  const posts: Array<{ s: number; metres: number }> = []
  const lapMetres = LOOP_LENGTH * metersPerUnit
  for (let m = 50; m < lapMetres - 10; m += 50) posts.push({ s: LAP_START_S + m / metersPerUnit, metres: m })
  const busy = [...Object.values(LANDMARK_SLOTS).map((l) => l.s), ...posts.map((p) => p.s)]
  const lamps: number[] = []
  for (let s = LAP_START_S + 22; s < LAP_START_S + LOOP_LENGTH - 8; s += 34) {
    let at = s
    // slide along until clear of everything else at the roadside
    while (busy.some((b) => Math.abs(((at - b + LOOP_LENGTH * 1.5) % LOOP_LENGTH) - LOOP_LENGTH / 2) < 7)) at += 2
    lamps.push(at % LOOP_LENGTH)
  }
  return { posts, lamps }
}
