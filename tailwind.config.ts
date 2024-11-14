import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "var(--color-font-light)",
      },
      backgroundColor: {
        dark: "var(--bkg-dark)",
        lightDark: "var(--bkg-light-dark)",
        radialFade: "var(--bkg-radial-fade)",
        gradientFade: "var(--bkg-gradient-fade)",
        sectionPill: "var(--bkg-section-pill)",
        card: "var(--bkg-card)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-serif", "Georgia", "Cambria", "serif"],
      },
      borderColor: {
        dark: "var(--color-border-dark)",
        light: "var(--color-border-light)",
        accent: "var(--color-border-accent)",
        base: "var(--color-border-base)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
export default config;
