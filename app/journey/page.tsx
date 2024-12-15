'use client'
import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'

const journeyEvents = [
  { year: '2021', event: 'High School Senior-11th', description: 'Learnt Python and basics of the language.' },
  { year: '2022', event: 'High School Senior-12th', description: 'Learnt MSSQL and integration with Python' },
  { year: 'Aug 2023', event: 'Started my college 1st year', description: 'Started off with C and C++ languages along with basics of front-end web development' },
  { year: 'Jul to Aug 2024', event: 'Headstarter AI SWE Fellowship', description: 'Actively participating in hackathons, started with open source contributions, honing my skills in front-end web development ' },
  { year: '2024', event: 'React.js, NextJS, TailwindCSS, ShadCN, Javascript', description: 'Actively participating in hackathons, started with open source contributions, honing my skills in front-end web development ' },
]

export default function Journey() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />

      {/* Level Header */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider z-20">
        <span className="bg-retro-blue/30 px-2 py-1 rounded">LEVEL 4: QUEST LOG</span>
      </div>

      <h1 className="text-5xl mb-16 text-center pt-8 font-pixel text-retro-blue 
        drop-shadow-[0_0_10px_rgba(0,100,255,0.8)]
        animate-text-glitch
        tracking-wider">
        MY JOURNEY
      </h1>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 
          bg-retro-blue 
          transform -translate-x-1/2
          shadow-[0_0_15px_rgba(0,100,255,0.7)]
        "></div>

        {journeyEvents.map((event, index) => {
          const isEvenIndex = index % 2 === 0;
          return (
            <div 
              key={event.year} 
              className={`
                flex items-center mb-16 
                ${isEvenIndex ? 'flex-row-reverse' : ''}
                group
              `}
            >
              {/* Timeline Dot */}
              <div className="w-8 h-8 rounded-full 
                bg-retro-blue 
                relative z-10
                shadow-[0_0_15px_rgba(0,100,255,0.7)]
                group-hover:scale-125 
                transition-transform 
                duration-300
              ">
                <div className="absolute inset-0 
                  bg-retro-blue 
                  rounded-full 
                  opacity-30 
                  blur-md 
                  animate-pulse
                "></div>
              </div>

              {/* Event Card */}
              <div className={`
                w-[calc(50%-4rem)] 
                bg-black 
                border-2 
                border-retro-blue 
                rounded-lg 
                p-6 
                relative 
                ${isEvenIndex ? 'mr-8' : 'ml-8'}
                transition-all 
                duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(0,100,255,0.5)]
              `}>
                <div className="absolute 
                  -top-4 
                  ${isEvenIndex ? 'right-8' : 'left-8'}
                  bg-retro-blue 
                  text-black 
                  px-2 
                  py-1 
                  rounded 
                  font-pixel 
                  text-sm
                ">
                  {event.year}
                </div>
                <h2 className="text-2xl font-pixel text-retro-blue mb-2">
                  {event.event}
                </h2>
                <p className="text-white/80">
                  {event.description}
                </p>
              </div>
            </div>
          )
        })}
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