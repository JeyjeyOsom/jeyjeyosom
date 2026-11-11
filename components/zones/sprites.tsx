// Shared pixel-sprite primitives for the World's Zones and, later, Play Mode.
// All sprites live on a 12x14 grid; rects are [x, y, w, h, fill].

export type Px = [number, number, number, number, string]

export const SKIN = "#FFC084"
export const HAIR = "#3E2A73"
export const SHIRT = "#FF7A3D"
export const SHORTS = "#2B1B57"
export const SHOE = "#FFC94D"

// Head, torso, shorts — common to every Runner pose.
// The Runner sprite is a placeholder until the custom Juan avatar replaces it.
export const RUNNER_SHARED: Px[] = [
  [4, 0, 3, 1, HAIR],
  [3, 1, 1, 1, HAIR],
  [4, 1, 3, 2, SKIN],
  [4, 3, 3, 4, SHIRT],
  [4, 7, 3, 1, SHORTS],
]

// Frame A: full stride — legs extended, arms swinging
export const RUNNER_FRAME_A: Px[] = [
  [7, 3, 1, 2, SKIN],
  [8, 4, 1, 1, SKIN],
  [3, 4, 1, 2, SKIN],
  [6, 8, 1, 2, SKIN],
  [7, 10, 1, 2, SKIN],
  [7, 12, 2, 1, SHOE],
  [4, 8, 1, 2, SKIN],
  [3, 10, 1, 2, SKIN],
  [2, 12, 2, 1, SHOE],
]

// Frame B: passing — legs under the body, one knee up
export const RUNNER_FRAME_B: Px[] = [
  [7, 4, 1, 2, SKIN],
  [3, 3, 1, 2, SKIN],
  [5, 8, 1, 4, SKIN],
  [5, 12, 2, 1, SHOE],
  [6, 8, 1, 1, SKIN],
  [7, 9, 1, 1, SKIN],
  [7, 10, 2, 1, SHOE],
]

// Standing at ease — arms at sides, both feet planted
export const RUNNER_STANDING: Px[] = [
  [3, 3, 1, 3, SKIN],
  [7, 3, 1, 3, SKIN],
  [4, 8, 1, 4, SKIN],
  [6, 8, 1, 4, SKIN],
  [3, 12, 2, 1, SHOE],
  [6, 12, 2, 1, SHOE],
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
