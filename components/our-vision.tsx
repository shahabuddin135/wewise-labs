import Image from 'next/image'
import React from 'react'
import BgGlowBouncingSVGs from './ui/bg-glow'

const OurVision = () => {
  return (
    <div className='flex justify-between items-center gap-12 py-20 '>
      <div>
    <h2 className="text-3xl md:text-[7rem] uppercase font-heading font-semibold mb-6 text-slate-950 dark:text-white text-center">Our Philosophy</h2>
    <p className="text-gray-700 font-inter dark:text-white max-w-2xl mx-auto mb-4 text-center">
        We envision a world where technology isn't just functional — it's meaningful, intuitive, and empowering.<br/>
        Our goal is to become the go-to innovation partner for businesses ready to create lasting impact. Whether you're launching a startup or transforming an enterprise, WeWise Labs is here to bring your ideas to life — with precision, creativity, and a whole lot of wisdom.
      </p>
    </div>
    <div>
     {/* <Image
     src=""
     alt=""
     width={200}
     height={200}
     className=''
     /> */}
    </div>
    </div>
  )
}

export default OurVision
