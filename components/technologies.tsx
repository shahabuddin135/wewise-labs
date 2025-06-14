"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image";
import firebase from "../public/icons/firebase.png";
import react from "../public/icons/react.png"
import nodejs from "../public/icons/Nodejs.png"
import sanity from "../public/icons/sanity.png"
import ui from "../public/icons/ui-ux.png"
import typescript from "../public/icons/typescript.png"
import ps from "../public/icons/postgresql.png"
import nextjs from "../public/icons/nextjs.png"
import tailwind from "../public/icons/tailwind.png"
import mongodb from "../public/icons/mongo.png"
import sql from "../public/icons/sql.png"
import express from "../public/icons/express.png"
import python from "../public/icons/python.png"
import clerk from "../public/icons/clerk.png"

const technologies = [
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "TypeScript",  icon: typescript },
  { name: "Node.js",  icon: nodejs },
  { name: "Tailwind CSS",  icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: ps },
  { name: "MySQL",  icon: sql },
  { name: "UI/UX", icon: ui },
  { name: "Prisma",  icon: react },
  { name: "Sanity", icon: sanity },
  { name: "Express", icon: express },
  { name: "Clerk",  icon: clerk },
  { name: "Firebase", icon: firebase },
  { name: "Python",  icon: python },
  { name: "Chatbot development", icon: react },
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="font-body font-semibold text-gray-600 max-w-2xl mx-auto">
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
              <div className="bg-white p-4 rounded-full shadow-sm mb-3">
                <Image src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
              </div>
              <p className="text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
