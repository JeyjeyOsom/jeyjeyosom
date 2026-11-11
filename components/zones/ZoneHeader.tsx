import { motion, useReducedMotion } from "framer-motion"

interface ZoneHeaderProps {
  /** Arcade zone label, e.g. "ZONE 1-2" */
  code: string
  /** Pixel-font Zone title, e.g. "STATS SCREEN" */
  title: string
}

// Standard Zone chrome: every Zone opens with this header.
export default function ZoneHeader({ code, title }: ZoneHeaderProps) {
  const reduceMotion = useReducedMotion()
  return (
    <header className="mb-12 md:mb-16">
      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 font-arcade text-[9px] md:text-[10px] tracking-wider text-gold-300"
      >
        <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-gold-400" />
        {code}
      </motion.p>
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-pixel font-bold text-4xl md:text-6xl tracking-wide text-cream-100 pixel-shadow-text"
      >
        {title}
      </motion.h2>
    </header>
  )
}
