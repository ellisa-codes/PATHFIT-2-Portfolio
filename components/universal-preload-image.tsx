"use client"

import { useState, useEffect } from "react"
import { useGlobalLoading } from "./global-loading-context"

interface UniversalPreloadImageProps {
  src: string
  priority?: boolean
  assetId: string
  fallbackSrc?: string
  onLoad?: () => void
  onError?: (error: string) => void
}

export function UniversalPreloadImage({
  src,
  priority = false,
  assetId,
  fallbackSrc,
  onLoad,
  onError,
}: UniversalPreloadImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [attempts, setAttempts] = useState(0)
  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()

  useEffect(() => {
    registerAsset(assetId, "image")
  }, [assetId, registerAsset])

  useEffect(() => {
    const img = new Image()
    const maxAttempts = 3
    const timeout = setTimeout(() => {
      handleError("Timeout exceeded")
    }, 10000)

    const handleSuccess = () => {
      clearTimeout(timeout)
      markAssetLoaded(assetId)
      onLoad?.()
    }

    const handleError = (errorMsg: string) => {
      clearTimeout(timeout)

      if (attempts === 0 && fallbackSrc && currentSrc !== fallbackSrc) {
        // Try fallback
        setCurrentSrc(fallbackSrc)
        setAttempts(1)
        return
      }

      if (attempts < maxAttempts - 1) {
        // Retry with delay
        setTimeout(
          () => {
            setAttempts((prev) => prev + 1)
          },
          1000 * (attempts + 1),
        )
        return
      }

      // Final failure
      markAssetFailed(assetId)
      onError?.(errorMsg)
    }

    img.onload = handleSuccess
    img.onerror = () => handleError("Load failed")

    // Handle CORS for external images
    if (currentSrc.startsWith("http")) {
      img.crossOrigin = "anonymous"
    }

    img.src = currentSrc

    return () => {
      clearTimeout(timeout)
      img.onload = null
      img.onerror = null
    }
  }, [currentSrc, attempts, assetId, fallbackSrc, markAssetLoaded, markAssetFailed, onLoad, onError])

  return null // This is a preloader component, no visual output
}
