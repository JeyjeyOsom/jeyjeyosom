import Navbar from "./components/Navbar"
import TitleScreen from "./components/zones/TitleScreen"
import StatsScreen from "./components/zones/StatsScreen"
import QuestLog from "./components/zones/QuestLog"
import Inventory from "./components/zones/Inventory"
import LevelSelect from "./components/zones/LevelSelect"
import SavePoint from "./components/zones/SavePoint"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Noise from "./components/Noise"
import PlayMode from "./components/play/PlayMode"
import { PlayModeProvider, usePlayMode } from "./components/play/PlayModeContext"
import { ThemeProvider } from "./components/ThemeContext"
import { SoundProvider } from "./components/SoundContext"
import { RoamProvider, useRoam } from "./components/roam/RoamContext"
import RoamLayer from "./components/roam/RoamLayer"

function World() {
  const { playing } = usePlayMode()
  // While the Overworld covers the page, the page is out of reach
  const { covering } = useRoam()

  return (
    <div className="min-h-screen">
      {/* Browse chrome steps aside while the keyboard drives the World */}
      {!playing && !covering && <Navbar />}
      <main inert={covering}>
        <Noise />
        <TitleScreen />
        <StatsScreen />
        <QuestLog />
        <Inventory />
        <LevelSelect />
        {/* RecordsScreen (the Running Zone) is benched until the Run Data
            totals are real — restore it here and in zones/registry.ts */}
        <SavePoint />
        <Footer />
        {!playing && <ScrollToTop />}
      </main>
      <PlayMode />
      <RoamLayer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <PlayModeProvider>
          <RoamProvider>
            <World />
          </RoamProvider>
        </PlayModeProvider>
      </SoundProvider>
    </ThemeProvider>
  )
}
