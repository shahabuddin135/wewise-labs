"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, ClipboardList, Palette, Code2, CheckCircle2, Rocket } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Discover the business, goals, and requirements to create a tailored solution.",
    icon: <Briefcase className="w-8 h-8 text-pink-400" />,
    color: "text-pink-400 border-pink-200",
  },
  {
    number: "02",
    title: "Planning",
    description: "Create roadmap and technical specifications for your project.",
    icon: <ClipboardList className="w-8 h-8 text-purple-400" />,
    color: "text-purple-400 border-purple-200",
  },
  {
    number: "03",
    title: "Design",
    description: "Design intuitive and visually appealing interfaces for your application.",
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    color: "text-blue-400 border-blue-200",
  },
  {
    number: "04",
    title: "Development",
    description: "Developers bring the designs to life using modern technologies and best practices.",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    color: "text-cyan-400 border-cyan-200",
  },
  {
    number: "05",
    title: "Testing",
    description: "Test your application to ensure it's bug-free and performs optimally.",
    icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
    color: "text-green-400 border-green-200",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Deploy your application and provide ongoing support and maintenance.",
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    color: "text-yellow-400 border-yellow-200",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Timeline bar progressive animation
      gsap.fromTo(
        timelineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Steps animation with stagger
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const isAbove = index % 2 === 0

          // Initial state
          gsap.set(step, {
            opacity: 0,
            y: isAbove ? -60 : 60,
            scale: 0.8,
          })

          // Animate in
          gsap.to(step, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          })

          // Icon floating animation
          const icon = step.querySelector(".step-icon")
          if (icon) {
            gsap.to(icon, {
              y: -8,
              duration: 2,
              ease: "power2.inOut",
              yoyo: true,
              repeat: -1,
              delay: index * 0.2,
            })
          }

          // Number node pulse animation
          const numberNode = step.querySelector(".number-node")
          if (numberNode) {
            gsap.to(numberNode, {
              scale: 1.1,
              duration: 1.5,
              ease: "power2.inOut",
              yoyo: true,
              repeat: -1,
              delay: index * 0.3,
            })
          }
        }
      })

      // Text reveal animation for titles and descriptions
      const titles = gsap.utils.toArray(".step-title")
      const descriptions = gsap.utils.toArray(".step-description")

      titles.forEach((title, index) => {
        gsap.fromTo(
          title as Element,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1 + 0.3,
            scrollTrigger: {
              trigger: title as Element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      descriptions.forEach((desc, index) => {
        gsap.fromTo(
          desc as Element,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1 + 0.5,
            scrollTrigger: {
              trigger: desc as Element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-24 mt-6 bg-white dark:bg-gray-950">
      <div ref={headerRef} className="mb-16 text-center">
        <h2 className="font-heading font-bold text-5xl md:text-[5rem] lg:text-[6rem] mb-10 mt-4 dark:text-white">HOW WE DO IT?</h2>
        <p className="text-lg md:text-[1rem] lg:text-[1.5rem] leading-8 font-body font-semibold text-gray-600 dark:text-white max-w-2xl mx-auto">
         From spark to ship. <br/> We focus process that gets ideas from the whiteboard to the real world.
        </p>
      </div>
      
      {/* Responsive Timeline: Vertical for <lg, Horizontal for lg+ */}
      {/* Vertical Timeline for mobile, small, and medium screens */}
      <div className="block lg:hidden relative w-full max-w-6xl mx-auto px-2">
        {/* Timeline Bar */}
        <div
          ref={timelineRef}
          className="absolute left-1/2 top-0 bottom-0 w-1 h-full -translate-x-1/2 bg-gradient-to-b from-pink-400 via-purple-400 to-yellow-400 z-0"
        />
        <div className="flex flex-col relative z-10">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) stepsRef.current[idx] = el
                }}
                className="relative flex w-full items-center mb-8 min-h-[120px]"
              >
                {/* Left content */}
                <div className="flex-1 flex justify-end pr-4">
                  {isLeft && (
                    <div className="flex flex-col items-end">
                      <div className="step-icon mb-2">{step.icon}</div>
                      <h3 className="step-title font-heading text-xl md:text-2xl lg:text-2xl font-bold mb-1 dark:text-white">{step.title}</h3>
                      <p className="step-description text-gray-600 dark:text-white text-base md:text-lg max-w-sm text-right">{step.description}</p>
                    </div>
                  )}
                </div>
                {/* Timeline node */}
                <div className="flex flex-col items-center z-10">
                  <div
                    className={`number-node w-10 h-10 flex items-center justify-center rounded-full border-2 ${step.color} bg-white shadow text-lg font-bold`}
                  >
                    <span className="text-gray-400 dark:text-gray-950">{step.number}</span>
                  </div>
                </div>
                {/* Right content */}
                <div className="flex-1 flex justify-start pl-4">
                  {!isLeft && (
                    <div className="flex flex-col items-start">
                      <div className="step-icon mb-2">{step.icon}</div>
                      <h3 className="step-title font-heading text-xl md:text-2xl lg:text-2xl font-bold mb-1 dark:text-white">{step.title}</h3>
                      <p className="step-description text-gray-600 dark:text-white text-base md:text-lg max-w-sm text-left">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Horizontal Timeline for large screens and up */}
      <div className="hidden lg:block relative w-full max-w-6xl mx-auto px-2">
        {/* Timeline Bar */}
        <div
          className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 z-0 transform -translate-y-1/2"
        />
        <div className="flex flex-wrap justify-between relative z-10">
          {steps.map((step, idx) => {
            const isAbove = idx % 2 === 0
            return (
              <div
                key={idx}
                className="relative w-1/2 sm:w-1/3 lg:w-1/6 flex flex-col items-center text-center px-2"
              >
                {/* Top Content */}
                {isAbove && (
                  <div className="flex flex-col items-center justify-center mb-8 min-h-[180px]">
                    <div className="step-icon mb-2">{step.icon}</div>
                    <h3 className="step-title font-heading text-xl md:text-2xl lg:text-2xl font-bold mb-1 dark:text-white">{step.title}</h3>
                    <p className="step-description text-gray-600 dark:text-white text-base md:text-lg max-w-sm leading-4">{step.description}</p>
                  </div>
                )}
                {/* Number Node */}
                <div
                  className={`number-node absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 ${step.color} bg-white shadow text-lg font-bold z-10`}
                >
                  <span className="text-gray-400 dark:text-gray-950">{step.number}</span>
                </div>
                {/* Bottom Content */}
                {!isAbove && (
                  <div className="flex flex-col items-center justify-center min-h-[180px] pt-[18rem]">
                    <div className="step-icon mb-2">{step.icon}</div>
                    <h3 className="step-title font-heading text-xl md:text-2xl lg:text-2xl font-bold mb-1 dark:text-white">{step.title}</h3>
                    <p className="step-description text-gray-600 dark:text-white text-base md:text-lg max-w-sm">{step.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
