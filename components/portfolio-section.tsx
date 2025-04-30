"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "industrial", label: "Industrial" },
    { id: "renovation", label: "Renovation" },
  ]

  const projects = [
    {
      id: 1,
      title: "Azure Tower",
      category: "commercial",
      image: "/project-1.jpg",
      description:
        "A 30-story commercial tower featuring cutting-edge sustainable design and smart building technology.",
      location: "Downtown Metro City",
      year: "2023",
      details:
        "The Azure Tower stands as a testament to modern architectural innovation, combining aesthetic beauty with functional excellence. This 30-story commercial tower features a glass facade that maximizes natural light while minimizing heat gain through specialized coatings. The building incorporates a rainwater harvesting system, solar panels, and energy-efficient HVAC systems, earning it a LEED Platinum certification. The interior spaces are designed for flexibility, allowing for various office configurations to meet the diverse needs of tenants.",
    },
    {
      id: 2,
      title: "Emerald Residences",
      category: "residential",
      image: "/project-2.jpg",
      description: "Luxury condominium complex with 120 units, featuring premium amenities and panoramic city views.",
      location: "Riverside District",
      year: "2022",
      details:
        "Emerald Residences redefines luxury living with its thoughtful design and premium amenities. The complex consists of three interconnected buildings housing 120 units ranging from one to four bedrooms. Each residence features high ceilings, floor-to-ceiling windows, and premium finishes. The development includes a rooftop infinity pool, fitness center, spa, residents' lounge, and landscaped gardens. Sustainable features include green roofs, energy-efficient appliances, and a building management system that optimizes resource usage.",
    },
    {
      id: 3,
      title: "Nexus Industrial Park",
      category: "industrial",
      image: "/project-3.jpg",
      description: "State-of-the-art industrial complex designed for manufacturing and logistics operations.",
      location: "Commerce District",
      year: "2023",
      details:
        "Nexus Industrial Park represents the next generation of industrial facilities, designed to meet the complex needs of modern manufacturing and logistics operations. The 50-acre development features six buildings with flexible floor plans, high ceilings, and reinforced floors to accommodate heavy machinery. Advanced features include automated loading docks, climate-controlled storage areas, and integrated security systems. The complex also incorporates office spaces with modern amenities for administrative operations, creating a seamless workflow between production and management.",
    },
    {
      id: 4,
      title: "Heritage Plaza Renovation",
      category: "renovation",
      image: "/project-4.jpg",
      description:
        "Complete restoration and modernization of a historic downtown plaza while preserving its architectural heritage.",
      location: "Historic District",
      year: "2021",
      details:
        "The Heritage Plaza Renovation project involved the delicate balance of preserving historical significance while introducing modern functionality. This landmark building, dating back to 1925, required extensive structural reinforcement, facade restoration, and interior reconfiguration. Our team worked closely with historical preservation experts to ensure authentic restoration of ornate details while upgrading all building systems to current standards. The renovated space now houses retail on the ground floor with premium office space above, all while maintaining the building's historic character and charm.",
    },
    {
      id: 5,
      title: "Horizon Office Complex",
      category: "commercial",
      image: "/project-5.jpg",
      description:
        "Modern office campus with four interconnected buildings designed for collaboration and employee wellbeing.",
      location: "Tech Corridor",
      year: "2022",
      details:
        "Horizon Office Complex represents a new approach to workplace design, prioritizing collaboration, flexibility, and employee wellbeing. The campus consists of four interconnected buildings surrounding a central courtyard with water features and native landscaping. Each building offers a variety of workspace configurations, from traditional offices to open collaborative areas. Amenities include a fitness center, multiple cafes, outdoor meeting spaces, and dedicated areas for relaxation. The complex utilizes smart building technology for climate control, lighting, and security, creating an efficient and comfortable environment for occupants.",
    },
    {
      id: 6,
      title: "Lakeside Villas",
      category: "residential",
      image: "/project-6.jpg",
      description: "Exclusive community of 24 luxury villas with private docks and panoramic lake views.",
      location: "Lake District",
      year: "2023",
      details:
        "Lakeside Villas offers an unparalleled living experience for those seeking luxury in a natural setting. This exclusive development features 24 custom-designed villas, each with private access to the lake and personal boat docks. The architectural design blends contemporary aesthetics with natural materials, creating homes that complement their surroundings. Each villa features open floor plans, gourmet kitchens, home automation systems, and expansive outdoor living spaces. The community includes a clubhouse, private marina, tennis courts, and 24-hour security, providing residents with both privacy and premium amenities.",
    },
  ]

  return (
    <section id="portfolio" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#48A880] md:text-xl">Our Portfolio</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F261F] md:text-4xl lg:text-5xl">
            Showcasing Excellence in Construction
          </h3>
          <p className="mt-4 text-lg text-[#31614C]/80 md:text-xl">
            Explore our diverse portfolio of completed projects
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center">
              <TabsList className="mb-8 bg-[#81CBA8]/10">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-[#48A880] data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-xl bg-[#0F261F] shadow-lg transition-all duration-300 hover:shadow-xl"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F261F] to-transparent opacity-70" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-white">{project.title}</h4>
                              <p className="text-sm text-white/70">{project.location}</p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#0F261F]">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-[#31614C]">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)} Project •{" "}
                  {selectedProject.year}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#0F261F]">Description</h4>
                    <p className="text-[#31614C]/80">{selectedProject.details}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F261F]">Location</h4>
                    <p className="text-[#31614C]/80">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F261F]">Completion Year</h4>
                    <p className="text-[#31614C]/80">{selectedProject.year}</p>
                  </div>
                  <Button className="mt-4 bg-[#0F261F] text-white hover:bg-[#31614C]">Request Similar Project</Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
