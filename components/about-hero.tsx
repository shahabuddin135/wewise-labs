'use client'
import React from 'react'
import { MaskContainer } from './ui/svg-mask-effect'

const AboutHero = () => {
  return (
    // <div className="relative z-10 flex w-[80%] h-full">
    //        {/* Left: Heading */}
    //        <div className="flex-1 flex items-center">
    //          <h1 className="absolute top-44 text-5xl md:text-8xl font-bold text-black ">
    //          <MaskContainer
    //     revealText={
    //         <p>  Curiosity brought you <br/> to know about us</p>
    //     }
    //      className="h-[40rem] rounded-md border text-white dark:text-black"/>
    //          </h1>
    //        </div>
    //        {/* Right: Video */}
    //        {/* <div className="flex-1 flex items-center justify-center  h-[100vh]">
    //          <video
    //            className=" w-full object-contain rounded-lg shadow-lg"
    //            src="/metallic.mp4"
    //            autoPlay
    //            loop
    //            muted
    //            playsInline
    //          />
    //    </div> */}
    //    </div>
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
    <MaskContainer
      revealText={
        <p className="mx-auto w-full text-center text-5xl sm:text-6xl font-libre font-bold text-black dark:text-white">
          Curiosity brought you <br/> to know About Us
        </p>
      }
      className="h-[40rem] w-full mx-auto rounded-md border leading-8 text-black dark:text-white"
    >
     <p className="mx-auto w-full text-center text-5xl sm:text-6xl font-libre font-bold text-white dark:text-black">
          Curiosity brought you <br/> to know About Us
        </p>
    </MaskContainer>
  </div>
  )
}

export default AboutHero

