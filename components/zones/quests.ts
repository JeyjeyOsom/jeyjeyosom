// The Quest Log's quests (CONTEXT.md: Quest Log), shared with the
// Overworld's Quest Road, which reads only the year each one began.

export interface Quest {
  role: string
  company: string
  period: string
  log: string[]
  loot: string[]
  /** The current role — rendered as the active quest (CONTEXT.md) */
  active?: boolean
}

// Newest first; numbering counts up from the oldest quest.
export const QUESTS: Quest[] = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Fortius — Real Estate Training Platform",
    period: "SEP 2026 – NOV 2026",
    log: [
      "Designed and delivered an AI-powered learning platform end-to-end for a real-estate client: trainers organize Google Drive materials into learning tracks, realtors work through them with live progress tracking.",
      "Built the FastAPI backend with PostgreSQL (pgvector), Redis, and Celery, enforcing permission-aware material visibility on every request — browsing, streaming, and AI answers alike.",
      "Developed a RAG assistant on OpenAI embeddings that answers strictly from each user's visible materials, citing the exact page, slide, or timestamp.",
      "Implemented a media ingestion pipeline streaming 275+ Drive videos and audio files, with mid-stream failure recovery and automatic requeueing.",
      "Shipped role-based dashboards for admins, trainers, and realtors in Next.js and React 19; deployed and operated the platform on a VPS with Docker Compose, Caddy, and GitHub Actions CI/CD.",
    ],
    loot: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "OpenAI API",
      "Docker",
      "Caddy",
      "GitHub Actions",
    ],
  },
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

/** The year a quest began, from its period ("SEP 2023 – FEB 2024") */
export function questStartYear(quest: Quest): number | null {
  const match = quest.period.match(/\d{4}/)
  return match ? Number(match[0]) : null
}
