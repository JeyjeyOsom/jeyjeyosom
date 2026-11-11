import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { smoothScrollTo } from "../utils/smoothScroll"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Running", href: "#running" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("hero")
  const [scrolled, setScrolled] = useState(false)

  // --- FAVICON & BROWSER THEME LOGIC ---
  // The favicon sits on the browser's chrome, so it follows the OS
  // color scheme; the page itself is always dusk.
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

    // Mobile browser address bar: always the dusk sky
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#140B2E');

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
        ? "py-3 bg-dusk-950/90 backdrop-blur-xl border-b-2 border-dusk-800"
        : "py-5 bg-transparent"
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
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}