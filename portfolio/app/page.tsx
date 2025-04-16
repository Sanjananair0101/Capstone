import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-[#344E41] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sanjana Nair</h1>
          <p className="text-xl md:text-2xl mb-8">Designer & Creative Professional</p>
          <div className="mt-12 animate-bounce">
            <Link href="#about">
              <ChevronDown size={36} className="mx-auto" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                My name is Sanjana, and I'm passionate about design and creativity. I love bringing ideas to life
                through my work, always aiming to create something unique and impactful. Whether it's a project, a new
                challenge, or a chance to learn, I'm excited to push my limits and keep evolving creatively.
              </p>
              <div className="mt-8 flex gap-4">
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

      {/* Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#344E41]">My Work</h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Freelancing Project */}
            <div className="bg-[#A3B18A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#344E41]">Freelancing</h3>
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Freelancing 1"
                    width={300}
                    height={200}
                    className="w-full rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Freelancing 2"
                    width={300}
                    height={200}
                    className="w-full rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Hult Project */}
            <div className="bg-[#A3B18A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#344E41]">Hult Project</h3>
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Hult 3"
                    width={300}
                    height={200}
                    className="w-full rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Hult 4"
                    width={300}
                    height={200}
                    className="w-full rounded-md"
                  />
                  <div className="flex gap-4 mt-4">
                    <Link
                      href="#"
                      className="px-4 py-2 bg-[#3A5A40] text-white rounded-md hover:bg-[#5C7650] transition-colors text-sm"
                    >
                      View PDF 1
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 bg-[#3A5A40] text-white rounded-md hover:bg-[#5C7650] transition-colors text-sm"
                    >
                      View PDF 2
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* My Health Wellness Clinic */}
            <div className="bg-[#A3B18A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#344E41]">My Health Wellness Clinic</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <Image
                      key={num}
                      src="/placeholder.svg?height=150&width=150"
                      alt={`My Health ${num}`}
                      width={150}
                      height={150}
                      className="w-full rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Under25App */}
            <div className="bg-[#A3B18A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#344E41]">Under25App</h3>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Under25App 1"
                  width={300}
                  height={200}
                  className="w-full rounded-md"
                />
              </div>
            </div>

            {/* VYK Project */}
            <div className="bg-[#A3B18A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#344E41]">VYK Project</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Image
                      key={num}
                      src="/placeholder.svg?height=200&width=300"
                      alt={`VYK ${num}`}
                      width={300}
                      height={200}
                      className="w-full rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#5C7650] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact & Experience</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#3A5A40] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-[#DAD7CD] text-[#344E41]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-[#DAD7CD] text-[#344E41]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-[#DAD7CD] text-[#344E41]"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#DAD7CD] text-[#344E41] font-bold rounded-md hover:bg-white transition-colors"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-8">
                <p className="mb-2">Email: 01sanjananair@gmail.com</p>
                <p>Connect with me on social media:</p>
                <div className="flex gap-4 mt-2">
                  <Link href="#" className="hover:text-[#DAD7CD] transition-colors">
                    LinkedIn
                  </Link>
                  <Link href="#" className="hover:text-[#DAD7CD] transition-colors">
                    Instagram
                  </Link>
                  <Link href="#" className="hover:text-[#DAD7CD] transition-colors">
                    Behance
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#3A5A40] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#DAD7CD] pl-4">
                  <h4 className="text-xl font-bold">Creative Designer</h4>
                  <p className="text-[#A3B18A]">2021 - Present</p>
                  <p className="mt-2">
                    Leading design projects and creating impactful visual solutions for clients across various
                    industries.
                  </p>
                </div>
                <div className="border-l-4 border-[#DAD7CD] pl-4">
                  <h4 className="text-xl font-bold">Freelance Designer</h4>
                  <p className="text-[#A3B18A]">2019 - 2021</p>
                  <p className="mt-2">
                    Collaborated with multiple clients to deliver custom design solutions that met their specific needs.
                  </p>
                </div>
                <div className="border-l-4 border-[#DAD7CD] pl-4">
                  <h4 className="text-xl font-bold">Design Intern</h4>
                  <p className="text-[#A3B18A]">2018 - 2019</p>
                  <p className="mt-2">
                    Assisted senior designers and gained valuable experience in professional design workflows.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#344E41] p-2 rounded">UI/UX Design</div>
                  <div className="bg-[#344E41] p-2 rounded">Graphic Design</div>
                  <div className="bg-[#344E41] p-2 rounded">Brand Identity</div>
                  <div className="bg-[#344E41] p-2 rounded">Adobe Creative Suite</div>
                  <div className="bg-[#344E41] p-2 rounded">Figma</div>
                  <div className="bg-[#344E41] p-2 rounded">Project Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#344E41] text-white text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Sanjana Nair. All rights reserved.</p>
          <p className="mt-2">Designed with passion and creativity</p>
        </div>
      </footer>
    </main>
  )
}
