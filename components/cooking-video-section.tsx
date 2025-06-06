"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export function CookingVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
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
          <div className="relative aspect-video bg-gradient-to-br from-orange-400/20 to-red-600/20">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">Cooking Demonstration Video</h3>
                  <p className="text-white/80">Step-by-step Krispi Prince preparation</p>
                  <p className="text-white/60 text-sm">Duration: 8:45 minutes</p>
                </div>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={togglePlay}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <span className="text-white text-sm">0:00 / 8:45</span>
                </div>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                <div className="bg-white h-1 rounded-full w-0 transition-all duration-300"></div>
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
                <span>Introduction & Setup</span>
                <span className="text-muted-foreground">0:00 - 1:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ingredient Preparation</span>
                <span className="text-muted-foreground">1:30 - 3:15</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Krispi Prince Cooking</span>
                <span className="text-muted-foreground">3:15 - 6:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Plating & Presentation</span>
                <span className="text-muted-foreground">6:00 - 7:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Final Results & Tasting</span>
                <span className="text-muted-foreground">7:30 - 8:45</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
