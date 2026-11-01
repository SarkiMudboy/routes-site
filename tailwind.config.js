import animate from "tailwindcss-animate";

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
        // Brand palette — the only four hues on the site.
        // Greens are fills only (too light for text on white); text on a
        // green fill is always ink.
        ink: "#202734", //   text, primary buttons, footer, logo tile
        slate: "#36415A", // secondary text, labels, hover/focus
        leaf: "#B7D894", //  highlights: founding fare, step numbers, bullets, CTA on dark
        wash: "#E0F8C7", //  alternating section background, hover fills
        white: "#FFFFFF",
        rule: "#36415A33", // hairlines: slate at 20%, no extra hue

        // shadcn semantic aliases mapped onto the brand palette
        border: "#36415A33",
        input: "#36415A33",
        ring: "#36415A",
        background: "#FFFFFF",
        foreground: "#202734",
        primary: {
          DEFAULT: "#202734",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E0F8C7",
          foreground: "#202734",
        },
        muted: {
          DEFAULT: "#E0F8C7",
          foreground: "#36415A",
        },
        accent: {
          DEFAULT: "#E0F8C7",
          foreground: "#202734",
        },
        destructive: {
          DEFAULT: "#36415A",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        // Body: system stack. Poppins is only self-hosted at 600/700 (headings).
        sans: [
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
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      borderRadius: {
        lg: "8px",
        md: "8px",
        sm: "6px",
      },
    },
  },
  plugins: [animate],
};
