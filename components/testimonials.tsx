"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import BgGlowBouncingSVGs from "../components/ui/bg-glow"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"

interface Testimonial {
  _id: string;
  name: string;
  title?: string;
  company?: string;
  testimonial: string;
  image?: SanityImageSource;
  publishedAt?: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  // Fetch testimonials from Sanity
  useEffect(() => {
    client.fetch(
      `*[_type == "testimonial"]|order(publishedAt desc){
        _id,
        name,
        title,
        company,
        testimonial,
        image
      }`
    ).then((data) => {
      setTestimonials(data)
    })
  }, [])

  // Autoplay switching testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  const t = testimonials[activeIndex]

  return (
    <section
      id="testimonials"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* ✅ Shrunk SVG bounce area box */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="relative w-[90%] h-[80%]">
          <BgGlowBouncingSVGs className="w-full h-full blur-xl" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] mb-10 mt-4 font-heading font-bold dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-8 text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-gray-100">
            <Quote className="w-20 h-20 text-gray-300" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/50 dark:bg-black/50 border border-gray-50/10 rounded-xl p-8 md:p-12 shadow-sm text-center"
            >
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 italic">
                &quot;{t.testimonial}&quot;
              </p>
              <div className="flex flex-col items-center">
                {t.image && (
                  <Image
                    src={urlFor(t.image).width(80).height(80).url()}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200"
                  />
                )}
                <h4 className="font-bold text-lg dark:text-gray-300">{t.name}</h4>
                {(t.title || t.company) && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {[t.title, t.company].filter(Boolean).join(", ")}
                  </p>
                )}
                
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-black dark:bg-gray-200 w-8"
                    : "bg-gray-300 dark:bg-white/30"
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
