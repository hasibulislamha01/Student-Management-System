/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f33823'
      }
    },
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui],
}

