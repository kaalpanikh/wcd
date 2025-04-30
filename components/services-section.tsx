import { Building2, Ruler, Hammer, Users, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-[#48A880]" />,
      title: "Commercial Construction",
      description:
        "State-of-the-art commercial buildings designed for functionality and aesthetic appeal, from office complexes to retail spaces.",
    },
    {
      icon: <Ruler className="h-10 w-10 text-[#48A880]" />,
      title: "Architectural Design",
      description:
        "Innovative architectural solutions that blend form and function, creating spaces that inspire and endure.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-[#48A880]" />,
      title: "Renovation & Remodeling",
      description:
        "Transform existing structures into modern, efficient spaces that meet contemporary needs and standards.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#48A880]" />,
      title: "Project Management",
      description:
        "Comprehensive project oversight ensuring timely delivery, quality control, and budget adherence from concept to completion.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#48A880]" />,
      title: "Sustainable Building",
      description:
        "Eco-friendly construction practices and materials that minimize environmental impact while maximizing energy efficiency.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#48A880]" />,
      title: "Structural Engineering",
      description:
        "Expert structural analysis and design ensuring the safety, stability, and longevity of every construction project.",
    },
  ]

  return (
    <section id="services" className="w-full bg-[#0F261F] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#81CBA8] md:text-xl">Our Services</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Comprehensive Construction Solutions
          </h3>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Delivering excellence across a wide range of construction services
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-[#31614C]/20 bg-[#31614C]/10 transition-all duration-300 hover:border-[#81CBA8]/30 hover:bg-[#31614C]/20"
            >
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
            size="lg"
            asChild
          >
            <Link href="#contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
