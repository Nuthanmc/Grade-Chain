/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno"],
        lily: ["Lily Script One"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "light-theme": {
          primary: "#00e7ff",
          secondary: "#ff00de",
          accent: "#0069d6",
          neutral: "#2d211d",
          "base-100": "#ffffff",
          info: "#00aeff",
          success: "#00a361",
          warning: "#e99000",
          error: "#ff7b99",
        },
        "dark-theme": {
          primary: "#0073e5",
          secondary: "#00a7bf",
          accent: "#0036ec",
          neutral: "#281b34",
          "base-100": "#171717",
          info: "#41b6ff",
          success: "#5feb57",
          warning: "#ffc700",
          error: "#ff0a49",
        },
      },
    ],
    darkTheme: "night",
  },
};
