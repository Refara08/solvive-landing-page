/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-sol": "#FAFBFD",
        "dark-blue": "#03142A",
        "scnd-blue": "#16263B",
        "orange-sol": "#E56137",
      },
      fontFamily: {
        montserrat: ["Montserrat", "ui-serif"],
      },
    },
  },
  plugins: [],
};
