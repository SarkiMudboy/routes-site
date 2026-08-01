/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.75rem",
      screens: {
        "2xl": "720px",
      },
    },
    extend: {
      colors: {
        // Brand tokens (use these everywhere)
        teal: "#0E6E6B",
        ink: "#13262B",
        terracotta: "#D2622A",
        wash: "#F2F6F6",
        white: "#FFFFFF",
        rule: "#D7E1E1",

        // shadcn semantic aliases mapped onto the brand palette
        border: "#D7E1E1",
        input: "#D7E1E1",
        ring: "#D2622A",
        background: "#FFFFFF",
        foreground: "#13262B",
        primary: {
          DEFAULT: "#0E6E6B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F2F6F6",
          foreground: "#13262B",
        },
        muted: {
          DEFAULT: "#F2F6F6",
          foreground: "#3F5155",
        },
        accent: {
          DEFAULT: "#F2F6F6",
          foreground: "#13262B",
        },
        destructive: {
          DEFAULT: "#D2622A",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "Poppins",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "8px",
        md: "8px",
        sm: "6px",
      },
    },
  },
  plugins: [],
};
