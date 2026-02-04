/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif']
      },
      colors: {
        roseblush: '#ffd6e8',
        lovepink: '#ff5c8a',
        cherry: '#ff2d55'
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        beat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.06)' },
          '50%': { transform: 'scale(0.98)' },
          '75%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 0px rgba(255, 45, 85, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 45, 85, 0.6)' },
          '100%': { boxShadow: '0 0 0px rgba(255, 45, 85, 0.4)' }
        },
        drift: {
          '0%': { transform: 'translateY(0px) scale(1)', opacity: '0.9' },
          '100%': { transform: 'translateY(-120px) scale(1.2)', opacity: '0' }
        }
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        beat: 'beat 2.6s ease-in-out infinite',
        glow: 'glow 2.6s ease-in-out infinite',
        drift: 'drift 6s linear infinite'
      }
    }
  },
  plugins: []
};
