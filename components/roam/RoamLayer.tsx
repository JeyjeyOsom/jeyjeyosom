import { Component, lazy, Suspense, type ReactNode } from "react"
import { useRoam } from "./RoamContext"
import { RoamCover, RoamNotice } from "./RoamScreens"

// Roam Mode's always-loaded shell: three.js and the Overworld arrive as a
// separate chunk only when a visitor enters (ADR 0002), behind a loading
// card; anything that goes wrong becomes a message with a way back.

const RoamMode = lazy(() => import("./RoamMode"))

class RoamBoundary extends Component<{ onExit: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) {
      return (
        <RoamCover
          title="THE OVERWORLD COULDN'T START"
          message="It didn't load this time. The page is right where you left it."
          action={{ label: "BACK TO THE PAGE", onClick: this.props.onExit }}
        />
      )
    }
    return this.props.children
  }
}

export default function RoamLayer() {
  const { view, exit, notice, dismissNotice } = useRoam()
  return (
    <>
      {view !== "off" && (
        <RoamBoundary onExit={exit}>
          <Suspense fallback={<RoamCover title="LOADING THE OVERWORLD" />}>
            <RoamMode />
          </Suspense>
        </RoamBoundary>
      )}
      {notice && <RoamNotice message={notice} onDismiss={dismissNotice} />}
    </>
  )
}
