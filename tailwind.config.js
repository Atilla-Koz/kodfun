/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        eduVic: ['"Edu VIC WA NT Beginner"', 'cursive'],
      },
      backgroundImage: {
        Back: "url('/src/assets/Back.webp')",
      },
    },
  },
  plugins: [],
};
