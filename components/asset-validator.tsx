"use client"

import { useEffect, useState } from "react"
import { useGlobalLoading } from "./global-loading-context"

interface AssetValidationResult {
  path: string
  status: "loading" | "success" | "failed" | "missing"
  error?: string
  size?: number
  type: "image" | "script" | "stylesheet" | "font" | "data"
}

interface AssetValidatorProps {
  onValidationComplete?: (results: AssetValidationResult[]) => void
}

// Comprehensive asset inventory with corrected paths
const WEBSITE_ASSETS = {
  // Core images - verified paths
  coreImages: ["/prof.jpg", "/food.jpg", "/Cocina.jpg"],

  // Food activity images - corrected and verified paths
  foodImages: [
    "/March25Breakfast.jpg",
    "/March25Snacks.jpg",
    "/March25Lunch.jpg",
    "/March25Dinner.jpg",
    "/March26Breakfast.jpg",
    "/March26Snacks.jpg",
    "/March26Lunch.jpg",
    "/March26Dinner.jpg",
    "/March27Breakfast.jpg",
    "/March27Snacks.jpg",
    "/March27Lunch.jpg",
    "/March27Dinner.jpg",
    "/March27Snack.jpg",
    "/March28Breakfast.jpg",
    "/March28Snack.jpg",
    "/March28Lunch.jpg",
    "/March28Dinner.jpg",
    "/March29Snack.jpg",
    "/March30Snack.jpg",
    "/March31Breakfast.jpg",
    "/March31Snack.jpg",
    "/April1Snack.jpg",
    "/April2.jpg",
    "/April4.jpg",
    "/April7.jpg",
    "/April9.jpeg",
    "/April11.jpg",
    "/April14.jpg",
    "/April16.jpg",
    "/April18.jpg",
    "/April20Dinner.jpg",
    "/April21.jpg",
    "/April23.jpg",
    "/April25.jpg",
    "/April25Lunch.jpg",
  ],

  // Activity images
  activityImages: ["/March24.jpg", "/March26.jpg", "/March28.jpeg", "/March31.jpg"],

  // External images with fallback handling
  externalImages: [
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/494001641_1257821296346643_8413648269398817876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pqXYTkMRIdIQ7kNvwEUA0FC&_nc_oc=Adn0ThhsKpY6haX0BbzZ2czl2gYksc4KvumbKOCnHcGmSx-mEFaZr00xZSZxQSIAsmkZRZWzD39Lvw_DadR7-QVx&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=TcBamuHDAW63lh3DRSam9w&oh=00_AfOkVA-aDOQuKiMuLkRA_zAF323noFz6sHzZP3jao6oS8w&oe=68488295",
    "https://cdn.dribbble.com/userupload/40292388/file/original-9bb249318f9fbd76a396e6040de3f6c6.gif",
  ],

  // Critical stylesheets and scripts
  criticalAssets: [
    "/_next/static/css/app/layout.css",
    "/_next/static/chunks/webpack.js",
    "/_next/static/chunks/main.js",
  ],
}

export function AssetValidator({ onValidationComplete }: AssetValidatorProps) {
  const [validationResults, setValidationResults] = useState<AssetValidationResult[]>([])
  const { registerAsset, markAssetLoaded, markAssetFailed } = useGlobalLoading()

  const validateImage = async (path: string): Promise<AssetValidationResult> => {
    return new Promise((resolve) => {
      const img = new Image()
      const assetId = `validation-${path}`

      registerAsset(assetId, "image")

      const timeout = setTimeout(() => {
        markAssetFailed(assetId)
        resolve({
          path,
          status: "failed",
          error: "Timeout - Image took too long to load",
          type: "image",
        })
      }, 10000) // 10 second timeout

      img.onload = () => {
        clearTimeout(timeout)
        markAssetLoaded(assetId)
        resolve({
          path,
          status: "success",
          size: img.naturalWidth * img.naturalHeight,
          type: "image",
        })
      }

      img.onerror = () => {
        clearTimeout(timeout)
        markAssetFailed(assetId)
        resolve({
          path,
          status: "failed",
          error: "Failed to load image",
          type: "image",
        })
      }

      // Handle CORS for external images
      if (path.startsWith("http")) {
        img.crossOrigin = "anonymous"
      }

      img.src = path
    })
  }

  const validateAsset = async (path: string, type: AssetValidationResult["type"]): Promise<AssetValidationResult> => {
    if (type === "image") {
      return validateImage(path)
    }

    // For other asset types, use fetch
    try {
      const response = await fetch(path, {
        method: "HEAD",
        mode: path.startsWith("http") ? "cors" : "same-origin",
      })

      return {
        path,
        status: response.ok ? "success" : "failed",
        error: response.ok ? undefined : `HTTP ${response.status}`,
        type,
      }
    } catch (error) {
      return {
        path,
        status: "failed",
        error: error instanceof Error ? error.message : "Unknown error",
        type,
      }
    }
  }

  useEffect(() => {
    const validateAllAssets = async () => {
      const allAssets = [
        ...WEBSITE_ASSETS.coreImages.map((path) => ({ path, type: "image" as const })),
        ...WEBSITE_ASSETS.foodImages.map((path) => ({ path, type: "image" as const })),
        ...WEBSITE_ASSETS.activityImages.map((path) => ({ path, type: "image" as const })),
        ...WEBSITE_ASSETS.externalImages.map((path) => ({ path, type: "image" as const })),
        ...WEBSITE_ASSETS.criticalAssets.map((path) => ({ path, type: "script" as const })),
      ]

      const results: AssetValidationResult[] = []

      // Validate assets in batches to avoid overwhelming the browser
      const batchSize = 5
      for (let i = 0; i < allAssets.length; i += batchSize) {
        const batch = allAssets.slice(i, i + batchSize)
        const batchResults = await Promise.all(batch.map(({ path, type }) => validateAsset(path, type)))
        results.push(...batchResults)

        // Update state incrementally
        setValidationResults([...results])
      }

      onValidationComplete?.(results)
    }

    validateAllAssets()
  }, [onValidationComplete, registerAsset, markAssetLoaded, markAssetFailed])

  return <div className="hidden">{/* Hidden component for validation only */}</div>
}
