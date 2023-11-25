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
    },
    colors: {
      primary: "#2B2D42",
      info: "#016BA0",
      warning: "#FF9671",
      failed: "#A51C30",
      success: "#1B998B",
      black: "#1E1E1E",
      white: "#EDF2F4",
      "black-alt": "#4B4B4B",
      gray: "#E7E3E3",
    },
    fontFamily: {
      display: ["Poppins"],
      body: ['"Montserrat"'],
    },
  },
  plugins: [],
};
export default config;
