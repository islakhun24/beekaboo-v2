module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bee-orange': '#F2805F',
        'bee-yellow': '#FFD101',
        'bee-blue': '#90CAF9',
        'bee-pink': '#EFB7B9',
        'bee-purple': '#BAB4E4',
        'bee-purple-old': '#BA68C8',
        'bee-green': '#B8F2A8',
        'bee-pink-young': '#FFE9F5',
        'bee-pink-old': '#E95885',
        'bee-white': '#FFFFFF',
        'bee-black': '#333333',
        'bee-brown': '#A1616A',
        'bee-red': '#A4123F'
        

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
