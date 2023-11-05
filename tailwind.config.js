/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#aaa",
        secondary: "#777",
        accent: "#e7f870",
      },
      fontSize: {
        sm: "12px",
      },
      screens: {
        sm: { max: "639px" },
        md: { max: "767px" },
        lg: { max: "1023px" },
        xl: { max: "1279px" },
      },
    },
  },
  variants: {
    translate: ["group-hover"],
    textColor: ["group-hover"],
    // extends: {
    // },
  },
  plugins: [],
};
