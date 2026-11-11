import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

// Pixel rects as [x, y, w, h, fill] on a 12x14 grid
type Px = [number, number, number, number, string]

const SKIN = "#FFC084"
const HAIR = "#3E2A73"
const SHIRT = "#FF7A3D"
const SHORTS = "#2B1B57"
const SHOE = "#FFC94D"

const RUNNER_SHARED: Px[] = [
  [4, 0, 3, 1, HAIR],
  [3, 1, 1, 1, HAIR],
  [4, 1, 3, 2, SKIN],
  [4, 3, 3, 4, SHIRT],
  [4, 7, 3, 1, SHORTS],
]

// Frame A: full stride — legs extended, arms swinging
const FRAME_A: Px[] = [
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
const FRAME_B: Px[] = [
  [7, 4, 1, 2, SKIN],
  [3, 3, 1, 2, SKIN],
  [5, 8, 1, 4, SKIN],
  [5, 12, 2, 1, SHOE],
  [6, 8, 1, 1, SKIN],
  [7, 9, 1, 1, SKIN],
  [7, 10, 2, 1, SHOE],
]

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

const STARS: Array<[number, number, number]> = [
  [6, 8, 0], [14, 22, 1], [23, 11, 2], [31, 30, 0], [38, 7, 1],
  [46, 18, 2], [55, 26, 0], [63, 9, 1], [71, 21, 2], [79, 13, 0],
  [86, 28, 1], [92, 6, 2], [10, 34, 1], [50, 36, 0], [84, 38, 2],
]

function PixelRects({ rects }: { rects: Px[] }) {
  return (
    <>
      {rects.map(([x, y, w, h, fill], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </>
  )
}

export default function TitleScreen() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yFar = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 45])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70])
  const fadeContent = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Title screen"
      className="scanlines relative min-h-screen overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(to bottom,
          #140B2E 0%, #140B2E 26%,
          #1D1140 26%, #1D1140 40%,
          #2B1B57 40%, #2B1B57 52%,
          #3E2A73 52%, #3E2A73 61%,
          #C2366B 61%, #C2366B 69%,
          #E8542F 69%, #E8542F 77%,
          #FF7A3D 77%, #FF7A3D 85%,
          #FFC94D 85%, #FFC94D 100%)`,
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map(([left, top, phase], i) => (
          <span
            key={i}
            className="animate-twinkle absolute w-[3px] h-[3px] bg-cream-100"
            style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${phase * 0.8}s` }}
          />
        ))}
      </div>

      {/* Sun */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : ySun }}
        className="absolute right-[8%] md:right-[14%] bottom-[16vh] w-32 md:w-52 pointer-events-none"
      >
        <svg viewBox="0 0 15 15" className="crisp w-full" shapeRendering="crispEdges">
          <PixelRects rects={SUN_ROWS} />
        </svg>
      </motion.div>

      {/* Far ridge */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : yFar }}
        className="absolute bottom-[13vh] left-0 right-0 pointer-events-none"
      >
        <svg viewBox="0 0 320 48" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[18vh]">
          <path
            fill="#3E2A73"
            d="M0,48 V30 h14 v-6 h12 v-6 h10 v6 h16 v-10 h12 v-4 h12 v8 h18 v6 h20 v-12 h14 v-6 h12 v10 h16 v6 h22 v-8 h14 v-6 h12 v10 h18 v4 h16 v-10 h14 v-4 h12 v12 h16 v6 h20 V48 Z"
          />
        </svg>
      </motion.div>

      {/* Mid ridge */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : yMid }}
        className="absolute bottom-[11vh] left-0 right-0 pointer-events-none"
      >
        <svg viewBox="0 0 320 40" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[14vh]">
          <path
            fill="#2B1B57"
            d="M0,40 V24 h18 v-8 h14 v-6 h16 v8 h20 v-4 h16 v10 h24 v-12 h18 v-6 h14 v12 h22 v4 h26 v-10 h16 v-6 h18 v12 h20 v6 h24 v-8 h18 v8 h16 V40 Z"
          />
        </svg>
      </motion.div>

      {/* Skyline — the builder's city */}
      <div aria-hidden="true" className="absolute bottom-[9vh] left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 320 36" preserveAspectRatio="none" shapeRendering="crispEdges" className="w-full h-[11vh]">
          <path
            fill="#0E0721"
            d="M0,36 V22 h10 v-8 h8 v8 h6 v-14 h2 v-4 h2 v4 h2 v14 h8 v-6 h10 v6 h8 v-12 h12 v12 h6 v-8 h10 v8 h12 v-16 h2 v-3 h2 v3 h2 v16 h10 v-6 h12 v6 h8 v-10 h10 v10 h10 v-14 h12 v14 h8 v-8 h12 v8 h8 v-12 h2 v-4 h2 v4 h2 v12 h12 v-6 h10 v6 h10 v-10 h12 v10 h8 v-14 h10 v14 h10 v-8 h12 v8 h8 V36 Z"
          />
          {/* Lit windows */}
          {[
            [12, 26], [30, 16], [52, 24], [66, 20], [84, 22], [103, 14],
            [122, 26], [140, 22], [158, 18], [178, 24], [200, 20], [224, 26],
            [243, 22], [262, 20], [284, 24], [300, 22],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="2" height="2" fill="#FFC94D" />
          ))}
        </svg>
      </div>

      {/* Ground: the track the Runner lives on */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[9vh] bg-[#0E0721] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-dusk-700" />
        <div className="absolute top-[45%] left-0 right-0 flex gap-8 px-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-6 h-1 bg-dusk-700 shrink-0" />
          ))}
        </div>
      </div>

      {/* Runner — placeholder sprite until the custom Juan avatar replaces it */}
      <div aria-hidden="true" className="sprite-run absolute bottom-[8.5vh] left-[12%] md:left-[18%] w-12 md:w-16 pointer-events-none">
        <svg viewBox="0 0 12 14" className="crisp w-full" shapeRendering="crispEdges">
          <g className="frame-a">
            <PixelRects rects={[...RUNNER_SHARED, ...FRAME_A]} />
          </g>
          <g className="frame-b">
            <PixelRects rects={[...RUNNER_SHARED, ...FRAME_B]} />
          </g>
        </svg>
      </div>

      {/* HUD status line */}
      <div className="relative z-10 flex items-center gap-2 px-6 md:px-10 pt-24 md:pt-10">
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
            className="animate-blink font-arcade text-xs md:text-sm text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
          >
            ▸ PRESS START
          </a>
          <a
            href="#projects"
            className="group font-pixel text-lg text-cream-100/80 hover:text-cream-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
          >
            <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="group font-pixel text-lg text-cream-100/80 hover:text-cream-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
          >
            <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">▸ </span>
            GET IN TOUCH
          </a>
        </motion.nav>
      </motion.div>

      <style>{`
        @keyframes sprite-frame-a { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        @keyframes sprite-frame-b { 0%, 49% { opacity: 0 } 50%, 100% { opacity: 1 } }
        .sprite-run .frame-a { animation: sprite-frame-a 0.5s steps(1, end) infinite; }
        .sprite-run .frame-b { opacity: 0; animation: sprite-frame-b 0.5s steps(1, end) infinite; }
      `}</style>
    </section>
  )
}
