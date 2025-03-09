"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FadeIn } from "@/components/animations"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      })
    } catch (err) {
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/60 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with our team to discuss your architectural needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                We'd love to hear from you. Fill out the form, and our team will get back to you as soon as possible.
              </p>
              <div className="mt-8 space-y-6">
                <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="mt-1 text-muted-foreground">
                      Madhyapur Thimi-15, Sundar Nagar
                      <br />
                      Bhaktapur, Nepal
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      shwetbhairab@gmail.com
                      <br />
                      ramstha2010@gmail.com
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="mt-1 text-muted-foreground">
                      +977-01-6631451
                      <br />
                      +977-9841796798
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold">Office Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Sunday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    className="rounded-lg border bg-card p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p className="mt-4 text-center text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <div className="mt-8">
                        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="rounded-lg border bg-card p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold">Contact Form</h3>
                    <div className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+977 9841796798"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium">
                            Service Interested In
                          </label>
                          <Select value={formData.service} onValueChange={handleSelectChange}>
                            <SelectTrigger
                              id="service"
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="architectural-design">Architectural Design</SelectItem>
                              <SelectItem value="interior-design">Interior Design</SelectItem>
                              <SelectItem value="urban-planning">Urban Planning</SelectItem>
                              <SelectItem value="landscape-design">Landscape Design</SelectItem>
                              <SelectItem value="heritage-conservation">Heritage Conservation</SelectItem>
                              <SelectItem value="rural-development">Rural Development</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Inquiry"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Please describe your project or inquiry..."
                          rows={5}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      {error && <p className="text-red-500 mt-4">{error}</p>}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" className="w-full transition-all duration-300" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <FadeIn direction="up" className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Us</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Visit our office to discuss your project in person.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="mt-12">
            <motion.div
              className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* <Image
                src="https://maps.googleapis.//api/staticmap?center=Madhyapur+Thimi,+Bhaktapur,+Nepal&zoom=14&size=1200x600&maptype=roadmap&markers=color:red%7CMadhyapur+Thimi,+Bhaktapur,+Nepal&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="Office location map"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
              /> */}
               <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4782602454234!2d85.37543397611967!3d27.67160952706568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b625154fc93%3A0x634bece0349b5079!2sShwet%20Bhairab%20Architects%20and%20Associates!5e0!3m2!1sen!2snp!4v1741288200115!5m2!1sen!2snp"
        width="1200"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="h-full w-full object-cover"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

