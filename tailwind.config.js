/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        topWave: "url('./src/assets/ErfaringWave.svg')",
        botWave: "url('./src/assets/BottomWave.svg')",
      },
    },
  },
  plugins: [],
};
