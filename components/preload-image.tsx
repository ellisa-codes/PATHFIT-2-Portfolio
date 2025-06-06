"use client"

import { useEffect } from "react"
import { useLoading } from "./loading-context"

interface PreloadImageProps {
  src: string
  priority?: boolean
}

export function PreloadImage({ src, priority = false }: PreloadImageProps) {
  const { registerImage, markImageLoaded } = useLoading()

  useEffect(() => {
    if (!src || src.startsWith("/placeholder.svg")) return

    registerImage(src)

    const img = new Image()
    img.crossOrigin = "anonymous"

    const handleLoad = () => {
      markImageLoaded(src)
    }

    const handleError = () => {
      // Mark as loaded even on error to prevent infinite loading
      markImageLoaded(src)
    }

    img.addEventListener("load", handleLoad)
    img.addEventListener("error", handleError)

    img.src = src

    return () => {
      img.removeEventListener("load", handleLoad)
      img.removeEventListener("error", handleError)
    }
  }, [src, registerImage, markImageLoaded])

  return null
}
