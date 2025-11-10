import { motion } from 'framer-motion'

export default function Hero() {


  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center h-[80vh] px-6"
    >

            <motion.div
          className="absolute inset-0 opacity-40 blur-3xl pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, #4f46e5, transparent 50%)',
              'radial-gradient(circle at 80% 70%, #9333ea, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #0ea5e9, transparent 50%)',
              'radial-gradient(circle at 20% 30%, #4f46e5, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          />


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Juan Dejon</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg max-w-xl"
      >
        <span className="text-blue-400 font-bold mr-1">
        Full Stack Developer 
        </span> 
        crafting scalable, elegant, and impactful web
        experiences.
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="px-5 py-2 rounded-full border border-gray-700 hover:border-indigo-400 hover:bg-indigo-600 mt-8"
      >
        View My Work
      </motion.a>
    </section>
  )
}
