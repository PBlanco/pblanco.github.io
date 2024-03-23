/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // https://uicolors.app/create
        "gun-powder": {
          50: "#f5f6f9",
          100: "#e8ebf1",
          200: "#d6dce7",
          300: "#bac3d6",
          400: "#98a6c2",
          500: "#7f8bb2",
          600: "#6d77a3",
          700: "#616894",
          800: "#53577a",
          900: "#4a4e69",
          950: "#2d2f3e",
        },
      },
      fontFamily: {
        mono: ["IBM Plex Mono"],
      },
    },
  },
  plugins: [],
};
