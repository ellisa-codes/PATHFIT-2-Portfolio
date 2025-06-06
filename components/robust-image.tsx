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
  ...props
}: RobustImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const retryCount = useRef(0)
  const maxRetries = 3

  // Generate a placeholder SVG
  const generatePlaceholder = (w = 400, h = 300, text = "Image") => {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#6b7280" fontFamily="system-ui" fontSize="14">
          ${text}
        </text>
      </svg>
    `)}`
  }

  const handleError = () => {
    console.warn(`Image failed to load: ${currentSrc}`)

    if (retryCount.current < maxRetries) {
      // Retry with a delay
      retryCount.current++
      setTimeout(() => {
        setCurrentSrc(`${src}?retry=${retryCount.current}`)
      }, 1000 * retryCount.current)
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Try fallback source
      setCurrentSrc(fallbackSrc)
      retryCount.current = 0
    } else {
      // Show placeholder
      setHasError(true)
      setIsLoading(false)
      setCurrentSrc(generatePlaceholder(width, height, "Image unavailable"))
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src)
    setHasError(false)
    setIsLoading(true)
    retryCount.current = 0
  }, [src])

  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ width: width || "100%", height: height || "auto" }}
      >
        <div className="text-center p-4">
          <div className="mb-2">📷</div>
          <div>Image not available</div>
          <button
            onClick={() => {
              setHasError(false)
              setIsLoading(true)
              retryCount.current = 0
              setCurrentSrc(src)
            }}
            className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
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
    className: `${className} ${isLoading ? "opacity-50" : "opacity-100"} transition-opacity duration-300`,
    onError: handleError,
    onLoad: handleLoad,
    priority,
    quality,
    placeholder,
    blurDataURL,
    ...props,
  }

  if (fill) {
    return <Image {...imageProps} fill sizes={sizes} />
  }

  if (width && height) {
    return <Image {...imageProps} width={width} height={height} />
  }

  // Fallback for cases where dimensions aren't provided
  return <img {...imageProps} style={{ maxWidth: "100%", height: "auto" }} />
}
