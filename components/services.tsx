"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layout, Database, Smartphone, Zap, Users } from "lucide-react"

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom SaaS Development",
    description: "End-to-end development of scalable SaaS applications tailored to your business needs.",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with the latest technologies.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend Development",
    description: "Robust, scalable backend systems that power your applications.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Speed up your existing applications for better user experience and SEO.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Technical Consultation",
    description: "Expert advice on technology stack, architecture, and development practices.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mb-16">
        <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
          We offer a comprehensive range of web development and SaaS services to help you build and scale your digital
          products.
        </p>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

interface ServiceItemProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
  }
  index: number
}

function ServiceItem({ service, index }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-24 ${isEven ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center max-w-2xl gap-8`}>
        <div className="bg-gray-100 p-6 rounded-full">{service.icon}</div>
        <div className={`text-${isEven ? "left" : "right"}`}>
          <h3 className="font-subheading fornt-semibold text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
