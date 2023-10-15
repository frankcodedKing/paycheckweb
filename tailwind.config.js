/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          pri: {
            500: "#da373d",
          },
          sec: {
            100:"#f1f1f1",
            200:"#ccc",
            300:"#777",
            400:"#333",
            800:"#211F1D"
          },
          white:"#fff",
          green:"#3FDBA9",
          blue:"#385CC4",
          yellow:"#FFB13C",
        },
      },
    },
  },
  plugins: [],
}