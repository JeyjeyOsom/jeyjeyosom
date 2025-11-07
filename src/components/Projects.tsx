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
      className="relative py-24 px-6 md:px-8 text-gray-300 overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="group relative bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-indigo-500/20 transition"
          >
            {/* Icon */}
            <div className="flex justify-between items-center mb-3">
              <Code2 className="text-indigo-400" />
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-700 hover:border-indigo-400 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"
              layoutId={`glow-${index}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating ambient background */}
      <motion.div
        className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-transparent opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
