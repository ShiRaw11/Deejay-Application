

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'red-700':'#be123c',
      'blue':'#2563eb',
      'gray':'#71717a',
    },
    extend: {
      backgroundImage:{
        'backg':"url('data:image/jpeg;base64,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')"
      }
    },
  },
  plugins: [],
}