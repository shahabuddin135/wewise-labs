import React from 'react'
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <section>
    <div className="flex gap-8 pl-8 m-8 h-[50%] max-w-7xl bg-gray-100 dark:bg-gray-950 dark:border dark:border-1 dark:border-white rounded-2xl mx-auto justify-between">
    <div className="flex justify-center items-center w-1/3">
        {/* Light mode image */}
        <Image
          src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722526/How_we_work-light_x6zdgu.png"
          alt="why-us"
          width={400}
          height={400}
          className="w-[400px] h-[400px] object-cover block dark:hidden"
        />
        {/* Dark mode image */}
        <Image
          src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722525/How_we_work-dark_vrr1da.png"
          alt="why-us-dark"
          width={400}
          height={400}
          className="w-[400px] h-[400px] object-cover hidden dark:block"
        />
      </div>

      <div className="flex flex-col gap-14 items-start p-8 w-2/3 m-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 font-libre font-bold text-black dark:text-white">
             What Do We Do?
        </h1>
        <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-gray-700 dark:text-white">
             WeWise Labs is a SaaS & Web development expert.    
        </p>
      </div>
     
    </div>
  </section>
  )
}

export default WhatWeDo
