// "use client"
// import { useRef } from "react"
// import type React from "react"

// import { motion, useInView } from "framer-motion"
// import { Code, Layout, Database, Smartphone, Zap, Users } from "lucide-react"
// import { useTheme } from "next-themes"

// const services = [
//   {
//     icon: <Code className="h-10 w-10" />,
//     title: "Custom SaaS Development",
//     description: "End-to-end development of scalable SaaS applications",
//     iconBg: "bg-blue-50",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: <Layout className="h-10 w-10" />,
//     title: "Web Applications",
//     description: "Modern, responsive web applications",
//     iconBg: "bg-purple-50",
//     iconColor: "text-purple-500",
//   },
//   {
//     icon: <Database className="h-10 w-10" />,
//     title: "Backend Systems",
//     description: "Robust, scalable backend systems",
//     iconBg: "bg-green-50",
//     iconColor: "text-green-500",
//   },
//   {
//     icon: <Smartphone className="h-10 w-10" />,
//     title: "Frontend Development",
//     description: "Beautiful, intuitive user interfaces",
//     iconBg: "bg-pink-50",
//     iconColor: "text-pink-500",
//   },
//   {
//     icon: <Zap className="h-10 w-10" />,
//     title: "Performance Optimization",
//     description: "Lightning fast applications",
//     iconBg: "bg-yellow-50",
//     iconColor: "text-yellow-500",
//   },
//   {
//     icon: <Users className="h-10 w-10" />,
//     title: "Technical Consultation",
//     description: "Expert guidance and advice",
//     iconBg: "bg-indigo-50",
//     iconColor: "text-indigo-500",
//   },
// ]

// export function Services() {
//   const ref = useRef<HTMLDivElement>(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })
//   const { theme } = useTheme()

//   return (
//     <section id="services" className="py-40 z-50 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="mb-24 text-center">
//           <h2 className="font-heading font-bold text-5xl md:text-6xl mb-8 dark:text-white">Our Services</h2>
//           <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             We offer a comprehensive range of web development and SaaS services to help you build and scale your digital
//             products with excellence and innovation.
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <motion.div
//             ref={ref}
//             className="relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="honeycomb-container">
//               <svg
//                 viewBox="0 0 1000 800"
//                 className="w-full max-w-6xl h-auto"
//                 style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))" }}
//               >
//                 <defs>
//                   <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" />
//                     <stop offset="50%" stopColor="#8B5CF6" />
//                     <stop offset="100%" stopColor="#EC4899" />
//                   </linearGradient>
//                   <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" />
//                     <stop offset="100%" stopColor="#8B5CF6" />
//                   </linearGradient>
//                 </defs>

//                 {/* Center Hexagon - Excellence in Digital Solutions */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                   <polygon
//                     points="500,300 650,375 650,525 500,600 350,525 350,375"
//                     fill="url(#centerGradient)"
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:brightness-110 transition-all duration-300"
//                   />
//                   <foreignObject x="350" y="375" width="300" height="150">
//                     <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
//                       <div className="font-bold text-2xl mb-2">Excellence in</div>
//                       <div className="font-semibold text-xl">Digital Solutions</div>
//                     </div>
//                   </foreignObject>
//                 </motion.g>

//                 {/* Top Left - Custom SaaS Development */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   <polygon
//                     points="350,175 500,250 500,400 350,475 200,400 200,250"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-blue-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="200" y="250" width="300" height="150">
//                     <ServiceContent service={services[0]} />
//                   </foreignObject>
//                 </motion.g>

//                 {/* Top Right - Web Applications */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                 >
//                   <polygon
//                     points="650,175 800,250 800,400 650,475 500,400 500,250"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-purple-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="500" y="250" width="300" height="150">
//                     <ServiceContent service={services[1]} />
//                   </foreignObject>
//                 </motion.g>

//                 {/* Right - Backend Systems */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                 >
//                   <polygon
//                     points="800,400 950,475 950,625 800,700 650,625 650,475"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-green-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="650" y="475" width="300" height="150">
//                     <ServiceContent service={services[2]} />
//                   </foreignObject>
//                 </motion.g>

//                 {/* Bottom Right - Frontend Development */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                   <polygon
//                     points="650,625 800,700 800,850 650,925 500,850 500,700"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-pink-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="500" y="700" width="300" height="150">
//                     <ServiceContent service={services[3]} />
//                   </foreignObject>
//                 </motion.g>

//                 {/* Bottom Left - Performance Optimization */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.7 }}
//                 >
//                   <polygon
//                     points="350,625 500,700 500,850 350,925 200,850 200,700"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-yellow-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="200" y="700" width="300" height="150">
//                     <ServiceContent service={services[4]} />
//                   </foreignObject>
//                 </motion.g>

//                 {/* Left - Technical Consultation */}
//                 <motion.g
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.6, delay: 0.8 }}
//                 >
//                   <polygon
//                     points="200,400 350,475 350,625 200,700 50,625 50,475"
//                     fill={theme === "dark" ? "#374151" : "#F8FAFC"}
//                     stroke="url(#borderGradient)"
//                     strokeWidth="6"
//                     className="cursor-pointer hover:fill-indigo-50 dark:hover:fill-gray-600 transition-all duration-300"
//                   />
//                   <foreignObject x="50" y="475" width="300" height="150">
//                     <ServiceContent service={services[5]} />
//                   </foreignObject>
//                 </motion.g>
//               </svg>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// interface ServiceContentProps {
//   service: {
//     icon: React.ReactNode
//     title: string
//     description: string
//     iconBg: string
//     iconColor: string
//   }
// }

// function ServiceContent({ service }: ServiceContentProps) {
//   return (
//     <div className="flex flex-col items-center justify-center h-full text-center p-4">
//       <div
//         className={`${service.iconBg} ${service.iconColor} p-3 rounded-xl mb-3 transition-transform duration-300 hover:scale-110`}
//       >
//         {service.icon}
//       </div>
//       <h4 className="font-bold text-base text-gray-900 dark:text-white mb-2 leading-tight">{service.title}</h4>
//       <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">{service.description}</p>
//     </div>
//   )
// }
"use client"
import { useRef } from "react"
import type React from "react"

import { motion, useInView } from "framer-motion"
import { Code, Layout, Database, Smartphone, Zap, Users } from "lucide-react"
import { useTheme } from "next-themes"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Custom SaaS Development",
    description: "End-to-end development of scalable SaaS applications",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Web Applications",
    description: "Modern, responsive web applications",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Systems",
    description: "Robust, scalable backend systems",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Frontend Development",
    description: "Beautiful, intuitive user interfaces",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Performance Optimization",
    description: "Lightning fast applications",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Technical Consultation",
    description: "Expert guidance and advice",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()

  return (
    <section id="services" className="mt-10 z-50 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex flex-col flex-1 min-h-0">
        <div className="mb-16 text-center">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-8 dark:text-white">Our Services</h2>
          <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer a comprehensive range of web development and SaaS services to help you build and scale your digital
            products with excellence and innovation.
          </p>
        </div>

        <div className="flex justify-center flex-1 min-h-0">
          <motion.div
            ref={ref}
            className="relative flex-1 flex items-center justify-center min-h-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="honeycomb-container flex-1 flex items-center justify-center min-h-0">
              <svg
                viewBox="0 0 1000 800"
                className="w-[600px] h-[480px] max-w-none"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))" }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>

                {/* Center Hexagon - Excellence in Digital Solutions */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <polygon
                    points="500,300 650,375 650,525 500,600 350,525 350,375"
                    fill="url(#centerGradient)"
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:brightness-110 transition-all duration-300"
                  />
                  <foreignObject x="350" y="375" width="300" height="150">
                    <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
                      <div className="font-bold text-2xl mb-2">Excellence in</div>
                      <div className="font-semibold text-xl">Digital Solutions</div>
                    </div>
                  </foreignObject>
                </motion.g>

                {/* Top Left - Custom SaaS Development */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <polygon
                    points="350,175 500,250 500,400 350,475 200,400 200,250"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-blue-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="200" y="250" width="300" height="150">
                    <ServiceContent service={services[0]} />
                  </foreignObject>
                </motion.g>

                {/* Top Right - Web Applications */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <polygon
                    points="650,175 800,250 800,400 650,475 500,400 500,250"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-purple-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="500" y="250" width="300" height="150">
                    <ServiceContent service={services[1]} />
                  </foreignObject>
                </motion.g>

                {/* Right - Backend Systems */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <polygon
                    points="800,400 950,475 950,625 800,700 650,625 650,475"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-green-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="650" y="475" width="300" height="150">
                    <ServiceContent service={services[2]} />
                  </foreignObject>
                </motion.g>

                {/* Bottom Right - Frontend Development */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <polygon
                    points="650,625 800,700 800,850 650,925 500,850 500,700"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-pink-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="500" y="700" width="300" height="150">
                    <ServiceContent service={services[3]} />
                  </foreignObject>
                </motion.g>

                {/* Bottom Left - Performance Optimization */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <polygon
                    points="350,625 500,700 500,850 350,925 200,850 200,700"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-yellow-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="200" y="700" width="300" height="150">
                    <ServiceContent service={services[4]} />
                  </foreignObject>
                </motion.g>

                {/* Left - Technical Consultation */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <polygon
                    points="200,400 350,475 350,625 200,700 50,625 50,475"
                    fill={theme === "dark" ? "#374151" : "#F8FAFC"}
                    stroke="url(#borderGradient)"
                    strokeWidth="6"
                    className="cursor-pointer hover:fill-indigo-50 dark:hover:fill-gray-600 transition-all duration-300"
                  />
                  <foreignObject x="50" y="475" width="300" height="150">
                    <ServiceContent service={services[5]} />
                  </foreignObject>
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface ServiceContentProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
    iconBg: string
    iconColor: string
  }
}

function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div
        className={`${service.iconBg} ${service.iconColor} p-3 rounded-xl mb-3 transition-transform duration-300 hover:scale-110`}
      >
        {service.icon}
      </div>
      <h4 className="font-bold text-base text-gray-900 dark:text-white mb-2 leading-tight">{service.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight">{service.description}</p>
    </div>
  )
}

