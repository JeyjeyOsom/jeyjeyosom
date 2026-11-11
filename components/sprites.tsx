// Shared pixel-sprite primitives for the World's Zones and Play Mode.
// The Runner lives on a 16x20 grid; rects are [x, y, w, h, fill].
// Modeled on Juan's race photo: black cap with shades on the brim,
// orange→sky-blue race singlet, white bib, black compression shorts,
// white shoes with a gold flash. The Runner keeps these colors in both
// themes — character identity, not a theme role.

export type Px = [number, number, number, number, string]

const CAP = "#23222E"
const SHADES = "#4A5468"
const SKIN = "#C68A4E"
const SHIRT_O = "#FF9A4A"
const SHIRT_B = "#7EC8E8"
const BIB = "#FFF4E3"
const SHORTS = "#17131F"
const SHOE = "#F2EFE8"
const ACCENT = "#FFC94D"

export const RUNNER_VIEWBOX = "0 0 16 20"

// Head, torso, bib, upper shorts — common to every Runner pose.
export const RUNNER_SHARED: Px[] = [
  [6, 0, 4, 1, CAP],
  [5, 1, 7, 1, CAP],
  [5, 2, 5, 1, CAP],
  [10, 2, 3, 1, CAP], // brim
  [9, 1, 2, 1, SHADES], // shades resting on the cap front
  [6, 3, 5, 1, SKIN], // face
  [6, 4, 4, 1, SKIN], // jaw
  [5, 5, 6, 1, SHIRT_O],
  [5, 6, 6, 1, SHIRT_O],
  [5, 7, 6, 1, SHIRT_O],
  [5, 8, 6, 1, SHIRT_B],
  [5, 9, 6, 1, SHIRT_B],
  [7, 7, 2, 2, BIB], // race bib
  [5, 10, 6, 1, SHORTS],
  [5, 11, 6, 1, SHORTS],
]

// Standing at ease — arms at sides, both feet planted
export const RUNNER_STANDING: Px[] = [
  [4, 5, 1, 2, SHIRT_B],
  [11, 5, 1, 2, SHIRT_B],
  [4, 7, 1, 3, SKIN],
  [11, 7, 1, 3, SKIN],
  [11, 9, 1, 1, CAP], // watch
  [5, 12, 2, 1, SHORTS],
  [9, 12, 2, 1, SHORTS],
  [5, 13, 2, 5, SKIN],
  [9, 13, 2, 5, SKIN],
  [4, 18, 3, 2, SHOE],
  [9, 18, 3, 2, SHOE],
  [6, 19, 1, 1, ACCENT],
  [11, 19, 1, 1, ACCENT],
]

// Frame A: full stride — legs extended, arms swinging
export const RUNNER_FRAME_A: Px[] = [
  // back arm swung back
  [4, 5, 1, 1, SHIRT_B],
  [3, 6, 1, 2, SKIN],
  [2, 7, 1, 2, SKIN],
  // front arm bent forward
  [11, 5, 1, 1, SHIRT_B],
  [12, 5, 1, 2, SKIN],
  [13, 6, 1, 1, SKIN],
  // front leg reaching forward
  [9, 12, 2, 1, SHORTS],
  [10, 13, 2, 2, SKIN],
  [11, 15, 2, 2, SKIN],
  [12, 17, 3, 2, SHOE],
  [14, 18, 1, 1, ACCENT],
  // back leg trailing, kicked up
  [5, 12, 2, 1, SHORTS],
  [4, 13, 2, 2, SKIN],
  [2, 14, 2, 2, SKIN],
  [0, 15, 3, 2, SHOE],
  [0, 16, 1, 1, ACCENT],
]

// Frame B: passing — support leg under the body, other knee up
export const RUNNER_FRAME_B: Px[] = [
  // arms tucked mid-swing
  [4, 5, 1, 1, SHIRT_B],
  [4, 6, 1, 3, SKIN],
  [11, 5, 1, 1, SHIRT_B],
  [11, 6, 1, 3, SKIN],
  [11, 8, 1, 1, CAP], // watch
  // support leg under body
  [6, 12, 2, 1, SHORTS],
  [6, 13, 2, 4, SKIN],
  [5, 17, 3, 2, SHOE],
  [7, 18, 1, 1, ACCENT],
  // lifted knee, foot tucked
  [9, 12, 2, 1, SHORTS],
  [10, 13, 2, 2, SKIN],
  [10, 15, 3, 2, SHOE],
  [12, 16, 1, 1, ACCENT],
]

// ---- Warm-up poses (Stats Screen idle routine) ----
// Local 16x20 coords; grounded feet sit at y19. Rendered in a 16x22 viewBox
// with a translate: grounded frames shift down 2, the airborne hop doesn't.

const shift = (rects: Px[], dx: number, dy: number): Px[] =>
  rects.map(([x, y, w, h, f]) => [x + dx, y + dy, w, h, f])

// Deep squat: body lowered 3, thighs horizontal, arms out for balance
export const WARMUP_SQUAT: Px[] = [
  ...shift(RUNNER_SHARED, 0, 3),
  [11, 8, 1, 1, SHIRT_B],
  [12, 8, 2, 1, SKIN], // arms reaching forward
  [5, 15, 6, 1, SKIN], // thighs
  [11, 15, 1, 1, SKIN], // knees forward
  [5, 16, 2, 2, SKIN],
  [9, 16, 2, 2, SKIN], // shins
  [4, 18, 3, 2, SHOE],
  [9, 18, 3, 2, SHOE],
  [6, 19, 1, 1, ACCENT],
  [11, 19, 1, 1, ACCENT],
]

// Walking lunge: front leg bent 90°, back knee dropping low
export const WARMUP_LUNGE: Px[] = [
  ...shift(RUNNER_SHARED, 0, 2),
  [4, 7, 1, 1, SHIRT_B],
  [4, 8, 1, 3, SKIN],
  [11, 7, 1, 1, SHIRT_B],
  [11, 8, 1, 3, SKIN],
  // front leg: thigh forward, shin vertical
  [9, 14, 3, 1, SKIN],
  [11, 15, 2, 3, SKIN],
  [10, 18, 3, 2, SHOE],
  [12, 19, 1, 1, ACCENT],
  // back leg: trailing down and back, toes planted
  [5, 14, 2, 1, SKIN],
  [3, 15, 2, 1, SKIN],
  [2, 16, 2, 1, SKIN],
  [0, 17, 3, 1, SHOE],
  [0, 18, 2, 2, SHOE],
  [0, 19, 1, 1, ACCENT],
]

// Pogo hop, airborne: arms out, feet tucked together under the body
export const WARMUP_HOP_AIR: Px[] = [
  ...RUNNER_SHARED,
  [4, 5, 1, 1, SHIRT_B],
  [11, 5, 1, 1, SHIRT_B],
  [3, 6, 1, 2, SKIN],
  [12, 6, 1, 2, SKIN], // arms out
  [5, 12, 2, 1, SHORTS],
  [9, 12, 2, 1, SHORTS],
  [6, 13, 2, 3, SKIN],
  [9, 13, 2, 3, SKIN], // legs slightly tucked
  [5, 16, 3, 2, SHOE],
  [9, 16, 3, 2, SHOE],
  [7, 17, 1, 1, ACCENT],
  [11, 17, 1, 1, ACCENT],
]

// Pogo hop, loaded: slight crouch, heels down, ready to spring
export const WARMUP_HOP_GROUND: Px[] = [
  ...shift(RUNNER_SHARED, 0, 1),
  [4, 6, 1, 1, SHIRT_B],
  [11, 6, 1, 1, SHIRT_B],
  [3, 7, 1, 2, SKIN],
  [12, 7, 1, 2, SKIN],
  [5, 13, 2, 1, SHORTS],
  [9, 13, 2, 1, SHORTS],
  [5, 14, 2, 4, SKIN],
  [9, 14, 2, 4, SKIN],
  [4, 18, 3, 2, SHOE],
  [9, 18, 3, 2, SHOE],
  [6, 19, 1, 1, ACCENT],
  [11, 19, 1, 1, ACCENT],
]

// Hamstring sweep: front leg extended, heel down toes up, arms sweeping low
export const WARMUP_SWEEP: Px[] = [
  ...shift(RUNNER_SHARED, 0, 1),
  // arms sweeping down toward the front foot
  [11, 6, 1, 1, SHIRT_B],
  [11, 7, 1, 2, SKIN],
  [12, 9, 1, 2, SKIN],
  // planted leg under the body, slight bend
  [6, 13, 2, 1, SHORTS],
  [6, 14, 2, 4, SKIN],
  [5, 18, 3, 2, SHOE],
  [7, 19, 1, 1, ACCENT],
  // extended leg: straight out, heel on the ground, toes up
  [9, 13, 2, 1, SHORTS],
  [10, 14, 2, 1, SKIN],
  [12, 15, 2, 1, SKIN],
  [13, 16, 2, 1, SKIN],
  [14, 17, 1, 3, SHOE],
  [13, 17, 1, 1, SHOE], // toe tipped up
]

export function PixelRects({ rects }: { rects: Px[] }) {
  return (
    <>
      {rects.map(([x, y, w, h, fill], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </>
  )
}

// The Runner's two-frame run cycle; pair with the .sprite-run class (or an
// ancestor carrying it) to animate.
export function RunCycleSprite({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox={RUNNER_VIEWBOX}
      className={`crisp ${className ?? ""}`}
      shapeRendering="crispEdges"
      style={style}
    >
      <g className="frame-a">
        <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_FRAME_A]} />
      </g>
      <g className="frame-b">
        <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_FRAME_B]} />
      </g>
    </svg>
  )
}
