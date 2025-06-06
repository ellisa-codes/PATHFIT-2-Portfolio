"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface PersistentGojoLoadingScreenProps {
  progress: number
  totalAssets: number
  loadedAssets: number
  onLoadingComplete: () => void
  isComplete: boolean
  failedAssets: Set<string>
}

export function PersistentGojoLoadingScreen({
  progress,
  totalAssets,
  loadedAssets,
  onLoadingComplete,
  isComplete,
  failedAssets,
}: PersistentGojoLoadingScreenProps) {
  const [displayProgress, setDisplayProgress] = useState(0)
  const [showCompletion, setShowCompletion] = useState(false)
  const [loadingPhase, setLoadingPhase] = useState<"initializing" | "loading" | "finalizing" | "complete">(
    "initializing",
  )
  const [gojoImageError, setGojoImageError] = useState(false)

  // Smooth progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        const diff = progress - prev
        if (Math.abs(diff) < 0.1) return progress
        return prev + diff * 0.15
      })
    }, 16)

    return () => clearInterval(timer)
  }, [progress])

  // Update loading phase based on progress
  useEffect(() => {
    if (displayProgress < 10) {
      setLoadingPhase("initializing")
    } else if (displayProgress < 95) {
      setLoadingPhase("loading")
    } else if (displayProgress < 100) {
      setLoadingPhase("finalizing")
    } else {
      setLoadingPhase("complete")
    }
  }, [displayProgress])

  // Handle completion with improved logic
  useEffect(() => {
    if (isComplete && displayProgress >= 99) {
      setShowCompletion(true)
      const timer = setTimeout(() => {
        onLoadingComplete()
      }, 1500) // Reduced completion time

      return () => clearTimeout(timer)
    }
  }, [isComplete, displayProgress, onLoadingComplete])

  const getLoadingMessage = () => {
    switch (loadingPhase) {
      case "initializing":
        return "Initializing PATHFIT Portfolio..."
      case "loading":
        if (displayProgress < 30) return "Loading core components..."
        if (displayProgress < 60) return "Loading food activity images..."
        if (displayProgress < 80) return "Loading advocacy content..."
        return "Loading final assets..."
      case "finalizing":
        return "Finalizing experience..."
      case "complete":
        return "Ready to explore!"
      default:
        return "Loading..."
    }
  }

  const getDetailedStatus = () => {
    if (showCompletion) {
      const successCount = totalAssets - failedAssets.size
      return `${successCount}/${totalAssets} assets loaded successfully!`
    }

    const failed = failedAssets.size
    if (failed > 0) {
      return `${loadedAssets}/${totalAssets} assets loaded (${failed} failed)`
    }

    return `${loadedAssets}/${totalAssets} assets loaded`
  }

  const getFailureMessage = () => {
    const failed = failedAssets.size
    if (failed === 0) return null

    if (failed <= 2) {
      return `⚠ ${failed} assets failed to load but continuing...`
    } else if (failed <= 5) {
      return `⚠ ${failed} assets failed - using fallbacks...`
    } else {
      return `⚠ ${failed} assets failed - some content may be limited`
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative text-center space-y-8 z-10">
        {/* Gojo GIF Container with enhanced styling and fallback */}
        <div className="relative w-48 h-48 mx-auto">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>

          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 animate-pulse"></div>

          {/* Inner container */}
          <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-white/20">
            {!gojoImageError ? (
              <Image
                src="https://cdn.dribbble.com/userupload/40292388/file/original-9bb249318f9fbd76a396e6040de3f6c6.gif"
                alt="Gojo loading animation"
                fill
                className="rounded-full object-cover scale-110"
                unoptimized
                priority
                onError={() => setGojoImageError(true)}
              />
            ) : (
              // Fallback when Gojo GIF fails to load
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold animate-pulse">PF</div>
              </div>
            )}
          </div>

          {/* Completion effect */}
          {showCompletion && (
            <>
              <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-pulse"></div>
            </>
          )}

          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - displayProgress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="space-y-6 max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {showCompletion ? "Welcome!" : "PATHFIT Journey"}
            </span>
          </h1>

          {/* Enhanced Progress Bar */}
          <div className="relative">
            <div className="w-96 h-4 bg-white/10 rounded-full overflow-hidden mx-auto backdrop-blur-sm border border-white/20">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${Math.min(displayProgress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                <div className="absolute right-0 top-0 w-2 h-full bg-white/50 animate-pulse"></div>
              </div>
            </div>

            {/* Progress percentage */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <span className="text-2xl font-bold text-white tabular-nums">{Math.round(displayProgress)}%</span>
            </div>
          </div>

          {/* Loading status */}
          <div className="space-y-3">
            <p className="text-white/90 text-lg font-medium">{getLoadingMessage()}</p>
            <p className="text-white/70 text-sm">{getDetailedStatus()}</p>
          </div>

          {/* Loading details */}
          <div className="text-white/50 text-xs space-y-1 max-w-xs mx-auto">
            <p>✓ Preparing interactive components</p>
            <p>✓ Loading food activity gallery</p>
            <p>✓ Initializing advocacy content</p>
            <p>✓ Setting up portfolio sections</p>
          </div>

          {/* Enhanced failed assets warning */}
          {failedAssets.size > 0 && (
            <div className="text-yellow-400 text-xs bg-yellow-900/20 rounded-lg p-3 border border-yellow-500/30">
              <p>{getFailureMessage()}</p>
              {failedAssets.size > 0 && (
                <p className="mt-1 text-yellow-300/70">Fallback content will be used where needed</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
