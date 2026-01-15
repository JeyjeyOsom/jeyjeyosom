import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { smoothScrollTo } from "../utils/smoothScroll"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  dark: boolean
  setDark: (value: boolean) => void
}

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("hero")

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = "hero"
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id
        }
      })
      setActive(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-md 
        border-b border-slate-200 dark:border-gray-700
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-slate-900 dark:text-blue-400 transition-colors"
        >
          Juan<span className="text-blue-600 dark:text-gray-100">Dejon</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(link.href)
                setMenuOpen(false)
              }}
              className={`
                cursor-pointer text-sm font-medium transition-colors
                ${active === link.href.replace("#", "")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-gray-200"
                }
              `}
            >
              {link.label}
            </a>
          ))}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="relative w-10 h-10 flex items-center justify-center 
                       p-2 rounded-lg 
                       text-slate-600 dark:text-gray-300
                       hover:bg-slate-100 dark:hover:bg-gray-700 
                       transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-slate-100 dark:border-gray-800 px-6 pb-6 transition-colors shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(link.href)
                setMenuOpen(false)
              }}
              className={`
                block py-3 text-sm font-medium
                transition-colors
                ${active === link.href.replace("#", "")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500 hover:text-slate-900 dark:text-gray-400"
                }
              `}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="mt-2 w-full flex items-center gap-3 p-3 rounded-xl 
                       bg-slate-50 dark:bg-gray-900
                       hover:bg-slate-100 dark:hover:bg-gray-800 
                       transition-colors text-slate-700 dark:text-gray-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
            </div>
            <span className="text-sm font-medium">
                {dark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      )}
    </nav>
  )
}