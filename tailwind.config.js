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
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#21503F",
        primary2: "#4D7365",
        primary3: "#7A968C",
        primary4: "#A6B9B2",
        primary5: "#D3DCD9",
        primary6: "#F4F6F5",
        secondary: "#E38228",
        secondary2: "#E99B53",
        secondary3: "#EEB47E",
        secondary4: "#F4CDA9",
        secondary5: "#F4CDA9",
        secondary6: "#FCF2E9",
        secondary7: "#FEF9F4",
        black: "#FEF9F4",
        black2: "#4A4947",
        black3: "#777675",
        black4: "#777675",
        black5: "#D2D1D1",
        black6: "#E8E8E8",
        black7: "#F4F4F4",
        dark1: "#182625",
        dark3: "#747D7C",
        gray: "#777675",
      },
    },
  },
  plugins: [],
};
