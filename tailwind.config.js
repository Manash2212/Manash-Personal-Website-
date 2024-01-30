/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#Fb923c",
        primary: "#0dc1d1",
        secondary: "#f3f3f3",
        navPrm: "rgb(17 24 39 / 0.91)",
        navSec: "rgb(243 243 243 / 0.90)",
        queen: "fcd8a9",
        gradiant: " linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      },
      fontFamily: {
        roboto: ["Roboto"],
        instrument: ["Instrument"],
      },
      container: {
        center: "true",
        padding: {
          default: "0.5rem",
          md: "3rem",
        },
      },
      backgroundImage: {
        circularLight: `repeating-radial-gradient(rgba(0,0,0,0.5) 2px, #f5f5f5 5px,#f5f5f5 100px)`,
        circularDark: `repeating-radial-gradient(rgba(250,250,250,0.3) 2px, #0f172a 5px,#0f172a 100px)`,

        //For  Medium Screen Increasing the Ring count
        circularLightMD: `repeating-radial-gradient(rgba(0,0,0,0.5) 2px, #f5f5f5 5px,#f5f5f5 80px)`,
        circularDarkMD: `repeating-radial-gradient(rgba(250,250,250,0.3) 2px, #0f172a 5px,#0f172a 80px)`,

        //For  Small Screen Increasing the Ring count
        circularLightSM: `repeating-radial-gradient(rgba(0,0,0,0.5) 2px, #f5f5f5 5px,#f5f5f5 60px)`,
        circularDarkSM: `repeating-radial-gradient(rgba(250,250,250,0.3) 2px, #0f172a 5px,#0f172a 60px)`,
      },
    },
  },
  plugins: [],
};
