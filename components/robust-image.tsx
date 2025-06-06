"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface RobustImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function RobustImage({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackSrc,
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  placeholder,
  blurDataURL,
  onLoad,
  onError,
  ...props
}: RobustImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadAttempts, setLoadAttempts] = useState(0)
  const retryCount = useRef(0)
  const maxRetries = 3

  // Generate a contextual placeholder SVG
  const generatePlaceholder = (w = 400, h = 300, text = "Image") => {
    const encodedText = encodeURIComponent(text)
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <circle cx="50%" cy="40%" r="20" fill="#d1d5db"/>
        <text x="50%" y="65%" textAnchor="middle" dy=".3em" fill="#6b7280" fontFamily="system-ui" fontSize="12" fontWeight="500">
          ${text}
        </text>
      </svg>
    `)}`
  }

  const handleError = () => {
    console.warn(`Image failed to load: ${currentSrc} (attempt ${loadAttempts + 1})`)

    setLoadAttempts((prev) => prev + 1)

    if (retryCount.current < maxRetries) {
      // Retry with cache busting
      retryCount.current++
      const cacheBuster = `?retry=${retryCount.current}&t=${Date.now()}`
      setTimeout(() => {
        setCurrentSrc(`${src}${cacheBuster}`)
      }, 1000 * retryCount.current)
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Try fallback source
      console.log(`Trying fallback source: ${fallbackSrc}`)
      setCurrentSrc(fallbackSrc)
      retryCount.current = 0
    } else {
      // Show contextual placeholder
      setHasError(true)
      setIsLoading(false)
      const contextText = alt.includes("meal") ? "Meal Photo" : alt.includes("activity") ? "Activity Photo" : "Photo"
      setCurrentSrc(generatePlaceholder(width || 400, height || 300, contextText))
    }

    onError?.()
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
    onLoad?.()
  }

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src)
    setHasError(false)
    setIsLoading(true)
    setLoadAttempts(0)
    retryCount.current = 0
  }, [src])

  // Preload image for better UX
  useEffect(() => {
    if (priority && src) {
      const img = new window.Image()
      img.src = src
      img.onload = () => setIsLoading(false)
      img.onerror = handleError
    }
  }, [src, priority])

  if (hasError && !currentSrc.startsWith("data:")) {
    return (
      <div
        className={`bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 ${className}`}
        style={{ width: width || "100%", height: height || "auto" }}
      >
        <div className="text-center p-4">
          <div className="mb-2 text-2xl">📷</div>
          <div className="text-sm font-medium">Photo unavailable</div>
          <button
            onClick={() => {
              setHasError(false)
              setIsLoading(true)
              setLoadAttempts(0)
              retryCount.current = 0
              setCurrentSrc(src)
            }}
            className="mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const imageProps = {
    src: currentSrc,
    alt,
    className: `${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`,
    onError: handleError,
    onLoad: handleLoad,
    priority,
    quality,
    placeholder: placeholder || "empty",
    blurDataURL,
    ...props,
  }

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image {...imageProps} fill sizes={sizes} />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    )
  }

  if (width && height) {
    return (
      <div className="relative">
        <Image {...imageProps} width={width} height={height} />
        {isLoading && (
          <div
            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center"
            style={{ width, height }}
          >
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    )
  }

  // Fallback for cases where dimensions aren't provided
  return (
    <div className="relative">
      <img {...imageProps} style={{ maxWidth: "100%", height: "auto" }} />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
