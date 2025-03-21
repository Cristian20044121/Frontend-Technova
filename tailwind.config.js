/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,txs}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#251E44",
        secondary: "#EFEFEF",
        gray: "#e3e3e3",
      },
      textColor: {
        primary: "#251E44",
      },
    },
  },
  plugins: [],
};
