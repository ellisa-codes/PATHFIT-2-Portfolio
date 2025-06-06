"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface GlobalLoadingState {
  totalAssets: number
  loadedAssets: number
  progress: number
  isComplete: boolean
  hasShownLoadingScreen: boolean
  failedAssets: Set<string>
}

interface UseGlobalLoadingManagerReturn {
  loadingState: GlobalLoadingState
  registerAsset: (id: string, type: "image" | "data") => void
  markAssetLoaded: (id: string) => void
  markAssetFailed: (id: string) => void
  setLoadingScreenShown: () => void
  resetGlobalLoading: () => void
}

// Global asset registry to track all assets across the app
const globalAssetRegistry = new Map<string, { type: "image" | "data"; loaded: boolean; failed: boolean }>()

export function useGlobalLoadingManager(): UseGlobalLoadingManagerReturn {
  const [loadingState, setLoadingState] = useState<GlobalLoadingState>({
    totalAssets: 0,
    loadedAssets: 0,
    progress: 0,
    isComplete: false,
    hasShownLoadingScreen: false,
    failedAssets: new Set(),
  })

  const updateStateRef = useRef<() => void>()

  const updateLoadingState = useCallback(() => {
    const totalAssets = globalAssetRegistry.size
    const loadedAssets = Array.from(globalAssetRegistry.values()).filter((asset) => asset.loaded).length
    const failedAssets = new Set(
      Array.from(globalAssetRegistry.entries())
        .filter(([_, asset]) => asset.failed)
        .map(([id]) => id),
    )

    const progress = totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 0
    const isComplete = totalAssets > 0 && loadedAssets === totalAssets

    // Check if loading screen has been shown before
    const hasShownLoadingScreen =
      typeof window !== "undefined" ? localStorage.getItem("pathfit-loading-shown") === "true" : false

    setLoadingState({
      totalAssets,
      loadedAssets,
      progress,
      isComplete,
      hasShownLoadingScreen,
      failedAssets,
    })
  }, [])

  updateStateRef.current = updateLoadingState

  const registerAsset = useCallback((id: string, type: "image" | "data") => {
    if (!globalAssetRegistry.has(id)) {
      globalAssetRegistry.set(id, { type, loaded: false, failed: false })
      updateStateRef.current?.()
    }
  }, [])

  const markAssetLoaded = useCallback((id: string) => {
    const asset = globalAssetRegistry.get(id)
    if (asset && !asset.loaded) {
      asset.loaded = true
      asset.failed = false
      updateStateRef.current?.()
    }
  }, [])

  const markAssetFailed = useCallback((id: string) => {
    const asset = globalAssetRegistry.get(id)
    if (asset && !asset.loaded) {
      asset.failed = true
      updateStateRef.current?.()
    }
  }, [])

  const setLoadingScreenShown = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pathfit-loading-shown", "true")
    }
    setLoadingState((prev) => ({ ...prev, hasShownLoadingScreen: true }))
  }, [])

  const resetGlobalLoading = useCallback(() => {
    globalAssetRegistry.clear()
    if (typeof window !== "undefined") {
      localStorage.removeItem("pathfit-loading-shown")
    }
    setLoadingState({
      totalAssets: 0,
      loadedAssets: 0,
      progress: 0,
      isComplete: false,
      hasShownLoadingScreen: false,
      failedAssets: new Set(),
    })
  }, [])

  // Initialize state on mount
  useEffect(() => {
    updateLoadingState()
  }, [updateLoadingState])

  return {
    loadingState,
    registerAsset,
    markAssetLoaded,
    markAssetFailed,
    setLoadingScreenShown,
    resetGlobalLoading,
  }
}
