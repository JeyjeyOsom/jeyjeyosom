// Helpers shared by Roam Mode's always-loaded parts and its lazy chunk:
// who may enter, which Zone is on screen, and how to jump the World to one.
// Kept free of three.js so the main bundle never pulls it in.

import { WORLD_MAP } from "../zones/registry"

let webgl2: boolean | null = null

/** WebGL2 is present (checked once, then the test context is released) */
function hasWebGL2(): boolean {
  if (webgl2 !== null) return webgl2
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2")
    webgl2 = !!gl
    gl?.getExtension("WEBGL_lose_context")?.loseContext()
  } catch {
    webgl2 = false
  }
  return webgl2
}

/** How the visitor last asked for something: Roam Mode's prompts name the
 *  pad's buttons when it was the pad (its Start enters from the page) */
export const lastInput = { pad: false }

/** A gamepad is connected (browsers show one only after a button press) */
export function hasGamepad(): boolean {
  try {
    return Array.from(navigator.getGamepads?.() ?? []).some((p) => !!p && p.connected)
  } catch {
    return false
  }
}

/** Roam Mode's entrances appear with WebGL2 and a way to play: a keyboard
 *  and mouse, or a gamepad (ADR 0002) */
export function canRoam(): boolean {
  return (window.matchMedia("(pointer: fine)").matches || hasGamepad()) && hasWebGL2()
}

/** The Zone a visitor is looking at: the one under 40% of the viewport */
export function zoneOnScreen(): string {
  if (window.scrollY < 100) return "title"
  const line = window.innerHeight * 0.4
  let best = WORLD_MAP[0].id
  let bestGap = Infinity
  for (const zone of WORLD_MAP) {
    const el = document.getElementById(zone.id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= line && rect.bottom >= line) return zone.id
    const gap = Math.min(Math.abs(rect.top - line), Math.abs(rect.bottom - line))
    if (gap < bestGap) {
      bestGap = gap
      best = zone.id
    }
  }
  return best
}

/** Jump the World to a Zone at once (a wipe hides the cut) */
export function scrollToZone(id: string) {
  const root = document.documentElement
  const previous = root.style.scrollBehavior
  root.style.scrollBehavior = "auto"
  if (id === "title") {
    window.scrollTo(0, 0)
  } else {
    const el = document.getElementById(id)
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80)
  }
  root.style.scrollBehavior = previous
}

export function zoneName(id: string): string {
  return WORLD_MAP.find((z) => z.id === id)?.zoneName ?? id.toUpperCase()
}

/** Start downloading Roam Mode before the click lands */
export function preloadRoamMode() {
  // a failed preload is retried, and reported, by the real entry
  import("./RoamMode").catch(() => {})
}
