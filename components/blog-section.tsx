import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Building Practices for the Future",
      excerpt:
        "Exploring innovative eco-friendly construction methods that reduce environmental impact while enhancing building performance.",
      image: "/blog-1.jpg",
      date: "March 15, 2023",
      author: "James Wilson",
      category: "Sustainability",
    },
    {
      id: 2,
      title: "The Evolution of Smart Buildings in Commercial Construction",
      excerpt:
        "How integrated technology is revolutionizing commercial spaces, improving efficiency, security, and user experience.",
      image: "/blog-2.jpg",
      date: "April 22, 2023",
      author: "Sophia Chen",
      category: "Technology",
    },
    {
      id: 3,
      title: "Navigating Construction Challenges in Urban Environments",
      excerpt:
        "Strategies for successful project execution in densely populated areas with limited space and complex regulations.",
      image: "/blog-3.jpg",
      date: "May 10, 2023",
      author: "Robert Martinez",
      category: "Project Management",
    },
  ]

  return (
    <section id="blog" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-brushelva text-lg font-medium text-[#48A880] md:text-xl">Our Blog</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F261F] md:text-4xl lg:text-5xl">
            Industry Insights & Updates
          </h3>
          <p className="mt-4 text-lg text-[#31614C]/80 md:text-xl">
            Stay informed with the latest trends and news in construction
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-[#81CBA8]/20 transition-all duration-300 hover:border-[#48A880]/50 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-56">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-[#48A880] px-3 py-1 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="line-clamp-2 text-xl text-[#0F261F]">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="line-clamp-3 text-[#31614C]/70">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4 border-t border-[#81CBA8]/10 p-4">
                <div className="flex w-full items-center justify-between text-sm text-[#31614C]/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="p-0 text-[#48A880] hover:bg-transparent hover:text-[#31614C]"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-[#48A880] text-[#48A880] hover:bg-[#48A880]/10 hover:text-[#31614C]"
            asChild
          >
            <Link href="#">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
