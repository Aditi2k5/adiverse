// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'retro-green': '#00FF00',
        'retro-pink': '#FF00FF',
        'retro-blue': '#0000FF',
        'retro-cyan': '#00FFFF'
      },
      fontFamily: {
        'retro': ['Press Start 2P', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)'
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' }
        }
      },
      animation: {
        glitch: 'glitch 1s linear infinite'
      }
    }
  },
  plugins: []
}