"use client"

import { useEffect, useState } from "react"
import { useGlobalLoading } from "./global-loading-context"
import { UniversalPreloadImage } from "./universal-preload-image"

// Enhanced asset inventory with multiple fallback options
const ENHANCED_ASSET_REGISTRY = {
  // Core images with local fallbacks
  coreImages: [
    {
      primary: "/prof.jpg",
      fallbacks: ["/placeholder.svg?height=400&width=400&text=Profile+Photo"],
      priority: "high" as const,
      description: "Profile Photo",
    },
    {
      primary: "/food.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=Food+Image"],
      priority: "high" as const,
      description: "Food Image",
    },
    {
      primary: "/Cocina.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=Kitchen+Image"],
      priority: "medium" as const,
      description: "Kitchen Image",
    },
  ],

  // Food activity images with systematic fallbacks
  foodActivityImages: [
    {
      primary: "/March25Breakfast.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+25+Breakfast"],
      priority: "medium" as const,
      description: "March 25 Breakfast",
    },
    {
      primary: "/March25Snacks.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+25+Snacks"],
      priority: "low" as const,
      description: "March 25 Snacks",
    },
    {
      primary: "/March25Lunch.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+25+Lunch"],
      priority: "medium" as const,
      description: "March 25 Lunch",
    },
    {
      primary: "/March25Dinner.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+25+Dinner"],
      priority: "medium" as const,
      description: "March 25 Dinner",
    },
    {
      primary: "/March26Breakfast.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+26+Breakfast"],
      priority: "low" as const,
      description: "March 26 Breakfast",
    },
    {
      primary: "/March26Snacks.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+26+Snacks"],
      priority: "low" as const,
      description: "March 26 Snacks",
    },
    {
      primary: "/March26Lunch.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+26+Lunch"],
      priority: "low" as const,
      description: "March 26 Lunch",
    },
    {
      primary: "/March26Dinner.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+26+Dinner"],
      priority: "low" as const,
      description: "March 26 Dinner",
    },
    {
      primary: "/March27Breakfast.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+27+Breakfast"],
      priority: "low" as const,
      description: "March 27 Breakfast",
    },
    {
      primary: "/March27Snacks.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+27+Snacks"],
      priority: "low" as const,
      description: "March 27 Snacks",
    },
    {
      primary: "/March27Lunch.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+27+Lunch"],
      priority: "low" as const,
      description: "March 27 Lunch",
    },
    {
      primary: "/March27Dinner.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+27+Dinner"],
      priority: "low" as const,
      description: "March 27 Dinner",
    },
    {
      primary: "/March27Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+27+Snack"],
      priority: "low" as const,
      description: "March 27 Snack",
    },
    {
      primary: "/March28Breakfast.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+28+Breakfast"],
      priority: "low" as const,
      description: "March 28 Breakfast",
    },
    {
      primary: "/March28Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+28+Snack"],
      priority: "low" as const,
      description: "March 28 Snack",
    },
    {
      primary: "/March28Lunch.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+28+Lunch"],
      priority: "low" as const,
      description: "March 28 Lunch",
    },
    {
      primary: "/March28Dinner.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+28+Dinner"],
      priority: "low" as const,
      description: "March 28 Dinner",
    },
    {
      primary: "/March29Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+29+Snack"],
      priority: "low" as const,
      description: "March 29 Snack",
    },
    {
      primary: "/March30Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+30+Snack"],
      priority: "low" as const,
      description: "March 30 Snack",
    },
    {
      primary: "/March31Breakfast.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+31+Breakfast"],
      priority: "low" as const,
      description: "March 31 Breakfast",
    },
    {
      primary: "/March31Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=March+31+Snack"],
      priority: "low" as const,
      description: "March 31 Snack",
    },
    {
      primary: "/April1Snack.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+1+Snack"],
      priority: "low" as const,
      description: "April 1 Snack",
    },
    {
      primary: "/April2.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+2+Activity"],
      priority: "low" as const,
      description: "April 2 Activity",
    },
    {
      primary: "/April4.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+4+Activity"],
      priority: "low" as const,
      description: "April 4 Activity",
    },
    {
      primary: "/April7.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+7+Activity"],
      priority: "low" as const,
      description: "April 7 Activity",
    },
    {
      primary: "/April9.jpeg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+9+Activity"],
      priority: "low" as const,
      description: "April 9 Activity",
    },
    {
      primary: "/April11.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+11+Activity"],
      priority: "low" as const,
      description: "April 11 Activity",
    },
    {
      primary: "/April14.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+14+Activity"],
      priority: "low" as const,
      description: "April 14 Activity",
    },
    {
      primary: "/April16.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+16+Activity"],
      priority: "low" as const,
      description: "April 16 Activity",
    },
    {
      primary: "/April18.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+18+Activity"],
      priority: "low" as const,
      description: "April 18 Activity",
    },
    {
      primary: "/April20Dinner.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+20+Dinner"],
      priority: "low" as const,
      description: "April 20 Dinner",
    },
    {
      primary: "/April21.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+21+Activity"],
      priority: "low" as const,
      description: "April 21 Activity",
    },
    {
      primary: "/April23.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+23+Activity"],
      priority: "low" as const,
      description: "April 23 Activity",
    },
    {
      primary: "/April25.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+25+Activity"],
      priority: "low" as const,
      description: "April 25 Activity",
    },
    {
      primary: "/April25Lunch.jpg",
      fallbacks: ["/placeholder.svg?height=300&width=400&text=April+25+Lunch"],
      priority: "low" as const,
      description: "April 25 Lunch",
    },
  ],

  // Activity images
  activityImages: [
    {
      primary: "/March24.jpg",
      fallbacks: ["/placeholder.svg?height=400&width=600&text=March+24+PE+Activity"],
      priority: "medium" as const,
      description: "March 24 PE Activity",
    },
    {
      primary: "/March26.jpg",
      fallbacks: ["/placeholder.svg?height=400&width=600&text=March+26+PE+Activity"],
      priority: "medium" as const,
      description: "March 26 PE Activity",
    },
    {
      primary: "/March28.jpeg",
      fallbacks: ["/placeholder.svg?height=400&width=600&text=March+28+PE+Activity"],
      priority: "medium" as const,
      description: "March 28 PE Activity",
    },
    {
      primary: "/March31.jpg",
      fallbacks: ["/placeholder.svg?height=400&width=600&text=March+31+PE+Activity"],
      priority: "medium" as const,
      description: "March 31 PE Activity",
    },
  ],

  // External images with robust fallbacks
  externalImages: [
    {
      primary:
        "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/494001641_1257821296346643_8413648269398817876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pqXYTkMRIdIQ7kNvwEUA0FC&_nc_oc=Adn0ThhsKpY6haX0BbzZ2czl2gYksc4KvumbKOCnHcGmSx-mEFaZr00xZSZxQSIAsmkZRZWzD39Lvw_DadR7-QVx&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=TcBamuHDAW63lh3DRSam9w&oh=00_AfOkVA-aDOQuKiMuLkRA_zAF323noFz6sHzZP3jao6oS8w&oe=68488295",
      fallbacks: ["/placeholder.svg?height=400&width=600&text=Advocacy+Image"],
      priority: "medium" as const,
      description: "Advocacy Content Image",
    },
    {
      primary: "https://cdn.dribbble.com/userupload/40292388/file/original-9bb249318f9fbd76a396e6040de3f6c6.gif",
      fallbacks: ["/placeholder.svg?height=200&width=200&text=Loading+Animation"],
      priority: "high" as const,
      description: "Gojo Loading Animation",
    },
  ],
}

// Flatten all assets
const getAllAssets = () => {
  return [
    ...ENHANCED_ASSET_REGISTRY.coreImages,
    ...ENHANCED_ASSET_REGISTRY.foodActivityImages,
    ...ENHANCED_ASSET_REGISTRY.activityImages,
    ...ENHANCED_ASSET_REGISTRY.externalImages,
  ]
}

export function EnhancedAssetPreloader() {
  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()
  const [loadingStats, setLoadingStats] = useState({
    total: 0,
    loaded: 0,
    failed: 0,
    inProgress: 0,
  })

  useEffect(() => {
    const allAssets = getAllAssets()
    setLoadingStats((prev) => ({ ...prev, total: allAssets.length }))

    // Register all assets
    allAssets.forEach((asset, index) => {
      registerAsset(`enhanced-${asset.primary}`, "image")
    })

    // Load assets in priority order
    const loadAssetsByPriority = async () => {
      const highPriority = allAssets.filter((a) => a.priority === "high")
      const mediumPriority = allAssets.filter((a) => a.priority === "medium")
      const lowPriority = allAssets.filter((a) => a.priority === "low")

      // Load high priority first
      await Promise.allSettled(highPriority.map((asset) => loadAssetWithFallbacks(asset, `enhanced-${asset.primary}`)))

      // Then medium priority
      await Promise.allSettled(
        mediumPriority.map((asset) => loadAssetWithFallbacks(asset, `enhanced-${asset.primary}`)),
      )

      // Finally low priority in batches
      const batchSize = 5
      for (let i = 0; i < lowPriority.length; i += batchSize) {
        const batch = lowPriority.slice(i, i + batchSize)
        await Promise.allSettled(batch.map((asset) => loadAssetWithFallbacks(asset, `enhanced-${asset.primary}`)))
        // Small delay between batches to prevent overwhelming
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }

    const loadAssetWithFallbacks = async (asset: (typeof allAssets)[0], assetId: string): Promise<void> => {
      setLoadingStats((prev) => ({ ...prev, inProgress: prev.inProgress + 1 }))

      // Try primary source first
      try {
        await loadSingleAsset(asset.primary)
        markAssetLoaded(assetId)
        setLoadingStats((prev) => ({
          ...prev,
          loaded: prev.loaded + 1,
          inProgress: prev.inProgress - 1,
        }))
        return
      } catch (error) {
        console.warn(`Primary asset failed: ${asset.primary}`, error)
      }

      // Try fallbacks
      for (const fallback of asset.fallbacks) {
        try {
          await loadSingleAsset(fallback)
          markAssetLoaded(assetId)
          setLoadingStats((prev) => ({
            ...prev,
            loaded: prev.loaded + 1,
            inProgress: prev.inProgress - 1,
          }))
          return
        } catch (error) {
          console.warn(`Fallback failed: ${fallback}`, error)
        }
      }

      // All attempts failed
      markAssetFailed(assetId)
      setLoadingStats((prev) => ({
        ...prev,
        failed: prev.failed + 1,
        inProgress: prev.inProgress - 1,
      }))
    }

    const loadSingleAsset = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        const timeout = setTimeout(() => {
          reject(new Error("Timeout"))
        }, 8000) // 8 second timeout

        img.onload = () => {
          clearTimeout(timeout)
          resolve()
        }

        img.onerror = () => {
          clearTimeout(timeout)
          reject(new Error("Load failed"))
        }

        // Handle CORS for external images
        if (src.startsWith("http")) {
          img.crossOrigin = "anonymous"
        }

        img.src = src
      })
    }

    loadAssetsByPriority()
  }, [registerAsset, markAssetLoaded, markAssetFailed])

  return (
    <div style={{ display: "none" }}>
      {/* Preload critical assets with enhanced fallback handling */}
      {getAllAssets()
        .filter((asset) => asset.priority === "high")
        .map((asset, index) => (
          <UniversalPreloadImage
            key={`enhanced-preload-${asset.primary}`}
            src={asset.primary}
            priority={true}
            assetId={`enhanced-${asset.primary}`}
            fallbackSrc={asset.fallbacks[0]}
          />
        ))}
    </div>
  )
}
