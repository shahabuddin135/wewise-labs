"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = {
    base: 300,   // mobile
    md: 500,     // tablet
    lg: 700,     // desktop
    xl: 900      // large desktop
  },
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: {
    base: number;
    md: number;
    lg: number;
    xl: number;
  };
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(typeof window !== "undefined" && "ontouchstart" in window);
  }, []);

  const updateMousePosition = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!isTouchDevice && container) {
      container.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      container?.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isTouchDevice]);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveRevealSize =
    windowWidth < 768
      ? revealSize.base
      : windowWidth < 1024
      ? revealSize.base
      : windowWidth < 1280
      ? revealSize.base
      : revealSize.md

  const maskSize = isHovered ? responsiveRevealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative min-h-screen w-full max-w-7xl mx-auto overflow-hidden rounded-xl lg:rounded-2xl",
        className
      )}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
      onClick={() => isTouchDevice && setIsHovered(prev => !prev)}
    >
      {/* Masked Reveal Layer */}
      <motion.div
        className={cn(
          "absolute inset-0 z-10 flex items-center  text-6xl",
          "bg-black dark:bg-white",
          "[mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-mode:alpha] [mask-composite:exclude]"
        )}
        style={{
          clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          WebkitClipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
        onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      >
        <div className="relative z-20 max-w-7xl text-center text-4xl font-bold text-white dark:text-black">
          {children}
        </div>
      </motion.div>

      {/* Content Underneath Reveal */}
      <div className="relative z-0 flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};
