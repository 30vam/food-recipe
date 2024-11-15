/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'linkText': ['0 0 5px #0ff', '0 0 10px #f0f', '0 0 20px #ffffff'],
        'siteLogo': ['0 0 5px #fff', '0 0 10px #f0f',]
      }
    },
  },
  plugins: [],
}

