/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white-rgba': 'rgba(229, 231, 235, 0.80)'
      },
      screens: {
        's': {'max': '768px'},
        'ms': {'max': '640px'},
        'xs': {'max': '540px'},
        'xxs': {'max': '400px'},
        '3xl': {'min': '2048px'}
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}