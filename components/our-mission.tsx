import Image from 'next/image'
import React from 'react'

const OurMission = () => {
  return (
    <div className='relative flex justify-between w-full items-center mt-24 py-20 h-screen'>
      {/* Light theme background */}
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{
          backgroundImage: "url('/hex-hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      {/* Dark theme background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block "
        style={{
          backgroundImage: "url('/bg-dark-hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center">
        <div>{/* <Image src="" alt="" width={200} height={200} className='' /> */}</div>
        <div className='mx-auto'>
          <h2 className="text-3xl md:text-[7rem] uppercase font-heading font-semibold text-slate-950 dark:text-white text-center">Our goal</h2>
          <p className="text-neutral-900 font-inter mt-16 dark:text-white max-w-2xl mx-auto text-center">
            At WeWise Labs, our mission is simple yet powerful:
            <br/>
            We build smart, secure, and high-performing digital products that help businesses scale with confidence. From custom SaaS platforms to beautifully crafted web applications, everything we create is designed with intention — tailored to your needs, tested for quality, and optimized for performance. We don't just deliver software — we build solutions that evolve with you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurMission


// In components/our-mission.tsx
// import { motion } from "framer-motion";
// import React from "react";

// const OurMission = () => (
//   <section className="relative flex flex-col items-center justify-center py-24">
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 0.2 }}
//       transition={{ duration: 1 }}
//       className="absolute inset-0 z-0"
//       style={{
//         backgroundImage: "url('/hex-hero.jpg')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//       aria-hidden="true"
//     />
//     <motion.h2
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="text-4xl md:text-6xl font-bold z-10"
//     >
//       OUR GOAL
//     </motion.h2>
//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="mt-8 max-w-2xl text-center z-10"
//     >
//       {/* ...mission text... */}
//     </motion.p>
//   </section>
// );

// export default OurMission;