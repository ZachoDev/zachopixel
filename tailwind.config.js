/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[class*="app-dark"]'],
  content: [
    './components//*.{vue,js}',
    './layouts//*.vue',
    './pages//*.vue',
    './composables//*.{js,ts}',
    './plugins//*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}'
  ],
  plugins: [require('tailwindcss-primeui')],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px'
    }
  }
};