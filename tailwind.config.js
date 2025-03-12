// tailwind.config.js
module.exports = {
  content: [
    // ... mavjud sozlamalar
  ],
  theme: {
    extend: {
      animation: {
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        shine: 'shine 2s linear infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translate(-5px, -10px) rotate(-5deg)' },
          '50%': { transform: 'translate(5px, 5px) rotate(5deg)' },
          '75%': { transform: 'translate(10px, -5px) rotate(3deg)' },
        },
        'text-shimmer': {
          from: { 'background-position': '200% center' },
        },
        shine: {
          to: { 'background-position': '200% center' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
};
