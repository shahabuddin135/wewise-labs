"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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

  // Create a transform value based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"])

  return (
    <div ref={containerRef} className={`relative overflow-hidden py-12 ${className}`}>
      <motion.div className="whitespace-nowrap text-[8rem] md:text-[12rem] font-bold text-black/5 flex" style={{ x }}>
        {/* Repeat the text to ensure it fills the screen */}
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </motion.div>
    </div>
  )
}
