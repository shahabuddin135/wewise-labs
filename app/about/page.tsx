"use client"

import React from 'react'
import AboutHero from '@/components/about-sections/about-hero'
import WhyUs from "../../components/about-sections/why-us"
import Mission from "../../components/about-sections/mission"
import FoundingMembers from '@/components/about-sections/founding-members'
import WhereOnEarth from '@/components/about-sections/where-on-earth'
import WhatWeDo from '@/components/about-sections/what-we-do'
import QualitiesBentoGrid from '@/components/about-sections/QualitiesBentoGrid'


export default function AboutPage() {
  return (
      <section>
          <AboutHero/>
          <WhatWeDo/>
          <Mission/>
          <WhyUs/>
          <WhereOnEarth/>
          <FoundingMembers/>
          <QualitiesBentoGrid />
          
      </section>

  )
}
