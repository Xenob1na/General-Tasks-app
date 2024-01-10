/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {},
      screens: {
        xl: { max: "1440px" },
        lg: { max: "1140px" },
        md: { max: "850px" },
        sm: { max: "670px" },
        sm2: { max: "770px" },
        xs: { max: "480px" },
        xs2: { max: "590px" },
      },
    },
    plugins: [],
  }