import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#01370C",
        "pastel-white": "#F0F5F0",
      },
    },
  },
  plugins: [],
} satisfies Config;
