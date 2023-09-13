/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          slideIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          }
       
        
      },
      animation: {
        slideIn: "slideIn 4s ease-in var(--delay, 0) infinite"
      },
      colors:{
        'amadeusblue' : '#005eb7',
        'amadeusorange' : '#f7a828'
      },

    },
    

    
  },
  plugins: [],
}

