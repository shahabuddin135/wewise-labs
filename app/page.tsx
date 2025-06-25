"use client"

import  Hero  from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import AnimatedHorizontalScroll from "@/components/animated-horizontal-scroll"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { useSmoothScroll } from "@/lib/smooth-scroll"
import TechnologiesCard from "@/components/technologies-card"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme } = useTheme()
  useSmoothScroll()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother.kill()
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

          <Services />

          <WhyChooseUs />

          <section>
            <AnimatedHorizontalScroll />
          </section>

          <Process />

          {/* <Technologies /> */}
          {/* <TechnologiesCard/> */}

          <Projects />

          <Testimonials />

          <Team />

          <Contact />

          <Footer/>
        </main>
      </div>
  )
}
