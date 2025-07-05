import React from 'react'
import Image from 'next/image'

const WhereOnEarth = () => {
  return (
<section>
<div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100 dark:bg-gray-950 dark:border dark:border-1 dark:border-white rounded-2xl justify-between shadow-md">
<div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/3">
{/* Light mode image */}
          <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-dark_n3uz1h.png"
            alt="why-us"
            width={300}
            height={300}
            className="w-[400px] h-[400px] object-cover block dark:hidden"
          />
          {/* Dark mode image */}
          <Image
            src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-light_jrecig.png"
            alt="why-us-dark"
            width={300}
            height={300}
            className="w-[400px] h-[400px] object-cover hidden dark:block"
          />
        </div>
        <div className="flex flex-col gap-14 md:items-start mb-6 md:p-8 md:w-2/3 md:m-8 items-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 text-center font-libre font-bold text-black dark:text-white">
            Where on Earth?
          </h1>
          <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-gray-700 dark:text-white">
          WeWise Labs runs its operations <br/> remotely. We live in the air !         </p>
        </div>
        
      </div>
    </section>
  )
}

export default WhereOnEarth
