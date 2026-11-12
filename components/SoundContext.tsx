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

// The World's sound: a synthesized retro-arcade loop plus the Gel and
// Stumble SFX, all Web Audio oscillators — no audio files. The BGM plays on
// every visit, starting at the first user gesture the browser's autoplay
// policy will honor; a visitor who mutes stays muted across visits
// (localStorage). All callbacks are stable identities: PlayMode's physics
// effect depends on the SFX functions.

const midi = (m: number) => 440 * Math.pow(2, (m - 69) / 12)

const N = null

// Two tunes, both on a 16th grid of MIDI notes. Browse Mode ambles through
// Am - F - C - G; Play Mode runs the Andalusian cadence (Am - G - F - E)
// faster, with an octave-pumping chase bass and a backbeat snare.
export type SoundMode = "browse" | "play"

interface Track {
  bpm: number
  lead: Array<number | null>
  bassRoots: number[] // one per bar
  /** true: bass pumps root/octave (chase); false: root/fifth (amble) */
  pump: boolean
  /** busier hats and a snare on beats 2 and 4 */
  drive: boolean
}

const TRACKS: Record<SoundMode, Track> = {
  browse: {
    bpm: 112,
    pump: false,
    drive: false,
    bassRoots: [45, 41, 48, 43, 45, 41, 48, 43],
    lead: [
      // Am
      69, N, 72, N, 76, N, 72, N, 81, N, N, N, 76, N, N, N,
      // F
      77, N, 76, N, 77, N, 81, N, 77, N, N, N, 72, N, N, N,
      // C
      76, N, 72, N, 67, N, 72, N, 76, N, N, N, 79, N, N, N,
      // G
      79, N, 76, N, 74, N, 71, N, 67, N, N, N, N, N, N, N,
      // Am
      69, N, 72, N, 76, N, 72, N, 81, N, N, N, 76, N, N, N,
      // F
      77, N, 76, N, 77, N, 81, N, 77, N, N, N, 72, N, N, N,
      // C
      76, N, 72, N, 67, N, 72, N, 76, N, N, N, 79, N, N, N,
      // G, walking back up to the top
      67, N, 71, N, 74, N, 79, N, 81, N, N, N, 79, N, 76, N,
    ],
  },
  play: {
    bpm: 150,
    pump: true,
    drive: true,
    bassRoots: [45, 43, 41, 40, 45, 43, 41, 40],
    lead: [
      // Am — arpeggiated drive
      69, N, 76, N, 72, N, 76, N, 69, N, 76, N, 72, 74, 76, N,
      // G
      67, N, 74, N, 71, N, 74, N, 67, N, 74, N, 71, 72, 74, N,
      // F
      65, N, 72, N, 69, N, 72, N, 65, N, 72, N, 69, 71, 72, N,
      // E — harmonic-minor tension (G#)
      64, N, 71, N, 68, N, 71, N, 64, N, 68, N, 71, N, 74, N,
      // Am — descending answer
      81, N, N, 79, 77, N, 76, N, 77, N, 76, N, 74, N, 72, N,
      // G
      79, N, N, 77, 76, N, 74, N, 76, N, 74, N, 71, N, 67, N,
      // F
      77, N, 76, 77, 81, N, 77, N, 76, N, 74, N, 72, N, 71, N,
      // E — cadence back to the top
      68, N, 71, N, 74, N, 71, N, 76, N, 74, N, 71, 68, 64, N,
    ],
  },
}

interface SoundState {
  muted: boolean
  toggleMuted: () => void
  playGel: () => void
  playStumble: () => void
  playGameOver: () => void
  setMode: (mode: SoundMode) => void
}

const SoundCtx = createContext<SoundState>({
  muted: true,
  toggleMuted: () => {},
  playGel: () => {},
  playStumble: () => {},
  playGameOver: () => {},
  setMode: () => {},
})

function initialMuted(): boolean {
  try {
    return localStorage.getItem("sound-muted") === "1"
  } catch {
    return false
  }
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(initialMuted)
  const mutedRef = useRef(muted)
  mutedRef.current = muted

  const ctxRef = useRef<AudioContext | null>(null)
  const bgmGainRef = useRef<GainNode | null>(null)
  const sfxGainRef = useRef<GainNode | null>(null)
  const noiseRef = useRef<AudioBuffer | null>(null)
  const timerRef = useRef(0)
  const slotRef = useRef(0)
  const timeRef = useRef(0)
  const trackRef = useRef<Track>(TRACKS.browse)

  const ensureAudio = useCallback(() => {
    if (ctxRef.current) return ctxRef.current
    const Ctor = window.AudioContext ?? (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    const ctx = new Ctor()
    const bgm = ctx.createGain()
    bgm.gain.value = 0.8
    bgm.connect(ctx.destination)
    const sfx = ctx.createGain()
    sfx.gain.value = 1
    sfx.connect(ctx.destination)
    // one reusable half-second of white noise for hats and the Stumble thud
    const buf = ctx.createBuffer(1, ctx.sampleRate / 2, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    ctxRef.current = ctx
    bgmGainRef.current = bgm
    sfxGainRef.current = sfx
    noiseRef.current = buf
    return ctx
  }, [])

  const scheduleSlot = useCallback((slot: number, t: number) => {
    const ctx = ctxRef.current
    const bgm = bgmGainRef.current
    const noise = noiseRef.current
    if (!ctx || !bgm || !noise) return
    const track = trackRef.current
    const step = 60 / track.bpm / 4
    const noteDur = step * 2 // envelopes scale with tempo

    const lead = track.lead[slot]
    if (lead !== null) {
      const o = ctx.createOscillator()
      o.type = "square"
      o.frequency.value = midi(lead)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.05, t + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, t + noteDur)
      o.connect(g)
      g.connect(bgm)
      o.start(t)
      o.stop(t + noteDur + 0.02)
    }

    if (slot % 2 === 0) {
      // bass on the eighths: amble alternates root/fifth, the chase pumps
      // root/octave
      const bar = Math.floor(slot / 16)
      const eighth = (slot % 16) / 2
      const note =
        track.bassRoots[bar] + (eighth % 2 === 0 ? 0 : track.pump ? 12 : 7)
      const o = ctx.createOscillator()
      o.type = "triangle"
      o.frequency.value = midi(note)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(track.drive ? 0.11 : 0.09, t + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, t + noteDur)
      o.connect(g)
      g.connect(bgm)
      o.start(t)
      o.stop(t + noteDur + 0.02)
    }

    const hat = track.drive ? slot % 2 === 1 : slot % 4 === 2
    if (hat) {
      const s = ctx.createBufferSource()
      s.buffer = noise
      const hp = ctx.createBiquadFilter()
      hp.type = "highpass"
      hp.frequency.value = 6000
      const g = ctx.createGain()
      g.gain.setValueAtTime(track.drive ? 0.015 : 0.02, t)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05)
      s.connect(hp)
      hp.connect(g)
      g.connect(bgm)
      s.start(t)
      s.stop(t + 0.06)
    }

    if (track.drive && (slot % 16 === 4 || slot % 16 === 12)) {
      // snare on beats 2 and 4
      const s = ctx.createBufferSource()
      s.buffer = noise
      const bp = ctx.createBiquadFilter()
      bp.type = "bandpass"
      bp.frequency.value = 1800
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.06, t)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09)
      s.connect(bp)
      bp.connect(g)
      g.connect(bgm)
      s.start(t)
      s.stop(t + 0.1)
    }
  }, [])

  const stopBgm = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = 0
    }
  }, [])

  const startBgm = useCallback(() => {
    const ctx = ctxRef.current
    if (!ctx || timerRef.current) return
    slotRef.current = 0
    timeRef.current = ctx.currentTime + 0.1
    timerRef.current = window.setInterval(() => {
      const c = ctxRef.current
      if (!c) return
      while (timeRef.current < c.currentTime + 0.3) {
        const track = trackRef.current
        scheduleSlot(slotRef.current, timeRef.current)
        slotRef.current = (slotRef.current + 1) % track.lead.length
        timeRef.current += 60 / track.bpm / 4
      }
    }, 100)
  }, [scheduleSlot])

  // Swap tunes: Browse's amble vs Play Mode's chase. An instant cut, from
  // the top of the new loop — arcade-authentic.
  const setMode = useCallback((mode: SoundMode) => {
    const track = TRACKS[mode]
    if (trackRef.current === track) return
    trackRef.current = track
    if (timerRef.current && ctxRef.current) {
      slotRef.current = 0
      timeRef.current = ctxRef.current.currentTime + 0.05
    }
  }, [])

  // Start (or resume) the music — only ever called from a user gesture or
  // the initial attempt, and a no-op while muted.
  const unlock = useCallback(() => {
    if (mutedRef.current) return
    const ctx = ensureAudio()
    if (!ctx) return
    ctx
      .resume()
      .then(() => {
        if (ctx.state === "running" && !mutedRef.current) startBgm()
      })
      .catch(() => {
        /* autoplay refused — the next gesture retries */
      })
  }, [ensureAudio, startBgm])

  useEffect(() => {
    // Try immediately (returning visitors with autoplay permission get BGM
    // on load), then retry on each gesture until the context runs.
    unlock()
    const onGesture = () => {
      if (ctxRef.current?.state === "running") return
      unlock()
    }
    window.addEventListener("pointerdown", onGesture)
    window.addEventListener("keydown", onGesture)
    return () => {
      window.removeEventListener("pointerdown", onGesture)
      window.removeEventListener("keydown", onGesture)
      stopBgm()
      ctxRef.current?.close().catch(() => {})
      ctxRef.current = null
    }
  }, [unlock, stopBgm])

  const toggleMuted = useCallback(() => {
    setMuted((m) => {
      const next = !m
      mutedRef.current = next
      try {
        localStorage.setItem("sound-muted", next ? "1" : "0")
      } catch {
        /* storage unavailable */
      }
      if (next) {
        stopBgm()
        ctxRef.current?.suspend().catch(() => {})
      } else {
        // unmuting is itself a gesture, so this is allowed to make noise
        unlock()
      }
      return next
    })
  }, [stopBgm, unlock])

  const sfxReady = () => {
    const ctx = ctxRef.current
    return !mutedRef.current && ctx && ctx.state === "running" ? ctx : null
  }

  const playGel = useCallback(() => {
    const ctx = sfxReady()
    const sfx = sfxGainRef.current
    if (!ctx || !sfx) return
    const t = ctx.currentTime
    const o = ctx.createOscillator()
    o.type = "square"
    o.frequency.setValueAtTime(987.77, t) // B5
    o.frequency.setValueAtTime(1318.51, t + 0.07) // E6
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.15, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.35)
    o.connect(g)
    g.connect(sfx)
    o.start(t)
    o.stop(t + 0.36)
  }, [])

  const playStumble = useCallback(() => {
    const ctx = sfxReady()
    const sfx = sfxGainRef.current
    const noise = noiseRef.current
    if (!ctx || !sfx || !noise) return
    const t = ctx.currentTime
    const o = ctx.createOscillator()
    o.type = "square"
    o.frequency.setValueAtTime(330, t)
    o.frequency.exponentialRampToValueAtTime(82, t + 0.35)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.18, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.4)
    o.connect(g)
    g.connect(sfx)
    o.start(t)
    o.stop(t + 0.42)
    const s = ctx.createBufferSource()
    s.buffer = noise
    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.value = 1400
    const ng = ctx.createGain()
    ng.gain.setValueAtTime(0.15, t)
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
    s.connect(lp)
    lp.connect(ng)
    ng.connect(sfx)
    s.start(t)
    s.stop(t + 0.24)
  }, [])

  const playGameOver = useCallback(() => {
    const ctx = sfxReady()
    const sfx = sfxGainRef.current
    if (!ctx || !sfx) return
    // three falling square notes: E5, B4, E4 — the last one lingers
    const notes: Array<[number, number, number]> = [
      [76, 0, 0.16],
      [71, 0.18, 0.16],
      [64, 0.36, 0.5],
    ]
    const t0 = ctx.currentTime
    for (const [m, at, dur] of notes) {
      const o = ctx.createOscillator()
      o.type = "square"
      o.frequency.value = midi(m)
      const g = ctx.createGain()
      g.gain.setValueAtTime(0.14, t0 + at)
      g.gain.exponentialRampToValueAtTime(0.001, t0 + at + dur)
      o.connect(g)
      g.connect(sfx)
      o.start(t0 + at)
      o.stop(t0 + at + dur + 0.02)
    }
  }, [])

  const value = useMemo(
    () => ({ muted, toggleMuted, playGel, playStumble, playGameOver, setMode }),
    [muted, toggleMuted, playGel, playStumble, playGameOver, setMode]
  )
  return <SoundCtx.Provider value={value}>{children}</SoundCtx.Provider>
}

export function useSound() {
  return useContext(SoundCtx)
}
