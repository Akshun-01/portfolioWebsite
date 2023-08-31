/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: "Electroharmonix",
      },
      colors:{
        'header-primary': "#C3AA13",
      },
    },
  },
  plugins: [],
}