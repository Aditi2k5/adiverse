'use client'
import { useState } from 'react'
import Image from 'next/image'
import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'

const projects = [
  { 
    name: 'kabaadio', 
    description: 'Turning your trash into treasure one click at a time',
    logo: '/projects/klogo.png',
    websiteImage: '/projects/kabaadio.png',
    techStack: ['NextJS', 'TailwindCSS', 'Typescript', 'ShadCN'],
    links: {
      github: 'https://github.com/Aditi2k5/kabaad.io',
      demo: 'https://kabaad-io.vercel.app/'
    },
    fullDescription: 'Kabaad.io helps you categorize your waste into Paper and Facility waste, ensuring you receive rewards for recycling responsibly!'
  },
  { 
    name: 'Beyond Broken Brains', 
    description: 'An interactive platform to raise awareness and create a fostering community with regards to brain injuries',
    logo: '/projects/bbb.png',
    websiteImage: '/projects/beyond.png',
    techStack: ['NextJS', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Gemini',' Google Cloud'],
    links: {
      github: 'https://github.com/yourproject/pixel-art-creator',
      demo: 'https://yourproject.com/pixel-art-creator'
    },
    fullDescription: 'An intuitive web application that allows for users to increase their awareness on neurological disabilities and injuries by an AI powered chatbot along with being able to interact with a 3D model of the human brain'
  },
  { 
    name: 'ClubHub', 
    description: 'Portal to streamline information on all university clubs of SRM University, Ramapuram',
    logo: '/projects/ch-logo.png',
    websiteImage: '/projects/clubhub.png',
    techStack: ['React', 'CSS'],
    links: {
      github: 'https://github.com/Aditi2k5/club-registry-carousel',
      demo: 'https://club-hub-srmrmp.vercel.app/'
    },
    fullDescription: 'Student of SRM Ramapuram can find all the clubs of the university along with an events calendar to stay updated and can also apply for club openings and roles if their wish whether it be tech or non-tech'
  },
  { 
    name: 'LegalBot', 
    description: 'AI chatbot to help you with legalese',
    logo: '/projects/legal-logo.png',
    websiteImage: '/projects/legalbot.png',
    techStack: ['React', 'CSS',"Javascript"],
    links: {
      github: 'https://github.com/Cass490/chatbot',
    },
    fullDescription: 'An AI chatbot powered by GroqAPI for users to be able to simplify legalese terms, understand legal concepts, get to know about everything law has to offer.'
  },
  { 
    name: 'Retro Portfolio - ADIVERSE', 
    description: 'This website you\'re currently viewing!',
    logo: '/projects/logo.png',
    websiteImage: '/projects/adiverse.png',
    techStack: ['NextJS','TailwindCSS','Typescript'],
    links: {
      github: 'https://github.com/yourproject/retro-portfolio',
      demo: 'https://yourportfolio.com'
    },
    fullDescription: 'A pixel-art inspired portfolio website showcasing projects with a nostalgic 80s video game aesthetic, demonstrating creative web design and frontend development skills.'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects[0] | null)>(null)
  const [modalView, setModalView] = useState('details')

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setModalView('details')
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />

      {/* Level Header */}
      <div className="absolute top-8 right-8 text-white text-2xl font-pixel tracking-wider z-20">
        <span className="bg-retro-green/30 px-2 py-1 rounded">LEVEL 3: PROJECT SHOWCASE</span>
      </div>

      <h1 className="text-5xl mb-12 text-center pt-8 font-pixel text-retro-green 
        drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]
        animate-text-glitch
        tracking-wider">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="group cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src={project.logo} 
                alt={`${project.name} Logo`}
                width={600}
                height={400}
                className="w-full h-64 object-contain bg-white/10 p-4 transform transition-transform duration-300 group-hover:scale-110 pixelated"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-pixel text-2xl">EXPLORE</span>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-pixel text-retro-green mb-2">{project.name}</h2>
              <p className="text-xl opacity-80">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div 
            className="bg-black border-2 border-retro-green rounded-lg max-w-4xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-retro-green font-pixel text-2xl hover:text-white"
            >
              [X]
            </button>
            
            {/* Modal Navigation */}
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setModalView('details')}
                className={`
                  font-pixel px-4 py-2 rounded
                  ${modalView === 'details' 
                    ? 'bg-retro-green text-black' 
                    : 'border-2 border-retro-green text-retro-green hover:bg-retro-green hover:text-black'}
                `}
              >
                PROJECT DETAILS
              </button>
              <button
                onClick={() => setModalView('website')}
                className={`
                  font-pixel px-4 py-2 rounded
                  ${modalView === 'website' 
                    ? 'bg-retro-green text-black' 
                    : 'border-2 border-retro-green text-retro-green hover:bg-retro-green hover:text-black'}
                `}
              >
                WEBSITE PREVIEW
              </button>
            </div>

            {modalView === 'details' ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <Image 
                    src={selectedProject.logo} 
                    alt={`${selectedProject.name} Logo`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-contain bg-white/10 p-4 pixelated rounded-lg mb-6"
                  />
                  <h2 className="text-3xl font-pixel text-retro-green mb-4">{selectedProject.name}</h2>
                  <p className="text-xl mb-6">{selectedProject.fullDescription}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-pixel text-retro-green text-xl mb-3">TECH STACK</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-retro-green/20 text-white px-2 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {selectedProject.links.github && (
                      <a 
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-retro-green text-black px-4 py-2 rounded-md hover:bg-white transition-colors font-pixel"
                      >
                        GITHUB
                      </a>
                    )}
                    {selectedProject.links.demo && (
                      <a 
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-retro-green text-retro-green px-4 py-2 rounded-md hover:bg-retro-green hover:text-black transition-colors font-pixel"
                      >
                        DEMO
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <h3 className="font-pixel text-retro-green text-xl mb-4">BRIEF OVERVIEW</h3>
                  <div className="bg-retro-green/10 p-4 rounded-lg">
                    <p className="text-lg italic">{selectedProject.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Image 
                  src={selectedProject.websiteImage} 
                  alt={`${selectedProject.name} Website Preview`}
                  width={1200}
                  height={800}
                  className="w-full max-h-[600px] object-cover pixelated rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}

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