/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        accent: "Electroharmonix",
      },
      colors:{
        'header-primary': "#C3AA13",
        'background-color': "#141414"
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translate(-2vw)', 'opacity':1 },
          '100%': { transform: 'translate(102vw)', 'opacity':0.3 },
        },
      },
      animation: {
        'walking-ninja': 'walk 20s linear infinite',
      },
    },
  },
  plugins: [],
}