"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { NavbarDemo } from "@/components/navbar-resize"
import AnimatedHorizontalScroll from "@/components/animated-horizontal-scroll"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"

export default function Home() {
  useEffect(() => {
    // Register required plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // Create smooth scrolling
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
    })
  }, [])

  return (
    <div id="smooth-wrapper">
        <main id="smooth-content" className="min-h-screen flex flex-col">
          <NavbarDemo/>
          <Hero />

          <VelocityScroll defaultVelocity={1} numRows={2} className="text-gray-300/90 my-5 py-5">INNOVATIVE SOLUTIONS</VelocityScroll>
          <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
            <Services />
          </div>

          <WhyChooseUs />

          <section>
            <AnimatedHorizontalScroll />
          </section>

          <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
            <Process />
          </div>

          <Technologies />

          <Projects />

          <Testimonials />

          <Team />

          <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
            <Contact />
          </div>

          <Footer />
        </main>
      </div>
  )
}
