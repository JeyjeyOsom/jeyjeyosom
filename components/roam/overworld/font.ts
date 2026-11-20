// A 3x5 pixel font for the Overworld's own short strings: the start
// arch's lettering, screen captions and the race clock's digits. Content
// never goes through it (ADR 0002): only labels a sign would carry.

import type { Px } from "../../sprites"

const GLYPHS: Record<string, string> = {
  "0": "111101101101111",
  "1": "010110010010111",
  "2": "111001111100111",
  "3": "111001011001111",
  "4": "101101111001001",
  "5": "111100111001111",
  "6": "111100111101111",
  "7": "111001010010010",
  "8": "111101111101111",
  "9": "111101111001111",
  ":": "000010000010000",
  ".": "000000000000010",
  "-": "000000111000000",
  "!": "010010010000010",
  "?": "111001011000010",
  " ": "000000000000000",
  A: "010101111101101",
  B: "110101110101110",
  C: "011100100100011",
  D: "110101101101110",
  E: "111100110100111",
  F: "111100110100100",
  G: "011100101101011",
  H: "101101111101101",
  I: "111010010010111",
  J: "001001001101010",
  K: "101101110101101",
  L: "100100100100111",
  M: "101111111101101",
  N: "110101101101101",
  O: "010101101101010",
  P: "110101110100100",
  R: "110101110101101",
  S: "011100010001110",
  T: "111010010010010",
  U: "101101101101111",
  V: "101101101101010",
  W: "101101111111101",
  X: "101101010101101",
  Y: "101101010010010",
}

export const GLYPH_W = 3
export const GLYPH_H = 5

/** Width in font pixels of a string, one pixel between glyphs */
export function textWidth(text: string): number {
  return text.length === 0 ? 0 : text.length * (GLYPH_W + 1) - 1
}

/** A string as pixel rects with its top-left at (x, y); rows merge into runs */
export function textPx(text: string, x: number, y: number, fill: string): Px[] {
  const rects: Px[] = []
  ;[...text.toUpperCase()].forEach((ch, i) => {
    const bits = GLYPHS[ch] ?? GLYPHS["?"]
    for (let row = 0; row < GLYPH_H; row++) {
      let run = -1
      for (let col = 0; col <= GLYPH_W; col++) {
        const on = col < GLYPH_W && bits[row * GLYPH_W + col] === "1"
        if (on && run < 0) run = col
        if (!on && run >= 0) {
          rects.push([x + i * (GLYPH_W + 1) + run, y + row, col - run, 1, fill])
          run = -1
        }
      }
    }
  })
  return rects
}

/** Draw a string onto a canvas, top-left at (x, y), one canvas pixel per font pixel */
export function drawText(g: CanvasRenderingContext2D, text: string, x: number, y: number, fill: string) {
  for (const [rx, ry, w, h, f] of textPx(text, x, y, fill)) {
    g.fillStyle = f
    g.fillRect(rx, ry, w, h)
  }
}
