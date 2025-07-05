import React from 'react'
import Image from "next/image"

const Mission = () => {
  return (
    <section>
    <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100 dark:bg-gray-950 dark:border dark:border-1 dark:border-white rounded-2xl justify-between shadow-md">
        {/* <div className="flex flex-col gap-6 items-center md:items-start p-6 md:p-8 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-libre font-bold text-black dark:text-white text-center md:text-left"> */}
    <div className="flex flex-col gap-14 items-start p-8 md:w-2/3 m-8 text-center">
    <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5  font-libre font-bold text-black dark:text-white">
            Our Good Mission
          </h1>
          {/* <p className="font-semibold text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-xl text-gray-700 dark:text-white text-center md:text-left"> */}
          <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-gray-700 dark:text-white">
            WeWise Lab&apos;s mission is to build products that work & are affordable.
          </p>
        </div>
        <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/3">
          {/* Light mode image */}
          <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722524/Leadership_light_vpuldm.png"
            alt="why-us"
            width={300}
            height={300}
            className="rounded-xl object-cover block dark:hidden"
          />
          {/* Dark mode image */}
          <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722522/Leadership_dark_ccikp6.png"
            alt="why-us-dark"
            width={300}
            height={300}
            className="rounded-xl object-cover hidden dark:block"
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
