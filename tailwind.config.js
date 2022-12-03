/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gossip-dark-01": "#121212",
        "gossip-dark-02": "#1B202D",
        "gossip-color-01": "#E2AEF5",
      },
    },
  },
  plugins: [],
};
