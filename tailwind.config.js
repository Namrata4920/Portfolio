const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Esteban"', 'sans-serif'] // Replace with the correct font name
      }
    }
  },
  plugins: []
}
