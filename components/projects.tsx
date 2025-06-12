"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-featured e-commerce platform with inventory management, payment processing, and analytics.",
    image: "",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Healthcare Management System",
    category: "SaaS Application",
    description: "A comprehensive healthcare management system for clinics and hospitals.",
    image: "",
    tags: ["React", "Express", "PostgreSQL", "Docker"],
  },
  {
    title: "Real Estate Marketplace",
    category: "Web Application",
    description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
    image: "",
    tags: ["Next.js", "TypeScript", "GraphQL", "AWS"],
  },
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl">
            Take a look at some of our recent work that showcases our expertise and capabilities.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <span className="text-sm text-gray-500 mb-2 block">{projects[activeIndex].category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{projects[activeIndex].title}</h3>
                <p className="text-gray-600 mb-6">{projects[activeIndex].description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeIndex].tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={projects[activeIndex].image || "/placeholder.svg"}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-black" : "bg-gray-300"
                } transition-colors`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous project"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 flex items-center justify-center">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
