import { useCallback, useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { usePlayMode, MAX_HEALTH } from "./PlayModeContext"
import { useSound } from "../SoundContext"
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

// px/s of World per second of key-held. Deliberately constant: the Zones
// must stay readable mid-run, so difficulty ramps the STREAM below, never
// the scroll.
const RUN_SPEED = 450
const JUMP_VELOCITY = 760
const GRAVITY = 2300

// --- The endless run (CONTEXT.md: Gel, Oncoming Traffic, Stumble) ---
// Dino-style: Gels and hazards stream at the Runner forever, starting slow
// and speeding up as the run clock accumulates.
const VEH_BASE = 260 // hazard speed at ramp 1x, px/s
const GEL_BASE = 380 // gel stream speed at ramp 1x, px/s
const VEH_SPAWN_S = 5
const GEL_SPAWN_S = 2.8
const RAMP_SECONDS = 75 // running seconds per +1x of speed
const RAMP_MAX = 2.5
const VEH_H_VH = 0.065
const RUNNING_GRACE_MS = 2500 // the road flows this long after the last input
const STUMBLE_IFRAMES_MS = 1200
const GEL_GRAB_X = 34 // horizontal reach in px

// The run clock survives Esc within a visit (module scope); Retry and a
// page load reset it.
let runClock = 0

interface Gel {
  key: number
  x: number
  /** height above the ground line, px */
  h: number
}

interface Veh {
  key: number
  specIdx: number
  x: number
}

// Play Mode: the keyboard drives the same World that Browse Mode scrolls
// (ADR 0001). Running traverses the World; jumping clears Oncoming Traffic
// and reaches arc Gels. Running out of Health ends the run — Retry starts
// a fresh one; progress through the World itself is never taken away.
export default function PlayMode() {
  const { playing, exit, run, health, collect, damage, resetRun } = usePlayMode()
  const { muted, toggleMuted, playGel, playStumble, playGameOver, setMode } = useSound()
  const [facing, setFacing] = useState<1 | -1>(1)
  const [moving, setMoving] = useState(false)
  const [zone, setZone] = useState("TITLE SCREEN")
  const [gels, setGels] = useState<Gel[]>([])
  const [vehicles, setVehicles] = useState<Veh[]>([])
  const [stumbleFlash, setStumbleFlash] = useState(false)

  const jumperRef = useRef<HTMLDivElement>(null)
  const gelsRef = useRef<Gel[]>([])
  const gelEls = useRef(new Map<number, HTMLDivElement>())
  const gelKey = useRef(0)
  const vehsRef = useRef<Veh[]>([])
  const vehEls = useRef(new Map<number, HTMLDivElement>())
  const vehKey = useRef(0)
  const healthRef = useRef(health)
  healthRef.current = health

  // The BGM follows the mode: Browse's amble out here, the chase in Play
  useEffect(() => {
    if (!playing) return
    setMode("play")
    return () => setMode("browse")
  }, [playing, setMode])

  const retry = useCallback(() => {
    resetRun()
    runClock = 0
    gelsRef.current = []
    vehsRef.current = []
    setGels([])
    setVehicles([])
  }, [resetRun])
  const retryRef = useRef(retry)
  retryRef.current = retry

  useEffect(() => {
    if (!playing) return

    document.documentElement.classList.add("play-mode")
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // This effect owns the jump state; if it ever re-runs, the sprite must
    // not keep a stale airborne offset.
    if (jumperRef.current) jumperRef.current.style.transform = ""

    const held = { fwd: false, back: false }
    const jump = { y: 0, vy: 0, airborne: false }
    let wasMoving = false
    let wasFacing: 1 | -1 = 1
    let lastZone = ""
    let raf = 0
    let last = performance.now()
    let lastInput = 0
    let lastScrollY = window.scrollY
    let vehSpawnIn = VEH_SPAWN_S * 0.7 // first hazard arrives early-ish
    let gelSpawnIn = 1.2 // first gels almost immediately
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
      const dead = healthRef.current <= 0
      switch (e.code) {
        case "ArrowRight":
        case "KeyD":
          if (!dead) {
            held.fwd = true
            lastInput = performance.now()
          }
          e.preventDefault()
          break
        case "ArrowLeft":
        case "KeyA":
          if (!dead) {
            held.back = true
            lastInput = performance.now()
          }
          e.preventDefault()
          break
        case "Space":
        case "ArrowUp":
        case "KeyW":
          if (dead) {
            retryRef.current()
          } else if (!jump.airborne) {
            jump.airborne = true
            jump.vy = JUMP_VELOCITY
            lastInput = performance.now()
          }
          e.preventDefault()
          break
        case "Enter":
          if (dead) retryRef.current()
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

    const syncGels = () => setGels(gelsRef.current.map((g) => ({ ...g })))
    const syncVehs = () => setVehicles(vehsRef.current.map((v) => ({ ...v })))

    const spawnGelGroup = (vw: number) => {
      // A ground run to collect through, or an arc that needs the jump
      // (above standing reach ~runner height, inside the ~125px apex)
      const arc = Math.random() < 0.4
      const heights = arc ? [90, 120, 90] : [10, 10, 10, 10]
      const spacing = arc ? 52 : 42
      heights.forEach((h, i) => {
        gelsRef.current.push({ key: gelKey.current++, x: vw + 60 + i * spacing, h })
      })
      syncGels()
    }

    const stumble = (now: number) => {
      invincibleUntil = now + STUMBLE_IFRAMES_MS
      const left = damage()
      playStumble()
      setStumbleFlash(true)
      timeouts.push(window.setTimeout(() => setStumbleFlash(false), STUMBLE_IFRAMES_MS))
      if (left <= 0) playGameOver()
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

      const dead = healthRef.current <= 0
      const dir = dead ? 0 : (held.fwd ? 1 : 0) - (held.back ? 1 : 0)
      if (dir !== 0) {
        window.scrollBy(0, dir * RUN_SPEED * dt)
        runClock += dt // the difficulty clock only runs while the Runner does
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

      const ramp = 1 + Math.min(runClock / RAMP_SECONDS, RAMP_MAX - 1)
      const active = !dead && !reduceMotion && (dir !== 0 || now - lastInput < RUNNING_GRACE_MS)

      // --- Gels: an endless stream; they only advance while the Runner
      // actually runs, so stopping to read never costs a pickup ---
      if (active) {
        gelSpawnIn -= dt
        if (gelSpawnIn <= 0) {
          spawnGelGroup(vw)
          gelSpawnIn = (GEL_SPAWN_S + Math.random() * 1.2) / ramp
        }
      }
      let gelGone = false
      for (const g of gelsRef.current) {
        if (dir !== 0) g.x -= GEL_BASE * ramp * dt
        const el = gelEls.current.get(g.key)
        if (el) {
          if (g.x > vw + 40) el.style.display = "none"
          else {
            el.style.display = "block"
            el.style.transform = `translateX(${g.x}px)`
          }
        }
        if (
          !dead &&
          Math.abs(g.x - runnerX) < GEL_GRAB_X &&
          g.h >= jump.y - 8 &&
          g.h <= jump.y + runnerH
        ) {
          g.x = -999 // consumed; swept below
          collect()
          playGel()
        }
        if (g.x < -60) gelGone = true
      }
      if (gelGone) {
        gelsRef.current = gelsRef.current.filter((g) => g.x >= -60)
        syncGels()
      }

      // --- Oncoming Traffic: flows only while the Runner is running ---
      if (active) {
        vehSpawnIn -= dt
        if (vehSpawnIn <= 0 && vehsRef.current.length < 2) {
          vehsRef.current.push({
            key: vehKey.current++,
            specIdx: Math.floor(Math.random() * VEHICLE_SPECS.length),
            x: vw + 80,
          })
          syncVehs()
          vehSpawnIn = (VEH_SPAWN_S + Math.random() * 2) / ramp
        }
      }

      const vehH = vh * VEH_H_VH
      let vehGone = false
      for (const v of vehsRef.current) {
        // Own (ramping) speed, plus relative speed when the Runner
        // advances. Running backward must not win the tug-of-war: traffic
        // never reverses.
        v.x -= VEH_BASE * ramp * dt + Math.max(0, scrollDelta)
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
        if (v.x < -600) vehGone = true
      }
      if (vehGone) {
        vehsRef.current = vehsRef.current.filter((v) => v.x >= -600)
        syncVehs()
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
    raf = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove("play-mode")
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("wheel", blockScroll)
      window.removeEventListener("touchmove", blockScroll)
      cancelAnimationFrame(raf)
      timeouts.forEach(window.clearTimeout)
      vehsRef.current = []
      gelsRef.current = []
      setVehicles([])
      setGels([])
      setStumbleFlash(false)
    }
    // collect/damage/exit and the sound functions are stable context callbacks
  }, [playing, exit, collect, damage, playGel, playStumble, playGameOver])

  if (!playing) return null

  const dead = health <= 0

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
            GELS {run.carried}
          </p>
          <div className="flex items-center gap-1.5" role="img" aria-label={`Health ${health} of ${MAX_HEALTH}`}>
            <span className="font-arcade text-[9px] md:text-[10px] tracking-wider text-sunset-400">HP</span>
            {Array.from({ length: MAX_HEALTH }).map((_, i) => (
              <span
                key={i}
                className={`inline-block w-3 h-3 ${i < health ? "bg-sunset-500" : "bg-dusk-700"}`}
              />
            ))}
          </div>
        </div>
        <p className="hidden md:block font-arcade text-[9px] tracking-wider text-mist-300">
          &lt; &gt; RUN · SPACE JUMP · ESC EXIT
        </p>
        <div className="flex items-center gap-4 md:gap-5">
          <button
            onClick={(e) => {
              toggleMuted()
              // Space must stay the jump key, not re-toggle a focused button
              e.currentTarget.blur()
            }}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            className="text-mist-300 hover:text-gold-400 transition-colors focus-ring"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <button
            onClick={exit}
            className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-400 hover:text-gold-300 focus-ring"
          >
            ESC EXIT
          </button>
        </div>
      </div>

      {/* The track the Runner travels on */}
      <Ground className="fixed bottom-0 left-0 right-0 z-40 h-[9vh]" />

      {/* The Gel stream (behind the Runner) */}
      <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-40 h-[45vh] pointer-events-none overflow-hidden">
        {gels.map((g) => (
          <div
            key={g.key}
            ref={(el) => {
              if (el) gelEls.current.set(g.key, el)
              else gelEls.current.delete(g.key)
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
        ))}
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

      {/* Game Over: the run ends, the World does not — Retry or walk away */}
      {dead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dusk-950/80 px-6">
          <div className="pixel-border bg-dusk-900 mx-1 px-8 md:px-12 py-8 text-center">
            <p className="font-pixel font-bold text-4xl md:text-5xl text-sunset-500">
              GAME OVER
            </p>
            <p className="mt-4 font-arcade text-[10px] md:text-[11px] tracking-wider text-gold-300">
              GELS {run.carried}
            </p>
            <div className="mt-8 flex items-center justify-center gap-8">
              <button
                onClick={retry}
                className="animate-blink font-arcade text-[10px] md:text-[11px] text-gold-400 hover:text-gold-300 focus-ring"
              >
                ▸ RETRY
              </button>
              <button
                onClick={exit}
                className="font-arcade text-[10px] md:text-[11px] text-mist-300 hover:text-cream-100 focus-ring"
              >
                EXIT
              </button>
            </div>
            <p className="mt-5 font-arcade text-[8px] text-mist-300">SPACE TO RETRY</p>
          </div>
        </div>
      )}
    </>
  )
}
