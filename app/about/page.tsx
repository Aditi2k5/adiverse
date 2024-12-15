import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />
      
      {/* Level Header moved to right */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider z-20">
        <span className="bg-retro-green/30 px-2 py-1 rounded">LEVEL 1: PLAYER INFO</span>
      </div>

      <div className="relative z-20">
        <h1 className="text-5xl mb-8 text-center pt-8 font-pixel text-retro-pink 
          drop-shadow-[0_0_10px_rgba(255,102,196,0.8)]
          animate-text-glitch
          tracking-wider">
          ABOUT ME
        </h1>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {[
            { 
              icon: <FaCode className="text-5xl text-retro-green" />,
              title: 'CODER',
              description: 'Crafting digital experiences with precision and passion'
            },
            { 
              icon: <FaLaptopCode className="text-5xl text-retro-blue" />,
              title: 'INNOVATOR',
              description: 'Turning creative concepts into functional realities'
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="
                bg-white/10 
                border-2 
                border-white/20 
                rounded-lg 
                p-6 
                text-center 
                transform 
                transition-all 
                duration-300 
                hover:scale-105 
                hover:border-retro-pink
                hover:shadow-[0_0_15px_rgba(255,102,196,0.5)]
              "
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-pixel mb-2 text-retro-yellow">
                {item.title}
              </h3>
              <p className="text-sm opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-retro-pink/20 p-8 rounded-lg border-4 border-retro-pink relative">
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

          <p className="text-xl mb-4 relative z-10 leading-relaxed">
            <span className="font-pixel text-retro-green mr-2 text-lg">PLAYER:</span>
            Greetings, player! I'm a passionate developer with a love for creating
            immersive digital experiences. My journey in the world of coding
            started when I first laid hands on a classic NES console, sparking
            a lifelong fascination with technology and interactive design.
          </p>

          <p className="text-xl mb-4 relative z-10 leading-relaxed">
            <span className="font-pixel text-retro-orange mr-2 text-lg">SKILLS:</span>
            Since then, I've leveled up my skills across various programming languages
            and frameworks. My quest is to create applications that are not just
            functional, but truly engaging – transforming lines of code into
            memorable user experiences.
          </p>

          <p className="text-xl relative z-10 leading-relaxed">
            <span className="font-pixel text-retro-blue mr-2 text-lg">BONUS:</span>
            When I'm not in coding mode, you'll find me exploring virtual worlds,
            participating in game jams, or tinkering with retro hardware. 
            Ready to team up and embark on an epic development adventure?
          </p>
        </div>
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