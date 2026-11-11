import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

interface PlayModeState {
  playing: boolean
  enter: () => void
  exit: () => void
}

const PlayModeCtx = createContext<PlayModeState>({
  playing: false,
  enter: () => {},
  exit: () => {},
})

export function PlayModeProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false)
  const value = useMemo(
    () => ({
      playing,
      enter: () => setPlaying(true),
      exit: () => setPlaying(false),
    }),
    [playing]
  )
  return <PlayModeCtx.Provider value={value}>{children}</PlayModeCtx.Provider>
}

export function usePlayMode() {
  return useContext(PlayModeCtx)
}
