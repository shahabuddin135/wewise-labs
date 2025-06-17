import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HorizontalScrollText } from "@/components/horizontal-scroll-text"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-4 md:px-8 max-w-7xl mx-auto w-full">
      <Navbar />
      <Hero />

      <HorizontalScrollText text="INNOVATIVE SOLUTIONS" direction="left" />

        <Services />

      <WhyChooseUs />

      <HorizontalScrollText text="EXPERT DEVELOPMENT" direction="right" />

        <Process />

      <Technologies />

      
      <Projects />

      <Testimonials />

      <Team />

        <Contact />

      <Footer />
    </main>
  )
}
