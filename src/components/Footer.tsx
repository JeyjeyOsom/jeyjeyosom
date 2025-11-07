import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:yourname@email.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ]

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-gray-800 py-10 bg-gray-950/90 text-gray-400"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            Built with ❤️ by{" "}
            <span className="text-blue-400 font-medium">Juan Dejon</span>
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
