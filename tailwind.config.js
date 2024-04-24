/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'baseorange': '#d65627',
      },
      backgroundColor: {
        'custom': '#d86135ea',
        'beige' : '#eceada',
        'dahlia' : '#d8cfd0',
        // 'bronze' : '#563727',
        'bronze' : '#363538',
      },
    },
  },
  plugins: [],
}