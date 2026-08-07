import { motion } from "framer-motion"
import {   Github } from "lucide-react"

const projects = [
  {
    title: "Project Ascension",
    // demo: "https://projectascension.app",
    description:
      "Project Ascension is a production-inspired full-stack platform built to explore modern software architecture, backend engineering, cloud-native development, and AI-powered systems development. The project is intentionally developed using professional engineering practices including sprint planning, architecture decision records, documentation-first development, testing, and CI/CD.",
    tech: [
      "Python",
      "Redis",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    github: "https://github.com/JeyjeyOsom/project-ascension",
  },
  {
    title: "AI Brand Consistency & Asset Manager",
    description:
      "Problem Statement: PR teams and brand managers struggle to ensure that all published content aligns with brand guidelines (tone, vocabulary, identity). Manual review is slow, subjective, and inconsistent. Our Solution: A lightweight platform that:Centralizes brand assets and guidelines Uses an LLM (Gemini API) to evaluate content automatically and Produces objective compliance scores + actionable suggestions",
    tech: [
      "Vue.js",
      "Gemini API",
      "AdonisJS",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/JeyjeyOsom/project-resurgence",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth transitions, ambient motion design, and section-based navigation.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
    github: "https://github.com/JeyjeyOsom/jeyjeyosom",
  },
];

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