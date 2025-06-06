"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <div className="text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Image
              src="https://cdn.dribbble.com/userupload/40292388/file/original-9bb249318f9fbd76a396e6040de3f6c6.gif"
              alt="Gojo loading animation"
              fill
              className="rounded-full object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white animate-pulse">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loading PATHFIT Journey
            </span>
          </h1>

          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-white/80 animate-pulse">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
