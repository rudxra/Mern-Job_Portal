/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#141414",
        "pink":"rgb(248 113 113)",
        "purple":"rgb(134 25 143)",
        "blue":"rgb(134 25 143)",
        "slate":"rgb(30 41 59)",
        "red":"rgb(248 113 113)"
      }
    },
  },
  plugins: [],
}

