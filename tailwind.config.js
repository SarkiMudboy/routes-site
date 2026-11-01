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
        // Brand palette (colorhunt 091413 / 285A48 / 408A71 / B0E4CC).
        // Contrast: ink on white 18.7:1; white on slate 7.9:1; ink on sea 13.2:1.
        // leaf (#408A71) is only 4.1:1 with white, so it never carries text —
        // icons and decoration only (3:1 is enough for those).
        // wash is a lighter tint of the mint, the one derived (not new) colour.
        ink: "#091413", //   all text & headings, logo tile, seat circles, dark promises column
        slate: "#285A48", // buttons (white text), secondary text, labels, focus
        sea: "#B0E4CC", //   highlight fill with INK text (founding ticket) — never white text
        leaf: "#408A71", //  decoration & icons: checks, dots, icon-button hover
        wash: "#E3F5ED", //  alternating section background (mint at 35%)
        white: "#FFFFFF",
        rule: "#285A4833", // hairlines: dark green at 20%, no extra hue

        // shadcn semantic aliases mapped onto the brand palette
        border: "#285A4833",
        input: "#285A4833",
        ring: "#285A48",
        background: "#FFFFFF",
        foreground: "#091413",
        primary: {
          DEFAULT: "#285A48",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E3F5ED",
          foreground: "#091413",
        },
        muted: {
          DEFAULT: "#E3F5ED",
          foreground: "#285A48",
        },
        accent: {
          DEFAULT: "#E3F5ED",
          foreground: "#091413",
        },
        destructive: {
          DEFAULT: "#285A48",
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
