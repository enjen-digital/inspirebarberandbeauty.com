/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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