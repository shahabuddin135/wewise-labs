"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    ScrollSmoother?: {
      get: () => { scrollTo: (el: Element, smooth: boolean, position: string) => void }
    }
  }
}

export function ScrollHandler() {
  const pathname = usePathname()
  const hasScrolledRef = useRef(false)
  const lastPathnameRef = useRef(pathname)

  useEffect(() => {
    if (typeof window === "undefined") return

    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          // Prevent multiple scrolls
          if (hasScrolledRef.current) return
          hasScrolledRef.current = true

          setTimeout(() => {
            const smoother = (window as Window).ScrollSmoother?.get()
            if (smoother) {
              smoother.scrollTo(el, true, "top top")
            } else {
              el.scrollIntoView({ behavior: "smooth" })
            }
            
            // Reset flag after scroll
            setTimeout(() => {
              hasScrolledRef.current = false
            }, 1000)
          }, 300) // Increased delay to ensure page is fully loaded
        }
      }
    }

    // Only reset scroll flag if pathname actually changed
    if (lastPathnameRef.current !== pathname) {
      hasScrolledRef.current = false
      lastPathnameRef.current = pathname
    }

    // Scroll on mount and when pathname changes
    scrollToHash()

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      window.removeEventListener("hashchange", scrollToHash)
    }
  }, [pathname])

  return null
}
