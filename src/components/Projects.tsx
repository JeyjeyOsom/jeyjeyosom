import { motion } from "framer-motion"
import { Code2, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project Virtue",
    demo: "https://projectvirtue.app",
    description:
      "A full-featured AdonisJS-based application integrating AWS S3, Redis caching, and Ethereum API endpoints. Features brand profile management, secure authentication, and scalable REST architecture.",
    tech: ["AdonisJS", "Redis", "AWS S3", "PostgreSQL", "VineJS", "TypeScript"],
    github: "https://github.com/Project-Raptor/project-virtue",
  },
  {
    title: "SignalRaptor",
    description:
      "A real-time analytics and automation platform built with AdonisJS and WebSockets. Enables data-driven insights, creative management, and API integration across multiple brands.",
    tech: ["AdonisJS", "WebSockets", "TypeScript", "PostgreSQL", "AWS"],
    github: "https://github.com/Project-Raptor/signalraptor-server",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth transitions, ambient motion design, and section-based navigation.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
    github: "https://github.com/juan-dejon/my-portfolio",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-8 text-slate-600 dark:text-gray-300 transition-colors duration-500"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300"
          >
            {/* Header: Icon & Links */}
            <div className="flex justify-between items-center mb-6">
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                <Code2 size={22} />
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-bold tracking-tight bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-lg border border-slate-200/50 dark:border-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Subtle Hover Gradient (Light Mode Optimized) */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Background ambient decoration */}
      <motion.div
        className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100 via-indigo-50 to-transparent dark:from-blue-900/10 dark:via-indigo-900/10 opacity-60 blur-3xl -z-10"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}