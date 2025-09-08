import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        ocean: {
          blue: "#0a192f",
          cyan: "#00f6ff",
          aqua: {
            start: "#0096c7",
            mid: "#00b4d8", 
            end: "#90e0ef"
          },
          white: "#f9fafb"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1", transform: "scale(1)" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) scale(0)", opacity: "0" }
        },
        "caustics": {
          "0%, 100%": { 
            transform: "translateY(0px) scale(1)",
            opacity: "0.4"
          },
          "25%": { 
            transform: "translateY(-20px) scale(1.02)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "translateY(-10px) scale(0.98)",
            opacity: "0.3"
          },
          "75%": { 
            transform: "translateY(-30px) scale(1.01)",
            opacity: "0.45"
          }
        },
        "waves": {
          "0%": { transform: "translateX(-100%) translateY(-50%)" },
          "100%": { transform: "translateX(100%) translateY(50%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "caustics": "caustics 8s ease-in-out infinite",
        "waves": "waves 12s linear infinite"
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
]
,
} satisfies Config;