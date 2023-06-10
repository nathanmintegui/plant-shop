import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#01370C",
        "pastel-white": "#F0F5F0",
        "light-green": "#436E35",
        "button-green": "#3B823E",
        "tittle-black": "#343434",
      },
      fontFamily: {
        unna: ["var(--font-unna)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
