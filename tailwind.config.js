/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '400': '400px',
        '500': '500px',
      },
      screens: {
        'vsm': '550px',
      }
    },
  },
  plugins: [],
}