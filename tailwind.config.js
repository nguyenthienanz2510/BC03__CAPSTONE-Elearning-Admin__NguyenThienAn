/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#f05123",
        "color-secondary": "#1473e6",
        "color-text": "#333",
        "color-background": "#111111",
        "color-black": "black",
        "color-white": "white",
      },
      height: {
        100: "28rem",
      },
    },
  },
  plugins: [],
};
