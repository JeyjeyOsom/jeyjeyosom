import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

// The run's harvest: Gels collected across the World (CONTEXT.md). It lives
// here, not in PlayMode, because it must survive Esc and re-entry — a
// detour into Browse Mode is not the run's end. A page load starts a fresh
// run; nothing persists.
interface RunState {
  /** Gels in the pouch right now (Stumbles subtract from this) */
  carried: number
  /** How many Gels the World holds, set once PlayMode lays them out */
  total: number
  /** Which Gels have been picked up — they never respawn within a visit */
  ids: ReadonlySet<string>
}

interface PlayModeState {
  playing: boolean
  enter: () => void
  exit: () => void
  run: RunState
  collect: (id: string) => void
  /** A Stumble: drop up to n carried Gels; returns how many actually fell */
  drop: (n: number) => number
  setTotal: (n: number) => void
}

const PlayModeCtx = createContext<PlayModeState>({
  playing: false,
  enter: () => {},
  exit: () => {},
  run: { carried: 0, total: 0, ids: new Set() },
  collect: () => {},
  drop: () => 0,
  setTotal: () => {},
})

export function PlayModeProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false)
  const [run, setRun] = useState<RunState>({ carried: 0, total: 0, ids: new Set() })

  // Synchronous mirror so drop() can report how many fell from inside a
  // requestAnimationFrame tick without waiting for a render.
  const runRef = useRef(run)
  runRef.current = run

  // Stable identities: PlayMode's input/physics effect depends on these, so
  // a new function per run-state change would tear the whole loop down on
  // every Gel pickup (resetting the jump mid-air, clearing hazards).
  const enter = useCallback(() => setPlaying(true), [])
  const exit = useCallback(() => setPlaying(false), [])

  const collect = useCallback((id: string) => {
    setRun((r) => {
      if (r.ids.has(id)) return r
      return { ...r, carried: r.carried + 1, ids: new Set(r.ids).add(id) }
    })
  }, [])

  const drop = useCallback((n: number) => {
    const fell = Math.min(n, runRef.current.carried)
    if (fell > 0) setRun((r) => ({ ...r, carried: Math.max(0, r.carried - n) }))
    return fell
  }, [])

  const setTotal = useCallback((total: number) => {
    setRun((r) => (r.total === total ? r : { ...r, total }))
  }, [])

  const value = useMemo(
    () => ({ playing, enter, exit, run, collect, drop, setTotal }),
    [playing, enter, exit, run, collect, drop, setTotal]
  )
  return <PlayModeCtx.Provider value={value}>{children}</PlayModeCtx.Provider>
}

export function usePlayMode() {
  return useContext(PlayModeCtx)
}
