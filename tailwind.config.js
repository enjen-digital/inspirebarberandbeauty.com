/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfbf6',
          100: '#fcf7ed',
          200: '#f5efe1',
          300: '#ede4d1',
          400: '#e5d9c1',
          500: '#ddceb1',
          600: '#d5c3a1',
          700: '#cdb891',
          800: '#c5ad81',
          900: '#bda271',
        },
        navy: {
          50: '#f2f5f9',
          100: '#e5ebf4',
          200: '#d1dbe9',
          300: '#b3c5dd',
          400: '#8fa7cc',
          500: '#738bbd',
          600: '#5d71af',
          700: '#1B3668',
          800: '#3d4b8f',
          900: '#354076',
        },
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a9b5',
          400: '#ec758a',
          500: '#e14a66',
          600: '#cc2548',
          700: '#8B1D2C', // Main brand color
          800: '#731A26', // Darker shade
          900: '#5F1720', // Darkest shade
        },
      },
    },
  },
  plugins: [],
}