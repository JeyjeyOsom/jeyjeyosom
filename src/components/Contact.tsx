import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "emailjs-com"
import Toast from "./ui/Toast"

interface Errors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
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
      await emailjs.send(
        "service_4pb3ggh",
        "template_pywz32o",
        form,
        "KYY6otaGCLsqxiMvq"
      )

      setStatus("success")
      showToast("success", "Message sent successfully! 📬")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      showToast("error", "Oops, something went wrong. Please try again.")
    } finally {
      setStatus("idle")
    }
  }

  // Shared classes for input styling to keep the JSX clean
  const inputBaseClasses = `w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 
    bg-slate-50 dark:bg-gray-900 
    text-slate-900 dark:text-gray-100 
    placeholder:text-slate-400 dark:placeholder:text-gray-500`

  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Let’s Connect 👋
        </h2>
        <p className="text-slate-500 dark:text-gray-400 mb-12 text-lg leading-relaxed">
          Have a question, idea, or opportunity? Send me a message — I’d love to hear from you.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          animate={shake ? { x: [-8, 8, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2 ml-1">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.005 }}
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`${inputBaseClasses} ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
                  : "border-slate-200 dark:border-gray-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white dark:focus:bg-gray-800"
              }`}
              placeholder="Your name"
            />
            <AnimateError message={errors.name} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2 ml-1">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.005 }}
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`${inputBaseClasses} ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
                  : "border-slate-200 dark:border-gray-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white dark:focus:bg-gray-800"
              }`}
              placeholder="you@email.com"
            />
            <AnimateError message={errors.email} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2 ml-1">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.005 }}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`${inputBaseClasses} resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
                  : "border-slate-200 dark:border-gray-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white dark:focus:bg-gray-800"
              }`}
              placeholder="Write your message here..."
            />
            <AnimateError message={errors.message} />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${
              status === "sending" 
                ? "bg-slate-400 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 dark:shadow-none"
            }`}
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      <Toast
        type={toast.type}
        message={toast.message}
        show={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </section>
  )
}

/** Animated error message component */
import { AnimatePresence, motion as m } from "framer-motion"
function AnimateError({ message }: { message?: string }) {
  return (
    <div className="h-6"> {/* Fixed height to prevent layout jump */}
        <AnimatePresence mode="wait">
        {message && (
            <m.p
            key={message}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-red-500 mt-1 ml-1"
            >
            {message}
            </m.p>
        )}
        </AnimatePresence>
    </div>
  )
}