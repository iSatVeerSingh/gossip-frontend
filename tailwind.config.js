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
        "gossip-dark-02": "#212936",
        "gossip-dark-03": "#6C727F",
        "gossip-dark-04": "#292F3F",
        "gossip-dark-05": "#1B202D",
        "gossip-dark-06": "#B3B9C9",
        "gossip-dark-07": "#373E4E",
        "gossip-dark-08": "#7A8194",
        "gossip-color-01": "#E2AEF5",
      },
    },
  },
  plugins: [],
};
