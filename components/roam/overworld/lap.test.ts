import { describe, expect, it } from "vitest"
import { formatLap, LapTimer } from "./lap"
import { LAP_START_S, LOOP_LENGTH, roadPoint } from "./level"

const DT = 1 / 60
const SPEED = 6

/** Run him along the road from `from` to `to` (lap distance), recording finishes */
function run(lap: LapTimer, from: number, to: number, finishes: Array<{ time: number; newBest: boolean }>) {
  const step = to > from ? SPEED * DT : -SPEED * DT
  for (let s = from; to > from ? s < to : s > to; s += step) {
    const p = roadPoint(s)
    const done = lap.update(DT, p.x, p.z, true)
    if (done) finishes.push(done)
  }
}

describe("the Lap", () => {
  it("times a clean lap to the distance over the speed, and the next one too", () => {
    const lap = new LapTimer()
    const finishes: Array<{ time: number; newBest: boolean }> = []
    run(lap, LAP_START_S - 5, LAP_START_S + 2 * LOOP_LENGTH + 3, finishes)
    expect(finishes).toHaveLength(2)
    for (const f of finishes) expect(f.time).toBeCloseTo(LOOP_LENGTH / SPEED, 0)
    expect(finishes[0].newBest).toBe(true)
    expect(lap.best).toBeCloseTo(LOOP_LENGTH / SPEED, 0)
  })

  it("doesn't count a lap that skips the road", () => {
    const lap = new LapTimer()
    const finishes: Array<{ time: number; newBest: boolean }> = []
    run(lap, LAP_START_S - 5, LAP_START_S + LOOP_LENGTH / 4, finishes)
    // straight back to just before the line, across the island
    run(lap, LAP_START_S + LOOP_LENGTH - 4, LAP_START_S + LOOP_LENGTH + 4, finishes)
    expect(finishes).toHaveLength(0)
    expect(lap.running).toBe(true) // the crossing starts a fresh one
  })

  it("drops the lap when he crosses the line the wrong way", () => {
    const lap = new LapTimer()
    run(lap, LAP_START_S - 5, LAP_START_S + 20, [])
    expect(lap.running).toBe(true)
    run(lap, LAP_START_S + 20, LAP_START_S - 20, [])
    expect(lap.running).toBe(false)
  })

  it("keeps a Ghost that retraces the best lap", () => {
    const lap = new LapTimer()
    run(lap, LAP_START_S - 5, LAP_START_S + LOOP_LENGTH + 3, [])
    const g = lap.ghostAt(10)
    const p = roadPoint(LAP_START_S + 10 * SPEED)
    expect(g).not.toBeNull()
    expect(Math.hypot(g!.x - p.x, g!.z - p.z)).toBeLessThan(0.3)
    expect(lap.ghostAt(10_000)).toBeNull()
  })

  it("formats a lap the way the watch shows it", () => {
    expect(formatLap(79.84)).toBe("1:19.8")
    expect(formatLap(5.05)).toBe("0:05.0")
  })
})
