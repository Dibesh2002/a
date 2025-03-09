"use client"

import type React from "react"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

const metadata: Metadata = {
  title: "Shwet Bhairab Architects & Associates",
  description: "Professional architectural services for residential and commercial projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'