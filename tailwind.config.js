/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 1.25s",
        glow: "glowEffect 1.5s infinite ease-in-out", // 💡 add this line
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        glowEffect: {
          '0%, 100%': { boxShadow: '0 0 10px #ec4899' },
          '50%': { boxShadow: '0 0 20px #f472b6, 0 0 40px #ec4899' },
        },
      },
    },
  },
  plugins: [],
}
