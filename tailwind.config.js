/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-dekstop': "url('../public/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('../public/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('../public/assets/home/background-home-tablet.jpg')",
        'destination-dekstop': "url('../public/assets/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('../public/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('../public/assets/destination/background-destination-tablet.jpg')",
        'crew-dekstop': "url('../public/assets/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('../public/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('../public/assets/crew/background-crew-tablet.jpg')",
      }
    },
  },
  plugins: [],
}

