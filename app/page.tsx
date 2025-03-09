"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggeredFadeIn, ParallaxSection, TextReveal } from "@/components/animations"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ParallaxSection className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <TextReveal
            text="Innovative Architecture for Modern Living"
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
          />
          <FadeIn direction="up" delay={0.5} className="mt-4 max-w-[700px]">
            <p className="text-lg text-white/90 md:text-xl">
              We create spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </FadeIn>
          <FadeIn
            direction="up"
            delay={0.7}
            className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button size="lg" asChild>
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Shwet Bhairab Architects & Associates
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2011 (2068 B.S.), Shwet Bhairab Architects & Associates has established itself as a leading
                architectural firm, delivering exceptional designs that blend functionality, aesthetics, and
                sustainability.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of experienced architects and designers is dedicated to creating spaces that reflect our
                clients' visions while adhering to the highest standards of architectural excellence.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">200+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">25+</h3>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">15+</h3>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </motion.div>
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/about" className="inline-flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <motion.div
                className="relative aspect-square overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <FadeIn direction="up" className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Explore our portfolio of innovative architectural designs spanning residential, commercial, and public
              spaces.
            </p>
          </FadeIn>
          <StaggeredFadeIn className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Residence",
                category: "Residential",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Corporate Headquarters",
                category: "Commercial",
                image:
                  "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
              },
              {
                title: "Urban Park",
                category: "Public Space",
                image:
                  "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((project, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Link
                  href={`/projects/${index + 1}`}
                  className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md project-card block"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-muted-foreground">{project.category}</div>
                    <h3 className="mt-1 text-xl font-medium group-hover:underline">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggeredFadeIn>
          <FadeIn direction="up" delay={0.5} className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn direction="up" className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              We offer a comprehensive range of architectural and design services tailored to meet your specific needs.
            </p>
          </FadeIn>
          <StaggeredFadeIn className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Architectural Design",
                description:
                  "From concept to completion, we create innovative designs that reflect your vision and requirements.",
                image:
                  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
              },
              {
                title: "Interior Design",
                description:
                  "Transform your spaces with our interior design services that blend functionality with aesthetics.",
                image:
                  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Urban Planning",
                description: "Comprehensive urban planning solutions that create sustainable and livable communities.",
                image:
                  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Landscape Design",
                description:
                  "Create harmonious outdoor spaces that complement your architecture and enhance the environment.",
                image:
                  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Heritage Conservation",
                description:
                  "Preserving cultural heritage through thoughtful restoration and adaptive reuse of historic structures.",
                image:
                  "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Rural Development",
                description:
                  "Sustainable development solutions for rural areas that respect local traditions and environment.",
                image:
                  "https://images.unsplash.com/photo-1513735492246-483525079686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More
                    <motion.span
                      className="inline-block ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <FadeIn direction="up" className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </FadeIn>
          <StaggeredFadeIn className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                quote:
                  "Working with Shwet Bhairab was an absolute pleasure. They transformed our vision into a beautiful home that exceeds all our expectations.",
              },
              {
                name: "Michael Chen",
                role: "CEO, Tech Innovations",
                quote:
                  "The team's attention to detail and innovative approach resulted in an office space that perfectly reflects our company culture and enhances productivity.",
              },
              {
                name: "Emily Rodriguez",
                role: "City Planner",
                quote:
                  "Shwet Bhairab's urban planning expertise was instrumental in revitalizing our downtown area. Their sustainable design solutions have created a vibrant community space.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-card p-6 shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex-1">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn direction="up">
            <motion.div
              className="rounded-lg bg-primary p-8 md:p-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
                    Ready to Start Your Project?
                  </h2>
                  <p className="mt-4 text-primary-foreground/90">
                    Contact us today to discuss your architectural needs and how we can bring your vision to life.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 md:items-end">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <p className="text-sm text-primary-foreground/80">Or call us at +977-01-6631451</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

