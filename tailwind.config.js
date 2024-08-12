// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-16": "16px",
        "custom-19": "19px",
        "custom-25": "25px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-yellow": "#FFD200",
        "custom-black": "#334155",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
