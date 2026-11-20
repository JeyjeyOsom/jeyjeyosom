// Gulls over the beach (CONTEXT.md: Overworld): a few ride the sea breeze
// round the island, high over the sand and the shallows, swinging in and
// out over the waterline. Mostly they glide, wings held in a shallow V,
// with a few beats now and then; a shadow follows them over the land.
// They cry now and then, and leave when it rains.

import * as THREE from "three"
import { islandPoint, islandReach, mulberry32, type Vec2 } from "./level"
import { type Box, boxesGeometry, centered } from "./voxels"

const WHITE = 0xf4f2ee
const GREY = 0xc3c9d6
const LIGHT = 0xdfe3ea
const TIP = 0x3a3a48
const BEAK = 0xf2b33d

export type GullSfx = "gull"

export interface GullHost {
  occluder: THREE.Material
  shadow: THREE.Material
  flatDisc: () => THREE.BufferGeometry
  reduceMotion: boolean
  /** a cry from here (the host decides if it's near enough to hear) */
  sfx: (name: GullSfx, at: Vec2) => void
}

function body(): Box[] {
  return [
    centered(0, 0, 0, 0.34, 0.09, 0.1, WHITE),
    centered(0.2, 0.03, 0, 0.1, 0.09, 0.09, WHITE), // head
    centered(0.28, 0.04, 0, 0.06, 0.03, 0.03, BEAK),
    centered(-0.21, 0.02, 0, 0.08, 0.04, 0.12, GREY), // tail
  ]
}

/** Wings out in a shallow V (gliding), or raised high (mid-beat) */
function wings(up: boolean): Box[] {
  const boxes: Box[] = []
  for (const side of [-1, 1]) {
    const lift = up ? 2.4 : 1
    boxes.push(
      centered(0.01, 0.05 * lift, side * 0.16, 0.14, 0.03, 0.2, LIGHT),
      centered(-0.01, 0.08 * lift, side * (up ? 0.3 : 0.34), 0.11, 0.03, 0.17, GREY),
      centered(-0.02, 0.09 * lift, side * (up ? 0.39 : 0.45), 0.08, 0.03, 0.06, TIP)
    )
  }
  return boxes
}

interface Gull {
  group: THREE.Group
  glide: THREE.Mesh
  beat: THREE.Mesh
  shadow: THREE.Mesh
  /** where round the island, which way, and how fast (radians a second) */
  theta: number
  dir: number
  speed: number
  height: number
  phase: number
  nextBeats: number
  beatsUntil: number
  nextCry: number
}

export class Gulls {
  private readonly host: GullHost
  private readonly gulls: Gull[] = []
  private readonly rand = mulberry32(5150)
  /** 1 out, 0 gone (in the rain) */
  private present = 1

  constructor(scene: THREE.Scene, host: GullHost) {
    this.host = host
    const glideGeo = boxesGeometry([...body(), ...wings(false)])
    const beatGeo = boxesGeometry([...body(), ...wings(true)])
    const disc = host.flatDisc()
    for (let i = 0; i < 4; i++) {
      const group = new THREE.Group()
      const glide = new THREE.Mesh(glideGeo, host.occluder)
      const beat = new THREE.Mesh(beatGeo, host.occluder)
      beat.visible = false
      group.add(glide, beat)
      scene.add(group)
      const shadow = new THREE.Mesh(disc, host.shadow)
      shadow.scale.set(0.5, 1, 0.3)
      shadow.renderOrder = 1
      scene.add(shadow)
      this.gulls.push({
        group,
        glide,
        beat,
        shadow,
        theta: this.rand() * Math.PI * 2,
        dir: i % 2 ? 1 : -1,
        speed: 0.028 + this.rand() * 0.014,
        height: 3.4 + this.rand() * 1.4,
        phase: this.rand() * 10,
        nextBeats: this.rand() * 6,
        beatsUntil: 0,
        nextCry: 4 + this.rand() * 14,
      })
    }
  }

  /** For a pointer's caption */
  pointables(): Array<{ obj: THREE.Object3D; caption: () => string }> {
    return this.gulls.map((g) => ({ obj: g.group, caption: () => "A GULL, RIDING THE SEA BREEZE." }))
  }

  /** `rain` is how hard it's raining: they go as it comes */
  update(dt: number, t: number, rain: number) {
    const still = this.host.reduceMotion
    this.present = Math.max(0, Math.min(1, this.present + (rain > 0.3 ? -dt / 3 : dt / 6)))
    for (const g of this.gulls) {
      if (!still) g.theta += g.dir * g.speed * dt
      // swinging in over the sand and out over the shallows
      const reach = 0.97 + 0.07 * Math.sin(g.theta * 3 + g.phase)
      const p = islandPoint(g.theta, reach)
      const ahead = islandPoint(g.theta + g.dir * 0.01, 0.97 + 0.07 * Math.sin((g.theta + g.dir * 0.01) * 3 + g.phase))
      // gone in the rain: they climb away out of the view
      const climb = (1 - this.present) * 14
      const bob = still ? 0 : Math.round(Math.sin(t * 0.7 + g.phase) * 2) / 16
      g.group.position.set(p.x, g.height + bob + climb, p.z)
      g.group.rotation.y = Math.atan2(-(ahead.z - p.z), ahead.x - p.x)
      g.group.visible = this.present > 0.02

      // a few beats now and then between long glides
      if (!still && t > g.nextBeats) {
        g.beatsUntil = t + 0.6 + this.rand() * 0.6
        g.nextBeats = t + 5 + this.rand() * 8
      }
      const beating = !still && t < g.beatsUntil && Math.floor(t / 0.14) % 2 === 0
      g.glide.visible = !beating
      g.beat.visible = beating

      // a shadow on the land (none on the sea)
      g.shadow.position.set(p.x, 0, p.z)
      g.shadow.visible = g.group.visible && this.present > 0.9 && islandReach(p.x, p.z) < 0.99

      if (!still && this.present > 0.9 && t > g.nextCry) {
        g.nextCry = t + 9 + this.rand() * 18
        this.host.sfx("gull", p)
      }
    }
  }
}
