"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  // Determine checked state: checked = dark, unchecked = light
  const isDark = theme === "dark"
  // Unique mask id for SVG to avoid conflicts
  const maskId = React.useId()

  // Handle toggle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light")
  }

  return (
    <div className={`relative flex items-center justify-center ${className} mr-0 md:mr-2`} style={{height: '2.8em', width: '2.8em'}}>
      <label
        htmlFor="themeToggle"
        className="themeToggle st-sunMoonThemeToggleBtn flex items-center justify-center transition-colors duration-300"
        tabIndex={0}
        aria-label="Toggle theme"
        style={{ width: '2.8em', height: '2.8em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'transparent', border: 'none', boxShadow: 'none' }}
      >
        <input
          type="checkbox"
          id="themeToggle"
          className="themeToggleInput"
          checked={isDark}
          onChange={handleChange}
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="text-gray-500 dark:text-white"
          style={{ position: 'relative', left: 0, top: 0 }}
        >
          <mask id={maskId}>
            <rect x="0" y="0" width="24" height="24" fill="white"></rect>
            <circle cx="16" cy="8" r="10" fill="black"></circle>
          </mask>
          <circle
            className="sunMoon"
            cx="12"
            cy="12"
            r="10"
            mask={`url(#${maskId})`}
          ></circle>
          <g>
            <circle className="sunRay sunRay1" cx="22" cy="12" r="1.7"></circle>
            <circle className="sunRay sunRay2" cx="18" cy="20.392" r="1.7"></circle>
            <circle className="sunRay sunRay3" cx="6" cy="20.392" r="1.7"></circle>
            <circle className="sunRay sunRay4" cx="2" cy="12" r="1.7"></circle>
            <circle className="sunRay sunRay5" cx="6" cy="3.607" r="1.7"></circle>
            <circle className="sunRay sunRay6" cx="18" cy="3.607" r="1.7"></circle>
          </g>
        </svg>
      </label>
    </div>
  )
}
