import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useRoam } from "./RoamContext"
import { useTheme, CYCLE_MS, CYCLE_MID } from "../ThemeContext"
import { useSound } from "../SoundContext"
import { WORLD_MAP } from "../zones/registry"
import { scrollToZone, zoneName } from "./world"
import { DEFAULT_LOOK, type FrameReport, type Look, Overworld, type OverworldCallbacks } from "./overworld/engine"
import { RoamMap, RoamMenu } from "./RoamPanels"
import { RoamCover } from "./RoamScreens"

// Roam Mode's interface (CONTEXT.md: Roam Mode, Overworld, Landmark, Pace).
// Loaded lazily, with three.js, only when a visitor enters. The engine
// draws the island; this component owns everything readable around it:
// the Landmark labels, the door prompt, the Pace, the map and menu, and
// the wipes that hide every jump between the Overworld and the World.

type Panel = "none" | "menu" | "map"
type Stage = "loading" | "start" | "live"

const LOOK_KEY = "roam-look"

function loadLook(): Look {
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

const isTyping = (e: KeyboardEvent) => {
  const t = e.target as HTMLElement | null
  return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)
}

export default function RoamMode() {
  const roam = useRoam()
  const { view, doorZone, arrival, startedByGesture, setCovering, reportNearest } = roam
  const { theme, cycle, toggle: toggleSky } = useTheme()
  const { muted, toggleMuted, playSfx } = useSound()
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
  const [look, setLook] = useState<Look>(loadLook)

  // Latest values for the engine's callbacks and the queued transitions
  const latest = useRef({ roam, panel, playSfx, view })
  latest.current = { roam, panel, playSfx, view }

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
        if (zoneId) latest.current.playSfx("prompt")
      },
      onNearest: (zoneId) => {
        setNearest(zoneId)
        reportNearest(zoneId)
      },
      onPace: setPace,
      onStuck: setStuck,
      onRespawn: () => respawnRef.current(),
      onMoved: () => setMoved(true),
      onJump: () => latest.current.playSfx("jump"),
      onFrame: (report: FrameReport) => {
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
    setReady(true)
    // the LOOK prototype flag doubles as the debug handle for test drivers
    const debug = window as { __overworld?: Overworld }
    if (new URLSearchParams(window.location.search).has("look")) debug.__overworld = engine
    return () => {
      engine.dispose()
      engineRef.current = null
      delete debug.__overworld
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

  useEffect(() => {
    engineRef.current?.setLook(look)
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
        const p = engine.runnerOnScreen()
        await iris.close(p.x, p.y)
        coveredForDoor.current = true
        latest.current.roam.openDoor(zoneId)
      })
    },
    [enqueue, iris]
  )

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
            <div className="pixel-border bg-dusk-950/90 mx-1 px-3 py-2">
              <p className="font-arcade text-[9px] md:text-[10px] text-gold-400">THE OVERWORLD</p>
              <p className="mt-2 font-arcade text-[8px] text-mist-300">NEAR {zoneName(nearest)}</p>
            </div>
            <div className="flex items-start gap-3">
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
                  MAP <span className="text-mist-300">M</span>
                </button>
                <button
                  onClick={blurAfter(() => setPanel("menu"))}
                  className="font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring"
                >
                  MENU <span className="text-mist-300">ESC</span>
                </button>
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

          <div aria-live="polite" className="fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none">
            {prompt ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-cream-100">
                <span className="text-gold-400 animate-blink">ENTER</span> ▸ OPEN THE {zoneName(prompt)}
              </p>
            ) : stuck ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] text-cream-100">
                STUCK? PRESS <span className="text-gold-400">R</span>
              </p>
            ) : !moved ? (
              <p className="pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[8px] md:text-[9px] text-cream-100 text-center leading-relaxed">
                <span className="text-gold-400">WASD</span> RUN · <span className="text-gold-400">SHIFT</span> SPRINT ·{" "}
                <span className="text-gold-400">SPACE</span> JUMP · <span className="text-gold-400">M</span> MAP
              </p>
            ) : null}
          </div>
        </>
      )}

      {/* Behind a door: the World at one Zone, and the way back */}
      {live && view === "door" && (
        <div className="fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none">
          <button
            onClick={roam.backToOverworld}
            className="pointer-events-auto pixel-border bg-dusk-950/95 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring"
          >
            ◂ BACK TO THE OVERWORLD <span className="text-mist-300">ESC</span>
          </button>
        </div>
      )}

      {inOverworld && panel === "map" && engineRef.current && (
        <RoamMap
          landmarks={landmarks}
          runner={engineRef.current.runnerPosition()}
          onTravel={travel}
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
