"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RecipeForm } from "@/components/recipe-form"
import { RecipeCard } from "@/components/recipe-card"
import { Plus, ChefHat } from "lucide-react"

interface Recipe {
  id: string
  name: string
  description: string
  ingredients: string[]
  instructions: string[]
  prepTime: number
  cookTime: number
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  category: "Go" | "Grow" | "Glow"
  nutritionalInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

const defaultRecipes: Recipe[] = [
  {
    id: "1",
    name: "Krispi Prince",
    description: "Our signature crispy chicken following Pinggang Pinoy guidelines",
    ingredients: [
      "1 kg chicken pieces",
      "2 cups whole wheat flour",
      "1 cup mixed vegetables",
      "2 tbsp olive oil",
      "Herbs and spices",
    ],
    instructions: [
      "Marinate chicken with herbs and spices for 30 minutes",
      "Coat chicken with whole wheat flour mixture",
      "Air fry at 180°C for 20 minutes",
      "Serve with steamed vegetables and brown rice",
    ],
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    category: "Grow",
    nutritionalInfo: {
      calories: 420,
      protein: 32,
      carbs: 28,
      fat: 18,
    },
  },
  {
    id: "2",
    name: "Rainbow Vegetable Salad",
    description: "Colorful and nutritious salad packed with vitamins",
    ingredients: [
      "2 cups mixed greens",
      "1 cup cherry tomatoes",
      "1 cucumber, diced",
      "1 bell pepper, sliced",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
    ],
    instructions: [
      "Wash and prepare all vegetables",
      "Mix vegetables in a large bowl",
      "Whisk olive oil and lemon juice for dressing",
      "Toss salad with dressing before serving",
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    category: "Glow",
    nutritionalInfo: {
      calories: 120,
      protein: 3,
      carbs: 8,
      fat: 9,
    },
  },
  {
    id: "3",
    name: "Brown Rice Energy Bowl",
    description: "Wholesome brown rice bowl for sustained energy",
    ingredients: ["2 cups brown rice", "4 cups water", "1 tsp salt", "2 tbsp sesame oil", "Mixed seeds for topping"],
    instructions: [
      "Rinse brown rice until water runs clear",
      "Bring water to boil, add rice and salt",
      "Simmer covered for 45 minutes",
      "Fluff with fork, drizzle with sesame oil",
      "Top with mixed seeds",
    ],
    prepTime: 5,
    cookTime: 45,
    servings: 6,
    difficulty: "Easy",
    category: "Go",
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 45,
      fat: 4,
    },
  },
]

export function RecipeSection() {
  const [recipes, setRecipes] = useState<Recipe[]>(defaultRecipes)
  const [showForm, setShowForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Go" | "Grow" | "Glow">("All")

  const handleAddRecipe = (newRecipe: Omit<Recipe, "id">) => {
    const recipe: Recipe = {
      ...newRecipe,
      id: Date.now().toString(),
    }
    setRecipes((prev) => [...prev, recipe])
    setShowForm(false)
  }

  const handleDeleteRecipe = (id: string) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id))
  }

  const filteredRecipes =
    selectedCategory === "All" ? recipes : recipes.filter((recipe) => recipe.category === selectedCategory)

  const categoryColors = {
    Go: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    Grow: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    Glow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <ChefHat className="h-8 w-8 text-orange-500" />
          <h2 className="text-4xl font-bold">PATHFIT Cocina Recipes</h2>
          <ChefHat className="h-8 w-8 text-orange-500" />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and share healthy recipes that follow the Pinggang Pinoy guidelines. Each recipe is categorized by
          food groups to help you create balanced, nutritious meals.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {["All", "Go", "Grow", "Glow"].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category as "All" | "Go" | "Grow" | "Glow")}
            className="min-w-[80px]"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Add Recipe Button */}
      <div className="flex justify-center">
        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Recipe
        </Button>
      </div>

      {/* Recipe Form */}
      {showForm && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Add New Recipe</CardTitle>
          </CardHeader>
          <CardContent>
            <RecipeForm onSubmit={handleAddRecipe} onCancel={() => setShowForm(false)} />
          </CardContent>
        </Card>
      )}

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDeleteRecipe}
            categoryColor={categoryColors[recipe.category]}
          />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
          <p className="text-muted-foreground mb-4">
            {selectedCategory === "All"
              ? "No recipes available. Add your first recipe to get started!"
              : `No ${selectedCategory} recipes found. Try a different category or add a new recipe.`}
          </p>
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Recipe
          </Button>
        </div>
      )}

      {/* Pinggang Pinoy Guide */}
      <Card className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20">
        <CardHeader>
          <CardTitle className="text-center">Pinggang Pinoy Food Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <Badge className={categoryColors.Go}>Go Foods</Badge>
              <p className="text-sm">
                <strong>Energy-giving foods:</strong> Rice, bread, pasta, cereals, and other carbohydrates that fuel
                your body.
              </p>
            </div>
            <div className="text-center space-y-2">
              <Badge className={categoryColors.Grow}>Grow Foods</Badge>
              <p className="text-sm">
                <strong>Body-building foods:</strong> Fish, meat, poultry, eggs, beans, and dairy for muscle growth and
                repair.
              </p>
            </div>
            <div className="text-center space-y-2">
              <Badge className={categoryColors.Glow}>Glow Foods</Badge>
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
