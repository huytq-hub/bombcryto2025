/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-green': '#4a9b3a',
        'game-blue': '#82a2f5',
        'game-gold': '#ffd700',
        'game-brown': '#8b4513',
        'game-red': '#ff0000',
      },
      fontFamily: {
        'pixel': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

