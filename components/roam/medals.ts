// Medals and Kits (CONTEXT.md: Medal, Kit). Medals are small things done
// in the Overworld, kept in the visitor's browser; earning them never
// gates content, and every one can be earned on a static host. The count
// unlocks Kits: other colours for the Runner's singlet in Roam Mode.
// Pure bookkeeping, no React, no three.js.

import { WORLD_MAP } from "../zones/registry"

export type MedalId =
  | "first-steps"
  | "sightseer"
  | "door"
  | "finisher"
  | "negative-split"
  | "sub-60"
  | "hydrated"
  | "herd"
  | "birds"
  | "crab"
  | "pier"
  | "historian"
  | "skies"
  | "honk"
  | "watch"
  | "travel"
  | "banana"
  | "rain"

export interface Medal {
  id: MedalId
  name: string
  /** how to earn it; secret medals show "???" until earned */
  hint: string
  secret?: boolean
  /** a set to fill: earned when it holds this many distinct keys */
  needs?: number
  /** the line its toast carries */
  cheer?: string
}

export const MEDALS: Medal[] = [
  { id: "first-steps", name: "FIRST STEPS", hint: "Take your first stride on the island." },
  { id: "sightseer", name: "SIGHTSEER", hint: "Stand at every Landmark's door.", needs: WORLD_MAP.length },
  { id: "door", name: "THROUGH THE DOOR", hint: "Open a Landmark." },
  { id: "travel", name: "FAST TRAVEL", hint: "Jump to a Landmark from the map." },
  { id: "finisher", name: "FINISHER", hint: "Run a full Lap." },
  { id: "negative-split", name: "NEGATIVE SPLIT", hint: "Beat your best Lap." },
  { id: "sub-60", name: "SUB-60", hint: "Run a Lap in under a minute." },
  { id: "hydrated", name: "HYDRATED", hint: "Grab a cup at the aid station on the run." },
  { id: "herd", name: "HERD WHISPERER", hint: "Get a moo out of every cow.", needs: 5 },
  { id: "birds", name: "BIRDWATCHER", hint: "Send a flock into the air." },
  { id: "crab", name: "SIDESTEP", hint: "Spook a crab into the sand." },
  { id: "pier", name: "END OF THE PIER", hint: "Run to the end of the pier." },
  { id: "historian", name: "HISTORIAN", hint: "Raise every stone on the Quest Road." },
  { id: "skies", name: "DUSK TO DAWN", hint: "Run the island under both skies.", needs: 2 },
  { id: "rain", name: "RAIN RUNNER", hint: "Finish a Lap in the rain." },
  { id: "honk", name: "ROAD SENSE", hint: "Get honked at. Then move." },
  { id: "watch", name: "SPLIT CHECK", hint: "Stand still long enough to check your watch." },
  { id: "banana", name: "BANANA", hint: "Somewhere on the island.", secret: true, cheer: "Yep, that's my banana." },
]

export type KitId = "race" | "dawn" | "sunset" | "night" | "gold"

export interface Kit {
  id: KitId
  name: string
  /** medals needed to unlock it */
  needs: number
  /** the singlet's top and bottom colours */
  top: string
  bottom: string
}

export const KITS: Kit[] = [
  { id: "race", name: "RACE KIT", needs: 0, top: "#FF9A4A", bottom: "#7EC8E8" },
  { id: "dawn", name: "DAWN KIT", needs: 4, top: "#7EC8E8", bottom: "#FFF4E3" },
  { id: "sunset", name: "SUNSET KIT", needs: 8, top: "#C2366B", bottom: "#FFC94D" },
  { id: "night", name: "NIGHT KIT", needs: 12, top: "#6E55A8", bottom: "#7EC8E8" },
  { id: "gold", name: "GOLD KIT", needs: MEDALS.length, top: "#FFC94D", bottom: "#FFF4E3" },
]

const STORE = "roam-medals"

interface Saved {
  earned: Partial<Record<MedalId, number>>
  sets: Partial<Record<MedalId, string[]>>
  kit: KitId
}

export class MedalBook {
  private data: Saved = { earned: {}, sets: {}, kit: "race" }

  constructor() {
    try {
      const raw = localStorage.getItem(STORE)
      if (!raw) return
      const saved = JSON.parse(raw) as Partial<Saved>
      const ids = new Set(MEDALS.map((m) => m.id))
      for (const [id, at] of Object.entries(saved.earned ?? {})) {
        if (ids.has(id as MedalId) && typeof at === "number") this.data.earned[id as MedalId] = at
      }
      for (const [id, keys] of Object.entries(saved.sets ?? {})) {
        if (ids.has(id as MedalId) && Array.isArray(keys)) this.data.sets[id as MedalId] = keys.filter((k) => typeof k === "string")
      }
      if (KITS.some((k) => k.id === saved.kit)) this.data.kit = saved.kit as KitId
      if (!this.unlocked(this.data.kit)) this.data.kit = "race"
    } catch {
      /* storage unavailable or corrupt: start a fresh book */
    }
  }

  has(id: MedalId): boolean {
    return this.data.earned[id] !== undefined
  }

  count(): number {
    return Object.keys(this.data.earned).length
  }

  /** How far along a set medal is */
  progress(id: MedalId): number {
    return this.data.sets[id]?.length ?? 0
  }

  /**
   * Record something done: a plain medal, or one key of a set medal.
   * Returns the medal if this earned it, and any Kits that it unlocked.
   */
  record(id: MedalId, key?: string): { medal: Medal; kits: Kit[] } | null {
    const medal = MEDALS.find((m) => m.id === id)
    if (!medal || this.has(id)) return null
    if (medal.needs) {
      const set = new Set(this.data.sets[id] ?? [])
      if (key === undefined || set.has(key)) return null
      set.add(key)
      this.data.sets[id] = [...set]
      if (set.size < medal.needs) {
        this.save()
        return null
      }
    }
    const before = this.count()
    this.data.earned[id] = Date.now()
    this.save()
    const kits = KITS.filter((k) => k.needs > before && k.needs <= before + 1)
    return { medal, kits }
  }

  unlocked(kit: KitId): boolean {
    const k = KITS.find((x) => x.id === kit)
    return !!k && this.count() >= k.needs
  }

  kit(): Kit {
    return KITS.find((k) => k.id === this.data.kit) ?? KITS[0]
  }

  setKit(kit: KitId) {
    if (!this.unlocked(kit)) return
    this.data.kit = kit
    this.save()
  }

  private save() {
    try {
      localStorage.setItem(STORE, JSON.stringify(this.data))
    } catch {
      /* storage unavailable: medals last this visit */
    }
  }
}
