"use client"

import { useEffect, useState } from "react"

export function CursorEffects() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [outerCursorPosition, setOuterCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target
      if (
        target instanceof Element &&
        target.matches('button, a, [role="button"], input, textarea, .cursor-pointer, .interactive-element')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target
      if (
        target instanceof Element &&
        target.matches('button, a, [role="button"], input, textarea, .cursor-pointer, .interactive-element')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  // Smooth trailing effect for outer cursor
  useEffect(() => {
    const animateOuterCursor = () => {
      setOuterCursorPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.1,
        y: prev.y + (cursorPosition.y - prev.y) * 0.1,
      }))
    }

    const interval = setInterval(animateOuterCursor, 16) // ~60fps
    return () => clearInterval(interval)
  }, [cursorPosition])

  return (
    <>
      {/* Inner cursor - small circle that follows cursor directly */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px)`,
        }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      {/* Outer cursor - larger circle that trails behind */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovering ? "scale-150 opacity-80" : "scale-100 opacity-60"
        }`}
        style={{
          transform: `translate(${outerCursorPosition.x - 16}px, ${outerCursorPosition.y - 16}px)`,
        }}
      >
        <div
          className="w-8 h-8 border-2 border-gradient-to-r from-pink-400 to-purple-400 rounded-full border-opacity-60"
          style={{
            borderImage: "linear-gradient(45deg, rgba(244, 114, 182, 0.6), rgba(168, 85, 247, 0.6)) 1",
          }}
        />
      </div>
    </>
  )
}
