"use client"

import { useEffect } from "react"

interface AssetErrorHandlerProps {
  onError?: (error: string) => void
}

export function AssetErrorHandler({ onError }: AssetErrorHandlerProps) {
  useEffect(() => {
    // Handle CSS loading errors
    const handleCSSError = (event: Event) => {
      const target = event.target as HTMLLinkElement
      if (target && target.tagName === "LINK" && target.rel === "stylesheet") {
        console.warn(`CSS failed to load: ${target.href}`)

        // Create fallback inline styles for critical CSS
        const fallbackCSS = document.createElement("style")
        fallbackCSS.textContent = `
          /* Critical fallback styles */
          body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 0; }
          .container { max-width: 1200px; margin: 0 auto; padding: 1rem; }
          .btn { padding: 0.5rem 1rem; border: 1px solid #ccc; background: #f5f5f5; cursor: pointer; }
          .btn:hover { background: #e5e5e5; }
          .card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem; margin: 1rem 0; }
          .text-center { text-align: center; }
          .hidden { display: none; }
          .flex { display: flex; }
          .grid { display: grid; }
          .space-y-4 > * + * { margin-top: 1rem; }
          .space-x-4 > * + * { margin-left: 1rem; }
        `
        document.head.appendChild(fallbackCSS)

        onError?.(`CSS loading failed: ${target.href}`)
      }
    }

    // Handle script loading errors
    const handleScriptError = (event: Event) => {
      const target = event.target as HTMLScriptElement
      if (target && target.tagName === "SCRIPT") {
        console.warn(`Script failed to load: ${target.src}`)

        // For critical scripts, provide fallbacks
        if (target.src.includes("webpack") || target.src.includes("main")) {
          // These are Next.js chunks - the app should still work without them
          // as Next.js has built-in fallbacks
          console.info("Next.js chunk failed to load, but app should continue working")
        }

        onError?.(`Script loading failed: ${target.src}`)
      }
    }

    // Handle image loading errors globally
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement
      if (target && target.tagName === "IMG") {
        console.warn(`Image failed to load: ${target.src}`)

        // Set a fallback image
        if (!target.dataset.fallbackAttempted) {
          target.dataset.fallbackAttempted = "true"
          target.src = `data:image/svg+xml;base64,${btoa(`
            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#f3f4f6"/>
              <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#6b7280" fontFamily="system-ui" fontSize="14">
                Image not available
              </text>
            </svg>
          `)}`
          target.alt = "Image not available"
        }
      }
    }

    // Add global error listeners
    document.addEventListener("error", handleCSSError, true)
    document.addEventListener("error", handleScriptError, true)
    document.addEventListener("error", handleImageError, true)

    // Handle unhandled promise rejections (for fetch failures)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.warn("Unhandled promise rejection:", event.reason)

      // If it's a fetch error, handle gracefully
      if (event.reason instanceof TypeError && event.reason.message.includes("fetch")) {
        console.info("Network request failed, but application will continue")
        event.preventDefault() // Prevent the error from being logged to console
      }
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    // Cleanup
    return () => {
      document.removeEventListener("error", handleCSSError, true)
      document.removeEventListener("error", handleScriptError, true)
      document.removeEventListener("error", handleImageError, true)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [onError])

  return null
}
