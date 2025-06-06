"use client"

import { useState, useEffect } from "react"
import { RobustImage } from "@/components/robust-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Utensils, Activity, ChevronLeft, ChevronRight } from "lucide-react"

interface FoodLogEntry {
  date: string
  meals: {
    [key: string]: {
      foods: string[]
      photo: string
    }
  }
}

interface ActivityEntry {
  date: string
  day: string
  photo: string
  activities: Array<{
    time: string
    activity: string
    duration: string
    intensity: string
  }>
}

interface ScrollableLogContainerProps {
  foodLog: FoodLogEntry[]
  activitySchedule: ActivityEntry[]
}

export function ScrollableLogContainer({ foodLog, activitySchedule }: ScrollableLogContainerProps) {
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0)
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const itemsPerView = 3

  // Auto-scroll functionality with slower transition
  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setCurrentFoodIndex((prev) => (prev + itemsPerView >= foodLog.length ? 0 : prev + 1))
      setCurrentActivityIndex((prev) => (prev + itemsPerView >= activitySchedule.length ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoScrolling, foodLog.length, activitySchedule.length])

  const handleFoodNavigation = (direction: "prev" | "next") => {
    setIsAutoScrolling(false)
    if (direction === "prev") {
      setCurrentFoodIndex((prev) => (prev === 0 ? Math.max(0, foodLog.length - itemsPerView) : prev - 1))
    } else {
      setCurrentFoodIndex((prev) => (prev + itemsPerView >= foodLog.length ? 0 : prev + 1))
    }
  }

  const handleActivityNavigation = (direction: "prev" | "next") => {
    setIsAutoScrolling(false)
    if (direction === "prev") {
      setCurrentActivityIndex((prev) => (prev === 0 ? Math.max(0, activitySchedule.length - itemsPerView) : prev - 1))
    } else {
      setCurrentActivityIndex((prev) => (prev + itemsPerView >= activitySchedule.length ? 0 : prev + 1))
    }
  }

  const getMealIcon = (mealType: string) => {
    switch (mealType) {
      case "breakfast":
        return "🌅"
      case "snack":
        return "🍎"
      case "lunch":
        return "🌞"
      case "dinner":
        return "🌙"
      default:
        return "🍽️"
    }
  }

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  // Enhanced image error handling
  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => new Set([...prev, imageSrc]))
  }

  // Generate fallback image with meal/activity context
  const generateFallbackImage = (type: string, context: string) => {
    const emoji = type === "meal" ? "🍽️" : "🏃‍♂️"
    return `/placeholder.svg?height=300&width=400&text=${emoji}+${encodeURIComponent(context)}`
  }

  const visibleFoodEntries = foodLog.slice(currentFoodIndex, currentFoodIndex + itemsPerView)
  const visibleActivityEntries = activitySchedule.slice(currentActivityIndex, currentActivityIndex + itemsPerView)

  return (
    <Tabs defaultValue="food-log" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="food-log" className="flex items-center gap-2 interactive-element">
          <Utensils className="h-4 w-4" />
          Food Log
        </TabsTrigger>
        <TabsTrigger value="activity-tracker" className="flex items-center gap-2 interactive-element">
          <Activity className="h-4 w-4" />
          Activity Tracker
        </TabsTrigger>
      </TabsList>

      <TabsContent value="food-log" className="space-y-6">
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleFoodNavigation("prev")}
              disabled={currentFoodIndex === 0}
              className="cursor-pointer interactive-element"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentFoodIndex + 1}-{Math.min(currentFoodIndex + itemsPerView, foodLog.length)} of {foodLog.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="cursor-pointer interactive-element"
              >
                {isAutoScrolling ? "Pause" : "Play"}
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleFoodNavigation("next")}
              disabled={currentFoodIndex + itemsPerView >= foodLog.length}
              className="cursor-pointer interactive-element"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Food Log Grid with enhanced image handling */}
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 transition-all duration-1000 ease-in-out">
            {visibleFoodEntries.map((day, index) => (
              <Card
                key={`${day.date}-${currentFoodIndex}`}
                className="overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-[1.02] interactive-element"
              >
                <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {Object.entries(day.meals).map(([mealType, mealData]) => (
                      <div key={mealType} className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2 capitalize">
                          <span className="text-lg">{getMealIcon(mealType)}</span>
                          {mealType}
                        </h4>

                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-800 group interactive-element">
                          <RobustImage
                            src={mealData.photo}
                            alt={`${mealType} - ${mealData.foods.join(", ")}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            fallbackSrc={generateFallbackImage("meal", mealType)}
                            priority={index < 3} // Prioritize first 3 images
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                          {/* Loading indicator */}
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                            <div className="animate-pulse">
                              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-2xl">{getMealIcon(mealType)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {mealData.foods.slice(0, 2).map((food, foodIndex) => (
                            <p key={foodIndex} className="text-xs bg-white dark:bg-slate-800 p-2 rounded border">
                              {food}
                            </p>
                          ))}
                          {mealData.foods.length > 2 && (
                            <p className="text-xs text-muted-foreground">+{mealData.foods.length - 2} more items</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="activity-tracker" className="space-y-6">
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleActivityNavigation("prev")}
              disabled={currentActivityIndex === 0}
              className="cursor-pointer interactive-element"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentActivityIndex + 1}-{Math.min(currentActivityIndex + itemsPerView, activitySchedule.length)} of{" "}
                {activitySchedule.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="cursor-pointer interactive-element"
              >
                {isAutoScrolling ? "Pause" : "Play"}
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleActivityNavigation("next")}
              disabled={currentActivityIndex + itemsPerView >= activitySchedule.length}
              className="cursor-pointer interactive-element"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Activity Log Grid with enhanced image handling */}
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 transition-all duration-1000 ease-in-out">
            {visibleActivityEntries.map((day, index) => (
              <Card
                key={`${day.date}-${currentActivityIndex}`}
                className="overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-[1.02] interactive-element"
              >
                <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {day.day} -{" "}
                    {new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {/* Daily Activity Photo */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Daily Photo
                      </h4>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-800 group interactive-element">
                        <RobustImage
                          src={day.photo}
                          alt={`${day.day} activities`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          fallbackSrc={generateFallbackImage("activity", day.day)}
                          priority={index < 3} // Prioritize first 3 images
                        />

                        {/* Loading indicator */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <div className="animate-pulse">
                            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                              <span className="text-2xl">🏃‍♂️</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Details */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Activities
                      </h4>
                      <div className="space-y-2">
                        {day.activities.slice(0, 2).map((activity, activityIndex) => (
                          <div key={activityIndex} className="bg-white dark:bg-slate-800 p-3 rounded border space-y-2">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-sm">{activity.activity}</h5>
                              <Badge className={getIntensityColor(activity.intensity)}>{activity.intensity}</Badge>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{activity.time}</span>
                              <span>{activity.duration}</span>
                            </div>
                          </div>
                        ))}
                        {day.activities.length > 2 && (
                          <p className="text-xs text-muted-foreground">+{day.activities.length - 2} more activities</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
