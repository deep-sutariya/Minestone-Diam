/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-bg': {
          '0%': { backgroundPosition: '0% -50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% -50%' },
        },
      },
      animation: {
        'move-bg': 'move-bg 10s ease-in-out infinite',
      },
      colors:{
        offwhite:"#F2F0F8",
        hover: "#E9E9E9",
        detail:"rgb(75 85 99)",
        detail2:"#96B6C5",
        blue: "#3C8CAC",
        brown: "#C28B7C",
        col1: "#CF9038",
        col2: "#CF9F38",
      },
      fontFamily: {
        main: ['Protest Guerrilla', "cursive"],
        heading: ['Forum', "serif"],
        special: ['Merienda', "cursive"],
        basic: ['Tenor Sans', "sans-serif"],
      },
    },
  },
plugins: [],
};
