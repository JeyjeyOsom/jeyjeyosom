import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import emailjs from "emailjs-com"
import Toast from "../ui/Toast"
import ZoneHeader from "./ZoneHeader"
import { type Px, PixelRects } from "../sprites"

interface Errors {
  name?: string
  email?: string
  message?: string
}

// Save crystal on an 11x14 grid
const CRYSTAL: Px[] = [
  [4, 0, 3, 1, "#FFE3A3"],
  [3, 1, 5, 2, "#FFC94D"],
  [2, 3, 7, 3, "#FFC94D"],
  [3, 3, 2, 2, "#FFF4E3"], // glint
  [3, 6, 5, 2, "#FFA05C"],
  [4, 8, 3, 2, "#FF7A3D"],
  [5, 10, 1, 1, "#E8542F"],
  [3, 12, 5, 1, "#3E2A73"], // pedestal
  [2, 13, 7, 1, "#2B1B57"],
]

const INPUT_CLASSES = `w-full bg-dusk-900 border-2 py-3 px-4 outline-none transition-colors duration-300
  font-body text-base text-cream-100 placeholder:text-mist-300/40`

// emailjs client config (public by design — these ship to the browser)
const EMAILJS_SERVICE = "service_4pb3ggh"
const EMAILJS_TEMPLATE = "template_pywz32o"
const EMAILJS_PUBLIC_KEY = "KYY6otaGCLsqxiMvq"

export default function SavePoint() {
  const reduceMotion = useReducedMotion()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending">("idle")
  const [shake, setShake] = useState(false)
  const [toast, setToast] = useState({
    show: false,
    type: "info" as "success" | "error" | "info",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const showToast = (type: "success" | "error" | "info", message: string) => {
    setToast({ show: true, type, message })
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3500)
  }

  const validateForm = (): boolean => {
    const newErrors: Errors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email"
    if (!form.message.trim()) newErrors.message = "Message cannot be empty"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      setShake(true)
      setTimeout(() => setShake(false), 600)
      return
    }

    setStatus("sending")
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form, EMAILJS_PUBLIC_KEY)
      showToast("success", "Progress saved — message sent!")
      setForm({ name: "", email: "", message: "" })
    } catch {
      showToast("error", "Save failed. Please try again.")
    } finally {
      setStatus("idle")
    }
  }

  function AnimateError({ message }: { message?: string }) {
    return (
      <div className="absolute -bottom-5 left-0">
        <AnimatePresence mode="wait">
          {message && (
            <motion.p
              key={message}
              initial={reduceMotion ? false : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
              className="font-arcade text-[8px] uppercase tracking-wide text-sunset-500"
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const borderFor = (error?: string) =>
    error ? "border-sunset-600" : "border-dusk-700 focus:border-gold-400"

  return (
    <section
      id="contact"
      aria-label="Save point"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-7" title="SAVE POINT" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* NPC dialog */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pixel-border bg-dusk-900 mx-1 p-6 md:p-8 flex gap-6 items-start"
            >
              <div aria-hidden="true" className="shrink-0 animate-blink [animation-duration:2.4s]">
                <svg viewBox="0 0 11 14" className="crisp w-12 md:w-14" shapeRendering="crispEdges">
                  <PixelRects rects={CRYSTAL} />
                </svg>
              </div>
              <div>
                <p className="font-arcade text-[9px] md:text-[10px] text-gold-400">
                  SAVE POINT REACHED
                </p>
                <p className="mt-4 font-body text-lg md:text-xl leading-relaxed text-cream-100">
                  Have a project in mind?{" "}
                  <span className="text-sunset-400 font-semibold">Let's build</span>{" "}
                  something remarkable together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="px-1 space-y-2"
            >
              <p className="font-arcade text-[8px] md:text-[9px] text-gold-400">DIRECT MAIL</p>
              <a
                href="mailto:jrodejon@gmail.com"
                className="inline-block font-body text-lg font-semibold text-cream-100 hover:text-gold-300 transition-colors"
              >
                jrodejon@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Save form */}
          <motion.div
            className="lg:col-span-7"
            animate={shake && !reduceMotion ? { x: [-4, 4, -4, 4, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10 px-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="relative">
                  <label htmlFor="sp-name" className="block mb-2 font-arcade text-[8px] md:text-[9px] text-gold-400">
                    NAME
                  </label>
                  <input
                    id="sp-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`${INPUT_CLASSES} ${borderFor(errors.name)}`}
                  />
                  <AnimateError message={errors.name} />
                </div>

                <div className="relative">
                  <label htmlFor="sp-email" className="block mb-2 font-arcade text-[8px] md:text-[9px] text-gold-400">
                    EMAIL
                  </label>
                  <input
                    id="sp-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${INPUT_CLASSES} ${borderFor(errors.email)}`}
                  />
                  <AnimateError message={errors.email} />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="sp-message" className="block mb-2 font-arcade text-[8px] md:text-[9px] text-gold-400">
                  MESSAGE
                </label>
                <textarea
                  id="sp-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What are we building?"
                  className={`${INPUT_CLASSES} resize-none ${borderFor(errors.message)}`}
                />
                <AnimateError message={errors.message} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group pixel-border mx-1 bg-dusk-900 px-8 py-4 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 hover:bg-dusk-800 transition-colors disabled:opacity-60 focus-ring"
              >
                {status === "sending" ? "SAVING..." : "▸ SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast type={toast.type} message={toast.message} show={toast.show} onClose={() => setToast(prev => ({ ...prev, show: false }))} />
    </section>
  )
}
