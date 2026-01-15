import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView, useMotionValue } from "framer-motion"
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

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-6 text-slate-900 dark:text-white overflow-hidden transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-10 tracking-tight">My Skills & Tools</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                active === cat.key
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none"
                  : "bg-slate-100 dark:bg-gray-900 text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-gray-800 hover:border-indigo-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10"
        >
          {skills[active as keyof typeof skills].map((skill, index) => (
            <TiltCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-indigo-50/50 dark:from-indigo-900/10 to-transparent -z-0 pointer-events-none" />
    </section>
  )
}

function TiltCard({ skill, index, isInView }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    rotateX.set(-(y - midY) / 15) // Slightly increased tilt for better feel
    rotateY.set((x - midX) / 15)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative p-6 bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-slate-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-5" style={{ transform: "translateZ(20px)" }}>
        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
          {skill.icon}
        </div>
        <h3 className="font-bold text-lg text-slate-800 dark:text-gray-100">{skill.name}</h3>
      </div>

      {/* Animated Proficiency Bar */}
      <div className="space-y-2" style={{ transform: "translateZ(10px)" }}>
        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
            />
        </div>
      </div>

      {/* Hover Tooltip - Glass Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-indigo-600/95 dark:bg-gray-900/95 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
      >
        <p className="text-sm font-medium text-white px-6 text-center leading-relaxed">
          {skill.info}
        </p>
      </motion.div>
    </motion.div>
  )
}