import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimation()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX / 10)
    y.set(offsetY / 10)
  }

  const resetTilt = () => {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    controls.start({
      background: [
        "radial-gradient(circle at 20% 30%, #6366f1, transparent 50%)",
        "radial-gradient(circle at 80% 70%, #a855f7, transparent 50%)",
        "radial-gradient(circle at 40% 80%, #06b6d4, transparent 50%)",
        "radial-gradient(circle at 20% 30%, #6366f1, transparent 50%)",
      ],
      borderColor: ["#6366f1", "#a855f7", "#06b6d4", "#6366f1"],
      boxShadow: [
        "0 0 30px 5px rgba(99,102,241,0.2)",
        "0 0 30px 5px rgba(168,85,247,0.2)",
        "0 0 30px 5px rgba(6,182,212,0.2)",
        "0 0 30px 5px rgba(99,102,241,0.2)",
      ],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-[100vh] px-6  bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-40 blur-3xl pointer-events-none"
        animate={controls}
      />

      <motion.div
        className="relative mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          resetTilt()
          setIsHovering(false)
        }}
        onMouseEnter={() => setIsHovering(true)}
        style={{
          rotateX,
          rotateY,
          borderWidth: "4px",
          borderStyle: "solid",
        }}
        animate={controls}
      >
        <img
          src="/dasd.jpg"
          alt="Juan Dejon"
          className="object-cover w-full h-full rounded-full bg-slate-100"
        />
        {/* Overlay for depth */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/20 dark:from-gray-900/60 to-transparent pointer-events-none"
          animate={{
            background: isHovering
              ? "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 70%)"
              : "radial-gradient(circle at 50% 50%, rgba(255,255,255,0), transparent 70%)",
          }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight"
      >
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Juan Dejon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg max-w-xl text-slate-600 dark:text-gray-300 leading-relaxed"
      >
        <span className="text-blue-600 dark:text-blue-400 font-bold mr-1">
          Full Stack Developer
        </span>
        crafting scalable, elegant, and impactful web experiences.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mt-8 px-8 py-3 rounded-full font-semibold text-sm 
                   border border-slate-200 dark:border-gray-700 
                   text-slate-900 dark:text-white
                   hover:bg-slate-900 hover:text-white 
                   dark:hover:bg-blue-600 dark:hover:border-blue-600
                   transition-all duration-300 shadow-sm"
      >
        View My Work
      </motion.a>
    </section>
  )
}