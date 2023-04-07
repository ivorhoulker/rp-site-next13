/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) 1"
      },
      colors: {
        primary: {
          DEFAULT: "#27AAE1",
          50: "#F1F9FD",
          100: "#DAF0FA",
          200: "#ADDFF4",
          300: "#81CDED",
          400: "#54BCE7",
          500: "#27AAE1",
          600: "#1A8BBB",
          700: "#146A8E",
          800: "#0E4961",
          900: "#072735"
        },
        secondary: {
          DEFAULT: "#F58220",
          50: "#FFFDFC",
          100: "#FEEFE3",
          200: "#FCD4B2",
          300: "#F9B982",
          400: "#F79D51",
          500: "#F58220",
          600: "#D8690A",
          700: "#A75108",
          800: "#773905",
          900: "#462203"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};
