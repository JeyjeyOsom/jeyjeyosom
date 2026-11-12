import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { type Px, PixelRects, RunCycleSprite } from "../sprites"
import { Ground } from "../Track"
import Traffic from "../Traffic"
import { usePlayMode } from "../play/PlayModeContext"
import { useTheme, CYCLE_MS, CYCLE_MID } from "../ThemeContext"

// Scene scenery per theme: the sky gradient and the landforms under it —
// Juan's actual training view: a big dark mountain behind hazy foothills,
// a dense palm treeline, and a cow pasture beside the track. (The sun is
// the same pixel sun at both ends of the day; stars belong to dusk only.)
const SCENES = {
  dusk: {
    gradient: `linear-gradient(to bottom,
      #7E5E74 0%, #7E5E74 26%,
      #8A6579 26%, #8A6579 40%,
      #966D7E 40%, #966D7E 52%,
      #A37684 52%, #A37684 61%,
      #B08089 61%, #B08089 69%,
      #BD8B8E 69%, #BD8B8E 77%,
      #C79792 77%, #C79792 85%,
      #D0A396 85%, #D0A396 100%)`,
    ridgeFar: "#4D3A59",
    ridgeMid: "#6E5675",
    canopy: "#1D2F21",
    grass: "#44573B",
    grassDark: "#39492F",
    grassLight: "#54684A",
    stars: true,
  },
  dawn: {
    gradient: `linear-gradient(to bottom,
      #AFC8E8 0%, #AFC8E8 26%,
      #C3D4EC 26%, #C3D4EC 40%,
      #DCE3F2 40%, #DCE3F2 52%,
      #EFDFE4 52%, #EFDFE4 61%,
      #F6C8C0 61%, #F6C8C0 69%,
      #F9B98F 69%, #F9B98F 77%,
      #FBCF8F 77%, #FBCF8F 85%,
      #FDE7B0 85%, #FDE7B0 100%)`,
    ridgeFar: "#71809F",
    ridgeMid: "#9DAECB",
    canopy: "#4E6B58",
    grass: "#7E9468",
    grassDark: "#6D8158",
    grassLight: "#90A67B",
    stars: false,
  },
} as const

// The skies the World passes through while cycling — never resting states.
// Dusk reaches dawn through NIGHT; dawn reaches dusk through NOON. The
// gradients share the dusk/dawn stop structure exactly so framer-motion can
// interpolate between them.
type SceneColors = {
  gradient: string
  ridgeFar: string
  ridgeMid: string
  canopy: string
  grass: string
  grassDark: string
  grassLight: string
}

const NIGHT: SceneColors = {
  gradient: `linear-gradient(to bottom,
    #0D0726 0%, #0D0726 26%,
    #110A2E 26%, #110A2E 40%,
    #150E36 40%, #150E36 52%,
    #1A123F 52%, #1A123F 61%,
    #201749 61%, #201749 69%,
    #271D54 69%, #271D54 77%,
    #2F245F 77%, #2F245F 85%,
    #382C6B 85%, #382C6B 100%)`,
  ridgeFar: "#1C1535",
  ridgeMid: "#2A2047",
  canopy: "#0E1811",
  grass: "#222D1C",
  grassDark: "#1B2516",
  grassLight: "#2C3A24",
}

const NOON: SceneColors = {
  gradient: `linear-gradient(to bottom,
    #4E9BE4 0%, #4E9BE4 26%,
    #63AAEA 26%, #63AAEA 40%,
    #79B9EF 40%, #79B9EF 52%,
    #90C7F3 52%, #90C7F3 61%,
    #A8D4F6 61%, #A8D4F6 69%,
    #BFE0F8 69%, #BFE0F8 77%,
    #D5EAFA 77%, #D5EAFA 85%,
    #E8F3FC 85%, #E8F3FC 100%)`,
  ridgeFar: "#5A7FA6",
  ridgeMid: "#8AA9C9",
  canopy: "#2F5C3E",
  grass: "#61904F",
  grassDark: "#527C42",
  grassLight: "#74A661",
}

const CYCLE_PATH: Record<
  "dusk-to-dawn" | "dawn-to-dusk",
  [SceneColors, SceneColors, SceneColors]
> = {
  "dusk-to-dawn": [SCENES.dusk, NIGHT, SCENES.dawn],
  "dawn-to-dusk": [SCENES.dawn, NOON, SCENES.dusk],
}

const CYCLE_S = CYCLE_MS / 1000

// Pixel sun: row widths of a rasterized circle, 15 units across
const SUN_ROWS: Px[] = [
  [5, 0, 5, 1, "#FFE3A3"],
  [3, 1, 9, 1, "#FFE3A3"],
  [2, 2, 11, 1, "#FFE3A3"],
  [1, 3, 13, 1, "#FFC94D"],
  [1, 4, 13, 1, "#FFC94D"],
  [0, 5, 15, 1, "#FFC94D"],
  [0, 6, 15, 1, "#FFC94D"],
  [0, 7, 15, 1, "#FFC94D"],
  [0, 8, 15, 1, "#FFC94D"],
  [0, 9, 15, 1, "#FFA05C"],
  [0, 10, 15, 1, "#FFA05C"],
  [1, 11, 13, 1, "#FFA05C"],
  [1, 12, 13, 1, "#FF7A3D"],
  [2, 13, 11, 1, "#FF7A3D"],
  [3, 14, 9, 1, "#FF7A3D"],
]

// The pasture herd, forever grazing. Each cow is a two-frame cycle
// (.sprite-graze): frame A is its dominant pose, frame B the brief
// counter-pose — the white cow faces the Runner and dips to chew, the tan
// one works the grass and lifts its head now and then.
const COW_FRONT: Px[] = [
  [0, 1, 2, 2, "#D9CCB8"], // left ear
  [8, 1, 2, 2, "#D9CCB8"], // right ear
  [3, 0, 4, 4, "#F2EADB"], // head
  [3, 1, 1, 1, "#4A4038"], // eyes
  [6, 1, 1, 1, "#4A4038"],
  [3, 3, 4, 1, "#C9A5A0"], // muzzle
  [1, 4, 8, 4, "#F2EADB"], // shoulders
  [1, 7, 8, 1, "#D9CCB8"], // belly shade
  [2, 8, 2, 3, "#E4D9C6"], // legs
  [6, 8, 2, 3, "#E4D9C6"],
  [2, 11, 2, 1, "#8A7A66"], // hooves
  [6, 11, 2, 1, "#8A7A66"],
]

// Head cluster dropped one pixel: mid-chew
const COW_FRONT_CHEW: Px[] = [
  [0, 2, 2, 2, "#D9CCB8"],
  [8, 2, 2, 2, "#D9CCB8"],
  [3, 1, 4, 4, "#F2EADB"],
  [3, 2, 1, 1, "#4A4038"],
  [6, 2, 1, 1, "#4A4038"],
  [3, 4, 4, 1, "#C9A5A0"],
  [1, 4, 8, 4, "#F2EADB"],
  [1, 7, 8, 1, "#D9CCB8"],
  [2, 8, 2, 3, "#E4D9C6"],
  [6, 8, 2, 3, "#E4D9C6"],
  [2, 11, 2, 1, "#8A7A66"],
  [6, 11, 2, 1, "#8A7A66"],
]

// Tan cow on a 14x12 grid (two head rows above the body for the lift)
const COW_GRAZE_BODY: Px[] = [
  [0, 2, 1, 3, "#D9C8B2"],  // tail
  [1, 2, 10, 5, "#E8DAC5"], // body
  [1, 6, 10, 1, "#CDBAA0"], // belly shade
  [2, 7, 2, 4, "#DCCBB4"],  // legs
  [5, 7, 1, 4, "#DCCBB4"],
  [8, 7, 2, 4, "#DCCBB4"],
  [2, 11, 2, 1, "#8A7A66"], // hooves
  [8, 11, 2, 1, "#8A7A66"],
]

const COW_GRAZE_DOWN: Px[] = [
  ...COW_GRAZE_BODY,
  [10, 3, 2, 3, "#E8DAC5"], // neck sloping down
  [11, 5, 3, 4, "#E0D0B8"], // head lowered to the grass
  [11, 5, 1, 1, "#4A4038"], // eye
  [12, 9, 2, 1, "#B99F91"], // muzzle
]

const COW_GRAZE_UP: Px[] = [
  ...COW_GRAZE_BODY,
  [10, 0, 2, 4, "#E8DAC5"], // neck raised
  [11, 0, 3, 2, "#E0D0B8"], // head up, looking out
  [12, 0, 1, 1, "#4A4038"], // eye
  [13, 1, 1, 1, "#B99F91"], // muzzle
]

// Crown-center x positions of the palms poking above the canopy
const PALMS = [34, 92, 150, 216, 288]

// One pixel palm silhouette: trunk down into the canopy, fronds fanning
// out. The fronds are separate from the trunk so the wind can move them
// (.palm-fronds, index.css).
const palmTrunk = (x: number): [number, number, number, number] => [x, 6, 2, 12]
function palmFronds(x: number): Array<[number, number, number, number]> {
  return [
    [x - 6, 4, 5, 2],
    [x + 3, 4, 5, 2],
    [x - 4, 2, 4, 2],
    [x + 2, 2, 4, 2],
    [x - 1, 1, 4, 2],
    [x - 7, 6, 2, 2],
    [x + 7, 6, 2, 2],
  ]
}

// Pasture texture: darker patches and lighter tufts over the base grass
const GRASS_DARK: Array<[number, number, number, number]> = [
  [14, 6, 22, 3], [60, 14, 28, 4], [120, 4, 18, 3],
  [168, 10, 26, 4], [228, 6, 20, 3], [282, 13, 24, 4],
]
const GRASS_LIGHT: Array<[number, number, number, number]> = [
  [40, 3, 10, 2], [100, 9, 12, 2], [150, 16, 10, 2],
  [210, 3, 12, 2], [258, 9, 10, 2], [300, 5, 8, 2],
]

const STARS: Array<[number, number, number]> = [
  [6, 8, 0], [14, 22, 1], [23, 11, 2], [31, 30, 0], [38, 7, 1],
  [46, 18, 2], [55, 26, 0], [63, 9, 1], [71, 21, 2], [79, 13, 0],
  [86, 28, 1], [92, 6, 2], [10, 34, 1], [50, 36, 0], [84, 38, 2],
]

export default function TitleScreen() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { playing, enter } = usePlayMode()
  const { theme, cycle } = useTheme()
  const scene = SCENES[theme]

  // While a cycle is in flight, every scene color follows a three-stop
  // keyframe path (from sky → NIGHT or NOON → to sky); at rest it holds the
  // current scene's value. `cycle` is never set under reduced motion.
  const path = cycle ? CYCLE_PATH[cycle] : null
  const skyColor = (key: keyof SceneColors) =>
    path ? path.map((s) => s[key]) : scene[key]
  const skyTransition = path
    ? { duration: CYCLE_S, times: [0, CYCLE_MID, 1], ease: "easeInOut" as const }
    : { duration: 0 }

  // The sun rests where the sky says it should: low on the right at dusk
  // (where it sets), low on the left at dawn (where it rose). Dusk→dawn it
  // sets below the right horizon, crosses unseen during the night, and
  // rises on the left; dawn→dusk it arcs high across the noon sky from
  // left to right. Horizontal position combines `left` (% of the span
  // container) with x (% of the sun's own width) so both anchors land
  // exactly at every viewport width.
  const SUN_REST = {
    dusk: { left: "100%", x: "-100%", y: "0vh" },
    dawn: { left: "0%", x: "0%", y: "0vh" },
  }
  const sunAnimate = !cycle
    ? SUN_REST[theme]
    : cycle === "dusk-to-dawn"
      ? {
          left: ["100%", "100%", "0%", "0%"],
          x: ["-100%", "-100%", "0%", "0%"],
          y: ["0vh", "60vh", "60vh", "0vh"],
        }
      : {
          left: ["0%", "100%"],
          x: ["0%", "-100%"],
          y: ["0vh", "-30vh", "0vh"],
        }
  const sunTransition = !cycle
    ? { duration: 0 }
    : cycle === "dusk-to-dawn"
      ? { duration: CYCLE_S, times: [0, 0.38, 0.62, 1], ease: "easeInOut" as const }
      : {
          left: { duration: CYCLE_S, ease: "easeInOut" as const },
          x: { duration: CYCLE_S, ease: "easeInOut" as const },
          y: {
            duration: CYCLE_S,
            times: [0, 0.5, 1],
            ease: ["easeOut", "easeIn"] as const,
          },
        }

  // Stars hold through the night pass and fade with the sunrise; on the way
  // to dusk they only appear once the sky has darkened.
  const starsAnimate = !cycle
    ? { opacity: 1 }
    : cycle === "dusk-to-dawn"
      ? { opacity: [1, 1, 0] }
      : { opacity: [0, 0, 1] }
  const starsTransition = !cycle
    ? { duration: 0 }
    : cycle === "dusk-to-dawn"
      ? { duration: CYCLE_S, times: [0, 0.55, 1] }
      : { duration: CYCLE_S, times: [0, 0.68, 1] }

  // Press Start switches to Play Mode where a keyboard is likely present;
  // touch devices stay in Browse Mode and follow the anchor instead.
  const handlePressStart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: fine)").matches) {
      e.preventDefault()
      enter()
    }
  }
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yFar = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 55])
  const yTree = useTransform(scrollYProgress, [0, 1], [0, 28])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70])
  const fadeContent = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <motion.section
      ref={ref}
      id="title"
      aria-label="Title screen"
      className="scanlines relative min-h-screen overflow-hidden flex flex-col"
      initial={false}
      animate={{ background: skyColor("gradient") }}
      transition={skyTransition}
    >
      {/* Stars — kept mounted through a cycle so they can fade in or out */}
      {(scene.stars || cycle) && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          initial={false}
          animate={starsAnimate}
          transition={starsTransition}
        >
          {STARS.map(([left, top, phase], i) => (
            <span
              key={i}
              className="animate-twinkle absolute w-[3px] h-[3px] bg-[#FFF4E3]"
              style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${phase * 0.8}s` }}
            />
          ))}
        </motion.div>
      )}

      {/* A shooting star crosses during the night pass */}
      {cycle === "dusk-to-dawn" && (
        <motion.span
          aria-hidden="true"
          className="absolute left-[62%] top-[10%] w-[3px] h-[3px] bg-[#FFF4E3] pointer-events-none"
          style={{
            boxShadow:
              "3px -2px 0 0 rgba(255,244,227,0.6), 6px -4px 0 0 rgba(255,244,227,0.3)",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -180, y: 100, opacity: [0, 1, 1, 0] }}
          transition={{ delay: CYCLE_S * 0.4, duration: 0.75, ease: "easeOut" }}
        />
      )}

      {/* Sun — right of the ridge at dusk, left of it at dawn; the outer div
          is the full span it travels, the inner div is the sun itself */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : ySun }}
        className="absolute left-[10%] right-[10%] md:left-[14%] md:right-[14%] bottom-[23vh] pointer-events-none"
      >
        <motion.div
          className="absolute bottom-0 w-28 md:w-44"
          initial={false}
          animate={sunAnimate}
          transition={sunTransition}
        >
          <svg viewBox="0 0 15 15" className="crisp w-full" shapeRendering="crispEdges">
            <PixelRects rects={SUN_ROWS} />
          </svg>
        </motion.div>
      </motion.div>

      {/* Far ridge — the big mountain, peak left of center */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : yFar }}
        className="absolute bottom-[26vh] left-0 right-0 pointer-events-none"
      >
        <svg viewBox="0 0 320 48" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[18vh]">
          <motion.path
            initial={false}
            animate={{ fill: skyColor("ridgeFar") }}
            transition={skyTransition}
            d="M0,48 V36 h12 v-4 h10 v-3 h12 v-4 h10 v3 h10 v-7 h10 v-5 h10 v-4 h8 v-5 h8 v-3 h8 v-2 h10 v3 h8 v-4 h10 v2 h8 v5 h10 v4 h8 v-2 h10 v6 h10 v3 h12 v5 h10 v-3 h12 v6 h12 v3 h12 v4 h14 v-2 h12 v4 h12 v-3 h10 v4 h12 v-2 h10 v2 h20 V48 Z"
          />
        </svg>
      </motion.div>

      {/* Mid ridge — hazy foothills at the mountain's base */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : yMid }}
        className="absolute bottom-[24vh] left-0 right-0 pointer-events-none"
      >
        <svg viewBox="0 0 320 40" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[13vh]">
          <motion.path
            initial={false}
            animate={{ fill: skyColor("ridgeMid") }}
            transition={skyTransition}
            d="M0,40 V26 h16 v-4 h18 v-3 h16 v5 h20 v-6 h18 v-3 h16 v4 h22 v5 h18 v-7 h20 v-3 h18 v6 h22 v-4 h20 v6 h18 v-5 h20 v4 h18 v3 h40 V40 Z"
          />
        </svg>
      </motion.div>

      {/* Treeline — dense canopy with palms poking above it */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : yTree }}
        className="absolute bottom-[17vh] left-0 right-0 pointer-events-none"
      >
        <svg viewBox="0 0 320 36" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[13vh]">
          <motion.g
            initial={false}
            animate={{ fill: skyColor("canopy") }}
            transition={skyTransition}
          >
            {PALMS.map((px, pi) => (
              <g key={px}>
                <rect
                  x={palmTrunk(px)[0]}
                  y={palmTrunk(px)[1]}
                  width={palmTrunk(px)[2]}
                  height={palmTrunk(px)[3]}
                />
                <g
                  className="palm-fronds"
                  style={{ animationDelay: `${pi * -0.9}s` }}
                >
                  {palmFronds(px).map(([x, y, w, h], i) => (
                    <rect key={`${px}-${i}`} x={x} y={y} width={w} height={h} />
                  ))}
                </g>
              </g>
            ))}
            <path d="M0,36 V16 h10 v-3 h12 v2 h10 v-4 h14 v3 h12 v-2 h10 v4 h12 v-5 h12 v3 h10 v-2 h14 v4 h12 v-3 h10 v2 h12 v-4 h12 v3 h10 v-2 h14 v4 h10 v-3 h12 v2 h12 v-4 h10 v3 h14 v-2 h10 v4 h12 v-3 h12 v2 h10 v-2 h32 V36 Z" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Pasture — the field between the treeline and the track */}
      <div aria-hidden="true" className="absolute bottom-[9vh] left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 320 24" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[9vh]">
          <motion.rect
            x="0" y="0" width="320" height="24"
            initial={false}
            animate={{ fill: skyColor("grass") }}
            transition={skyTransition}
          />
          <motion.g
            initial={false}
            animate={{ fill: skyColor("grassDark") }}
            transition={skyTransition}
          >
            {GRASS_DARK.map(([x, y, w, h], i) => (
              <rect key={`d${i}`} x={x} y={y} width={w} height={h} />
            ))}
          </motion.g>
          <motion.g
            initial={false}
            animate={{ fill: skyColor("grassLight") }}
            transition={skyTransition}
          >
            <rect x="0" y="0" width="320" height="2" />
            {GRASS_LIGHT.map(([x, y, w, h], i) => (
              <rect key={`l${i}`} x={x} y={y} width={w} height={h} />
            ))}
          </motion.g>
        </svg>
      </div>

      {/* The herd */}
      <div aria-hidden="true" className="sprite-graze absolute bottom-[13vh] left-[40%] w-7 md:w-9 pointer-events-none">
        <svg viewBox="0 0 10 12" className="crisp w-full" shapeRendering="crispEdges">
          <g className="frame-a"><PixelRects rects={COW_FRONT} /></g>
          <g className="frame-b"><PixelRects rects={COW_FRONT_CHEW} /></g>
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="sprite-graze absolute bottom-[11.5vh] left-[58%] w-11 md:w-14 pointer-events-none"
        style={{ "--graze-delay": "-1.4s" } as React.CSSProperties}
      >
        <svg viewBox="0 0 14 12" className="crisp w-full" shapeRendering="crispEdges">
          <g className="frame-a"><PixelRects rects={COW_GRAZE_DOWN} /></g>
          <g className="frame-b"><PixelRects rects={COW_GRAZE_UP} /></g>
        </svg>
      </div>

      {/* Ground: the track the Runner lives on */}
      <Ground className="absolute bottom-0 left-0 right-0 h-[9vh]" />

      {/* The Runner mid-stride on the track (race-day avatar, see sprites.tsx).
          Hidden while Play Mode's own Runner is on the track. */}
      {!playing && (
        <div aria-hidden="true" className="sprite-run absolute bottom-[8.5vh] left-[12%] md:left-[18%] w-12 md:w-16 pointer-events-none">
          <RunCycleSprite className="w-full" />
        </div>
      )}

      {/* Oncoming traffic in the far lane — drawn over the Runner so the
          road reads nearer to the viewer than the roadside he runs on */}
      <Traffic />

      {/* HUD status line */}
      <div className="relative z-10 flex items-center gap-2 px-6 md:px-10 pt-24">
        <span className="animate-blink inline-block w-2 h-2 bg-gold-400" />
        <span className="font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-300">
          STATUS: OPEN TO WORK
        </span>
      </div>

      {/* Title content */}
      <motion.div
        style={{ y: reduceMotion ? 0 : yContent, opacity: reduceMotion ? 1 : fadeContent }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-[22vh]"
      >
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-pixel font-bold text-5xl md:text-7xl lg:text-8xl tracking-wide text-cream-100 pixel-shadow-text"
        >
          JEYJEYOSOM
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-body text-lg md:text-xl text-cream-100"
        >
          Juan Dejon · Full Stack Developer
        </motion.p>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-1 font-body text-base md:text-lg text-mist-300"
        >
          Builds for the internet. Runs on it.
        </motion.p>

        {/* Game menu */}
        <motion.nav
          aria-label="Title screen menu"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="#about"
            onClick={handlePressStart}
            className="animate-blink font-arcade text-xs md:text-sm text-gold-400 hover:text-gold-300 focus-ring"
          >
            ▸ PRESS START
          </a>
          <a
            href="#projects"
            className="group font-pixel text-lg text-cream-100/80 hover:text-cream-100 focus-ring"
          >
            <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="group font-pixel text-lg text-cream-100/80 hover:text-cream-100 focus-ring"
          >
            <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>
            GET IN TOUCH
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Juan_Dejon_Resume.pdf`}
            download="Juan_Dejon_Resume.pdf"
            className="group font-pixel text-lg text-cream-100/80 hover:text-cream-100 focus-ring"
          >
            <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>
            DOWNLOAD RESUME
          </a>
        </motion.nav>
      </motion.div>

    </motion.section>
  )
}
