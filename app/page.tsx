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
import {NavbarDemo} from "@/components/navbar-resize"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavbarDemo/>
      <Hero />

      <HorizontalScrollText text="INNOVATIVE SOLUTIONS" direction="left" />

      <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Services />
      </div>

      <WhyChooseUs />

      <HorizontalScrollText text="EXPERT DEVELOPMENT" direction="right" />

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
  )
}
