/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: "Jost",
        accent: "Electroharmonix",
      },
      colors:{
        'header-primary': "#C3AA13",
        'background-color': "#141414"
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translate(-2vw)' },
          '100%': { transform: 'translate(102vw)' },
        },
      },
      animation: {
        'walking-ninja': 'walk 50s linear infinite',
      },
    },
  },
  plugins: [],
}