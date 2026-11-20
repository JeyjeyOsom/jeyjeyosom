import { useEffect, useRef } from "react"
import { WORLD_MAP } from "../zones/registry"
import {
  BEACH_REACH,
  ISLAND_RX,
  ISLAND_RZ,
  islandOutline,
  LOOP_LENGTH,
  MOUNTAIN,
  PASTURE,
  POND,
  roadPoint,
  type LandmarkPlacement,
  type Vec2,
} from "./overworld/level"
import type { Look } from "./overworld/engine"
import type { Kit, KitId, Medal } from "./medals"

// The Overworld's two panels: the map (fast travel, and the keyboard and
// screen-reader route to every Zone) and the menu. Both are dialogs over a
// paused Runner.

const MAP_PAD = 6
const MAP_W = ISLAND_RX * 2 + MAP_PAD * 2
const MAP_H = ISLAND_RZ * 2 + MAP_PAD * 2
const toMap = (p: Vec2) => ({ x: p.x + ISLAND_RX + MAP_PAD, y: p.z + ISLAND_RZ + MAP_PAD })

function drawMap(canvas: HTMLCanvasElement) {
  const g = canvas.getContext("2d")
  if (!g) return
  g.imageSmoothingEnabled = false
  g.fillStyle = "#3E2A73"
  g.fillRect(0, 0, MAP_W, MAP_H)
  const fill = (points: Vec2[], color: string) => {
    g.fillStyle = color
    g.beginPath()
    points.forEach((p, i) => {
      const m = toMap(p)
      if (i === 0) g.moveTo(m.x, m.y)
      else g.lineTo(m.x, m.y)
    })
    g.closePath()
    g.fill()
  }
  fill(islandOutline(1.14), "#55408F")
  fill(islandOutline(1), "#E8D2A2")
  fill(islandOutline(BEACH_REACH), "#6E9A55")
  const pond: Vec2[] = []
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2
    pond.push({ x: POND.x + Math.cos(a) * POND.rx, z: POND.z + Math.sin(a) * POND.rz })
  }
  fill(pond, "#7EC8E8")
  const mtn = toMap({ x: MOUNTAIN.x - MOUNTAIN.baseHalfX, z: MOUNTAIN.z - MOUNTAIN.baseHalfZ })
  g.fillStyle = "#4F6852"
  g.fillRect(mtn.x, mtn.y, MOUNTAIN.baseHalfX * 2, MOUNTAIN.baseHalfZ * 2)
  g.fillStyle = "#6F6A80"
  g.fillRect(mtn.x + 10, mtn.y + 4, MOUNTAIN.baseHalfX * 2 - 26, MOUNTAIN.baseHalfZ * 2 - 8)
  const past = toMap({ x: PASTURE.minX, z: PASTURE.minZ })
  g.fillStyle = "#82AD62"
  g.fillRect(past.x, past.y, PASTURE.maxX - PASTURE.minX, PASTURE.maxZ - PASTURE.minZ)
  g.fillStyle = "#4E4A5E"
  for (let s = 0; s < LOOP_LENGTH; s += 0.5) {
    const m = toMap(roadPoint(s))
    g.fillRect(Math.round(m.x) - 1, Math.round(m.y) - 1, 3, 3)
  }
}

export function RoamMap({
  landmarks,
  runner,
  onTravel,
  onClose,
}: {
  landmarks: LandmarkPlacement[]
  runner: Vec2
  onTravel: (zoneId: string) => void
  onClose: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const firstRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (canvasRef.current) drawMap(canvasRef.current)
    firstRef.current?.focus()
  }, [])

  const order = WORLD_MAP.filter((z) => landmarks.some((l) => l.zoneId === z.id))
  const you = toMap(runner)

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="roam-map-title"
        className="pixel-border bg-dusk-900 mx-1 p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8 max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative shrink-0 self-center" style={{ width: MAP_W * 2, maxWidth: "100%" }}>
          <canvas
            ref={canvasRef}
            width={MAP_W}
            height={MAP_H}
            className="crisp block w-full h-auto"
            aria-hidden="true"
          />
          {order.map((zone, i) => {
            const l = landmarks.find((m) => m.zoneId === zone.id)!
            const m = toMap({ x: l.x, z: l.z })
            return (
              <button
                key={zone.id}
                tabIndex={-1}
                aria-hidden="true"
                onClick={() => onTravel(zone.id)}
                title={zone.zoneName}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-400 hover:bg-gold-300 text-dusk-950 font-arcade text-[9px] flex items-center justify-center"
                style={{ left: `${(m.x / MAP_W) * 100}%`, top: `${(m.y / MAP_H) * 100}%` }}
              >
                {i + 1}
              </button>
            )
          })}
          <span
            aria-hidden="true"
            className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-sunset-500 animate-blink"
            style={{ left: `${(you.x / MAP_W) * 100}%`, top: `${(you.y / MAP_H) * 100}%` }}
          />
        </div>
        <div className="min-w-[14rem]">
          <h2 id="roam-map-title" className="font-arcade text-[11px] text-gold-400">
            MAP
          </h2>
          <p className="mt-3 font-body text-sm text-mist-300">Fast travel to a Landmark.</p>
          <ol className="mt-4 space-y-2">
            {order.map((zone, i) => (
              <li key={zone.id}>
                <button
                  ref={i === 0 ? firstRef : undefined}
                  onClick={() => onTravel(zone.id)}
                  className="group w-full text-left font-arcade text-[9px] md:text-[10px] text-cream-100 hover:text-gold-300 focus-ring py-1"
                >
                  <span className="text-gold-400">{i + 1}</span>{" "}
                  <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸</span>{" "}
                  {zone.zoneName}
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-5 font-arcade text-[8px] text-mist-300">
            <span className="inline-block w-2 h-2 bg-sunset-500 mr-2" aria-hidden="true" />
            YOU · M OR ESC TO CLOSE
          </p>
          <button onClick={onClose} className="mt-4 font-arcade text-[9px] text-gold-400 hover:text-gold-300 focus-ring">
            ▸ CLOSE MAP
          </button>
        </div>
      </div>
    </div>
  )
}

const CONTROLS: Array<[string, string]> = [
  ["WASD / ARROWS", "Run"],
  ["SHIFT", "Sprint"],
  ["SPACE", "Jump"],
  ["ENTER / E", "Open a Landmark"],
  ["M", "Map"],
  ["R", "Back to the nearest Landmark"],
  ["DRAG", "Look around"],
  ["ESC", "Menu"],
]

const LOOK_OPTIONS: { [K in keyof Look]: Array<[Look[K], string]> } = {
  yaw: [[0, "STRAIGHT"], [45, "45°"]],
  lens: [["ortho", "FLAT"], ["perspective", "DEPTH"]],
  rows: [[180, "320×180"], [270, "480×270"]],
  tones: [[2, "TWO"], [3, "THREE"]],
}
const LOOK_LABELS: Record<keyof Look, string> = {
  yaw: "ANGLE",
  lens: "LENS",
  rows: "PIXELS",
  tones: "TONES",
}

export function RoamMenu({
  muted,
  sky,
  look,
  showLook,
  frameMs,
  onResume,
  onToggleSound,
  onToggleSky,
  onLook,
  onExit,
  medals,
  medalCount,
  kits,
  kit,
  onKit,
}: {
  muted: boolean
  sky: "dusk" | "dawn"
  look: Look
  showLook: boolean
  frameMs: number
  onResume: () => void
  onToggleSound: () => void
  onToggleSky: () => void
  onLook: (look: Look) => void
  onExit: () => void
  medals: Array<Medal & { earned: boolean; progress: number }>
  medalCount: number
  kits: Array<Kit & { unlocked: boolean }>
  kit: KitId
  onKit: (kit: KitId) => void
}) {
  const firstRef = useRef<HTMLButtonElement>(null)
  useEffect(() => firstRef.current?.focus(), [])
  const item = "group block w-full text-left font-arcade text-[10px] md:text-[11px] text-cream-100 hover:text-gold-300 focus-ring py-1.5"
  const caret = <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4" onClick={onResume}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="roam-menu-title"
        className="pixel-border bg-dusk-900 mx-1 p-6 md:p-8 w-full max-w-lg max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="roam-menu-title" className="font-pixel font-bold text-3xl text-cream-100">
          PAUSED
        </h2>
        <div className="mt-5 space-y-1">
          <button ref={firstRef} onClick={onResume} className={item}>
            {caret}RESUME
          </button>
          <button onClick={onToggleSound} className={item}>
            {caret}SOUND: {muted ? "OFF" : "ON"}
          </button>
          <button onClick={onToggleSky} className={item}>
            {caret}SKY: {sky === "dusk" ? "DUSK" : "DAWN"}
          </button>
          <button onClick={onExit} className={item}>
            {caret}EXIT THE OVERWORLD
          </button>
        </div>

        <h3 className="mt-7 font-arcade text-[9px] text-gold-400">
          MEDALS{" "}
          <span className="text-mist-300">
            {medalCount}/{medals.length}
          </span>
        </h3>
        <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2">
          {medals.map((m) => {
            const hidden = m.secret && !m.earned
            return (
              <li key={m.id} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className={`mt-0.5 inline-block w-3 h-3 shrink-0 ${m.earned ? "bg-gold-400" : "bg-dusk-700"}`}
                />
                <span className="min-w-0">
                  <span className={`block font-arcade text-[8px] ${m.earned ? "text-cream-100" : "text-mist-300"}`}>
                    {hidden ? "???" : m.name}
                    <span className="sr-only">{m.earned ? " (earned)" : " (not yet)"}</span>
                  </span>
                  <span className="block font-body text-xs text-mist-300">
                    {hidden ? "A secret." : m.earned && m.cheer ? m.cheer : m.hint}
                    {!m.earned && m.needs ? ` ${m.progress}/${m.needs}` : ""}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>

        <h3 className="mt-7 font-arcade text-[9px] text-gold-400">KIT</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {kits.map((k) => (
            <button
              key={k.id}
              disabled={!k.unlocked}
              aria-pressed={kit === k.id}
              onClick={() => onKit(k.id)}
              className={`flex items-center gap-2 font-arcade text-[8px] px-2 py-1.5 focus-ring disabled:opacity-50 ${
                kit === k.id ? "bg-gold-400 text-dusk-950" : "bg-dusk-800 text-cream-100 hover:text-gold-300"
              }`}
            >
              <span aria-hidden="true" className="inline-flex">
                <span className="inline-block w-2 h-2" style={{ background: k.top }} />
                <span className="inline-block w-2 h-2" style={{ background: k.bottom }} />
              </span>
              {k.unlocked ? k.name : `${k.name} · ${k.needs} MEDALS`}
            </button>
          ))}
        </div>

        <h3 className="mt-7 font-arcade text-[9px] text-gold-400">CONTROLS</h3>
        <table className="mt-3 w-full font-body text-sm">
          <tbody>
            {CONTROLS.map(([key, action]) => (
              <tr key={key}>
                <td className="py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap">{key}</td>
                <td className="py-1 text-mist-300">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showLook && (
          <>
            <h3 className="mt-7 font-arcade text-[9px] text-gold-400">LOOK (PROTOTYPE)</h3>
            <div className="mt-3 space-y-2">
              {(Object.keys(LOOK_OPTIONS) as Array<keyof Look>).map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-16 font-arcade text-[8px] text-mist-300">{LOOK_LABELS[key]}</span>
                  {LOOK_OPTIONS[key].map(([value, label]) => (
                    <button
                      key={String(value)}
                      aria-pressed={look[key] === value}
                      onClick={() => onLook({ ...look, [key]: value })}
                      className={`font-arcade text-[8px] px-2 py-1 focus-ring ${
                        look[key] === value ? "bg-gold-400 text-dusk-950" : "bg-dusk-800 text-cream-100"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              ))}
              <p className="font-arcade text-[8px] text-mist-300">
                FRAME {frameMs ? frameMs.toFixed(1) : "--"} MS
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
