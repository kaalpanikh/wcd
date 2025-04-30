import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0F261F]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-30" />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0F261F]/80 to-[#0F261F]" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Modern construction project" fill className="object-cover opacity-30" priority />
      </div>

      <div className="container relative z-20 mx-auto px-4 py-24 md:px-6 lg:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="font-brushelva text-lg font-medium text-[#81CBA8] md:text-xl">
                Premium Construction Services
              </h2>
              <h1 className="mt-2 font-brushelva text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Building Tomorrow&apos;s{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Landmarks
                </span>{" "}
                Today
              </h1>
            </div>
            <p className="max-w-lg text-lg text-white/80 md:text-xl">
              White Collar Developers combines innovation, precision, and expertise to deliver exceptional construction
              projects that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
                asChild
              >
                <Link href="#portfolio">View Our Projects</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#48A880] text-[#81CBA8] hover:bg-[#48A880]/10"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="relative h-[450px] w-[450px]">
              <Image src="/logo.png" alt="White Collar Developers Logo" fill className="object-contain opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm text-white/70">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#81CBA8]"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
