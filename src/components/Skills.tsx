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

  // 🌈 Floating gradient glow
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
      className="relative py-24 px-6 text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-10">My Skills & Tools</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full border transition-all ${
                active === cat.key
                  ? "bg-indigo-600 border-indigo-500"
                  : "border-gray-700 hover:border-indigo-400"
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10"
        >
          {skills[active as keyof typeof skills].map((skill, index) => (
            <TiltCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </AnimatePresence>
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
    rotateX.set(-(y - midY) / 20)
    rotateY.set((x - midX) / 20)
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
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-5 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-indigo-500/20 transition"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-indigo-400">{skill.icon}</div>
        <h3 className="font-semibold text-lg text-gray-100">{skill.name}</h3>
      </div>

      {/* Animated Proficiency Bar */}
      <motion.div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"
        />
      </motion.div>

      {/* Hover Tooltip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-2xl opacity-0 group-hover:opacity-100 transition"
      >
        <p className="text-sm text-gray-300 px-3 text-center">{skill.info}</p>
      </motion.div>
    </motion.div>
  )
}
