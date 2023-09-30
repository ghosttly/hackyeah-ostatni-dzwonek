import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: {
          blue: { l: "#A1DDFF", b: "#79Cfff", d: "#53C1FF" },
          green: { l: "#C0FFA2", b: "#A3FF77", d: "#B4FF3B" },
          yellow: { l: "#FFFCBE", b: "#FAF5BF", d: "#FFF85F" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
