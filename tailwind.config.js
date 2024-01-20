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
        queen: "fcd8a9",
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
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
      backgroundImage: {
        circularLight: `repeating-radial-gradient(rgba(0,0,0,0.5) 2px, #f5f5f5 5px,#f5f5f5 100px)`,
        circularDark: `repeating-radial-gradient(rgba(250,250,250,0.3) 2px, #0f172a 5px,#0f172a 100px)`,
      },
    },
  },
  plugins: [],
};
