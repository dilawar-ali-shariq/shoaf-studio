/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobileS': '320px',
      'mobile': '500px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktopS': '1300px',
      'desktop': '1452px'
    },
    extend: {
      backgroundImage: {
        'background': "url('/public/Assets/bg.png')",
        'background2': "url('/public/Assets/bg2.png')",
        'background3': "url('/public/Assets/bg3.png')"
      },
      backgroundSize: {
        'cov' : '100% 100% , contain'
      },
      boxShadow: {
        '3xl': '0px 0px 32px rgba(117, 117, 117, 0.28)'
      }
    },
  },
  plugins: [],
}
