import Navbar from "./components/Navbar"
import TitleScreen from "./components/zones/TitleScreen"
import StatsScreen from "./components/zones/StatsScreen"
import QuestLog from "./components/zones/QuestLog"
import Inventory from "./components/zones/Inventory"
import LevelSelect from "./components/zones/LevelSelect"
import RecordsScreen from "./components/zones/RecordsScreen"
import SavePoint from "./components/zones/SavePoint"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Noise from "./components/Noise"
import PlayMode from "./components/play/PlayMode"
import { PlayModeProvider, usePlayMode } from "./components/play/PlayModeContext"
import { ThemeProvider } from "./components/ThemeContext"

function World() {
  const { playing } = usePlayMode()

  return (
    <div className="min-h-screen">
      {/* Browse chrome steps aside while the keyboard drives the World */}
      {!playing && <Navbar />}
      <main>
        <Noise />
        <TitleScreen />
        <StatsScreen />
        <QuestLog />
        <Inventory />
        <LevelSelect />
        <RecordsScreen />
        <SavePoint />
        <Footer />
        {!playing && <ScrollToTop />}
      </main>
      <PlayMode />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PlayModeProvider>
        <World />
      </PlayModeProvider>
    </ThemeProvider>
  )
}
