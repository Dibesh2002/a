"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Shwet Bhairab</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Creating innovative architectural designs that transform spaces and enhance lives.
            </p>
            <div className="mt-6 flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              {[
                { label: "Architectural Design", href: "/services" },
                { label: "Interior Design", href: "/services" },
                { label: "Urban Planning", href: "/services" },
                { label: "Landscape Design", href: "/services" },
                { label: "Heritage Conservation", href: "/services" },
                { label: "Rural Development", href: "/services" },
              ].map((service, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={service.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {service.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Madhyapur Thimi-15, Sundar Nagar, Bhaktapur, Nepal
                </span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+977-01-6631451, 9841796798</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">shwetbhairab@gmail.com</span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shwet Bhairab Architects & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

