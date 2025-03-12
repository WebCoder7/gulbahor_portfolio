// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float-tag': 'float-tag 3s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 6s linear infinite',
      },
      keyframes: {
        'float-tag': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        'gradient-rotate': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 90deg at 50% 50%, #f472b6 0%, #f9a8d4 50%, #f472b6 100%)'
      }
    }
  }
}