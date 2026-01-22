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
      await emailjs.send("service_4pb3ggh", "template_pywz32o", form, "KYY6otaGCLsqxiMvq")
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

  const inputBaseClasses = `w-full bg-transparent border-b py-3 outline-none transition-all duration-500 
    text-slate-900 dark:text-white text-lg
    placeholder:text-slate-300 dark:placeholder:text-gray-700`

  return (
    <section id="contact" className="py-32 px-6 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Typography & Info */}
        <div className="lg:col-span-5 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.8]"
          >
            Get In <br />
            <span className="text-transparent stroke-text dark:text-white">Touch.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm"
          >
            Have a project in mind? <span className="italic font-serif text-indigo-600 dark:text-indigo-400">Let's build</span> something remarkable together.
          </motion.p>

          <div className="pt-8 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Direct Mail</p>
            <a href="mailto:jrodejon@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
              jrodejon@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side: Minimalist Form */}
        <motion.div 
          className="lg:col-span-7"
          animate={shake ? { x: [-4, 4, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="NAME"
                  className={`${inputBaseClasses} ${errors.name ? "border-red-500" : "border-slate-200 dark:border-gray-800 focus:border-indigo-600 dark:focus:border-white"}`}
                />
                <AnimateError message={errors.name} />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className={`${inputBaseClasses} ${errors.email ? "border-red-500" : "border-slate-200 dark:border-gray-800 focus:border-indigo-600 dark:focus:border-white"}`}
                />
                <AnimateError message={errors.email} />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="YOUR MESSAGE"
                className={`${inputBaseClasses} resize-none ${errors.message ? "border-red-500" : "border-slate-200 dark:border-gray-800 focus:border-indigo-600 dark:focus:border-white"}`}
              />
              <AnimateError message={errors.message} />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </span>
              <div className="h-[1px] w-12 bg-slate-900 dark:bg-white group-hover:w-24 transition-all duration-500" />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Toast type={toast.type} message={toast.message} show={toast.show} onClose={() => setToast(prev => ({ ...prev, show: false }))} />
      
      <style>{`
        .stroke-text { -webkit-text-stroke: 1px #0f172a; color: transparent; }
        :global(.dark) .stroke-text { -webkit-text-stroke: 1px #ffffff; color: transparent; }
      `}</style>
    </section>
  )
}
import { AnimatePresence, motion as m } from "framer-motion"

function AnimateError({ message }: { message?: string }) {
  return (
    <div className="absolute -bottom-6 left-0">
      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[10px] font-black uppercase text-red-500 tracking-tighter"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}