"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLoading } from "./loading-context"

interface SmartImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  onError?: () => void
  fallbackText?: string
}

export function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
  onError,
  fallbackText,
  ...props
}: SmartImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { registerImage, markImageLoaded } = useLoading()

  useEffect(() => {
    if (src && !src.startsWith("/placeholder.svg")) {
      registerImage(src)
    }
  }, [src, registerImage])

  const handleLoad = () => {
    setIsLoaded(true)
    if (src && !src.startsWith("/placeholder.svg")) {
      markImageLoaded(src)
    }
  }

  const handleError = () => {
    setImageError(true)
    if (src && !src.startsWith("/placeholder.svg")) {
      markImageLoaded(src) // Mark as loaded to prevent infinite loading
    }
    onError?.()
  }

  const imageSrc = imageError
    ? `/placeholder.svg?height=${height || 400}&width=${width || 400}&text=${encodeURIComponent(fallbackText || alt)}`
    : src

  return (
    <div className={`relative ${!isLoaded ? "animate-pulse bg-gray-200 dark:bg-gray-700" : ""}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        priority={priority}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
