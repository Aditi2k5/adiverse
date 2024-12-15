'use client'
import { useState, useEffect } from 'react'
import BackToHome from '../components/BackToHome'

export default function Resume() {
  const [isTyping, setIsTyping] = useState(false)
  const [displayedContent, setDisplayedContent] = useState('')

  useEffect(() => {
    const fullContent = `
  ADITI_PRABAKARAN@PORTFOLIO:~$ cat resume.txt
--------------------------------------------------------------------------------
NAME: ADITI PRABAKARAN
CONTACT:
  📧 adip.2k5@gmail.com
  🔗 LinkedIn: www.linkedin.com/in/aditi-prabakaran
  💻 GitHub: https://github.com/Aditi2k5

EDUCATION
--------------------------------------------------------------------------------
> SRM University
  Degree: Computer Science Engineering
  Expected Graduation: May 2027
  GPA: 9.4/10.0
  Key Courses: Python, C/C++, Java, Data Structures and Algorithms

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
> Headstarter AI | Software Engineering Fellowship
  Duration: September 2024
  Achievements:
  - Engineered an AI chatbot web application using React, Firebase, Material UI
  - Integrated Groq API for personalized allergy-free recipe generation
  - Developed three web applications using Firebase, TypeScript, ReactJS

> Corizo | Training Internship
  Duration: January 2024 - March 2024
  Key Projects:
  - Developed stock price prediction model with 85% accuracy
  - Utilized Machine Learning with Python, scikit-learn, pandas

NOTABLE PROJECTS
--------------------------------------------------------------------------------
> ClubHub
  Technologies: JavaScript, React, CSS
  Link: https://club-hub-srmrmp.vercel.app/
  Highlights:
  - Centralized university club information platform
  - 40% reduction in club information search time
  - Responsive and accessible user interface

> EcoMate
  Technologies: HTML/CSS, JavaScript, Groq API
  Link: https://github.com/Aditi2k5/ecomate
  Features:
  - Utility consumption monitoring web application
  - Interactive data visualization with Chart.js
  - User-friendly environmental impact tracking

TECHNICAL SKILLS
--------------------------------------------------------------------------------
Programming Languages: Python, C++, JavaScript
Web Technologies: React.js, HTML/CSS
Version Control: GitHub

LEADERSHIP & RESPONSIBILITIES
--------------------------------------------------------------------------------
> E-Cell, IIT Guwahati | Campus Ambassador
  - Driving entrepreneurship and student innovation
  - Direct point of contact between campus students and E-Cell

> IIE Cell, SRM Ramapuram | Technical Team Member
  - Leading front-end web development projects
  - Utilizing React and HTML/CSS

ACHIEVEMENTS
--------------------------------------------------------------------------------
- Secured 12th place out of 50 finalists in NovaHacks 2024

ADITI_PRABAKARAN@PORTFOLIO:~$ 
    `
    
    if (!isTyping) {
      setIsTyping(true)
      let index = 0
      const typeWriter = setInterval(() => {
        if (index < fullContent.length) {
          setDisplayedContent(prev => prev + fullContent[index])
          index++
        } else {
          clearInterval(typeWriter)
          setIsTyping(false)
        }
      }, 10)
      
      return () => clearInterval(typeWriter)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 text-xs sm:text-sm">
      <BackToHome />
      <div className="bg-black p-4 rounded-lg border-2 border-green-600 shadow-lg max-w-4xl mx-auto">
        <pre className="whitespace-pre-wrap break-words">
          {displayedContent}
        </pre>
        {!isTyping && (
          <div className="animate-pulse">_</div>
        )}
      </div>
    </div>
  )
}