"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

interface ImageStatus {
  url: string
  status: "loading" | "success" | "error" | "blocked"
  location: string
  alternative?: string
  lastChecked: Date
}

// Extract all image URLs from the website
const imageInventory = [
  // External URLs that may be problematic
  {
    url: "https://williamsrecord.com/wp-content/uploads/2022/02/News_Mental-Health_-Goel.jpg",
    location: "Advocacy page - Mental health campaign",
    alternative: "/mental-health-advocacy.jpg",
  },
  {
    url: "https://rightsidestory.com/wp-content/uploads/2023/02/15.png",
    location: "Advocacy page - Students workshop",
    alternative: "/students-workshop.jpg",
  },
  {
    url: "https://sites.dartmouth.edu/mindfulness/files/2023/05/Copy-of-20230418-Meditation-kl-00-8.jpg",
    location: "Advocacy page - Mindfulness meditation",
    alternative: "/mindfulness-meditation.jpg",
  },
  {
    url: "https://www.malvernbh.com/wp-content/uploads/2022/03/shutterstock_508251865-1-min-1-scaled.jpg",
    location: "Advocacy page - Peer support",
    alternative: "/peer-support.jpg",
  },
  {
    url: "https://images.theconversation.com/files/482162/original/file-20220831-12-x7euw1.jpg?ixlib=rb-4.1.0&rect=33%2C517%2C7315%2C3657&q=45&auto=format&w=1356&h=668&fit=crop",
    location: "Advocacy page - Self-care activities",
    alternative: "/self-care-activities.jpg",
  },
  {
    url: "https://www.shutterstock.com/image-photo/portrait-cool-young-asian-philippines-260nw-2038343798.jpg",
    location: "Advocacy page - Success story Alex",
    alternative: "/success-story-alex.jpg",
  },
  {
    url: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/270f70ec-1d93-485d-9747-ca4450ba921d/2024-09-17T11:39:23.979Z.jpg",
    location: "Advocacy page - Success story Hannah",
    alternative: "/success-story-hannah.jpg",
  },
  {
    url: "https://www.shutterstock.com/image-photo/modern-education-concept-portrait-smiling-260nw-2018780909.jpg",
    location: "Advocacy page - Success story Dave",
    alternative: "/success-story-dave.jpg",
  },
  {
    url: "https://www.shutterstock.com/image-illustration/did-you-know-concept-image-260nw-2101066714.jpg",
    location: "Homepage - Health trivias section",
    alternative: "/health-trivias-banner.jpg",
  },
  {
    url: "https://pbs.twimg.com/media/E7iddi3VkAQeG5L.jpg",
    location: "Food activity page - Pinggang Pinoy guide",
    alternative: "/pinggang-pinoy-guide.jpg",
  },
  // Recipe images from Unsplash
  {
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    location: "Recipe section - Power bowl",
    alternative: "/recipe-power-bowl.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=800&h=600&fit=crop",
    location: "Recipe section - Vegetable lumpia",
    alternative: "/recipe-vegetable-lumpia.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    location: "Recipe section - Quinoa adobo bowl",
    alternative: "/recipe-quinoa-adobo.jpg",
  },
]

export function ImageManager() {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([])
  const [isChecking, setIsChecking] = useState(false)

  const checkImageStatus = async (url: string): Promise<"success" | "error" | "blocked"> => {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        mode: "no-cors", // This will help with CORS issues but limits response info
      })

      // With no-cors, we can't read the status, so we'll assume success if no error
      return "success"
    } catch (error) {
      // Try to determine if it's a CORS/blocking issue or actual error
      try {
        const img = new Image()
        img.crossOrigin = "anonymous"

        return new Promise((resolve) => {
          img.onload = () => resolve("success")
          img.onerror = () => resolve("error")
          img.src = url

          // Timeout after 5 seconds
          setTimeout(() => resolve("blocked"), 5000)
        })
      } catch {
        return "error"
      }
    }
  }

  const checkAllImages = async () => {
    setIsChecking(true)
    const statuses: ImageStatus[] = []

    for (const image of imageInventory) {
      const status = await checkImageStatus(image.url)
      statuses.push({
        url: image.url,
        status,
        location: image.location,
        alternative: image.alternative,
        lastChecked: new Date(),
      })
    }

    setImageStatuses(statuses)
    setIsChecking(false)
  }

  useEffect(() => {
    checkAllImages()
  }, [])

  const getStatusIcon = (status: ImageStatus["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "blocked":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />
    }
  }

  const getStatusColor = (status: ImageStatus["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "error":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "blocked":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    }
  }

  const problemImages = imageStatuses.filter((img) => img.status === "error" || img.status === "blocked")
  const workingImages = imageStatuses.filter((img) => img.status === "success")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Image Status Monitor</h2>
          <p className="text-muted-foreground">Monitor and manage image availability across your website</p>
        </div>
        <Button onClick={checkAllImages} disabled={isChecking}>
          <RefreshCw className={`h-4 w-4 mr-2 ${isChecking ? "animate-spin" : ""}`} />
          {isChecking ? "Checking..." : "Check All Images"}
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-600">{workingImages.length}</p>
                <p className="text-sm text-muted-foreground">Working Images</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold text-red-600">{problemImages.length}</p>
                <p className="text-sm text-muted-foreground">Problem Images</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-yellow-600">
                  {imageStatuses.filter((img) => img.status === "blocked").length}
                </p>
                <p className="text-sm text-muted-foreground">Blocked/CORS Issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Problem Images Alert */}
      {problemImages.length > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {problemImages.length} images are experiencing issues. Consider replacing them with local alternatives.
          </AlertDescription>
        </Alert>
      )}

      {/* Detailed Image Status */}
      <Card>
        <CardHeader>
          <CardTitle>Image Status Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {imageStatuses.map((image, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">{getStatusIcon(image.status)}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getStatusColor(image.status)}>{image.status.toUpperCase()}</Badge>
                    <span className="text-sm text-muted-foreground">
                      Last checked: {image.lastChecked.toLocaleTimeString()}
                    </span>
                  </div>

                  <p className="font-medium text-sm mb-1">{image.location}</p>
                  <p className="text-xs text-muted-foreground break-all mb-2">{image.url}</p>

                  {image.alternative && (
                    <p className="text-xs text-blue-600">Suggested alternative: {image.alternative}</p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 border rounded overflow-hidden bg-gray-100">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt="Preview"
                      width={64}
                      height={64}
                      className="object-cover"
                      onError={() => {
                        // Update status if image fails to load
                        setImageStatuses((prev) =>
                          prev.map((img) => (img.url === image.url ? { ...img, status: "error" as const } : img)),
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
