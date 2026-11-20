import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { canRoam, hasGamepad, lastInput, scrollToZone, zoneOnScreen } from "./world"
import { WORLD_MAP } from "../zones/registry"
import { usePlayMode } from "../play/PlayModeContext"

// Roam Mode's state and address (ADR 0002). Three views: off (plain
// Browse Mode), the Overworld, and a door (Browse Mode at one Zone, with
// the way back to the Overworld). Each has a history entry, so the
// browser's Back steps out one layer at a time:
//
//   page  ->  #overworld  ->  #<zone> (a door)
//
// The entries carry their meaning in history.state; a door's address is
// its Zone's own anchor. Scroll restoration is manual while roaming so a
// Back never moves the World behind the Overworld's back: the World and
// the Overworld stay in step.

export type RoamView = "off" | "overworld" | "door"

export const ROAM_HASH = "#overworld"

type RoamHistory = { roam: "overworld"; pushed: boolean } | { roam: "door"; zone: string }

function readHistory(): RoamHistory | null {
  const s: unknown = window.history.state
  if (s && typeof s === "object" && "roam" in s) return s as RoamHistory
  return null
}

const knownZone = (id: string | undefined) =>
  id && WORLD_MAP.some((z) => z.id === id) ? id : "title"

interface RoamState {
  view: RoamView
  /** the Zone whose door is open */
  doorZone: string | null
  /** where the Runner stands when the Overworld next appears */
  arrivalZone: string
  /** bumps on every arrival, so the Overworld knows to move him */
  arrival: number
  /** entered by a click or key, rather than by opening the address */
  startedByGesture: boolean
  /** keyboard and WebGL2 present; null until checked */
  eligible: boolean | null
  /** the Overworld is on screen and the page is behind it */
  covering: boolean
  setCovering: (covering: boolean) => void
  enter: (fromZone?: string) => void
  openDoor: (zoneId: string) => void
  backToOverworld: () => void
  exit: () => void
  /** the Overworld reports the Landmark nearest the Runner */
  reportNearest: (zoneId: string) => void
  notice: string | null
  dismissNotice: () => void
}

const RoamCtx = createContext<RoamState | null>(null)

export function RoamProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<RoamView>("off")
  const [doorZone, setDoorZone] = useState<string | null>(null)
  const [arrivalZone, setArrivalZone] = useState("title")
  const [arrival, setArrival] = useState(0)
  const [startedByGesture, setStartedByGesture] = useState(true)
  const [eligible, setEligible] = useState<boolean | null>(null)
  const [covering, setCovering] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  // One Mode drives the keyboard at a time
  const { playing, exit: exitPlay } = usePlayMode()
  const playingRef = useRef(playing)
  playingRef.current = playing

  const viewRef = useRef(view)
  viewRef.current = view
  const doorRef = useRef(doorZone)
  doorRef.current = doorZone
  const nearestRef = useRef("title")
  const exitScrollRef = useRef<string | null>(null)
  const historyLength = useRef(0)
  const restoration = useRef<ScrollRestoration>("auto")

  const startRoaming = useCallback((zone: string, gesture: boolean) => {
    if (viewRef.current === "off") {
      restoration.current = window.history.scrollRestoration
      window.history.scrollRestoration = "manual"
    }
    nearestRef.current = zone
    setArrivalZone(zone)
    setArrival((n) => n + 1)
    setStartedByGesture(gesture)
    setDoorZone(null)
    setCovering(true)
    setView("overworld")
  }, [])

  const arriveFromPage = useCallback(() => {
    // in step: the Runner comes out at the Zone the visitor scrolled to
    setArrivalZone(zoneOnScreen())
    setArrival((n) => n + 1)
    setDoorZone(null)
    setView("overworld")
  }, [])

  // Eligibility, and an Overworld address opened directly (the share link)
  useEffect(() => {
    const ok = canRoam()
    setEligible(ok)
    const hash = window.location.hash
    if (hash !== ROAM_HASH && !hash.startsWith(ROAM_HASH + "/")) return
    if (ok) {
      window.history.replaceState({ roam: "overworld", pushed: false }, "", window.location.href)
      historyLength.current = window.history.length
      startRoaming(knownZone(hash.slice(ROAM_HASH.length + 1)), false)
    } else {
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
      setNotice("The Overworld needs a keyboard or a gamepad, and WebGL2, so here is the page instead.")
    }
  }, [startRoaming])

  // A gamepad picked up later opens the entrances too, and its Start
  // button is one: pressed on the page, it enters the Overworld. The pad
  // is polled only while one is connected.
  const enterRef = useRef<() => void>(() => {})
  useEffect(() => {
    let timer = 0
    // a pad usually shows itself to the page through the very press that
    // means "start", so a Start already down when it appears counts
    let wasDown = false
    const poll = () => {
      const pads = Array.from(navigator.getGamepads?.() ?? [])
      const down = pads.some((p) => !!p?.connected && !!p.buttons[9]?.pressed)
      if (down && !wasDown && viewRef.current === "off" && !playingRef.current) {
        lastInput.pad = true
        enterRef.current()
      }
      wasDown = down
    }
    const onPad = () => {
      setEligible(canRoam())
      window.clearInterval(timer)
      if (hasGamepad()) timer = window.setInterval(poll, 100)
    }
    onPad()
    window.addEventListener("gamepadconnected", onPad)
    window.addEventListener("gamepaddisconnected", onPad)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener("gamepadconnected", onPad)
      window.removeEventListener("gamepaddisconnected", onPad)
    }
  }, [])

  const enter = useCallback(
    (fromZone?: string) => {
      if (!canRoam() || viewRef.current !== "off") return
      if (playingRef.current) exitPlay()
      const zone = knownZone(fromZone ?? zoneOnScreen())
      window.history.pushState({ roam: "overworld", pushed: true }, "", ROAM_HASH)
      historyLength.current = window.history.length
      startRoaming(zone, true)
    },
    [startRoaming, exitPlay]
  )

  enterRef.current = () => enter()

  const openDoor = useCallback((zoneId: string) => {
    window.history.pushState({ roam: "door", zone: zoneId }, "", `#${zoneId}`)
    historyLength.current = window.history.length
    setDoorZone(zoneId)
    setCovering(false)
    setView("door")
  }, [])

  const backToOverworld = useCallback(() => {
    if (readHistory()?.roam === "door") {
      window.history.back() // popstate brings the Overworld back
      return
    }
    window.history.replaceState({ roam: "overworld", pushed: false }, "", ROAM_HASH)
    arriveFromPage()
  }, [arriveFromPage])

  const exit = useCallback(() => {
    exitScrollRef.current = nearestRef.current
    const state = readHistory()
    if (state?.roam === "overworld" && state.pushed) {
      window.history.back() // popstate turns Roam Mode off
      return
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.search)
    setView("off")
  }, [])

  // Back and Forward
  useEffect(() => {
    const onPopState = () => {
      const state = readHistory()
      const current = viewRef.current
      if (state?.roam === "overworld") {
        if (current === "door") arriveFromPage()
        else if (current === "off") startRoaming(zoneOnScreen(), true)
      } else if (state?.roam === "door") {
        if (current === "off") {
          restoration.current = window.history.scrollRestoration
          window.history.scrollRestoration = "manual"
        }
        setDoorZone(state.zone)
        setCovering(false)
        setView("door")
      } else if (window.location.hash === ROAM_HASH && current === "off") {
        startRoaming("title", true)
      } else if (current === "door" && window.history.length > historyLength.current) {
        // a link followed inside the page: still behind the same door
        window.history.replaceState({ roam: "door", zone: doorRef.current ?? "title" }, "", window.location.href)
      } else if (current !== "off") {
        exitScrollRef.current = exitScrollRef.current ?? (current === "overworld" ? nearestRef.current : null)
        setView("off")
      }
      historyLength.current = window.history.length
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [arriveFromPage, startRoaming])

  // Leaving Roam Mode lands the World at the Zone the Runner was nearest
  useEffect(() => {
    if (view !== "off") return
    setCovering(false)
    setDoorZone(null)
    window.history.scrollRestoration = restoration.current
    const zone = exitScrollRef.current
    exitScrollRef.current = null
    if (!zone) return
    // After the browser has finished its own Back (a return to an address
    // without a fragment scrolls to the top), and after the page is
    // scrollable again
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => scrollToZone(zone))
    })
    return () => cancelAnimationFrame(raf)
  }, [view])

  // While the Overworld covers the page, the page must not scroll under it
  useEffect(() => {
    document.documentElement.classList.toggle("roam-covering", covering)
    return () => document.documentElement.classList.remove("roam-covering")
  }, [covering])

  const reportNearest = useCallback((zoneId: string) => {
    nearestRef.current = zoneId
  }, [])
  const dismissNotice = useCallback(() => setNotice(null), [])

  const value = useMemo(
    () => ({
      view,
      doorZone,
      arrivalZone,
      arrival,
      startedByGesture,
      eligible,
      covering,
      setCovering,
      enter,
      openDoor,
      backToOverworld,
      exit,
      reportNearest,
      notice,
      dismissNotice,
    }),
    [view, doorZone, arrivalZone, arrival, startedByGesture, eligible, covering, enter, openDoor, backToOverworld, exit, reportNearest, notice, dismissNotice]
  )
  return <RoamCtx.Provider value={value}>{children}</RoamCtx.Provider>
}

export function useRoam(): RoamState {
  const ctx = useContext(RoamCtx)
  if (!ctx) throw new Error("useRoam outside RoamProvider")
  return ctx
}
