"use client"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useTheme} from "next-themes"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Application",
    description: "A full-featured portfolio website, a state of art layout. Innovative and unique UI, designed by our senior developers",
    imageUrl: {

      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749943/techverse-w_ezypv8.png" ,
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749478/techverse-d_klwc6t.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind"],
    projectLink: "https://www.techverse51.com"
  },
  {
    title: "Coloriqo",
    category: "SaaS Application",
    description: "AI powered SaaS Applocation that make easy to extract colors and generate pallettes.",
    imageUrl: {

      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749476/coloriqo-w_bl1lwx.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749302/coloriqo-d_uouand.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind", "PostgreSQL", "API Integration" ],
    projectLink: "https://coloriqo-kohl.vercel.app"
  },
  {
    title: "Certificate Builder",
    category: "SaaS Application",
    description: "A fully customizable SaaS application. Generate unlimited certificates on a single click and make the task hassle free.",
    imageUrl: {

      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749878931/certificate-builder-w_md6jgk.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749878931/certificate-builder-w_md6jgk.png"
    },
    tags: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
    projectLink: "https://certificate-builder-ten.vercel.app/"

  },
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [spotPos, setSpotPos] = useState({ x: 50, y: 50 })
  const [blobs, setBlobs] = useState([
    { x: 50, y: 50 },
    { x: 60, y: 40 },
    { x: 40, y: 60 },
  ])
  const ref = useRef<HTMLDivElement>(null)
  const {theme} = useTheme()

  // Animate spotlight position in a loop
  useEffect(() => {
    let frame = 0
    let raf: number
    const animate = () => {
      // Circular path animation
      const radius = 30
      const speed = 0.008 // smaller is slower
      const x = 50 + radius * Math.cos(frame * speed)
      const y = 50 + radius * Math.sin(frame * speed)
      setSpotPos({ x, y })
      frame++
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  // Animate three blobs in a loop
  useEffect(() => {
    let frame = 0
    let raf: number
    const animate = () => {
      // Each blob moves in a different circle
      setBlobs([
        {
          x: 50 + 20 * Math.cos(frame * 0.012),
          y: 50 + 20 * Math.sin(frame * 0.012),
        },
        {
          x: 50 + 28 * Math.cos(frame * 0.009 + 2),
          y: 50 + 28 * Math.sin(frame * 0.009 + 2),
        },
        {
          x: 50 + 24 * Math.cos(frame * 0.011 - 2),
          y: 50 + 24 * Math.sin(frame * 0.011 - 2),
        },
      ])
      frame++
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Multi-blob Spotlight Effect - contained in internal div to prevent touching main section edges */}
      <div
        aria-hidden
        style={{
          padding:"5rem",
          pointerEvents: "none",
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(90vw, 1100px)",
          height: "min(50vw, 400px)",
          zIndex: 1,
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{position: "relative", width: "100%", height: "100%"}}>
          {/* Blob 1 */}
          <div
            style={{
              position: "absolute",
              left: `calc(${blobs[0].x}% - 300px)`,
              top: `calc(${blobs[0].y}% - 300px)`,
              width: 600, 
              height: 600, 
              borderRadius: "50%",
              background:
                theme === "dark"
                  ? "radial-gradient(circle at 300px 300px, rgba(80,80,255,0.25), transparent 70%)"
                  : "radial-gradient(circle at 300px 300px, rgba(0,120,255,0.18), transparent 70%)",
              filter: "blur(48px)",
              transition: "background 0.3s",
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
          {/* Blob 2 */}
          <div
            style={{
              position: "absolute",
              left: `calc(${blobs[1].x}% - 270px)`,
              top: `calc(${blobs[1].y}% - 270px)`,
              width: 540, 
              height: 540, 
              borderRadius: "50%",
              background:
                theme === "dark"
                  ? "radial-gradient(circle at 270px 270px, rgba(255,80,200,0.18), transparent 70%)"
                  : "radial-gradient(circle at 270px 270px, rgba(255,0,120,0.13), transparent 70%)",
              filter: "blur(54px)",
              transition: "background 0.3s",
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
          {/* Blob 3 */}
          <div
            style={{
              position: "absolute",
              left: `calc(${blobs[2].x}% - 240px)`,
              top: `calc(${blobs[2].y}% - 240px)`,
              width: 480, 
              height: 480, 
              borderRadius: "50%",
              background:
                theme === "dark"
                  ? "radial-gradient(circle at 240px 240px, rgba(80,255,180,0.13), transparent 70%)"
                  : "radial-gradient(circle at 240px 240px, rgba(0,255,180,0.10), transparent 70%)",
              filter: "blur(48px)",
              transition: "background 0.3s",
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] mb-10 mt-4 text-center font-heading font-bold dark:text-white">Chapters We&apos;ve Written</h2>
          <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-tight text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">
            Every project here tells a story and we&apos;re just getting started.
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
              <div className="order-2 md:order-1 px-5">
                <span className="font-subheading text-lg sm:text-xl md:text-3xl text-gray-500 dark:text-gray-100 mb-4 block">{projects[activeIndex].category}</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-6 dark:text-white">{projects[activeIndex].title}</h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-100 text-wrap mb-8">{projects[activeIndex].description}</p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {projects[activeIndex].tags.map((tag, index) => (
                    <span key={index} className="font-body font-semibold bg-gray-100 px-3 py-1 rounded-full text-sm md:text-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="text-sm md:text-lg font-subheading tracking-wider border dark:border-white rounded-full bg-black text-white hover:bg-gray-800 px-6">
                  <Link href = {projects[activeIndex].projectLink} target="_blank">View Project</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                      src={typeof projects[activeIndex].imageUrl === "string"?
                      projects[activeIndex].imageUrl:
                      theme === "dark"
                        ? projects[activeIndex].imageUrl.dark
                        : projects[activeIndex].imageUrl.light}
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
                  index === activeIndex ? "bg-black dark:bg-gray-300" : "bg-gray-400 dark:bg-white/10"
                } transition-colors`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
