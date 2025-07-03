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
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ height: '2em', width: '2em' }}
    >
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="themeToggle st-sunMoonThemeToggleBtn"
        style={{
          width: '2em',
          height: '2em',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          background: 'transparent',
          border: 'none',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isDark ? (
            // 🌞 SUN — black center + black dots (rays)
            <>
              <circle cx="12" cy="12" r="4" fill="white" />
              <circle cx="22" cy="12" r="1.7" fill="white" />
              <circle cx="18" cy="20.392" r="1.7" fill="white" />
              <circle cx="6" cy="20.392" r="1.7" fill="white" />
              <circle cx="2" cy="12" r="1.7" fill="white" />
              <circle cx="6" cy="3.607" r="1.7" fill="white" />
              <circle cx="18" cy="3.607" r="1.7" fill="white" />
            </>
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
                r="10"
                fill="gray"
                mask={`url(#${maskId})`}
                transform="rotate(-40 12 12)"
              />
            </>
          )}
        </svg>
      </button>
    </div>
  )
}
