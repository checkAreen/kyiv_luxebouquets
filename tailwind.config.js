/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Gilroy'
      },
      colors: {
        primary: '#424245'
      },
      spacing: {
        '17': '4.25rem',
      }
    }
  },
  plugins: [],
}