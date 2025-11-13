import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-8 py-24 max-w-4xl mx-auto text-center text-gray-300"
    >

      <motion.h2
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I’m <span className="text-white font-semibold">Juan Dejon</span>, a{" "}
        <span className="text-indigo-400">Full Stack Developer</span> with over
        2 years of professional experience designing and developing modern web
        applications. I specialize in building{" "}
        <span className="text-white">scalable, performant, and user-centric</span>{" "}
        solutions that blend clean architecture with elegant UI.
      </motion.p>

      <motion.p
        className="text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I currently work at{" "}
        <span className="text-indigo-400 font-medium">PFG</span>, where I
        collaborate with cross-functional teams to deliver production-grade
        features using technologies like{" "}
        <span className="text-white">
          AdonisJS, Vue, Redis, AWS, and PostgreSQL
        </span>
        . My daily mission is to integrate modern innovations into real-world
        products that make a lasting impact.
      </motion.p>

      <motion.p
        className="mt-8 text-gray-400 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Beyond coding, I’m passionate about continuous learning, collaboration,
        and building things that inspire people and improve the way we work.
      </motion.p>
    </section>
  )
}
