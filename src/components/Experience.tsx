import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "PFG",
    period: "FEBRUARY 2024 — Present",
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
    company: "Dexio Group",
    period: "SEPTEMBER 2023 - FEBRUARY 2024",
    description: [
      "Built responsive and visually engaging web interfaces using React.",
      "Collaborated with the team to translate design concepts into functional, production-ready frontends.",
      "Focused on optimizing performance and accessibility through reusable component design.",
    ],
    tech: [
      "React",
      "JavaScript (ES6+)",
      "Express.js",
      "CSS",
      "Vercel",
      "Git(GitLab)",
    ],
  },
  {
    role: "Junior Web Developer (Internship)",
    company: "Virtual Staffing Solutions OPC.",
    period: "FEBRUARY 2023 - JULY 2023",
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
    offset: ["start 75px", "end end"],
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const smoothHeight = useSpring(height, {
    stiffness: 40,
    damping: 20,
    mass: 1.2,
  })

  const scrollVelocity = useVelocity(scrollYProgress)
  const shimmerSpeed = useTransform(scrollVelocity, [-1, 0, 1], [0.5, 1, 2])

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-8 text-gray-300"
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-[11px] top-0 w-[2px] h-full bg-gray-800 rounded-full" />

          <motion.div
            style={{ height: smoothHeight }}
            animate={{
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 15px 4px rgba(79,70,229,0.4)",
                "0 0 25px 6px rgba(99,102,241,0.6)",
                "0 0 15px 4px rgba(79,70,229,0.4)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[11px] top-0 w-[2px] rounded-full bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent origin-top overflow-hidden"
          >
            <motion.div
              className="absolute left-0 top-0 w-full h-[150px] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-sm"
              animate={{
                y: ["-150px", "100%"],
              }}
              transition={{
                ease: "easeInOut",
                duration: 6, 
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                animationDuration: shimmerSpeed,
              }}
            />
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6 relative"
            >
              <span className="absolute z-10 -left-6 flex items-center justify-center w-5 h-5 bg-indigo-500 rounded-full ring-4 ring-gray-950">
                <Briefcase size={14} className="text-white" />
              </span>

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

      <motion.div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500 via-blue-600 to-transparent opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
