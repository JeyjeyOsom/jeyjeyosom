// The Overworld's sky is the World's (CONTEXT.md: Overworld): Dusk or Dawn.
// From above there is no horizon to paint, so the sky arrives as light:
// the colour of the sunlight, the colour of the shade, and the sea that
// reflects it. A theme toggle plays the same journey as the Title Screen:
// Dusk reaches Dawn through NIGHT, Dawn reaches Dusk through NOON, keyed
// like folio-2025's day cycle (keyframes blended with a smoothstep).

export type Sky = "dusk" | "dawn"
export type SkyCycle = "dusk-to-dawn" | "dawn-to-dusk"

export interface SkyLight {
  /** sunlight colour and strength (the lit tone) */
  sun: number
  sunI: number
  /** ambient colour and strength (the shade tone) */
  shade: number
  shadeI: number
  sea: number
  seaDeep: number
  foam: number
  /** tint applied to unlit sprites so the Runner sits in the light */
  sprite: number
  /** the headlamp is lit */
  lamps: boolean
}

export const SKIES: Record<Sky | "night" | "noon", SkyLight> = {
  dusk: {
    sun: 0xffc2a6,
    sunI: 0.42,
    shade: 0x9d82bd,
    shadeI: 0.66,
    sea: 0x7e6a96,
    seaDeep: 0x5d4a7a,
    foam: 0xe8cfd6,
    sprite: 0xf0dce6,
    lamps: true,
  },
  dawn: {
    sun: 0xfff0dc,
    sunI: 0.48,
    shade: 0xb6c4e4,
    shadeI: 0.7,
    sea: 0x9cc0e2,
    seaDeep: 0x7ea4cf,
    foam: 0xf6fbff,
    sprite: 0xffffff,
    lamps: false,
  },
  night: {
    sun: 0x6f78d8,
    sunI: 0.22,
    shade: 0x4a4790,
    shadeI: 0.55,
    sea: 0x2c2a5c,
    seaDeep: 0x1d1b45,
    foam: 0x8e8cc8,
    sprite: 0xa9a6dc,
    lamps: true,
  },
  noon: {
    sun: 0xffffff,
    sunI: 0.52,
    shade: 0xc9daf0,
    shadeI: 0.72,
    sea: 0x6fb3e8,
    seaDeep: 0x4f97d6,
    foam: 0xffffff,
    sprite: 0xffffff,
    lamps: false,
  },
}

const PATHS: Record<SkyCycle, [SkyLight, SkyLight, SkyLight]> = {
  "dusk-to-dawn": [SKIES.dusk, SKIES.night, SKIES.dawn],
  "dawn-to-dusk": [SKIES.dawn, SKIES.noon, SKIES.dusk],
}

export function mixColor(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 255
  const ag = (a >> 8) & 255
  const ab = a & 255
  const br = (b >> 16) & 255
  const bg = (b >> 8) & 255
  const bb = b & 255
  const r = Math.round(ar + (br - ar) * t)
  const g = Math.round(ag + (bg - ag) * t)
  const bl = Math.round(ab + (bb - ab) * t)
  return (r << 16) | (g << 8) | bl
}

function mixLight(a: SkyLight, b: SkyLight, t: number): SkyLight {
  return {
    sun: mixColor(a.sun, b.sun, t),
    sunI: a.sunI + (b.sunI - a.sunI) * t,
    shade: mixColor(a.shade, b.shade, t),
    shadeI: a.shadeI + (b.shadeI - a.shadeI) * t,
    sea: mixColor(a.sea, b.sea, t),
    seaDeep: mixColor(a.seaDeep, b.seaDeep, t),
    foam: mixColor(a.foam, b.foam, t),
    sprite: mixColor(a.sprite, b.sprite, t),
    lamps: t < 0.5 ? a.lamps : b.lamps,
  }
}

const smoothstep = (t: number) => t * t * (3 - 2 * t)

/** The light at a moment of a sky cycle: progress 0..1, deepest at mid */
export function cycleLight(cycle: SkyCycle, progress: number, mid: number): SkyLight {
  const [from, via, to] = PATHS[cycle]
  const p = Math.min(Math.max(progress, 0), 1)
  if (p < mid) return mixLight(from, via, smoothstep(p / mid))
  return mixLight(via, to, smoothstep((p - mid) / (1 - mid)))
}
