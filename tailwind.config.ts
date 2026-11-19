import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Aqua Viva Brand Palette
        salt: {
          DEFAULT: "#CED4C1",
          light: "#E5E9DF",
          dark: "#BDC4AE",
          50: "#F7F8F4",
          100: "#EEF1E9",
          200: "#DFE4D5",
          300: "#CED4C1",
        },
        shipmate: {
          DEFAULT: "#77A2CB",
          light: "#9BBDE0",
          dark: "#5784AF",
          muted: "rgba(119, 162, 203, 0.15)",
        },
        sage: {
          DEFAULT: "#929687",
          light: "#A8AC9F",
          dark: "#7B7F70",
          muted: "rgba(146, 150, 135, 0.2)",
        },
        kingtide: {
          DEFAULT: "#2B737C",
          light: "#3A929D",
          dark: "#1D5259",
          deep: "#143C42",
          glow: "rgba(43, 115, 124, 0.25)",
        },
        khaki: {
          DEFAULT: "#5E6836",
          light: "#798647",
          dark: "#454D27",
        },
        darkness: {
          DEFAULT: "#171C0E",
          rich: "#11150B",
          surface: "#1E2413",
          card: "#252B19",
          border: "#2C341E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        display: ["var(--font-display)", "Instrument Serif", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.25em",
        luxury: "0.18em",
        tightest: "-0.04em",
      },
      animation: {
        'waterline-pulse': 'waterline 4s ease-in-out infinite',
        'slow-drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        waterline: {
          '0%, 100%': { transform: 'scaleX(0.95)', opacity: '0.6' },
          '50%': { transform: 'scaleX(1.05)', opacity: '1' },
        },
        drift: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
