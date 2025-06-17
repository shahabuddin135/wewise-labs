"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements to create a tailored solution.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We create a detailed roadmap and technical specifications for your project.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create intuitive and visually appealing interfaces for your application.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers bring the designs to life using modern technologies and best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description: "We thoroughly test your application to ensure it's bug-free and performs optimally.",
  },
  {
    number: "06",
    title: "Deployment",
    description: "We deploy your application and provide ongoing support and maintenance.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mb-16">
        <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
          We follow a structured approach to deliver high-quality solutions that meet your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-5xl font-bold text-gray-100 absolute -top-14 -left-2 z-0">{step.number}</div>
            <div className="relative z-10">
              <h3 className="font-subheading text-xl sm:text-2xl md:text-3xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
