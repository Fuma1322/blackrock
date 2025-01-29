/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB", // Define a valid border color
      },
    },
  },
  plugins: [],
};
