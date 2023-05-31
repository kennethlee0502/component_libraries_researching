/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-radix")(),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
