/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#4b2c85',
        'medium-blue': '#3355a1',
        'accent-green': '#1e7e34',
        'accent-maroon': '#800000',
        'text-dark': '#1B164D',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
