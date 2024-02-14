import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'TMDB': '#032541',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [aspectRatio],
};
