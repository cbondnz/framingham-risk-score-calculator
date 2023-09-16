/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg: "url('/background.svg')",
      },
      colors: {
        primary: "#023047",
        secondary: "#00afef",
        bgAccentDark: "#fce2ec",
        bgAccentLight: "#ffeff5",
        link: "#0000ff",
        accent: "#ef367e",
      },
      borderRadius: {
        full: "60px",
        half: "30px",
      },
      fontSize: {
        "4.5xl": "44px",
      },
      backgroundSize: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
