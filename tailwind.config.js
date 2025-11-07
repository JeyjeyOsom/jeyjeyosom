/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables manual dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#3B82F6", // Tailwind blue-500
          600: "#2563EB",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
