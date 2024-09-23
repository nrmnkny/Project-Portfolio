/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        darkBlack: '#000000', 
        lightGray: '#f5f5f5',  
        mediumGray: '#7d7d7d', 
        white: '#ffffff',    
      },
      // Custom gradient
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #000000, #005f99)',  // Black to blue gradient
      },
      // Custom fonts
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],  // Custom sans-serif font family
      },
      // Custom typography for headings and body text
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Roboto',
              fontWeight: '700',
              letterSpacing: '-0.05em',
              lineHeight: '1.2',
            },
            h2: {
              fontFamily: 'Roboto',
              fontWeight: '600',
              letterSpacing: '-0.03em',
              lineHeight: '1.3',
            },
            p: {
              fontFamily: 'Roboto',
              lineHeight: '1.75',
              color: '#333',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
