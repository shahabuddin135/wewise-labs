"use client"
import Image from 'next/image'
import React from 'react'
import BgGlowBouncingSVGs from './ui/bg-glow'
import CardPicker from './CardPicker'
// import VerticalGSAPCards from './VerticalCarousel'
import QualitiesBentoGrid from './about-sections/qualities-bento-grid'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WhyWewise = () => {
  return (
    <div className='flex flex-col items-center gap-12 py-20'>
      <div>
        <h2 className="text-3xl md:text-[7rem] uppercase font-heading font-semibold mb-6 text-slate-950 dark:text-white text-center leading-tight">Why "WeWise"?</h2>
        <p className="text-gray-700 font-inter dark:text-white max-w-2xl mx-auto mb-4 text-center">
          The name says it all.<br/>
          We believe in working together — closely, collaboratively, and wisely.<br/>
          From our clients to our team, we thrive on shared growth, smart problem-solving, and building tech that's not just great... but grounded, scalable, and forward-thinking.
        </p>
      </div>
      {/* Render CardPicker below the text, centered */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <CardPicker />
        </div>
      </div>
      {/* <VerticalGSAPCards/> */}
      <QualitiesBentoGrid />
    </div>
  )
}

export default WhyWewise
