"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useSmoothScroll() {
  const router = useRouter()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      // Handle hash links (both on same page and cross-page)
      if (href.startsWith("#")) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          e.preventDefault()

          const smoother = (window as any).ScrollSmoother?.get()
          if (smoother) {
            smoother.scrollTo(targetElement, true, "top top")
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
      // Handle cross-page hash links (e.g., /#services)
      else if (href.includes("#")) {
        const [path, hash] = href.split("#")
        const targetId = hash
        
        e.preventDefault()

        // If we're already on the target page, just scroll to the element
        if (path === window.location.pathname || path === "/") {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            const smoother = (window as any).ScrollSmoother?.get()
            if (smoother) {
              smoother.scrollTo(targetElement, true, "top top")
            } else {
              targetElement.scrollIntoView({ behavior: "smooth" })
            }
          }
        } else {
          // Navigate to the page with hash
          router.push(href)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [router])
}