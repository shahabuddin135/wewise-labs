"use client"

import Hero from "@/components/hero"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/Layout/footer"
import WhyChooseUs  from "@/components/why-choose-us"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import AnimatedHorizontalScroll from "@/components/animated-horizontal-scroll"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { useSmoothScroll } from "@/lib/smooth-scroll"
import { useTheme } from "next-themes"
import ServicesComponent from "@/components/honeycomb"
import HorizontalScrollFramer from "@/components/HorizontalScrollFramer"
import { useMediaQuery } from "react-responsive"

export default function Home() {
  const { theme } = useTheme()
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 })
  useSmoothScroll()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    })

    // Store smoother globally for access in other components
    ;(window as unknown as { ScrollSmoother: typeof ScrollSmoother }).ScrollSmoother = ScrollSmoother

    // Handle hash navigation after smoother is created
    const hash = window.location.hash
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1))
      if (targetElement) {
        setTimeout(() => {
          smoother.scrollTo(targetElement, true, "top top")
        }, 500)
      }
    }

    return () => {
      smoother.kill()
      delete (window as unknown as { ScrollSmoother?: typeof ScrollSmoother }).ScrollSmoother
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [theme])

  return (

    <div id="smooth-wrapper">
      <main id="smooth-content" className="min-h-screen flex flex-col">

        <Hero />

        <VelocityScroll defaultVelocity={1} numRows={2} className="text-gray-300/90 dark:bg-gray-950 py-5 mt-10 md:mt-28">INNOVATIVE SOLUTIONS</VelocityScroll>


        <ServicesComponent />

        <WhyChooseUs />

        {isMobileOrTablet ? (
          <HorizontalScrollFramer/>
        ) : (
          <AnimatedHorizontalScroll />
        )}

        <Process />

        <Technologies />

        <Projects />

        <Testimonials />

        <Contact />

        <Footer />
      </main>
    </div>
  )
}
