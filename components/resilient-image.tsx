"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useGlobalLoading } from "./global-loading-context"

interface ResilientImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fallbackSrc?: string
  fallbackText?: string
  onLoadSuccess?: () => void
  onLoadError?: (error: string) => void
}

// Fallback image generator
const generateFallbackSrc = (text: string, width = 400, height = 300) => {
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

export function ResilientImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
  quality = 75,
  fallbackSrc,
  fallbackText,
  onLoadSuccess,
  onLoadError,
}: ResilientImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [loadAttempts, setLoadAttempts] = useState<string[]>([])

  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()
  const assetId = `resilient-${src}`

  // Register asset on mount
  useEffect(() => {
    registerAsset(assetId, "image")
  }, [assetId, registerAsset])

  const handleLoadSuccess = useCallback(() => {
    setIsLoading(false)
    setHasError(false)
    markAssetLoaded(assetId)
    onLoadSuccess?.()
  }, [assetId, markAssetLoaded, onLoadSuccess])

  const handleLoadError = useCallback(() => {
    const errorMsg = `Failed to load: ${currentSrc} (attempt ${retryCount + 1})`
    setLoadAttempts((prev) => [...prev, currentSrc])

    // Try fallback strategies
    if (retryCount === 0 && fallbackSrc && currentSrc !== fallbackSrc) {
      // First retry: use provided fallback
      setCurrentSrc(fallbackSrc)
      setRetryCount(1)
      return
    }

    if (retryCount === 1 && !currentSrc.includes("placeholder.svg")) {
      // Second retry: use generated placeholder
      const placeholder = generateFallbackSrc(fallbackText || alt || "Image not available", width, height)
      setCurrentSrc(placeholder)
      setRetryCount(2)
      return
    }

    // Final failure
    setIsLoading(false)
    setHasError(true)
    markAssetFailed(assetId)
    onLoadError?.(errorMsg)
  }, [currentSrc, retryCount, fallbackSrc, fallbackText, alt, width, height, assetId, markAssetFailed, onLoadError])

  // Reset when src changes
  useEffect(() => {
    if (src !== currentSrc && retryCount === 0) {
      setCurrentSrc(src)
      setIsLoading(true)
      setHasError(false)
      setRetryCount(0)
      setLoadAttempts([])
    }
  }, [src, currentSrc, retryCount])

  if (hasError && retryCount >= 2) {
    return (
      <div
        className={`bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-4 ${className}`}
        style={fill ? undefined : { width, height }}
      >
        <div className="text-center space-y-2">
          <div className="text-gray-400 text-2xl">🖼️</div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Image unavailable</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs">{alt}</p>
          {loadAttempts.length > 0 && (
            <details className="text-xs text-gray-400 mt-2">
              <summary className="cursor-pointer">Failed attempts ({loadAttempts.length})</summary>
              <ul className="mt-1 space-y-1">
                {loadAttempts.map((attempt, i) => (
                  <li key={i} className="truncate">
                    {attempt}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    )
  }

  const imageProps = {
    src: currentSrc,
    alt,
    className: `transition-all duration-300 ${isLoading ? "opacity-50" : "opacity-100"} ${className}`,
    onLoad: handleLoadSuccess,
    onError: handleLoadError,
    priority,
    quality,
    ...(fill ? { fill: true, sizes } : { width, height }),
  }

  return (
    <div className="relative">
      <Image {...imageProps} />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-gray-500">Loading...</p>
            {retryCount > 0 && <p className="text-xs text-yellow-600">Retry {retryCount}/2</p>}
          </div>
        </div>
      )}
    </div>
  )
}
