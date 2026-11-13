import { useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  PixelRects,
  RUNNER_BUST,
  BUST_LAMP_LIT,
  BUST_VIEWBOX,
} from "../sprites"

interface CloseUpProps {
  open: boolean
  onClose: () => void
}

// The Close-Up (CONTEXT.md): the Runner's detailed bust beside the actual
// race photo he was drawn from, the bust vouching for it. Opened by the
// INSPECT chip on the Stats Screen portrait; works in both Modes.
export default function CloseUp({ open, onClose }: CloseUpProps) {
  const reduceMotion = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    // Capture phase so this outranks Play Mode's window keydown handler:
    // Esc closes the Close-Up only (the next Esc exits Play Mode), and
    // movement keys never reach the Runner while the dialog is up. keyup
    // is left alone so Play Mode still sees releases of already-held keys.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (e.key === "Tab") {
        e.preventDefault() // the close button is the dialog's only tab stop
      }
      e.stopPropagation()
    }
    window.addEventListener("keydown", onKeyDown, true)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown, true)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-dusk-950/85 p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Close-Up: the Runner beside the real Juan"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pixel-border relative w-full max-w-2xl bg-dusk-900 p-6 md:p-8 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-arcade text-[9px] md:text-[10px] text-gold-400">
              CLOSE-UP
            </p>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close the Close-Up"
              className="focus-ring absolute top-4 right-4 font-arcade text-[11px] text-mist-300 hover:text-gold-300 transition-colors px-2 py-1"
            >
              X
            </button>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-end">
              {/* The bust, with its speech bubble vouching for the photo */}
              <div className="relative flex justify-center pb-2">
                <svg
                  viewBox={BUST_VIEWBOX}
                  className="crisp w-48 md:w-56"
                  shapeRendering="crispEdges"
                  aria-hidden="true"
                >
                  <PixelRects rects={RUNNER_BUST} />
                  <g className="night-light">
                    <PixelRects rects={BUST_LAMP_LIT} />
                  </g>
                </svg>

                <div className="pixel-border absolute -top-5 right-0 md:-right-4 bg-dusk-800 px-4 py-2">
                  <p className="font-body text-sm md:text-base font-semibold text-cream-100 whitespace-nowrap">
                    Yep, that&apos;s me!
                  </p>
                  {/* Stair-stepped pixel tail pointing at the photo:
                      rightward on wide screens, downward when stacked */}
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-1 h-3 w-2 bg-dusk-800 pixel-border"
                  />
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-4 h-2 w-1.5 bg-dusk-800 pixel-border"
                  />
                  <span
                    aria-hidden="true"
                    className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-1 h-2 w-3 bg-dusk-800 pixel-border"
                  />
                  <span
                    aria-hidden="true"
                    className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 h-1.5 w-2 bg-dusk-800 pixel-border"
                  />
                </div>
              </div>

              {/* The actual race photo the Runner was drawn from */}
              <figure className="mx-1">
                <div className="pixel-border bg-dusk-800 p-1">
                  <img
                    src={`${import.meta.env.BASE_URL}me.jpg`}
                    alt="Juan Dejon running the Ormoc City Marathon at night: black cap with a headlamp, orange and blue race singlet, bib 42087"
                    className="block w-full"
                    width={600}
                    height={600}
                  />
                </div>
                <figcaption className="mt-3 text-center font-arcade text-[8px] md:text-[9px] tracking-wider text-gold-300">
                  ACTUAL FOOTAGE
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
