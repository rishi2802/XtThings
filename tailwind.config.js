/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'], // Customize if needed
      },
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
  },
  plugins: [],
}

