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
      className="relative py-24 px-6 md:px-8 text-slate-600 dark:text-gray-300 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div ref={timelineRef} className="relative">
          {/* Static Background Line */}
          <div className="absolute left-[11px] top-0 w-[2px] h-full bg-slate-200 dark:bg-gray-800 rounded-full" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: smoothHeight }}
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                "0 0 10px 2px rgba(79,70,229,0.2)",
                "0 0 20px 4px rgba(99,102,241,0.4)",
                "0 0 10px 2px rgba(79,70,229,0.2)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[11px] top-0 w-[2px] rounded-full bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent origin-top overflow-hidden z-20"
          >
             {/* Shimmer Effect */}
            <motion.div
              className="absolute left-0 top-0 w-full h-[150px] bg-gradient-to-b from-white/60 via-white/20 to-transparent blur-sm"
              animate={{ y: ["-150px", "1000%"] }}
              transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            />
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16 ml-8 relative"
            >
              {/* Timeline Icon */}
              <span className="absolute z-30 -left-[31px] flex items-center justify-center w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full ring-4 ring-white dark:ring-gray-950 shadow-sm">
                <Briefcase size={12} className="text-white" />
              </span>

              {/* Card */}
              <div className="bg-slate-50/50 dark:bg-gray-900/70 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-gray-500 uppercase">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-4">
                  {exp.company}
                </p>

                <ul className="space-y-3 text-slate-600 dark:text-gray-400 text-sm">
                  {exp.description.map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-lg border border-slate-200 dark:border-gray-700 hover:border-indigo-400 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blob */}
      <motion.div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-100 via-blue-100 to-transparent dark:from-indigo-500/10 dark:via-blue-600/10 opacity-50 blur-3xl -z-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}