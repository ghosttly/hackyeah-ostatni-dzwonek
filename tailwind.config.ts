import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blinker: "var(--blinker-font)",
        v323: "var(--VT-font)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "message-gradient":
          " linear-gradient(180deg, #A1DDFF 0%, #53C1FF 100%);",
      },
      colors: {
        main: {
          blue: { l: "#A1DDFF", b: "#79Cfff", d: "#53C1FF", b80: "#79Cfff80" },
          green: { l: "#C0FFA2", b: "#A3FF77", d: "#B4FF3B" },
          yellow: { l: "#FFFCBE", b: "#FAF5BF", d: "#FFF85F" },
        },
        button: { background: "#84FF4B" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
