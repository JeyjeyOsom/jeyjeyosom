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
    setTimeout(() => setToast({ ...toast, show: false }), 3500)
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
      // Trigger subtle shake animation on form if invalid
      setShake(true)
      setTimeout(() => setShake(false), 600)
      return
    }

    setStatus("sending")
    try {
      await emailjs.send(
        "service_4pb3ggh", // ← service ID
        "template_pywz32o", // ← template ID
        form,
        "KYY6otaGCLsqxiMvq" // ← public key
      )

      setStatus("success")
      showToast("success", "Message sent successfully! 📬")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJS Error:", err)
      setStatus("error")
      showToast("error", "Oops, something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Let’s Connect 👋</h2>
        <p className="text-gray-400 mb-10">
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={`w-full rounded-lg border px-4 py-3 text-gray-100 bg-gray-900 focus:outline-none transition ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-600"
                  : "border-gray-700 focus:ring-2 focus:ring-blue-500"
              }`}
              placeholder="Your name"
            />
            <AnimateError message={errors.name} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={`w-full rounded-lg border px-4 py-3 text-gray-100 bg-gray-900 focus:outline-none transition ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-600"
                  : "border-gray-700 focus:ring-2 focus:ring-blue-500"
              }`}
              placeholder="you@email.com"
            />
            <AnimateError message={errors.email} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full rounded-lg border px-4 py-3 text-gray-100 bg-gray-900 focus:outline-none resize-none transition ${
                errors.message
                  ? "border-red-500 focus:ring-2 focus:ring-red-600"
                  : "border-gray-700 focus:ring-2 focus:ring-blue-500"
              }`}
              placeholder="Write your message here..."
            />
            <AnimateError message={errors.message} />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 rounded-lg font-medium text-white transition ${
              status === "sending" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Toast Notification */}
      <Toast
        type={toast.type}
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  )
}

/** Animated error message component */
import { AnimatePresence, motion as m } from "framer-motion"
function AnimateError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <m.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-red-500 mt-2"
        >
          {message}
        </m.p>
      )}
    </AnimatePresence>
  )
}
