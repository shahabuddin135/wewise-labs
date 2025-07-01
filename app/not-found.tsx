'use client'

import React from 'react'
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

const NotFound = () => {
  const { theme } = useTheme();
  const shadowColor = theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";

  return (
    <section className='mt-2 sm:mt-6 bg-white dark:bg-gray-950'>
      <div className='flex flex-col items-center justify-center h-screen'>
         <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      <LineShadowText className="italic dark:text-white text-black text-9xl" shadowColor={shadowColor}>
        404
      </LineShadowText>
    </h1>
    <p className='text-2xl font-bold text-center mt-10 text-black dark:text-white'>Looks like you’ve ventured off the map, <br/> but don’t worry, at WeWise Labs, we innovate even in lost spaces.</p>
      </div>
    </section>
  )
}

export default NotFound
