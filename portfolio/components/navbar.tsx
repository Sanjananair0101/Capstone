"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#344E41] shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Sanjana S Nair
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#344E41] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>
              About
            </MobileNavLink>
            <MobileNavLink href="#work" onClick={toggleMenu}>
              Work
            </MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu}>
              Experience
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMenu}>
              Skills
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white hover:text-[#DAD7CD] transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-white hover:text-[#DAD7CD] transition-colors block py-2" onClick={onClick}>
      {children}
    </Link>
  )
}
