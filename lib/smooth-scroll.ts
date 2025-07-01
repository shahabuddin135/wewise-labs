"use client"

import { useEffect } from "react"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        const smoother = ScrollSmoother.get()
        if (smoother) {
          smoother.scrollTo(targetElement, true, "top top")
        } else {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])
}