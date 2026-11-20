import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useRoam } from "./RoamContext"
import { useTheme, CYCLE_MS, CYCLE_MID } from "../ThemeContext"
import { useSound } from "../SoundContext"
import { WORLD_MAP } from "../zones/registry"
import { lastInput, scrollToZone, zoneName } from "./world"
import {
  DEFAULT_LOOK,
  type FrameReport,
  type LapReport,
  type Look,
  Overworld,
  type OverworldCallbacks,
  STICK_RADIUS,
  STICK_SPRINT,
} from "./overworld/engine"
import { formatLap } from "./overworld/lap"
import { ISLAND_RX, ISLAND_RZ } from "./overworld/level"
import { KITS, type KitId, type MedalId, MEDALS, MedalBook } from "./medals"
import { held as padHeld, PAD, PadEdges, padGlyphs, type PadGlyphs, readPad, rumble, stick } from "./gamepad"
import { RoamMap, RoamMenu, RoamMiniMap } from "./RoamPanels"
import { RoamCover } from "./RoamScreens"

// Roam Mode's interface (CONTEXT.md: Roam Mode, Overworld, Landmark, Pace).
// Loaded lazily, with three.js, only when a visitor enters. The engine
// draws the island; this component owns everything readable around it:
// the Landmark labels, the door prompt, the Pace, the map and menu, and
// the wipes that hide every jump between the Overworld and the World.

type Panel = "none" | "menu" | "map"
type Stage = "loading" | "start" | "live"

const LOOK_KEY = "roam-look"
// The LOOK panel's experiments are kept only for ?look sessions; every
// other visit gets the chosen default
const LOOK_PROTOTYPE = new URLSearchParams(window.location.search).has("look")

function loadLook(): Look {
  if (!LOOK_PROTOTYPE) return DEFAULT_LOOK
  try {
    const raw = localStorage.getItem(LOOK_KEY)
    if (!raw) return DEFAULT_LOOK
    const v = JSON.parse(raw) as Partial<Look>
    return {
      yaw: v.yaw === 45 ? 45 : 0,
      lens: v.lens === "perspective" ? "perspective" : "ortho",
      rows: v.rows === 270 ? 270 : 180,
      tones: v.tones === 3 ? 3 : 2,
    }
  } catch {
    return DEFAULT_LOOK
  }
}

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

// the minimap spans the island plus the map's margin (RoamPanels)
const MINI_RX = ISLAND_RX + 6
const MINI_RZ = ISLAND_RZ + 6

// Where an off-screen Landmark's label pins itself: on the edge of the
// screen, inside the HUD, along the line from the centre toward it
const PIN_INSET = { left: 30, right: 30, top: 100, bottom: 88 }

function pinToEdge(x: number, y: number, w: number, h: number) {
  const cx = w / 2
  const cy = h / 2
  const dx = x - cx
  const dy = y - cy
  const kx = dx > 0 ? (w - PIN_INSET.right - cx) / dx : dx < 0 ? (PIN_INSET.left - cx) / dx : Infinity
  const ky = dy > 0 ? (h - PIN_INSET.bottom - cy) / dy : dy < 0 ? (PIN_INSET.top - cy) / dy : Infinity
  const k = Math.min(kx, ky)
  // the arrow turns in eighths, so its pixels stay square
  const angle = Math.round((Math.atan2(dy, dx) * 180) / Math.PI / 45) * 45
  return { x: Math.round(cx + dx * k), y: Math.round(cy + dy * k), angle }
}

/** The iris: a stepped circle closing on (or opening from) a point */
function useIris(reduceMotion: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const anim = useRef(0)

  const paint = useCallback((x: number, y: number, r: number | null) => {
    const el = ref.current
    if (!el) return
    el.style.display = "block"
    const mask = r === null ? "none" : `radial-gradient(circle at ${x}px ${y}px, transparent ${r}px, #000 ${r + 1}px)`
    el.style.maskImage = mask
    el.style.setProperty("-webkit-mask-image", mask)
  }, [])

  const hide = useCallback(() => {
    if (ref.current) ref.current.style.display = "none"
  }, [])

  const sweep = useCallback(
    (from: number, to: number, x: number, y: number, ms: number) =>
      new Promise<void>((resolve) => {
        cancelAnimationFrame(anim.current)
        const start = performance.now()
        const frame = (now: number) => {
          const t = Math.min(1, (now - start) / ms)
          // whole steps of 12px keep the circle on the pixel grid
          paint(x, y, Math.round((from + (to - from) * t) / 12) * 12)
          if (t < 1) anim.current = requestAnimationFrame(frame)
          else resolve()
        }
        anim.current = requestAnimationFrame(frame)
      }),
    [paint]
  )

  const reach = (x: number, y: number) =>
    Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 12

  const close = useCallback(
    async (x: number, y: number) => {
      if (!reduceMotion) await sweep(reach(x, y), 0, x, y, 380)
      paint(0, 0, null)
    },
    [reduceMotion, sweep, paint]
  )
  const open = useCallback(
    async (x: number, y: number) => {
      if (!reduceMotion) await sweep(0, reach(x, y), x, y, 440)
      hide()
    },
    [reduceMotion, sweep, hide]
  )
  const cover = useCallback(() => paint(0, 0, null), [paint])

  useEffect(() => () => cancelAnimationFrame(anim.current), [])
  return useMemo(() => ({ ref, close, open, cover }), [close, open, cover])
}

/** A gamepad button as a prompt shows it: a little cap with its glyph */
function PadKey({ glyph }: { glyph: string }) {
  return <span className="inline-block border border-gold-400 text-gold-400 px-1 leading-tight">{glyph}</span>
}

/** Move focus to the previous or next control in the open dialog */
function moveFocus(step: 1 | -1) {
  const dialog = document.querySelector<HTMLElement>('[role="dialog"][aria-modal="true"]')
  if (!dialog) return
  const items = Array.from(dialog.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]")).filter(
    (el) => el.offsetParent !== null && el.tabIndex >= 0 && el.getAttribute("aria-hidden") !== "true"
  )
  if (items.length === 0) return
  const at = items.indexOf(document.activeElement as HTMLElement)
  const next = items[(at + step + items.length) % items.length]
  next.focus({ focusVisible: true } as FocusOptions)
  next.scrollIntoView({ block: "nearest" })
}

const isTyping = (e: KeyboardEvent) => {
  const t = e.target as HTMLElement | null
  return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)
}

export default function RoamMode() {
  const roam = useRoam()
  const { view, doorZone, arrival, startedByGesture, setCovering, reportNearest } = roam
  const { theme, cycle, toggle: toggleSky } = useTheme()
  const { muted, toggleMuted, playSfx, playStep, setAmbience, setMode } = useSound()
  const [reduceMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const [showLook] = useState(() => new URLSearchParams(window.location.search).has("look"))

  const hostRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Overworld | null>(null)
  const iris = useIris(reduceMotion)
  const labelRefs = useRef(new Map<string, HTMLButtonElement>())

  const [ready, setReady] = useState(false)
  const [stage, setStage] = useState<Stage>("loading")
  const [failure, setFailure] = useState<string | null>(null)
  const [prompt, setPrompt] = useState<string | null>(null)
  const [nearest, setNearest] = useState("title")
  const [pace, setPace] = useState<string | null>(null)
  const [stuck, setStuck] = useState(false)
  const [moved, setMoved] = useState(false)
  const [panel, setPanel] = useState<Panel>("none")
  const [frameMs, setFrameMs] = useState(0)
  const [lap, setLap] = useState<LapReport | null>(null)
  const [lapDone, setLapDone] = useState<{ time: number; newBest: boolean } | null>(null)
  const [year, setYear] = useState<number | null>(null)
  const lapDoneTimer = useRef(0)

  // Medals: the book, and a queue of toasts announcing them
  const bookRef = useRef<MedalBook | null>(null)
  if (!bookRef.current) bookRef.current = new MedalBook()
  const book = bookRef.current
  const [toasts, setToasts] = useState<Array<{ key: number; title: string; line: string }>>([])
  const [medalCount, setMedalCount] = useState(() => book.count())
  // The last device used decides how prompts name the controls: keys, or
  // the gamepad's buttons
  const [pad, setPad] = useState<PadGlyphs | null>(() => (lastInput.pad ? padGlyphs(readPad()) : null))
  const [touch, setTouch] = useState(() => !lastInput.pad && window.matchMedia("(pointer: coarse)").matches)
  const touchRef = useRef(touch)
  const stickRing = useRef<HTMLDivElement>(null)
  const stickKnob = useRef<HTMLDivElement>(null)
  const padRef = useRef<PadGlyphs | null>(pad)
  const markPad = useCallback(() => {
    lastInput.pad = true
    if (padRef.current) return
    padRef.current = padGlyphs(readPad())
    setPad(padRef.current)
  }, [])
  useEffect(() => {
    const toKeys = (e: KeyboardEvent | PointerEvent) => {
      lastInput.pad = false
      // a finger makes the prompts speak touch; keys or a mouse, keys
      const byTouch = e instanceof PointerEvent && e.pointerType === "touch"
      if (touchRef.current !== byTouch) {
        touchRef.current = byTouch
        setTouch(byTouch)
      }
      if (!padRef.current) return
      padRef.current = null
      setPad(null)
    }
    window.addEventListener("keydown", toKeys)
    window.addEventListener("pointerdown", toKeys)
    return () => {
      window.removeEventListener("keydown", toKeys)
      window.removeEventListener("pointerdown", toKeys)
    }
  }, [])
  const buzz = useCallback((ms: number, strong: number, weak: number) => {
    if (padRef.current) rumble(readPad(), ms, strong, weak)
  }, [])
  const [kit, setKit] = useState<KitId>(() => book.kit().id)
  const toastKey = useRef(0)
  const bestBefore = useRef<number | null>(null)
  const recordRef = useRef<(id: MedalId, key?: string) => void>(() => {})
  recordRef.current = (id, key) => {
    const won = book.record(id, key)
    if (!won) return
    playSfx("medal")
    buzz(160, 0.3, 0.6)
    setMedalCount(book.count())
    const next = [{ key: ++toastKey.current, title: `MEDAL · ${won.medal.name}`, line: won.medal.cheer ?? won.medal.hint }]
    for (const k of won.kits) next.push({ key: ++toastKey.current, title: `${k.name} UNLOCKED`, line: "Wear it from the menu." })
    setToasts((q) => [...q, ...next])
  }
  const record = useCallback((id: MedalId, key?: string) => recordRef.current(id, key), [])
  // one toast at a time, each for a few seconds
  useEffect(() => {
    if (toasts.length === 0) return
    const timer = window.setTimeout(() => setToasts((q) => q.slice(1)), 3400)
    return () => window.clearTimeout(timer)
  }, [toasts])
  const [look, setLook] = useState<Look>(loadLook)

  // Latest values for the engine's callbacks and the queued transitions
  const latest = useRef({ roam, panel, playSfx, playStep, setAmbience, view, theme, openDoor: ((zoneId: string) => void zoneId) as (zoneId: string) => void })
  latest.current = { ...latest.current, roam, panel, playSfx, playStep, setAmbience, view, theme }
  const caption = useRef<HTMLDivElement>(null)
  const captionTimer = useRef(0)
  const miniDot = useRef<HTMLSpanElement>(null)
  const waves = useRef(0)

  // Transitions run one at a time, in order
  const queue = useRef<Promise<void>>(Promise.resolve())
  const busy = useRef(false)
  const enqueue = useCallback((step: () => Promise<void>) => {
    queue.current = queue.current.then(async () => {
      busy.current = true
      try {
        await step()
      } finally {
        busy.current = false
      }
    })
  }, [])

  const respawnRef = useRef<() => void>(() => {})
  const latestLook = useRef(look)
  latestLook.current = look
  const latestSky = useRef(theme)
  latestSky.current = theme

  // ---- the engine ----
  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const callbacks: OverworldCallbacks = {
      onPrompt: (zoneId) => {
        setPrompt(zoneId)
        if (zoneId) {
          latest.current.playSfx("prompt")
          recordRef.current("sightseer", zoneId)
        }
      },
      onNearest: (zoneId) => {
        setNearest(zoneId)
        reportNearest(zoneId)
      },
      onPace: setPace,
      onStuck: setStuck,
      onRespawn: () => respawnRef.current(),
      onMoved: () => {
        setMoved(true)
        recordRef.current("first-steps")
      },
      onJump: () => latest.current.playSfx("jump"),
      onSfx: (name) => latest.current.playSfx(name),
      onLap: (report) => {
        setLap(report.running || report.best !== null ? report : null)
        if (report.finished) {
          const done = report.finished
          latest.current.playSfx(done.newBest ? "best" : "lap")
          buzz(done.newBest ? 320 : 180, 0.5, 0.8)
          setLapDone(done)
          window.clearTimeout(lapDoneTimer.current)
          lapDoneTimer.current = window.setTimeout(() => setLapDone(null), 3600)
          recordRef.current("finisher")
          if (done.newBest && bestBefore.current !== null) recordRef.current("negative-split")
          if (done.time < 60) recordRef.current("sub-60")
        }
        bestBefore.current = report.best
      },
      onYear: setYear,
      onEvent: (e) => {
        const r = recordRef.current
        if (e.kind === "moo") r("herd", String(e.cow))
        else if (e.kind === "birds") r("birds")
        else if (e.kind === "crab") r("crab")
        else if (e.kind === "cup") r("hydrated")
        else if (e.kind === "pier") r("pier")
        else if (e.kind === "stones") r("historian")
        else if (e.kind === "honk") r("honk")
        else if (e.kind === "watch") r("watch")
        else if (e.kind === "banana") r("banana")
      },
      onFrame: (report: FrameReport) => {
        const dot = miniDot.current
        if (dot) {
          dot.style.left = `${(report.world.x / (2 * MINI_RX) + 0.5) * 100}%`
          dot.style.top = `${(report.world.z / (2 * MINI_RZ) + 0.5) * 100}%`
        }
        const w = window.innerWidth
        const h = window.innerHeight
        for (const label of report.labels) {
          const el = labelRefs.current.get(label.zoneId)
          if (!el) continue
          el.style.visibility = "visible"
          if (label.onScreen) {
            el.dataset.pin = "false"
            el.style.transform = `translate(${label.x}px, ${label.y}px) translate(-50%, -100%)`
          } else {
            const pin = pinToEdge(label.x, label.y, w, h)
            el.dataset.pin = "true"
            el.style.setProperty("--pin-angle", `${pin.angle}deg`)
            el.style.transform = `translate(${pin.x}px, ${pin.y}px) translate(-50%, -50%)`
          }
        }
      },
      onFrameTime: setFrameMs,
      onContextLost: () => setFailure("The graphics device stopped responding."),
      onStep: (surface) => latest.current.playStep(surface),
      onAmbience: (level) => {
        waves.current = level
        latest.current.setAmbience({ waves: level, dusk: latest.current.theme === "dusk" })
      },
      onPad: markPad,
      onHover: (text) => {
        const el = caption.current
        if (!el) return
        el.textContent = text ?? ""
        el.style.display = text ? "block" : "none"
        // a finger can't hover: a tapped caption shows for a moment
        window.clearTimeout(captionTimer.current)
        if (text && touchRef.current) captionTimer.current = window.setTimeout(() => (el.style.display = "none"), 1600)
      },
      onStick: (stick) => {
        const ring = stickRing.current
        const knob = stickKnob.current
        if (!ring || !knob) return
        ring.style.display = knob.style.display = stick ? "block" : "none"
        if (!stick) return
        const dx = stick.x - stick.ox
        const dy = stick.y - stick.oy
        const len = Math.hypot(dx, dy)
        const k = len > STICK_RADIUS * STICK_SPRINT ? (STICK_RADIUS * STICK_SPRINT) / len : 1
        ring.style.transform = `translate(${stick.ox}px, ${stick.oy}px) translate(-50%, -50%)`
        knob.style.transform = `translate(${stick.ox + dx * k}px, ${stick.oy + dy * k}px) translate(-50%, -50%)`
        knob.dataset.sprint = String(stick.sprint)
      },
      onOpen: (zoneId) => latest.current.openDoor(zoneId),
    }
    let engine: Overworld
    try {
      engine = new Overworld(
        host,
        {
          zoneIds: WORLD_MAP.map((z) => z.id),
          look: latestLook.current,
          reduceMotion,
          sky: latestSky.current,
        },
        callbacks
      )
    } catch {
      setFailure("This browser couldn't start WebGL2.")
      return
    }
    engineRef.current = engine
    engine.setInputEnabled(false)
    const startKit = bookRef.current?.kit()
    if (startKit) engine.setKit(startKit.top, startKit.bottom)
    if (bookRef.current?.has("banana")) engine.hideBanana()
    setReady(true)
    // the LOOK prototype flag doubles as the debug handle for test drivers
    const debug = window as { __overworld?: Overworld }
    if (new URLSearchParams(window.location.search).has("look")) debug.__overworld = engine
    return () => {
      engine.dispose()
      engineRef.current = null
      delete debug.__overworld
      window.clearTimeout(lapDoneTimer.current)
    }
    // the engine is built once per visit to Roam Mode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (!ready) return
    setStage(startedByGesture ? "live" : "start")
    // the first arrival is decided by how the visitor came in
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  // The sky follows the World's, cycle and all
  useEffect(() => {
    engineRef.current?.setSky(theme, cycle, CYCLE_MS, CYCLE_MID)
  }, [theme, cycle, ready])
  // The Roam tune plays while the Overworld is on screen; behind a door the
  // page's own amble returns. The surf and the creatures go with it.
  const onIsland = stage === "live" && !failure && view === "overworld"
  useEffect(() => {
    if (!onIsland) return
    setMode("roam")
    return () => setMode("browse")
  }, [onIsland, setMode])
  useEffect(() => {
    if (!onIsland) return
    setAmbience({ waves: waves.current, dusk: theme === "dusk" })
    return () => setAmbience(null)
  }, [onIsland, theme, setAmbience])
  // a caption follows the pointer, only over the island
  useEffect(() => {
    if (!onIsland && caption.current) caption.current.style.display = "none"
  })
  useEffect(() => {
    const move = (e: PointerEvent) => {
      const el = caption.current
      if (el) el.style.transform = `translate(${e.clientX + 14}px, ${e.clientY + 16}px)`
    }
    window.addEventListener("pointermove", move)
    window.addEventListener("pointerdown", move)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerdown", move)
    }
  }, [])

  // running under a sky counts toward DUSK TO DAWN
  useEffect(() => {
    if (moved && stage === "live" && view === "overworld") record("skies", theme)
  }, [moved, stage, view, theme, record])

  useEffect(() => {
    engineRef.current?.setLook(look)
    if (!LOOK_PROTOTYPE) return
    try {
      localStorage.setItem(LOOK_KEY, JSON.stringify(look))
    } catch {
      /* storage unavailable */
    }
  }, [look])

  // ---- moving between the Overworld and the World ----
  const shown = useRef<"none" | "overworld" | "door">("none")
  const coveredForDoor = useRef(false)

  const showOverworld = useCallback(async () => {
    const engine = engineRef.current
    if (!engine) return
    if (shown.current === "door") {
      await iris.close(window.innerWidth / 2, window.innerHeight / 2)
    } else {
      iris.cover()
    }
    setCovering(true)
    const { arrivalZone } = latest.current.roam
    engine.placeAt(arrivalZone, shown.current === "none" && arrivalZone === "title" ? "right" : "down")
    if (hostRef.current) hostRef.current.style.visibility = "visible"
    engine.resume()
    shown.current = "overworld"
    await nextFrame()
    await nextFrame()
    const p = engine.runnerOnScreen()
    await iris.open(p.x, p.y)
    engine.setInputEnabled(latest.current.panel === "none")
  }, [iris, setCovering])

  const showDoor = useCallback(
    async (zoneId: string) => {
      const engine = engineRef.current
      if (!engine) return
      if (shown.current === "overworld" && !coveredForDoor.current) {
        const p = engine.runnerOnScreen()
        await iris.close(p.x, p.y)
      } else {
        iris.cover()
      }
      coveredForDoor.current = false
      engine.pause()
      setPanel("none")
      if (hostRef.current) hostRef.current.style.visibility = "hidden"
      scrollToZone(zoneId)
      shown.current = "door"
      await nextFrame()
      await iris.open(window.innerWidth / 2, window.innerHeight / 2)
    },
    [iris]
  )

  const lastView = useRef<string>("")
  const lastArrival = useRef(-1)
  useEffect(() => {
    if (!ready || stage !== "live") return
    if (view === "overworld" && (lastView.current !== "overworld" || arrival !== lastArrival.current)) {
      enqueue(showOverworld)
    } else if (view === "door" && lastView.current !== "door" && doorZone) {
      enqueue(() => showDoor(doorZone))
    }
    lastView.current = view
    lastArrival.current = arrival
  }, [view, arrival, doorZone, ready, stage, enqueue, showOverworld, showDoor])

  const openDoor = useCallback(
    (zoneId: string) => {
      if (busy.current || latest.current.view !== "overworld") return
      enqueue(async () => {
        const engine = engineRef.current
        if (!engine) return
        engine.setInputEnabled(false)
        latest.current.playSfx("door")
        buzz(90, 0.2, 0.4)
        const p = engine.runnerOnScreen()
        await iris.close(p.x, p.y)
        coveredForDoor.current = true
        recordRef.current("door")
        latest.current.roam.openDoor(zoneId)
      })
    },
    [enqueue, iris, buzz]
  )

  latest.current.openDoor = openDoor

  const travel = useCallback(
    (zoneId: string) => {
      setPanel("none")
      enqueue(async () => {
        const engine = engineRef.current
        if (!engine) return
        engine.setInputEnabled(false)
        latest.current.playSfx("warp")
        const p = engine.runnerOnScreen()
        await iris.close(p.x, p.y)
        engine.placeAt(zoneId, "down")
        await nextFrame()
        await nextFrame()
        const q = engine.runnerOnScreen()
        await iris.open(q.x, q.y)
        engine.setInputEnabled(latest.current.panel === "none")
      })
    },
    [enqueue, iris]
  )
  respawnRef.current = () => {
    if (!busy.current && engineRef.current) travel(engineRef.current.nearestZone())
  }

  const leave = useCallback(() => {
    setPanel("none")
    enqueue(async () => {
      const engine = engineRef.current
      engine?.setInputEnabled(false)
      const p = engine?.runnerOnScreen() ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      await iris.close(p.x, p.y)
      latest.current.roam.exit()
    })
  }, [enqueue, iris])

  // Panels pause the Runner
  useEffect(() => {
    if (!ready || stage !== "live" || view !== "overworld" || busy.current) return
    engineRef.current?.setInputEnabled(panel === "none")
    if (panel === "none" && document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }, [panel, ready, stage, view])

  // ---- the gamepad's share of the interface ----
  // PRESS START, doors, panels and the map. The engine reads the pad for
  // movement; this loop runs whatever the engine is doing, since behind a
  // door it's paused.
  const padUi = useRef({ stage, view, panel, prompt, failure, roam, openDoor, playSfx })
  padUi.current = { stage, view, panel, prompt, failure, roam, openDoor, playSfx }
  useEffect(() => {
    const edges = new PadEdges()
    let raf = 0
    let last = performance.now()
    let navSince = 0
    let navAt = 0
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      const dt = Math.min((now - last) / 1000, 1 / 20)
      last = now
      const p = readPad()
      edges.update(p)
      if (!p) return
      const ui = padUi.current
      if (edges.anyDown()) markPad()
      if (ui.failure) {
        if (edges.down(PAD.A) || edges.down(PAD.B)) ui.roam.exit()
        return
      }
      if (ui.stage === "start") {
        if (edges.down(PAD.A) || edges.down(PAD.START)) setStage("live")
        else if (edges.down(PAD.B)) ui.roam.exit()
        return
      }
      if (ui.stage !== "live" || busy.current) return
      const leftStick = stick(p, 0, 1)
      if (ui.view === "door") {
        // the page behind the door scrolls with the stick or the D-pad
        const dy = padHeld(p, PAD.DOWN) ? 1 : padHeld(p, PAD.UP) ? -1 : leftStick.y
        if (dy) window.scrollBy(0, dy * 900 * dt)
        if (edges.down(PAD.B)) ui.roam.backToOverworld()
        return
      }
      if (ui.view !== "overworld") return
      if (ui.panel !== "none") {
        // up and down step through the panel's controls, repeating if held
        const dir = padHeld(p, PAD.DOWN) || padHeld(p, PAD.RIGHT) || leftStick.y > 0.6 ? 1 : padHeld(p, PAD.UP) || padHeld(p, PAD.LEFT) || leftStick.y < -0.6 ? -1 : 0
        if (!dir) navSince = 0
        else if (!navSince) {
          navSince = now
          navAt = now
          moveFocus(dir)
        } else if (now - navSince > 350 && now - navAt > 140) {
          navAt = now
          moveFocus(dir)
        }
        if (edges.down(PAD.A) && document.activeElement instanceof HTMLElement) document.activeElement.click()
        else if (edges.down(PAD.B) || edges.down(PAD.START) || (ui.panel === "map" && edges.down(PAD.Y))) setPanel("none")
        return
      }
      if (edges.down(PAD.X) && ui.prompt) ui.openDoor(ui.prompt)
      else if (edges.down(PAD.Y)) {
        ui.playSfx("menu")
        setPanel("map")
      } else if (edges.down(PAD.START)) {
        ui.playSfx("menu")
        setPanel("menu")
      }
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [markPad])

  // ---- keys the interface owns: start, Enter, M, Esc ----
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping(e) || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return
      if (failure) return
      if (stage === "start") {
        if (e.key === "Enter" || e.code === "Space") {
          e.preventDefault()
          setStage("live")
        }
        return
      }
      if (stage !== "live" || busy.current) return
      if (view === "door") {
        if (e.key === "Escape") {
          e.preventDefault()
          roam.backToOverworld()
        }
        return
      }
      if (panel === "map") {
        if (e.key === "Escape" || e.code === "KeyM") {
          e.preventDefault()
          setPanel("none")
        }
        return
      }
      if (panel === "menu") {
        if (e.key === "Escape") {
          e.preventDefault()
          setPanel("none")
        }
        return
      }
      if (e.key === "Escape") {
        e.preventDefault()
        playSfx("menu")
        setPanel("menu")
      } else if (e.code === "KeyM") {
        e.preventDefault()
        playSfx("menu")
        setPanel("map")
      } else if (e.key === "Enter" && e.target instanceof HTMLButtonElement) {
        // a focused Landmark label or HUD button answers Enter itself
        return
      } else if ((e.key === "Enter" || e.code === "KeyE") && prompt) {
        e.preventDefault()
        openDoor(prompt)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [stage, view, panel, prompt, failure, roam, openDoor, playSfx])

  const blurAfter = (fn: () => void) => (e: React.MouseEvent<HTMLButtonElement>) => {
    // Space must stay the jump key, not re-press a focused button
    e.currentTarget.blur()
    fn()
  }

  const live = stage === "live" && !failure
  const inOverworld = live && view === "overworld"
  const landmarks = engineRef.current?.landmarkPlacements() ?? []

  return (
    <>
      {/* The Overworld */}
      <div ref={hostRef} className="fixed inset-0 z-[60] overflow-hidden bg-dusk-950" />

      {/* Landmark labels: real buttons, clickable from afar */}
      <div
        className="fixed inset-0 z-[62] overflow-hidden pointer-events-none"
        // display, not visibility: each label sets its own visibility
        style={{ display: inOverworld ? "block" : "none" }}
      >
        {WORLD_MAP.map((zone, i) => (
          <button
            key={zone.id}
            ref={(el) => {
              if (el) labelRefs.current.set(zone.id, el)
              else labelRefs.current.delete(zone.id)
            }}
            onClick={blurAfter(() => openDoor(zone.id))}
            aria-label={`Open the ${zoneName(zone.id).toLowerCase()}`}
            title={zone.zoneName}
            data-pin="false"
            className={`group absolute left-0 top-0 pointer-events-auto whitespace-nowrap px-2 py-1 font-arcade text-[8px] md:text-[9px] focus-ring data-[pin=true]:px-1.5 data-[pin=true]:opacity-80 data-[pin=true]:hover:opacity-100 ${
              prompt === zone.id ? "bg-gold-400 text-dusk-950" : "bg-dusk-950/85 text-gold-300 hover:text-gold-400"
            }`}
            style={{ visibility: "hidden" }}
          >
            <span className="group-data-[pin=true]:hidden">{zone.zoneName}</span>
            {/* off screen: its map number and an arrow toward it */}
            <span aria-hidden="true" className="hidden group-data-[pin=true]:inline-flex items-center gap-1">
              {i + 1}
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                className="crisp"
                style={{ transform: "rotate(var(--pin-angle, 0deg))" }}
              >
                <path d="M0 0h2v8h-2zM2 2h2v4h-2zM4 3h2v2h-2z" fill="currentColor" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* HUD */}
      {inOverworld && (
        <>
          <div className="fixed inset-x-0 top-0 z-[65] flex items-start justify-between gap-3 px-4 md:px-6 py-3">
            <div className="hidden sm:block pixel-border bg-dusk-950/90 mx-1 px-3 py-2">
              <p className="font-arcade text-[9px] md:text-[10px] text-gold-400">THE OVERWORLD</p>
              <p className="mt-2 font-arcade text-[8px] text-mist-300">
                {year !== null ? (
                  <>
                    QUEST ROAD · <span className="text-gold-300">{year}</span>
                  </>
                ) : (
                  <>NEAR {zoneName(nearest)}</>
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-3">
              {lap && (
                <div className="pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right">
                  <p className="font-arcade text-[8px] text-mist-300">
                    LAP{" "}
                    <span className="text-[10px] md:text-[11px] text-gold-300 tabular-nums">
                      {lap.running ? formatLap(lap.time) : "-:--.-"}
                    </span>
                  </p>
                  <p className="mt-2 font-arcade text-[8px] text-mist-300">
                    BEST <span className="text-sunset-300 tabular-nums">{lap.best !== null ? formatLap(lap.best) : "-:--.-"}</span>
                  </p>
                </div>
              )}
              <div className="pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right">
                <p className="font-arcade text-[8px] text-mist-300">PACE</p>
                <p className="mt-2 font-arcade text-[10px] md:text-[11px] text-gold-300">
                  {pace ?? "--:--"}
                  <span className="text-[8px] text-mist-300"> /KM</span>
                </p>
              </div>
              <div className="pixel-border bg-dusk-950/90 mx-1 px-3 py-2 flex items-center gap-4">
                <button
                  onClick={blurAfter(() => setPanel("map"))}
                  className="font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring"
                >
                  MAP {!touch && <span className="text-mist-300">{pad ? pad.Y : "M"}</span>}
                </button>
                <button
                  onClick={blurAfter(() => setPanel("menu"))}
                  className="font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring"
                >
                  MENU {!touch && <span className="text-mist-300">{pad ? pad.START : "ESC"}</span>}
                </button>
                {touch && (
                  <button
                    onClick={blurAfter(() => engineRef.current?.cycleZoom())}
                    className="font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring"
                  >
                    ZOOM
                  </button>
                )}
                <button
                  onClick={blurAfter(toggleMuted)}
                  aria-label={muted ? "Unmute sound" : "Mute sound"}
                  className="text-mist-300 hover:text-gold-400 focus-ring"
                >
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* a Lap just done, and Medals as they're won */}
          <div aria-live="polite" className="fixed inset-x-0 top-24 z-[65] flex flex-col items-center gap-3 px-4 pointer-events-none">
            {toasts[0] && (
              <p key={toasts[0].key} className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 text-center">
                <span className="block font-arcade text-[9px] md:text-[10px] text-gold-400">{toasts[0].title}</span>
                <span className="mt-2 block font-body text-sm text-cream-100">{toasts[0].line}</span>
              </p>
            )}
            {lapDone && (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[10px] md:text-[11px] text-cream-100 text-center leading-relaxed">
                LAP <span className="text-gold-300">{formatLap(lapDone.time)}</span>
                {lapDone.newBest && (
                  <>
                    <br />
                    <span className="text-gold-400 animate-blink">NEW BEST!</span>
                  </>
                )}
              </p>
            )}
          </div>

          <div
            aria-live="polite"
            className={`fixed inset-x-0 ${touch ? "bottom-28" : "bottom-6"} z-[65] flex justify-center px-4 pointer-events-none`}
          >
            {prompt && touch && !pad ? (
              <button
                onClick={blurAfter(() => openDoor(prompt))}
                className="pointer-events-auto select-none touch-manipulation pixel-border bg-gold-400 text-dusk-950 mx-1 px-5 py-4 font-arcade text-[10px] md:text-[11px] focus-ring"
              >
                ▸ OPEN THE {zoneName(prompt)}
              </button>
            ) : prompt ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-cream-100">
                {pad ? <PadKey glyph={pad.X} /> : <span className="text-gold-400 animate-blink">ENTER</span>} ▸ OPEN THE{" "}
                {zoneName(prompt)}
              </p>
            ) : stuck ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] text-cream-100">
                {touch && !pad ? (
                  <>
                    STUCK? <span className="text-gold-400">TAP MAP</span> TO JUMP AHEAD
                  </>
                ) : (
                  <>STUCK? PRESS {pad ? <PadKey glyph={pad.BACK} /> : <span className="text-gold-400">R</span>}</>
                )}
              </p>
            ) : !moved ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[8px] md:text-[9px] text-cream-100 text-center leading-relaxed">
                {pad ? (
                  <>
                    <span className="text-gold-400">STICK</span> RUN · <PadKey glyph={pad.B} /> SPRINT · <PadKey glyph={pad.A} /> JUMP ·{" "}
                    <PadKey glyph={pad.Y} /> MAP
                  </>
                ) : touch ? (
                  <>
                    <span className="text-gold-400">DRAG</span> TO RUN · <span className="text-gold-400">FAR</span> TO SPRINT ·{" "}
                    <span className="text-gold-400">TAP</span> TO GO THERE
                  </>
                ) : (
                  <>
                    <span className="text-gold-400">WASD</span> RUN · <span className="text-gold-400">SHIFT</span> SPRINT ·{" "}
                    <span className="text-gold-400">SPACE</span> JUMP · <span className="text-gold-400">M</span> MAP
                  </>
                )}
              </p>
            ) : null}
          </div>
        </>
      )}

      {/* the touch thumb-stick, drawn where the thumb landed */}
      <div
        ref={stickRing}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[64] pointer-events-none rounded-full border-2 border-cream-100/60 bg-dusk-950/20"
        style={{ display: "none", width: STICK_RADIUS * 2, height: STICK_RADIUS * 2 }}
      />
      <div
        ref={stickKnob}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[64] pointer-events-none rounded-full bg-cream-100/70 data-[sprint=true]:bg-gold-400"
        style={{ display: "none", width: 36, height: 36 }}
      />
      {inOverworld && touch && panel === "none" && (
        <button
          onPointerDown={(e) => {
            e.preventDefault()
            engineRef.current?.jump()
          }}
          aria-label="Jump"
          className="fixed right-5 bottom-6 z-[65] w-20 h-20 rounded-full select-none touch-manipulation pixel-border bg-dusk-950/80 font-arcade text-[10px] text-gold-400 active:bg-gold-400 active:text-dusk-950"
        >
          JUMP
        </button>
      )}

      {/* what the pointer is over */}
      <div
        ref={caption}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[66] pointer-events-none pixel-border bg-dusk-950/90 px-2 py-1 font-arcade text-[8px] text-cream-100 whitespace-nowrap"
        style={{ display: "none" }}
      />

      {inOverworld && engineRef.current && (
        <RoamMiniMap landmarks={landmarks} dotRef={miniDot} onOpen={blurAfter(() => setPanel("map"))} />
      )}

      {/* Behind a door: the World at one Zone, and the way back */}
      {live && view === "door" && (
        <div className="fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none">
          <button
            onClick={roam.backToOverworld}
            className="pointer-events-auto pixel-border bg-dusk-950/95 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring"
          >
            ◂ BACK TO THE OVERWORLD <span className="text-mist-300">{pad ? pad.B : "ESC"}</span>
          </button>
        </div>
      )}

      {inOverworld && panel === "map" && engineRef.current && (
        <RoamMap
          landmarks={landmarks}
          runner={engineRef.current.runnerPosition()}
          onTravel={(zoneId) => {
            record("travel")
            travel(zoneId)
          }}
          onClose={() => setPanel("none")}
        />
      )}
      {inOverworld && panel === "menu" && (
        <RoamMenu
          muted={muted}
          sky={theme}
          look={look}
          showLook={showLook}
          frameMs={frameMs}
          onResume={() => setPanel("none")}
          onToggleSound={toggleMuted}
          onToggleSky={() => {
            setPanel("none")
            toggleSky()
          }}
          onLook={setLook}
          onExit={leave}
          pad={pad ?? padGlyphs(readPad())}
          medals={MEDALS.map((m) => ({ ...m, earned: book.has(m.id), progress: book.progress(m.id) }))}
          medalCount={medalCount}
          kits={KITS.map((k) => ({ ...k, unlocked: book.unlocked(k.id) }))}
          kit={kit}
          onKit={(id) => {
            book.setKit(id)
            setKit(book.kit().id)
            const k = book.kit()
            engineRef.current?.setKit(k.top, k.bottom)
          }}
        />
      )}

      {/* The iris: covers everything until the Overworld is ready */}
      <div ref={iris.ref} aria-hidden="true" className="fixed inset-0 z-[75] bg-ground" />

      {failure ? (
        <RoamCover
          title="THE OVERWORLD COULDN'T START"
          message={failure}
          action={{ label: "BACK TO THE PAGE", onClick: roam.exit }}
        />
      ) : stage === "loading" ? (
        <RoamCover title="LOADING THE OVERWORLD" />
      ) : stage === "start" ? (
        <RoamCover
          title="THE OVERWORLD"
          message="Run the island. Every Landmark is a door into the page."
          action={{ label: "PRESS START", onClick: () => setStage("live"), blink: true }}
          secondary={{ label: "BACK TO THE PAGE", onClick: roam.exit }}
        />
      ) : null}
    </>
  )
}
