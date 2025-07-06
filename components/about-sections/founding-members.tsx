import React from 'react'
import Image from "next/image"

const FoundingMembers = () => {
  return (
    <section>
    <div
     className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto dark:bg-gray-950 rounded-2xl justify-between "
     >
    
    <div className="flex justify-center items-center p-6 md: w-full md:w-1/2">
        {/* Light mode image */}
        <Image
          src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722521/Team-light_goxqzj.png"
          alt="why-us"
          width={300}
          height={300}
          className="w-[400px] h-[400px] object-cover md:object-contain block dark:hidden"
        />
        {/* Dark mode image */}
        <Image
          src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Team-dark_xwxfwv.png"
          alt="why-us-dark"
          width={300}
          height={300}
          className="w-[400px] h-[400px] object-cover md:object-contain hidden dark:block"
        />
      </div>
      
      <div className="flex flex-col gap-6 items-center md:items-start p-6 w-full md:w-1/2">
        <h1 className="text-5xl text-center md:text-start sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-black dark:text-white">
          Founding Members
        </h1>
        <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black dark:text-white">
        These humans contributed in the<br/> creation of WeWise Labs.        </p>
      
      <div>
        <ul className='grid grid-cols-1 list-disc font-semibold leading-9 ml-4 text-2xl text-black dark:text-white'>
            <li>Shahabuddin COO</li>
            <li>Darakhshan Imran CEO</li>
            <li>Saba Sarfaraz CMO</li>
            <li>Abeera Umair CFO</li>
        </ul>
      </div>
      </div>
    </div>
  </section>
  )
}

export default FoundingMembers
