"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useGlobalLoadingManager } from "@/hooks/use-global-loading-manager"

interface GlobalLoadingContextType {
  loadingState: {
    totalAssets: number
    loadedAssets: number
    progress: number
    isComplete: boolean
    hasShownLoadingScreen: boolean
    failedAssets: Set<string>
  }
  registerAsset: (id: string, type: "image" | "data") => void
  markAssetLoaded: (id: string) => void
  markAssetFailed: (id: string) => void
  setLoadingScreenShown: () => void
  resetGlobalLoading: () => void
}

const GlobalLoadingContext = createContext<GlobalLoadingContextType | undefined>(undefined)

export function GlobalLoadingProvider({ children }: { children: ReactNode }) {
  const loadingManager = useGlobalLoadingManager()

  return <GlobalLoadingContext.Provider value={loadingManager}>{children}</GlobalLoadingContext.Provider>
}

export function useGlobalLoading() {
  const context = useContext(GlobalLoadingContext)
  if (context === undefined) {
    throw new Error("useGlobalLoading must be used within a GlobalLoadingProvider")
  }
  return context
}
