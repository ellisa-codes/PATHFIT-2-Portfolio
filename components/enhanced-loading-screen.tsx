"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface EnhancedLoadingScreenProps {
  progress: number
  onLoadingComplete: () => void
  isComplete: boolean
}

export function EnhancedLoadingScreen({ progress, onLoadingComplete, isComplete }: EnhancedLoadingScreenProps) {
  const [displayProgress, setDisplayProgress] = useState(0)
  const [showCompletion, setShowCompletion] = useState(false)

  // Smooth progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        const diff = progress - prev
        if (Math.abs(diff) < 0.1) return progress
        return prev + diff * 0.1
      })
    }, 16)

    return () => clearInterval(timer)
  }, [progress])

  // Handle completion
  useEffect(() => {
    if (isComplete && displayProgress >= 99) {
      setShowCompletion(true)
      const timer = setTimeout(() => {
        onLoadingComplete()
      }, 1500) // Show completion state for 1.5 seconds

      return () => clearTimeout(timer)
    }
  }, [isComplete, displayProgress, onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <div className="text-center space-y-8">
        {/* Gojo GIF Container */}
        <div className="relative w-40 h-40 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/40292388/file/original-9bb249318f9fbd76a396e6040de3f6c6.gif"
              alt="Gojo loading animation"
              fill
              className="rounded-full object-cover"
              unoptimized
              priority
            />
          </div>

          {/* Completion Ring */}
          {showCompletion && (
            <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping"></div>
          )}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white animate-pulse">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {showCompletion ? "Ready!" : "Loading PATHFIT Journey"}
            </span>
          </h1>

          {/* Progress Bar */}
          <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(displayProgress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="space-y-2">
            <p className="text-white/80 text-lg font-medium">{Math.round(displayProgress)}%</p>
            <p className="text-white/60 text-sm">
              {showCompletion
                ? "All assets loaded successfully!"
                : displayProgress < 30
                  ? "Initializing components..."
                  : displayProgress < 60
                    ? "Loading images and data..."
                    : displayProgress < 90
                      ? "Preparing content..."
                      : "Almost ready..."}
            </p>
          </div>

          {/* Loading Details */}
          <div className="text-white/40 text-xs space-y-1">
            <p>Loading food activity images...</p>
            <p>Preparing advocacy content...</p>
            <p>Initializing interactive components...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
