/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        facebook: '#4267B2',
        linkedin: '#0072b1',
        email: '#EA4335'


      },
    },
  },
  plugins: [],
}
