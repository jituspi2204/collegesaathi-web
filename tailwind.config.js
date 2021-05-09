const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      yellow: colors.amber,
      black: colors.black,
      green: colors.emerald,
      blue: colors.blue,
      red: colors.red,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
