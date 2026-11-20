import { describe, expect, it } from "vitest"
import type { Solid } from "./level"
import { formatPace, newRunner, resolveMove, RUN_SPEED, RUNNER_RADIUS, SPRINT_SPEED, stepRunner } from "./movement"

const open = () => true
const axes = { right: { x: 1, z: 0 }, up: { x: 0, z: -1 } }

describe("collisions", () => {
  it("pushes him out of a turned box, in the box's own frame", () => {
    const angle = Math.PI / 4
    const box: Solid = { kind: "obb", x: 0, z: 0, hx: 3, hz: 1.8, angle }
    // from the middle of the box: he leaves by its nearest side
    const p = resolveMove(0, 5, 0.2, 0.3, [box], open)
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const lx = p.x * c - p.z * s
    const lz = p.x * s + p.z * c
    const outside = Math.max(Math.abs(lx) - 3, Math.abs(lz) - 1.8)
    expect(outside).toBeGreaterThanOrEqual(RUNNER_RADIUS - 1e-6)
  })

  it("never leaves him inside a solid", () => {
    const solids: Solid[] = [
      { kind: "circle", x: 0, z: 0, r: 1 },
      { kind: "box", minX: 2, maxX: 4, minZ: -1, maxZ: 1 },
    ]
    for (let x = -2; x <= 5; x += 0.25) {
      for (let z = -2; z <= 2; z += 0.25) {
        const p = resolveMove(x, z, x, z, solids, open)
        expect(Math.hypot(p.x, p.z)).toBeGreaterThanOrEqual(1 + RUNNER_RADIUS - 1e-6)
        const inBox = p.x > 2 - RUNNER_RADIUS + 1e-6 && p.x < 4 + RUNNER_RADIUS - 1e-6 && Math.abs(p.z) < 1 + RUNNER_RADIUS - 1e-6
        const clearOfCorner =
          Math.hypot(Math.max(2 - p.x, 0, p.x - 4), Math.max(Math.abs(p.z) - 1, 0)) >= RUNNER_RADIUS - 1e-6
        expect(!inBox || clearOfCorner).toBe(true)
      }
    }
  })

  it("lets a shove take speed away but never give it", () => {
    // a car's circle lands on him: he's pushed out, but not flung
    const car: Solid = { kind: "circle", x: 0.2, z: 0, r: 0.6 }
    let s = newRunner(0, 0)
    for (let i = 0; i < 120; i++) {
      s = stepRunner(s, { x: 1, y: 0, sprint: false, jump: false }, 1 / 120, axes, [car], open)
      expect(Math.hypot(s.vx, s.vz)).toBeLessThanOrEqual(RUN_SPEED + 1e-6)
    }
  })
})

describe("running", () => {
  it("reaches run and sprint speed, and a gentle tilt goes slower", () => {
    const speedAfter = (x: number, sprint: boolean) => {
      let s = newRunner(0, 0)
      for (let i = 0; i < 120; i++) s = stepRunner(s, { x, y: 0, sprint, jump: false }, 1 / 120, axes, [], open)
      return Math.hypot(s.vx, s.vz)
    }
    expect(speedAfter(1, false)).toBeCloseTo(RUN_SPEED)
    expect(speedAfter(1, true)).toBeCloseTo(SPRINT_SPEED)
    expect(speedAfter(0.4, false)).toBeCloseTo(RUN_SPEED * 0.4)
  })

  it("lands a jump back on the ground", () => {
    let s = newRunner(0, 0)
    s = stepRunner(s, { x: 0, y: 0, sprint: false, jump: true }, 1 / 120, axes, [], open)
    expect(s.airborne).toBe(true)
    for (let i = 0; i < 240; i++) s = stepRunner(s, { x: 0, y: 0, sprint: false, jump: false }, 1 / 120, axes, [], open)
    expect(s.airborne).toBe(false)
    expect(s.h).toBe(0)
  })

  it("reads his run as Juan's 5K pace", () => {
    expect(formatPace(RUN_SPEED)).toBe("5:43")
    expect(formatPace(0.1)).toBeNull()
  })
})
