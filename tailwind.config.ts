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
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        'project-cofely': '#A98F76',
        'project-payof': '#3D52A0', 
        'project-jambo': '#D9534F', 
        'pink': '#d97e8a', 
        'custom-pink': '#FFD1DC', 
        'custom-brown': '#6F4E37', 
      }
    },
  },
  plugins: [],
};
export default config;