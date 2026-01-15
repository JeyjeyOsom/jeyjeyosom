import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-8 py-24 max-w-4xl mx-auto text-center 
                 text-slate-600 dark:text-gray-300 transition-colors duration-500"
    >
      {/* Section Header */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r 
                   from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Primary Bio */}
      <motion.p
        className="text-lg leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I’m <span className="text-slate-900 dark:text-white font-semibold">Juan Dejon</span>, a{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Developer</span> with over
        2 years of professional experience designing and developing modern web
        applications. I specialize in building{" "}
        <span className="text-slate-900 dark:text-white font-medium">
          scalable, performant, and user-centric
        </span>{" "}
        solutions that blend clean architecture with elegant UI.
      </motion.p>

      {/* Work Context */}
      <motion.p
        className="text-slate-500 dark:text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I currently work at{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide">PFG</span>, 
        where I collaborate with cross-functional teams to deliver production-grade
        features using technologies like{" "}
        <span className="text-slate-800 dark:text-gray-100 font-medium">
          AdonisJS, Vue, Redis, AWS, and PostgreSQL
        </span>
        . My daily mission is to integrate modern innovations into real-world
        products that make a lasting impact.
      </motion.p>

      {/* Philosophical Note */}
      <motion.p
        className="mt-8 text-slate-400 dark:text-gray-500 italic text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Beyond coding, I’m passionate about continuous learning, collaboration,
        and building things that inspire people and improve the way we work.
      </motion.p>
    </section>
  )
}