import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import ScrollProgress from "./components/ScrollProgress"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Skills from './components/Skills'
import Experience from './components/Experience'
import Noise from './components/Noise'

export default function App() {
  const [dark, setDark] = useState(() => {
    // Load previous theme from localStorage
    return localStorage.getItem("theme") === "dark"
  })

  // Apply dark mode class to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen  bg-white dark:bg-gray-900 text-gray-100 transition-colors duration-500">
        <Navbar dark={dark} setDark={setDark} />
        <main >
          {/* <ScrollProgress /> */}
          <Noise />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </main>

        
      </div>
    </div>
  )
}
