"use client"

import { useEffect } from "react"
import { useGlobalLoading } from "./global-loading-context"
import { EnhancedAssetPreloader } from "./enhanced-asset-preloader"

// Critical data endpoints with fallback handling
const DATA_ENDPOINTS = [
  {
    id: "food-log-complete-data",
    description: "Food activity log data",
    critical: true,
  },
  {
    id: "activity-schedule-data",
    description: "PE activity schedule",
    critical: true,
  },
  {
    id: "recipe-database",
    description: "Recipe collection",
    critical: false,
  },
  {
    id: "trivia-questions-bank",
    description: "Health trivia questions",
    critical: false,
  },
  {
    id: "advocacy-content-data",
    description: "Advocacy page content",
    critical: true,
  },
  {
    id: "pe-day-activities",
    description: "PE day activity data",
    critical: true,
  },
  {
    id: "health-tips-data",
    description: "Health tips content",
    critical: false,
  },
  {
    id: "reflection-content",
    description: "Reflection essays",
    critical: true,
  },
  {
    id: "contact-form-config",
    description: "Contact form configuration",
    critical: false,
  },
  {
    id: "navigation-data",
    description: "Navigation structure",
    critical: true,
  },
]

export function ComprehensiveAssetPreloader() {
  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()

  useEffect(() => {
    // Register all data endpoints
    DATA_ENDPOINTS.forEach((endpoint) => {
      registerAsset(endpoint.id, "data")
    })

    // Load data with enhanced error handling
    const loadAllData = async () => {
      const criticalEndpoints = DATA_ENDPOINTS.filter((ep) => ep.critical)
      const nonCriticalEndpoints = DATA_ENDPOINTS.filter((ep) => !ep.critical)

      // Load critical data first
      await Promise.allSettled(
        criticalEndpoints.map(async (endpoint) => {
          try {
            // Simulate realistic data loading with retries
            await loadDataWithRetry(endpoint.id, 3)
            markAssetLoaded(endpoint.id)
          } catch (error) {
            console.error(`Critical data load failed: ${endpoint.id}`, error)
            // For critical data, try to provide fallback
            try {
              await loadFallbackData(endpoint.id)
              markAssetLoaded(endpoint.id)
            } catch (fallbackError) {
              markAssetFailed(endpoint.id)
            }
          }
        }),
      )

      // Load non-critical data
      await Promise.allSettled(
        nonCriticalEndpoints.map(async (endpoint) => {
          try {
            await loadDataWithRetry(endpoint.id, 2)
            markAssetLoaded(endpoint.id)
          } catch (error) {
            console.warn(`Non-critical data load failed: ${endpoint.id}`, error)
            markAssetFailed(endpoint.id)
          }
        }),
      )
    }

    const loadDataWithRetry = async (endpointId: string, maxRetries: number): Promise<void> => {
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          // Simulate data loading with realistic timing
          const loadTime = Math.random() * 300 + 100 // 100-400ms
          await new Promise((resolve) => setTimeout(resolve, loadTime))

          // Simulate potential network issues
          if (Math.random() < 0.1 && attempt === 1) {
            throw new Error("Simulated network error")
          }

          // Simulate specific data processing
          if (endpointId === "food-log-complete-data") {
            await new Promise((resolve) => setTimeout(resolve, 200))
          }

          return // Success
        } catch (error) {
          if (attempt === maxRetries) {
            throw error
          }
          // Wait before retry with exponential backoff
          await new Promise((resolve) => setTimeout(resolve, attempt * 1000))
        }
      }
    }

    const loadFallbackData = async (endpointId: string): Promise<void> => {
      // Simulate loading cached or default data
      await new Promise((resolve) => setTimeout(resolve, 100))
      console.log(`Loaded fallback data for: ${endpointId}`)
    }

    loadAllData()
  }, [registerAsset, markAssetLoaded, markAssetFailed])

  return <EnhancedAssetPreloader />
}
