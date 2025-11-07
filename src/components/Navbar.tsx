import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { smoothScrollTo } from "../utils/smoothScroll"

interface NavbarProps {
  dark: boolean
  setDark: (value: boolean) => void
}

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("hero")

  // Track scroll position to highlight active section
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-semibold text-blue-400">
          Juan<span className="text-white">Dejon</span>
        </a>

        {/* Desktop Links */}
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
                className={`cursor-pointer text-sm font-medium transition-colors ${
                    active === link.href.replace("#", "")
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
                >
                {link.label}
                </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 pb-4">
          {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(link.href)
                    setMenuOpen(false)
                }}
                className={`cursor-pointer text-sm font-medium transition-colors ${
                    active === link.href.replace("#", "")
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
                >
                {link.label}
                </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="mt-2 flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">Toggle Theme</span>
          </button>
        </div>
      )}
    </nav>
  )
}
