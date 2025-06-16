"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion"

interface HorizontalScrollTextProps {
  text: string
  direction?: "left" | "right"
  className?: string
}

export function HorizontalScrollText({ text, direction = "left", className = "" }: HorizontalScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create spring animation for smoother movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const springProgress = useSpring(scrollYProgress, springConfig)

  // Get scroll velocity
  const scrollVelocity = useVelocity(scrollYProgress)

  // Create transform value based on scroll progress and velocity
  const x = useTransform(
    springProgress,
    [0, 1],
    direction === "left" ? ["-50%", "0%"] : ["0%", "-50%"],
    {
      // Add velocity-based easing
      ease: (t) => {
        const velocity = Math.abs(scrollVelocity.get())
        return t + (velocity * 0.1) // Adjust multiplier to control velocity effect
      },
    }
  )

  return (
    <div ref={containerRef} className={`relative overflow-hidden py-12 ${className}`}>
      <motion.div 
        className="whitespace-nowrap text-[4rem] md:text-[8rem] font-bold text-black/5 flex"
        style={{ x }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Repeat the text to ensure it fills the screen */}
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </motion.div>
    </div>
  )
}
