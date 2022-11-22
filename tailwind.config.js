/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black':'#171719',
      'gray':'#212124',
      'grayer':"#9898A6",
      'white':'#FFFFFF',
      'aqua':"#00FFFF"
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
