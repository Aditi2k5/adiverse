'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BeamAnimation from './components/BeamAnimation'

export default function Home() {
  const [showStart, setShowStart] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => {
    router.push('/options')
  }

  return (
    <div className="min-h-screen bg-retro-blue flex flex-col items-center justify-center relative overflow-hidden">
      <BeamAnimation />
      <h1 className="text-6xl mb-8 text-retro-yellow animate-pulse relative z-10">WELCOME TO ADIVERSE</h1>
      {showStart && (
        <button
          onClick={handleStart}
          className="bg-retro-green text-black px-8 py-4 text-2xl hover:bg-retro-yellow transition-colors duration-200 animate-pulse-fast relative z-10"
        >
          PRESS START
        </button>
      )}
    </div>
  )
}

