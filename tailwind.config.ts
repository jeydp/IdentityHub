/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        athiti: ['"Athiti", serif'],
        sora: ['"Sora", serif'],
      },
      backgroundImage: {
        site: "url('/images/body-img.png')",
        heroBanner: "url('/images/banner-gradient-blur.png')",
        serviceCard: "url('/images/card-border.svg')",
        checkMarkGreen: "url('/images/checkmark-circle-green.svg')",
        checkMarkBlue: "url('/images/checkmark-circle-blue.svg')",
        checkMarkPurple: "url('/images/checkmark-circle-purple.svg')",
      },
      boxShadow: {
        border: "inset 0 0 0 1px",
        inner: "inset 0 0 12px ",
        titleBadge: "0 4px 50px",
      },
      colors: {
        PrimaryDark: "#0E0C15",
        HeaderDark: "#0F0C17",
        GradientMagenta: "#F33CC0",
        GradientBlue: "#4349FF",
        BodyText: "#CAD1E9",
      },
      animation: {
        "spin-slow": "spin 250s linear infinite",
      },
      spacing: {
        13: "52px",
      },
    },
  },
  plugins: [],
};
// } satisfies Config;
