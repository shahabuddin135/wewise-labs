import Image from 'next/image'
import React from 'react'

const OurMission = () => {
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
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-950 dark:text-white text-center">Our Mission</h2>
      <p className="text-gray-700 dark:text-white max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
        At WeWise Labs, our mission is simple yet powerful:
        <br/>
        We build smart, secure, and high-performing digital products that help businesses scale with confidence. From custom SaaS platforms to beautifully crafted web applications, everything we create is designed with intention — tailored to your needs, tested for quality, and optimized for performance. We don't just deliver software — we build solutions that evolve with you.
      </p>
   </div>
    </div>
  )
}

export default OurMission
