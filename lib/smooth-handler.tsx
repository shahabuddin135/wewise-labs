"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
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
