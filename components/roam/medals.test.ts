import { describe, expect, it } from "vitest"
import { KITS, MEDALS, MedalBook } from "./medals"

describe("the Medal book", () => {
  it("earns a plain Medal once", () => {
    const book = new MedalBook()
    expect(book.record("birds")?.medal.id).toBe("birds")
    expect(book.record("birds")).toBeNull()
    expect(book.has("birds")).toBe(true)
  })

  it("earns a set Medal only when the set is full of different keys", () => {
    const book = new MedalBook()
    const herd = MEDALS.find((m) => m.id === "herd")!
    for (let i = 0; i < herd.needs! - 1; i++) expect(book.record("herd", String(i))).toBeNull()
    expect(book.record("herd", "0")).toBeNull() // the same cow twice
    expect(book.progress("herd")).toBe(herd.needs! - 1)
    expect(book.record("herd", "last")?.medal.id).toBe("herd")
  })

  it("unlocks each Kit at its count, and won't wear a locked one", () => {
    const book = new MedalBook()
    book.setKit("gold")
    expect(book.kit().id).toBe("race")
    const unlocked: string[] = []
    for (const m of MEDALS) {
      const keys = m.needs ? Array.from({ length: m.needs }, (_, i) => String(i)) : [undefined]
      for (const key of keys) {
        const won = book.record(m.id, key)
        if (won) unlocked.push(...won.kits.map((k) => k.id))
      }
    }
    expect(book.count()).toBe(MEDALS.length)
    expect(unlocked).toEqual(KITS.filter((k) => k.needs > 0).map((k) => k.id))
    book.setKit("gold")
    expect(book.kit().id).toBe("gold")
  })
})
