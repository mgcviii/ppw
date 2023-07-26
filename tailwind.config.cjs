/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/index.html",
    "./src/smaks.html",
  ],

  theme: {
    colors: {
      white: "#F5F5F5",
      beige: "#D1BF9B",
      mocha: "#948C7F",
      graphite: "#31302C",
      creater_brown: "#47443D",
      lime_green: "#E2EE72",
      platinum_grey: "#A8A99B",
      fog: "#D5D6D0",
      cc: "#D7E4F2",
    },
    extend: {
      fontFamily: {
        otr: ["otr", "sans-serif"],
        argentum: ["Argentum Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
