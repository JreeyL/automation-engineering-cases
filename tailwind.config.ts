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
        siemens: {
          DEFAULT: '#009999',
          light: '#00b3b3',
          dark: '#007f7f',
        }
      }
    },
  },
  plugins: [],
};
export default config;
