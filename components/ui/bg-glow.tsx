"use client"

import { useEffect, useRef } from "react"

const SVG_SIZE = 96 // Medium size for better fit
const SVG_SHAPES = [
  // SVG 1
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_236_1049)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 2.62268e-06V60L200 200H140V130.033C139.982 168.678 108.649 200 70 200C31.3401 200 0 168.66 0 130C0 91.3401 31.3401 60 70 60C108.649 60 139.982 91.3222 140 129.967V60H70H0V2.62268e-06L140 0L200 2.62268e-06Z"
          fill="url(#paint0_linear_236_1049)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_236_1049"
          x1="157.5"
          y1="32"
          x2="44"
          y2="147.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0509862" stopColor="#FFB6E1" />
          <stop offset="1" stopColor="#FBE3EA" />
        </linearGradient>
        <clipPath id="clip0_236_1049">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // SVG 2
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_238_1284)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"
          fill="url(#paint0_linear_238_1284)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_238_1284"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7B5FF" />
          <stop offset="1" stopColor="#F3ACFF" />
        </linearGradient>
        <clipPath id="clip0_238_1284">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // SVG 3
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_238_1269)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.5492 178.786L75.5488 178.787L62.9138 166.152C62.9709 166.927 63 167.71 63 168.5C63 185.897 48.897 200 31.5 200C14.103 200 0 185.897 0 168.5C0 151.103 14.103 137 31.5 137C32.2899 137 33.073 137.029 33.8483 137.086L20.8627 124.101L20.8654 124.098C7.95846 110.931 0 92.8947 0 73C0 32.6832 32.6832 0 73 0C92.8947 0 110.931 7.95845 124.098 20.8654L124.1 20.863L124.491 21.2532C124.576 21.3384 124.662 21.4239 124.747 21.5095L137.086 33.849C137.029 33.0735 137 32.2901 137 31.5C137 14.103 151.103 0 168.5 0C185.897 0 200 14.103 200 31.5C200 48.897 185.897 63 168.5 63C167.71 63 166.927 62.9709 166.151 62.9137L178.492 75.2547C178.577 75.3389 178.661 75.4234 178.745 75.508L178.786 75.5491L178.786 75.5492C191.898 88.7461 200 106.927 200 127C200 167.317 167.317 200 127 200C106.927 200 88.7461 191.898 75.5492 178.786Z"
          fill="url(#paint0_linear_238_1269)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_238_1269"
          x1="14"
          y1="26"
          x2="179"
          y2="179.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9B8FF" />
          <stop offset="1" stopColor="#F9ECFF" />
        </linearGradient>
        <clipPath id="clip0_238_1269">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // SVG 4
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_231_793)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z"
          fill="url(#paint0_linear_231_793)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_231_793"
          x1="177"
          y1="-9.23648e-06"
          x2="39.5"
          y2="152.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B0B9FF" />
          <stop offset="1" stopColor="#E7E9FF" />
        </linearGradient>
        <clipPath id="clip0_231_793">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // SVG 5
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_234_943)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z"
          fill="url(#paint0_linear_234_943)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_234_943"
          x1="27.5"
          y1="19"
          x2="149"
          y2="174.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD9A0" />
          <stop offset="1" stopColor="#FFF5F1" />
        </linearGradient>
        <clipPath id="clip0_234_943">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // SVG 6
  (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_234_920)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 100L4.37114e-06 0L100 4.37114e-06C100 55.2285 55.2285 100 0 100ZM200 100C200 44.7716 155.228 1.88558e-05 100 4.37114e-06L100 100L6.5969e-06 100C1.76868e-06 155.228 44.7715 200 100 200H200L200 100ZM199.961 100L100 100L100 200C100 144.785 144.75 100.021 199.961 100Z"
          fill="url(#paint0_linear_234_920)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_234_920"
          x1="157.5"
          y1="32"
          x2="44"
          y2="147.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0509862" stopColor="#FFB6E1" />
          <stop offset="1" stopColor="#FBE3EA" />
        </linearGradient>
        <clipPath id="clip0_234_920">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
]

export default function BgGlowBouncingSVGs({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationFrame = useRef<number | null>(null)
  const positions = useRef<{ x: number; y: number; dx: number; dy: number }[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateBounds = () => {
      const { width, height } = container.getBoundingClientRect()
      return { width, height }
    }

    if (positions.current.length !== SVG_SHAPES.length) {
      positions.current = Array(SVG_SHAPES.length)
        .fill(0)
        .map(() => ({
          x: Math.random() * (container.offsetWidth - SVG_SIZE),
          y: Math.random() * (container.offsetHeight - SVG_SIZE),
          dx: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random()),
          dy: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random()),
        }))
    }

    const animate = () => {
      const { width, height } = updateBounds()
      positions.current.forEach((pos) => {
        pos.x += pos.dx
        pos.y += pos.dy
        if (pos.x <= 0 || pos.x + SVG_SIZE >= width) {
          pos.dx *= -1
          pos.x = Math.max(0, Math.min(pos.x, width - SVG_SIZE))
        }
        if (pos.y <= 0 || pos.y + SVG_SIZE >= height) {
          pos.dy *= -1
          pos.y = Math.max(0, Math.min(pos.y, height - SVG_SIZE))
        }
      })

      svgRefs.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate(${positions.current[i].x}px, ${positions.current[i].y}px)`
        }
      })

      animationFrame.current = requestAnimationFrame(animate)
    }

    animationFrame.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!document.getElementById("blob-keyframes")) {
      const style = document.createElement("style")
      style.id = "blob-keyframes"
      style.innerHTML = `
        @keyframes blob {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-40px) scale(1.15); }
          66% { transform: translateY(30px) scale(0.95); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Glowing Blobs - Smaller sizes */}
      <div className="absolute top-[15%] left-[8%] w-[22rem] h-[22rem] bg-pink-400/60 dark:bg-pink-500/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute top-[45%] left-[55%] w-[18rem] h-[18rem] bg-blue-400/50 dark:bg-blue-500/30 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[12%] right-[18%] w-[20rem] h-[20rem] bg-purple-500/50 dark:bg-purple-500/30 rounded-full blur-[110px] animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-[28%] left-[32%] w-[17rem] h-[17rem] bg-emerald-400/40 dark:bg-emerald-400/20 rounded-full blur-[80px] animate-blob animation-delay-3000"></div>

      {/* Bouncing SVGs */}
      {SVG_SHAPES.map((svg, i) => (
        <div
          key={i}
          ref={el => {
            svgRefs.current[i] = el
          }}
          style={{ position: "absolute", width: SVG_SIZE, height: SVG_SIZE, pointerEvents: "none", zIndex: 2 }}
        >
          {svg}
        </div>
      ))}
    </div>
  )
}
