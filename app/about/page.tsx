import WhyWewise from '@/components/why-wewise'
import OurMission from '../../components/our-mission'
import OurVision from '../../components/our-vision'
import { Team } from '@/components/team'
import React from 'react'

export default function AboutPage() {
  return (
    <section className="relative isolate py-24 px-4 md:px-8 overflow-hidden mt-20 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto w-full">
          <OurMission />
          <OurVision />
          <WhyWewise />
          <Team />
    </section>
  )
}
