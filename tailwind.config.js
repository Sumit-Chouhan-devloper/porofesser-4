/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      fontSize: {
        md: "18px",
        lg: "19px",
        xl: "20px",
        "2xl": "20px",
        "3xl": "23px",
        "4xl": "27px",
        "5xl": "30px",
        "6xl": "50px",
      },
      colors: {
        sky: "#0BC6E3",
        "dark-grey": "#182837",
      },
      backgroundColor: {
        sky: "#00B2CD",
      },
    },
  },
  plugins: [],
};