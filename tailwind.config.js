const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Sansita-Regular"', 'sans-serif'] // Replace with the correct font name
      }
    },
    colors: {
      ...colors,
      primary: {
        100: '#f7f7f7',
        200: '#e2dfdf',
        300: '#b3b1b1',
        500: '#000000'
      },
      secondary: {
        100: '#f4eddf',
        200: '#d8cfb8',
        300: '#d8cfb8',
        400: '#b6976b',
        500: '#28343a',
        600: '#bfb7a3'
      }
    }
  },
  plugins: []
}
