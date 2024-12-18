/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        athiti: ['"Athiti", serif'],
        sora: ['"Sora", serif'],
      },
      backgroundImage: {
        site: "url('/images/site-bg.png')",
      },
      boxShadow: {
        border: "inset 0 0 0 1px",
        inner: "inset 0 0 12px ",
      },
      colors: {
        PrimaryDark: "#0E0C15",
        HeaderDark: "#0F0C17",
        GradientMagenta: "#F33CC0",
        GradientBlue: "#4349FF",
        BodyText: "#CAD1E9",
      },
    },
  },
  plugins: [],
};
// } satisfies Config;
