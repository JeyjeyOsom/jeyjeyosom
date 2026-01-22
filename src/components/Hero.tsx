import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-8 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-50/50 dark:bg-indigo-950/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-gray-500">
            Available for new opportunities
          </span>
        </motion.div>

        {/* High-Impact Typography */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]"
          >
            Juan <br /> 
            <span className="text-transparent stroke-text dark:text-white">Dejon.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-500 dark:text-gray-400 max-w-xl font-medium leading-relaxed"
          >
            Full Stack Developer crafting <span className="text-slate-900 dark:text-gray-200">scalable systems</span> and 
            <span className="italic font-serif"> refined</span> digital experiences.
          </motion.p>
        </div>

        {/* Minimal CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-8 items-center"
        >
          <a 
            href="#projects" 
            className="group relative text-sm font-bold tracking-widest uppercase overflow-hidden text-slate-900 dark:text-white"
          >
            View Projects
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          
          <div className="hidden md:block h-[1px] w-12 bg-slate-200 dark:bg-gray-800" />

          <a 
            href="#contact" 
            className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Aesthetic CSS for the "Outline" text effect (can be added to your global CSS) */}
      <style >{`
        .stroke-text {
          -webkit-text-stroke: 1px #0f172a;
          color: transparent;
        }
        :global(.dark) .stroke-text {
          -webkit-text-stroke: 1px #ffffff;
          color: transparent;
        }
      `}</style>
    </section>
  )
}