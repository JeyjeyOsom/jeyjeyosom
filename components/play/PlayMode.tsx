import { useEffect, useRef, useState } from "react"
import { usePlayMode } from "./PlayModeContext"
import {
  PixelRects,
  RUNNER_SHARED,
  RUNNER_FRAME_A,
  RUNNER_FRAME_B,
  RUNNER_STANDING,
} from "../zones/sprites"

const ZONE_NAMES: Record<string, string> = {
  hero: "TITLE SCREEN",
  about: "STATS SCREEN",
  experience: "QUEST LOG",
  skills: "INVENTORY",
  projects: "LEVEL SELECT",
  running: "RECORDS",
  contact: "SAVE POINT",
}

const RUN_SPEED = 1000 // px/s of World per second of key-held
const JUMP_VELOCITY = 760
const GRAVITY = 2300

// Play Mode: the keyboard drives the same World that Browse Mode scrolls
// (ADR 0001). Running traverses the World; jumping is purely visual.
export default function PlayMode() {
  const { playing, exit } = usePlayMode()
  const [facing, setFacing] = useState<1 | -1>(1)
  const [moving, setMoving] = useState(false)
  const [zone, setZone] = useState("TITLE SCREEN")

  const jumperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!playing) return

    document.documentElement.classList.add("play-mode")
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))

    const held = { fwd: false, back: false }
    const jump = { y: 0, vy: 0, airborne: false }
    let wasMoving = false
    let wasFacing: 1 | -1 = 1
    let lastZone = ""
    let raf = 0
    let last = performance.now()

    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case "ArrowRight":
        case "KeyD":
          held.fwd = true
          e.preventDefault()
          break
        case "ArrowLeft":
        case "KeyA":
          held.back = true
          e.preventDefault()
          break
        case "Space":
        case "ArrowUp":
        case "KeyW":
          if (!jump.airborne) {
            jump.airborne = true
            jump.vy = JUMP_VELOCITY
          }
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
      if (e.code === "ArrowRight" || e.code === "KeyD") held.fwd = false
      if (e.code === "ArrowLeft" || e.code === "KeyA") held.back = false
    }
    // In Play Mode the wheel is no longer an input source (ADR 0001)
    const blockScroll = (e: Event) => e.preventDefault()

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

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

      // Which Zone is the Runner in?
      let current = window.scrollY < 100 ? "hero" : ""
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
    }
  }, [playing, exit])

  if (!playing) return null

  return (
    <>
      {/* HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-dusk-950/90 backdrop-blur-xl border-b-2 border-dusk-800">
        <p aria-live="polite" className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-400">
          <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-gold-400 mr-2" />
          {zone}
        </p>
        <p className="hidden md:block font-arcade text-[9px] tracking-wider text-mist-300">
          &lt; &gt; RUN · SPACE JUMP · ESC EXIT
        </p>
        <button
          onClick={exit}
          className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
        >
          ESC EXIT
        </button>
      </div>

      {/* The track the Runner travels on */}
      <div aria-hidden="true" className="fixed bottom-0 left-0 right-0 z-40 h-[9vh] bg-[#0E0721] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-dusk-700" />
        <div className="absolute top-[45%] left-0 right-0 flex gap-8 px-4 overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="w-6 h-1 bg-dusk-700 shrink-0" />
          ))}
        </div>
      </div>

      {/* The Runner */}
      <div
        aria-hidden="true"
        className="fixed bottom-[8.5vh] left-[12%] md:left-[18%] z-40 w-12 md:w-16 pointer-events-none"
      >
        <div ref={jumperRef}>
          <svg
            viewBox="0 0 12 14"
            className={`crisp w-full ${moving ? "sprite-run" : ""}`}
            shapeRendering="crispEdges"
            style={{ transform: facing === -1 ? "scaleX(-1)" : undefined }}
          >
            {moving ? (
              <>
                <g className="frame-a">
                  <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_FRAME_A]} />
                </g>
                <g className="frame-b">
                  <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_FRAME_B]} />
                </g>
              </>
            ) : (
              <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_STANDING]} />
            )}
          </svg>
        </div>
      </div>
    </>
  )
}
