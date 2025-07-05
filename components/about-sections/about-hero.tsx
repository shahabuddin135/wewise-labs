'use client'
import React from 'react'
import { MaskContainer } from '../ui/svg-mask-effect'

const AboutHero = () => {
  return (
    <div className="flex h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto items-center justify-center overflow-hidden">
    <MaskContainer
      revealText={
        <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-black dark:text-white">
          Curiosity brought you to know About Us
        </p>
      }
      className="h-[40rem] w-full mx-auto rounded-md text-black dark:text-white"
    >
     <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-white dark:text-black">
          Curiosity brought you to know About Us
        </p>
    </MaskContainer>
  </div>
  )
}

export default AboutHero

