import { describe, expect, it } from "vitest"
import { landmarkLocal, placeLandmarks, walkable } from "./level"
import { SPACING, trailPoints } from "./trail"
import { WORLD_MAP } from "../../zones/registry"

describe("the Gel trail", () => {
  for (const yaw of [0, 45]) {
    it(`leads from each Landmark's door to the next, round them, at ${yaw}°`, () => {
      const landmarks = placeLandmarks(
        WORLD_MAP.map((z) => z.id),
        (yaw * Math.PI) / 180
      ).sort((a, b) => a.s - b.s)
      for (let i = 0; i < landmarks.length; i++) {
        const from = landmarks[i]
        const to = landmarks[(i + 1) % landmarks.length]
        const spots = trailPoints(from, to)
        expect(spots.length).toBeGreaterThan(5)
        // it starts by the door he's at and ends by the one it leads to
        expect(Math.hypot(spots[0].x - from.door.x, spots[0].z - from.door.z)).toBeLessThan(2.5)
        const last = spots[spots.length - 1]
        expect(Math.hypot(last.x - to.door.x, last.z - to.door.z)).toBeLessThan(SPACING + 0.7)
        for (let k = 0; k < spots.length; k++) {
          const p = spots[k]
          expect(walkable(p.x, p.z)).toBe(true)
          // never through a Landmark's footprint
          for (const l of landmarks) {
            const q = landmarkLocal(l, p.x, p.z)
            expect(Math.abs(q.x) < l.hx && Math.abs(q.z) < l.hz).toBe(false)
          }
          // evenly strung: no gap wider than a step
          if (k > 0) expect(Math.hypot(p.x - spots[k - 1].x, p.z - spots[k - 1].z)).toBeLessThanOrEqual(SPACING + 1e-6)
        }
      }
    })
  }
})
