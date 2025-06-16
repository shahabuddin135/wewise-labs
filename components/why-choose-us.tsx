"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Shield, Zap, Users, Clock, Award } from "lucide-react"

const reasons = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "We follow rigorous testing and quality assurance processes to deliver bug-free applications.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Development",
    description: "Security is built into our development process from the ground up.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Focused",
    description: "We optimize every aspect of your application for maximum speed and efficiency.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Approach",
    description: "We work closely with you throughout the development process.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Expertise",
    description: "Our team brings years of experience across various industries.",
  },
]

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="why-choose-us" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="font-body font-semibold text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with a deep understanding of business needs to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-start"
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4 mt-1">{reason.icon}</div>
              <div>
                <h3 className="font-subheading font-bold text-xl sm:text-2xl md:text-3xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
