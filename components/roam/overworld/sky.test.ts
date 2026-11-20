import { describe, expect, it } from "vitest"
import { clockLight, clockPhase, SKIES } from "./sky"

describe("the clock's sky", () => {
  it("is the keyframe's own light at its hour", () => {
    expect(clockLight(2)).toEqual(SKIES.night)
    expect(clockLight(6)).toEqual(SKIES.dawn)
    expect(clockLight(12)).toEqual(SKIES.noon)
    expect(clockLight(18.5)).toEqual(SKIES.dusk)
    expect(clockLight(23)).toEqual(SKIES.night)
  })

  it("turns smoothly, a minute at a time, all day round", () => {
    const channel = (c: number, shift: number) => (c >> shift) & 255
    for (let m = 0; m < 24 * 60; m++) {
      const a = clockLight(m / 60)
      const b = clockLight((m + 1) / 60)
      expect(Math.abs(a.sunI - b.sunI)).toBeLessThan(0.01)
      for (const shift of [0, 8, 16]) expect(Math.abs(channel(a.sun, shift) - channel(b.sun, shift))).toBeLessThanOrEqual(3)
    }
  })

  it("lights the lamps from dusk until dawn", () => {
    expect(clockLight(3).lamps).toBe(true)
    expect(clockLight(7).lamps).toBe(false)
    expect(clockLight(13).lamps).toBe(false)
    expect(clockLight(19).lamps).toBe(true)
  })

  it("names the time of day", () => {
    expect([1, 6, 12, 18, 22].map(clockPhase)).toEqual(["night", "dawn", "day", "dusk", "night"])
  })
})
