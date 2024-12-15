'use client'
import { useState } from 'react'
import BackToHome from '../components/BackToHome'
import BeamAnimation from '../components/BeamAnimation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiDevpost, SiLeetcode } from 'react-icons/si'

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Aditi2k5',
    color: 'bg-gray-800 text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/aditi-prabakaran',
    color: 'bg-blue-600 text-white',
  },
  {
    name: 'Devpost',
    icon: SiDevpost,
    url: 'https://devpost.com/Aditi2k5?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    color: 'bg-indigo-500 text-white',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    url: 'https://leetcode.com/u/aditi_2k5/',
    color: 'bg-yellow-400 text-black',
  },
]

export default function Socials() {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <BeamAnimation />
      <BackToHome />

      <div className="relative z-10">
        <div className="text-center pt-16 relative">
          <h1 className="text-4xl mb-16 font-bold text-green-400">MY DIGITAL FOOTPRINT</h1>
        </div>

        <div className="absolute top-0 right-0 text-2xl font-bold text-green-400">
          <span className="bg-retro-green/30 px-2 py-1 rounded">LEVEL 7: QUEST PROFILES</span>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveLink(social.name)}
              onMouseLeave={() => setActiveLink(null)}
              className={`
                relative overflow-hidden transform transition-all duration-300
                ${social.color} rounded-lg shadow-lg
                ${activeLink === social.name ? 'scale-105 shadow-2xl' : 'scale-100'}
                flex flex-col items-center justify-center p-6
                hover:brightness-110
              `}
            >
              <social.icon className="text-6xl mb-4 z-10" />
              <span className="text-2xl z-10">{social.name}</span>

              {/* Hover effect */}
              <div
                className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}