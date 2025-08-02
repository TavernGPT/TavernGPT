/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--custom-border)",
        input: "var(--custom-input)",
        ring: "var(--custom-ring)",
        background: "var(--custom-background)",
        foreground: "var(--custom-foreground)",
        primary: {
          DEFAULT: "var(--custom-accent)",
          foreground: "var(--custom-accent-foreground)",
        },
        secondary: {
          DEFAULT: "var(--custom-card)",
          foreground: "var(--custom-card-foreground)",
        },
        destructive: {
          DEFAULT: "var(--custom-destructive)",
          foreground: "var(--custom-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--custom-muted)",
          foreground: "var(--custom-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--custom-accent)",
          foreground: "var(--custom-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--custom-card)",
          foreground: "var(--custom-card-foreground)",
        },
        card: {
          DEFAULT: "var(--custom-card)",
          foreground: "var(--custom-card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 