import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#DAD7CD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#344E41]">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#3A5A40]">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Sanjana's Photo"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-[#344E41]">
              My name is Sanjana, and I'm passionate about design and creativity. I'm currently pursuing an Integrated
              MBA at NIIT University with a CGPA of 6.79. I love bringing ideas to life through my work, always aiming
              to create something unique and impactful. Whether it's a project, a new challenge, or a chance to learn,
              I'm excited to push my limits and keep evolving creatively.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="px-6 py-3 bg-[#3A5A40] text-white rounded-md hover:bg-[#5C7650] transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border-2 border-[#3A5A40] text-[#3A5A40] rounded-md hover:bg-[#A3B18A] hover:border-[#A3B18A] transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
