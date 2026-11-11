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
        // Sunset-Runner Palette roles (see CONTEXT.md). Values live as RGB
        // triplets in index.css :root (dusk) and html.dawn (sunrise).
        dusk: {
          950: "rgb(var(--dusk-950) / <alpha-value>)",
          900: "rgb(var(--dusk-900) / <alpha-value>)",
          800: "rgb(var(--dusk-800) / <alpha-value>)",
          700: "rgb(var(--dusk-700) / <alpha-value>)",
          600: "rgb(var(--dusk-600) / <alpha-value>)",
        },
        sunset: {
          600: "rgb(var(--sunset-600) / <alpha-value>)",
          500: "rgb(var(--sunset-500) / <alpha-value>)",
          400: "rgb(var(--sunset-400) / <alpha-value>)",
          300: "rgb(var(--sunset-300) / <alpha-value>)",
        },
        gold: {
          400: "rgb(var(--gold-400) / <alpha-value>)",
          300: "rgb(var(--gold-300) / <alpha-value>)",
        },
        magenta: {
          500: "rgb(var(--magenta-500) / <alpha-value>)",
        },
        cream: {
          100: "rgb(var(--cream-100) / <alpha-value>)",
        },
        mist: {
          300: "rgb(var(--mist-300) / <alpha-value>)",
        },
        ground: "rgb(var(--ground) / <alpha-value>)",
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
