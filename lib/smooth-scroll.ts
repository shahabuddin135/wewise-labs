"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if the anchor has a hash and is an internal link
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        // Get the height of the navbar (assuming it's fixed)
        const navbar = document.querySelector("header")
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight - 20, // Additional offset for spacing
          behavior: "smooth",
        })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
