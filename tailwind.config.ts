import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: '#FFFDD0', // You can adjust the hex value to your preferred shade of cream
        blackLight: '#262626',
      },
      container : {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
      boxShadow: {
        'strong': '0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
export default config;
