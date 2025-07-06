"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layout, Database, Smartphone, Zap, Users } from "lucide-react"
import { useTheme } from "next-themes";
import { ShineBorder } from "@/components/magicui/shine-border";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom SaaS Development",
    description: "End-to-end development of scalable SaaS applications tailored to your business needs.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with the latest technologies.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend Development",
    description: "Robust, scalable backend systems that power your applications.",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Speed up your existing applications for better user experience and SEO.",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Technical Consultation",
    description: "Expert advice on technology stack, architecture, and development practices.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 ">
      <div className="mb-16 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 dark:text-white">Our Services</h2>
        <p className="font-body font-semibold text-gray-600 dark:text-white max-w-2xl mx-auto">
          We offer a comprehensive range of web development and SaaS services to help you build and scale your digital
          products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
    iconBg: string
    iconColor: string
  }
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const theme = useTheme();

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full group-hover:-translate-y-2">
         <ShineBorder shineColor={theme.theme === "dark" ? "white" : "black"} />
        <div className="flex flex-col items-center text-center space-y-6">
          <div
            className={`${service.iconBg} ${service.iconColor} p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110`}
          >
            {service.icon}
          </div>

          <div className="space-y-3">
            <h3 className="font-subheading text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
