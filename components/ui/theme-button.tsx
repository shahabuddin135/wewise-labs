"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const maskId = React.useId()

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative flex items-center justify-center ${className}`}
      style={{
        height: '2.4em',
        width: '2.4em',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDark ? (
          <path
            d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z"
            fill="white"
          />
        ) : (
          // 🌙 MOON — gray colored with mask and rotation
          <>
            <mask id={maskId}>
              <rect width="24" height="24" fill="white" />
              <circle cx="16" cy="8" r="10" fill="black" />
            </mask>
            <circle
              cx="12"
              cy="12"
              r="10" // increased from 10 to 12
              fill="gray"
              mask={`url(#${maskId})`}
              transform="rotate(-10 12 12)"
            />
          </>
        )}
      </svg>
    </button>
  )
}