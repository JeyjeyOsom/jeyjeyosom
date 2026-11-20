// Cartridge Art (CONTEXT.md): the pixel cover of each project's level card
// on the Level Select, shared with the Overworld's arcade, whose screens
// cycle through the same covers.

import type { Px } from "./sprites"

// Cartridge shell on an 18x21 grid; the label window is x3..15, y8..17.
const PLASTIC = "#55408F"
const PLASTIC_DK = "#3E2A73"
const PLASTIC_LT = "#6E55A8"
const LABEL_BG = "#140B2E"

export const CART_SHELL: Px[] = [
  [1, 0, 16, 1, PLASTIC_LT], // top highlight
  [1, 1, 16, 18, PLASTIC], // body
  [3, 3, 12, 1, PLASTIC_DK], // grip ridge
  [3, 5, 12, 1, PLASTIC_DK], // grip ridge
  [3, 7, 12, 1, PLASTIC_DK], // label inset shadow
  [3, 8, 12, 9, LABEL_BG], // label window
  [1, 19, 16, 1, PLASTIC_DK], // bottom shadow
]

// Shield with cross emblem — Fortius
export const ART_FORTIUS: Px[] = [
  [6, 9, 6, 1, "#FFC94D"], // rim top
  [5, 10, 1, 3, "#FFC94D"], // rim left
  [12, 10, 1, 3, "#FFC94D"], // rim right
  [6, 10, 6, 3, "#C2366B"], // body
  [6, 13, 6, 1, "#C2366B"], // taper
  [7, 14, 4, 1, "#3E2A73"], // taper shadow
  [8, 15, 2, 1, "#3E2A73"], // point
  [8, 10, 2, 4, "#FFE3A3"], // emblem vertical
  [7, 11, 4, 1, "#FFE3A3"], // emblem crossbar
]

// Rising steps — Project Ascension
export const ART_ASCENSION: Px[] = [
  [4, 13, 2, 2, "#E8542F"],
  [7, 11, 2, 4, "#FF7A3D"],
  [10, 9, 2, 6, "#FFC94D"],
  [10, 8, 2, 1, "#FFE3A3"],
  [4, 15, 8, 1, "#3E2A73"],
]

// Four-point sparkle — AI Brand Manager
export const ART_SPARKLE: Px[] = [
  [8, 9, 2, 2, "#FFE3A3"],
  [6, 11, 2, 2, "#FFC94D"],
  [8, 11, 2, 2, "#FFF4E3"],
  [10, 11, 2, 2, "#FFC94D"],
  [8, 13, 2, 2, "#FFE3A3"],
  [5, 9, 1, 1, "#C2366B"],
  [12, 14, 1, 1, "#C2366B"],
]

// Miniature sunset over the ridge — this portfolio
export const ART_SUNSET: Px[] = [
  [7, 9, 4, 1, "#FFE3A3"],
  [6, 10, 6, 1, "#FFC94D"],
  [5, 11, 8, 1, "#FFA05C"],
  [3, 12, 12, 1, "#C2366B"],
  [3, 13, 12, 4, "#2B1B57"],
  [5, 14, 1, 1, "#FFC94D"],
  [9, 15, 1, 1, "#FFC94D"],
  [12, 14, 1, 1, "#FFC94D"],
]

// The loop road on an island, a palm, the Runner — Roam Mode
export const ART_OVERWORLD: Px[] = [
  [3, 8, 12, 9, "#3D5A8C"], // sea
  [5, 10, 8, 1, "#E8D2A2"], // sand
  [4, 11, 10, 4, "#E8D2A2"],
  [5, 15, 8, 1, "#E8D2A2"],
  [5, 11, 8, 4, "#6E9A55"], // grass
  [6, 11, 6, 1, "#4E4A5E"], // the loop road
  [6, 14, 6, 1, "#4E4A5E"],
  [6, 12, 1, 2, "#4E4A5E"],
  [11, 12, 1, 2, "#4E4A5E"],
  [8, 11, 1, 1, "#FFC94D"], // the Runner, out on his lap
  [12, 9, 1, 3, "#8F6C4B"], // palm trunk
  [11, 8, 3, 1, "#4F8F4A"], // fronds
  [10, 9, 1, 1, "#4F8F4A"],
  [13, 9, 1, 1, "#4F8F4A"],
]

/** Every cover, in the Level Select's order */
export const CARTRIDGE_ART: Px[][] = [ART_FORTIUS, ART_ASCENSION, ART_SPARKLE, ART_SUNSET, ART_OVERWORLD]
