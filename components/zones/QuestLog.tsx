import { motion, useReducedMotion } from "framer-motion"
import ZoneHeader from "./ZoneHeader"

interface Quest {
  role: string
  company: string
  period: string
  log: string[]
  loot: string[]
}

// Newest first; numbering counts up from the oldest quest.
const QUESTS: Quest[] = [
  {
    role: "Full Stack Developer",
    company: "Publicity For Good",
    period: "MAR 2024 – JUL 2026",
    log: [
      "Developed and maintained production-grade applications using React, FastAPI, AdonisJS, Vue.js, and TypeScript.",
      "Integrated Redis and AWS S3 for caching, file storage, and signed URL generation to optimize performance.",
      "Implemented scalable authentication, lockout, and user profile systems aligned with enterprise-grade security standards.",
      "Collaborated closely with cross-functional teams to design and deliver intuitive, high-performing UI/UX experiences.",
      "Leveraged PostgreSQL and Redis to enhance data handling, query optimization, and caching efficiency.",
    ],
    loot: [
      "React",
      "FastAPI",
      "AdonisJS",
      "Vue.js",
      "Redis",
      "AWS S3",
      "PostgreSQL",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dexio Group",
    period: "SEP 2023 – FEB 2024",
    log: [
      "Built responsive and visually engaging web interfaces using React.",
      "Collaborated with the team to translate design concepts into functional, production-ready frontends.",
      "Focused on optimizing performance and accessibility through reusable component design.",
    ],
    loot: ["React", "JavaScript (ES6+)", "Express.js", "CSS", "Vercel", "Git (GitLab)"],
  },
  {
    role: "Junior Web Developer",
    company: "Virtual Staffing Solutions OPC",
    period: "FEB 2023 – JUL 2023",
    log: [
      "Assisted in developing internal tools and dashboards using basic HTML, CSS, and JavaScript.",
      "Contributed to small backend tasks under senior supervision, gaining early exposure to Node.js.",
      "Learned best practices in version control, agile workflows, and collaborative development.",
      "Helped test and debug UI components to improve user experience and reliability.",
    ],
    loot: ["HTML", "CSS", "JavaScript", "Node.js", "Git", "Bootstrap"],
  },
]

// Quest Log — the Experience Zone: past roles as completed quests.
export default function QuestLog() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="experience"
      aria-label="Quest log"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-3" title="QUEST LOG" />

        {/* Open quest slot */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pixel-border bg-dusk-900 mx-1 mb-12 md:mb-16 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <span className="font-arcade text-[9px] md:text-[10px] text-gold-400 shrink-0">
            <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-gold-400 mr-2" />
            NEW QUEST AWAITS
          </span>
          <p className="font-body text-base md:text-lg text-cream-100 flex-1">
            Looking for the next team to build with — open to full-stack and
            AI engineering roles.
          </p>
          <a
            href="#contact"
            className="font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 shrink-0 focus-ring"
          >
            ▸ GET IN TOUCH
          </a>
        </motion.div>

        {/* Completed quests, newest first */}
        <ol className="space-y-10 md:space-y-12">
          {QUESTS.map((quest, index) => (
            <motion.li
              key={quest.company}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="pixel-border bg-dusk-900 mx-1 p-6 md:p-8"
            >
              {/* Quest header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <span className="font-arcade text-[8px] md:text-[9px] text-gold-400">
                  QUEST {String(QUESTS.length - index).padStart(2, "0")} · COMPLETE
                </span>
                <span className="font-arcade text-[8px] md:text-[9px] text-mist-300">
                  {quest.period}
                </span>
              </div>

              <h3 className="mt-4 font-pixel font-bold text-2xl md:text-3xl text-cream-100">
                {quest.role}
              </h3>
              <p className="mt-1 font-body text-base md:text-lg text-sunset-400">
                {quest.company}
              </p>

              {/* Log entries */}
              <ul className="mt-6 space-y-3 max-w-3xl">
                {quest.log.map((line, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm md:text-base leading-relaxed text-mist-300">
                    <span aria-hidden="true" className="text-gold-400 shrink-0">▸</span>
                    {line}
                  </li>
                ))}
              </ul>

              {/* Loot */}
              <div className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="font-arcade text-[8px] md:text-[9px] text-gold-400 mr-2">
                  LOOT
                </span>
                {quest.loot.map((item) => (
                  <span
                    key={item}
                    className="bg-dusk-800 px-2 py-1 font-body text-[11px] md:text-xs uppercase tracking-wide text-cream-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
