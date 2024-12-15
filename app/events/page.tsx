'use client'
import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'

const events = [
  { 
    name: 'DevFest Chennai', 
    date: 'October 5, 2024', 
    description: 'Developers conference to discuss about emerging technologies',
    location: 'IITM Research Park',
    highlights: [
      'Met with Industry Professionals',
      'Learnt about various AI tools and how to effectively use them',
    ]
  },
  { 
    name: 'Build Fast and Ship Fast With Replit and Cursor (lablab.ai)', 
    date: 'Oct 11-13, 2024', 
    description: 'Unleash 10x Dev Speed with Replit & Cursor by launching with cutting-edge AI integration',
    location: 'Virtual Hackathon',
    highlights: [
      'Made LegalBot, your personal chatbot powered by GroqAPI to help simplify and explain legalese and legal terms in laymans language aloing with suggesting better legal practices'
    ]
  },
  { 
    name: 'NovaHacks I', 
    date: 'Sep 15 to Oct 18, 2024', 
    description: 'Hackathon based on sustainability and eco-friendly practices',
    location: 'Virtual Hackathon',
    highlights: [
      'Built EcoMate, an AI powered portal for users to track their monthly energy and water consumption levels, represnted through graphs and suggestions to be more ec-friendly',
      'Placed 12 out of 50 finalists'
    ]
  },
  { 
    name: 'Hacktoberfest 2024', 
    date: 'Oct 1 to 31, 2024', 
    description: 'Started off my journey with open source contributions on GitHub by working on issues to improve front-end of websites using React, HTML and CSS',
    location: 'Virtual Event',
    highlights: [
      'Open Source Contributions with good-first-issues',
      'Merged 5 PRs'
    ]
  },
  { 
    name: 'GirlScript Summer of Code Extd. 2024', 
    date: 'Oct 1 to Nov 6, 2024', 
    description: 'EXtended my journey with open source contributions on GitHub by working on assigned issues to improve front-end and design of websites using React, NextJS, HTML and CSS',
    location: 'Virtual Event',
    highlights: [
      'Open Source Contributions with good-first-issues'
    ]
  },
  { 
    name: 'Nature Hacks', 
    date: 'Nov 25, 2024', 
    description: 'Hackathon focused on building sustainable solutions to motivate the larger public to follow the same',
    location: 'Virtual Event',
    highlights: [
      'Built kabaad.io, a platform for users to recycle their paper and facility waste and earn cash rewards and incentivize the process'
    ]
  },
  { 
    name: 'Google AI for Impact Hackathon', 
    date: 'Ongoing', 
    description: 'Building solutions to help with brain injury causal disabilities by spreading awareness of the same',
    location: 'Virtual Event',
    highlights: [
  
    ]
  },
  { 
    name: 'Shaastra IITM', 
    date: 'Upcoming-January 5-7, 2025', 
    description: 'Techfest and events',
    location: 'IIT, Madras',
    highlights: [
    
    ]
  }
]

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />

      {/* Level Header */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider z-20">
        <span className="bg-retro-green/30 px-2 py-1 rounded">LEVEL 4: ACTIVITY LOG</span>
      </div>

      <h1 className="text-5xl mb-16 text-center pt-8 font-pixel text-retro-green 
        drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]
        animate-text-glitch
        tracking-wider">
        EVENT TIMELINE
      </h1>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-retro-green/50 h-full"></div>

        {events.map((event, index) => (
          <div 
            key={event.name}
            className={`
              mb-16 flex items-center w-full 
              ${index % 2 === 0 ? 'flex-row-reverse' : ''}
            `}
          >
            {/* Event Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 
              bg-retro-green rounded-full border-4 border-black z-10">
            </div>

            {/* Event Card */}
            <div 
              className={`
                w-[calc(50%-4rem)] 
                bg-retro-green/10 
                border-2 
                border-retro-green/50 
                rounded-lg 
                p-6 
                relative
                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                transition-all
                duration-300
                hover:bg-retro-green/20
                hover:scale-[1.02]
              `}
            >
              <h2 className="text-2xl font-pixel text-retro-green mb-2">
                {event.name}
              </h2>
              <p className="text-sm text-white/70 mb-3">
                {event.date} | {event.location}
              </p>
              <p className="text-lg mb-4">
                {event.description}
              </p>
              
              <div>
                <h3 className="font-pixel text-retro-green text-xl mb-2">HIGHLIGHTS</h3>
                <ul className="list-disc list-inside text-white/80">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="mb-1">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
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