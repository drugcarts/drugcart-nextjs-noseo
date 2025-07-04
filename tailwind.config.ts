import type { Config } from "tailwindcss";

export default {
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
        'pure-red': "#FF0000",
        'bgcolor': '#B7084B',
        'bgshop': '#F8F8F8',
        'bgcancer':'#FFD1D6',
        'bgayush':'#E7F6F6',
        'bgcritical':'#B6E2FF',
        'bghealthcare':'#A791A8',
        'bghealthdev':'#F7C9B0',
        'bgourservice':'#E7F6F6',
        'bgnavi':'#4C4C95',
        'bgbrown':'#BD4E2E',
        'bgblog':'#E9F9FF',
        'bgclient':'#CEDEFC',
        'bgwhy':'#D6FFE6',
        'becustomer':'#4C4C95',
        // 'bgftpink':'#F6A1AC',
        // 'bgftblue':'#699BF7',
        // 'bgftrose':'#FF0076CC',
        'bgftgreen':'#588345',
        'bgftbrown':'#A15F3B',
        'bgfooter':'#FFE5EF',
        'bgfame':'#EBFFEC',
        pink: {
          500: '#ff4d7e',
          100: '#ffe2e8',
        },
      },
      fontFamily: {
        bebas:['Bebas Neue','sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
