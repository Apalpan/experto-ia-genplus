/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        gen: {
          nav: "#040F20",
          deep: "#0A244C",
          blue: "#2165FF",
          soft: "#4D84FF",
          light: "#F4F7FF",
        },
      },
      boxShadow: {
        gen: "0 24px 80px rgba(4, 15, 32, 0.16)",
      },
    },
  },
  plugins: [],
};
