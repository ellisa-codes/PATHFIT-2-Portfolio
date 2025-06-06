"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat } from "lucide-react"

export function SimpleRecipeSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <ChefHat className="h-8 w-8 text-orange-500" />
          <h2 className="text-4xl font-bold">PATHFIT Cocina Recipes</h2>
          <ChefHat className="h-8 w-8 text-orange-500" />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover healthy recipes that follow the Pinggang Pinoy guidelines. Each recipe is categorized by food groups
          to help you create balanced, nutritious meals.
        </p>
      </div>

      {/* Sample Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Krispi Prince
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">Grow</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Our signature crispy chicken following Pinggang Pinoy guidelines
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Prep Time:</span>
                <span>30 min</span>
              </div>
              <div className="flex justify-between">
                <span>Cook Time:</span>
                <span>20 min</span>
              </div>
              <div className="flex justify-between">
                <span>Servings:</span>
                <span>4</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Rainbow Vegetable Salad
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">Glow</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Colorful and nutritious salad packed with vitamins</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Prep Time:</span>
                <span>15 min</span>
              </div>
              <div className="flex justify-between">
                <span>Cook Time:</span>
                <span>0 min</span>
              </div>
              <div className="flex justify-between">
                <span>Servings:</span>
                <span>4</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Brown Rice Energy Bowl
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">Go</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Wholesome brown rice bowl for sustained energy</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Prep Time:</span>
                <span>5 min</span>
              </div>
              <div className="flex justify-between">
                <span>Cook Time:</span>
                <span>45 min</span>
              </div>
              <div className="flex justify-between">
                <span>Servings:</span>
                <span>6</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pinggang Pinoy Guide */}
      <Card className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20">
        <CardHeader>
          <CardTitle className="text-center">Pinggang Pinoy Food Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">Go Foods</Badge>
              <p className="text-sm">
                <strong>Energy-giving foods:</strong> Rice, bread, pasta, cereals, and other carbohydrates that fuel
                your body.
              </p>
            </div>
            <div className="text-center space-y-2">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">Grow Foods</Badge>
              <p className="text-sm">
                <strong>Body-building foods:</strong> Fish, meat, poultry, eggs, beans, and dairy for muscle growth and
                repair.
              </p>
            </div>
            <div className="text-center space-y-2">
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                Glow Foods
              </Badge>
              <p className="text-sm">
                <strong>Protective foods:</strong> Fruits and vegetables rich in vitamins and minerals for healthy skin
                and immunity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
