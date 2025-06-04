"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, ChefHat, Eye, EyeOff, Star } from "lucide-react"
import type { Recipe } from "./recipe-section"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [imageError, setImageError] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Go Foods":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "Grow Foods":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "Glow Foods":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Complete Meal":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageError ? "/placeholder.svg?height=300&width=400&text=Recipe+Image" : recipe.image}
          alt={recipe.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={getDifficultyColor(recipe.difficulty)}>{recipe.difficulty}</Badge>
          <Badge className={getCategoryColor(recipe.category)}>{recipe.category}</Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {recipe.name}
          </CardTitle>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{recipe.description}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{recipe.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button
          onClick={() => setShowDetails(!showDetails)}
          variant="outline"
          className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          {showDetails ? (
            <>
              <EyeOff className="h-4 w-4 mr-2" />
              Hide Details
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-2" />
              View Recipe
            </>
          )}
        </Button>

        {showDetails && (
          <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
            <Separator />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-muted-foreground">Prep Time:</span>
                <p className="font-semibold">{recipe.prepTime} min</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Cook Time:</span>
                <p className="font-semibold">{recipe.cookTime} min</p>
              </div>
            </div>

            {recipe.nutritionInfo && (
              <div className="bg-muted/50 rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Nutrition (per serving)</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    Calories: <span className="font-medium">{recipe.nutritionInfo.calories}</span>
                  </div>
                  <div>
                    Protein: <span className="font-medium">{recipe.nutritionInfo.protein}g</span>
                  </div>
                  <div>
                    Carbs: <span className="font-medium">{recipe.nutritionInfo.carbs}g</span>
                  </div>
                  <div>
                    Fat: <span className="font-medium">{recipe.nutritionInfo.fat}g</span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-sm mb-2">Ingredients ({recipe.ingredients.length})</h4>
              <ul className="space-y-1 text-sm max-h-32 overflow-y-auto">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex justify-between items-start">
                    <span className="flex-1">{ingredient.name}</span>
                    <span className="text-muted-foreground ml-2 text-xs">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Instructions ({recipe.instructions.length} steps)</h4>
              <ol className="space-y-2 text-sm max-h-40 overflow-y-auto">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-medium">
                      {instruction.step}
                    </span>
                    <div className="flex-1">
                      <p>{instruction.instruction}</p>
                      {instruction.time && (
                        <span className="text-muted-foreground text-xs">⏱️ {instruction.time} min</span>
                      )}
                      {instruction.tips && <p className="text-muted-foreground text-xs mt-1">💡 {instruction.tips}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
