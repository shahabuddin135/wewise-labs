"use client"
import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code, Shield, BookOpen, type LucideIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

type ProductImageUrl = { light: string; dark: string }

type Product = {
  title: string
  category: string
  imageUrl: ProductImageUrl
  projectLink: string
  status?: string
  Icon: LucideIcon
}

const products: Product[] = [
  {
    title: "Coloriqo",
    category: "AI SaaS Application",

    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453326/coloriqo-1.1_eqscnb.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453326/coloriqo-1.1_eqscnb.png",
    },
    projectLink: "https://coloriqo.wewiselabs.com/",
    status: "Live",
    Icon: Palette,
  },
  {
    title: "Nodis",
    category: "Desktop Application",
    imageUrl:{
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453358/nodis-1_powvgj.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453358/nodis-1_powvgj.png",
      },
    projectLink: "https://nodis.wewiselabs.com/",
    status: "Live",
    Icon: Shield,
  },
  {
    title: "Voyagers Academy",
    category: "LMS",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453366/voyagers-1_mjpiwq.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453366/voyagers-1_mjpiwq.png",
    },
    projectLink: "https://voyagers-academy.vercel.app/",
    status: "Live",
    Icon: BookOpen,
  },
  {
    title: "API Documentation Portal",
    category: "Developer Tools",
    imageUrl: {
      light: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453317/API-endpoint-1_svvcmf.png",
      dark: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1777453317/API-endpoint-1_svvcmf.png",
    },
    projectLink: "https://e-commerce-api-henna-alpha.vercel.app/",
    Icon: Code,
  },
]

export function WeWiseProducts() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
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
        { x: 50 + 20 * Math.cos(frame * 0.012), y: 50 + 20 * Math.sin(frame * 0.012) },
        { x: 50 + 28 * Math.cos(frame * 0.009 + 2), y: 50 + 28 * Math.sin(frame * 0.009 + 2) },
        { x: 50 + 24 * Math.cos(frame * 0.011 - 2), y: 50 + 24 * Math.sin(frame * 0.011 - 2) },
      ])
      frame++
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    products.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i])
      }, 180 * i)
      timers.push(timer)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % products.length)
    }, 3000)
  }

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    startAutoScroll()
  }

  return (
    <section id="wewise-products" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Multi-blob Spotlight Effect */}
      <div
        aria-hidden
        style={{
          padding: "5rem",
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
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div style={{
            position: "absolute",
            left: `calc(${blobs[0].x}% - 300px)`,
            top: `calc(${blobs[0].y}% - 300px)`,
            width: 600, height: 600, borderRadius: "50%",
            background: theme === "dark"
              ? "radial-gradient(circle at 300px 300px, rgba(80,80,255,0.25), transparent 70%)"
              : "radial-gradient(circle at 300px 300px, rgba(0,120,255,0.18), transparent 70%)",
            filter: "blur(48px)", transition: "background 0.3s", zIndex: 2, mixBlendMode: "lighten",
          }} />
          <div style={{
            position: "absolute",
            left: `calc(${blobs[1].x}% - 270px)`,
            top: `calc(${blobs[1].y}% - 270px)`,
            width: 540, height: 540, borderRadius: "50%",
            background: theme === "dark"
              ? "radial-gradient(circle at 270px 270px, rgba(255,80,200,0.18), transparent 70%)"
              : "radial-gradient(circle at 270px 270px, rgba(255,0,120,0.13), transparent 70%)",
            filter: "blur(54px)", transition: "background 0.3s", zIndex: 2, mixBlendMode: "lighten",
          }} />
          <div style={{
            position: "absolute",
            left: `calc(${blobs[2].x}% - 240px)`,
            top: `calc(${blobs[2].y}% - 240px)`,
            width: 480, height: 480, borderRadius: "50%",
            background: theme === "dark"
              ? "radial-gradient(circle at 240px 240px, rgba(80,255,180,0.13), transparent 70%)"
              : "radial-gradient(circle at 240px 240px, rgba(0,255,180,0.10), transparent 70%)",
            filter: "blur(48px)", transition: "background 0.3s", zIndex: 2, mixBlendMode: "lighten",
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] mb-10 mt-4 text-center font-heading font-bold dark:text-white">
            Our Innovation Lab
          </h2>
          <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-tight text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">
            Developer tools and AI-powered SaaS applications built by wewise Labs
          </p>
        </motion.div>

        {/* Desktop: Interactive Accordion */}
        <div
          className="hidden md:flex max-w-4xl mx-auto h-[480px] overflow-hidden relative z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {products.map((product, index) => {
            const isActive = activeIndex === index
            const isAnimated = animatedOptions.includes(index)
            const imageUrl = theme === "dark" ? product.imageUrl.dark : product.imageUrl.light

            return (
              <div
                key={product.title}
                onClick={() => handleCardClick(index)}
                style={{
                  flex: isActive ? "7 1 0%" : "1 1 0%",
                  transition: isAnimated
                    ? "flex 0.7s ease-in-out, box-shadow 0.4s ease-in-out, border-color 0.4s ease-in-out"
                    : "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? "none" : "translateX(-60px)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  minWidth: "60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isActive ? (theme === "dark" ? "#ffffff" : "#f0f0f0") : (theme === "dark" ? "#292929" : "#e5e7eb"),
                  boxShadow: isActive ? "0 20px 60px rgba(0,0,0,0.50)" : "0 10px 30px rgba(0,0,0,0.30)",
                  backgroundColor: "#18181b",
                  willChange: "flex, box-shadow",
                }}
              >
                {/* Background image — blurred when inactive */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: isActive ? "none" : "blur(5px)",
                  transform: isActive ? "scale(1)" : "scale(1.08)",
                  transition: "filter 0.5s ease-in-out, transform 0.5s ease-in-out",
                }} />
                {/* Darkening overlay for inactive */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: isActive ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.35)",
                  transition: "background-color 0.5s ease-in-out",
                }} />


                {/* Status badge */}
                {product.status && (
                  <div style={{
                    position: "absolute", top: "1rem", right: "1rem", zIndex: 3,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    pointerEvents: "none",
                  }}>
                    <span style={{
                      backgroundColor: "#22c55e", color: "white",
                      fontSize: "0.75rem", fontWeight: 700,
                      padding: "0.25rem 0.75rem", borderRadius: "9999px",
                    }}>
                      {product.status}
                    </span>
                  </div>
                )}

                {/* Bottom label row: icon + title/category + CTA */}
                <div style={{
                  position: "absolute",
                  bottom: "1.25rem", left: 0, right: 0,
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0 1rem",
                  zIndex: 3,
                }}>
                  {/* Icon bubble */}
                  <div style={{
                    minWidth: "44px", maxWidth: "44px", height: "44px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgba(32,32,32,0.85)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid #444",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                  }}>
                    <product.Icon size={22} className="text-white" />
                  </div>

                  {/* Title + Category */}
                  <div style={{ color: "white", flex: 1, overflow: "hidden" }}>
                    <div style={{
                      fontWeight: "bold", fontSize: "1.125rem",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(25px)",
                      transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {product.title}
                    </div>
                    <div style={{
                      fontSize: "0.8rem", color: "#fcfcfc",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(25px)",
                      transition: "opacity 0.7s ease-in-out 0.05s, transform 0.7s ease-in-out 0.05s",
                      whiteSpace: "nowrap",
                    }}>
                      {product.category}
                    </div>
                  </div>

                  {/* Try It Now button */}
                  <div style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(20px)",
                    transition: "opacity 0.5s ease-in-out 0.2s, transform 0.5s ease-in-out 0.2s",
                    flexShrink: 0,
                    pointerEvents: isActive ? "all" : "none",
                  }}>
                    <Link
                      href={product.projectLink}
                      target="_blank"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 bg-slate-950 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 hover:text-slate-950 transition-colors whitespace-nowrap"
                    >
                      Try It Now <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile: Cards */}
        <div className="flex md:hidden flex-col gap-6 relative z-10">
          {products.map((product, index) => {
            const imageUrl = theme === "dark" ? product.imageUrl.dark : product.imageUrl.light
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-lg"
              >
                <div className="aspect-[16/9] overflow-hidden relative w-full">
                  {product.status && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.status}
                      </span>
                    </div>
                  )}
                  <Image
                    src={imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-700 flex-shrink-0">
                      <product.Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <span className="font-subheading text-xs text-gray-500 dark:text-gray-400 block">
                        {product.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold dark:text-white leading-tight">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    href={product.projectLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Try It Now <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
