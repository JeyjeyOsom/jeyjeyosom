import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/jeyjeyosom/",
  plugins: [react()],
  build: {
    // The largest chunk is Roam Mode's (three.js), loaded only when a
    // visitor enters the Overworld; the page's own bundle stays small.
    chunkSizeWarningLimit: 700,
  },
})

//local
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
