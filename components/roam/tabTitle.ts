// The tab-title runner: while the Overworld is on screen, the browser tab
// becomes a tiny side-scroller. The Runner (🏃, who faces left in most
// emoji fonts) holds his place near the right while palms and the odd cow
// slide past at his own speed, so the strip stops when he stops and rushes
// when he sprints. Rain and a running Lap get a mark too. The real title
// comes back whenever the island isn't showing.
//
// A title that keeps changing is noise in history, bookmarks and screen
// readers, so it only moves while he does, at most a few times a second,
// and holds still under reduced motion.

const WIDTH = 15
const RUNNER_AT = WIDTH - 4
/** characters of strip per world unit he covers */
const CHARS_PER_UNIT = 0.9
/** the fastest the title is rewritten */
const MIN_INTERVAL = 160

/** A blank cell: an ideographic space, about an emoji wide, which (unlike
 *  an ordinary space) the browser doesn't collapse in a title */
const GAP = "\u3000"

/** What stands at a place along the strip's endless road */
function scenery(n: number): string {
  const m = ((n % 290) + 290) % 290
  if (m % 11 === 0) return "🌴"
  if (m % 29 === 7) return "🐄"
  return GAP
}

export class TabTitle {
  private original: string | null = null
  private pos = 0
  private lastText = ""
  private lastWrite = 0
  private readonly still: boolean

  constructor(still: boolean) {
    this.still = still
  }

  get running(): boolean {
    return this.original !== null
  }

  start() {
    if (this.original === null) this.original = document.title
    this.write(true)
  }

  /** Advance by however far he ran; `lap` is the Lap on his watch, if any */
  update(distance: number, raining: boolean, lap: string | null) {
    if (this.original === null) return
    if (!this.still) this.pos += distance * CHARS_PER_UNIT
    this.write(false, raining, lap)
  }

  stop() {
    if (this.original === null) return
    document.title = this.original
    this.original = null
    this.lastText = ""
  }

  private write(force: boolean, raining = false, lap: string | null = null) {
    const name = this.original ?? document.title
    let text: string
    if (this.still) {
      text = `🏃 The Overworld · ${name}`
    } else {
      const shift = Math.floor(this.pos)
      let strip = ""
      for (let c = 0; c < WIDTH; c++) strip += c === RUNNER_AT ? "🏃" : scenery(c - shift)
      text = `${raining ? "🌧" : ""}${strip}${lap ? `⏱${lap}` : ""} · ${name}`
    }
    const now = performance.now()
    if (text === this.lastText || (!force && now - this.lastWrite < MIN_INTERVAL)) return
    this.lastText = text
    this.lastWrite = now
    document.title = text
  }
}
