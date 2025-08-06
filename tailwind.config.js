/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tavern-primary': '#6366f1',
        'tavern-secondary': '#8b5cf6',
        'tavern-accent': '#06b6d4',
      },
    },
  },
  plugins: [],
} 