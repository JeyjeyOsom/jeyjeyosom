import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import TitleScreen from "./components/zones/TitleScreen"
import StatsScreen from "./components/zones/StatsScreen"
import QuestLog from "./components/zones/QuestLog"
import Projects from "./components/Projects"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Skills from './components/Skills'
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
          <Noise />
          <TitleScreen />
          <StatsScreen />
          <QuestLog />
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
