/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#FFD700 ",
        second: "###D99AAB"
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      'cupcake'
    ]
  },
  plugins: [daisyui],
};
