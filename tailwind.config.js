/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          retro: {
            pink: '#ff6b97',
            blue: '#4d9de0',
            green: '#3eef7d',
            yellow: '#fff700',
            orange: '#ff8c00',
            purple: '#9b5de5',
            cyan: '#00fff5',
          },
        },
        fontFamily: {
          pixel: ['VT323', 'monospace'],
        },
        animation: {
          'pulse-fast': 'pulse 0.5s linear infinite',
          'beam-fast': 'beam 5s linear infinite',
        },
        keyframes: {
          beam: {
            '0%, 100%': { transform: 'translateX(-100%) rotate(45deg)' },
            '50%': { transform: 'translateX(100%) rotate(45deg)' },
          },
        },
      },
    },
    plugins: [],
  }
  
  