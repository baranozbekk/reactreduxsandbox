/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1ea4ce',
        'dark-blue': '#147594',
        'light-blue': '#f2f0fd',
        black: '#191919',
      },
    },
  },
  plugins: [],
}
