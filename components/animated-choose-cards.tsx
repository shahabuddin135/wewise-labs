"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import React, { useEffect, useState, useCallback } from "react";

type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode | string;
};
export const AnimatedTestimonials = ({
  reasons,
  autoplay = false,
}: {
  reasons: Reason[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % reasons.length);
  }, [reasons.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  if (!reasons || reasons.length === 0) {
    return null;
  }

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto max-w-xl px-6 py-10 font-sans antialiased md:max-w-6xl md:px-8">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square h-72 md:h-[26rem] lg:h-[28rem]">
            <AnimatePresence>
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : reasons.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-3xl bg-gray-100 dark:bg-[#cbcaca] border-2 border-gray-200  flex items-center justify-center overflow-hidden">
                    {typeof reason.icon === 'string' && reason.icon ? (
                      <Image 
                        src={reason.icon}
                        alt={reason.title}
                        fill
                        className="object-cover w-full h-full rounded-3xl border-2 border-gray-200"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={isActive(index)}
                      />
                    ) : React.isValidElement(reason.icon) ? (
                      <span className="text-5xl sm:text-6xl md:text-7xl text-neutral-500 dark:text-neutral-400">
                        {reason.icon}
                      </span>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-28 mt-6 items-center text-center lg:items-start lg:text-left">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
              {reasons[active].title}
            </h3>
            <motion.p className="text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-100 text-wrap mt-14">
              {reasons[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-6 lg:mt-2">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700"
            >
              <IconArrowLeft className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-200" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700"
            >
              <IconArrowRight className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
