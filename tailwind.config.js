/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,ts}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Sunset-Runner Palette (see CONTEXT.md)
        dusk: {
          950: "#140B2E",
          900: "#1D1140",
          800: "#2B1B57",
          700: "#3E2A73",
          600: "#55408F",
        },
        sunset: {
          600: "#E8542F",
          500: "#FF7A3D",
          400: "#FFA05C",
          300: "#FFC084",
        },
        gold: {
          400: "#FFC94D",
          300: "#FFE3A3",
        },
        magenta: {
          500: "#C2366B",
        },
        cream: {
          100: "#FFF4E3",
        },
        mist: {
          300: "#B9A8D9",
        },
        // Legacy brand kept until every Zone is ported
        brand: {
          500: "#3B82F6",
          600: "#2563EB",
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', "sans-serif"],
        body: ['"Atkinson Hyperlegible"', "sans-serif"],
        arcade: ['"Press Start 2P"', "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 74%": { opacity: "1" },
          "75%, 100%": { opacity: "0" },
        },
        twinkle: {
          "0%, 70%": { opacity: "1" },
          "71%, 100%": { opacity: "0.25" },
        },
      },
      animation: {
        blink: "blink 1.2s steps(1, end) infinite",
        twinkle: "twinkle 2.4s steps(1, end) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
