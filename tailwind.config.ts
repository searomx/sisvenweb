import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      // 	lg: '1366px',
      // 	xl: '1920px',
      // 	md: '768px',
      sm: "412px",
      // 	// => @media (min-width: 640px) { ... }
      // 	// => @media (min-width: 992px) { ... }
    },
    extend: {
      colors: {
        tomato: "#ea4e3c",
      },
      backgroundImage: {
        // 'hero-pattern': "url('images/background-body.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      scale: {
        "-100": "-1",
      },

      padding: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "5/12": "41.666667%",
        "7/12": "58.333333%",
        "9/16": "56.25%",
      },
    },
  },

  plugins: [],
} satisfies Config;
