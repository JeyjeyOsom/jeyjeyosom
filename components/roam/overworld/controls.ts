// Everything the Runner can be steered with, in one place: the keyboard,
// the mouse (drag to look around, click to act or run there, wheel to
// zoom), touch (a floating thumb-stick for the first finger, a tap to act,
// a second finger to look around) and the gamepad. It turns them into one
// intent a frame and a few requests the engine answers through its host.

import { held as padHeld, PAD, PadEdges, readPad, stick } from "../gamepad"

/** The touch thumb-stick's reach in CSS pixels, and how far past it sprints */
export const STICK_RADIUS = 44
export const STICK_SPRINT = 1.5

export interface ThumbStick {
  ox: number
  oy: number
  x: number
  y: number
  sprint: boolean
}

export interface ControlsHost {
  canvas: HTMLCanvasElement
  /** the Runner takes input now (no panel open, no transition running) */
  enabled(): boolean
  /** slide the view by a drag of dx, dy CSS pixels */
  panBy(dx: number, dy: number): void
  /** look around with a stick: x, y in -1..1, over dt seconds */
  look(x: number, y: number, dt: number): void
  /** a whole-pixel zoom step: out (+1), in (-1), or round the steps */
  zoom(step: 1 | -1 | "cycle"): void
  respawn(): void
  /** a click or a tap at a screen position */
  act(clientX: number, clientY: number, tap: boolean): void
  /** where the mouse is over the island, or null when it's off it */
  hover(at: { x: number; y: number } | null): void
  /** the thumb-stick moved, landed or lifted */
  stick(stick: ThumbStick | null): void
  /** a gamepad was used */
  usedPad(): void
}

export interface Steer {
  x: number
  y: number
  sprint: boolean
}

export class Controls {
  private readonly host: ControlsHost
  private readonly held = { up: false, down: false, left: false, right: false, sprint: false }
  private jumpQueued = false
  private drag: { x: number; y: number; moved: number } | null = null
  private stickTouch: { id: number; ox: number; oy: number; x: number; y: number; t0: number; moved: number } | null = null
  private panTouch: { id: number; x: number; y: number } | null = null
  /** tracked every frame, so a press that closes a panel isn't read as a
   *  jump the moment the panel goes */
  private readonly padEdges = new PadEdges()
  private lastWheel = 0

  constructor(host: ControlsHost) {
    this.host = host
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onPointerDown = this.onPointerDown.bind(this)
    this.onPointerMove = this.onPointerMove.bind(this)
    this.onPointerUp = this.onPointerUp.bind(this)
    this.onWheel = this.onWheel.bind(this)
    this.release = this.release.bind(this)
    window.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("keyup", this.onKeyUp)
    window.addEventListener("blur", this.release)
    host.canvas.addEventListener("pointerdown", this.onPointerDown)
    window.addEventListener("pointermove", this.onPointerMove)
    window.addEventListener("pointerup", this.onPointerUp)
    window.addEventListener("pointercancel", this.onPointerUp)
    host.canvas.addEventListener("wheel", this.onWheel, { passive: true })
  }

  dispose() {
    window.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("keyup", this.onKeyUp)
    window.removeEventListener("blur", this.release)
    this.host.canvas.removeEventListener("pointerdown", this.onPointerDown)
    window.removeEventListener("pointermove", this.onPointerMove)
    window.removeEventListener("pointerup", this.onPointerUp)
    window.removeEventListener("pointercancel", this.onPointerUp)
    this.host.canvas.removeEventListener("wheel", this.onWheel)
  }

  /**
   * This frame's steering: keys first, then the pad, then the thumb-stick
   * (whichever is held wins). Also reads the pad's button presses.
   */
  steer(dt: number): Steer {
    const s: Steer = {
      x: (this.held.right ? 1 : 0) - (this.held.left ? 1 : 0),
      y: (this.held.up ? 1 : 0) - (this.held.down ? 1 : 0),
      sprint: this.held.sprint,
    }
    this.readGamepad(s, dt)
    this.readStick(s)
    return s
  }

  /** A jump asked for since the last step, if any (it's used up) */
  takeJump(): boolean {
    const j = this.jumpQueued
    this.jumpQueued = false
    return j
  }

  /** A jump asked for by a touch button */
  jump() {
    if (this.host.enabled()) this.jumpQueued = true
  }

  /** Let go of everything: a panel opened, the tab lost focus */
  release() {
    this.held.up = this.held.down = this.held.left = this.held.right = this.held.sprint = false
    this.jumpQueued = false
    this.drag = null
    this.panTouch = null
    if (this.stickTouch) {
      this.stickTouch = null
      this.host.stick(null)
    }
  }

  // ---- keyboard ----

  private isTyping(e: KeyboardEvent): boolean {
    const t = e.target as HTMLElement | null
    return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)
  }

  private onKeyDown(e: KeyboardEvent) {
    if (!this.host.enabled() || this.isTyping(e) || e.metaKey || e.ctrlKey || e.altKey) return
    let handled = true
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        this.held.up = true
        break
      case "ArrowDown":
      case "KeyS":
        this.held.down = true
        break
      case "ArrowLeft":
      case "KeyA":
        this.held.left = true
        break
      case "ArrowRight":
      case "KeyD":
        this.held.right = true
        break
      case "ShiftLeft":
      case "ShiftRight":
        this.held.sprint = true
        break
      case "Space":
        if (!e.repeat) this.jumpQueued = true
        break
      case "KeyZ":
        if (!e.repeat) this.host.zoom("cycle")
        break
      case "Minus":
        this.host.zoom(1)
        break
      case "Equal":
        this.host.zoom(-1)
        break
      case "KeyR":
        if (!e.repeat) this.host.respawn()
        break
      default:
        handled = false
    }
    if (handled) e.preventDefault()
  }

  private onKeyUp(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        this.held.up = false
        break
      case "ArrowDown":
      case "KeyS":
        this.held.down = false
        break
      case "ArrowLeft":
      case "KeyA":
        this.held.left = false
        break
      case "ArrowRight":
      case "KeyD":
        this.held.right = false
        break
      case "ShiftLeft":
      case "ShiftRight":
        this.held.sprint = false
        break
    }
  }

  // ---- mouse and touch ----

  private onPointerDown(e: PointerEvent) {
    if (!this.host.enabled()) return
    if (e.pointerType === "touch") {
      // the first finger plants the thumb-stick; a second looks around
      if (!this.stickTouch) {
        this.stickTouch = { id: e.pointerId, ox: e.clientX, oy: e.clientY, x: e.clientX, y: e.clientY, t0: performance.now(), moved: 0 }
        this.reportStick()
      } else if (!this.panTouch) {
        this.panTouch = { id: e.pointerId, x: e.clientX, y: e.clientY }
      }
      return
    }
    if (e.button !== 0) return
    this.drag = { x: e.clientX, y: e.clientY, moved: 0 }
  }

  private onPointerMove(e: PointerEvent) {
    if (e.pointerType === "touch") {
      const st = this.stickTouch
      if (st && st.id === e.pointerId) {
        st.moved += Math.abs(e.clientX - st.x) + Math.abs(e.clientY - st.y)
        st.x = e.clientX
        st.y = e.clientY
        this.reportStick()
      } else if (this.panTouch && this.panTouch.id === e.pointerId) {
        this.host.panBy(e.clientX - this.panTouch.x, e.clientY - this.panTouch.y)
        this.panTouch = { id: e.pointerId, x: e.clientX, y: e.clientY }
      }
      return
    }
    this.host.hover(e.target === this.host.canvas || this.drag ? { x: e.clientX, y: e.clientY } : null)
    const d = this.drag
    if (!d) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    d.x = e.clientX
    d.y = e.clientY
    d.moved += Math.abs(dx) + Math.abs(dy)
    // a few pixels of wobble is still a click
    if (d.moved >= 5) this.host.panBy(dx, dy)
  }

  private onPointerUp(e: PointerEvent) {
    if (e.pointerType === "touch") {
      const st = this.stickTouch
      if (st && st.id === e.pointerId) {
        this.stickTouch = null
        this.reportStick()
        // a quick touch that barely moved is a tap, not a run
        const tap = e.type === "pointerup" && st.moved < 12 && performance.now() - st.t0 < 350
        if (tap && this.host.enabled()) this.host.act(e.clientX, e.clientY, true)
      } else if (this.panTouch && this.panTouch.id === e.pointerId) {
        this.panTouch = null
      }
      return
    }
    const d = this.drag
    this.drag = null
    if (!d || d.moved >= 5 || e.target !== this.host.canvas || !this.host.enabled()) return
    this.host.act(e.clientX, e.clientY, false)
  }

  private onWheel(e: WheelEvent) {
    const now = performance.now()
    if (now - this.lastWheel < 180 || e.deltaY === 0) return
    this.lastWheel = now
    this.host.zoom(e.deltaY > 0 ? 1 : -1)
  }

  /** Tell the host where the thumb-stick is, so the interface can draw it */
  private reportStick() {
    const st = this.stickTouch
    if (!st) {
      this.host.stick(null)
      return
    }
    const len = Math.hypot(st.x - st.ox, st.y - st.oy)
    this.host.stick({ ox: st.ox, oy: st.oy, x: st.x, y: st.y, sprint: len > STICK_RADIUS * STICK_SPRINT })
  }

  /**
   * The touch thumb-stick: the thumb's offset from where it landed steers
   * him, as far as it's pushed; past the ring, he sprints.
   */
  private readStick(s: Steer) {
    const st = this.stickTouch
    if (!st || !this.host.enabled() || s.x || s.y) return
    const dx = st.x - st.ox
    const dy = st.y - st.oy
    const len = Math.hypot(dx, dy)
    if (len < 8) return
    const k = Math.min(1, len / STICK_RADIUS) / len
    s.x = dx * k
    s.y = -dy * k
    if (len > STICK_RADIUS * STICK_SPRINT) s.sprint = true
  }

  // ---- gamepad ----

  /**
   * The left stick (or the D-pad) runs him, as gently as it is tilted; A
   * jumps, B or the right trigger sprints, the bumpers zoom, the right
   * stick looks around and View respawns him. Keys win when both are held.
   */
  private readGamepad(s: Steer, dt: number) {
    const pad = readPad()
    this.padEdges.update(pad)
    if (!pad || !this.host.enabled()) return
    const left = stick(pad, 0, 1)
    let x = left.x
    let y = -left.y
    if (padHeld(pad, PAD.LEFT) || padHeld(pad, PAD.RIGHT)) x = (padHeld(pad, PAD.RIGHT) ? 1 : 0) - (padHeld(pad, PAD.LEFT) ? 1 : 0)
    if (padHeld(pad, PAD.UP) || padHeld(pad, PAD.DOWN)) y = (padHeld(pad, PAD.UP) ? 1 : 0) - (padHeld(pad, PAD.DOWN) ? 1 : 0)
    const sprint = padHeld(pad, PAD.B) || (pad.buttons[PAD.RT]?.value ?? 0) > 0.5
    if (!s.x && !s.y) {
      s.x = x
      s.y = y
    }
    s.sprint ||= sprint
    if (this.padEdges.down(PAD.A)) this.jumpQueued = true
    if (this.padEdges.down(PAD.LB)) this.host.zoom(1)
    if (this.padEdges.down(PAD.RB)) this.host.zoom(-1)
    if (this.padEdges.down(PAD.BACK)) this.host.respawn()
    const look = stick(pad, 2, 3)
    if (look.x || look.y) this.host.look(look.x, look.y, dt)
    if (x || y || sprint || look.x || look.y || this.padEdges.anyDown()) this.host.usedPad()
  }
}
