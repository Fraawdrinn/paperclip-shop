import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
