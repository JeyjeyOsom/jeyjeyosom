import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "PFG",
    period: "2022 — Present",
    description: [
      "Developed and maintained production-grade applications using AdonisJS, Vue.js, and TypeScript.",
      "Integrated Redis and AWS S3 for caching, file storage, and signed URL generation to optimize performance.",
      "Implemented scalable authentication, lockout, and user profile systems aligned with enterprise-grade security standards.",
      "Collaborated closely with cross-functional teams to design and deliver intuitive, high-performing UI/UX experiences.",
      "Leveraged PostgreSQL and Redis to enhance data handling, query optimization, and caching efficiency.",
    ],
    tech: [
      "AdonisJS",
      "Vue.js",
      "Redis",
      "AWS S3",
      "PostgreSQL",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Independent Projects",
    period: "2021 — 2022",
    description: [
      "Built responsive and visually engaging web interfaces using Vue.js and React.",
      "Collaborated with clients to translate design concepts into functional, production-ready frontends.",
      "Integrated REST APIs and dynamic routing with modern frameworks for smooth, scalable UIs.",
      "Focused on optimizing performance and accessibility through reusable component design.",
      "Gained experience with cloud hosting platforms like Vercel and Netlify for rapid deployment.",
    ],
    tech: [
      "Vue.js",
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vercel",
      "Netlify",
      "Git",
    ],
  },
  {
    role: "Junior Web Developer (Internship)",
    company: "Local Tech Startup",
    period: "2020 — 2021",
    description: [
      "Assisted in developing internal tools and dashboards using basic HTML, CSS, and JavaScript.",
      "Contributed to small backend tasks under senior supervision, gaining early exposure to Node.js.",
      "Learned best practices in version control, agile workflows, and collaborative development.",
      "Helped test and debug UI components to improve user experience and reliability.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Git", "Bootstrap"],
  },
]

export default function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 100px", "end end"],
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      experiences.length - 1,
      Math.floor(progress * experiences.length)
    )
    setActiveIndex(index)
  })

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-8 text-gray-300 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        {/* Scroll Counter */}
        <motion.div
          className="fixed left-10 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="block text-indigo-400 font-semibold"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          <span className="text-gray-600">
            / {String(experiences.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Timeline Wrapper */}
        <div ref={timelineRef} className="relative">

          {/* Background line */}
          <div className="absolute left-[11px] top-0 w-[2px] h-full bg-gray-800 rounded-full" />

          {/* Glowing progress bar */}
          <motion.div
            style={{ height }}
            className="absolute left-[11px] top-0 w-[2px] rounded-full bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent shadow-[0_0_15px_4px_rgba(79,70,229,0.4)] origin-top"
          />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6 relative"
            >
              {/* Timeline Icon */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-4 ring-gray-950">
                <Briefcase size={14} className="text-white" />
              </span>

              {/* Card */}
              <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-500 italic">
                    {exp.period}
                  </span>
                </div>
                <p className="text-indigo-400 font-medium mb-3">
                  {exp.company}
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm text-left">
                  {exp.description.map((line, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {line}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-700 hover:border-indigo-400 transition"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating ambient glow */}
      <motion.div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500 via-blue-600 to-transparent opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
