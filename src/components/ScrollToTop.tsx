import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show slightly later to keep the initial hero clean
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
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Subtle Progress Circle (Optional flair) */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-gray-800 transition-colors group-hover:border-indigo-600 dark:group-hover:border-white" />
            
            <motion.div
              whileHover={{ y: -4 }}
              className="relative p-4 text-slate-900 dark:text-white"
            >
              <ArrowUp strokeWidth={1.5} className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Vertical Label (The "Chic" Touch) */}
          <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}