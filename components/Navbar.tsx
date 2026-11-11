import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { smoothScrollTo } from "../utils/smoothScroll"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeContext"
import { WORLD_MAP } from "./zones/registry"

const links = WORLD_MAP.map((zone) => ({ label: zone.navLabel, href: `#${zone.id}` }))

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("title")
  const [scrolled, setScrolled] = useState(false)

  const { theme, toggle } = useTheme()

  // --- FAVICON LOGIC ---
  // The favicon sits on the browser's chrome, so it follows the OS color
  // scheme, not the site theme. (The theme-color meta lives in ThemeContext.)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        // A 'v' parameter with the current time forces a refresh
        const version = new Date().getTime();
        const themeSuffix = media.matches ? "#dark" : "";
        favicon.href = `${import.meta.env.BASE_URL}icon.svg?v=${version}${themeSuffix}`;
      }
    };
    updateFavicon();
    media.addEventListener("change", updateFavicon);
    return () => media.removeEventListener("change", updateFavicon);
  }, []);

  // --- PREVIOUS FIXES: SCROLL LOCK & SECTION DETECTION ---
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Force "Home" if at the very top
      if (window.scrollY < 100) {
        setActive("title")
        return
      }

      const sections = document.querySelectorAll("section[id]")
      let current = "title"
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
        ? "py-3 bg-dusk-950/90 backdrop-blur-xl border-b-2 border-dusk-800"
        : "py-5 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-[70]">

        {/* Logo - Fixed Home Link */}
        <a
          href="#title"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#title");
            setActive("title");
            setMenuOpen(false);
          }}
          className="font-pixel font-bold text-xl tracking-wide text-cream-100 uppercase group"
        >
          JD<span className="text-gold-400 group-hover:pl-1 transition-all">.</span>
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
                className={`relative font-arcade text-[9px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-gold-400"
                    : "text-mist-300 hover:text-cream-100"
                }`}
              >
                {link.label}
                {active === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-gold-400"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="h-4 w-[2px] bg-dusk-700 mx-2" />

          {/* Theme toggle: dusk (sunset) ↔ dawn (sunrise) */}
          <button
            onClick={toggle}
            aria-label={theme === "dusk" ? "Switch to dawn theme" : "Switch to dusk theme"}
            className="text-mist-300 hover:text-gold-400 transition-colors p-1"
          >
            <AnimatePresence mode="wait">
              {theme === "dusk" ? (
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
          className="md:hidden text-cream-100 p-2 transition-transform active:scale-90"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            className="scanlines fixed inset-0 z-[60] w-full h-[100dvh] bg-dusk-950 md:hidden flex flex-col items-center justify-center overflow-hidden"
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
                  className={`font-pixel font-bold text-3xl tracking-wide transition-all ${
                    active === link.href.replace("#", "")
                      ? "text-gold-400"
                      : "text-cream-100"
                  }`}
                >
                  <span aria-hidden="true" className={active === link.href.replace("#", "") ? "" : "invisible"}>▸ </span>
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={toggle}
              className="pixel-border mt-20 mx-1 flex items-center gap-4 px-10 py-4 bg-dusk-900 text-cream-100 font-arcade text-[9px] uppercase tracking-[0.15em]"
            >
              {theme === "dusk" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dusk" ? "Dawn Mode" : "Dusk Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}