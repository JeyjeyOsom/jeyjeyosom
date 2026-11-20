import { describe, expect, it } from "vitest"
import { GLYPH_H, GLYPH_W, textPx, textWidth } from "./font"

describe("the 3x5 pixel font", () => {
  it("draws every glyph inside its 3x5 cell", () => {
    const all = "0123456789:.-!? ABCDEFGHIJKLMNOPRSTUVWXY"
    for (const ch of all) {
      for (const [x, y, w, h] of textPx(ch, 0, 0, "#000")) {
        expect(x).toBeGreaterThanOrEqual(0)
        expect(x + w).toBeLessThanOrEqual(GLYPH_W)
        expect(y).toBeGreaterThanOrEqual(0)
        expect(y + h).toBeLessThanOrEqual(GLYPH_H)
      }
    }
  })

  it("measures a string with one pixel between glyphs", () => {
    expect(textWidth("")).toBe(0)
    expect(textWidth("A")).toBe(3)
    expect(textWidth("START")).toBe(19)
  })
})
