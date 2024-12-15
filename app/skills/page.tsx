'use client'
import Image from 'next/image'
import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'

const skills = [
  { name: 'JavaScript', logo: '/skills/js.png', color: 'bg-yellow-500' },
  { name: 'HTML', logo: '/skills/html.png', color: 'bg-orange-500' },
  { name: 'React', logo: '/skills/react.png', color: 'bg-blue-500' },
  { name: 'C++', logo: '/skills/c++.png', color: 'bg-indigo-500' },
  { name: 'Python', logo: '/skills/python.png', color: 'bg-green-500' },
  { name: 'CSS', logo: '/skills/css.png', color: 'bg-purple-500' },
  { name: 'GitHub', logo: '/skills/github.png', color: 'bg-gray-500' },
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />

      {/* Level Header */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider z-20">
        <span className="bg-retro-green/30 px-2 py-1 rounded">LEVEL 2: SKILL TREE</span>
      </div>

      <h1 className="text-5xl mb-12 text-center pt-8 font-pixel text-retro-green 
        drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]
        animate-text-glitch
        tracking-wider">
        SKILLS
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 relative">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center group"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className={`
                absolute -inset-4 
                ${skill.color} 
                rounded-full 
                opacity-30 
                group-hover:opacity-50 
                transition-all 
                duration-300 
                blur-xl
              `}></div>
              
              <Image
                src={skill.logo}
                alt={skill.name}
                width={150}
                height={150}
                className="pixelated relative z-10 
                  transform 
                  transition-transform 
                  duration-300 
                  group-hover:scale-110 
                  group-hover:rotate-6
                "
              />
            </div>
            <p className="mt-4 font-pixel text-lg text-retro-green 
              opacity-80 
              group-hover:opacity-100 
              transition-opacity 
              duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

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