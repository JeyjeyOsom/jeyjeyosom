import { useState } from 'react'
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

export default function App() {
  const [dark, setDark] = useState(true)


  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
        {/* Navbar */}
        <Navbar dark={dark} setDark={setDark} />

        {/* Sections */}
        <main className="space-y-24 pt-24">
          <ScrollProgress />
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
