"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Application",
    description: "A full-featured portfolio website, a state of art layout. Innovative and unique UI, designed by our senior developers",
    imageUrl: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749943/techverse-w_ezypv8.png" ,
    tags: ["Next.js", "Typescript", "Tailwind"],
    projectLink: "https://www.techverse51.com"
  },
  {
    title: "Coloriqo",
    category: "SaaS Application",
    description: "AI powered SaaS Applocation that make easy to extract colors and generate pallettes.",
    imageUrl: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749476/coloriqo-w_bl1lwx.png",
    tags: ["Next.js", "Typescript", "Tailwind", "PostgreSQL", "API Integration" ],
    projectLink: "https://coloriqo-kohl.vercel.app"
  },
  {
    title: "Certificate Builder",
    category: "SaaS Application",
    description: "A fully customizable SaaS application. Generate unlimited certificates on a single click and make the task hassle free.",
    image: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749878931/certificate-builder-w_md6jgk.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
    link: ""
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
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Our Projects</h2>
          <p className="font-body font-semibold text-lg text-gray-600 max-w-2xl">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 items-center"
            >
              <div className="order-2 md:order-1">
                <span className="font-subheading text-lg sm:text-xl text-gray-500 mb-2 block">{projects[activeIndex].category}</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{projects[activeIndex].title}</h2>
                <p className="text-lg text-gray-600 text-wrap mb-6">{projects[activeIndex].description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeIndex].tags.map((tag, index) => (
                    <span key={index} className="font-body font-semibold bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="font-subheading tracking-wider rounded-full bg-black text-white hover:bg-gray-800 px-6">
                  <Link href = {projects[activeIndex].projectLink || "https://www.techverse51.com"}>View Project</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={projects[activeIndex].imageUrl || "/placeholder.svg"}
                    alt={projects[activeIndex].title}
                    width={700}
                    height={600}
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
