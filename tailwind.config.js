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
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      fix: "10rem",
      "70vh": "70vh",
      "80vh" : "80vh",
      "100px" : "100px"
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        "3s": "33%",
        "2s": "49%",
        "4s": "24%",
        "5s": "19%",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
