import Hero from "@/components/hero"
import About from "@/components/about"
import Work from "@/components/work"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
