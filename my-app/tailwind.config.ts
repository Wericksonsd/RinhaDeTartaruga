import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        'contornoClr': "url('/backgroundPapiroClaro.jpg')",
        'contornoLkd': "url('/img/footer-texture.png')",
        'pantanalBG' : "url('/pantanalBG.jpg')",
        'pantanalLK' : "url('/pantanalLKD.jpg')",
      },

      fontFamily:{
        'titulo' : 'Lilita One, sans-serif',
      },

      boxShadow: {
        'interna': 'inset 0px 0px 28px 1px rgba(0,0,0,0.57)',
      },
      
    },
  },
  plugins: [],
};
export default config;
