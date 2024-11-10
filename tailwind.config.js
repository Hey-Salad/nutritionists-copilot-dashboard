/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cherry-red': '#ed4c4c',
        'peach': '#faa09a',
        'light-peach': '#ffd0cd',
      },
      fontFamily: {
        'grandstander': ['Grandstander', 'cursive'],
        'figtree': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      heysalad: {
        "primary": "#ed4c4c",
        "secondary": "#faa09a",
        "accent": "#ffd0cd",
        "neutral": "#2a323c",
        "base-100": "#ffffff",
      },
    }],
    base: true,
    styled: true,
    utils: true,
  },
}