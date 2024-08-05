import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-black": "#0A090B",
        "theme-white": "#EAEAE8",
        "theme-gray": "#898986",
        "theme-blue": "#0067FB",
      },
      fontFamily: {
        garamond: ["var(--eb-garamond)"],
        grotesk: ["var(--space-grotesk)"],
        geist: ['var(--font-geist-sans)'],
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
export default config;
