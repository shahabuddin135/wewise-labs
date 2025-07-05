
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const question = [
  {
    title : "What Do We Do?",
    para : "WeWise Labs is a SaaS & Web development expert.",
    src : ""
    
  },
  {
    title : "Our Good Mission",
    para : "WeWise Lab’s mission is to build products that work & are affordable.",
    src : ""
  },
  {
    title : "Founding Members",
    para : "These humans contributed in the creation of WeWise Labs.",
    src : ""
  },
  {
    title : "Why Wewise?",
    para : "It is not what we just say, it is what we do!",
    src : ""
  },
  {
    title : "Where on Earth?",
    para : "WeWise Labs runs its operations remotely. We live in the air ;)",
    src : ""
  },
]

const team = [
  {
name : "Shahabuddin COO"
  },
  {
    name : "Darakhshan Imran CEO"
  }, {
    name : "Saba Sarfaraz CMO"
  },
  {
    name : "Abeera Umair CFO"
  },
]

export default function VerticalGSAPCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Adjusted scroll ranges to ensure all 4 cards are visible
  const card1Y = useTransform(scrollYProgress, [0, 0.2], [0, 0])
  const card2Y = useTransform(scrollYProgress, [0.2, 0.4], [400, 0])
  const card3Y = useTransform(scrollYProgress, [0.4, 0.6], [400, 0])
  const card4Y = useTransform(scrollYProgress, [0.6, 0.8], [400, 0])

  const cardTransforms = [card1Y, card2Y, card3Y, card4Y]

  return (
    <div className="">
      {/* Stacked cards section - Increased height significantly */}
      <div ref={containerRef} className="relative h-[800vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {question.map((member, idx) => {
            return (
              <motion.div
                key={member.title}
                style={{
                  y: cardTransforms[idx],
                  zIndex: 10 + idx * 10,
                }}
                className="absolute w-[28rem] h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-200"
              >
                <div className="text-lg font-bold mb-2 px-3 py-1 rounded bg-black text-white">{member.title}</div>

                <div className="text-sm font-semibold mb-2 text-gray-800">{member.para}</div>

                <div className="text-sm mb-4 text-center px-4 text-gray-700">{member.src}</div>

                {/* <div className="flex gap-4 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 underline"
                  >
                    GitHub
                  </a>
                </div> */}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
