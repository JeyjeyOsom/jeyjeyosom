// Shared pixel-sprite primitives for the World's Zones and Play Mode.
// The Runner lives on a 16x20 grid; rects are [x, y, w, h, fill].
// Modeled on Juan's race photo: black cap with shades on the brim,
// orange→sky-blue race singlet, white bib, black compression shorts,
// white shoes with a gold flash. The Runner keeps these colors in both
// themes — character identity, not a theme role.

export type Px = [number, number, number, number, string]

const CAP = "#23222E"
const SHADES = "#4A5468"
export const LAMP = "#6E7892" // headlamp housing; HEADLAMP_LIT is keyed to it
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
  [11, 1, 1, 1, LAMP], // headlamp clipped to the cap (lit via HEADLAMP_LIT)
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

// A Gel — the World's collectible energy gel, drawn as a small gold packet
// with a tear cap and a shine, on a 6x8 grid (CONTEXT.md: Gel).
export const GEL: Px[] = [
  [2, 0, 2, 1, "#9A6A0D"], // tear cap
  [1, 1, 4, 1, "#C98F1B"], // neck
  [0, 2, 6, 6, "#FFC94D"], // packet body
  [4, 3, 1, 4, "#E0A82E"], // right shade
  [0, 7, 6, 1, "#E0A82E"], // bottom shade
  [1, 3, 1, 2, "#FFF4E3"], // shine
]

// The headlamp switched on: a bright lamp pixel plus a short beam ahead of
// the Runner. Overlay it on any pose inside a .night-light group — the dawn
// sky switches it off (index.css), the dusk sky leaves it lit.
export const HEADLAMP_LIT: Px[] = [
  [11, 1, 1, 1, "#FFE3A3"],
  [12, 0, 2, 3, "rgba(255,227,163,0.45)"],
  [14, 0, 2, 4, "rgba(255,227,163,0.22)"],
]

// ---- Close-Up bust (CONTEXT.md: Close-Up) ----
// The Runner's detailed 48x64 portrait, drawn from the same race photo as
// the small sprite: cap with shades on the brim and the headlamp, earbud,
// orange→blue singlet, bib 42087, arm blinker. Identity colors shared with
// the Runner; extra tones are shading only. Authored as row segments
// ([x0, x1, color], inclusive) because 300+ raw rects would be unreadable.

const CAP_HI = "#34323F"
const SHADE_FRAME = "#5E6880"
const SHADE_LENS = "#39415A"
const SHADE_GLINT = "#A8B2C8"
const LAMP_LENS = "#B23A3A"
const SKIN_SH = "#A4703C"
const SKIN_HI = "#D69B5F"
const BROW = "#3A2A1E"
const MOUTH = "#6B3A26"
const SHIRT_O_SH = "#E07E35"
const SHIRT_B_SH = "#5FA8CC"
const BIB_SH = "#E3D9C6"
const INK = "#2E3442"
const BLINKER = "#E8483F"

type BustSeg = [number, number, string]
type BustRow = [number, ...BustSeg[]]

// prettier-ignore
const BUST_ROWS: BustRow[] = [
  [1,  [19,28,CAP]],
  [2,  [16,31,CAP]],
  [3,  [15,32,CAP], [17,21,CAP_HI]],
  [4,  [14,33,CAP], [16,20,CAP_HI]],
  [5,  [13,34,CAP], [15,18,CAP_HI]],
  [6,  [13,34,CAP], [15,17,CAP_HI]],
  [7,  [12,35,CAP], [14,16,CAP_HI], [22,25,BIB]],
  [8,  [12,35,CAP]],
  [9,  [12,35,CAP], [20,27,LAMP]],
  [10, [12,35,CAP], [20,20,LAMP], [21,26,LAMP_LENS], [27,27,LAMP]],
  [11, [12,35,CAP], [20,27,LAMP]],
  [12, [12,35,CAP], [14,14,SHADE_FRAME], [15,21,SHADE_LENS], [16,16,SHADE_GLINT], [22,25,SHADE_FRAME], [26,32,SHADE_LENS], [27,27,SHADE_GLINT], [33,33,SHADE_FRAME]],
  [13, [12,35,CAP], [14,14,SHADE_FRAME], [15,21,SHADE_LENS], [26,32,SHADE_LENS], [33,33,SHADE_FRAME]],
  [14, [10,37,CAP]],
  [15, [11,36,CAP]],
  [16, [15,32,SKIN_SH]],
  [17, [15,32,SKIN], [17,20,SKIN_HI]],
  [18, [14,33,SKIN], [17,19,SKIN_HI]],
  [19, [12,35,SKIN], [17,18,SKIN_HI]],
  [20, [12,35,SKIN], [17,21,BROW], [26,30,BROW], [34,35,BIB]],
  [21, [12,35,SKIN], [34,35,BIB]],
  [22, [13,34,SKIN], [17,17,BIB], [18,19,INK], [20,20,BIB], [27,27,BIB], [28,29,INK], [30,30,BIB]],
  [23, [14,33,SKIN], [18,19,INK], [28,29,INK]],
  [24, [14,33,SKIN], [23,24,SKIN_SH], [33,33,SKIN_SH]],
  [25, [14,33,SKIN], [15,16,SKIN_HI], [23,24,SKIN_SH], [32,33,SKIN_SH]],
  [26, [14,33,SKIN], [32,33,SKIN_SH]],
  [27, [14,33,SKIN], [20,27,MOUTH], [32,33,SKIN_SH]],
  [28, [15,32,SKIN], [19,19,MOUTH], [20,27,BIB], [28,28,MOUTH]],
  [29, [15,32,SKIN], [20,27,MOUTH]],
  [30, [16,31,SKIN]],
  [31, [17,30,SKIN_SH]],
  [32, [19,28,SKIN_SH]],
  [33, [19,28,SKIN]],
  [34, [19,28,SKIN]],
  [35, [15,18,SHIRT_O], [19,28,SKIN], [29,32,SHIRT_O]],
  [36, [13,18,SHIRT_O], [19,28,SKIN], [29,34,SHIRT_O]],
  [37, [9,18,SHIRT_O],  [19,28,SKIN], [29,38,SHIRT_O]],
  [38, [6,19,SHIRT_O],  [20,27,SKIN], [28,41,SHIRT_O]],
  [39, [4,19,SHIRT_O],  [20,27,SHIRT_O_SH], [28,43,SHIRT_O]],
  [40, [3,44,SHIRT_O]],
  [41, [2,45,SHIRT_O]],
  [42, [2,2,SHIRT_O_SH], [3,44,SHIRT_O], [45,45,SHIRT_O_SH]],
  [43, [2,2,SHIRT_O_SH], [3,8,SHIRT_O], [9,9,SHIRT_O_SH], [10,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,44,SHIRT_O], [45,45,SHIRT_O_SH]],
  [44, [2,8,SKIN], [9,9,SHIRT_O_SH], [10,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,45,SKIN]],
  [45, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_O_SH], [10,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [46, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_O_SH], [10,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,45,BIB]],
  [47, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_O_SH], [10,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,40,BIB], [41,43,BLINKER], [44,45,BIB]],
  [48, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_O_SH], [10,13,SHIRT_O], [14,17,SHIRT_B], [18,21,SHIRT_O], [22,25,SHIRT_B], [26,29,SHIRT_O], [30,33,SHIRT_B], [34,37,SHIRT_O], [38,38,SHIRT_O_SH], [39,45,BIB]],
  [49, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,11,SHIRT_B], [12,13,SHIRT_O], [14,19,SHIRT_B], [20,21,SHIRT_O], [22,27,SHIRT_B], [28,29,SHIRT_O], [30,35,SHIRT_B], [36,37,SHIRT_O], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [50, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,37,SHIRT_B], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [51, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,37,SHIRT_B], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [52, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,12,SHIRT_B], [13,34,BIB], [35,37,SHIRT_B], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [62, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,12,SHIRT_B], [13,34,BIB_SH], [35,37,SHIRT_B], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
  [63, [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,37,SHIRT_B], [38,38,SHIRT_B_SH], [39,39,SKIN_SH], [40,45,SKIN]],
]

// Bib body rows 53-61 share one shape; the number overlays them.
const BUST_BIB_ROW: BustSeg[] = [
  [2,7,SKIN], [8,8,SKIN_SH], [9,9,SHIRT_B_SH], [10,12,SHIRT_B],
  [13,33,BIB], [34,34,BIB_SH], [35,37,SHIRT_B], [38,38,SHIRT_B_SH],
  [39,39,SKIN_SH], [40,45,SKIN],
]

// Bib number 42087 in a 3x5 pixel font, rows 55-59.
const BUST_DIGITS: Record<string, string[]> = {
  "4": ["1.1", "1.1", "111", "..1", "..1"],
  "2": ["111", "..1", "111", "1..", "111"],
  "0": ["111", "1.1", "1.1", "1.1", "111"],
  "8": ["111", "1.1", "111", "1.1", "111"],
  "7": ["111", "..1", "..1", "..1", "..1"],
}

function compileBust(): Px[] {
  const rects: Px[] = []
  const rows: BustRow[] = [
    ...BUST_ROWS,
    ...Array.from({ length: 9 }, (_, i): BustRow => [53 + i, ...BUST_BIB_ROW]),
  ]
  for (const [y, ...segs] of rows)
    for (const [x0, x1, fill] of segs) rects.push([x0, y, x1 - x0 + 1, 1, fill])
  Array.from("42087").forEach((d, i) =>
    BUST_DIGITS[d].forEach((row, dy) => {
      for (let dx = 0; dx < 3; dx++)
        if (row[dx] === "1") rects.push([15 + i * 4 + dx, 55 + dy, 1, 1, INK])
    })
  )
  return rects
}

export const BUST_VIEWBOX = "0 0 48 64"
export const RUNNER_BUST: Px[] = compileBust()

// The bust's headlamp switched on: bright lens plus a soft halo, under the
// same .night-light contract as HEADLAMP_LIT (lit at Dusk, off at Dawn).
export const BUST_LAMP_LIT: Px[] = [
  [21, 10, 6, 1, "#FFE3A3"],
  [19, 8, 10, 4, "rgba(255,227,163,0.25)"],
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
      <g className="night-light">
        <PixelRects rects={HEADLAMP_LIT} />
      </g>
    </svg>
  )
}
