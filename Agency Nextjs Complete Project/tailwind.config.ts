import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Georgia", "Times New Roman", "serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      colors: {
        ink: {
          50: "#f8f6f1",
          100: "#ece5d8",
          200: "#d6cab4",
          300: "#baa784",
          400: "#9b835d",
          500: "#7f6947",
          600: "#655238",
          700: "#4d3f2e",
          800: "#32291f",
          900: "#181411"
        },
        stone: {
          50: "#f4f0ea",
          100: "#e4dbcf",
          200: "#cec0ae",
          300: "#b7a287",
          400: "#9f8462",
          500: "#81694b",
          600: "#65513a",
          700: "#47392b",
          800: "#2c241d",
          900: "#14110d"
        },
        ember: {
          50: "#fff5ee",
          100: "#ffe3cf",
          200: "#ffc59e",
          300: "#f8a46f",
          400: "#ec824b",
          500: "#d56530",
          600: "#ae4e24",
          700: "#7d381c",
          800: "#4f2314",
          900: "#241008"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 20, 17, 0.08)",
        line: "0 0 0 1px rgba(24, 20, 17, 0.08)"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(212, 182, 146, 0.16), transparent 32%), radial-gradient(circle at 80% 0%, rgba(213, 101, 48, 0.14), transparent 28%), radial-gradient(circle at 60% 70%, rgba(127, 105, 71, 0.12), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
