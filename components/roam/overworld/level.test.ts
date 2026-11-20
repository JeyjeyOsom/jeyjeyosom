import { describe, expect, it } from "vitest"
import {
  islandReach,
  landmarkLocal,
  LOOP_LENGTH,
  loopS,
  PIER,
  placeLandmarks,
  ROAD,
  roadDistance,
  roadPoint,
  roadside,
  walkable,
} from "./level"
import { METERS_PER_UNIT } from "./movement"

const ZONES = ["title", "about", "experience", "skills", "projects", "contact"]

describe("the loop road", () => {
  it("finds the lap distance of any point on or beside the road", () => {
    for (let s = 0; s < LOOP_LENGTH; s += 0.7) {
      const p = roadPoint(s)
      for (const off of [-1.2, 0, 1.2]) {
        const got = loopS(p.x + p.nx * off, p.z + p.nz * off)
        const err = Math.min(Math.abs(got - s), LOOP_LENGTH - Math.abs(got - s))
        expect(err).toBeLessThan(1e-6)
      }
    }
  })

  it("puts a distance post every 50 metres of the lap", () => {
    const { posts } = roadside(METERS_PER_UNIT)
    expect(posts.map((p) => p.metres)).toEqual([50, 100, 150, 200])
  })
})

describe("the Landmarks", () => {
  for (const degrees of [0, 45]) {
    describe(`facing a camera at ${degrees} degrees`, () => {
      const placed = placeLandmarks(ZONES, (degrees * Math.PI) / 180)

      it("places one per Zone", () => {
        expect(placed.map((l) => l.zoneId)).toEqual(ZONES)
      })

      it("keeps every corner of the turned footprint off the road", () => {
        for (const l of placed) {
          const c = Math.cos(l.angle)
          const s = Math.sin(l.angle)
          for (const [lx, lz] of [[-l.hx, -l.hz], [l.hx, -l.hz], [l.hx, l.hz], [-l.hx, l.hz]]) {
            const x = l.x + lx * c + lz * s
            const z = l.z - lx * s + lz * c
            expect(roadDistance(x, z)).toBeGreaterThan(ROAD.halfWidth)
          }
        }
      })

      it("puts each door in front of its Landmark, outside it, where he can stand", () => {
        for (const l of placed) {
          const door = landmarkLocal(l, l.door.x, l.door.z)
          expect(door.x).toBeCloseTo(0)
          expect(door.z).toBeGreaterThan(l.hz)
          expect(walkable(l.door.x, l.door.z)).toBe(true)
        }
      })
    })
  }
})

describe("where he can stand", () => {
  it("is the island, the pier, and not the sea beside the pier", () => {
    expect(walkable(0, 20)).toBe(true)
    expect(islandReach(PIER.x, PIER.z1 - 0.5)).toBeGreaterThan(1)
    expect(walkable(PIER.x, PIER.z1 - 0.5)).toBe(true)
    expect(walkable(PIER.x + 3, PIER.z1 - 0.5)).toBe(false)
  })
})
