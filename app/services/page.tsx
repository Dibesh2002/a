import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image src="https://images.pexels.com/photos/17158788/pexels-photo-17158788/free-photo-of-glassy-modern-facade-of-church.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our services" fill className="object-cover" priority />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
            Comprehensive architectural solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              At Shwetbhairab Architect and Association, we provide a wide range of architectural and design services to
              meet the diverse needs of our clients.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Architectural Design",
                description:
                  "From concept to completion, we create innovative designs that reflect your vision and requirements.",
                image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=400&width=600",
                features: [
                  "Conceptual design development",
                  "3D visualization and modeling",
                  "Construction documentation",
                  "Building code compliance",
                  "Sustainable design solutions",
                ],
              },
              {
                title: "Interior Design",
                description:
                  "Transform your spaces with our interior design services that blend functionality with aesthetics.",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=400&width=600",
                features: [
                  "Space planning and layout",
                  "Material and finish selection",
                  "Custom furniture design",
                  "Lighting design",
                  "Color scheme development",
                ],
              },
              {
                title: "Urban Planning",
                description: "Comprehensive urban planning solutions that create sustainable and livable communities.",
                image: "https://images.pexels.com/photos/29870940/pexels-photo-29870940/free-photo-of-aerial-view-of-kathmandu-cityscape-in-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=400&width=600",
                features: [
                  "Master planning",
                  "Land use analysis",
                  "Transportation planning",
                  "Public space design",
                  "Environmental impact assessment",
                ],
              },
              {
                title: "Landscape Design",
                description:
                  "Create harmonious outdoor spaces that complement your architecture and enhance the environment.",
                image: "https://images.pexels.com/photos/20434916/pexels-photo-20434916/free-photo-of-greenhouses-and-farm-fields-from-a-birds-eye-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=400&width=600",
                features: [
                  "Site analysis and planning",
                  "Planting design",
                  "Hardscape design",
                  "Water feature integration",
                  "Sustainable landscape solutions",
                ],
              },
              {
                title: "Construction Management",
                description:
                  "Expert oversight of your construction project to ensure quality, timeliness, and budget adherence.",
                image: "https://i.postimg.cc/dVmk28Xj/9.jpg?height=400&width=600",
                features: [
                  "Project scheduling and coordination",
                  "Budget management",
                  "Quality control",
                  "Contractor selection assistance",
                  "Construction site supervision",
                ],
              },
              {
                title: "Sustainable Design",
                description: "Environmentally conscious design solutions that minimize impact and maximize efficiency.",
                image: "https://images.pexels.com/photos/31047259/pexels-photo-31047259/free-photo-of-cozy-bamboo-furniture-lounge-setup-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=400&width=600",
                features: [
                  "Energy-efficient building design",
                  "Green building certification",
                  "Renewable energy integration",
                  "Water conservation strategies",
                  "Sustainable material selection",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="rounded-lg border bg-card shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Inquire About This Service
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              We follow a structured approach to ensure the successful delivery of every project.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "We begin with a thorough consultation to understand your vision, requirements, and constraints.",
                },
                {
                  step: "02",
                  title: "Concept Design",
                  description: "Our team develops initial design concepts based on your input and our expertise.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "We refine the chosen concept into detailed designs and technical specifications.",
                },
                {
                  step: "04",
                  title: "Implementation",
                  description: "We oversee the implementation to ensure the design is executed according to plan.",
                },
              ].map((process, index) => (
                <div key={index} className="relative rounded-lg bg-card p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary/20">{process.step}</div>
                  <h3 className="mt-2 text-xl font-bold">{process.title}</h3>
                  <p className="mt-2 text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Pricing</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              We offer flexible pricing options to accommodate projects of various scales and complexities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Basic",
                description: "For small-scale residential projects",
                price: "Custom Quote",
                features: [
                  "Initial consultation",
                  "Concept design",
                  "Basic 3D visualization",
                  "Construction documentation",
                  "Limited revisions",
                ],
                cta: "Get Started",
              },
              {
                title: "Standard",
                description: "For medium-scale residential and commercial projects",
                price: "Custom Quote",
                features: [
                  "Comprehensive consultation",
                  "Detailed concept design",
                  "Advanced 3D visualization",
                  "Complete construction documentation",
                  "Multiple revisions",
                  "Basic construction oversight",
                ],
                cta: "Get Started",
                highlighted: true,
              },
              {
                title: "Premium",
                description: "For large-scale and complex projects",
                price: "Custom Quote",
                features: [
                  "Extensive consultation",
                  "Comprehensive design development",
                  "Photorealistic 3D visualization",
                  "Detailed construction documentation",
                  "Unlimited revisions",
                  "Full construction management",
                  "Post-completion support",
                ],
                cta: "Get Started",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border ${plan.highlighted ? "border-primary" : ""} bg-card p-6 shadow-sm ${plan.highlighted ? "ring-2 ring-primary" : ""}`}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <div className="mt-4 text-3xl font-bold">{plan.price}</div>
                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 w-full">
                    <Button
                      className={`w-full ${plan.highlighted ? "" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            * All pricing is customized based on project requirements. Contact us for a detailed quote.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How long does the architectural design process take?",
                answer:
                  "The timeline varies depending on the project's complexity. Small residential projects may take 2-3 months for design, while larger commercial projects can take 6-12 months or more.",
              },
              {
                question: "Do you handle all necessary permits and approvals?",
                answer:
                  "Yes, we assist with obtaining all required permits and approvals from local authorities as part of our comprehensive service.",
              },
              {
                question: "Can you work within my budget constraints?",
                answer:
                  "Absolutely. We tailor our designs to meet your budget while maximizing value and maintaining design integrity.",
              },
              {
                question: "Do you offer sustainable design options?",
                answer:
                  "Yes, sustainability is integral to our design philosophy. We offer various green building solutions and can pursue certifications like LEED if desired.",
              },
              {
                question: "How involved will I be in the design process?",
                answer:
                  "We believe in collaborative design. You'll be involved throughout the process, from initial concept to final implementation, with regular consultations and updates.",
              },
              {
                question: "Do you provide 3D visualizations of the design?",
                answer:
                  "Yes, we create detailed 3D visualizations to help you better understand and experience the design before construction begins.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
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
                <p className="text-sm text-primary-foreground/80">Or call us at +977-01-6631451, 9841796798</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

