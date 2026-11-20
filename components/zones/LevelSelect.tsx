import { motion, useReducedMotion } from "framer-motion"
import { Gamepad2, Github, Lock } from "lucide-react"
import ZoneHeader from "./ZoneHeader"
import { type Px, PixelRects } from "../sprites"
import { ART_ASCENSION, ART_FORTIUS, ART_OVERWORLD, ART_SPARKLE, ART_SUNSET, CART_SHELL } from "../cartridges"
import { ROAM_HASH, useRoam } from "../roam/RoamContext"
import { preloadRoamMode } from "../roam/world"

interface Level {
  title: string
  brief: string
  points?: string[]
  tech: string[]
  github?: string
  art: Px[]
  /** the level is Roam Mode itself, playable from its card */
  play?: boolean
}

const LEVELS: Level[] = [
  {
    title: "Fortius — The Dashboard",
    brief:
      "An AI-powered training platform built end-to-end as freelance work for a real-estate client. Trainers organize Google Drive materials into learning tracks, realtors work through them with live progress tracking, and a RAG assistant answers questions strictly from the materials each user may see — citing the exact page, slide, or timestamp.",
    points: [
      "Permission-aware visibility enforced on every request — browsing, streaming, and AI answers alike",
      "Media pipeline streaming 275+ Drive videos and audio files, with mid-stream recovery and requeueing",
      "Deployed and operated on a VPS with Docker Compose, Caddy, and GitHub Actions CI/CD",
    ],
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Celery", "OpenAI API", "Docker", "Caddy"],
    art: ART_FORTIUS,
  },
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
  {
    title: "The Overworld",
    brief:
      "Roam Mode for this site: the Runner loose on a 3D pixel-art island drawn from my training route, where every Landmark is a door back into the page. It renders with three.js on WebGL2 at a low resolution scaled up with hard pixels, and every shape is generated in TypeScript: no model files, no physics engine.",
    points: [
      "Loads as its own chunk only when a visitor steps in, so the page stays light for everyone else",
      "Doors, the address bar and the Back button keep the page and the island in step",
      "Designed after a source-level study of bruno-simon.com, borrowing patterns, never assets",
    ],
    tech: ["three.js", "WebGL2", "TypeScript", "React", "Vite"],
    github: "https://github.com/JeyjeyOsom/jeyjeyosom",
    art: ART_OVERWORLD,
    play: true,
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
  const roam = useRoam()

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

                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {/* Roam Mode's card plays it, where a keyboard and WebGL2 are */}
                  {level.play &&
                    (roam.eligible ? (
                      roam.view === "off" && (
                        <a
                          href={ROAM_HASH}
                          onClick={(e) => {
                            e.preventDefault()
                            roam.enter("projects")
                          }}
                          onPointerEnter={preloadRoamMode}
                          onFocus={preloadRoamMode}
                          className="inline-flex items-center gap-2 font-arcade text-[9px] md:text-[10px] text-sunset-400 hover:text-gold-300 focus-ring"
                        >
                          <Gamepad2 size={14} aria-hidden="true" />
                          ▸ PLAY
                        </a>
                      )
                    ) : (
                      <span className="font-arcade text-[9px] md:text-[10px] text-mist-300">
                        PLAYS WITH A KEYBOARD AND WEBGL2
                      </span>
                    ))}

                  {/* Source link — or private marker when there is no public repo */}
                  {level.github ? (
                    <a
                      href={level.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring"
                    >
                      <Github size={14} aria-hidden="true" />
                      ▸ VIEW SOURCE
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-arcade text-[9px] md:text-[10px] text-mist-300">
                      <Lock size={14} aria-hidden="true" />
                      PRIVATE CLIENT BUILD
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
