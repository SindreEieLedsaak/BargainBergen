const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "white-to-green":
          "linear-gradient(to top right, #FFFFFF, #FFFFFF 60%, #BBFFBB)",
      },
      screens: {
        "3xl": "1880px",
        'white-to-green': "linear-gradient(to top right, #FFFFFF, #FFFFFF 60%, #D1F4E0)",
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light-green-theme": {
        colors: {
          foreground: "#333333", // dark foreground for contrast
          primary: {
            50: "#E8FAF0", // very light green
            100: "#D1F4E0", // lighter green
            200: "#A2E9C1", // light green
            300: "#74DFA2", // soft green
            400: "#45D483", // medium green
            500: "#17C964", // standard green
            600: "#12A150", // medium-dark green
            700: "#0E793C", // dark green
            800: "#095028", // darker green
            900: "#052814", // very dark green
            DEFAULT: "#45D483", // default green if no shade is specified
          },
          focus: "#86efac", // color for focused elements, like buttons or inputs
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },

    },
    addCommonColors: true,
  },)],
};
