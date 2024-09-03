/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0147FF",
        customGrey: "#282828",
      },
      width: {
        "1440px": "1440px",
        "600px": "600px",
      },
      height: {
        mainHeight: "825px",
        mainContainerHeight: "343px",
        "446px": "446px",
      },
      padding: {
        "120px": "120px",
      },
      gap: {
        "48px": "48px",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
