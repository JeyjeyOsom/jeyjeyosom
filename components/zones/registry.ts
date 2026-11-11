// The World's map: one entry per Zone, in traversal order.
// Feeds the Navbar links and the Play Mode HUD so adding a Zone is one edit.

export interface ZoneEntry {
  /** DOM anchor id of the Zone's section */
  id: string
  /** Plain wayfinding label in the Navbar */
  navLabel: string
  /** The Zone's name as the Play Mode HUD announces it */
  zoneName: string
}

export const WORLD_MAP: ZoneEntry[] = [
  { id: "title", navLabel: "Home", zoneName: "TITLE SCREEN" },
  { id: "about", navLabel: "About", zoneName: "STATS SCREEN" },
  { id: "experience", navLabel: "Experience", zoneName: "QUEST LOG" },
  { id: "skills", navLabel: "Skills", zoneName: "INVENTORY" },
  { id: "projects", navLabel: "Projects", zoneName: "LEVEL SELECT" },
  // Benched with the RecordsScreen render in App.tsx; restore together:
  // { id: "running", navLabel: "Running", zoneName: "RECORDS SCREEN" },
  { id: "contact", navLabel: "Contact", zoneName: "SAVE POINT" },
]
