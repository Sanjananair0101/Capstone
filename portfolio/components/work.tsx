import Image from "next/image"
import Link from "next/link"

export default function Work() {
  return (
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
  )
}
