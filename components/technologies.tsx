"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image";

const technologies = [
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/react_i9fxfq.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749981782/next-js-icon_j2iy7t.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749980923/Bold_Monogram_in_Black_and_White_hpyth8.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/Nodejs_fw9sf3.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749253/tailwind_fclik0.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/mongo_lrirdi.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/postgresql_pfyyxz.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/sql_t1dvgu.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749981064/pngwing.com_7_lmiwyx.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749750077/pngwing.com_6_uzfjro.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/sanity_tgulgp.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/express_tmyzqt.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/clerk_u99cgo.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/firebase_javqen.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749981302/ChatGPT_Image_Jun_15_2025_02_54_20_PM_dcftdj.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/chatbot_wmenlo.png" },
  {  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/agent_ygyuin.png" },
]

export function Technologies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="technologies" className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col items-center"
            >
              <div className="">
                <Image src={tech.icon} alt="" width={50} height={50} className="w-12 h-12 object-contain" />
              </div>
              {/* <p className="text-sm font-medium">{tech.name}</p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
