// "use client"

// import { useRef, type ReactNode } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// interface ParallaxElementProps {
//   children: ReactNode
//   speed?: number
//   className?: string
// }

// export function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxElementProps) {
//   const ref = useRef<HTMLDivElement>(null)

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   })

//   // Create transform value based on scroll progress
//   const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

//   return (
//     <div ref={ref} className={`relative ${className}`}>
//       <motion.div style={{ y }}>{children}</motion.div>
//     </div>
//   )
// }
