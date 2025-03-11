import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/2253937/pexels-photo-2253937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=800&width=1600"
          alt="Our architecture firm"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">About Us</h1>
          <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
            Learn about our journey, our team, and our commitment to architectural excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2005 by a group of passionate architects, Shwetbhairab Architect and Association has grown
                from a small design studio to a leading architectural firm with a reputation for excellence.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, we have completed numerous projects across residential, commercial, and public sectors,
                each reflecting our commitment to innovative design, sustainability, and client satisfaction.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our journey has been marked by continuous learning, adaptation, and growth, enabling us to stay at the
                forefront of architectural trends and technologies while maintaining our core values.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="https://i.postimg.cc/9XZLTNpd/ceo.jpg?height=800&width=800" alt="Our journey" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-muted-foreground">
                To be recognized globally as a leading architectural firm that creates innovative, sustainable, and
                human-centered designs that positively impact communities and the environment.
              </p>
            </div>
            <div className="rounded-lg bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-muted-foreground">
                To deliver exceptional architectural solutions that balance aesthetics, functionality, and
                sustainability while exceeding our clients' expectations through collaborative design processes and
                attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our diverse team of architects, designers, and professionals brings together a wealth of experience and
              creativity to every project.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Ram Shrestha",
                role: "Chief Architect & Founder",
                image: "https://i.postimg.cc/3xG8J0c2/ram.jpg?height=400&width=400",
              },
              {
                name: "Milan Bangale",
                role: "Senior Civil Enginner",
                image: "https://i.postimg.cc/MHXxknBM/milan.jpg?height=400&width=400",
              },
              {
                name: "Shankar Prajapati",
                role: "Civil Engineer",
                image: "https://i.postimg.cc/B6mswTjf/sankar.jpg?height=400&width=400",
              },
              {
                name: "Dilip Kumar Gasi",
                role: "Structural Engineer",
                image: "https://i.postimg.cc/jdpT9dS2/dilip.jpg?height=400&width=400",
              },
              {
                name: "Hare Ram Shrestha",
                role: "Project Manager",
                image: "https://i.postimg.cc/nr5xnnKd/hare.jpg?height=400&width=400",
              },
              {
                name: "Jagadesh Shrestha",
                role: "Sociologist",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Binod Shrestha Shrestha",
                role: "Sustainability Consultant",
                image: "https://i.postimg.cc/bw1PjcZT/binod.jpg?height=400&width=400",
              },
              {
                name: "Puspa Ram Shrestha",
                role: "Architect",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              These principles guide our approach to every project and interaction.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of design to create unique and forward-thinking solutions.",
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to environmentally responsible design practices that minimize ecological impact.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership with our clients to achieve the best results.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in every aspect of our work, from design to execution.",
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices.",
              },
              {
                title: "Client-Centric",
                description:
                  "We prioritize our clients' needs and visions, ensuring their satisfaction at every stage.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
                  Want to Work With Us?
                </h2>
                <p className="mt-4 text-primary-foreground/90">
                  We're always looking for talented individuals to join our team. Check out our current openings or send
                  us your portfolio.
                </p>
              </div>
              <div className="flex flex-col space-y-4 md:items-end">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

