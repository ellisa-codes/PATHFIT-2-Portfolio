"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./loading-screen"
import { CursorEffects } from "./cursor-effects"
import { ScrollProgressIndicator } from "./scroll-progress-indicator"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Preload some content
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 3000) // Maximum loading time

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ScrollProgressIndicator />
      <CursorEffects />
      {children}
    </>
  )
}
