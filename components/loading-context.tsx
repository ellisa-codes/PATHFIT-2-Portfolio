"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useLoadingManager } from "@/hooks/use-loading-manager"

interface LoadingContextType {
  loadingState: {
    images: Set<string>
    data: Set<string>
    isComplete: boolean
    progress: number
  }
  registerImage: (src: string) => void
  markImageLoaded: (src: string) => void
  registerData: (key: string) => void
  markDataLoaded: (key: string) => void
  resetLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const loadingManager = useLoadingManager()

  return <LoadingContext.Provider value={loadingManager}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
