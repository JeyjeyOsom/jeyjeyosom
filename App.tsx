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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
        <ScrollToTop />
      </main>
    </div>
  )
}
