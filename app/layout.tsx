import './globals.css'
import { VT323 } from 'next/font/google'
import type { Metadata } from 'next'

const pixelFont = VT323({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Retro Game Portfolio',
  description: '80s style pixelated portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pixelFont.className} bg-black text-white min-h-screen`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}

