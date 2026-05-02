"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, easeInOut, easeOut } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function HorizontalScrollFramer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });
  const [scrollWidth, setScrollWidth] = useState(0);

  // Move hooks before any early return
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);
  const smoothX = useSpring(x, { stiffness: 40, damping: 20, mass: 1 });

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current || !scrollRef.current) return;
      const totalScroll = scrollRef.current.scrollWidth - window.innerWidth;
      setScrollWidth(totalScroll);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Early return after hooks
  if (!isMobileOrTablet) {
    return null;
  }

  const fadeUpVariant = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: {
      opacity: 1,
      y: [0, -20, 0], // more bounce
      scale: 1,
      transition: {
        duration: 2.5,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: easeInOut,
        },
        opacity: { duration: 1, ease: easeOut },
      },
    },
  };

  const floatingVariant = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: [0, -24, 0], // more bounce
      scale: 1,
      transition: {
        opacity: { duration: 1 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: easeInOut,
        },
      },
    },
  };

  // Add key prop to each shapeSvg
  const shapeSvgs = [
    // Shape 1
    (
      <svg key="shape-1" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    // Shape 2
    (
      <svg key="shape-2" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    // Shape 3
    (
      <svg key="shape-3" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    // Shape 4
    (
      <svg key="shape-4" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    // Shape 5
    (
      <svg key="shape-5" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    // Shape 6
    (
      <svg key="shape-6" width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[900dvh] overflow-visible w-screen bg-white dark:bg-gray-950"
    >
      <div className="sticky top-0 h-screen px-10 overflow-hidden">
        {/* Background Glow Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
          <div className="absolute top-[20%] left-[10%] w-[12rem] h-[12rem] bg-pink-500/30 dark:bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-[40%] left-[50%] w-[8rem] h-[8rem] bg-blue-500/30 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[15%] right-[20%] w-[10rem] h-[10rem] bg-purple-500/30 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-[60%] left-[30%] w-[7rem] h-[7rem] bg-green-400/30 dark:bg-green-600/20 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
        </div>
        <motion.div
          ref={scrollRef}
          style={{
            x: smoothX,
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
          className="flex h-full items-center whitespace-nowrap"
        >
          {[
            { type: "text", content: "At", gradient: "from-sky-500 via-blue-600 to-indigo-600", padding: "pl-20" },
            { type: "shape", src: 0 },
            { type: "text", content: "wewise,", gradient: "from-pink-500 via-purple-500 to-blue-500" },
            { type: "shape", src: 1 },
            { type: "text", content: "we", gradient: "from-lime-400 via-green-500 to-emerald-600" },
            { type: "shape", src: 2 },
            { type: "text", content: "mean", gradient: "from-yellow-400 via-orange-500 to-red-500" },
            { type: "shape", src: 3 },
            { type: "text", content: "it", gradient: "from-amber-400 via-orange-500 to-red-600" },
            { type: "shape", src: 4 },
            { type: "text", content: "when", gradient: "from-green-500 via-blue-500 to-purple-500" },
            { type: "shape", src: 5 },
            { type: "text", content: "we", gradient: "from-violet-500 via-purple-500 to-fuchsia-600" },
            { type: "text", content: "say:", gradient: "from-cyan-500 via-teal-500 to-green-500" },
            { type: "text", content: "\"Creative", gradient: "from-rose-400 via-pink-500 to-red-600" },
            { type: "text", content: "we", gradient: "from-pink-500 via-red-500 to-orange-500" },
            { type: "text", content: "are!\"", gradient: "from-teal-400 via-cyan-500 to-sky-500 pr-52" },
          ].map((item, index) => {
            if (item.type === "text") {
              return (
                <motion.span
                  key={index}
                  variants={fadeUpVariant}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                  className={`text-element text-[7rem] lg:text-[9rem] font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mr-8 will-change-transform ${item.padding || ""}`}
                >
                  {item.content}
                </motion.span>
              );
            } else if (item.type === "shape" && typeof item.src === "number") {
              const svgIndex = item.src % shapeSvgs.length;
              return (
                <motion.div
                  key={index}
                  variants={floatingVariant}
                  initial="initial"
                  animate="animate"
                  className="shape-element mx-4 md:mx-8 will-change-transform"
                >
                  {shapeSvgs[svgIndex]}
                </motion.div>
              );
            }
          })}

          <div
            className="inline-block align-top"
            style={{ width: '100vw', height: 0 }}
            aria-hidden="true"
          ></div> 
          
          <div
            className="inline-block align-bottom"
            style={{ width: '100vw', height: 0 }}
            aria-hidden="true"
          ></div> 
        </motion.div>
      </div>
    </section>
  );
}
