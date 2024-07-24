/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#31A062",
        secondary: "#FE555D",
      },
      fontFamily: {
        MontRegular: "MontRegular",
        MontMedium: "MontMedium",
        MontSemiBold: "MontSemiBold",
        MontBold: "MontBold",
        MontItalic: "MontItalic",
      },
    },
  },
  plugins: [],
};
