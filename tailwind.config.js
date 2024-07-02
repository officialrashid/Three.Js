/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        BCCEFF: "var(--BCCEFF)",
      },
     
 
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        roboto: ['Roboto', 'sans'],
        sans: ["Open Sans"],
      },
      gridTemplateColumns:{
        "1/5" : "1fr 5fr"
      },
    
    },
    plugins: {
      'postcss-nesting': {},
    '@tailwindcss/forms': {}
    }

  }
}