import { motion, useReducedMotion } from "framer-motion"
import { Github } from "lucide-react"
import ZoneHeader from "./ZoneHeader"
import { type Px, PixelRects } from "../sprites"

// Cartridge shell on an 18x21 grid; the label window is x3..15, y8..17.
const PLASTIC = "#55408F"
const PLASTIC_DK = "#3E2A73"
const PLASTIC_LT = "#6E55A8"
const LABEL_BG = "#140B2E"

const CART_SHELL: Px[] = [
  [1, 0, 16, 1, PLASTIC_LT], // top highlight
  [1, 1, 16, 18, PLASTIC], // body
  [3, 3, 12, 1, PLASTIC_DK], // grip ridge
  [3, 5, 12, 1, PLASTIC_DK], // grip ridge
  [3, 7, 12, 1, PLASTIC_DK], // label inset shadow
  [3, 8, 12, 9, LABEL_BG], // label window
  [1, 19, 16, 1, PLASTIC_DK], // bottom shadow
]

// Rising steps — Project Ascension
const ART_ASCENSION: Px[] = [
  [4, 13, 2, 2, "#E8542F"],
  [7, 11, 2, 4, "#FF7A3D"],
  [10, 9, 2, 6, "#FFC94D"],
  [10, 8, 2, 1, "#FFE3A3"],
  [4, 15, 8, 1, "#3E2A73"],
]

// Four-point sparkle — AI Brand Manager
const ART_SPARKLE: Px[] = [
  [8, 9, 2, 2, "#FFE3A3"],
  [6, 11, 2, 2, "#FFC94D"],
  [8, 11, 2, 2, "#FFF4E3"],
  [10, 11, 2, 2, "#FFC94D"],
  [8, 13, 2, 2, "#FFE3A3"],
  [5, 9, 1, 1, "#C2366B"],
  [12, 14, 1, 1, "#C2366B"],
]

// Miniature sunset over the ridge — this portfolio
const ART_SUNSET: Px[] = [
  [7, 9, 4, 1, "#FFE3A3"],
  [6, 10, 6, 1, "#FFC94D"],
  [5, 11, 8, 1, "#FFA05C"],
  [3, 12, 12, 1, "#C2366B"],
  [3, 13, 12, 4, "#2B1B57"],
  [5, 14, 1, 1, "#FFC94D"],
  [9, 15, 1, 1, "#FFC94D"],
  [12, 14, 1, 1, "#FFC94D"],
]

interface Level {
  title: string
  brief: string
  points?: string[]
  tech: string[]
  github: string
  art: Px[]
}

const LEVELS: Level[] = [
  {
    title: "Project Ascension",
    brief:
      "Project Ascension is a production-inspired full-stack platform built to explore modern software architecture, backend engineering, cloud-native development, and AI-powered systems development. The project is intentionally developed using professional engineering practices including sprint planning, architecture decision records, documentation-first development, testing, and CI/CD.",
    tech: ["Python", "Redis", "FastAPI", "PostgreSQL", "Docker", "React", "Tailwind CSS", "Vite"],
    github: "https://github.com/JeyjeyOsom/project-ascension",
    art: ART_ASCENSION,
  },
  {
    title: "AI Brand Consistency & Asset Manager",
    brief:
      "PR teams and brand managers struggle to ensure that all published content aligns with brand guidelines — tone, vocabulary, identity. Manual review is slow, subjective, and inconsistent. A lightweight platform that:",
    points: [
      "Centralizes brand assets and guidelines",
      "Uses an LLM (Gemini API) to evaluate content automatically",
      "Produces objective compliance scores and actionable suggestions",
    ],
    tech: ["Vue.js", "Gemini API", "AdonisJS", "TypeScript", "Tailwind CSS", "Docker"],
    github: "https://github.com/JeyjeyOsom/project-resurgence",
    art: ART_SPARKLE,
  },
  {
    title: "Portfolio Website",
    brief:
      "This site: a developer portfolio built as a 16-bit game world with React, Tailwind CSS, and Framer Motion. One continuous World holds every Zone, scroll-driven in Browse Mode.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
    github: "https://github.com/JeyjeyOsom/jeyjeyosom",
    art: ART_SUNSET,
  },
]

function Cartridge({ art }: { art: Px[] }) {
  return (
    <svg viewBox="0 0 18 21" className="crisp w-32 md:w-40" shapeRendering="crispEdges">
      <PixelRects rects={[...CART_SHELL, ...art]} />
    </svg>
  )
}

// Level Select — the Projects Zone: each project a level card with cartridge art.
export default function LevelSelect() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="projects"
      aria-label="Level select"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-5" title="LEVEL SELECT" />

        <ol className="space-y-10 md:space-y-12">
          {LEVELS.map((level, index) => (
            <motion.li
              key={level.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group pixel-border bg-dusk-900 mx-1 p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-10"
            >
              {/* Cartridge art */}
              <div aria-hidden="true" className="shrink-0 flex md:items-start justify-center">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <Cartridge art={level.art} />
                </div>
              </div>

              {/* Level info */}
              <div className="flex-1 min-w-0">
                <span className="font-arcade text-[8px] md:text-[9px] text-gold-400">
                  LEVEL {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-pixel font-bold text-2xl md:text-3xl text-cream-100">
                  {level.title}
                </h3>

                <p className="mt-4 font-body text-sm md:text-base leading-relaxed text-mist-300 max-w-2xl">
                  {level.brief}
                </p>
                {level.points && (
                  <ul className="mt-3 space-y-2 max-w-2xl">
                    {level.points.map((point) => (
                      <li key={point} className="flex gap-3 font-body text-sm md:text-base leading-relaxed text-mist-300">
                        <span aria-hidden="true" className="text-gold-400 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {level.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-dusk-800 px-2 py-1 font-body text-[11px] md:text-xs uppercase tracking-wide text-cream-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Source link */}
                <a
                  href={level.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring"
                >
                  <Github size={14} aria-hidden="true" />
                  ▸ VIEW SOURCE
                </a>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
