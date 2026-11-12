import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

// The run's state: Gels are the score of an endless run and accumulate
// without cap; the Health Bar never recovers mid-run. Both live here, not
// in PlayMode, because they must survive Esc and re-entry — a detour into
// Browse Mode is not the run's end. A Retry (after Game Over) or a page
// load starts fresh.
export const MAX_HEALTH = 3

interface PlayModeState {
  playing: boolean
  enter: () => void
  exit: () => void
  run: { carried: number }
  health: number
  collect: () => void
  /** A Stumble: one notch off the Health Bar; returns what's left */
  damage: () => number
  /** Retry after Game Over: fresh score, full Health Bar */
  resetRun: () => void
}

const PlayModeCtx = createContext<PlayModeState>({
  playing: false,
  enter: () => {},
  exit: () => {},
  run: { carried: 0 },
  health: MAX_HEALTH,
  collect: () => {},
  damage: () => MAX_HEALTH,
  resetRun: () => {},
})

export function PlayModeProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false)
  const [carried, setCarried] = useState(0)
  const [health, setHealth] = useState(MAX_HEALTH)

  // Synchronous mirror so damage() can report the remaining health from
  // inside a requestAnimationFrame tick without waiting for a render.
  const healthRef = useRef(health)
  healthRef.current = health

  // Stable identities: PlayMode's input/physics effect depends on these, so
  // a new function per state change would tear the whole loop down on
  // every pickup (resetting the jump mid-air, clearing hazards).
  const enter = useCallback(() => setPlaying(true), [])
  const exit = useCallback(() => setPlaying(false), [])
  const collect = useCallback(() => setCarried((c) => c + 1), [])

  const damage = useCallback(() => {
    const left = Math.max(0, healthRef.current - 1)
    healthRef.current = left
    setHealth(left)
    return left
  }, [])

  const resetRun = useCallback(() => {
    setCarried(0)
    healthRef.current = MAX_HEALTH
    setHealth(MAX_HEALTH)
  }, [])

  const run = useMemo(() => ({ carried }), [carried])
  const value = useMemo(
    () => ({ playing, enter, exit, run, health, collect, damage, resetRun }),
    [playing, enter, exit, run, health, collect, damage, resetRun]
  )
  return <PlayModeCtx.Provider value={value}>{children}</PlayModeCtx.Provider>
}

export function usePlayMode() {
  return useContext(PlayModeCtx)
}
