/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a43f49',
          hover: '#8a353d',
          light: '#c15761',
          dark: '#7a2f37',
        },
      },
    },
  },
  plugins: [],
};