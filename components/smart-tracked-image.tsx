"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useGlobalLoading } from "./global-loading-context"

interface SmartTrackedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function SmartTrackedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 75,
}: SmartTrackedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()

  const assetId = `tracked-image-${src}`

  useEffect(() => {
    registerAsset(assetId, "image")
  }, [assetId, registerAsset])

  const handleLoad = () => {
    setIsLoaded(true)
    markAssetLoaded(assetId)
  }

  const handleError = () => {
    setHasError(true)
    markAssetFailed(assetId)
  }

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    className: `transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    quality,
    ...(fill ? { fill: true, sizes } : { width, height }),
  }

  return (
    <div className="relative">
      <Image {...imageProps} />
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
