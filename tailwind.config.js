/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#724dea',
        'secondary':'#09ecff',
        'dark':'#0f172a'
      }
    },
    container: {
      center:true
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    backgroundSize: {
      '50%':'50%'
    }
  },
  plugins: [],
}
