/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/HeroBg.png')",
        "hero-bg2": "url('/src/assets/HeroBg2.png')",
        "hero-bg3": "url('/src/assets/HeroBg3.png')",
        "hero-bg4": "url('/src/assets/HeroBg4.png')",
        "hero-bg5": "url('/src/assets/HeroBg5.png')",
        "footer": "url('/src/assets/footerBg.png')",
        "Div-Bg": "url('/src/assets/Div1Bg.png')",
        "Div-sec": "url('/src/assets/Div2Bg.png')",
        "Div-tri": "url('/src/assets/Div3Bg.png')",
        "Div-four": "url('/src/assets/Div4Bg.png')",
        "container": "url('/src/assets/container.png')",
        "about-bg": "url('/src/assets/AboutBg.png')",
        "about-bg2": "url('/src/assets/AboutBg2.png')",
        "game-bg": "url('/src/assets/GameBg.png')",
        "banner-bg": "url('/src/assets/BannerBg.png')",
        "prize-bg": "url('/src/assets/PrizeBg.png')",
        "prize-bg2": "url('/src/assets/PrizeBg2.png')",
        "prize-div": "url('/src/assets/PrizeDiv1.png')",
        "notFound-bg": "url('/src/assets/NotFoundBg.png')",
        "Ad": "url('/src/assets/AdBg.png')",

      },
    },
  },
  plugins: [],
};
