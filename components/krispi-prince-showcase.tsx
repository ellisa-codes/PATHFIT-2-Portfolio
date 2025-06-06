"use client"

import { useState, useCallback } from "react"
import { RobustImage } from "@/components/robust-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Star, Clock, Users, ChefHat } from "lucide-react"

export function KrispiPrinceShowcase() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const toggleVideo = useCallback(() => {
    setIsVideoPlaying((prev) => !prev)
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Featured Recipe: Krispi Prince
          </h2>
          <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our signature creation that perfectly balances flavor, nutrition, and visual appeal - showcasing the
          creativity of PATHFIT Cocina
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Recipe Video */}
        <Card className="overflow-hidden border-2 border-yellow-200 dark:border-yellow-800 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Krispi Prince Cooking Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              {/* Video placeholder with controls */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">Krispi Prince Cooking Video</p>
                  <p className="text-white/80 text-sm">Step-by-step preparation guide</p>
                </div>
              </div>

              {/* Video controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleVideo}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleMute}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <Badge className="bg-white/20 backdrop-blur-sm text-white">3:45</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recipe Details */}
        <Card className="border-2 border-yellow-200 dark:border-yellow-800 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Krispi Prince Recipe</CardTitle>
              <div className="flex items-center gap-1" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>25 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>4 servings</span>
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="h-4 w-4" />
                <span>Medium</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Description</h4>
              <p className="text-muted-foreground">
                Krispi Prince is our innovative take on crispy fried chicken that follows Pinggang Pinoy guidelines.
                This recipe combines perfectly seasoned chicken with a golden, crunchy coating, served alongside
                nutritious vegetables and whole grains for a complete, balanced meal.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="outline" className="justify-center">
                  High Protein
                </Badge>
                <Badge variant="outline" className="justify-center">
                  Balanced Nutrition
                </Badge>
                <Badge variant="outline" className="justify-center">
                  Filipino Fusion
                </Badge>
                <Badge variant="outline" className="justify-center">
                  Student Favorite
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Nutritional Highlights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Calories per serving:</span>
                  <span className="font-medium">420</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein:</span>
                  <span className="font-medium">32g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohydrates:</span>
                  <span className="font-medium">28g</span>
                </div>
                <div className="flex justify-between">
                  <span>Healthy Fats:</span>
                  <span className="font-medium">18g</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                Chef's Special Note
              </h4>
              <p className="text-sm text-muted-foreground">
                "Krispi Prince represents the perfect fusion of taste and nutrition. We use air-frying techniques and
                whole grain coatings to create that beloved crispy texture while maintaining the health benefits our
                bodies need." - PATHFIT Cocina Team
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recipe Process Gallery */}
      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
          <CardTitle>Krispi Prince Process Gallery</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, title: "Marinating", description: "Marinating the chicken" },
              { step: 2, title: "Coating", description: "Coating the chicken" },
              { step: 3, title: "Cooking", description: "Air frying the chicken" },
              { step: 4, title: "Final+Dish", description: "Final plated Krispi Prince" },
            ].map((item) => (
              <div key={item.step} className="space-y-2">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <RobustImage
                    src={`/placeholder.svg?height=200&width=200&text=${item.title}`}
                    alt={item.description}
                    fill
                    className="object-cover"
                    fallbackSrc={`/placeholder.svg?height=200&width=200&text=Step+${item.step}`}
                  />
                </div>
                <p className="text-sm font-medium text-center">
                  Step {item.step}: {item.title.replace("+", " ")}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
