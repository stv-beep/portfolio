/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-rgba': 'rgba(229, 231, 235, 0.80)'
      },
    },
  },
  plugins: [],
}