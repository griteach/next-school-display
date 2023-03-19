/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-snap": "#fffc00",
        "yellow-chat": "#ffffff",
        "mojito-l": "#9CECFB",
        "mojito-r": "#0052D4",
        "weather-l": "#E062E6",
        "weather-r": "#7B63ED",
        "rea-l": "#799F0C",
        "rea-r": "#FFE000",
      },
    },
  },
  plugins: [],
};
