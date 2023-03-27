/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GangwonEdu_OTFBoldA", "Arial", "sans-serif"],
        gwe: ["GangwonEdu_OTFBoldA", "sans-serif"],
        gwe_bold: ["GangwonEduPowerExtraBoldA", "sans-serif"],
        gwe_medium: ["GangwonEduSaeeum_OTFMediumA", "sans-serif"],
      },
      colors: {
        "yellow-snap": "#fffc00",
        "yellow-chat": "#ffffff",
        "mojito-l": "#08C8F6",
        "mojito-r": "#4D5DFB",
        "weather-l": "#E062E6",
        "weather-r": "#7B63ED",
        "rea-l": "#799F0C",
        "rea-r": "#FFE000",
        "dust-l": "#CCCCB2",
        "dust-r": "#757519",
        "weather-clear-t": "#231BB1",
        "weather-clear-b": "#91A4E1",
      },
    },
  },
  plugins: [],
};
