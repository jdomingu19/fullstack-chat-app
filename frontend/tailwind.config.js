// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> tailwind.config.js

// ?
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
