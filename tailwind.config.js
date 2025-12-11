/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fff7d6",
          100: "#ffeaa3",
          200: "#ffdd70",
          300: "#ffd13d",
          400: "#ffc40a",
          500: "#e6ab00",
          600: "#b38600",
        }
      }
    }
  },
  plugins: [],
};
