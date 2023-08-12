/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textColor: {
      primary: "#b4f077",
      secondary: "#F8F8F8",
      black: "#000000",
      danger: "#EE8268",
    },
    colors: {
      white: "#f8f8f8",
      black: "#000000",
      green: { 500: "#b4f077", 100: "E2F179" },
      red: { 100: "F6A38F", 500: "#EE8268" },
    },
    fontFamily: {
      body: [" Coco Gothic"],
      inter: ["Inter"],
    },
    fontSize: {
      xs: ".93 rem",
      sm: "1.12rem",
      xl: "1.5rem",
      "2xl": "1.56rem",
      "5xl": "2.5rem",
    },
    letterSpacing: {
      tightest: "-.009rem",
      normal: "0.1 rem",
      widest: ".2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
