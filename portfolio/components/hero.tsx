import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[#344E41] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Sanjana S Nair</h1>
        <p className="text-xl md:text-2xl mb-8">Designer & Creative Professional</p>
        <div className="mt-12 animate-bounce">
          <Link href="#about">
            <ChevronDown size={36} className="mx-auto" />
          </Link>
        </div>
      </div>
    </section>
  )
}
