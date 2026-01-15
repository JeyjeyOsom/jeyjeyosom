import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/JeyjeyOsom",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/jeyjey0som96/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:jrodejon@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ]

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-slate-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-950/90 text-slate-500 dark:text-gray-400 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        {/* Branding & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-medium text-slate-700 dark:text-gray-300">
            Built with purpose by{" "}
            <span className="text-indigo-600 dark:text-blue-400 font-bold tracking-tight">
              Juan Dejon
            </span>
          </p>
          <p className="text-xs text-slate-400 dark:text-gray-500 italic">
            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-50 dark:bg-gray-900 text-slate-400 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 border border-slate-100 dark:border-gray-800 transition-all shadow-sm hover:shadow-md"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}