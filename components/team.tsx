"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const team = [
  {
    name: "Darakhshan Imran",
    role: "Founder & Full Stack Developer",
    bio: "Leads the team and builds complete web solutions from front to back.",
    linkedin:"https://www.linkedin.com/in/darakhshan-imran-5b9727297/",
    github:"https://github.com/Darakhshan-Imran"
  },
  {
    name: "Shahabuddin",
    role: "Co-founder & Project Manager",
    bio: "Ensuring projects are delivered on time and exceed client expectations.",
    linkedin:"https://www.linkedin.com/in/shahab-uddin-368086300/",
    github:"https://github.com/shahabuddin135"
  },
  {
    name: "Abeera Umair",
    role: "Co-founder & Frontend Developer",
    bio: "Designs and develops user-friendly interfaces for web apps.",
    linkedin:"https://www.linkedin.com/in/abeera-u-4377a8296/",
    github:"https://github.com/AbeeraUmair"
  },
  {
    name: "Saba Sarfaraz",
    role: "Co-founder & Backend Developer",
    bio: "Builds and maintains server-side logic and database systems.",
    linkedin:"https://www.linkedin.com/in/saba-sarfaraz-5abbb4232/",
    github:"https://github.com/sarfarazsaba11"
  },
]

export function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="team" className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
            Meet the talented individuals who make Wewise Labs a leader in Web development and SaaS solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1} },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:border hover:border-black hover:shadow-black hover:shadow-md hover:transition hover:delay-50 hover:duration-300 "
            >
              <div className="p-6 ">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3 ">
                  <Link href={member.linkedin} target="blank" className="text-gray-400">
                    <Image src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/linkedIn_qwcwfs.png" 
                    alt="linked-in icon" 
                    className="h-5 w-5"
                    width={100}
                    height={100}
                    />
                  </Link>
                  <Link href={member.github} target="blank" className="text-gray-400">
                  <Image src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749248/github_nqa1zy.png"
                   alt="github-icon"
                   className="h-6 w-6"
                   width={100}
                   height={100}
                   />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
