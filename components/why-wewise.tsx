import Image from 'next/image'
import React from 'react'

const WhyWewise = () => {
  return (
    <div className='flex justify-between items-center gap-12 py-20'>
    <div>
    <Image
    src=""
    alt=""
    width={200}
    height={200}
    className=''
    />
   </div>
    <div>
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-950 dark:text-white text-center">Why "WeWise"?</h2>
      <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-8 text-gray-700 dark:text-white max-w-3xl mx-auto mb-4 font-body font-semibold text-center">
        The name says it all.<br/>
        We believe in working together closely, collaboratively, and wisely.<br/>
        From our clients to our team, we thrive on shared growth, smart problem-solving, and building tech that&apos;s not just great... but grounded, scalable, and forward-thinking.
      </p>
      </div>
    </div>
  )
}

export default WhyWewise
