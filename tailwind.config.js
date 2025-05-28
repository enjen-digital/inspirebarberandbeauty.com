/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfbf6',
          100: '#fcf7ed',
          200: '#f7ecd3',
          300: '#f2e0b9',
          400: '#e9c98a',
          500: '#e0b15b',
          600: '#ca8f2d',
          700: '#a87324',
          800: '#8a5e23',
          900: '#714d21',
        },
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a9b5',
          400: '#ec758a',
          500: '#e14a66',
          600: '#cc2548',
          700: '#8B1D2C',
          800: '#731A26',
          900: '#5F1720',
        },
      },
    },
  },
  plugins: [],
}