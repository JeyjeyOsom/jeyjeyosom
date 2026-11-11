import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show slightly later to keep the Title Screen clean
      setVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="pixel-border group fixed bottom-8 right-8 z-40 bg-dusk-900 p-3 text-gold-400 hover:text-gold-300 hover:bg-dusk-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
          aria-label="Scroll to top"
        >
          <ArrowUp strokeWidth={2} className="w-5 h-5" />
          <span
            aria-hidden="true"
            className="absolute -left-14 top-1/2 -translate-y-1/2 font-arcade text-[8px] tracking-wider text-mist-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
