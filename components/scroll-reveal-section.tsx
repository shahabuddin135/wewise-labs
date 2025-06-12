"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollRevealSectionProps {
  children: ReactNode
  from?: "left" | "right" | "bottom"
}

export function ScrollRevealSection({ children, from = "bottom" }: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Define starting positions based on direction
  const startX = from === "left" ? -100 : from === "right" ? 100 : 0
  const startY = from === "bottom" ? 100 : 0

  // Create transform values based on scroll progress
  const x = useTransform(scrollYProgress, [0, 0.5], [startX, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [startY, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ x, y, opacity }}>{children}</motion.div>
    </div>
  )
}
