import { useRef, useState  } from "react"
import { motion, AnimatePresence, useInView} from "framer-motion"
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

const skills = {
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
    { name: "AdonisJS", level: 90, info: "Advanced experience in backend systems", icon: <Server /> },
    { name: "NestJS", level: 80, info: "Modular TypeScript backend design", icon: <Server /> },
    { name: "PostgreSQL", level: 85, info: "Optimized queries and schema design", icon: <Database /> },
    { name: "MongoDB", level: 80, info: "Worked on document-based systems", icon: <Database /> },
    { name: "Redis", level: 75, info: "Used for caching and rate-limiting", icon: <Database /> },
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

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps / Tools" },
  { key: "softskills", label: "Soft Skills" },
]

export default function Skills() {
  const [active, setActive] = useState("frontend")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 px-6 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.8]"
          >
            Tools <br />
            <span className="text-transparent stroke-text dark:text-white">& Stack.</span>
          </motion.h2>
          
          {/* Category Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`text-xs uppercase tracking-[0.2em] font-black transition-all duration-300 relative pb-2 ${
                  active === cat.key 
                    ? "text-indigo-600 dark:text-white" 
                    : "text-slate-300 dark:text-gray-700 hover:text-slate-500"
                }`}
              >
                {cat.label}
                {active === cat.key && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Skills Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y divide-slate-100 dark:divide-gray-900"
            >
              {skills[active as keyof typeof skills].map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style >{`
        .stroke-text {
          -webkit-text-stroke: 1px #0f172a;
          color: transparent;
        }
        :global(.dark) .stroke-text {
          -webkit-text-stroke: 1px #ffffff;
          color: transparent;
        }
      `}</style>
    </section>
  )
}

function SkillItem({ skill, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group grid grid-cols-1 md:grid-cols-12 py-8 items-center relative overflow-hidden transition-colors"
    >
      {/* Name and Icon */}
      <div className="md:col-span-4 flex items-center gap-4 z-10">
        <span className="text-slate-200 dark:text-gray-800 font-black text-xl tabular-nums">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
        <div className="p-2 text-slate-400 dark:text-gray-600 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
          {skill.icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-gray-200 group-hover:translate-x-2 transition-transform duration-500">
          {skill.name}
        </h3>
      </div>

      {/* Info/Context - Chic Italic Serif */}
      <div className="md:col-span-5 z-10">
        <p className="text-slate-400 dark:text-gray-500 font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {skill.info}
        </p>
      </div>

      {/* Proficiency - Minimalist Line */}
      <div className="md:col-span-3 z-10 flex flex-col items-end">
        <div className="w-full max-w-[140px] space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>LVL</span>
                <span>{skill.level}%</span>
            </div>
            <div className="h-[2px] w-full bg-slate-100 dark:bg-gray-900 overflow-hidden">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-indigo-600 origin-left"
                />
            </div>
        </div>
      </div>

      {/* Subtle Full-width Hover Background */}
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/[0.01] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-0" />
    </motion.div>
  )
}