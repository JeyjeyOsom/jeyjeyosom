import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/JeyjeyOsom",
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/jeyjey0som96/",
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:jrodejon@gmail.com",
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
    },
  ]

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Subtle top divider line */}
        <div className="w-full h-[1px] bg-slate-100 dark:bg-gray-900 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">
              Juan Dejon.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} — Engineering with purpose.
            </p>
          </div>

          {/* Center/Right: Social Links as Textual Buttons */}
          <div className="flex items-center gap-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -2 }}
                title={social.label}
              >
                <span className="p-1.5 rounded-full border border-transparent group-hover:border-slate-100 dark:group-hover:border-gray-800 transition-all">
                  {social.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline-block">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right: Small Tech Stack Note */}
          <div className="hidden lg:block">
             <p className="text-[10px] text-slate-300 dark:text-gray-800 font-serif italic">
               Built with React & Tailwind
             </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}