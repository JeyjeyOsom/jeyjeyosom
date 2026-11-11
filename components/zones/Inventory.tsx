import { useState, type ReactElement } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Code,
  Database,
  Server,
  GitBranch,
  Cloud,
  Palette,
  Users,
  Sparkles,
} from "lucide-react"
import ZoneHeader from "./ZoneHeader"

interface Item {
  name: string
  level: number // 0–100; shown as pips out of 10
  info: string
  icon: ReactElement
}

const ITEMS: Record<string, Item[]> = {
  frontend: [
    { name: "React", level: 95, info: "Used in multiple production apps", icon: <Code /> },
    { name: "Vue.js", level: 90, info: "Strong experience in dynamic UIs", icon: <Code /> },
    { name: "JavaScript (ES6+)", level: 95, info: "Daily driver for full-stack work", icon: <Code /> },
    { name: "Tailwind CSS", level: 90, info: "Styled modern UIs efficiently", icon: <Palette /> },
    { name: "Framer Motion", level: 85, info: "Smooth animations & transitions", icon: <Sparkles /> },
    { name: "Figma", level: 80, info: "UI collaboration and prototyping", icon: <Palette /> },
  ],
  backend: [
    { name: "Node.js", level: 95, info: "Built RESTful APIs & services", icon: <Server /> },
    { name: "FastAPI", level: 95, info: "Built RESTful APIs & services", icon: <Server /> },
    { name: "AdonisJS", level: 90, info: "Advanced experience in backend systems", icon: <Server /> },
    { name: "NestJS", level: 80, info: "Modular TypeScript backend design", icon: <Server /> },
    { name: "PostgreSQL", level: 85, info: "Optimized queries and schema design", icon: <Database /> },
    { name: "MongoDB", level: 80, info: "Worked on document-based systems", icon: <Database /> },
    { name: "Redis", level: 75, info: "Used for caching and rate-limiting", icon: <Database /> },
  ],
  ai: [
    { name: "Gemini API", level: 85, info: "Building LLM-powered applications and AI features.", icon: <Sparkles /> },
    { name: "Claude", level: 95, info: "Architecture discussions, code reviews, and technical planning.", icon: <Sparkles /> },
    { name: "ChatGPT", level: 90, info: "Debugging, documentation, system design, and rapid prototyping.", icon: <Sparkles /> },
    { name: "GitHub Copilot", level: 90, info: "AI-assisted development and code generation.", icon: <Sparkles /> },
    { name: "Agentic Workflows", level: 80, info: "Designing autonomous multi-step AI automation systems.", icon: <Sparkles /> },
  ],
  devops: [
    { name: "Git / GitHub / GitLab", level: 95, info: "Version control & CI/CD workflows", icon: <GitBranch /> },
    { name: "Docker", level: 85, info: "Built local and production containers", icon: <Cloud /> },
    { name: "AWS (S3)", level: 80, info: "Handled uploads & signed URLs", icon: <Cloud /> },
    { name: "Render", level: 75, info: "Deployed Node services", icon: <Cloud /> },
    { name: "Vercel", level: 90, info: "Deployed and optimized React apps", icon: <Cloud /> },
  ],
  softskills: [
    { name: "Communication", level: 95, info: "Effective in team and client settings", icon: <Users /> },
    { name: "Problem Solving", level: 90, info: "Strong analytical thinking", icon: <Users /> },
    { name: "Adaptability", level: 90, info: "Quick learner in new frameworks", icon: <Users /> },
    { name: "Attention to Detail", level: 95, info: "Precision in both code & UI", icon: <Users /> },
    { name: "Team Collaboration", level: 95, info: "Thrives in agile environments", icon: <Users /> },
  ],
}

const CATEGORIES = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI & Automation" },
  { key: "devops", label: "DevOps / Cloud" },
  { key: "softskills", label: "Soft Skills" },
]

function LevelPips({ name, level }: { name: string; level: number }) {
  const filled = Math.floor(level / 10)
  return (
    <div
      role="img"
      aria-label={`${name} level ${filled} of 10`}
      className="flex items-center gap-[3px]"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2.5 ${i < filled ? "bg-gold-400" : "bg-dusk-700"}`}
        />
      ))}
      <span aria-hidden="true" className="ml-2 font-arcade text-[8px] text-gold-300">
        LV{filled}
      </span>
    </div>
  )
}

// Inventory — the Skills Zone: leveled items sorted into bag tabs.
export default function Inventory() {
  const [active, setActive] = useState("frontend")
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="skills"
      aria-label="Inventory"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-4" title="INVENTORY" />

        {/* Bag tabs */}
        <nav aria-label="Inventory categories" className="mb-10 md:mb-12 flex flex-wrap gap-x-8 gap-y-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative pb-2 font-arcade text-[9px] md:text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 focus-ring ${
                active === cat.key
                  ? "text-gold-400"
                  : "text-mist-300 hover:text-cream-100"
              }`}
            >
              {active === cat.key && <span aria-hidden="true">▸ </span>}
              {cat.label}
              {active === cat.key && (
                <motion.div
                  layoutId="inventoryTab"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gold-400"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Item grids: every category stays in the DOM (hidden, not
            unmounted) so the full inventory reads without interaction. */}
        <div className="min-h-[420px]">
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === active
            return (
              <motion.ul
                key={`${cat.key}-${isActive ? "in" : "out"}`}
                initial={isActive && !reduceMotion ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`${isActive ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-1`}
              >
                {ITEMS[cat.key].map((item) => (
                  <li key={item.name} className="group pixel-border bg-dusk-900 p-5 md:p-6">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="text-mist-300 group-hover:text-gold-400 transition-colors [&>svg]:w-5 [&>svg]:h-5"
                      >
                        {item.icon}
                      </span>
                      <h3 className="font-pixel font-bold text-lg md:text-xl text-cream-100">
                        {item.name}
                      </h3>
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-mist-300">
                      {item.info}
                    </p>
                    <div className="mt-4">
                      <LevelPips name={item.name} level={item.level} />
                    </div>
                  </li>
                ))}
              </motion.ul>
            )
          })}
        </div>
      </div>
    </section>
  )
}
