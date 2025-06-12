"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  // Mouse parallax effect
  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Create transform values based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Spring animations for smoother movement
  const springConfig = { stiffness: 100, damping: 30 }
  const xMotion = useMotionValue(0)
  const yMotion = useMotionValue(0)

  useEffect(() => {
    if (isMounted && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      xMotion.set((mousePosition.x - centerX) / 20)
      yMotion.set((mousePosition.y - centerY) / 20)
    }
  }, [mousePosition, isMounted, xMotion, yMotion])

  const xSpring = useSpring(xMotion, springConfig)
  const ySpring = useSpring(yMotion, springConfig)

  // Text reveal animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={containerRef} className="min-h-[100vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gray-100 opacity-20 blur-3xl" />

        {/* Animated grid background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            x: xSpring,
            y: ySpring,
          }}
        />
      </div>

      <div className="px-4 md:px-8 relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          style={{ opacity, scale, y }}
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="mb-2">
            <div className="inline-block rounded-full bg-black text-white px-4 py-1.5 text-sm mb-8">
              Web Development & SaaS Experts
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-center"
          >
            Crafting Digital{" "}
            <span className="relative inline-block">
              Experiences
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-2 bg-black"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Wewise Labs transforms ideas into exceptional SaaS applications and web experiences that drive business
            growth and user engagement.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-base">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-black hover:bg-gray-100 px-8 py-6 text-base"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
