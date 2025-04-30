"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-[#48A880]" />,
      title: "Our Location",
      details: "123 Business Avenue, Metro City, 54321",
    },
    {
      icon: <Phone className="h-5 w-5 text-[#48A880]" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-[#48A880]" />,
      title: "Email Address",
      details: "info@whitecollardevs.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#48A880]" />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
    },
  ]

  return (
    <section id="contact" className="w-full bg-[#0F261F] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#81CBA8] md:text-xl">Contact Us</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Get In Touch</h3>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Ready to start your project? Reach out to our team today
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white">Contact Information</h4>
            <p className="text-white/70">
              Have questions or ready to discuss your construction project? Our team is here to help. Reach out through
              any of the channels below or fill out the contact form.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-[#31614C]/20 bg-[#31614C]/10">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="mt-1 rounded-full bg-[#48A880]/10 p-2">{item.icon}</div>
                    <div>
                      <h5 className="font-medium text-white">{item.title}</h5>
                      <p className="text-white/70">{item.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215651639618!2d-73.98784492426285!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710349060500!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div>
            <Card className="border-[#31614C]/20 bg-[#31614C]/10">
              <CardContent className="p-6">
                <h4 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-[#48A880]/30 bg-[#0F261F]/50 text-white placeholder:text-white/50 focus-visible:ring-[#81CBA8]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-[#48A880]/30 bg-[#0F261F]/50 text-white placeholder:text-white/50 focus-visible:ring-[#81CBA8]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-[#48A880]/30 bg-[#0F261F]/50 text-white placeholder:text-white/50 focus-visible:ring-[#81CBA8]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="border-[#48A880]/30 bg-[#0F261F]/50 text-white placeholder:text-white/50 focus-visible:ring-[#81CBA8]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      className="min-h-[150px] border-[#48A880]/30 bg-[#0F261F]/50 text-white placeholder:text-white/50 focus-visible:ring-[#81CBA8]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
