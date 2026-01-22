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
    company: "Publicity For Good",
    period: "MARCH 2024 - Present",
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
    role: "Junior Web Developer",
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
  return (
    <section id="experience" className="py-32 px-6 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            History.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 dark:text-gray-500 font-medium uppercase tracking-[0.2em] text-xs pb-2"
          >
            Professional Path — 2023 to Present
          </motion.p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-t border-slate-100 dark:border-gray-900 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors duration-500"
            >
              {/* Column 1: Timeline/Period */}
              <div className="md:col-span-3">
                <span className="text-sm font-bold tracking-widest text-slate-400 dark:text-gray-600 uppercase">
                  {exp.period}
                </span>
              </div>

              {/* Column 2: Role & Company */}
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                  {exp.role}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-serif italic text-lg">
                  {exp.company}
                </p>
              </div>

              {/* Column 3: Description & Tech */}
              <div className="md:col-span-5 space-y-6">
                <ul className="space-y-4">
                  {exp.description.map((line, i) => (
                    <li key={i} className="text-slate-500 dark:text-gray-400 leading-relaxed text-sm">
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Tech List (Simplified) */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Number on Hover */}
              <span className="absolute right-0 bottom-4 text-9xl font-black text-slate-100 dark:text-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10">
                0{index + 1}
              </span>
            </motion.div>
          ))}
          
          {/* Bottom Border for the last item */}
          <div className="border-t border-slate-100 dark:border-gray-900" />
        </div>
      </div>
    </section>
  )
}