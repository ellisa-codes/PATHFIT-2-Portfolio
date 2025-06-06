"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, AlertCircle } from "lucide-react"

export function CookingVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Google Drive video configuration
  const videoId = "1QAtT3Uv9ejItcWs-FWixYktE42tT44W5"
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`
  const directUrl = `https://drive.google.com/file/d/${videoId}/view?usp=sharing`

  useEffect(() => {
    // Set loading timeout
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(loadingTimer)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const openInNewTab = () => {
    window.open(directUrl, "_blank", "noopener,noreferrer")
  }

  const handleIframeError = () => {
    setVideoError(true)
    setIsLoading(false)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    setVideoError(false)
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Cooking Video</h2>
        <p className="text-lg text-muted-foreground">
          Watch our step-by-step cooking demonstration from the PATHFIT Cocina session, featuring the preparation of our
          signature Krispi Prince recipe and other healthy dishes.
        </p>
      </div>

      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30">
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            PATHFIT Cocina Cooking Demonstration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center z-10">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-white">
                    <p className="font-medium">Loading Video...</p>
                    <p className="text-sm text-white/70">Please wait while we load the content</p>
                  </div>
                </div>
              </div>
            )}

            {videoError ? (
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-6">
                  <AlertCircle className="w-16 h-16 text-red-400 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">Video Unavailable</h3>
                    <p className="text-white/80 text-sm max-w-md">
                      The video cannot be embedded directly. Click the button below to watch it on Google Drive.
                    </p>
                  </div>
                  <Button onClick={openInNewTab} className="bg-orange-600 hover:bg-orange-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on Google Drive
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 w-full h-full"
                  src={embedUrl}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title="PATHFIT Cocina Cooking Video"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  style={{ border: "none" }}
                />

                {/* Fallback overlay for interaction */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-4 right-4">
                    <Button
                      onClick={openInNewTab}
                      className="bg-black/50 hover:bg-black/70 text-white pointer-events-auto"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open in Drive
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Enhanced Video Information */}
          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-semibold">PATHFIT Cocina Cooking Demonstration</h4>
                <p className="text-sm text-muted-foreground">Duration: 1:59 minutes • HD Quality</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={openInNewTab}>
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Full Screen
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Description */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Proper ingredient preparation and mise en place</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Healthy cooking techniques for crispy textures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Pinggang Pinoy plating and presentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Nutritional balance in meal composition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Team collaboration in cooking activities</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Video Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span>Ingredient Preparation</span>
                <span className="text-muted-foreground">0:00 - 0:28</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Krispi Prince Cooking</span>
                <span className="text-muted-foreground">0:29 - 1:49</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Plating & Presentation</span>
                <span className="text-muted-foreground">1:50 - 1:59</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Access Instructions */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Play className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Video Access Information</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                If the video doesn't play automatically, click the "Open in Drive" button to watch it directly on Google
                Drive. This ensures the best viewing experience with full video controls and HD quality.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Button onClick={openInNewTab} className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Now on Google Drive
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
