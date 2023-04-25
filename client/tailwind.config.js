/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#171825",
        primary: "#24263A",
        secondary: "1D1E2C",
        tertiary: "#6F3F8B",
      }
    },
  },
  plugins: [],
}

