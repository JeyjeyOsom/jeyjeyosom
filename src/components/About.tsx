import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Bold Vertical Heading */}
        <div className="md:col-span-4 lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.8]"
          >
            The <br />
            <span className="text-transparent stroke-text dark:text-white">Profile.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] w-24 bg-indigo-600 mt-8 origin-left"
          />
        </div>

        {/* Right Side: Narrative Content */}
        <div className="md:col-span-8 lg:col-span-7 space-y-12">
          
          {/* Primary Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-slate-900 dark:text-white leading-snug font-medium">
              I’m Juan Dejon, a <span className="italic font-serif text-indigo-600 dark:text-indigo-400">Full Stack Developer</span> currently shaping production-grade systems at <span className="underline decoration-slate-200 underline-offset-8 transition-colors hover:decoration-indigo-500"><br></br>Publicity For Good</span>.
            </p>
          </motion.div>

          {/* Detailed Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            <p>
              With over 3 years of professional experience, I focus on the bridge between 
              robust backend architecture and refined user interfaces. I don’t just write code; 
              I build <span className="text-slate-900 dark:text-gray-200 font-semibold">scalable solutions</span> that 
              prioritize performance and user intent.
            </p>
            
            <p>
              My daily stack involves <span className="text-slate-900 dark:text-gray-200 font-medium">AdonisJS, Vue, Redis, and AWS</span>, 
              where I collaborate with cross-functional teams to turn complex problems into 
              seamless digital products.
            </p>
          </motion.div>

          {/* Philosophical Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 border-t border-slate-100 dark:border-gray-900 flex items-center gap-4"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400">
              Focus
            </div>
            <p className="text-sm text-slate-400 dark:text-gray-500 italic">
              Continuous learning, elegant collaboration, and building with purpose.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
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