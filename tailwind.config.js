const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./app/**/*.{js,jsx,ts,tsx,md,mdx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "ping-small": "ping-small 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "ping-small": {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("no-js", ".no-js &");
    }),
  ],
};
