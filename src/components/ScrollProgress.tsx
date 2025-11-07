import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.7)] origin-left z-[9999]"
        style={{ scaleX }}
    />
  )
}
