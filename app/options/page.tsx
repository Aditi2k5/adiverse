'use client'
import Link from 'next/link'
import BeamAnimation from '../components/BeamAnimation'

const options = [
  { name: 'ABOUT', href: '/about', color: 'bg-retro-pink', level: 1 },
  { name: 'SKILLS', href: '/skills', color: 'bg-retro-green', level: 2 },
  { name: 'PROJECTS', href: '/projects', color: 'bg-retro-orange', level: 3 },
  { name: 'EVENTS', href: '/events', color: 'bg-retro-purple', level: 4 },
  { name: 'JOURNEY', href: '/journey', color: 'bg-retro-blue', level: 5 },
  { name: 'RESUME', href: '/resume', color: 'bg-retro-cyan', level: 6 },
  { name: 'SOCIALS', href: '/socials', color: 'bg-retro-yellow', level: 7 },
]

export default function Options() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden p-4">
      <BeamAnimation />
      
      {/* Level Select Header */}
      <div className="absolute top-8 left-8 text-white text-2xl font-pixel tracking-wider">
        LEVEL SELECT
      </div>
      
      {/* Difficulty/Current Progress */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider">
        PROGRESS: 0/7
      </div>

      <h1 className="text-4xl mb-8 text-retro-yellow relative z-10 font-pixel drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">
        SELECT LEVEL
      </h1>

      <div className="grid grid-cols-3 gap-6 relative z-10 w-full max-w-5xl">
        {options.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className={`
              ${option.color} 
              text-black 
              px-8 py-6 
              text-3xl 
              hover:scale-105 
              transition-all 
              duration-200 
              flex 
              items-center 
              justify-center 
              relative 
              overflow-hidden
              font-pixel
              border-4 
              border-black 
              shadow-[0_0_10px_rgba(0,0,0,0.5)]
            `}
          >
            {/* Level Number */}
            <span className="absolute top-2 left-2 text-base opacity-50">
              LVL {option.level}
            </span>
            {option.name}
            
            {/* Glitch effect */}
            <span 
              className="absolute inset-0 opacity-20 mix-blend-color-dodge pointer-events-none"
              style={{
                background: `repeating-linear-gradient(
                  0deg,
                  rgba(255,255,255,0.05) 0px,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px,
                  transparent 2px
                )`
              }}
            />
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="
          mt-8 
          bg-retro-yellow 
          text-black 
          px-6 
          py-3 
          text-2xl 
          hover:bg-retro-orange 
          transition-colors 
          duration-200 
          relative 
          z-10 
          font-pixel
          border-2 
          border-black 
          shadow-[0_4px_0_black]
          active:translate-y-1
          active:shadow-none
        "
      >
        BACK TO TITLE SCREEN
      </Link>

      {/* Scanline effect */}
      <div 
        className="
          fixed 
          inset-0 
          pointer-events-none 
          z-20 
          opacity-10
        "
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `
        }}
      />
    </div>
  )
}