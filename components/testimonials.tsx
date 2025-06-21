"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Wewise Labs transformed our business with a custom SaaS solution that streamlined our operations and improved customer satisfaction.",
    author: "Emily Chen",
    position: "CEO, TechStart Inc.",
    // image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Wewise Labs delivered our project on time and exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
    author: "David Wilson",
    position: "CTO, GrowthMetrics",
    // image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Wewise Labs was a game-changer for our startup. They understood our vision and brought it to life with a beautiful, functional web application.",
    author: "Sarah Johnson",
    position: "Founder, EcoSolutions",
    // image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  // Handle autoplay
  useEffect(() => {
    if (autoplay && isInView) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, isInView])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <section
      id="testimonials"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-gray-100">
            <Quote className="w-20 h-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-sm text-center"
            >
              <p className="text-xl md:text-2xl mb-8 text-gray-700 italic">"{testimonials[activeIndex].quote}"</p>

              <div className="flex flex-col items-center">
                {/* <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-500">{testimonials[activeIndex].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-black w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
