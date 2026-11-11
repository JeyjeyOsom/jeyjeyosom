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
  info: string
  icon: ReactElement
  /** Part of the current core kit (the stack the bio names) */
  equipped?: boolean
  /** Field record: quests and levels where this item was actually used */
  usedIn?: string[]
}

// No self-assigned ratings: each item carries its field record — the jobs
// (Quest Log) and projects (Level Select) it was used in — and the current
// core kit is marked EQUIPPED.
const ITEMS: Record<string, Item[]> = {
  frontend: [
    { name: "React", info: "Used in multiple production apps", icon: <Code />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Dexio Group", "Project Ascension"] },
    { name: "Next.js", info: "Role-based dashboards & server-rendered apps", icon: <Code />, usedIn: ["Fortius"] },
    { name: "Vue.js", info: "Strong experience in dynamic UIs", icon: <Code />, equipped: true, usedIn: ["Publicity For Good", "AI Brand Manager"] },
    { name: "TypeScript & JavaScript", info: "Daily driver for full-stack work", icon: <Code />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Project Ascension", "this site"] },
    { name: "Tailwind CSS", info: "Styled modern UIs efficiently", icon: <Palette />, usedIn: ["Publicity For Good", "Project Ascension", "this site"] },
    { name: "Framer Motion", info: "Smooth animations & transitions", icon: <Sparkles />, usedIn: ["this site"] },
    { name: "Figma", info: "UI collaboration and prototyping", icon: <Palette /> },
  ],
  backend: [
    { name: "Node.js", info: "Built RESTful APIs & services", icon: <Server />, usedIn: ["Dexio Group", "Virtual Staffing Solutions"] },
    { name: "FastAPI", info: "Built RESTful APIs & services", icon: <Server />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Project Ascension"] },
    { name: "AdonisJS", info: "Advanced experience in backend systems", icon: <Server />, equipped: true, usedIn: ["Publicity For Good", "AI Brand Manager"] },
    { name: "NestJS", info: "Modular TypeScript backend design", icon: <Server /> },
    { name: "PostgreSQL", info: "Schema design, query optimization & pgvector embeddings", icon: <Database />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Project Ascension"] },
    { name: "MongoDB", info: "Worked on document-based systems", icon: <Database /> },
    { name: "Redis", info: "Caching, rate-limiting & task queues", icon: <Database />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Project Ascension"] },
    { name: "Celery", info: "Background jobs & media ingestion pipelines", icon: <Server />, usedIn: ["Fortius"] },
  ],
  ai: [
    { name: "OpenAI API", info: "RAG assistants with cited, permission-aware answers.", icon: <Sparkles />, usedIn: ["Fortius"] },
    { name: "Gemini API", info: "Building LLM-powered applications and AI features.", icon: <Sparkles />, usedIn: ["AI Brand Manager"] },
    { name: "Claude", info: "Architecture discussions, code reviews, and technical planning.", icon: <Sparkles />, usedIn: ["this site"] },
    { name: "ChatGPT", info: "Debugging, documentation, system design, and rapid prototyping.", icon: <Sparkles /> },
    { name: "GitHub Copilot", info: "AI-assisted development and code generation.", icon: <Sparkles /> },
    { name: "Agentic Workflows", info: "Designing autonomous multi-step AI automation systems.", icon: <Sparkles /> },
  ],
  devops: [
    { name: "Git / GitHub / GitLab", info: "Version control & CI/CD workflows", icon: <GitBranch />, usedIn: ["every quest since 2023"] },
    { name: "Docker", info: "Containers from local dev to VPS production", icon: <Cloud />, equipped: true, usedIn: ["Fortius", "Publicity For Good", "Project Ascension"] },
    { name: "AWS (S3)", info: "Handled uploads & signed URLs", icon: <Cloud />, equipped: true, usedIn: ["Publicity For Good"] },
    { name: "Caddy", info: "Reverse proxy & TLS for VPS deployments", icon: <Cloud />, usedIn: ["Fortius"] },
    { name: "Render", info: "Deployed Node services", icon: <Cloud /> },
    { name: "Vercel", info: "Deployed and optimized React apps", icon: <Cloud />, usedIn: ["Dexio Group"] },
  ],
  softskills: [
    { name: "Communication", info: "Effective in team and client settings", icon: <Users /> },
    { name: "Problem Solving", info: "Strong analytical thinking", icon: <Users /> },
    { name: "Adaptability", info: "Quick learner in new frameworks", icon: <Users /> },
    { name: "Attention to Detail", info: "Precision in both code & UI", icon: <Users /> },
    { name: "Team Collaboration", info: "Thrives in agile environments", icon: <Users /> },
  ],
}

const CATEGORIES = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI & Automation" },
  { key: "devops", label: "DevOps / Cloud" },
  { key: "softskills", label: "Soft Skills" },
]

// Inventory — the Skills Zone: items sorted into bag tabs, proven by use.
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
                  <li key={item.name} className="group pixel-border bg-dusk-900 p-5 md:p-6 flex flex-col">
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-mist-300 group-hover:text-gold-400 transition-colors [&>svg]:w-5 [&>svg]:h-5"
                      >
                        {item.icon}
                      </span>
                      <h3 className="font-pixel font-bold text-lg md:text-xl text-cream-100">
                        {item.name}
                      </h3>
                      {item.equipped && (
                        <span className="ml-auto shrink-0 bg-dusk-800 px-1.5 py-1 font-arcade text-[7px] tracking-wider text-gold-400">
                          EQUIPPED
                        </span>
                      )}
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-mist-300">
                      {item.info}
                    </p>
                    {item.usedIn && (
                      <p className="mt-auto pt-4 font-body text-xs leading-relaxed text-cream-100/80">
                        <span aria-hidden="true" className="text-gold-400">▸ </span>
                        <span className="font-arcade text-[7px] tracking-wider text-gold-400 mr-1">FIELD RECORD</span>{" "}
                        {item.usedIn.join(" · ")}
                      </p>
                    )}
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
