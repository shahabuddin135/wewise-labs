"use client"

import { useEffect, useRef } from "react"
import { motion, easeInOut, easeOut } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin, MotionPathPlugin)
}

export default function NotFound() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Text animations (main heading first)
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        titleRef.current,
        {
          text: "404",
          duration: 1.5,
          ease: "none",
        },
        "-=0.3",
      )
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      )
      // SVG animation after text
      .add(() => {
        const svgPath = document.querySelector(".svg-hero-flair--path") as SVGPathElement | null
        const svgStar = document.querySelector(".svg-hero-flair--starflower") as SVGGElement | null

        if (svgPath) {
          const pathLength = svgPath.getTotalLength()
          gsap.set(svgPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          })
          gsap.to(svgPath, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
          })
        }

        if (svgPath && svgStar) {
          gsap.set(svgStar, { visibility: "visible" })
          gsap.to(svgStar, {
            motionPath: {
              path: svgPath,
              align: svgPath,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            duration: 6,
            repeat: -1,
            ease: "power1.inOut",
          })
        }
      }, "+=0") // This ensures it runs after previous animations

    return () => {
      tl.kill()
      const svgPath = document.querySelector(".svg-hero-flair--path") as SVGPathElement | null
      const svgStar = document.querySelector(".svg-hero-flair--starflower") as SVGGElement | null
      gsap.killTweensOf([svgPath, svgStar])
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated SVG Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-start opacity-60 dark:opacity-40 w-[800px] max-w-none h-auto z-0">
        <div className="svg-hero__flair">
          <div className="container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="none"
              viewBox="0 0 1466 446"
              aria-hidden="true"
              className="w-[800px] h-auto"
            >
              <g className="svg-hero-flair" clipPath="url(#svg-hero-a)">
                <path
                  stroke="url(#svg-hero-b)"
                  strokeWidth="6"
                  d="M-81.026 101.203c40.388 192.282 162.965 262.446 310.87 254.449 5.702-.308 11.351-1.168 17.001-1.884a543.143 543.143 0 0 0 16.754-2.922 541.57 541.57 0 0 0 16.428-3.933A534.282 534.282 0 0 0 296.054 342a527.555 527.555 0 0 0 15.549-5.854 520.54 520.54 0 0 0 15.003-6.754 511.906 511.906 0 0 0 14.389-7.603 507.271 507.271 0 0 0 13.713-8.399 495.237 495.237 0 0 0 12.979-9.138 483.725 483.725 0 0 0 12.191-9.813 473.047 473.047 0 0 0 11.356-10.422 462.35 462.35 0 0 0 10.478-10.961 446.417 446.417 0 0 0 9.564-11.429 434.791 434.791 0 0 0 8.618-11.819 420.088 420.088 0 0 0 7.648-12.135 406.596 406.596 0 0 0 6.659-12.37 391.33 391.33 0 0 0 5.658-12.526 376.709 376.709 0 0 0 4.65-12.603 359.598 359.598 0 0 0 3.642-12.599 345.005 345.005 0 0 0 2.642-12.515 327.414 327.414 0 0 0 1.653-12.354 312.273 312.273 0 0 0 .683-12.114c-.01-3.962-.097-7.896-.262-11.8-.318-3.839-.71-7.644-1.177-11.413a266.103 266.103 0 0 0-2.057-10.956 250.65 250.65 0 0 0-2.895-10.433 238.047 238.047 0 0 0-3.688-9.847 222.999 222.999 0 0 0-4.43-9.2 210.665 210.665 0 0 0-5.117-8.501 197.48 197.48 0 0 0-5.746-7.75 186.145 186.145 0 0 0-6.312-6.957 176.51 176.51 0 0 0-6.812-6.121 168.978 168.978 0 0 0-7.245-5.253 161.575 161.575 0 0 0-7.608-4.355 155.16 155.16 0 0 0-7.898-3.434 150.6 150.6 0 0 0-8.114-2.498 148.312 148.312 0 0 0-8.256-1.548 145.162 145.162 0 0 0-8.324-.594c-2.776.04-5.548.16-8.317.358-2.755.357-5.5.792-8.235 1.305a149.34 149.34 0 0 0-8.08 2.24 152.775 152.775 0 0 0-7.854 3.154 157.467 157.467 0 0 0-7.557 4.047 163.77 163.77 0 0 0-7.193 4.91 171.704 171.704 0 0 0-6.764 5.738 181.298 181.298 0 0 0-6.273 6.527 189.626 189.626 0 0 0-5.723 7.272 200.992 200.992 0 0 0-5.12 7.969 212.51 212.51 0 0 0-4.465 8.614 223.881 223.881 0 0 0-3.764 9.203 237.327 237.327 0 0 0-3.023 9.733 251.838 251.838 0 0 0-2.244 10.2 266.724 266.724 0 0 0-1.434 10.603c-.27 3.621-.469 7.267-.597 10.939a290.792 290.792 0 0 0 .259 11.207c.304 3.788.682 7.59 1.132 11.406a319.451 319.451 0 0 0 2.015 11.533 333.8 333.8 0 0 0 2.901 11.592 348.6 348.6 0 0 0 3.786 11.578 361.625 361.625 0 0 0 4.666 11.495 370.148 370.148 0 0 0 5.532 11.344 383.876 383.876 0 0 0 6.381 11.125 396.16 396.16 0 0 0 7.208 10.84 407.813 407.813 0 0 0 8.006 10.491 420.94 420.94 0 0 0 8.774 10.082 423.998 423.998 0 0 0 9.503 9.615 438.617 438.617 0 0 0 10.192 9.094 447.654 447.654 0 0 0 10.835 8.521 454.946 454.946 0 0 0 11.43 7.901 459.324 459.324 0 0 0 11.972 7.239 466.18 466.18 0 0 0 12.459 6.539 470.745 470.745 0 0 0 12.889 5.803 476.198 476.198 0 0 0 13.258 5.041 477.882 477.882 0 0 0 13.565 4.252 480.786 480.786 0 0 0 13.808 3.446 482.176 482.176 0 0 0 13.989 2.626 482.396 482.396 0 0 0 14.102 1.797 482.887 482.887 0 0 0 14.151.965c4.715.114 9.427.159 14.134.135 4.694-.162 9.379-.391 14.054-.689a478.522 478.522 0 0 0 13.909-1.5c4.587-.7 9.154-1.464 13.702-2.294a469.06 469.06 0 0 0 13.434-3.067 467.275 467.275 0 0 0 13.108-3.812 456.131 456.131 0 0 0 12.727-4.528 447.83 447.83 0 0 0 12.291-5.207 442.007 442.007 0 0 0 11.807-5.847 440.502 440.502 0 0 0 11.275-6.445 430.89 430.89 0 0 0 10.7-6.997 419.745 419.745 0 0 0 10.086-7.499 405.848 405.848 0 0 0 9.437-7.949 392.888 392.888 0 0 0 8.759-8.345 379.013 379.013 0 0 0 8.052-8.684 367.221 367.221 0 0 0 7.326-8.965 353.98 353.98 0 0 0 6.581-9.186 338.638 338.638 0 0 0 5.826-9.347 325.584 325.584 0 0 0 5.062-9.447 307.845 307.845 0 0 0 4.296-9.486 293.687 293.687 0 0 0 3.533-9.464 278.768 278.768 0 0 0 2.776-9.382 261.518 261.518 0 0 0 2.032-9.241 247.227 247.227 0 0 0 1.303-9.041c.256-2.952.455-5.88.595-8.785a214.65 214.65 0 0 0-.088-8.476 198.74 198.74 0 0 0-.741-8.115 183.468 183.468 0 0 0-1.363-7.703 167.909 167.909 0 0 0-1.947-7.247 154.363 154.363 0 0 0-2.492-6.748 140.822 140.822 0 0 0-2.994-6.208 128.609 128.609 0 0 0-3.45-5.633 117.338 117.338 0 0 0-3.858-5.027 107.95 107.95 0 0 0-4.216-4.392 99.808 99.808 0 0 0-4.522-3.734 91.714 91.714 0 0 0-4.774-3.056 86.505 86.505 0 0 0-4.971-2.364 81.626 81.626 0 0 0-5.114-1.661 78.37 78.37 0 0 0-5.199-.952 76.855 76.855 0 0 0-5.23-.241 76.92 76.92 0 0 0-5.204.466 77.95 77.95 0 0 0-5.123 1.166 81.006 81.006 0 0 0-4.989 1.855 85.72 85.72 0 0 0-4.802 2.527 92.43 92.43 0 0 0-4.562 3.18 98.127 98.127 0 0 0-4.276 3.809 106.634 106.634 0 0 0-3.94 4.411 115.704 115.704 0 0 0-3.562 4.98 125.74 125.74 0 0 0-3.141 5.517 138.053 138.053 0 0 0-2.681 6.015 149.831 149.831 0 0 0-2.186 6.474 160.706 160.706 0 0 0-1.66 6.889 176.54 176.54 0 0 0-1.104 7.259 188.565 188.565 0 0 0-.524 7.583 204.7 204.7 0 0 0 .077 7.859 217.74 217.74 0 0 0 .695 8.084 231.27 231.27 0 0 0 1.326 8.259 246.429 246.429 0 0 0 1.966 8.383 258.798 258.798 0 0 0 2.61 8.454 275.032 275.032 0 0 0 3.254 8.475 288.211 288.211 0 0 0 3.897 8.443 298.856 298.856 0 0 0 4.531 8.362 309.318 309.318 0 0 0 5.153 8.231 323.218 323.218 0 0 0 5.762 8.052 334.663 334.663 0 0 0 6.35 7.825 346.231 346.231 0 0 0 6.917 7.554 354.909 354.909 0 0 0 7.458 7.24 367.98 367.98 0 0 0 7.971 6.887 373.26 373.26 0 0 0 8.451 6.494 382.251 382.251 0 0 0 8.897 6.068 392.222 392.222 0 0 0 9.307 5.609 392.358 392.358 0 0 0 9.677 5.121 401.381 401.381 0 0 0 10.005 4.609 402.915 402.915 0 0 0 10.292 4.074 407.728 407.728 0 0 0 10.535 3.522 410.802 410.802 0 0 0 10.731 2.953 411.835 411.835 0 0 0 10.883 2.376 417.34 417.34 0 0 0 10.987 1.789 415.335 415.335 0 0 0 11.045 1.201 418.008 418.008 0 0 0 11.057.612c3.678.058 7.352.067 11.022.027 3.655-.135 7.303-.319 10.942-.55 3.617-.325 7.223-.697 10.817-1.115a413.271 413.271 0 0 0 10.649-1.667c3.5-.69 6.98-1.423 10.441-2.2a399.634 399.634 0 0 0 10.19-2.712 397.466 397.466 0 0 0 9.904-3.2 393.42 393.42 0 0 0 9.58-3.66 388.74 388.74 0 0 0 9.223-4.092 382.534 382.534 0 0 0 8.837-4.491 365.394 365.394 0 0 0 8.421-4.857 354.037 354.037 0 0 0 7.982-5.185 347.059 347.059 0 0 0 7.519-5.476 337.3 337.3 0 0 0 7.038-5.728 327.633 327.633 0 0 0 6.541-5.939 312.049 312.049 0 0 0 6.033-6.11 299.797 299.797 0 0 0 5.516-6.238 293.603 293.603 0 0 0 4.992-6.324 274.273 274.273 0 0 0 4.466-6.368 260.266 260.266 0 0 0 3.943-6.369 243.506 243.506 0 0 0 3.423-6.33 229.656 229.656 0 0 0 2.911-6.248 215.85 215.85 0 0 0 2.41-6.128 197.627 197.627 0 0 0 1.922-5.968 178.535 178.535 0 0 0 1.453-5.771 166.604 166.604 0 0 0 1.002-5.538 145.364 145.364 0 0 0 .573-5.273 128.69 128.69 0 0 0 .17-4.975 113.777 113.777 0 0 0-.206-4.648 100.214 100.214 0 0 0-.554-4.294 85.219 85.219 0 0 0-.871-3.915 70.68 70.68 0 0 0-1.154-3.516 60.338 60.338 0 0 0-1.405-3.098 48.946 48.946 0 0 0-1.62-2.662 39.407 39.407 0 0 0-1.798-2.215 32.117 32.117 0 0 0-1.94-1.758 26.787 26.787 0 0 0-2.045-1.293c-.7-.314-1.405-.589-2.113-.824a20.097 20.097 0 0 0-2.142-.356 19.76 19.76 0 0 0-2.135.111 20.6 20.6 0 0 0-2.092.574c-.679.305-1.349.647-2.012 1.027a27.235 27.235 0 0 0-1.897 1.471 32.374 32.374 0 0 0-1.749 1.9 40.282 40.282 0 0 0-1.569 2.313 48.858 48.858 0 0 0-1.357 2.709 58.565 58.565 0 0 0-1.118 3.083 70.33 70.33 0 0 0-.85 3.434 84.412 84.412 0 0 0-.558 3.761 97.286 97.286 0 0 0-.243 4.061c.002 1.423.033 2.867.092 4.333a123.514 123.514 0 0 0 .446 4.575 138.457 138.457 0 0 0 .814 4.786c.366 1.642.765 3.298 1.196 4.967a168.274 168.274 0 0 0 1.588 5.114 183.206 183.206 0 0 0 1.988 5.229 196.745 196.745 0 0 0 2.392 5.311c.899 1.784 1.832 3.57 2.799 5.36a228.89 228.89 0 0 0 3.205 5.375 244.168 244.168 0 0 0 3.609 5.358 254.621 254.621 0 0 0 4.006 5.309 268.74 268.74 0 0 0 4.396 5.228 270.726 270.726 0 0 0 4.776 5.118 279.336 279.336 0 0 0 5.141 4.978 295.16 295.16 0 0 0 5.493 4.811 306.202 306.202 0 0 0 5.828 4.617 314.084 314.084 0 0 0 6.143 4.399 323.684 323.684 0 0 0 6.438 4.157 323.892 323.892 0 0 0 6.714 3.895c2.3 1.229 4.62 2.434 6.96 3.614 2.37 1.131 4.77 2.237 7.18 3.317 2.44 1.028 4.9 2.029 7.38 3.004 2.5.921 5.02 1.814 7.55 2.679 2.56.81 5.12 1.592 7.7 2.345 2.59.697 5.2 1.364 7.81 2.003 2.63.581 5.26 1.132 7.9 1.655 2.64.464 5.3.899 7.95 1.304 2.66.347 5.33.665 7.99.954 2.66.23 5.33.432 7.99.604 2.65.115 5.31.201 7.96.259 2.64.001 5.28-.026 7.91-.08 2.62-.11 5.23-.247 7.83-.411 2.58-.218 5.16-.461 7.72-.731a365.9 365.9 0 0 0 7.6-1.04c2.5-.42 4.98-.865 7.45-1.333 2.44-.515 4.86-1.052 7.27-1.612a351.71 351.71 0 0 0 7.08-1.872c2.31-.686 4.6-1.39 6.87-2.114 2.23-.762 4.45-1.54 6.64-2.337a347.86 347.86 0 0 0 6.4-2.537c2.07-.891 4.12-1.796 6.14-2.715 1.98-.945 3.94-1.902 5.88-2.871a326.25 326.25 0 0 0 5.6-3.003 324.205 324.205 0 0 0 5.32-3.112 374.852 374.852 0 0 0 5.03-3.195 387.85 387.85 0 0 0 4.74-3.254 317.665 317.665 0 0 0 4.45-3.29c1.41-1.101 2.79-2.201 4.16-3.301a376.188 376.188 0 0 0 3.87-3.289 360.99 360.99 0 0 0 3.59-3.253 355.11 355.11 0 0 0 3.31-3.194c1.04-1.046 2.05-2.084 3.04-3.115.95-1.014 1.88-2.019 2.79-3.015.87-.975 1.72-1.94 2.54-2.894.79-.932 1.56-1.85 2.31-2.757.72-.881 1.42-1.748 2.1-2.601.64-.826 1.27-1.636 1.89-2.431.58-.765 1.14-1.513 1.7-2.246.52-.7 1.03-1.383 1.53-2.049.47-.631.94-1.245 1.39-1.841.42-.559.84-1.1 1.25-1.623.39-.485.77-.951 1.14-1.398.36-.409.71-.798 1.05-1.168.33-.331.65-.642.97-.933.32-.252.63-.484.93-.697.3-.172.6-.325.89-.458a7.56 7.56 0 0 1 .88-.222 6.757 6.757 0 0 1 .89.011c.31.061.61.142.92.241.31.136.63.291.96.464.33.21.67.437 1.02.681.36.279.72.575 1.1.889.39.346.79.708 1.19 1.086.43.409.86.833 1.31 1.272.46.469.93.951 1.42 1.447a547.94 547.94 0 0 1 1.56 1.608l1.71 1.756c.6.619 1.22 1.248 1.86 1.888.66.659 1.33 1.328 2.02 2.005.72.695 1.45 1.397 2.2 2.107.77.724 1.56 1.455 2.37 2.192.83.749 1.68 1.502 2.55 2.261.89.768 1.81 1.539 2.73 2.314.96.781 1.93 1.564 2.92 2.35 1.02.789 2.05 1.579 3.1 2.37 1.08.791 2.17 1.583 3.28 2.374a301.68 301.68 0 0 0 3.46 2.362c1.19.782 2.4 1.561 3.63 2.337a293.82 293.82 0 0 0 3.8 2.295c1.31.752 2.63 1.5 3.96 2.242 1.36.73 2.73 1.455 4.12 2.174a351.22 351.22 0 0 0 4.26 2.095 288.65 288.65 0 0 0 4.4 2.005c1.49.644 3 1.279 4.52 1.905 1.53.608 3.08 1.207 4.63 1.796 1.57.57 3.15 1.13 4.74 1.68 1.6.529 3.21 1.048 4.83 1.557a363.02 363.02 0 0 0 4.9 1.428c1.66.443 3.31.875 4.97 1.296 1.67.399 3.35.786 5.03 1.161 1.68.353 3.37.694 5.06 1.024 1.69.307 3.38.603 5.08.887 1.7.261 3.4.511 5.1.75 1.7.216 3.4.421 5.1.615 1.7.172 3.39.333 5.09.484 1.69.129 3.38.248 5.06.356 1.68.088 3.36.166 5.03.234 1.67.048 3.33.087 4.99.117 1.64.012 3.29.014 4.93.008 1.63-.023 3.25-.055 4.86-.094"
                  className="svg-hero-flair--path"
                  style={{ visibility: "visible" }}
                />
                {/* Animated star/flower along the path */}
                <g className="svg-hero-flair--starflower" style={{ visibility: "visible" }}>
                  <polygon points="0,-24 7,-7 24,0 7,7 0,24 -7,7 -24,0 -7,-7" fill="url(#svg-hero-b)" stroke="#fff" strokeWidth="3" />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="svg-hero-b"
                  x1="936"
                  y1="-8.50098"
                  x2="965.779"
                  y2="458.785"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.140625" stopColor="#FF8709"></stop>
                  <stop offset="0.791667" stopColor="#FEC5FB"></stop>
                </linearGradient>
                <linearGradient
                  id="svg-hero-d"
                  x1="1236.31"
                  x2="1472.88"
                  y1="257.796"
                  y2="262.837"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".427" stopColor="#FF8709"></stop>
                  <stop offset=".792" stopColor="#F7BDF8"></stop>
                </linearGradient>
                <linearGradient
                  id="svg-hero-f"
                  x1="203.347"
                  x2="227.071"
                  y1="31.277"
                  y2="40.597"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".427" stopColor="#FF8709"></stop>
                  <stop offset=".792" stopColor="#F7BDF8"></stop>
                </linearGradient>
                <linearGradient
                  id="svg-hero-h"
                  x1="508.346"
                  x2="532.07"
                  y1="31.277"
                  y2="40.597"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".427" stopColor="#FF8709"></stop>
                  <stop offset=".792" stopColor="#F7BDF8"></stop>
                </linearGradient>
                <linearGradient
                  id="svg-hero-g"
                  x1="203.347"
                  x2="227.071"
                  y1="31.277"
                  y2="40.597"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".427" stopColor="#FF8709"></stop>
                  <stop offset=".792" stopColor="#F7BDF8"></stop>
                </linearGradient>
                <linearGradient
                  id="svg-hero-i"
                  x1="508.346"
                  x2="532.07"
                  y1="31.277"
                  y2="40.597"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".427" stopColor="#FF8709"></stop>
                  <stop offset=".792" stopColor="#F7BDF8"></stop>
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <clipPath id="svg-hero-a">
                  <path fill="#fff" d="M0 0h1466v446H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center z-10 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 Title */}
        <motion.h1
          ref={titleRef}
          className="text-8xl md:text-9xl font-bold text-slate-900 dark:text-white mb-8 mt-10"
          // variants={itemVariants}
        ></motion.h1>

        {/* Subtitle with Framer Motion */}
        <motion.h2
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-12"
          // variants={itemVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          ref={descriptionRef}
          className="text-lg text-slate-600 dark:text-slate-400 mb-8 mt-28 leading-relaxed"
          // variants={itemVariants}
        >
          {
            "The page you're looking for seems to have wandered off into the digital void. Don't worry, even the best explorers sometimes take a wrong turn."
          }
        </motion.p>

        {/* Action Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              asChild
              size="lg"
              className="bg-black text-white border-0 dark:bg-white/90 dark:text-black hover:bg-neutral-800 dark:hover:bg-white"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

         
        </motion.div>

        {/* Additional Info */}
        <motion.div className="mt-12 text-sm text-slate-500 dark:text-slate-400" variants={itemVariants}>
          <p>Lost? Try checking the URL or use the navigation above.</p>
          <p className="mt-2 font-medium">
            <span className="text-orange-500">Wewise Labs</span> - Crafting Digital Experiences
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-6 h-6 bg-pink-500 rounded-full opacity-40"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-50"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
