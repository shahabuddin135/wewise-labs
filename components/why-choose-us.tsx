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
    <section id="why-choose-us" className="min-h-screen p-6 md:px-8">

      <div className="">
        <div className="absolute inset-0  opacity-60 blur-2xl animate-gradient-move" />
      </div>
      <div className="">
        <motion.div
          className="text-centers"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gradient Animated Heading */}
          <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4 text-black dark:text-white animate-gradient-move">Why Choose Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">            We combine technical expertise with a deep understanding of business needs to deliver exceptional results.
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
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)", filter: "brightness(1.08)" }}
              className="flex items-start rounded-2xl p-4 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-300/60 hover:bg-white/80 group"
              style={{ minHeight: 160 }}
            >
              {/* Icon with hover animation */}
              <div className="bg-white/80 p-3 rounded-full mr-4 mt-1 shadow group-hover:shadow-blue-300/40 transition-all duration-300">
                <span className="block group-hover:scale-110 group-hover:text-blue-500 group-hover:drop-shadow-glow transition-transform duration-300">{reason.icon}</span>
              </div>
              <div>
                <h3 className="font-subheading text-xl sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #60a5fa) drop-shadow(0 0 16px #a78bfa);
        }
      `}</style>
    </section>
  )
}
