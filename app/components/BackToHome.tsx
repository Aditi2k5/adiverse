import Link from 'next/link'

export default function BackToHome() {
  return (
    <Link href="/options" className="absolute top-4 left-4 bg-retro-yellow text-black px-4 py-2 text-xl hover:bg-retro-orange transition-colors duration-200 z-10">
      &lt; BACK
    </Link>
  )
}

