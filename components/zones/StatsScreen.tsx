import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import ZoneHeader from "./ZoneHeader"
import {
  type Px,
  PixelRects,
  RUNNER_SHARED,
  RUNNER_STANDING,
  WARMUP_SQUAT,
  WARMUP_LUNGE,
  WARMUP_HOP_AIR,
  WARMUP_HOP_GROUND,
  WARMUP_SWEEP,
} from "../sprites"

const STAND: Px[] = [...RUNNER_SHARED, ...RUNNER_STANDING]

interface WarmupStep {
  rects: Px[]
  dy: number // grounded frames sit 2 down; the airborne hop at 0
  ms: number
  label: string
}

const step = (rects: Px[], dy: number, ms: number, label: string): WarmupStep => ({
  rects,
  dy,
  ms,
  label,
})
const reps = (steps: WarmupStep[], n: number) => Array.from({ length: n }, () => steps).flat()

// The pre-run routine: squats, walking lunges, pogo hops, hamstring sweeps.
const ROUTINE: WarmupStep[] = [
  ...reps([step(STAND, 2, 420, "SQUATS"), step(WARMUP_SQUAT, 2, 560, "SQUATS")], 3),
  ...reps([step(WARMUP_LUNGE, 2, 620, "LUNGES"), step(STAND, 2, 360, "LUNGES")], 3),
  ...reps([step(WARMUP_HOP_GROUND, 2, 200, "POGO HOPS"), step(WARMUP_HOP_AIR, 0, 240, "POGO HOPS")], 5),
  ...reps([step(WARMUP_SWEEP, 2, 620, "SWEEPS"), step(STAND, 2, 360, "SWEEPS")], 3),
]

// The character card's idle animation: Juan warming up before the run.
function WarmupPortrait() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % ROUTINE.length),
      ROUTINE[index].ms
    )
    return () => clearTimeout(timer)
  }, [index, reduceMotion])

  const current = reduceMotion ? step(STAND, 2, 0, "") : ROUTINE[index]

  return (
    <div
      aria-hidden="true"
      className="pixel-border relative bg-dusk-800 mx-1 mt-1 mb-6 flex items-end justify-center pt-6"
    >
      <svg
        viewBox="0 0 16 22"
        className="crisp w-24 md:w-28"
        shapeRendering="crispEdges"
      >
        <g transform={`translate(0 ${current.dy})`}>
          <PixelRects rects={current.rects} />
        </g>
      </svg>
      {current.label && (
        <span className="absolute left-2 bottom-1 font-arcade text-[7px] tracking-wider text-gold-300">
          {current.label}
        </span>
      )}
    </div>
  )
}

const STATS: Array<[string, string]> = [
  ["CLASS", "Full Stack Developer"],
  ["EXP", "3+ years in production"],
  ["FOCUS", "RAG systems, LLM integration & agentic automation"],
  ["STATUS", "Open to work"],
]

// Stats Screen — the About Zone, framed as a character card. Template Zone:
// later Zones copy its header/panel structure.
export default function StatsScreen() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-label="Stats screen"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-2" title="RUNNER STATS" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Character card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="pixel-border bg-dusk-900 p-6 md:p-8 mx-1">
              {/* Portrait: Juan warming up before the run */}
              <WarmupPortrait />

              <h3 className="font-pixel font-bold text-2xl md:text-3xl text-cream-100">
                JUAN DEJON
              </h3>

              <dl className="mt-6 space-y-4">
                {STATS.map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-3">
                    <dt className="font-arcade text-[8px] md:text-[9px] text-gold-400 w-16 shrink-0">
                      {label}
                    </dt>
                    <dd className="font-body text-sm md:text-base text-cream-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7 lg:col-span-8 space-y-8"
          >
            <p className="font-body text-xl md:text-2xl leading-snug text-cream-100">
              I'm Juan Dejon, a{" "}
              <span className="text-sunset-400 font-semibold">Full Stack Developer</span>{" "}
              building production web applications, backend systems, and
              AI-powered platforms end-to-end.
            </p>

            <div className="space-y-6 font-body text-base md:text-lg leading-relaxed text-mist-300 max-w-xl">
              <p>
                With over{" "}
                <span className="text-cream-100 font-semibold">
                  3 years of professional experience
                </span>
                , I've shipped production applications across real estate,
                public relations, healthcare, and staffing — with a strong
                backend focus on API architecture, database design, and systems
                that stay fast and secure under real traffic.
              </p>

              <p>
                My core stack is{" "}
                <span className="text-cream-100 font-medium">
                  FastAPI, Node.js, AdonisJS, Next.js, React, PostgreSQL, Redis,
                  Docker, AWS, and TypeScript
                </span>
                . I turn complex business requirements into clean, maintainable
                software through thoughtful architecture and collaboration.
              </p>

              <p>
                AI engineering is no longer a side quest — it's my daily work.
                I've shipped{" "}
                <span className="text-cream-100 font-medium">
                  RAG systems with source citations and permission-aware
                  retrieval, prompt engineering with guardrails and response
                  validation, and agentic automation
                </span>{" "}
                in production — and AI-assisted development is part of my
                daily workflow, so I know these tools from both sides.
              </p>
            </div>

            {/* Motto */}
            <div className="pt-8 border-t border-dusk-700 flex items-baseline gap-4">
              <div className="font-arcade text-[8px] md:text-[9px] text-gold-400 shrink-0">
                MOTTO
              </div>
              <p className="font-body text-sm md:text-base italic text-mist-300">
                Keep learning. Build with purpose. Leverage modern technologies
                and AI to create software that makes a meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
