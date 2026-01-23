import { motion } from "framer-motion"
import {  ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project Katuyuan",
    // demo: "https://projectkatuyuan.app",
    description:
      "A full-featured AdonisJS-based application integrating AWS S3, Redis caching, and Ethereum API endpoints. Features brand profile management, secure authentication, and scalable REST architecture.",
    tech: ["AdonisJS", "Redis", "AWS S3", "PostgreSQL", "VineJS", "TypeScript"],
    github: "https://github.com/JeyjeyOsom/project-katuyuan",
  },
  {
    title: "Project Pagkamay Tulubagon",
    description:
      "An enterprise-grade automation and real-time analytics ecosystem. Features a sophisticated multi-tenant architecture with bi-directional WebSocket communication, integrated with a high-fidelity React interface supporting dynamic theming and fluid motion design.",
    tech: [ "React", "Framer Motion", "WebSockets", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JeyjeyOsom/project-pagkamay-tulubagon",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth transitions, ambient motion design, and section-based navigation.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
    github: "https://github.com/JeyjeyOsom/my-portfolio",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Works.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 dark:text-gray-500 font-medium uppercase tracking-[0.2em] text-xs pb-2"
          >
            Selected Engineering Projects
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-t border-slate-100 dark:border-gray-900 py-16 md:py-24 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Number and Tech Category */}
                <div className="md:col-span-2 space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                    0{index + 1}
                  </span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                    {project.tech[0]} / {project.tech[1]}
                  </p>
                </div>

                {/* Main Content */}
                <div className="md:col-span-7">
                  <h3 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  
                  {/* Expanded Tech List (Minimalist Style) */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-300 dark:text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="md:col-span-3 flex md:justify-end gap-6 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )} */}
                </div>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
            </motion.div>
          ))}
          <div className="border-t border-slate-100 dark:border-gray-900" />
        </div>
      </div>
    </section>
  )
}