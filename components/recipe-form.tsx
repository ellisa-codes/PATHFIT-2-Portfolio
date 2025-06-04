"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Upload, X } from "lucide-react"
import type { Recipe } from "./recipe-section"

interface RecipeFormProps {
  onSubmit: (recipe: Omit<Recipe, "id" | "createdAt">) => void
  onCancel: () => void
}

interface Ingredient {
  name: string
  quantity: number
  unit: string
  notes?: string
}

interface Instruction {
  step: number
  instruction: string
  time?: number
  tips?: string
}

export function RecipeForm({ onSubmit, onCancel }: RecipeFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    imageAlt: "",
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy" as const,
    category: "Complete Meal" as const,
  })

  const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: "", quantity: 0, unit: "cup" }])

  const [instructions, setInstructions] = useState<Instruction[]>([{ step: 1, instruction: "" }])

  const [nutritionInfo, setNutritionInfo] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
  })

  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const units = ["cup", "tbsp", "tsp", "g", "kg", "ml", "l", "pieces", "cloves", "medium", "large", "small"]

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 0, unit: "cup" }])
  }

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index))
    }
  }

  const updateIngredient = (index: number, field: keyof Ingredient, value: string | number) => {
    const updated = ingredients.map((ingredient, i) => (i === index ? { ...ingredient, [field]: value } : ingredient))
    setIngredients(updated)
  }

  const addInstruction = () => {
    setInstructions([...instructions, { step: instructions.length + 1, instruction: "" }])
  }

  const removeInstruction = (index: number) => {
    if (instructions.length > 1) {
      const updated = instructions
        .filter((_, i) => i !== index)
        .map((instruction, i) => ({ ...instruction, step: i + 1 }))
      setInstructions(updated)
    }
  }

  const updateInstruction = (index: number, field: keyof Instruction, value: string | number) => {
    const updated = instructions.map((instruction, i) =>
      i === index ? { ...instruction, [field]: value } : instruction,
    )
    setInstructions(updated)
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real implementation, you would upload to a server
      const imageUrl = URL.createObjectURL(file)
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
        imageAlt: `${formData.name} recipe image`,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const recipe: Omit<Recipe, "id" | "createdAt"> = {
      ...formData,
      ingredients: ingredients.filter((ing) => ing.name.trim() !== ""),
      instructions: instructions.filter((inst) => inst.instruction.trim() !== ""),
      nutritionInfo,
      tags,
    }

    onSubmit(recipe)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Recipe Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter recipe name"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of the recipe"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select
                  value={formData.difficulty}
                  onValueChange={(value: "Easy" | "Medium" | "Hard") =>
                    setFormData((prev) => ({ ...prev, difficulty: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value: Recipe["category"]) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Complete Meal">Complete Meal</SelectItem>
                    <SelectItem value="Go Foods">Go Foods</SelectItem>
                    <SelectItem value="Grow Foods">Grow Foods</SelectItem>
                    <SelectItem value="Glow Foods">Glow Foods</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="prepTime">Prep Time (min)</Label>
                <Input
                  id="prepTime"
                  type="number"
                  value={formData.prepTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, prepTime: Number.parseInt(e.target.value) || 0 }))}
                  min="0"
                />
              </div>

              <div>
                <Label htmlFor="cookTime">Cook Time (min)</Label>
                <Input
                  id="cookTime"
                  type="number"
                  value={formData.cookTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, cookTime: Number.parseInt(e.target.value) || 0 }))}
                  min="0"
                />
              </div>

              <div>
                <Label htmlFor="servings">Servings</Label>
                <Input
                  id="servings"
                  type="number"
                  value={formData.servings}
                  onChange={(e) => setFormData((prev) => ({ ...prev, servings: Number.parseInt(e.target.value) || 1 }))}
                  min="1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recipe Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="imageUpload">Upload Image</Label>
              <div className="mt-2">
                <Label htmlFor="imageUpload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload image</p>
                  </div>
                </Label>
                <Input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </div>
            </div>

            <div>
              <Label htmlFor="imageUrl">Or enter image URL</Label>
              <Input
                id="imageUrl"
                value={formData.image}
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <Label htmlFor="imageAlt">Alt Text</Label>
              <Input
                id="imageAlt"
                value={formData.imageAlt}
                onChange={(e) => setFormData((prev) => ({ ...prev, imageAlt: e.target.value }))}
                placeholder="Describe the image for accessibility"
              />
            </div>

            {formData.image && (
              <div className="relative aspect-video rounded-lg overflow-hidden border">
                <img
                  src={formData.image || "/placeholder.svg"}
                  alt={formData.imageAlt || "Recipe preview"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Ingredients */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Ingredients</CardTitle>
            <Button type="button" onClick={addIngredient} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Ingredient
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-end">
                <div className="col-span-5">
                  <Input
                    value={ingredient.name}
                    onChange={(e) => updateIngredient(index, "name", e.target.value)}
                    placeholder="Ingredient name"
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    type="number"
                    value={ingredient.quantity}
                    onChange={(e) => updateIngredient(index, "quantity", Number.parseFloat(e.target.value) || 0)}
                    placeholder="Qty"
                    step="0.1"
                  />
                </div>
                <div className="col-span-2">
                  <Select value={ingredient.unit} onValueChange={(value) => updateIngredient(index, "unit", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Input
                    value={ingredient.notes || ""}
                    onChange={(e) => updateIngredient(index, "notes", e.target.value)}
                    placeholder="Notes"
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    size="sm"
                    variant="outline"
                    disabled={ingredients.length === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Instructions</CardTitle>
            <Button type="button" onClick={addInstruction} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {instructions.map((instruction, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">
                    {instruction.step}
                  </span>
                  <div className="flex-1 grid grid-cols-12 gap-2">
                    <div className="col-span-8">
                      <Textarea
                        value={instruction.instruction}
                        onChange={(e) => updateInstruction(index, "instruction", e.target.value)}
                        placeholder="Describe this step"
                        rows={2}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        value={instruction.time || ""}
                        onChange={(e) => updateInstruction(index, "time", Number.parseInt(e.target.value) || 0)}
                        placeholder="Time (min)"
                      />
                    </div>
                    <div className="col-span-2">
                      <Button
                        type="button"
                        onClick={() => removeInstruction(index)}
                        size="sm"
                        variant="outline"
                        disabled={instructions.length === 1}
                        className="w-full"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="ml-8">
                  <Input
                    value={instruction.tips || ""}
                    onChange={(e) => updateInstruction(index, "tips", e.target.value)}
                    placeholder="Optional tips for this step"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nutrition & Tags */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nutrition Information (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="calories">Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  value={nutritionInfo.calories}
                  onChange={(e) =>
                    setNutritionInfo((prev) => ({ ...prev, calories: Number.parseInt(e.target.value) || 0 }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="protein">Protein (g)</Label>
                <Input
                  id="protein"
                  type="number"
                  value={nutritionInfo.protein}
                  onChange={(e) =>
                    setNutritionInfo((prev) => ({ ...prev, protein: Number.parseInt(e.target.value) || 0 }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="carbs">Carbs (g)</Label>
                <Input
                  id="carbs"
                  type="number"
                  value={nutritionInfo.carbs}
                  onChange={(e) =>
                    setNutritionInfo((prev) => ({ ...prev, carbs: Number.parseInt(e.target.value) || 0 }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="fat">Fat (g)</Label>
                <Input
                  id="fat"
                  type="number"
                  value={nutritionInfo.fat}
                  onChange={(e) => setNutritionInfo((prev) => ({ ...prev, fat: Number.parseInt(e.target.value) || 0 }))}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeTag(tag)} />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="flex gap-4 justify-end">
        <Button type="button" onClick={onCancel} variant="outline">
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600"
          disabled={!formData.name || !formData.description}
        >
          Add Recipe
        </Button>
      </div>
    </form>
  )
}
