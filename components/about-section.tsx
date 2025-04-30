import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      title: "Trustworthiness",
      description: "Establish a reputation for honesty, transparency, and integrity.",
    },
    {
      title: "Expertise",
      description: "Demonstrate deep knowledge of the market, offering valuable insights.",
    },
    {
      title: "Customer-Centric",
      description: "Prioritize client needs, ensuring exceptional service and tailored solutions.",
    },
    {
      title: "Innovation",
      description: "Embrace cutting-edge technologies and methodologies to deliver superior results.",
    },
  ]

  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#48A880] md:text-xl">About Us</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F261F] md:text-4xl lg:text-5xl">
            Our Purpose & Values
          </h3>
          <p className="mt-4 text-lg text-[#31614C]/80 md:text-xl">
            Building excellence through innovation and integrity
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
          <div className="relative order-2 flex items-center justify-center md:order-1">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl">
              <Image src="/about-image.jpg" alt="White Collar Developers Team" fill className="object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 opacity-80" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-xl bg-[#48A880] opacity-20" />
          </div>

          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-[#0F261F] md:text-3xl">Welcome to White Collar Developers</h4>
              <p className="text-[#31614C]/80">
                Where real estate innovation meets precision. We are a team of dedicated professionals with a passion
                for creating exceptional living spaces that redefine urban living. With a keen eye for detail and a
                commitment to quality, we've been transforming landscapes and shaping communities for years.
              </p>
              <p className="text-[#31614C]/80">
                Our mission is to deliver construction excellence through innovative solutions, sustainable practices,
                and unwavering commitment to client satisfaction. We believe in building not just structures, but
                lasting relationships and communities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 rounded-lg border border-[#81CBA8]/30 bg-[#81CBA8]/5 p-4"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#48A880]" />
                    <h5 className="font-semibold text-[#0F261F]">{value.title}</h5>
                  </div>
                  <p className="text-sm text-[#31614C]/80">{value.description}</p>
                </div>
              ))}
            </div>

            <Button className="mt-4 w-fit bg-[#0F261F] text-white hover:bg-[#31614C]" asChild>
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
