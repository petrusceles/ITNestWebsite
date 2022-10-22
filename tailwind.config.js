/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#8b5cf6',
        'secondary':'#67e8f9',
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
    },
    animation: {
      slide100: 'slide 1s infinite',
      slideMobile100: 'slideMobile 1s infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(-400px)'},
        // '50%': { transform: 'translateX(0px)'},
        '100%': { transform: 'translateX(400px)'},
      },
      slideMobile: {
        '0%': { transform: 'translateX(-450px)'},
        // '50%': { transform: 'translateX(0px)'},
        '100%': { transform: 'translateX(450px)'},
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
