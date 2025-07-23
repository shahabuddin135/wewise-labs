"use client";

import { useEffect, useState, useRef } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useTheme } from "next-themes";

const FLIGHT_DURATION = 1000; // ms
const FADE_DURATION = 3000; // ms

export default function ScrollToTopButton({ minScrollY = 400 }: { minScrollY?: number }) {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > minScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScrollY]);
  
  const bgClass = theme === "dark"
    ? "bg-gray-100 border-gray-300 border-2"
    : "bg-gray-900 border-gray-700 border-2";

  if (!visible) return null;

  return (
    <button
      ref={buttonRef}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-16 right-10 z-50 rounded-full shadow-lg p-1 group transition hover:scale-105 focus:outline-none ${bgClass}`}
      style={{ width: 36, height: 36, overflow: "visible" }}
    >
      <BorderBeam size={36} thickness={10} duration={4} colorFrom="#ffaa40" colorTo="#9c40ff" />
      <BorderBeam size={28} thickness={6} duration={3.2} colorFrom="#ffeb3b" colorTo="#40c9ff" style={{ zIndex: 1 }} />
      <span
        className="relative z-10 flex items-center justify-center"
        style={{ width: 20, height: 20, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -60%)", pointerEvents: "none" }}
      >
        {/* Up arrow SVG */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-white dark:stroke-black" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </span>
    </button>
  );
} 