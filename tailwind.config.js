// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: "#641ae6",
          // default: "#415b94",
          secondary: "#233150 ",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#111827",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      // "pastel",
      // this is the way to customize more then theme
      {
        pastel: {
          ...require("daisyui/src/theming/themes")["[data-theme=pastel]"],
          primary: "#d1c1d7",
          // secondary: "#f6cbd1",
          secondary: "#e6e6e6",
          accent: "#b4e9d6",
          neutral: "#3abff8",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#3abff8",
          error: "#f87272",
        },
      },
    ],
    rtl: true,
  },
  plugins: [require("daisyui")],
  //...
};
