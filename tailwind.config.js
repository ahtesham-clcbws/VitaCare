/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          50: "#DAF4FB",
          100: "#BAEBF7",
          200: "#71D6EF",
          300: "#2CC2E7",
          400: "#148FAE",
          500: "#0C576A",
          600: "#094452",
          700: "#073540",
          800: "#052229",
          900: "#031317",
          950: "#010809"
        },
        "secondary": {
          50: "#E2FDEF",
          100: "#C6FBDF",
          200: "#87F7BC",
          300: "#4EF39B",
          400: "#14F07B",
          500: "#0CB95E",
          600: "#0A944A",
          700: "#076E37",
          800: "#054824",
          900: "#022613",
          950: "#01130A"
        }
      }
    },
  },
  plugins: [],
};