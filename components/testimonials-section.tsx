"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, Metro Developments",
      image: "/testimonial-1.jpg",
      quote:
        "White Collar Developers exceeded our expectations at every turn. Their attention to detail and commitment to quality is unmatched in the industry. They delivered our commercial complex ahead of schedule and within budget.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Property Investor",
      image: "/testimonial-2.jpg",
      quote:
        "I've worked with many construction firms over the years, but none have demonstrated the level of professionalism and expertise that White Collar Developers brings to the table. They're now my go-to partner for all development projects.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Architectural Director",
      image: "/testimonial-3.jpg",
      quote:
        "The collaborative approach of White Collar Developers made our design vision come to life seamlessly. Their technical expertise complemented our creative direction, resulting in a building that's both beautiful and functional.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "City Urban Planner",
      image: "/testimonial-4.jpg",
      quote:
        "White Collar Developers stands out for their commitment to sustainable building practices. Their innovative approach to the Heritage Plaza renovation preserved historical elements while achieving modern efficiency standards.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="w-full bg-[#0F261F]/5 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#48A880] md:text-xl">Testimonials</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F261F] md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h3>
          <p className="mt-4 text-lg text-[#31614C]/80 md:text-xl">
            Hear from those who have experienced our commitment to excellence
          </p>
        </div>

        <div className="mt-16">
          <div className="relative mx-auto max-w-4xl">
            <Quote className="absolute -left-4 -top-4 h-16 w-16 text-[#48A880]/20 md:-left-8 md:-top-8 md:h-24 md:w-24" />

            <Card className="border-[#48A880]/20 bg-white shadow-lg">
              <CardContent className="p-6 md:p-10">
                <div className="grid gap-8 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4 text-center md:col-span-3 md:text-left">
                    <p className="text-lg italic text-[#31614C]/80 md:text-xl">"{testimonials[activeIndex].quote}"</p>
                    <div>
                      <h4 className="text-xl font-bold text-[#0F261F]">{testimonials[activeIndex].name}</h4>
                      <p className="text-[#48A880]">{testimonials[activeIndex].position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-[#48A880] w-6" : "bg-[#48A880]/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
