import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Theme = "dusk" | "dawn"

interface ThemeState {
  theme: Theme
  toggle: () => void
}

const ThemeCtx = createContext<ThemeState>({ theme: "dusk", toggle: () => {} })

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

  const value = useMemo(
    () => ({
      theme,
      toggle: () => setTheme((t) => (t === "dusk" ? "dawn" : "dusk")),
    }),
    [theme]
  )
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  return useContext(ThemeCtx)
}
