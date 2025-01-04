import type { Config } from "tailwindcss";
import { black, white } from 'tailwindcss/colors';

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
        black: black,
        white: white,
        yellow: {
          700: '#F5C521',
        },
        gray: {
          300: "#d9dae8",
          500: "#999AA5",
          600: "#66676E",
          700: "#39393f",
          800: "#242529",
          900: "#191B1F",
          950: "#101215"
        }
      },
      spacing: {
        0.5: "0.12rem",
        layout: "2.75rem",
      },
      fontSize: {
        "2lg": "1.38rem"
      },
      borderRadius: {
        image: '0.5rem',
        layout: "0.8rem"
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out"
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3'
      }
    },
  },
  plugins: [],
} satisfies Config;
