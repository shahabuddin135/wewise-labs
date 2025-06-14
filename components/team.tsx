"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "10+ years of experience in web development and SaaS product management.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Full-stack developer specializing in React and Node.js applications.",
  },
  {
    name: "Michael Rodriguez",
    role: "UX/UI Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creating intuitive and beautiful user experiences for web and mobile applications.",
  },
  {
    name: "Priya Patel",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ensuring projects are delivered on time and exceed client expectations.",
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="font-subheading text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make Wewise Labs a leader in web development and SaaS solutions.
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
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="font-subheading font-semibold text-xl font-bold mb-1">{member.name}</h2>
                <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-black transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-black transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-black transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
