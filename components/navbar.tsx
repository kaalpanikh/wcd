"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0F261F]/95 py-3 shadow-lg backdrop-blur-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="White Collar Developers Logo" width={48} height={48} className="h-12 w-auto" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-white">
              <span className="text-[#81CBA8]">White Collar</span> Developers
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#blog" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white/90 transition-colors hover:text-[#81CBA8]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Button
          className="hidden bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800 md:flex"
          asChild
        >
          <Link href="#contact">Get a Quote</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button className="text-white md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#0F261F] px-4 py-5 shadow-lg md:hidden">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-white/90 transition-colors hover:text-[#81CBA8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
                  asChild
                >
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
