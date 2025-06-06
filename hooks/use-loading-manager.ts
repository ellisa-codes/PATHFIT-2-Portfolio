"use client"

import { useState, useEffect, useCallback } from "react"

interface LoadingState {
  images: Set<string>
  data: Set<string>
  isComplete: boolean
  progress: number
}

interface UseLoadingManagerReturn {
  loadingState: LoadingState
  registerImage: (src: string) => void
  markImageLoaded: (src: string) => void
  registerData: (key: string) => void
  markDataLoaded: (key: string) => void
  resetLoading: () => void
}

export function useLoadingManager(): UseLoadingManagerReturn {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    images: new Set(),
    data: new Set(),
    isComplete: false,
    progress: 0,
  })

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [loadedData, setLoadedData] = useState<Set<string>>(new Set())

  const registerImage = useCallback((src: string) => {
    setLoadingState((prev) => ({
      ...prev,
      images: new Set([...prev.images, src]),
    }))
  }, [])

  const markImageLoaded = useCallback((src: string) => {
    setLoadedImages((prev) => new Set([...prev, src]))
  }, [])

  const registerData = useCallback((key: string) => {
    setLoadingState((prev) => ({
      ...prev,
      data: new Set([...prev.data, key]),
    }))
  }, [])

  const markDataLoaded = useCallback((key: string) => {
    setLoadedData((prev) => new Set([...prev, key]))
  }, [])

  const resetLoading = useCallback(() => {
    setLoadingState({
      images: new Set(),
      data: new Set(),
      isComplete: false,
      progress: 0,
    })
    setLoadedImages(new Set())
    setLoadedData(new Set())
  }, [])

  // Calculate progress and completion status
  useEffect(() => {
    const totalImages = loadingState.images.size
    const totalData = loadingState.data.size
    const totalAssets = totalImages + totalData

    const loadedImagesCount = Array.from(loadingState.images).filter((img) => loadedImages.has(img)).length

    const loadedDataCount = Array.from(loadingState.data).filter((data) => loadedData.has(data)).length

    const totalLoaded = loadedImagesCount + loadedDataCount
    const progress = totalAssets > 0 ? (totalLoaded / totalAssets) * 100 : 0
    const isComplete = totalAssets > 0 && totalLoaded === totalAssets

    setLoadingState((prev) => ({
      ...prev,
      isComplete,
      progress,
    }))
  }, [loadingState.images, loadingState.data, loadedImages, loadedData])

  return {
    loadingState,
    registerImage,
    markImageLoaded,
    registerData,
    markDataLoaded,
    resetLoading,
  }
}
