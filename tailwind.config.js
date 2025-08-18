/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px", // mobilni mali
        sm: "480px", // mobilni veći
        md: "600px", // mobilni veći / tablet manji
        lg: "768px", // tablet / mali laptop
        xl: "1024px", // laptop
        "2xl": "1200px", // veći desktop
      },

      spacing: {
        1: "10px",
        2: "20px",
        3: "30px",
        4: "40px",
        5: "50px",
        6: "60px",
      },

      maxWidth: {
        "screen-xl": "1200px",
      },

      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
      },

      colors: {
        background: "#1C1C1C",
        // Primary
        primary: "#4CFFC0",
        "primary-light": "#A0FFE0",
        "primary-dark": "#00B37E",

        // Secondary
        secondary: "#363636",
        "secondary-light": "#5A5A5A",
        "secondary-dark": "#1A1A1A",
        accent: "#e50914",
        border: "#A2A2A2",
      },
    },
  },
  plugins: [],
};
