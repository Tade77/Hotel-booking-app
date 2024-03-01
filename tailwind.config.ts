import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#038CF7",
        secondary: "#F2C541",
        tertiary: {
          dark: "#F27405",
          light: "#F2C541",
        },
      },
      fontFamily: { poppins: ["var(--font-poppins)", ...fontFamily.sans] },
    },
  },
  plugins: [],
};
export default config;
