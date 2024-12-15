import { 
    Code, 
    Zap, 
    Star, 
    Github, 
    Linkedin, 
    Twitter 
  } from 'lucide-react'
  
  export interface PortfolioItem {
    year?: number;
    title: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    icon: React.ReactNode;
  }
  
  export interface Project {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }
  
  export interface Social {
    name: string;
    url: string;
    icon: React.ReactNode;
  }
  
  export const portfolioData = {
    about: {
      name: "Aditya Pratap Singh",
      tagline: "Pixel Pusher & Digital Adventurer",
      bio: "Crafting digital experiences with the spirit of an 80s arcade hero. Code wizard by day, pixel artist by night."
    },
    journey: [
      { 
        year: 2020, 
        title: "Web Development Odyssey Begins", 
        description: "Embarked on the epic quest of full-stack development" 
      },
      { 
        year: 2021, 
        title: "Startup Rebellion", 
        description: "Joined a tech startup, battling coding challenges" 
      },
      { 
        year: 2022, 
        title: "Open Source Crusader", 
        description: "Contributing to open-source projects, spreading digital magic" 
      },
      { 
        year: 2023, 
        title: "Innovation Architect", 
        description: "Leading cutting-edge tech initiatives" 
      }
    ],
    skills: [
      { name: "React", icon: <Code color="#00FFFF" /> },
      { name: "Next.js", icon: <Zap color="#FF00FF" /> },
      { name: "TypeScript", icon: <Star color="#FFFF00" /> }
    ],
    projects: [
      {
        name: "Retro Game Tracker",
        description: "Full-stack application tracking classic video game achievements",
        technologies: ["React", "Node.js", "MongoDB"]
      },
      {
        name: "Synthwave Dashboard",
        description: "Data visualization platform with nostalgic 80s design",
        technologies: ["Next.js", "D3.js", "Tailwind"]
      }
    ],
    events: [
      { 
        title: "Tech Conference", 
        description: "Silicon Valley", 
        year: 2023 
      },
      { 
        title: "Hackathon Champion", 
        description: "Online Event", 
        year: 2023 
      }
    ],
    socials: [
      { 
        name: "GitHub", 
        url: "https://github.com/yourusername", 
        icon: <Github color="#00FF00" /> 
      },
      { 
        name: "LinkedIn", 
        url: "https://linkedin.com/in/yourusername", 
        icon: <Linkedin color="#0000FF" /> 
      },
      { 
        name: "Twitter", 
        url: "https://twitter.com/yourusername", 
        icon: <Twitter color="#FF0000" /> 
      }
    ]
  }