"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export interface SparkProjectItem {
  id: string | number
  title: string
  category: string
  description: string
  imageUrl: { light: string; dark: string } | string
  tags: string[]
  projectLink: string
}

export interface SparksCarouselProps {
  items: SparkProjectItem[]
  className?: string
}

export const SparksCarousel = React.forwardRef<HTMLDivElement, SparksCarouselProps>(
  ({ items, className }, ref) => {
    const { theme } = useTheme()
    const carouselRef = React.useRef<HTMLDivElement>(null)
    const [isAtStart, setIsAtStart] = React.useState(true)
    const [isAtEnd, setIsAtEnd] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(0)

    const scroll = (direction: "left" | "right") => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth } = carouselRef.current
        const scrollAmount = clientWidth * 0.85
        const newScrollLeft =
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount
        carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
      }
    }

    React.useEffect(() => {
      const checkScrollPosition = () => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
          setIsAtStart(scrollLeft < 10)
          setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10)
          const idx = Math.round(scrollLeft / (scrollWidth / items.length))
          setActiveIndex(Math.max(0, Math.min(idx, items.length - 1)))
        }
      }

      const currentRef = carouselRef.current
      if (currentRef) {
        checkScrollPosition()
        currentRef.addEventListener("scroll", checkScrollPosition)
      }
      window.addEventListener("resize", checkScrollPosition)

      return () => {
        if (currentRef) currentRef.removeEventListener("scroll", checkScrollPosition)
        window.removeEventListener("resize", checkScrollPosition)
      }
    }, [items])

    const goTo = (idx: number) => {
      if (!carouselRef.current) return
      const { scrollWidth } = carouselRef.current
      const perItem = scrollWidth / items.length
      carouselRef.current.scrollTo({ left: idx * perItem, behavior: "smooth" })
    }

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div className="relative">
          {/* Scrollable row */}
          <div
            ref={carouselRef}
            style={{ scrollbarWidth: "none" }}
            className="flex w-full gap-3.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, index) => {
              const imageSrc =
                typeof item.imageUrl === "string"
                  ? item.imageUrl
                  : theme === "dark"
                  ? item.imageUrl.dark
                  : item.imageUrl.light

              return (
                <motion.div
                  key={item.id}
                  className="w-[78vw] max-w-[300px] flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group h-full overflow-hidden rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        sizes="80vw"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] bg-black/30 backdrop-blur-sm text-white border border-white/20">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="font-heading font-bold text-base text-foreground dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground dark:text-white/55 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {item.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full text-[10px] bg-secondary dark:bg-white/10 text-foreground/65 dark:text-white/65 border border-border/40 dark:border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-1 w-fit text-xs font-semibold text-foreground dark:text-white group/link"
                      >
                        View Project
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Left chevron */}
          {!isAtStart && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-[88px] -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-white/60 dark:border-white/10 text-foreground dark:text-white shadow-md transition hover:bg-white dark:hover:bg-neutral-800"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          {/* Right chevron */}
          {!isAtEnd && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-[88px] -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-white/60 dark:border-white/10 text-foreground dark:text-white shadow-md transition hover:bg-white dark:hover:bg-neutral-800"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Pill dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {items.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goTo(idx)}
              animate={{
                width: idx === activeIndex ? 22 : 8,
                opacity: idx === activeIndex ? 1 : 0.28,
              }}
              transition={{ duration: 0.25 }}
              style={{ height: 8, borderRadius: 9999, backgroundColor: "currentColor", flexShrink: 0 }}
              className="text-black dark:text-white"
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-[11px] text-neutral-400 dark:text-neutral-500 mt-2 tracking-wide">
          swipe to explore
        </p>
      </div>
    )
  }
)

SparksCarousel.displayName = "SparksCarousel"
