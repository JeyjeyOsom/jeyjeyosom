import { useEffect, useRef, useState, type CSSProperties } from "react"
import { usePlayMode } from "./PlayModeContext"
import {
  GEL,
  HEADLAMP_LIT,
  PixelRects,
  RunCycleSprite,
  RUNNER_SHARED,
  RUNNER_STANDING,
  RUNNER_VIEWBOX,
} from "../sprites"
import { Ground } from "../Track"
import { VEHICLE_SPECS, VehicleSprite } from "../Traffic"
import { WORLD_MAP } from "../zones/registry"

const ZONE_NAMES: Record<string, string> = Object.fromEntries(
  WORLD_MAP.map((z) => [z.id, z.zoneName])
)

// px/s of World per second of key-held. Slow enough that Zone content can
// be skimmed while running past it — readability outranks travel time.
const RUN_SPEED = 450
const JUMP_VELOCITY = 760
const GRAVITY = 2300

// --- The Gel economy and Oncoming Traffic (CONTEXT.md) ---
const VEH_SPEED = 380 // hazard's own speed; scroll adds relative speed
const VEH_H_VH = 0.065 // same scale as Title Screen traffic
const SPAWN_MIN_S = 3.5
const SPAWN_JITTER_S = 2
const RUNNING_GRACE_MS = 2500 // the road flows this long after the last input
const STUMBLE_DROP = 3
const STUMBLE_IFRAMES_MS = 1200
const GEL_GRAB_X = 34 // horizontal reach in px

interface GelDef {
  id: string
  /** scrollY at which this Gel crosses the Runner */
  s: number
  /** height above the ground line, px */
  h: number
}

interface Veh {
  key: number
  specIdx: number
  x: number
}

// Gels cluster in the corridor into each Zone: a ground run to pull the
// player forward, then a jump arc. Ids are Zone-based so the collected set
// survives relayouts; positions are rebuilt from live section offsets.
function buildGels(): GelDef[] {
  const sections = WORLD_MAP.map((z) => document.getElementById(z.id)).filter(
    (s): s is HTMLElement => !!s
  )
  const defs: GelDef[] = []
  for (let i = 1; i < sections.length; i++) {
    const zone = sections[i].id
    const base = sections[i].offsetTop - window.innerHeight * 0.45
    for (let j = 0; j < 4; j++) {
      defs.push({ id: `${zone}-run-${j}`, s: base + j * 70, h: 10 })
    }
    // Above standing reach (~runner height), inside jump reach (~125px apex)
    ;[90, 120, 90].forEach((h, j) => {
      defs.push({ id: `${zone}-arc-${j}`, s: base + 340 + j * 60, h })
    })
  }
  return defs
}

// Play Mode: the keyboard drives the same World that Browse Mode scrolls
// (ADR 0001). Running traverses the World; jumping clears Oncoming Traffic
// and reaches arc Gels. A Stumble never moves the Runner or costs progress.
export default function PlayMode() {
  const { playing, exit, run, collect, drop, setTotal } = usePlayMode()
  const [facing, setFacing] = useState<1 | -1>(1)
  const [moving, setMoving] = useState(false)
  const [zone, setZone] = useState("TITLE SCREEN")
  const [gelDefs, setGelDefs] = useState<GelDef[]>([])
  const [vehicles, setVehicles] = useState<Veh[]>([])
  const [stumbleFlash, setStumbleFlash] = useState(false)
  const [scatter, setScatter] = useState<{ key: number; n: number } | null>(null)

  const jumperRef = useRef<HTMLDivElement>(null)
  const gelDefsRef = useRef<GelDef[]>([])
  const gelEls = useRef(new Map<string, HTMLDivElement>())
  const vehsRef = useRef<Veh[]>([])
  const vehEls = useRef(new Map<number, HTMLDivElement>())
  const vehKey = useRef(0)
  const runSnapshot = useRef(run)
  runSnapshot.current = run

  useEffect(() => {
    if (!playing) return

    document.documentElement.classList.add("play-mode")
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // This effect owns the jump state; if it ever re-runs, the sprite must
    // not keep a stale airborne offset.
    if (jumperRef.current) jumperRef.current.style.transform = ""

    // Lay the Gels out and tell the HUD the World's total
    const layout = () => {
      const defs = buildGels()
      gelDefsRef.current = defs
      setGelDefs(defs)
      setTotal(defs.length)
    }
    layout()

    // Collected this visit (context state is async; the tick needs sync)
    const taken = new Set(runSnapshot.current.ids)

    const held = { fwd: false, back: false }
    const jump = { y: 0, vy: 0, airborne: false }
    let wasMoving = false
    let wasFacing: 1 | -1 = 1
    let lastZone = ""
    let raf = 0
    let last = performance.now()
    let lastInput = 0
    let lastScrollY = window.scrollY
    let spawnIn = SPAWN_MIN_S // first hazard after a few seconds of running
    let invincibleUntil = 0
    const timeouts: number[] = []

    // The World's forms stay usable in Play Mode: typing in a field must
    // never be hijacked into running or jumping.
    const isTyping = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping(e)) return
      switch (e.code) {
        case "ArrowRight":
        case "KeyD":
          held.fwd = true
          lastInput = performance.now()
          e.preventDefault()
          break
        case "ArrowLeft":
        case "KeyA":
          held.back = true
          lastInput = performance.now()
          e.preventDefault()
          break
        case "Space":
        case "ArrowUp":
        case "KeyW":
          if (!jump.airborne) {
            jump.airborne = true
            jump.vy = JUMP_VELOCITY
          }
          lastInput = performance.now()
          e.preventDefault()
          break
        case "Escape":
          exit()
          break
        case "ArrowDown":
        case "PageUp":
        case "PageDown":
        case "Home":
        case "End":
          e.preventDefault()
          break
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (isTyping(e)) return
      if (e.code === "ArrowRight" || e.code === "KeyD") held.fwd = false
      if (e.code === "ArrowLeft" || e.code === "KeyA") held.back = false
    }
    // In Play Mode the wheel is no longer an input source (ADR 0001)
    const blockScroll = (e: Event) => e.preventDefault()

    const syncVehState = () => {
      setVehicles(vehsRef.current.map((v) => ({ ...v })))
    }

    const stumble = (now: number) => {
      invincibleUntil = now + STUMBLE_IFRAMES_MS
      const fell = drop(STUMBLE_DROP)
      setStumbleFlash(true)
      timeouts.push(window.setTimeout(() => setStumbleFlash(false), STUMBLE_IFRAMES_MS))
      if (fell > 0) {
        setScatter({ key: now, n: fell })
        timeouts.push(window.setTimeout(() => setScatter(null), 700))
      }
    }

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      const vw = window.innerWidth
      const vh = window.innerHeight
      const runnerX = vw * (vw >= 768 ? 0.18 : 0.12)
      const runnerW = vw >= 768 ? 64 : 48
      const runnerH = runnerW * 1.25
      const scrollY = window.scrollY
      const scrollDelta = scrollY - lastScrollY
      lastScrollY = scrollY

      const dir = (held.fwd ? 1 : 0) - (held.back ? 1 : 0)
      if (dir !== 0) {
        window.scrollBy(0, dir * RUN_SPEED * dt)
        if (dir !== wasFacing) {
          wasFacing = dir as 1 | -1
          setFacing(wasFacing)
        }
      }
      if ((dir !== 0) !== wasMoving) {
        wasMoving = dir !== 0
        setMoving(wasMoving)
      }

      if (jump.airborne) {
        jump.vy -= GRAVITY * dt
        jump.y += jump.vy * dt
        if (jump.y <= 0) {
          jump.y = 0
          jump.airborne = false
        }
        if (jumperRef.current) {
          jumperRef.current.style.transform = `translateY(${-jump.y}px)`
        }
      }

      // --- Gels: slide with the scroll, collect on touch ---
      for (const g of gelDefsRef.current) {
        if (taken.has(g.id)) continue
        const x = runnerX + (g.s - scrollY)
        const el = gelEls.current.get(g.id)
        if (el) {
          if (x < -40 || x > vw + 40) {
            el.style.display = "none"
          } else {
            el.style.display = "block"
            el.style.transform = `translateX(${x}px)`
          }
        }
        if (
          Math.abs(x - runnerX) < GEL_GRAB_X &&
          g.h >= jump.y - 8 &&
          g.h <= jump.y + runnerH
        ) {
          taken.add(g.id)
          if (el) el.style.display = "none"
          collect(g.id)
        }
      }

      // --- Oncoming Traffic: flows only while the Runner is running ---
      const running = dir !== 0 || now - lastInput < RUNNING_GRACE_MS
      if (running && !reduceMotion) {
        spawnIn -= dt
        if (spawnIn <= 0 && vehsRef.current.length < 2) {
          vehsRef.current.push({
            key: vehKey.current++,
            specIdx: Math.floor(Math.random() * VEHICLE_SPECS.length),
            x: vw + 80,
          })
          syncVehState()
          spawnIn = SPAWN_MIN_S + Math.random() * SPAWN_JITTER_S
        }
      }

      const vehH = vh * VEH_H_VH
      let despawned = false
      for (const v of vehsRef.current) {
        // Own speed, plus relative speed when the Runner advances. Running
        // backward must not win the tug-of-war: traffic never reverses.
        v.x -= VEH_SPEED * dt + Math.max(0, scrollDelta)
        const el = vehEls.current.get(v.key)
        if (el) el.style.transform = `translateX(${v.x}px)`

        // Collision — only while actively running (an idle Runner reading a
        // Zone is never hit), never airborne-clear, never during i-frames
        if (dir !== 0 && now >= invincibleUntil && jump.y < vehH) {
          const spec = VEHICLE_SPECS[v.specIdx]
          const wPx = vehH * (spec.w / spec.h)
          const bodyX = v.x + wPx * (spec.bodyStart / spec.w)
          const bodyW = wPx - wPx * (spec.bodyStart / spec.w)
          if (bodyX < runnerX + runnerW - 8 && bodyX + bodyW > runnerX + 8) {
            stumble(now)
          }
        }
        if (v.x < -600) despawned = true
      }
      if (despawned) {
        vehsRef.current = vehsRef.current.filter((v) => v.x >= -600)
        syncVehState()
      }

      // Which Zone is the Runner in?
      let current = window.scrollY < 100 ? "title" : ""
      if (!current) {
        for (const s of sections) {
          const rect = s.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.6) {
            current = s.id
            break
          }
        }
      }
      const name = ZONE_NAMES[current] ?? "THE WORLD"
      if (name !== lastZone) {
        lastZone = name
        setZone(name)
      }

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("wheel", blockScroll, { passive: false })
    window.addEventListener("touchmove", blockScroll, { passive: false })
    window.addEventListener("resize", layout)
    raf = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove("play-mode")
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("wheel", blockScroll)
      window.removeEventListener("touchmove", blockScroll)
      window.removeEventListener("resize", layout)
      cancelAnimationFrame(raf)
      timeouts.forEach(window.clearTimeout)
      vehsRef.current = []
      setVehicles([])
      setStumbleFlash(false)
      setScatter(null)
    }
    // collect/drop/setTotal are stable context callbacks
  }, [playing, exit, collect, drop, setTotal])

  if (!playing) return null

  return (
    <>
      {/* HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-dusk-950/90 backdrop-blur-xl border-b-2 border-dusk-800">
        <div className="flex items-baseline gap-4 md:gap-6">
          <p aria-live="polite" className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-400">
            <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-gold-400 mr-2" />
            {zone}
          </p>
          <p className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-300">
            GELS {run.carried}/{run.total}
          </p>
        </div>
        <p className="hidden md:block font-arcade text-[9px] tracking-wider text-mist-300">
          &lt; &gt; RUN · SPACE JUMP · ESC EXIT
        </p>
        <button
          onClick={exit}
          className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-400 hover:text-gold-300 focus-ring"
        >
          ESC EXIT
        </button>
      </div>

      {/* The track the Runner travels on */}
      <Ground className="fixed bottom-0 left-0 right-0 z-40 h-[9vh]" />

      {/* Gels along the road (behind the Runner) */}
      <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-40 h-[45vh] pointer-events-none overflow-hidden">
        {gelDefs.map((g) =>
          run.ids.has(g.id) ? null : (
            <div
              key={g.id}
              ref={(el) => {
                if (el) gelEls.current.set(g.id, el)
                else gelEls.current.delete(g.id)
              }}
              className="absolute left-0 w-[18px]"
              style={{ bottom: `calc(8.5vh + ${g.h}px)`, display: "none" }}
            >
              <div className="gel-bob">
                <svg viewBox="0 0 6 8" className="crisp w-full" shapeRendering="crispEdges">
                  <PixelRects rects={GEL} />
                </svg>
              </div>
            </div>
          )
        )}
      </div>

      {/* The Runner */}
      <div
        aria-hidden="true"
        className={`fixed bottom-[8.5vh] left-[12%] md:left-[18%] z-40 w-12 md:w-16 pointer-events-none ${
          stumbleFlash ? "runner-stumble" : ""
        }`}
      >
        <div ref={jumperRef}>
          {moving ? (
            <RunCycleSprite
              className="w-full sprite-run"
              style={{ transform: facing === -1 ? "scaleX(-1)" : undefined }}
            />
          ) : (
            <svg viewBox={RUNNER_VIEWBOX} className="crisp w-full" shapeRendering="crispEdges">
              <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_STANDING]} />
              <g className="night-light">
                <PixelRects rects={HEADLAMP_LIT} />
              </g>
            </svg>
          )}
        </div>
        {/* Dropped Gels scattering after a Stumble */}
        {scatter &&
          Array.from({ length: scatter.n }).map((_, i) => (
            <div
              key={`${scatter.key}-${i}`}
              className="gel-scatter absolute left-1/2 top-0 w-[14px]"
              style={{ "--fly-x": `${(i - 1) * 34}px` } as CSSProperties}
            >
              <svg viewBox="0 0 6 8" className="crisp w-full" shapeRendering="crispEdges">
                <PixelRects rects={GEL} />
              </svg>
            </div>
          ))}
      </div>

      {/* Oncoming Traffic in the Runner's lane (in front of him) */}
      <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-40 h-[30vh] pointer-events-none overflow-hidden">
        {vehicles.map((v) => (
          <div
            key={v.key}
            ref={(el) => {
              if (el) vehEls.current.set(v.key, el)
              else vehEls.current.delete(v.key)
            }}
            className="absolute left-0 bottom-[8vh] h-[6.5vh]"
            style={{ transform: `translateX(${v.x}px)` }}
          >
            <VehicleSprite spec={VEHICLE_SPECS[v.specIdx]} className="h-full w-auto" />
          </div>
        ))}
      </div>
    </>
  )
}
