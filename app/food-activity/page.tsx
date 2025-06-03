import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Utensils, Activity } from "lucide-react"

export default function FoodActivityPage() {
  // Sample food log data for a month
  const foodLog = [
    {
      date: "2024-01-01",
      meals: {
        breakfast: ["Oatmeal with banana and honey", "Green tea"],
        snack: ["Apple slices with peanut butter"],
        lunch: ["Grilled chicken salad", "Brown rice", "Water"],
        dinner: ["Baked salmon", "Steamed vegetables", "Quinoa"],
      },
    },
    {
      date: "2024-01-02",
      meals: {
        breakfast: ["Whole grain toast", "Scrambled eggs", "Orange juice"],
        snack: ["Greek yogurt with berries"],
        lunch: ["Vegetable soup", "Whole wheat bread", "Herbal tea"],
        dinner: ["Lean beef stir-fry", "Brown rice", "Mixed vegetables"],
      },
    },
    {
      date: "2024-01-03",
      meals: {
        breakfast: ["Smoothie bowl with fruits", "Granola", "Almond milk"],
        snack: ["Nuts and dried fruits"],
        lunch: ["Tuna sandwich", "Side salad", "Water"],
        dinner: ["Grilled tofu", "Sweet potato", "Green beans"],
      },
    },
    {
      date: "2024-01-04",
      meals: {
        breakfast: ["Pancakes with fresh fruits", "Maple syrup", "Coffee"],
        snack: ["Protein bar"],
        lunch: ["Chicken wrap", "Vegetable chips", "Iced tea"],
        dinner: ["Fish tacos", "Black beans", "Avocado salad"],
      },
    },
    {
      date: "2024-01-05",
      meals: {
        breakfast: ["Cereal with milk", "Banana", "Orange juice"],
        snack: ["Cheese and crackers"],
        lunch: ["Pasta salad", "Grilled vegetables", "Sparkling water"],
        dinner: ["Pork tenderloin", "Mashed potatoes", "Steamed broccoli"],
      },
    },
  ]

  // Sample physical activity data for Monday, Wednesday, Friday
  const activitySchedule = [
    {
      date: "2024-01-01",
      day: "Monday",
      activities: [
        { time: "6:00 AM", activity: "Morning Jog", duration: "30 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Strength Training", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2024-01-03",
      day: "Wednesday",
      activities: [
        { time: "6:30 AM", activity: "Yoga Session", duration: "45 minutes", intensity: "Low" },
        { time: "5:00 PM", activity: "Swimming", duration: "40 minutes", intensity: "Moderate" },
      ],
    },
    {
      date: "2024-01-05",
      day: "Friday",
      activities: [
        { time: "7:00 AM", activity: "Cycling", duration: "50 minutes", intensity: "Moderate" },
        { time: "6:30 PM", activity: "Basketball", duration: "60 minutes", intensity: "High" },
      ],
    },
    {
      date: "2024-01-08",
      day: "Monday",
      activities: [
        { time: "6:00 AM", activity: "Running", duration: "35 minutes", intensity: "High" },
        { time: "7:30 PM", activity: "Weight Lifting", duration: "50 minutes", intensity: "High" },
      ],
    },
    {
      date: "2024-01-10",
      day: "Wednesday",
      activities: [
        { time: "6:30 AM", activity: "Pilates", duration: "40 minutes", intensity: "Moderate" },
        { time: "5:30 PM", activity: "Tennis", duration: "60 minutes", intensity: "High" },
      ],
    },
    {
      date: "2024-01-12",
      day: "Friday",
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
                As part of my PATHFIT 1 journey, I explored healthy cooking through the PATHFIT Cocina activities. This
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
            Comprehensive tracking of my dietary intake and physical activities throughout the month
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
                      {Object.entries(day.meals).map(([mealType, foods]) => (
                        <div key={mealType} className="space-y-3">
                          <h4 className="font-semibold text-lg flex items-center gap-2 capitalize">
                            <span className="text-2xl">{getMealIcon(mealType)}</span>
                            {mealType}
                          </h4>
                          <ul className="space-y-2">
                            {foods.map((food, foodIndex) => (
                              <li key={foodIndex} className="text-sm bg-white dark:bg-slate-800 p-2 rounded-md border">
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
                    <div className="grid gap-4 md:grid-cols-2">
                      {day.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="bg-white dark:bg-slate-800 p-4 rounded-lg border space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg">{activity.activity}</h4>
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
          Tracking my physical activities and progress throughout the PATHFIT 1 course
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
