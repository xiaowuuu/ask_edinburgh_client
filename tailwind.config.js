/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ABeeZee':['"ABeeZee"', 'sans-serif'],
        'amatic': ["Amatic SC", 'sans-serif'],
      },
    },
  },
  plugins: [],
}