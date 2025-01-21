/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        golden: '#DCCA87',
        primaryblack: '#0C0C0C' ,
        gray: '#545454',
        crismson: '#F5EFDB',
        grey: '#AAAAAA',
        white: '#ffff',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        }
      },
      fontFamily: {
        family: 'Playwrite VN, serif',
      }
    },
  },
  plugins: [],
}

