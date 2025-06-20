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

export default function Home() {
  useSmoothScroll()
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
          
          <Hero />

          <VelocityScroll defaultVelocity={1} numRows={2} className="text-gray-300/90 my-5 py-5">INNOVATIVE SOLUTIONS</VelocityScroll>

          <Services />

          <WhyChooseUs />

          <section>
            <AnimatedHorizontalScroll />
          </section>

          <Process />

          <Technologies />

          <Projects />

          <Testimonials />

          <Team />

          <Contact />

          <Footer />
        </main>
      </div>
  )
}
