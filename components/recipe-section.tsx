"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { RecipeCard } from "@/components/recipe-card"
import { RecipeForm } from "@/components/recipe-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, ChefHat, BookOpen } from "lucide-react"

export interface Recipe {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  category: "Go Foods" | "Grow Foods" | "Glow Foods" | "Complete Meal"
  ingredients: {
    name: string
    quantity: number
    unit: string
    notes?: string
  }[]
  instructions: {
    step: number
    instruction: string
    time?: number
    tips?: string
  }[]
  nutritionInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
  tags: string[]
  createdAt: string
}

// Sample recipes following Pinggang Pinoy guidelines
const sampleRecipes: Recipe[] = [
  {
    id: "1",
    name: "Pinggang Pinoy Power Bowl",
    description:
      "A balanced meal following the Pinggang Pinoy guidelines with brown rice, grilled chicken, and colorful vegetables.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    imageAlt: "Colorful bowl with brown rice, grilled chicken, and mixed vegetables",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    difficulty: "Easy",
    category: "Complete Meal",
    ingredients: [
      { name: "Brown rice", quantity: 1, unit: "cup", notes: "Uncooked" },
      { name: "Chicken breast", quantity: 200, unit: "g", notes: "Boneless, skinless" },
      { name: "Broccoli florets", quantity: 1, unit: "cup" },
      { name: "Carrots", quantity: 1, unit: "medium", notes: "Sliced" },
      { name: "Bell peppers", quantity: 1, unit: "medium", notes: "Mixed colors, sliced" },
      { name: "Olive oil", quantity: 2, unit: "tbsp" },
      { name: "Garlic", quantity: 2, unit: "cloves", notes: "Minced" },
      { name: "Salt", quantity: 1, unit: "tsp" },
      { name: "Black pepper", quantity: 0.5, unit: "tsp" },
      { name: "Lemon juice", quantity: 1, unit: "tbsp" },
    ],
    instructions: [
      { step: 1, instruction: "Cook brown rice according to package instructions.", time: 20 },
      { step: 2, instruction: "Season chicken breast with salt, pepper, and half the garlic.", time: 5 },
      {
        step: 3,
        instruction: "Heat 1 tbsp olive oil in a pan and cook chicken until golden brown and cooked through.",
        time: 8,
        tips: "Internal temperature should reach 165°F",
      },
      { step: 4, instruction: "Steam broccoli and carrots until tender-crisp.", time: 5 },
      { step: 5, instruction: "Sauté bell peppers with remaining garlic until slightly softened.", time: 3 },
      { step: 6, instruction: "Slice cooked chicken and arrange over rice with vegetables.", time: 2 },
      { step: 7, instruction: "Drizzle with remaining olive oil and lemon juice before serving.", time: 1 },
    ],
    nutritionInfo: {
      calories: 420,
      protein: 35,
      carbs: 45,
      fat: 12,
      fiber: 6,
    },
    tags: ["Pinggang Pinoy", "Balanced", "High Protein", "Whole Grains"],
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    name: "Filipino Vegetable Lumpia",
    description: "Fresh spring rolls packed with colorful vegetables, perfect as a Glow Foods dish.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=800&h=600&fit=crop",
    imageAlt: "Fresh vegetable spring rolls with dipping sauce",
    prepTime: 30,
    cookTime: 0,
    servings: 4,
    difficulty: "Medium",
    category: "Glow Foods",
    ingredients: [
      { name: "Spring roll wrappers", quantity: 12, unit: "pieces", notes: "Fresh, not fried" },
      { name: "Lettuce leaves", quantity: 12, unit: "pieces", notes: "Washed and dried" },
      { name: "Carrots", quantity: 2, unit: "medium", notes: "Julienned" },
      { name: "Cucumber", quantity: 1, unit: "large", notes: "Julienned" },
      { name: "Bean sprouts", quantity: 1, unit: "cup", notes: "Fresh" },
      { name: "Red cabbage", quantity: 1, unit: "cup", notes: "Shredded" },
      { name: "Fresh mint", quantity: 0.25, unit: "cup", notes: "Leaves only" },
      { name: "Cilantro", quantity: 0.25, unit: "cup", notes: "Fresh" },
      { name: "Peanut butter", quantity: 3, unit: "tbsp", notes: "For sauce" },
      { name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { name: "Rice vinegar", quantity: 1, unit: "tbsp" },
      { name: "Honey", quantity: 1, unit: "tsp" },
    ],
    instructions: [
      { step: 1, instruction: "Prepare all vegetables by washing and cutting into thin strips.", time: 15 },
      { step: 2, instruction: "Make dipping sauce by mixing peanut butter, soy sauce, vinegar, and honey.", time: 5 },
      {
        step: 3,
        instruction: "Soften spring roll wrapper in warm water for 10 seconds.",
        time: 1,
        tips: "Don't oversoak or it will tear",
      },
      { step: 4, instruction: "Place lettuce leaf on wrapper, add vegetables and herbs.", time: 2 },
      {
        step: 5,
        instruction: "Roll tightly, folding in sides as you go.",
        time: 2,
        tips: "Keep filling compact for easier rolling",
      },
      { step: 6, instruction: "Repeat with remaining wrappers and filling.", time: 15 },
      { step: 7, instruction: "Serve immediately with peanut dipping sauce.", time: 1 },
    ],
    nutritionInfo: {
      calories: 180,
      protein: 6,
      carbs: 28,
      fat: 5,
      fiber: 4,
    },
    tags: ["Fresh", "No Cook", "Vegetarian", "Low Calorie", "Glow Foods"],
    createdAt: "2024-03-20",
  },
  {
    id: "3",
    name: "Quinoa Adobo Bowl",
    description: "A modern twist on Filipino adobo using quinoa as the base, combining Go and Grow foods perfectly.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    imageAlt: "Quinoa bowl topped with adobo-style protein and vegetables",
    prepTime: 10,
    cookTime: 30,
    servings: 3,
    difficulty: "Medium",
    category: "Complete Meal",
    ingredients: [
      { name: "Quinoa", quantity: 1, unit: "cup", notes: "Rinsed" },
      { name: "Chicken thighs", quantity: 300, unit: "g", notes: "Boneless, cut into cubes" },
      { name: "Soy sauce", quantity: 0.25, unit: "cup" },
      { name: "White vinegar", quantity: 0.25, unit: "cup" },
      { name: "Garlic", quantity: 4, unit: "cloves", notes: "Minced" },
      { name: "Bay leaves", quantity: 2, unit: "pieces" },
      { name: "Black peppercorns", quantity: 1, unit: "tsp" },
      { name: "Onion", quantity: 1, unit: "medium", notes: "Sliced" },
      { name: "Green beans", quantity: 1, unit: "cup", notes: "Trimmed" },
      { name: "Cooking oil", quantity: 2, unit: "tbsp" },
      { name: "Water", quantity: 0.5, unit: "cup" },
    ],
    instructions: [
      { step: 1, instruction: "Cook quinoa according to package directions with 2 cups water.", time: 15 },
      {
        step: 2,
        instruction: "Marinate chicken in soy sauce, vinegar, garlic, and peppercorns for 10 minutes.",
        time: 10,
      },
      { step: 3, instruction: "Heat oil in a pan and sauté onions until translucent.", time: 3 },
      { step: 4, instruction: "Add marinated chicken with marinade and bay leaves.", time: 5 },
      {
        step: 5,
        instruction: "Simmer until chicken is cooked and sauce reduces.",
        time: 15,
        tips: "Add water if needed",
      },
      { step: 6, instruction: "Add green beans in the last 5 minutes of cooking.", time: 5 },
      { step: 7, instruction: "Serve over cooked quinoa and remove bay leaves.", time: 2 },
    ],
    nutritionInfo: {
      calories: 380,
      protein: 28,
      carbs: 35,
      fat: 14,
      fiber: 5,
    },
    tags: ["Filipino Fusion", "High Protein", "Quinoa", "Balanced Meal"],
    createdAt: "2024-03-25",
  },
]

export function RecipeSection() {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes)
  const [showForm, setShowForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleAddRecipe = (newRecipe: Omit<Recipe, "id" | "createdAt">) => {
    const recipe: Recipe = {
      ...newRecipe,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
    }
    setRecipes((prev) => [recipe, ...prev])
    setShowForm(false)
  }

  const filteredRecipes =
    selectedCategory === "all" ? recipes : recipes.filter((recipe) => recipe.category === selectedCategory)

  const categories = ["all", "Complete Meal", "Go Foods", "Grow Foods", "Glow Foods"]

  return (
    <Section
      spacing="lg"
      className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 dark:from-orange-900/20 dark:via-yellow-900/20 dark:to-green-900/20"
    >
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              PATHFIT Cocina Recipes
            </h2>
            <BookOpen className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover and share healthy recipes that follow the Pinggang Pinoy guidelines. Each recipe is designed to
            provide balanced nutrition while being delicious and easy to prepare.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
                >
                  {category === "all" ? "All Recipes" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            {showForm ? "Cancel" : "Add Recipe"}
          </Button>
        </div>

        {showForm && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border">
            <h3 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h3>
            <RecipeForm onSubmit={handleAddRecipe} onCancel={() => setShowForm(false)} />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              {selectedCategory === "all"
                ? "Be the first to add a recipe!"
                : `No recipes found in the ${selectedCategory} category.`}
            </p>
          </div>
        )}

        <div className="bg-gradient-to-r from-orange-100 to-green-100 dark:from-orange-900/30 dark:to-green-900/30 rounded-xl p-6 mt-12">
          <h3 className="text-2xl font-bold text-center mb-4">Pinggang Pinoy Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🌾</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Go Foods (1/4 plate)</h4>
              <p className="text-sm text-muted-foreground">
                Carbohydrates for energy: rice, bread, pasta, potatoes, quinoa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Grow Foods (1/4 plate)</h4>
              <p className="text-sm text-muted-foreground">
                Proteins for growth: fish, meat, poultry, eggs, beans, tofu
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🥬</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Glow Foods (1/2 plate)</h4>
              <p className="text-sm text-muted-foreground">
                Vitamins and minerals: vegetables, fruits for health and immunity
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
