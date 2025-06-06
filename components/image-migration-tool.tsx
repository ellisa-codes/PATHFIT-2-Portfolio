"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Download, Copy, CheckCircle, AlertTriangle } from "lucide-react"

interface ImageMigrationPlan {
  originalUrl: string
  newPath: string
  location: string
  priority: "high" | "medium" | "low"
  status: "pending" | "downloaded" | "uploaded" | "complete"
}

const migrationPlan: ImageMigrationPlan[] = [
  {
    originalUrl: "https://williamsrecord.com/wp-content/uploads/2022/02/News_Mental-Health_-Goel.jpg",
    newPath: "/images/advocacy/mental-health-campaign.jpg",
    location: "Advocacy page - Mental health campaign header",
    priority: "high",
    status: "pending",
  },
  {
    originalUrl: "https://rightsidestory.com/wp-content/uploads/2023/02/15.png",
    newPath: "/images/advocacy/students-workshop.jpg",
    location: "Advocacy page - Students workshop",
    priority: "high",
    status: "pending",
  },
  {
    originalUrl: "https://pbs.twimg.com/media/E7iddi3VkAQeG5L.jpg",
    newPath: "/images/food-activity/pinggang-pinoy-guide.jpg",
    location: "Food activity page - Pinggang Pinoy guide",
    priority: "high",
    status: "pending",
  },
  {
    originalUrl: "https://www.shutterstock.com/image-illustration/did-you-know-concept-image-260nw-2101066714.jpg",
    newPath: "/images/homepage/health-trivias-banner.jpg",
    location: "Homepage - Health trivias section",
    priority: "medium",
    status: "pending",
  },
  {
    originalUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    newPath: "/images/recipes/power-bowl.jpg",
    location: "Recipe section - Pinggang Pinoy power bowl",
    priority: "medium",
    status: "pending",
  },
]

export function ImageMigrationTool() {
  const [plan, setPlan] = useState<ImageMigrationPlan[]>(migrationPlan)
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const downloadImage = async (url: string, filename: string) => {
    try {
      // In a real implementation, this would download the image
      // For now, we'll simulate the process
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return true
    } catch (error) {
      console.error("Download failed:", error)
      return false
    }
  }

  const processImageMigration = async () => {
    setIsProcessing(true)

    for (let i = 0; i < plan.length; i++) {
      setCurrentStep(i + 1)
      const item = plan[i]

      // Simulate download
      const success = await downloadImage(item.originalUrl, item.newPath)

      setPlan((prev) =>
        prev.map((planItem, index) =>
          index === i ? { ...planItem, status: success ? "complete" : "pending" } : planItem,
        ),
      )
    }

    setIsProcessing(false)
    setCurrentStep(0)
  }

  const generateCodeUpdates = () => {
    const updates = plan.map((item) => ({
      file: getFileFromLocation(item.location),
      oldUrl: item.originalUrl,
      newPath: item.newPath,
    }))

    return updates
  }

  const getFileFromLocation = (location: string) => {
    if (location.includes("Advocacy")) return "app/advocacy/page.tsx"
    if (location.includes("Food activity")) return "app/food-activity/page.tsx"
    if (location.includes("Homepage")) return "app/page.tsx"
    if (location.includes("Recipe")) return "components/recipe-section.tsx"
    return "Unknown file"
  }

  const codeUpdates = generateCodeUpdates()
  const progress = isProcessing ? (currentStep / plan.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Image Migration Tool</h2>
          <p className="text-muted-foreground">Migrate external images to local hosting</p>
        </div>
        <Button
          onClick={processImageMigration}
          disabled={isProcessing}
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
        >
          {isProcessing ? (
            <>
              <Download className="h-4 w-4 mr-2 animate-bounce" />
              Processing... ({currentStep}/{plan.length})
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Start Migration
            </>
          )}
        </Button>
      </div>

      {isProcessing && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Migration Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground">
                Processing: {plan[currentStep - 1]?.location || "Preparing..."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Migration Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Migration Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {plan.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {item.status === "complete" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        item.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : item.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.priority.toUpperCase()} PRIORITY
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        item.status === "complete" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status.toUpperCase()}
                    </span>
                  </div>

                  <p className="font-medium text-sm mb-1">{item.location}</p>
                  <p className="text-xs text-muted-foreground mb-1">From: {item.originalUrl}</p>
                  <p className="text-xs text-blue-600">To: {item.newPath}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Updates Required */}
      <Card>
        <CardHeader>
          <CardTitle>Required Code Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              After downloading images, update these files to use the new local paths:
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {codeUpdates.map((update, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{update.file}</h4>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Update
                  </Button>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <Label className="text-red-600">Replace:</Label>
                    <code className="block p-2 bg-red-50 rounded text-xs break-all">src="{update.oldUrl}"</code>
                  </div>
                  <div>
                    <Label className="text-green-600">With:</Label>
                    <code className="block p-2 bg-green-50 rounded text-xs">src="{update.newPath}"</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Manual Download Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Manual Download Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <Download className="h-4 w-4" />
              <AlertDescription>Follow these steps to manually download and organize images:</AlertDescription>
            </Alert>

            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                Create the following directory structure in your <code>public</code> folder:
              </li>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <code>public/images/advocacy/</code>
                </li>
                <li>
                  <code>public/images/food-activity/</code>
                </li>
                <li>
                  <code>public/images/homepage/</code>
                </li>
                <li>
                  <code>public/images/recipes/</code>
                </li>
              </ul>
              <li>Right-click each external image URL and "Save image as..." to the appropriate folder</li>
              <li>Rename files according to the migration plan above</li>
              <li>Update the source code to use the new local paths</li>
              <li>Test all images are loading correctly</li>
              <li>Deploy the updated code</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
