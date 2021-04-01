const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      curent: "currentColor",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "Roboto"],
        nunito: ['Nunito']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
