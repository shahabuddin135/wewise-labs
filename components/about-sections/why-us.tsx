import React from 'react'
import Image from "next/image"

const whyUs = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100 dark:bg-gray-950 dark:border dark:border-1 dark:border-white rounded-2xl justify-between shadow-md"  
      style={{
      backgroundImage : "url('https://res.cloudinary.com/dqkt0g0he/image/upload/v1751746551/magicpattern-noise-1751746498292_prhu3m.png')",
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat"
     }}>
        
        {/* <div className="flex flex-col gap-6 items-center md:items-start p-6 md:p-8 w-full md:w-1/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-libre font-bold text-black dark:text-white text-center md:text-left"> */}
              <div className="flex flex-col gap-14 items-start p-8 w-1/2 m-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 font-libre font-bold text-black ">
            Why Wewise?
          </h1>
          <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-gray-700 ">
            It is not what we just say, <br /> it is what we do!
          </p>
        </div>
       
        <div className="flex justify-center items-center w-1/2">        
          {/* Light mode image */}
          <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Question-light_detsyn.png"
            alt="why-us"
            width={300}
            height={300}
            className="rounded-xl object-cover block "
          />
          {/* Dark mode image */}
          {/* <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Question-dark_cmvdiw.png"
            alt="why-us-dark"
            width={300}
            height={300}
            className="rounded-xl object-cover hidden dark:block"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default whyUs

