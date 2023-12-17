/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(0, 94%, 66%)",
        darkBlue: "hsl(229, 31%, 21%)",
        lightGrey: "hsl(229, 8%, 60%)",
        lightBlue: "hsl(231, 69%, 60%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
