"use client"
import React from 'react'
import { BoxReveal } from "@/components/magicui/box-reveal";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from 'next-themes';
import Image from "next/image"
const Careers = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        {/* <BoxReveal>
          <span className='text-7xl font-semibold text-black dark:text-white'>Coming Soon!</span>
        </BoxReveal> */}
        {/* {isDark ? 
         <DotLottieReact
      src="https://lottie.host/7463509f-dc28-4143-9863-a059a320d43b/TwZUuGlMoo.lottie"
      // loop
      autoplay
    /> :
    <DotLottieReact
      src="https://lottie.host/2fbe1f87-9550-4dc4-8532-286858d3dfde/1614OmdDsJ.lottie"
      loop
      autoplay
    />
  } */}
     <Image
        src={isDark ? 'https://res.cloudinary.com/dqkt0g0he/image/upload/v1751753736/Coming_Soon_4_acgpfp.png' : 'https://res.cloudinary.com/dqkt0g0he/image/upload/v1751753736/Coming_Soon_1_ncvkzg.png'}
        alt='Coming Soon'
        width={350}
        height={350}
        priority
        className='mt-6'
      />
      <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-6 dark:text-white">Coming Soon!</h2>
    </div>
  )
}

export default Careers
