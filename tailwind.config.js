/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#Fb923c",
        secondary: "#f3f3f3",
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
    },
  },
  plugins: [],
};
