"use client"

import { useEffect, useRef, useState, useLayoutEffect } from "react"

interface AnimatedHorizontalScrollProps {
  className?: string
}

export default function AnimatedHorizontalScroll({ className = "" }: AnimatedHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isGSAPLoaded, setIsGSAPLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  // Load GSAP on client side only
  useEffect(() => {
    let mounted = true

    const loadGSAP = async () => {
      try {
        if (typeof window === "undefined") return

        const gsapModule = await import("gsap")
        const scrollTriggerModule = await import("gsap/ScrollTrigger")

        if (!mounted) return

        const gsap = gsapModule.gsap || gsapModule.default
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default

        if (!gsap || typeof gsap.registerPlugin !== "function") {
          throw new Error("GSAP failed to load properly")
        }

        gsap.registerPlugin(ScrollTrigger)
        ;(window as any).gsap = gsap
        ;(window as any).ScrollTrigger = ScrollTrigger

        setIsGSAPLoaded(true)
      } catch (err) {
        console.error("Failed to load GSAP:", err)
        setError(err instanceof Error ? err.message : "Failed to load GSAP")
      }
    }

    loadGSAP()

    return () => {
      mounted = false
    }
  }, [])

  // Check if the screen size is mobile or tablet
  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOrTablet(window.innerWidth < 1024) // Tailwind's 'lg' breakpoint
    }
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  // Setup animations after GSAP is loaded
  useLayoutEffect(() => {
    if (!isGSAPLoaded || !containerRef.current || !scrollRef.current) return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger

    if (!gsap || !ScrollTrigger) return

    const container = containerRef.current
    const scrollContainer = scrollRef.current

    // Get all elements
    const textElements = scrollContainer.querySelectorAll(".text-element")
    const shapeElements = scrollContainer.querySelectorAll(".shape-element")

    // Calculate total scroll width
    const totalWidth = scrollContainer.scrollWidth
    const viewportWidth = window.innerWidth

    if (totalWidth <= viewportWidth) return

    let mainScrollTween: any

    try {
      // Main horizontal scroll animation
      mainScrollTween = gsap.to(scrollContainer, {
        x: () => -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Animate text elements with different effects
      textElements.forEach((element, index) => {
        const el = element as HTMLElement

        // Initial state
        gsap.set(el, {
          opacity: 0,
          y: 100,
          rotation: -10,
          scale: 0.8,
        })

        // Animate in
        gsap.to(el, {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            containerAnimation: mainScrollTween,
            start: "left 90%",
            end: "left 10%",
            toggleActions: "play none none reverse",
          },
        })

        // Add floating animation
        gsap.to(el, {
          y: -20,
          duration: 2 + Math.random() * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        })
      })

      // Animate shapes with various cool effects
      shapeElements.forEach((element, index) => {
        const el = element as HTMLElement
        const animationType = index % 6 // 6 different animation types

        // Initial state
        gsap.set(el, {
          opacity: 0,
          scale: 0,
          rotation: Math.random() * 360,
        })

        switch (animationType) {
          case 0: // Pop and bounce
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: el,
                containerAnimation: mainScrollTween,
                start: "left 80%",
                toggleActions: "play none none reverse",
              },
            })
            // Continuous bounce
            gsap.to(el, {
              y: -30,
              duration: 1.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: 0.5,
            })
            break

          case 1: // Roll down
            gsap.fromTo(
              el,
              {
                y: -200,
                rotation: -720,
                opacity: 0,
                scale: 0.5,
              },
              {
                y: 0,
                rotation: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "bounce.out",
                scrollTrigger: {
                  trigger: el,
                  containerAnimation: mainScrollTween,
                  start: "left 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )
            // Gentle rotation
            gsap.to(el, {
              rotation: 360,
              duration: 8,
              ease: "none",
              repeat: -1,
            })
            break

          case 2: // Up and down wave
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                containerAnimation: mainScrollTween,
                start: "left 75%",
                toggleActions: "play none none reverse",
              },
            })
            // Wave motion
            gsap.to(el, {
              y: -50,
              duration: 2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: index * 0.3,
            })
            break

          case 3: // Moving along (left behind)
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                containerAnimation: mainScrollTween,
                start: "left 70%",
                toggleActions: "play none none reverse",
              },
            })
            // Slower horizontal movement (left behind effect)
            gsap.to(el, {
              x: -100,
              duration: 4,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1,
            })
            break

          case 4: // Passing through
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                containerAnimation: mainScrollTween,
                start: "left 90%",
                toggleActions: "play none none reverse",
              },
            })
            // Fast passing motion
            gsap.to(el, {
              x: 200,
              duration: 3,
              ease: "power2.inOut",
              yoyo: true,
              repeat: -1,
              delay: 1,
            })
            break

          case 5: // Spiral motion
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: el,
                containerAnimation: mainScrollTween,
                start: "left 80%",
                toggleActions: "play none none reverse",
              },
            })
            // Spiral animation
            gsap.to(el, {
              rotation: 360,
              x: 30,
              y: -30,
              duration: 4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            })
            break
        }

        // Add hover effect
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.2, duration: 0.3, ease: "power2.out" })
        })

        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    } catch (err) {
      console.error("Animation setup failed:", err)
      setError("Animation setup failed")
    }

    // Cleanup function
    return () => {
      try {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
        if (mainScrollTween) mainScrollTween.kill()
      } catch (err) {
        console.error("Cleanup failed:", err)
      }
    }
  }, [isGSAPLoaded])

  // Loading state
  if (!isGSAPLoaded && !error) {
    return (
      <div className="h-screen flex items-center justify-center bg-white darK:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading creative animations...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">Animation Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 ${className}`}
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-pink-500/30 dark:bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-[40%] left-[50%] w-[30rem] h-[30rem] bg-blue-500/30 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] bg-purple-500/30 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div ref={scrollRef} className="flex items-center h-full whitespace-nowrap px-8">
        {/* At */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-500 bg-clip-text text-transparent ml-10 mr-8 md:mr-16">
          At
        </span>

        {/* Shape 1 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* wewise */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent mr-8 md:mr-16">
          wewise,
        </span>

        {/* Shape 2 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* we */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 dark:from-lime-300 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent mr-8 md:mr-16">
          we
        </span>

        {/* Shape 3 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* mean */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent mr-8 md:mr-16">
          mean
        </span>

        {/* Shape 4 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* it */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 dark:from-amber-300 dark:via-orange-400 dark:to-red-500 bg-clip-text text-transparent mr-8 md:mr-16">
          it
        </span>

        {/* Shape 5 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* when */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mr-8 md:mr-16">
          when
        </span>

        {/* Shape 6 */}
        <div className="shape-element mx-4 md:mx-8">
          <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        {/* we */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 dark:from-violet-300 dark:via-purple-400 dark:to-fuchsia-500 bg-clip-text text-transparent mr-8 md:mr-16">
          we
        </span>

        {/* say: */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 dark:from-cyan-400 dark:via-teal-400 dark:to-green-400 bg-clip-text text-transparent mr-8 md:mr-16">
          say:
        </span>

        {/* "Creative */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-red-600 dark:from-rose-300 dark:via-pink-400 dark:to-red-500 bg-clip-text text-transparent mr-8 md:mr-16">
          &quot;Creative
        </span>

        {/* we */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 dark:from-pink-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent mr-8 md:mr-16">
          we
        </span>

        {/* are!" */}
        <span className="text-element text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 dark:from-teal-300 dark:via-cyan-400 dark:to-sky-500 bg-clip-text text-transparent mr-56">
          are!&quot;
        </span>
        {/* Spacer to ensure last text is fully visible on md+ screens only */}
        {/* <div
          className="hidden md:inline-block"
          style={{ width: "160vw" }}
          aria-hidden="true"
        ></div> */}
        <div
          className="inline-block"
          style={{ width: isMobileOrTablet ? "140vw" : "180vw" }}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  )
}
