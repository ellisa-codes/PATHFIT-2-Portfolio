"use client"

import { useState, useEffect } from "react"
import { Wifi, WifiOff } from "lucide-react"

export function NetworkStatusHandler() {
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineMessage, setShowOfflineMessage] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowOfflineMessage(false)

      // Reload failed assets when coming back online
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowOfflineMessage(true)
    }

    // Set initial state
    setIsOnline(navigator.onLine)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!showOfflineMessage) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-3 text-center">
      <div className="flex items-center justify-center gap-2">
        {isOnline ? (
          <>
            <Wifi className="w-5 h-5" />
            <span>Connection restored! Reloading...</span>
          </>
        ) : (
          <>
            <WifiOff className="w-5 h-5" />
            <span>No internet connection. Some features may not work properly.</span>
          </>
        )}
      </div>
    </div>
  )
}
