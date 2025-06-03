import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Utensils, Activity } from "lucide-react"

export default function FoodActivityPage() {
  // Sample food log data for a month with photo URLs
  const foodLog = [
    {
      date: "2025-03-25",
      meals: {
        breakfast: {
          foods: ["Oatmeal with sandwich", "Milk"],
          photo: "/placeholder.svg?height=200&width=300&text=Healthy+Breakfast+Bowl",
        },
        snack: {
          foods: ["Apple slices with peanut butter"],
          photo: "/placeholder.svg?height=200&width=300&text=Apple+Peanut+Butter",
        },
        lunch: {
          foods: ["Grilled chicken salad", "Brown rice", "Water"],
          photo: "/placeholder.svg?height=200&width=300&text=Grilled+Chicken+Salad",
        },
        dinner: {
          foods: ["Baked salmon", "Steamed vegetables", "Quinoa"],
          photo: "/placeholder.svg?height=200&width=300&text=Salmon+Dinner+Plate",
        },
      },
    },
    {
      date: "2025-03-26",
      meals: {
        breakfast: {
          foods: ["Whole grain toast", "Scrambled eggs", "Orange juice"],
          photo: "/placeholder.svg?height=200&width=300&text=Toast+and+Eggs",
        },
        snack: {
          foods: ["Greek yogurt with berries"],
          photo: "/placeholder.svg?height=200&width=300&text=Berry+Yogurt+Bowl",
        },
        lunch: {
          foods: ["Vegetable soup", "Whole wheat bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Vegetable+Soup+Lunch",
        },
        dinner: {
          foods: ["Lean beef stir-fry", "Brown rice", "Mixed vegetables"],
          photo: "/placeholder.svg?height=200&width=300&text=Beef+Stir+Fry",
        },
      },
    },
    {
      date: "2025-03-27",
      meals: {
        breakfast: {
          foods: ["Smoothie bowl with fruits", "Granola", "Almond milk"],
          photo: "/placeholder.svg?height=200&width=300&text=Colorful+Smoothie+Bowl",
        },
        snack: {
          foods: ["Nuts and dried fruits"],
          photo: "/placeholder.svg?height=200&width=300&text=Trail+Mix+Snack",
        },
        lunch: {
          foods: ["Tuna sandwich", "Side salad", "Water"],
          photo: "/placeholder.svg?height=200&width=300&text=Tuna+Sandwich+Meal",
        },
        dinner: {
          foods: ["Grilled tofu", "Sweet potato", "Green beans"],
          photo: "/placeholder.svg?height=200&width=300&text=Tofu+Dinner+Plate",
        },
      },
    },
    {
      date: "2025-03-28",
      meals: {
        breakfast: {
          foods: ["Pancakes with fresh fruits", "Maple syrup", "Coffee"],
          photo: "/placeholder.svg?height=200&width=300&text=Fruit+Pancake+Stack",
        },
        snack: {
          foods: ["Protein bar"],
          photo: "/placeholder.svg?height=200&width=300&text=Protein+Energy+Bar",
        },
        lunch: {
          foods: ["Chicken wrap", "Vegetable chips", "Iced tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Chicken+Wrap+Lunch",
        },
        dinner: {
          foods: ["Fish tacos", "Black beans", "Avocado salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Fish+Taco+Dinner",
        },
      },
    },
    {
      date: "2025-03-29",
      meals: {
        breakfast: {
          foods: ["Cereal with milk", "Banana", "Orange juice"],
          photo: "/placeholder.svg?height=200&width=300&text=Cereal+Breakfast+Bowl",
        },
        snack: {
          foods: ["Cheese and crackers"],
          photo: "/placeholder.svg?height=200&width=300&text=Cheese+Crackers+Plate",
        },
        lunch: {
          foods: ["Pasta salad", "Grilled vegetables", "Sparkling water"],
          photo: "/placeholder.svg?height=200&width=300&text=Pasta+Salad+Bowl",
        },
        dinner: {
          foods: ["Pork tenderloin", "Mashed potatoes", "Steamed broccoli"],
          photo: "/placeholder.svg?height=200&width=300&text=Pork+Dinner+Plate",
        },
      },
    },
    {
      date: "2025-03-30",
      meals: {
        breakfast: {
          foods: ["Avocado toast", "Poached egg", "Green smoothie"],
          photo: "/placeholder.svg?height=200&width=300&text=Avocado+Toast+Breakfast",
        },
        snack: {
          foods: ["Mixed berries", "Almonds"],
          photo: "/placeholder.svg?height=200&width=300&text=Berry+Almond+Mix",
        },
        lunch: {
          foods: ["Quinoa bowl", "Roasted vegetables", "Lemon water"],
          photo: "/placeholder.svg?height=200&width=300&text=Quinoa+Veggie+Bowl",
        },
        dinner: {
          foods: ["Grilled chicken breast", "Sweet potato fries", "Asparagus"],
          photo: "/placeholder.svg?height=200&width=300&text=Chicken+Sweet+Potato",
        },
      },
    },
    {
      date: "2025-03-31",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-01",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-02",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-03",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-04",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-05",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-06",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-07",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-08",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-09",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-10",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-11",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-12",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-13",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-14",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-15",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-16",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-17",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-18",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-19",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-20",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-21",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-22",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-23",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-24",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
    {
      date: "2025-04-25",
      meals: {
        breakfast: {
          foods: ["Chia pudding", "Fresh berries", "Coconut flakes"],
          photo: "/placeholder.svg?height=200&width=300&text=Chia+Pudding+Bowl",
        },
        snack: {
          foods: ["Hummus with carrots"],
          photo: "/placeholder.svg?height=200&width=300&text=Hummus+Carrot+Sticks",
        },
        lunch: {
          foods: ["Mediterranean salad", "Pita bread", "Herbal tea"],
          photo: "/placeholder.svg?height=200&width=300&text=Mediterranean+Salad",
        },
        dinner: {
          foods: ["Baked cod", "Rice pilaf", "Green salad"],
          photo: "/placeholder.svg?height=200&width=300&text=Cod+Rice+Dinner",
        },
      },
    },
  ]

  // Sample physical activity data with daily photos
  const activitySchedule = [
    {
      date: "2025-03-24",
      day: "Monday",
      photo: "/placeholder.svg?height=300&width=400&text=Monday+Morning+Jog",
      activities: [
        { time: "6:00 AM", activity: "Morning Jog", duration: "30 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Strength Training", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-03-26",
      day: "Wednesday",
      photo: "/placeholder.svg?height=300&width=400&text=Wednesday+Yoga+Session",
      activities: [
        { time: "6:30 AM", activity: "Yoga Session", duration: "45 minutes", intensity: "Low" },
        { time: "5:00 PM", activity: "Swimming", duration: "40 minutes", intensity: "Moderate" },
      ],
    },
    {
      date: "2025-03-28",
      day: "Friday",
      photo: "/placeholder.svg?height=300&width=400&text=Friday+Cycling+Adventure",
      activities: [
        { time: "7:00 AM", activity: "Cycling", duration: "50 minutes", intensity: "Moderate" },
        { time: "6:30 PM", activity: "Basketball", duration: "60 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-03-31",
      day: "Monday",
      photo: "/placeholder.svg?height=300&width=400&text=Week+2+Running+Session",
      activities: [
        { time: "6:00 AM", activity: "Running", duration: "35 minutes", intensity: "High" },
        { time: "7:30 PM", activity: "Weight Lifting", duration: "50 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-04-02",
      day: "Wednesday",
      photo: "/placeholder.svg?height=300&width=400&text=Pilates+and+Tennis",
      activities: [
        { time: "6:30 AM", activity: "Pilates", duration: "40 minutes", intensity: "Moderate" },
        { time: "5:30 PM", activity: "Tennis", duration: "60 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-04-04",
      day: "Friday",
      photo: "/placeholder.svg?height=300&width=400&text=Hiking+Adventure+Day",
      activities: [
        { time: "7:00 AM", activity: "Hiking", duration: "90 minutes", intensity: "Moderate" },
        { time: "6:00 PM", activity: "Core Workout", duration: "30 minutes", intensity: "Moderate" },
      ],
    },
    {
      date: "2025-04-07",
      day: "Monday",
      photo: "/placeholder.svg?height=300&width=400&text=Week+3+Cardio+Session",
      activities: [
        { time: "6:15 AM", activity: "Elliptical Training", duration: "40 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Functional Training", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-04-09",
      day: "Wednesday",
      photo: "/placeholder.svg?height=300&width=400&text=Swimming+and+Stretching",
      activities: [
        { time: "6:00 AM", activity: "Swimming Laps", duration: "50 minutes", intensity: "Moderate" },
        { time: "8:00 PM", activity: "Stretching Session", duration: "20 minutes", intensity: "Low" },
      ],
    },
    {
      date: "2025-04-11",
      day: "Friday",
      photo: "/placeholder.svg?height=300&width=400&text=Hiking+Adventure+Day",
      activities: [
        { time: "7:00 AM", activity: "Hiking", duration: "90 minutes", intensity: "Moderate" },
        { time: "6:00 PM", activity: "Core Workout", duration: "30 minutes", intensity: "Moderate" },
      ],
    },
    {
      date: "2025-04-14",
      day: "Monday",
      photo: "/placeholder.svg?height=300&width=400&text=Week+3+Cardio+Session",
      activities: [
        { time: "6:15 AM", activity: "Elliptical Training", duration: "40 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Functional Training", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-04-16",
      day: "Wednesday",
      photo: "/placeholder.svg?height=300&width=400&text=Swimming+and+Stretching",
      activities: [
        { time: "6:00 AM", activity: "Swimming Laps", duration: "50 minutes", intensity: "Moderate" },
        { time: "8:00 PM", activity: "Stretching Session", duration: "20 minutes", intensity: "Low" },
      ],
    },
    {
      date: "2025-04-18",
      day: "Friday",
      photo: "/placeholder.svg?height=300&width=400&text=Hiking+Adventure+Day",
      activities: [
        { time: "7:00 AM", activity: "Hiking", duration: "90 minutes", intensity: "Moderate" },
        { time: "6:00 PM", activity: "Core Workout", duration: "30 minutes", intensity: "Moderate" },
      ],
    },
    {
      date: "2025-04-21",
      day: "Monday",
      photo: "/placeholder.svg?height=300&width=400&text=Week+3+Cardio+Session",
      activities: [
        { time: "6:15 AM", activity: "Elliptical Training", duration: "40 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Functional Training", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-04-23",
      day: "Wednesday",
      photo: "/placeholder.svg?height=300&width=400&text=Swimming+and+Stretching",
      activities: [
        { time: "6:00 AM", activity: "Swimming Laps", duration: "50 minutes", intensity: "Moderate" },
        { time: "8:00 PM", activity: "Stretching Session", duration: "20 minutes", intensity: "Low" },
      ],
    },
    {
      date: "2025-04-25",
      day: "Friday",
      photo: "/placeholder.svg?height=300&width=400&text=Hiking+Adventure+Day",
      activities: [
        { time: "7:00 AM", activity: "Hiking", duration: "90 minutes", intensity: "Moderate" },
        { time: "6:00 PM", activity: "Core Workout", duration: "30 minutes", intensity: "Moderate" },
      ],
    },
  ]

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

  return (
    <>
      <Section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <PageHeader title="Food and Physical Activity" description="Exploring Pinggang Pinoy and PATHFIT Cocina" />
      </Section>

      <Section>
        <div className="grid gap-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Pinggang Pinoy</h2>
              <p>
                Pinggang Pinoy is a food guide developed by the Department of Science and Technology's Food and
                Nutrition Research Institute (DOST-FNRI) to help Filipinos adopt healthy eating habits. It provides a
                visual representation of the recommended proportions of different food groups that should be included in
                a meal.
              </p>
              <p>The guide divides a plate into four sections:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Go Foods (Carbohydrates):</strong> Rice, bread, root crops - 1/4 of the plate
                </li>
                <li>
                  <strong>Grow Foods (Protein):</strong> Fish, lean meat, poultry, eggs, dried beans - 1/4 of the plate
                </li>
                <li>
                  <strong>Glow Foods (Vegetables):</strong> Green leafy and colorful vegetables - 1/2 of the plate
                </li>
                <li>
                  <strong>Fruits:</strong> Served as dessert or snacks
                </li>
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Pinggang+Pinoy+Diagram"
                alt="Pinggang Pinoy Food Guide"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1 relative aspect-square overflow-hidden rounded-lg border">
              <Image
                src="/placeholder.svg?height=500&width=500&text=PATHFIT+Cocina"
                alt="PATHFIT Cocina"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl font-bold">PATHFIT Cocina</h2>
              <p>
                As part of my PATHFIT 2 journey, I explored healthy cooking through the PATHFIT Cocina activities. This
                involved preparing nutritious meals that align with the Pinggang Pinoy guidelines while also being
                delicious and satisfying.
              </p>
              <p>Through these activities, I learned the importance of:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Balancing macronutrients in meals</li>
                <li>Incorporating a variety of colorful vegetables</li>
                <li>Choosing lean protein sources</li>
                <li>Preparing meals that are both nutritious and enjoyable</li>
                <li>Understanding portion control</li>
              </ul>
              <p>
                These cooking experiences have transformed my relationship with food, helping me see healthy eating not
                as a restriction but as an opportunity to explore delicious and nourishing options.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Food Log and Activity Tracker Section */}
      <Section className="bg-slate-50 dark:bg-slate-900">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Monthly Food & Activity Tracking</h2>
          <p className="text-lg text-muted-foreground">
            Visual documentation of my dietary intake and physical activities throughout the month
          </p>
        </div>

        <Tabs defaultValue="food-log" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="food-log" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Food Log
            </TabsTrigger>
            <TabsTrigger value="activity-tracker" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Activity Tracker
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food-log" className="space-y-6">
            <div className="grid gap-6">
              {foodLog.map((day, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {Object.entries(day.meals).map(([mealType, mealData]) => (
                        <div key={mealType} className="space-y-4">
                          <h4 className="font-semibold text-lg flex items-center gap-2 capitalize">
                            <span className="text-2xl">{getMealIcon(mealType)}</span>
                            {mealType}
                          </h4>

                          {/* Meal Photo */}
                          <div className="relative aspect-[3/2] overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-800 group">
                            <Image
                              src={mealData.photo || "/placeholder.svg"}
                              alt={`${mealType} - ${mealData.foods.join(", ")}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </div>

                          {/* Food Items */}
                          <ul className="space-y-2">
                            {mealData.foods.map((food, foodIndex) => (
                              <li
                                key={foodIndex}
                                className="text-sm bg-white dark:bg-slate-800 p-3 rounded-md border shadow-sm"
                              >
                                {food}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity-tracker" className="space-y-6">
            <div className="grid gap-6">
              {activitySchedule.map((day, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {day.day} -{" "}
                      {new Date(day.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Daily Activity Photo */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5" />
                          Daily Activity Photo
                        </h4>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-gray-50 dark:bg-gray-800 group">
                          <Image
                            src={day.photo || "/placeholder.svg"}
                            alt={`${day.day} activities - ${day.activities.map((a) => a.activity).join(", ")}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Activity Details */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Activities Schedule
                        </h4>
                        <div className="space-y-3">
                          {day.activities.map((activity, activityIndex) => (
                            <div
                              key={activityIndex}
                              className="bg-white dark:bg-slate-800 p-4 rounded-lg border shadow-sm space-y-3"
                            >
                              <div className="flex items-center justify-between">
                                <h5 className="font-semibold text-base">{activity.activity}</h5>
                                <Badge className={getIntensityColor(activity.intensity)}>{activity.intensity}</Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {activity.time}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Activity className="h-4 w-4" />
                                  {activity.duration}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">My Physical Activity Journey</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tracking my physical activities and progress throughout the PATHFIT 2 course
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Daily Steps",
              value: "8,500",
              description: "Average steps per day",
              icon: "👣",
            },
            {
              title: "Weekly Exercise",
              value: "4 hours",
              description: "Average active exercise time",
              icon: "🏋️",
            },
            {
              title: "Favorite Activity",
              value: "Walking",
              description: "Most frequent physical activity",
              icon: "🚶",
            },
            {
              title: "Strength Training",
              value: "2x weekly",
              description: "Resistance training sessions",
              icon: "💪",
            },
            {
              title: "Flexibility",
              value: "3x weekly",
              description: "Stretching and yoga sessions",
              icon: "🧘",
            },
            {
              title: "Active Minutes",
              value: "45 min/day",
              description: "Average active minutes",
              icon: "⏱️",
            },
          ].map((stat, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                <div className="text-4xl">{stat.icon}</div>
                <CardTitle className="mt-2">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
