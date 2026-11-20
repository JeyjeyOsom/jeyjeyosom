// Gamepads in Roam Mode, through the browser's Gamepad API: the standard
// mapping's buttons by name, a stick with a dead zone, rising edges for
// presses, the glyphs to show in prompts (PlayStation pads get their
// symbols), and a short rumble where the pad can. The engine reads the
// pad for movement; the interface reads it for doors, panels and menus.
// Browsers reveal a pad only after one of its buttons is pressed.

export const PAD = {
  A: 0,
  B: 1,
  X: 2,
  Y: 3,
  LB: 4,
  RB: 5,
  LT: 6,
  RT: 7,
  BACK: 8,
  START: 9,
  UP: 12,
  DOWN: 13,
  LEFT: 14,
  RIGHT: 15,
} as const

/** The first pad that's connected, preferring one with the standard mapping */
export function readPad(): Gamepad | null {
  let pads: Array<Gamepad | null> = []
  try {
    pads = Array.from(navigator.getGamepads?.() ?? [])
  } catch {
    return null
  }
  const live = pads.filter((p): p is Gamepad => !!p && p.connected)
  return live.find((p) => p.mapping === "standard") ?? live[0] ?? null
}

export function held(pad: Gamepad, button: number): boolean {
  const b = pad.buttons[button]
  return !!b && (b.pressed || b.value > 0.5)
}

/** A stick, with a round dead zone and the rest rescaled to 0..1 */
export function stick(pad: Gamepad, xAxis: number, yAxis: number, dead = 0.22): { x: number; y: number } {
  const x = pad.axes[xAxis] ?? 0
  const y = pad.axes[yAxis] ?? 0
  const len = Math.hypot(x, y)
  if (len < dead) return { x: 0, y: 0 }
  const k = Math.min(1, (len - dead) / (1 - dead)) / len
  return { x: x * k, y: y * k }
}

/** Rising edges: which buttons went down since the last update */
export class PadEdges {
  private before: boolean[] = []
  private now: boolean[] = []

  update(pad: Gamepad | null) {
    this.before = this.now
    this.now = pad ? pad.buttons.map((_, i) => held(pad, i)) : []
  }

  down(button: number): boolean {
    return !!this.now[button] && !this.before[button]
  }

  /** anything at all was pressed this frame */
  anyDown(): boolean {
    return this.now.some((v, i) => v && !this.before[i])
  }
}

export interface PadGlyphs {
  A: string
  B: string
  X: string
  Y: string
  START: string
  BACK: string
}

const XBOX: PadGlyphs = { A: "A", B: "B", X: "X", Y: "Y", START: "START", BACK: "VIEW" }
const PLAYSTATION: PadGlyphs = { A: "✕", B: "○", X: "□", Y: "△", START: "OPTIONS", BACK: "SHARE" }

/** What to call the buttons: PlayStation pads (Sony's vendor id) get their symbols */
export function padGlyphs(pad: Gamepad | null): PadGlyphs {
  const id = pad?.id.toLowerCase() ?? ""
  return id.includes("054c") || id.includes("dualsense") || id.includes("dualshock") || id.includes("playstation")
    ? PLAYSTATION
    : XBOX
}

/** A short buzz, where the pad and the browser allow one */
export function rumble(pad: Gamepad | null, ms: number, strong: number, weak: number) {
  const actuator = (pad as (Gamepad & { vibrationActuator?: { playEffect?: (type: string, params: object) => Promise<unknown> } }) | null)
    ?.vibrationActuator
  actuator?.playEffect?.("dual-rumble", { duration: ms, strongMagnitude: strong, weakMagnitude: weak })?.catch(() => {})
}
