/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jet-brains": ["JetBrains Mono", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "dark-gray": "#24232c",
        "almost-white": "#E6E5EA",
        "neon-green": "#A4FFAF",
        "very-dark-gray": "#18171F",
        gray: "#817D92",
        yellow: "#F8CD65",
        orange: "#FB7C58",
        red: "#F64A4A",
      },
    },
  },
  plugins: [],
};
