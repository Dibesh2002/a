"use client"

import React from "react"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 }
      case "down":
        return { y: -40, x: 0 }
      case "left":
        return { x: 40, y: 0 }
      case "right":
        return { x: -40, y: 0 }
      case "none":
        return { x: 0, y: 0 }
      default:
        return { y: 40, x: 0 }
    }
  }

  const { x, y } = getDirectionValues()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredFadeIn({
  children,
  staggerDelay = 0.1,
  containerDelay = 0,
  className = "",
}: {
  children: ReactNode[]
  staggerDelay?: number
  containerDelay?: number
  className?: string
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: containerDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Import these at the top of the file
import { useScroll, useTransform, motion as m } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ParallaxSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const decorationY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: contentY }} className="relative z-10">
        {children}
      </motion.div>
      <motion.div style={{ y: decorationY }} className="absolute bottom-0 left-0 right-0 z-0 flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ChevronDown className="h-12 w-12 text-primary/30" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ScaleOnHover({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  )
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ")

  return (
    <div className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <m.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.05 * i,
            }}
          >
            {word}
          </m.span>
        </span>
      ))}
    </div>
  )
}

