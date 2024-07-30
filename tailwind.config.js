/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        comorant: ["Cormorant SC", "serif"],
      },
      backgroundImage: {
        topWave: "url('./assets/ErfaringWave.svg')",
        botWave: "url('./assets/BottomWave.svg')",
      },
    },
  },
  plugins: [],
};
