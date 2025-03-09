import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image src="https://images.pexels.com/photos/7014490/pexels-photo-7014490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=800&width=1600" alt="Our projects" fill className="object-cover" priority />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Our Projects</h1>
          <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
            Explore our portfolio of innovative architectural designs across various sectors.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold">All Projects</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="public">Public Spaces</SelectItem>
                  <SelectItem value="urban">Urban Planning</SelectItem>
                  <SelectItem value="interior">Interior Design</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="az">A-Z</SelectItem>
                  <SelectItem value="za">Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Residence",
                category: "Residential",
                location: "New York, USA",
                year: "2023",
                image: "https://i.postimg.cc/x8FfqvQ3/7.jpg?height=600&width=800",
              },
              {
                title: "Corporate Headquarters",
                category: "Commercial",
                location: "London, UK",
                year: "2022",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Urban Park",
                category: "Public Space",
                location: "Singapore",
                year: "2023",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Luxury Apartment Complex",
                category: "Residential",
                location: "Dubai, UAE",
                year: "2021",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Tech Innovation Center",
                category: "Commercial",
                location: "San Francisco, USA",
                year: "2022",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Community Library",
                category: "Public Space",
                location: "Toronto, Canada",
                year: "2023",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Sustainable Housing",
                category: "Residential",
                location: "Copenhagen, Denmark",
                year: "2022",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Retail Complex",
                category: "Commercial",
                location: "Tokyo, Japan",
                year: "2021",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Cultural Center",
                category: "Public Space",
                location: "Barcelona, Spain",
                year: "2023",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden project-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/projects/${index + 1}`}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Projects</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have a Project in Mind?</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Let's discuss how we can bring your vision to life. Our team is ready to collaborate with you on your next
              architectural project.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

