/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto':['roboto'],
        'signika': ['Signika Negative'],
        'montserrat':['Montserrat'],
        'mooli':['Mooli'],
        'palanquin':['Palanquin'],
        'nabla':['Nabla']

      },
      backgroundImage: {
        'hero' : "url('/hero.jfif')",
      },
    },
  },
  plugins: [

  ],
}
