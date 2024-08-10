/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      darkMode  : 'class',
      lightMode : 'class',
      fontFamily: {
        fonteP:  ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}