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
  const [scrolled, setScrolled] = useState(false)

// --- UPDATED: FAVICON & BROWSER THEME LOGIC ---
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      // We add a 'v' parameter with the current time to force a refresh
      const version = new Date().getTime();
      const themeSuffix = dark ? "#dark" : "";
      favicon.href = `/icon.svg?v=${version}${themeSuffix}`;
    }

    // Update Mobile Browser Address Bar Color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', dark ? '#0a0a0a' : '#ffffff');
  }, [dark]);

  // --- PREVIOUS FIXES: SCROLL LOCK & SECTION DETECTION ---
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Force "Home" if at the very top
      if (window.scrollY < 100) {
        setActive("hero")
        return
      }

      const sections = document.querySelectorAll("section[id]")
      let current = "hero"
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        // Active when section top is near the navbar
        if (rect.top <= 160 && rect.bottom >= 160) {
          current = section.id
        }
      })
      setActive(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "py-4 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-slate-100 dark:border-gray-900" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-[70]">
        
        {/* Logo - Fixed Home Link */}
        <a
          href="#hero"
          onClick={(e) => { 
            e.preventDefault(); 
            smoothScrollTo("#hero"); 
            setActive("hero"); 
            setMenuOpen(false); 
          }}
          className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase group"
        >
          JD<span className="text-indigo-600 group-hover:pl-1 transition-all">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(link.href)
                  setActive(link.href.replace("#", ""))
                }}
                className={`relative text-[10px] uppercase tracking-[0.2em] font-black transition-colors duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-indigo-600 dark:text-white"
                    : "text-slate-400 dark:text-gray-600 hover:text-slate-900 dark:hover:text-gray-300"
                }`}
              >
                {link.label}
                {active === link.href.replace("#", "") && (
                  <motion.div 
                    layoutId="navActive"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-indigo-600 dark:bg-white"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-gray-800 mx-2" />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="text-slate-400 dark:text-gray-600 hover:text-indigo-600 dark:hover:text-white transition-colors p-1"
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.div key="sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Toggle Button - High Z-Index to stay visible */}
        <button
          className="md:hidden text-slate-900 dark:text-white p-2 transition-transform active:scale-90"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* CLEAN FULL-SCREEN MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] w-full h-[100dvh] bg-white dark:bg-[#0a0a0a] md:hidden flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(link.href)
                    setMenuOpen(false)
                    setActive(link.href.replace("#", ""))
                  }}
                  className={`text-4xl font-black tracking-tighter transition-all ${
                    active === link.href.replace("#", "") 
                      ? "text-indigo-600 scale-110" 
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setDark(!dark)}
              className="mt-20 flex items-center gap-4 px-10 py-4 rounded-full border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-[0.2em]"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              {dark ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}