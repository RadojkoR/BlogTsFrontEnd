/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHeaderHome': "url(./Assets/Images/homeHeader.jpg)",
        'bgHeaderAbout': "url(./Assets/Images/About-Header.webp)",
        'bgHeaderDestination': "url(./Assets/Images/herceg_novi-destinationHeader.webp)",
        'bgHeaderBlog': "url(./Assets/Images/HeaderBlog.webp)",
        'serbiaHeaderBlog': "url(./Assets/Images/serbiaHeader.webp)",
        'montenegroHeaderBlog': "url(./Assets/Images/herceg_novi-destinationHeader.webp)",
        'southkoreaHeaderBlog': "url(./Assets/Images/southKoreaHeader.webp)",
        'japanHeaderBlog': "url(./Assets/Images/japanHeader.webp)",
        'canadaHeaderBlog': "url(./Assets/Images/canadaHeader.webp)",
      },
      backgroundColor: {
        'nav': '#1d2228',
        'loginPage': '#14181c',
        'orange': '#fb8122'
      },
      colors: {
        orange: '#fb8122'
      },
      fontFamily:{
        'caveat': '"Caveat", cursive'
      },
      width: {
          'container80': '80%',
          '25rem': '25rem'
      },
       height: {
        '80vh': '80vh',
        '70vh' : '70vh',
        '60vh': '60vh'
    }

    },
  },
   safelist: [
    'bg-serbiaHeaderBlog',
    'bg-montenegroHeaderBlog',
    'bg-southkoreaHeaderBlog',
    'bg-japanHeaderBlog',
    'bg-canadaHeaderBlog'
  ],
  plugins: [],
}

