// Oncoming Traffic (CONTEXT.md): pixel cars and a motorcycle headed the
// other way, right to left. On the Title Screen (the default export) they
// are decoration in the far lane; Play Mode imports VEHICLE_SPECS and
// VehicleSprite to run them through the Runner's lane as jumpable hazards.
// Like the Runner, vehicle colors are identities, not theme roles.
// Headlight beams and lit lamps sit in .night-light groups: on under the
// dusk sky, off under dawn (index.css).

import type { CSSProperties } from "react"
import { type Px, PixelRects } from "./sprites"

const TIRE = "#17131F"
const HUB = "#8A8694"
const GLASS = "#A8D4E8"
const TRIM = "#23222E"
const LENS = "#D8C9A8"
const LIGHT = "#FFE3A3"
const BEAM_NEAR = "rgba(255,227,163,0.35)"
const BEAM_FAR = "rgba(255,227,163,0.16)"
const TAIL = "#E8452F"

// Car facing left on a 38x12 grid: beam space x0-11, car x12-37.
function carRects(body: string, roof: string): Px[] {
  return [
    [17, 1, 14, 3, roof], // cabin
    [18, 2, 4, 2, GLASS], // windshield
    [26, 2, 4, 2, GLASS], // rear window
    [12, 4, 25, 4, body],
    [12, 6, 2, 2, TRIM], // front bumper
    [35, 6, 2, 2, TRIM], // rear bumper
    [12, 4, 1, 2, LENS], // headlight lens
    [36, 4, 1, 2, TAIL], // taillight
    [15, 8, 4, 4, TIRE],
    [16, 9, 2, 2, HUB],
    [30, 8, 4, 4, TIRE],
    [31, 9, 2, 2, HUB],
  ]
}

const CAR_LIT: Px[] = [
  [12, 4, 1, 2, LIGHT],
  [5, 4, 7, 3, BEAM_NEAR],
  [0, 3, 5, 5, BEAM_FAR],
]

// Motorcycle and rider facing left on a 26x12 grid: beam x0-9, bike x10-25.
const JACKET = "#2B3A52"
const HELMET = "#B0423C"
const MOTO_RECTS: Px[] = [
  [10, 8, 4, 4, TIRE],
  [11, 9, 2, 2, HUB],
  [21, 8, 4, 4, TIRE],
  [22, 9, 2, 2, HUB],
  [12, 7, 11, 2, "#3E4A61"], // frame and tank
  [11, 6, 2, 2, TRIM], // front fork
  [12, 4, 1, 2, TRIM], // handlebar stem
  [10, 6, 1, 1, LENS], // headlight lens
  [24, 7, 1, 1, TAIL], // taillight
  [13, 2, 3, 2, HELMET], // helmet, tucked low
  [15, 3, 4, 3, JACKET], // torso leaning forward
  [13, 4, 2, 1, JACKET], // arms to the bars
  [18, 6, 2, 2, JACKET], // leg
  [19, 7, 2, 1, TRIM], // boot
]

const MOTO_LIT: Px[] = [
  [10, 6, 1, 1, LIGHT],
  [4, 5, 6, 3, BEAM_NEAR],
  [0, 4, 4, 4, BEAM_FAR],
]

export interface VehicleSpec {
  viewBox: string
  rects: Px[]
  lit: Px[]
  /** viewBox size in sprite units */
  w: number
  h: number
  /** where the vehicle body starts (units) — left of this is beam space,
      which must not count toward collision */
  bodyStart: number
}

export const VEHICLE_SPECS: VehicleSpec[] = [
  { viewBox: "0 0 38 12", rects: carRects("#B6453A", "#8E332C"), lit: CAR_LIT, w: 38, h: 12, bodyStart: 12 },
  { viewBox: "0 0 26 12", rects: MOTO_RECTS, lit: MOTO_LIT, w: 26, h: 12, bodyStart: 10 },
  { viewBox: "0 0 38 12", rects: carRects("#3F6E8C", "#2F5269"), lit: CAR_LIT, w: 38, h: 12, bodyStart: 12 },
]

export function VehicleSprite({ spec, className }: { spec: VehicleSpec; className?: string }) {
  return (
    <svg viewBox={spec.viewBox} className={`crisp ${className ?? ""}`} shapeRendering="crispEdges">
      <PixelRects rects={spec.rects} />
      <g className="night-light">
        <PixelRects rects={spec.lit} />
      </g>
    </svg>
  )
}

function Vehicle({
  spec,
  sizeClass,
  delay,
}: {
  spec: VehicleSpec
  sizeClass: string
  delay: string
}) {
  return (
    <div
      className={`traffic-vehicle ${sizeClass}`}
      style={{ "--pass-delay": delay } as CSSProperties}
    >
      <VehicleSprite spec={spec} className="h-full w-auto" />
    </div>
  )
}

export default function Traffic() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[9vh] pointer-events-none">
      {/* Sized to the Runner's art grid (~same px per sprite unit), so a
          car's roof reaches about two-thirds of his height */}
      <Vehicle spec={VEHICLE_SPECS[0]} sizeClass="bottom-[56%] h-[6.5vh]" delay="0s" />
      <Vehicle spec={VEHICLE_SPECS[1]} sizeClass="bottom-[56%] h-[5.5vh]" delay="-3.2s" />
      <Vehicle spec={VEHICLE_SPECS[2]} sizeClass="bottom-[56%] h-[6.5vh]" delay="-6.4s" />
    </div>
  )
}
