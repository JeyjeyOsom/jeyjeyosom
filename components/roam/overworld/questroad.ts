// The Quest Road (CONTEXT.md: Quest Road): the stretch of road before the
// Quest Log's Landmark. A standing stone carved with the year each quest
// began rises out of the verge as the Runner passes it, oldest first, and
// while he is on the stretch his HUD counts the years. Only the years come
// from the Quest Log; its content stays on the page (ADR 0002).

import * as THREE from "three"
import { PY, textBoxes } from "./landmarks"
import { loopS, ROAD, roadDistance, roadPoint, type Solid, type Vec2 } from "./level"
import { C } from "./props"
import { boxesGeometry, centered } from "./voxels"

/** Where the stones stand, along the lap, before the Quest Log at 160 */
const FIRST_S = 118
const SPACING = 10

interface Stone {
  s: number
  year: number
  group: THREE.Group
  scar: THREE.Mesh
  at: Vec2
  risenAt: number | null
  solid: Solid & { kind: "circle" }
}

export class QuestRoad {
  private readonly stones: Stone[] = []
  private readonly reduceMotion: boolean

  constructor(
    scene: THREE.Scene,
    opts: {
      years: number[]
      occluder: THREE.Material
      solid: THREE.Material
      shadow: THREE.Material
      flatDisc: () => THREE.BufferGeometry
      solids: Solid[]
      reduceMotion: boolean
    }
  ) {
    this.reduceMotion = opts.reduceMotion
    const years = [...opts.years].sort((a, b) => a - b)
    years.forEach((year, i) => {
      const s = FIRST_S + i * SPACING
      const p = roadPoint(s)
      const off = ROAD.halfWidth + 1.15
      const at = { x: p.x - p.nx * off, z: p.z - p.nz * off }
      const label = String(year)
      const w = Math.max(1.0, (label.length * 4 + 5) / 16)
      const group = new THREE.Group()
      group.add(
        new THREE.Mesh(
          boxesGeometry([
            centered(0, 0, 0, w + 0.12, 1.0, 0.36, C.stone),
            centered(0, 1.0, 0, w - 0.1, 0.12, 0.28, C.stoneLight),
            centered(0, 0, 0, w + 0.3, 0.14, 0.5, C.rockDark),
            // the plaque and its year
            centered(0, 0.32, 0.18, w - 0.06, 9 * PY, 0.03, C.gold),
            ...textBoxes(label, 0, 0.32 + 7 * PY, 0.21, C.ink, 1, 0.02),
          ]),
          opts.occluder
        )
      )
      const shadow = new THREE.Mesh(opts.flatDisc(), opts.shadow)
      shadow.scale.set(w + 0.6, 1, 0.7)
      shadow.position.set(0.2, 0, 0.25)
      shadow.renderOrder = 1
      shadow.visible = this.reduceMotion // only once it stands
      group.add(shadow)
      group.position.set(at.x, this.reduceMotion ? 0 : -1.2, at.z)
      group.visible = this.reduceMotion
      scene.add(group)
      // a crack in the verge where the stone will come up
      const scar = new THREE.Mesh(
        boxesGeometry([
          centered(0, 0, 0, w, 0.01, 0.18, C.trunkDark),
          centered(-w / 4, 0, 0.1, w / 3, 0.01, 0.1, C.trunkDark),
        ]),
        opts.solid
      )
      scar.position.set(at.x, 0.005, at.z)
      scar.visible = !this.reduceMotion
      scene.add(scar)
      const solid = { kind: "circle" as const, x: at.x, z: at.z, r: this.reduceMotion ? 0.45 : 0 }
      opts.solids.push(solid)
      this.stones.push({ s, year, group, scar, at, risenAt: this.reduceMotion ? 0 : null, solid })
    })
  }

  /**
   * Raise the stones he has reached; returns the year to show while he is
   * on the stretch (null off it), and the stones that began rising now.
   */
  update(t: number, x: number, z: number): { year: number | null; rising: Vec2[] } {
    const rising: Vec2[] = []
    if (this.stones.length === 0) return { year: null, rising }
    const near = roadDistance(x, z) < ROAD.halfWidth + 3
    const s = loopS(x, z)
    for (const st of this.stones) {
      if (st.risenAt === null && near && s >= st.s - 3 && s < st.s + 20) {
        st.risenAt = t
        st.group.visible = true
        rising.push(st.at)
      }
      if (st.risenAt !== null && !this.reduceMotion) {
        // up through the ground in six steps
        const step = Math.min(6, Math.floor((t - st.risenAt) / 0.1))
        st.group.position.y = -1.2 + (step / 6) * 1.2
        st.group.children[1].visible = step === 6
        if (step === 6) {
          st.scar.visible = false
          st.solid.r = 0.45
        }
      }
    }
    const first = this.stones[0]
    const last = this.stones[this.stones.length - 1]
    if (!near || s < first.s - 6 || s > last.s + 10) return { year: null, rising }
    if (s <= first.s) return { year: first.year, rising }
    for (let i = 0; i < this.stones.length - 1; i++) {
      const a = this.stones[i]
      const b = this.stones[i + 1]
      if (s < b.s) return { year: Math.floor(a.year + ((b.year - a.year) * (s - a.s)) / (b.s - a.s)), rising }
    }
    return { year: last.year, rising }
  }
}
