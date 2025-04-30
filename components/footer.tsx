import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F261F] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="White Collar Developers Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">
                <span className="text-[#81CBA8]">White Collar</span> Developers
              </span>
            </Link>
            <p className="text-white/70">
              Premium construction services delivering excellence, innovation, and quality for all your building needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-[#31614C]/30 p-2 text-white transition-colors hover:bg-[#48A880]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#31614C]/30 p-2 text-white transition-colors hover:bg-[#48A880]"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#31614C]/30 p-2 text-white transition-colors hover:bg-[#48A880]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#31614C]/30 p-2 text-white transition-colors hover:bg-[#48A880]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Sustainable Building
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 transition-colors hover:text-[#81CBA8]">
                  Structural Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#31614C]/30 p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#81CBA8]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/70">123 Business Avenue, Metro City, 54321</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#31614C]/30 p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#81CBA8]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#31614C]/30 p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#81CBA8]"
                  >
                    <path d="M21 16L8.93 3.93M16 16H21V11M3 8L15.07 20.07M8 8H3V13" />
                  </svg>
                </div>
                <span className="text-white/70">info@whitecollardevs.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#31614C]/30 p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#81CBA8]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-white/70">Mon - Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#31614C]/30 pt-8 md:flex-row">
          <p className="text-center text-sm text-white/50 md:text-left">
            © {new Date().getFullYear()} White Collar Developers. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="text-sm text-white/50 transition-colors hover:text-[#81CBA8]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/50 transition-colors hover:text-[#81CBA8]">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/50 transition-colors hover:text-[#81CBA8]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg transition-all hover:from-amber-600 hover:to-amber-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  )
}
