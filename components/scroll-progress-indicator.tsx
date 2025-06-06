"use client"

import { useEffect, useState } from "react"

export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: scrollProgress > 0 ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none",
        }}
      />
    </div>
  )
}
