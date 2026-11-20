// Everything in the Overworld is built in code (ADR 0003): props are lists
// of coloured boxes merged into one geometry, and the site's pixel sprites
// become 3D by extruding each pixel rectangle into a slab.

import * as THREE from "three"
import type { Px } from "../../sprites"

export interface Box {
  /** min corner */
  x: number
  y: number
  z: number
  w: number
  h: number
  d: number
  color: number
}

// Each face: normal, then four corners as offsets in (w, h, d) units,
// wound counter-clockwise seen from outside.
const FACES: Array<{ n: [number, number, number]; c: Array<[number, number, number]> }> = [
  { n: [1, 0, 0], c: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]] },
  { n: [-1, 0, 0], c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]] },
  { n: [0, 1, 0], c: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]] },
  { n: [0, -1, 0], c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]] },
  { n: [0, 0, 1], c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
  { n: [0, 0, -1], c: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]] },
]

/** Merge boxes into one geometry with per-vertex colours */
export function boxesGeometry(boxes: Box[], skipBottoms = true): THREE.BufferGeometry {
  const positions: number[] = []
  const normals: number[] = []
  const colors: number[] = []
  const col = new THREE.Color()
  for (const b of boxes) {
    col.setHex(b.color)
    for (const f of FACES) {
      if (skipBottoms && f.n[1] === -1 && b.y <= 0.001) continue
      const quad = f.c.map(([cx, cy, cz]) => [b.x + cx * b.w, b.y + cy * b.h, b.z + cz * b.d])
      for (const i of [0, 1, 2, 0, 2, 3]) {
        positions.push(...quad[i])
        normals.push(...f.n)
        colors.push(col.r, col.g, col.b)
      }
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  g.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3))
  g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  g.computeBoundingSphere()
  return g
}

function hexOf(fill: string): number | null {
  if (!fill.startsWith("#") || fill.length !== 7) return null // beams and glows stay flat art
  return parseInt(fill.slice(1), 16)
}

/**
 * Extrude a pixel sprite into slabs standing in the x/y plane, centred on
 * x = 0 and z = 0 with its feet on y = 0. `pixel` is the world size of one
 * art pixel; `depth` the slab thickness.
 */
export function extrudePx(
  rects: Px[],
  gridW: number,
  gridH: number,
  pixel: number,
  depth: number
): Box[] {
  const boxes: Box[] = []
  for (const [x, y, w, h, fill] of rects) {
    const color = hexOf(fill)
    if (color === null) continue
    boxes.push({
      x: (x - gridW / 2) * pixel,
      y: (gridH - y - h) * pixel,
      z: -depth / 2,
      w: w * pixel,
      h: h * pixel,
      d: depth,
      color,
    })
  }
  return boxes
}

/** Move a set of boxes */
export function offset(boxes: Box[], dx: number, dy: number, dz: number): Box[] {
  return boxes.map((b) => ({ ...b, x: b.x + dx, y: b.y + dy, z: b.z + dz }))
}

/** A box given by its centre on the ground plane instead of its corner */
export function centered(
  cx: number,
  y: number,
  cz: number,
  w: number,
  h: number,
  d: number,
  color: number
): Box {
  return { x: cx - w / 2, y, z: cz - d / 2, w, h, d, color }
}
