"use client"

import { useEffect } from "react"
import { useLoading } from "./loading-context"
import { PreloadImage } from "./preload-image"

// All critical images that need to be preloaded
const criticalImages = [
  // Profile and main images
  "/prof.jpg",
  "/food.jpg",
  "/Cocina.jpg",

  // Food activity images
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

  // Activity images
  "/March24.jpg",
  "/March26.jpg",
  "/March28.jpeg",
  "/March31.jpg",

  // External images (high priority)
  "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/494001641_1257821296346643_8413648269398817876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pqXYTkMRIdIQ7kNvwEUA0FC&_nc_oc=Adn0ThhsKpY6haX0BbzZ2czl2gYksc4KvumbKOCnHcGmSx-mEFaZr00xZSZxQSIAsmkZRZWzD39Lvw_DadR7-QVx&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=TcBamuHDAW63lh3DRSam9w&oh=00_AfOkVA-aDOQuKiMuLkRA_zAF323noFz6sHzZP3jao6oS8w&oe=68488295",
  "https://williamsrecord.com/wp-content/uploads/2022/02/News_Mental-Health_-Goel.jpg",
  "https://rightsidestory.com/wp-content/uploads/2023/02/15.png",
  "https://www.shutterstock.com/image-illustration/did-you-know-concept-image-260nw-2101066714.jpg",
]

// Critical data that needs to be loaded
const criticalData = ["food-log-data", "activity-schedule-data", "recipe-data", "trivia-questions", "advocacy-content"]

export function AssetPreloader() {
  const { registerData, markDataLoaded } = useLoading()

  useEffect(() => {
    // Register all critical data
    criticalData.forEach((dataKey) => {
      registerData(dataKey)
    })

    // Simulate data loading (replace with actual data fetching)
    const loadData = async () => {
      for (const dataKey of criticalData) {
        // Simulate async data loading
        await new Promise((resolve) => setTimeout(resolve, 100))
        markDataLoaded(dataKey)
      }
    }

    loadData()
  }, [registerData, markDataLoaded])

  return (
    <>
      {/* Preload all critical images */}
      {criticalImages.map((src, index) => (
        <PreloadImage
          key={src}
          src={src}
          priority={index < 10} // First 10 images are high priority
        />
      ))}
    </>
  )
}
