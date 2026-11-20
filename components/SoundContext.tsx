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
export type SoundMode = "browse" | "play" | "roam"

interface Track {
  bpm: number
  lead: Array<number | null>
  bassRoots: number[] // one per bar
  /** true: bass pumps root/octave (chase); false: root/fifth (amble) */
  pump: boolean
  /** busier hats and a snare on beats 2 and 4 */
  drive: boolean
}

// Roam Mode's tune: an island amble in D major pentatonic, unhurried, a
// lap of the road at an easy pace (D - G - A - D, Bm - G - A - D)
const ROAM_TRACK: Track = {
  bpm: 100,
  pump: false,
  drive: false,
  bassRoots: [50, 43, 45, 50, 47, 43, 45, 50],
  lead: [
    // D
    74, N, 78, N, 81, N, 78, 81, 83, N, 81, N, 78, N, N, N,
    // G
    83, N, N, 81, 78, N, 74, N, 76, N, 78, N, N, N, N, N,
    // A
    81, N, 76, N, 73, N, 76, 78, 81, N, N, N, 76, N, N, N,
    // D
    78, N, 76, N, 74, N, N, N, 69, N, 74, N, N, N, N, N,
    // Bm
    71, N, 74, N, 78, N, 74, 78, 83, N, 81, N, 78, N, N, N,
    // G
    79, N, 83, N, 86, N, 83, N, 81, N, 79, N, 78, N, N, N,
    // A
    76, N, 81, N, 85, N, 81, N, 76, N, 78, 76, 73, N, N, N,
    // D, and a pickup back to the top
    74, N, N, 78, 81, N, 78, N, 74, N, N, N, N, N, 69, N,
  ],
}

const TRACKS: Record<SoundMode, Track> = {
  roam: ROAM_TRACK,
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

// Roam Mode's effects: short square-wave cues, each with a minimum gap so
// a held key or a jittery trigger can't stack them (folio-2025's sound
// registry, minus the files)
export type RoamSfx =
  | "door"
  | "warp"
  | "prompt"
  | "jump"
  | "menu"
  | "moo"
  | "flap"
  | "splash"
  | "cup"
  | "horn"
  | "stone"
  | "lap"
  | "best"
  | "medal"

interface SfxNote {
  /** start offset, s */
  at: number
  dur: number
  type: OscillatorType
  from: number
  /** glide target, Hz */
  to?: number
  gain: number
}

const ROAM_SFX: Record<RoamSfx, { gap: number; notes: SfxNote[] }> = {
  // a door opening: three falling notes
  door: {
    gap: 0.4,
    notes: [
      { at: 0, dur: 0.08, type: "square", from: midi(84), gain: 0.09 },
      { at: 0.08, dur: 0.08, type: "square", from: midi(79), gain: 0.09 },
      { at: 0.16, dur: 0.16, type: "square", from: midi(72), gain: 0.09 },
    ],
  },
  // fast travel: a rising sweep
  warp: { gap: 0.4, notes: [{ at: 0, dur: 0.3, type: "square", from: 260, to: 1300, gain: 0.07 }] },
  // a Landmark's door is in reach
  prompt: { gap: 0.3, notes: [{ at: 0, dur: 0.06, type: "square", from: midi(81), gain: 0.04 }] },
  jump: { gap: 0.15, notes: [{ at: 0, dur: 0.09, type: "triangle", from: 420, to: 760, gain: 0.08 }] },
  menu: { gap: 0.08, notes: [{ at: 0, dur: 0.03, type: "square", from: midi(88), gain: 0.04 }] },
  // a cow, low and sliding
  moo: {
    gap: 1,
    notes: [
      { at: 0, dur: 0.5, type: "sawtooth", from: 150, to: 108, gain: 0.045 },
      { at: 0.04, dur: 0.44, type: "square", from: 75, to: 56, gain: 0.025 },
    ],
  },
  // birds lifting off: three quick chirps
  flap: {
    gap: 1,
    notes: [
      { at: 0, dur: 0.03, type: "square", from: 1900, to: 2500, gain: 0.047 },
      { at: 0.06, dur: 0.03, type: "square", from: 2100, to: 2700, gain: 0.047 },
      { at: 0.12, dur: 0.03, type: "square", from: 1800, to: 2400, gain: 0.047 },
    ],
  },
  splash: {
    gap: 0.5,
    notes: [
      { at: 0, dur: 0.12, type: "triangle", from: 900, to: 280, gain: 0.05 },
      { at: 0.04, dur: 0.1, type: "square", from: 1400, to: 500, gain: 0.015 },
    ],
  },
  // a cup taken from the aid station
  cup: {
    gap: 1,
    notes: [
      { at: 0, dur: 0.05, type: "square", from: midi(84), gain: 0.05 },
      { at: 0.06, dur: 0.08, type: "square", from: midi(91), gain: 0.05 },
    ],
  },
  // a year stone grinding up out of the verge
  stone: {
    gap: 0.5,
    notes: [
      { at: 0, dur: 0.35, type: "triangle", from: 70, to: 110, gain: 0.08 },
      { at: 0.3, dur: 0.12, type: "square", from: midi(76), gain: 0.035 },
    ],
  },
  // a Lap done: a quick rising arpeggio
  lap: {
    gap: 1,
    notes: [
      { at: 0, dur: 0.07, type: "square", from: midi(72), gain: 0.05 },
      { at: 0.08, dur: 0.07, type: "square", from: midi(76), gain: 0.05 },
      { at: 0.16, dur: 0.14, type: "square", from: midi(79), gain: 0.05 },
    ],
  },
  // a new best Lap: the arpeggio, then the octave held
  best: {
    gap: 1,
    notes: [
      { at: 0, dur: 0.07, type: "square", from: midi(72), gain: 0.06 },
      { at: 0.08, dur: 0.07, type: "square", from: midi(76), gain: 0.06 },
      { at: 0.16, dur: 0.07, type: "square", from: midi(79), gain: 0.06 },
      { at: 0.24, dur: 0.4, type: "square", from: midi(84), gain: 0.06 },
      { at: 0.24, dur: 0.4, type: "triangle", from: midi(60), gain: 0.08 },
    ],
  },
  // a Medal won: a bright little four-note jingle
  medal: {
    gap: 0.4,
    notes: [
      { at: 0, dur: 0.06, type: "square", from: midi(79), gain: 0.05 },
      { at: 0.07, dur: 0.06, type: "square", from: midi(84), gain: 0.05 },
      { at: 0.14, dur: 0.06, type: "square", from: midi(88), gain: 0.05 },
      { at: 0.21, dur: 0.22, type: "square", from: midi(91), gain: 0.05 },
    ],
  },
  // a car waiting on the Runner: two polite beeps
  horn: {
    gap: 3,
    notes: [
      { at: 0, dur: 0.12, type: "square", from: 440, gain: 0.04 },
      { at: 0, dur: 0.12, type: "square", from: 554, gain: 0.025 },
      { at: 0.18, dur: 0.16, type: "square", from: 440, gain: 0.04 },
      { at: 0.18, dur: 0.16, type: "square", from: 554, gain: 0.025 },
    ],
  },
}

/** What the Runner's feet land on, for the footstep's sound */
export type StepSurface = "road" | "grass" | "sand" | "wood" | "puddle"

/** The Overworld's background: surf by the coast, and crickets at Dusk or
 *  birds at Dawn; null switches it off */
export type Ambience = { waves: number; dusk: boolean; rain: number } | null

interface SoundState {
  muted: boolean
  toggleMuted: () => void
  playGel: () => void
  playStumble: () => void
  playGameOver: () => void
  playSfx: (name: RoamSfx) => void
  playStep: (surface: StepSurface) => void
  setAmbience: (ambience: Ambience) => void
  setMode: (mode: SoundMode) => void
}

const SoundCtx = createContext<SoundState>({
  muted: true,
  toggleMuted: () => {},
  playGel: () => {},
  playStumble: () => {},
  playGameOver: () => {},
  playSfx: () => {},
  playStep: () => {},
  setAmbience: () => {},
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

  const lastSfx = useRef<Partial<Record<RoamSfx, number>>>({})
  const playSfx = useCallback((name: RoamSfx) => {
    const ctx = sfxReady()
    const sfx = sfxGainRef.current
    if (!ctx || !sfx) return
    const cue = ROAM_SFX[name]
    const t0 = ctx.currentTime
    if (t0 - (lastSfx.current[name] ?? -1) < cue.gap) return
    lastSfx.current[name] = t0
    for (const n of cue.notes) {
      const o = ctx.createOscillator()
      o.type = n.type
      o.frequency.setValueAtTime(n.from, t0 + n.at)
      if (n.to) o.frequency.exponentialRampToValueAtTime(n.to, t0 + n.at + n.dur)
      const g = ctx.createGain()
      g.gain.setValueAtTime(n.gain, t0 + n.at)
      g.gain.exponentialRampToValueAtTime(0.001, t0 + n.at + n.dur)
      o.connect(g)
      g.connect(sfx)
      o.start(t0 + n.at)
      o.stop(t0 + n.at + n.dur + 0.02)
    }
  }, [])

  // A footstep: a short burst of noise, filtered by what he lands on
  const playStep = useCallback((surface: StepSurface) => {
    const ctx = sfxReady()
    const sfx = sfxGainRef.current
    const noise = noiseRef.current
    if (!ctx || !sfx || !noise) return
    const t = ctx.currentTime
    const shape = {
      // gains set by measurement so every surface peaks near -32 dBFS
      road: { type: "bandpass", freq: 2300, q: 1.4, gain: 0.05, dur: 0.035 },
      grass: { type: "lowpass", freq: 750, q: 0.7, gain: 0.088, dur: 0.05 },
      sand: { type: "bandpass", freq: 1300, q: 0.8, gain: 0.055, dur: 0.075 },
      wood: { type: "bandpass", freq: 850, q: 2, gain: 0.03, dur: 0.05 },
      puddle: { type: "bandpass", freq: 1900, q: 0.9, gain: 0.035, dur: 0.09 },
    }[surface] as { type: BiquadFilterType; freq: number; q: number; gain: number; dur: number }
    const s = ctx.createBufferSource()
    s.buffer = noise
    const f = ctx.createBiquadFilter()
    f.type = shape.type
    f.frequency.value = shape.freq * (0.9 + Math.random() * 0.2)
    f.Q.value = shape.q
    const g = ctx.createGain()
    g.gain.setValueAtTime(shape.gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + shape.dur)
    s.connect(f)
    f.connect(g)
    g.connect(sfx)
    s.start(t, Math.random() * 0.4)
    s.stop(t + shape.dur + 0.01)
    if (surface === "wood") {
      // the boards knock back
      const o = ctx.createOscillator()
      o.type = "triangle"
      o.frequency.setValueAtTime(170, t)
      const og = ctx.createGain()
      og.gain.setValueAtTime(0.03, t)
      og.gain.exponentialRampToValueAtTime(0.0001, t + 0.06)
      o.connect(og)
      og.connect(sfx)
      o.start(t)
      o.stop(t + 0.07)
    }
  }, [])

  // The Overworld's ambience: surf swelling slowly through a lowpass, its
  // level set by how near the coast he is; and every so often a cricket at
  // Dusk or a bird at Dawn
  const ambienceRef = useRef<{
    gain: GainNode
    src: AudioBufferSourceNode
    lfo: OscillatorNode
    timer: number
    rain: GainNode
    rainSrc: AudioBufferSourceNode
  } | null>(null)
  const ambienceState = useRef<Ambience>(null)
  const stopAmbience = useCallback(() => {
    const a = ambienceRef.current
    if (!a) return
    window.clearInterval(a.timer)
    try {
      a.src.stop()
      a.lfo.stop()
      a.rainSrc.stop()
    } catch {
      /* already stopped */
    }
    a.gain.disconnect()
    a.rain.disconnect()
    ambienceRef.current = null
  }, [])
  const setAmbience = useCallback(
    (next: Ambience) => {
      ambienceState.current = next
      const ctx = sfxReady()
      const sfx = sfxGainRef.current
      if (!next) {
        stopAmbience()
        return
      }
      if (!ctx || !sfx) return
      if (!ambienceRef.current) {
        const len = ctx.sampleRate * 3
        const buf = ctx.createBuffer(1, len, ctx.sampleRate)
        const data = buf.getChannelData(0)
        // brown-ish noise: a soft roar rather than a hiss
        let last = 0
        for (let i = 0; i < len; i++) {
          last = (last + (Math.random() * 2 - 1) * 0.08) * 0.985
          data[i] = last * 3
        }
        const src = ctx.createBufferSource()
        src.buffer = buf
        src.loop = true
        const lp = ctx.createBiquadFilter()
        lp.type = "lowpass"
        lp.frequency.value = 650
        const swell = ctx.createGain()
        swell.gain.value = 0.55
        const lfo = ctx.createOscillator()
        lfo.frequency.value = 0.12
        const lfoGain = ctx.createGain()
        lfoGain.gain.value = 0.45
        lfo.connect(lfoGain)
        lfoGain.connect(swell.gain)
        const gain = ctx.createGain()
        gain.gain.value = 0
        src.connect(lp)
        lp.connect(swell)
        swell.connect(gain)
        gain.connect(sfx)
        src.start()
        lfo.start()
        // rain: white noise through a broad band for the hiss, plus the
        // brown roar low down for the patter on the ground
        const rainBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
        const rd = rainBuf.getChannelData(0)
        for (let i = 0; i < rd.length; i++) rd[i] = Math.random() * 2 - 1
        const rainSrc = ctx.createBufferSource()
        rainSrc.buffer = rainBuf
        rainSrc.loop = true
        const hiss = ctx.createBiquadFilter()
        hiss.type = "bandpass"
        hiss.frequency.value = 3800
        hiss.Q.value = 0.4
        const rain = ctx.createGain()
        rain.gain.value = 0
        rainSrc.connect(hiss)
        hiss.connect(rain)
        const patter = ctx.createBiquadFilter()
        patter.type = "lowpass"
        patter.frequency.value = 900
        lp.connect(patter)
        patter.connect(rain)
        rain.connect(sfx)
        rainSrc.start()
        const timer = window.setInterval(() => {
          const c = sfxReady()
          const state = ambienceState.current
          const out = sfxGainRef.current
          if (!c || !state || !out) return
          const t0 = c.currentTime + 0.02
          const chirp = (at: number, from: number, to: number, dur: number, gain: number, type: OscillatorType) => {
            const o = c.createOscillator()
            o.type = type
            o.frequency.setValueAtTime(from, t0 + at)
            o.frequency.exponentialRampToValueAtTime(to, t0 + at + dur)
            const g = c.createGain()
            g.gain.setValueAtTime(gain, t0 + at)
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur)
            o.connect(g)
            g.connect(out)
            o.start(t0 + at)
            o.stop(t0 + at + dur + 0.01)
          }
          const inland = 1 - state.waves * 0.6
          // the creatures keep quiet in the rain
          if (state.rain > 0.3) return
          if (state.dusk) {
            // a cricket: a few fast pulses
            if (Math.random() < 0.55) for (let k = 0; k < 3; k++) chirp(k * 0.05, 4600, 4500, 0.025, 0.006 * inland, "sine")
          } else if (Math.random() < 0.3) {
            // a bird: two or three quick rising notes
            const n = 2 + Math.floor(Math.random() * 2)
            const base = 2600 + Math.random() * 900
            for (let k = 0; k < n; k++) chirp(k * 0.11, base, base * 1.25, 0.07, 0.008 * inland, "sine")
          }
        }, 650)
        ambienceRef.current = { gain, src, lfo, timer, rain, rainSrc }
      }
      // measured: these keep the surf and the rain about 6 dB under the tune
      ambienceRef.current.gain.gain.setTargetAtTime(next.waves * 0.0137, ctx.currentTime, 0.5)
      ambienceRef.current.rain.gain.setTargetAtTime(next.rain * 0.0088, ctx.currentTime, 0.8)
    },
    [stopAmbience]
  )
  useEffect(() => () => stopAmbience(), [stopAmbience])

  // ?look (the prototype flag) exposes the mixer to test drivers, which
  // measure each sound's level since nobody can listen in a headless run
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("look")) return
    const debug = window as { __sound?: object }
    debug.__sound = {
      ensure: () => {
        mutedRef.current = false
        return ensureAudio()
      },
      nodes: () => ({ ctx: ctxRef.current, sfx: sfxGainRef.current, bgm: bgmGainRef.current }),
      playSfx,
      playStep,
      playGel,
      setAmbience,
      setMode,
      startBgm,
      stopBgm,
    }
    return () => {
      delete debug.__sound
    }
  }, [ensureAudio, playSfx, playStep, playGel, setAmbience, setMode, startBgm, stopBgm])

  const value = useMemo(
    () => ({ muted, toggleMuted, playGel, playStumble, playGameOver, playSfx, playStep, setAmbience, setMode }),
    [muted, toggleMuted, playGel, playStumble, playGameOver, playSfx, playStep, setAmbience, setMode]
  )
  return <SoundCtx.Provider value={value}>{children}</SoundCtx.Provider>
}

export function useSound() {
  return useContext(SoundCtx)
}
