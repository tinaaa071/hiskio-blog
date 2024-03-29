/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

