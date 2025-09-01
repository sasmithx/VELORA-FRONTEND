/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Professional Blue-Green Gradient
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Main primary color
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
          dark: "#0369a1",
        },

        // Secondary Colors - Warm Gray
        secondary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
          DEFAULT: "#737373",
          light: "#a3a3a3",
          dark: "#404040",
        },

        // Accent Colors
        accent: {
          purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
          },
          orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
          },
          emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },
        },

        // Background Colors - Dark Theme
        background: {
          DEFAULT: "#0f172a", // Slate 900
          light: "#1e293b", // Slate 800
          dark: "#020617", // Slate 950
          card: "#1e293b", // Slate 800
          elevated: "#334155", // Slate 700
          surface: "#475569", // Slate 600
        },

        // Text Colors
        text: {
          primary: "#f8fafc", // Slate 50
          secondary: "#cbd5e1", // Slate 300
          tertiary: "#94a3b8", // Slate 400
          muted: "#64748b", // Slate 500
          inverse: "#0f172a", // Slate 900
        },

        // Semantic Colors
        success: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },

        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },

        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#dc2626",
        },

        info: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },

        // Border Colors
        border: {
          DEFAULT: "#334155", // Slate 700
          light: "#475569", // Slate 600
          dark: "#1e293b", // Slate 800
        },

        // Overlay Colors
        overlay: {
          light: "rgba(0, 0, 0, 0.1)",
          medium: "rgba(0, 0, 0, 0.3)",
          dark: "rgba(0, 0, 0, 0.5)",
          backdrop: "rgba(0, 0, 0, 0.7)",
        },
      },

      // Custom gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",
        "gradient-accent": "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
        "gradient-success": "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        "gradient-warning": "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
        "gradient-error": "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
      },

      // Custom shadows
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.15)",
        strong: "0 8px 32px rgba(0, 0, 0, 0.2)",
        glow: "0 0 20px rgba(14, 165, 233, 0.3)",
        "glow-accent": "0 0 20px rgba(168, 85, 247, 0.3)",
      },
    },
  },
  plugins: [],
};
