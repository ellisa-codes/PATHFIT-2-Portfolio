"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat, Star } from "lucide-react"

export function EnhancedRecipeShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Star className="h-8 w-8 text-yellow-500" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Featured Recipe: Krispi Prince
          </h2>
          <Star className="h-8 w-8 text-yellow-500" />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our signature creation that perfectly balances flavor, nutrition, and visual appeal - showcasing the
          creativity of PATHFIT Cocina
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recipe Image */}
        <Card className="overflow-hidden border-2 border-yellow-200 dark:border-yellow-800 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
            <CardTitle>Krispi Prince Dish</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <img
                src="/placeholder.svg?height=400&width=400&text=Krispi+Prince+Dish"
                alt="Krispi Prince - Our signature crispy chicken dish"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=400&text=Krispi+Prince+Recipe"
                }}
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">Signature Dish</Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
                  <h4 className="font-semibold">Krispi Prince</h4>
                  <p className="text-sm text-white/80">Healthy crispy chicken with Pinggang Pinoy sides</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recipe Details */}
        <Card className="border-2 border-yellow-200 dark:border-yellow-800 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Recipe Details</CardTitle>
              <div className="flex items-center gap-1">
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
              <h4 className="font-semibold mb-3">Key Ingredients</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Chicken breast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Mixed vegetables</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Brown rice</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Special spices</span>
                </div>
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

            <div>
              <h4 className="font-semibold mb-3">Pinggang Pinoy Balance</h4>
              <div className="grid grid-cols-3 gap-3">
                <Badge variant="outline" className="justify-center text-xs">
                  GO Foods
                </Badge>
                <Badge variant="outline" className="justify-center text-xs">
                  GROW Foods
                </Badge>
                <Badge variant="outline" className="justify-center text-xs">
                  GLOW Foods
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
