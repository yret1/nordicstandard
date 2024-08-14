/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //poppins: ["Poppins", "sans-serif"],
        infant: ["Montserrat", "sans-serif"],
        comorant: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        botWave: "url('/src/assets/Mainbg.svg')",
        topYellow: "url('/src/assets/Stattop.svg')",
        botYellow: "url('/src/assets/Statbot.svg')",
      },
      colors: {
        bgmain: "#F8FAFC",
        head: "#F46036",
        sub: "black",
        optext: "#0C0A09",
        link: "white",
        buttonhover: "#315D93",
        hr: "#DACFC3",
        herohead: "White",
        herosub: "White",
        accent: "#316D93",
        servicebg: "",
        servicetext: "",
        cardbg: "white",
        bannerbg: "#FCA806",
        orango: "#FCA806",
        poopgreen: "#817C52",
        contact: "#F27984",

        contacthead: "#3B82F6",
        contacthr: "#60A5FA",
        contactdark: "#2563EB",

        borders: "#E2E8F0",

        servicecard: "DACFC3",
      },
    },
  },
  plugins: [],
};
