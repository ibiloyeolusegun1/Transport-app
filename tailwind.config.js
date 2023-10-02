/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bodySilver': '#F5F7FA',
        'mainDGrey': '#4D4D4D',
        'brandPrimary': '#1A57E6',
        'bodyGrey': '#717171',
        'txtGrey900': '#18191f',
      }
    },
  },
  plugins: [],
}

