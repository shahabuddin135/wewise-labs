"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function SleekIPadVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      className="relative mx-auto mt-16 mb-10 md:mb-20 w-full max-w-[880px] rounded-[34px] bg-[#111111] dark:bg-[#1a1a1a] border-[12px] border-[#2b2b2b] shadow-[0_10px_60px_rgba(0,0,0,0.4)]"
    >
      {/* iPad Side Button (Left side) */}
      <div className="absolute -z-[10] -left-[14px] top-20 h-10 w-[4px] rounded-full bg-[#333] dark:bg-[#555]" />
      <div className="absolute -z-[10] -left-[14px] top-32 h-6 w-[4px] rounded-full bg-[#333] dark:bg-[#555]" />

      {/* iPad Top Button */}
      <div className="absolute -z-[10] top-[-14px] left-1/2 -translate-x-1/2 h-[4px] w-20 rounded-full bg-[#333] dark:bg-[#555]" />

      {/* Screen area */}
      <div className="rounded-[24px] overflow-hidden bg-[#f4f4f5] dark:bg-[#0f0f0f]">
        <div className="w-full h-full rounded-[20px] overflow-hidden">
        <video
            ref={videoRef}
            src="https://res.cloudinary.com/dqkt0g0he/video/upload/v1749929916/Animated-web-screens-_remix_kgl1k0.mp4"
            className="w-full h-[94%] md:h-[92%] rounded-[20px] object-cover object-top"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </motion.div>
  );
}
