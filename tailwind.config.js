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
        "1200px": "1200px",
        "576px": "576px",
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
        robotoFlex: ["Roboto Flex", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      backgroundSize: {
        "50p": "50% 50%", // Dodaje niestandardowy rozmiar tła
      },
      backgroundPosition: {
        "top-20": "center calc(0% - 20px)", // Dodaje niestandardową pozycję tła
      },
      letterSpacing: {
        "negative-3p": "-0.03em",
        "negative-4p": "-0.04em",
      },
      fontSize: {
        "76px": "76px",
      },
    },
  },
  plugins: [],
};
