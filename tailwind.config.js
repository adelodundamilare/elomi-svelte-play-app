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
    },
  },
  variants: {
    extends: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
