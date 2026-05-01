"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectItem {
  title: string
  category: string
  description: string
  imageUrl: { light: string; dark: string } | string
  tags: string[]
  projectLink: string
}

const projects: ProjectItem[] = [
  {
    title: "TechVerse51",
    category: "Portfolio Website",
    description: "A full-featured portfolio website with a state of art layout. Innovative and unique UI, designed by our senior developers.",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625376/techverse-1_qoafps.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625376/techverse-1_qoafps.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind"],
    projectLink: "https://www.techverse51.com"
  },
  {
    title: "Tanoli Movers",
    category: "Business Website",
    description: "A service-based logistics and moving company website designed to highlight reliability, service offerings, and easy customer contact with a clean, conversion-focused layout.",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625119/tanoli_qq4y0s.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625119/tanoli_qq4y0s.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind", "Business"],
    projectLink: "https://www.tanolimovers.com/"
  },
  {
    title: "Imran & Masood Associates",
    category: "Corporate Website",
    description: "A professional taxation and financial consultancy website designed for trust, clarity, and client engagement. Features structured service sections and seamless contact integration.",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625744/imassociates-2_chxcmy.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777625744/imassociates-2_chxcmy.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind", "SEO"],
    projectLink: "https://imassociates.vercel.app/"
  },
  {
    title: "Abeera Studio",
    category: "E-commerce Website",
    description: "A modern textile and fabrics e-commerce platform showcasing vibrant collections with smooth navigation, product categorization, and a visually rich shopping experience.",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777624516/abeera-studio-2_tluscv.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777624516/abeera-studio-2_tluscv.png"
    },
    tags: ["Next.js", "Typescript", "Tailwind", "E-commerce"],
    projectLink: "https://rangnoor-fabrics.vercel.app/"
  }
]

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { theme } = useTheme()

  const imageSrc =
    typeof project.imageUrl === "string"
      ? project.imageUrl
      : theme === "dark"
      ? project.imageUrl.dark
      : project.imageUrl.light

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-3xl overflow-hidden bg-white/60 dark:bg-white/[0.06] backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] bg-black/30 backdrop-blur-sm text-white border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7 gap-3">
        <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full text-[11px] bg-secondary text-foreground/70 border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-1.5 w-fit text-sm font-semibold text-foreground group/link"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { theme } = useTheme()
  const [blobs, setBlobs] = useState([
    { x: 50, y: 50 },
    { x: 60, y: 40 },
    { x: 40, y: 60 },
  ])

  useEffect(() => {
    let frame = 0
    let raf: number
    const animate = () => {
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

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated blob spotlights */}
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(90vw, 1100px)",
          height: "min(50vw, 400px)",
          zIndex: 1,
          overflow: "visible",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
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
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
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
              zIndex: 2,
              mixBlendMode: "lighten",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] mb-6 mt-4 text-center font-heading font-bold dark:text-white">
            Client Success Stories
          </h2>
          <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-tight text-gray-600 max-w-2xl mx-auto font-body font-semibold text-center dark:text-white">
            Web applications we&apos;ve crafted for our clients. Every project tells a success story.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
