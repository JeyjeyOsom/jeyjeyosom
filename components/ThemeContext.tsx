import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type Theme = "dusk" | "dawn"

// The World's clock only runs forward: dusk reaches dawn by passing through
// night, and dawn reaches dusk by passing through midday. While a cycle is
// in flight the Title Screen plays the sky; the palette tokens flip at
// CYCLE_FLIP, once the destination sky is bright (or dark) enough for the
// destination text colors to read.
export type CycleDirection = "dusk-to-dawn" | "dawn-to-dusk"
export const CYCLE_MS = 2800
export const CYCLE_MID = 0.45 // deepest night / highest sun
export const CYCLE_FLIP = 0.72 // when the tokens flip

interface ThemeState {
  theme: Theme
  cycle: CycleDirection | null
  toggle: () => void
}

const ThemeCtx = createContext<ThemeState>({
  theme: "dusk",
  cycle: null,
  toggle: () => {},
})

const THEME_COLOR: Record<Theme, string> = {
  dusk: "#140B2E",
  dawn: "#EAF1F8",
}

function initialTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme")
    // Current values, plus migration from the pre-overhaul dark/light values
    if (stored === "dawn" || stored === "light") return "dawn"
  } catch {
    /* storage unavailable */
  }
  // Dusk is the World's default sky (CONTEXT.md); Dawn is a choice, not an
  // OS inference.
  return "dusk"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [cycle, setCycle] = useState<CycleDirection | null>(null)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(window.clearTimeout)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dawn", theme === "dawn")
    try {
      localStorage.setItem("theme", theme)
    } catch {
      /* storage unavailable */
    }

    // Mobile browser address bar follows the sky
    let meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "theme-color")
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", THEME_COLOR[theme])
  }, [theme])

  // index.css eases the token flip only while this class is on
  useEffect(() => {
    document.documentElement.classList.toggle("theme-cycling", cycle !== null)
  }, [cycle])

  const value = useMemo(() => {
    const flip = () => setTheme((t) => (t === "dusk" ? "dawn" : "dusk"))
    return {
      theme,
      cycle,
      toggle: () => {
        if (cycle) return // one sky cycle at a time
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          flip()
          return
        }
        setCycle(theme === "dusk" ? "dusk-to-dawn" : "dawn-to-dusk")
        timers.current.push(
          window.setTimeout(flip, CYCLE_MS * CYCLE_FLIP),
          window.setTimeout(() => setCycle(null), CYCLE_MS)
        )
      },
    }
  }, [theme, cycle])
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  return useContext(ThemeCtx)
}
