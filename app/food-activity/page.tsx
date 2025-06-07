import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { RobustImage } from "@/components/robust-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollableLogContainer } from "@/components/scrollable-log-container"

export default function FoodActivityPage() {
  const foodLog = [
    {
      date: "2025-03-25",
      meals: {
        breakfast: {
          foods: ["3 mini pancakes", "Milk"],
          photo: "/March25Breakfast.jpg",
        },
        snack: {
          foods: ["37° Coffee"],
          photo: "/March25Snacks.jpg",
        },
        lunch: {
          foods: ["Burger steak with rice", "Water"],
          photo: "/March25Lunch.jpg",
        },
        dinner: {
          foods: ["Pork with rice", "Steamed potato", "Water"],
          photo: "/March25Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-26",
      meals: {
        breakfast: {
          foods: ["1 fried egg", "1 cup of rice", "1 cup of milk"],
          photo: "/March26Breakfast.jpg",
        },
        snack: {
          foods: ["French fries", "Fishball"],
          photo: "/March26Snacks.jpg",
        },
        lunch: {
          foods: ["2 cups of rice", "Pork adobo", "Lechon", "Afritada"],
          photo: "/March26Lunch.jpg",
        },
        dinner: {
          foods: ["1 cup of rice", "Rellenong squid"],
          photo: "/March26Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-27",
      meals: {
        breakfast: {
          foods: ["Burger steak", "1 cup of rice", "1 cup of water"],
          photo: "/March27Breakfast.jpg",
        },
        snack: {
          foods: ["Pizza", "Mango shake", "Milktea"],
          photo: "/March27Snack.jpg",
        },
        lunch: {
          foods: ["Fried chicken", "1 cup of rice", "1 cup of water"],
          photo: "/March27Lunch.jpg",
        },
        dinner: {
          foods: ["Grilled steak", "2 cups of rice", "1 cup of water"],
          photo: "/March27Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-28",
      meals: {
        breakfast: {
          foods: ["Longganisa", "1 cup of rice", "1 cup of water"],
          photo: "/March28Breakfast.jpg",
        },
        snack: {
          foods: ["Donut", "1 cup of iced coffee"],
          photo: "/March28Snack.jpg",
        },
        lunch: {
          foods: ["Chicken", "2 cups of rice", "1 cup of water"],
          photo: "/March28Lunch.jpg",
        },
        dinner: {
          foods: ["Pork", "2 bowls of rice", "Potato", "Lettuce", "1 cup of coke"],
          photo: "/March28Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-29",
      meals: {
        breakfast: {
          foods: ["Oatmeal with milk", "Sandwich"],
          photo: "/March29Breakfast.jpg",
        },
        snack: {
          foods: ["Halo-halo"],
          photo: "/March29Snack.jpg",
        },
        lunch: {
          foods: ["Fried chicken", "Spaghetti"],
          photo: "/March29Lunch.jpg",
        },
        dinner: {
          foods: ["Squid rings", "Fried fish", "Adobo", "2 cups of rice"],
          photo: "/March29Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-30",
      meals: {
        breakfast: {
          foods: ["Fried chicken", "1 cup of rice"],
          photo: "/March30Breakfast.jpg",
        },
        snack: {
          foods: ["Buko juice"],
          photo: "/March30Snack.jpg",
        },
        lunch: {
          foods: ["Fried fish", "1 cup of rice"],
          photo: "/March30Lunch.jpg",
        },
        dinner: {
          foods: ["Chicken", "2 cups of rice"],
          photo: "/March30Dinner.jpg",
        },
      },
    },
    {
      date: "2025-03-31",
      meals: {
        breakfast: {
          foods: ["Silog meal", "Coffee"],
          photo: "/March31Breakfast.jpg",
        },
        snack: {
          foods: ["Biscuits", "Hot chocolate"],
          photo: "/March31Snack.jpg",
        },
        lunch: {
          foods: ["Chicken adobo", "Rice", "Vegetables"],
          photo: "/placeholder.svg?height=300&width=400&text=Chicken+Adobo+Lunch",
        },
        dinner: {
          foods: ["Grilled fish", "Rice", "Soup"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Fish+Dinner",
        },
      },
    },
    {
      date: "2025-04-01",
      meals: {
        breakfast: {
          foods: ["Pandesal", "Coffee", "Cheese"],
          photo: "/placeholder.svg?height=300&width=400&text=Pandesal+Breakfast",
        },
        snack: {
          foods: ["Turon", "Soda"],
          photo: "/April1Snack.jpg",
        },
        lunch: {
          foods: ["Beef caldereta", "Rice"],
          photo: "/placeholder.svg?height=300&width=400&text=Beef+Caldereta+Lunch",
        },
        dinner: {
          foods: ["Lechon kawali", "Rice", "Vegetables"],
          photo: "/placeholder.svg?height=300&width=400&text=Lechon+Kawali+Dinner",
        },
      },
    },
    {
      date: "2025-04-02",
      meals: {
        breakfast: {
          foods: ["Tocilog", "Orange juice"],
          photo: "/placeholder.svg?height=300&width=400&text=Tocilog+Breakfast",
        },
        snack: {
          foods: ["Mais con yelo"],
          photo: "/April3Snacks.jpeg",
        },
        lunch: {
          foods: ["Chicken curry", "Rice"],
          photo: "/April2.jpg",
        },
        dinner: {
          foods: ["Grilled pork", "Rice", "Salad"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Pork+Dinner",
        },
      },
    },
    {
      date: "2025-04-04",
      meals: {
        breakfast: {
          foods: ["Bangsilog", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Bangsilog+Breakfast",
        },
        snack: {
          foods: ["Buko pie", "Milk tea"],
          photo: "/placeholder.svg?height=300&width=400&text=Buko+Pie+Snack",
        },
        lunch: {
          foods: ["Sisig", "Rice", "Beer"],
          photo: "/April4.jpg",
        },
        dinner: {
          foods: ["Tinola", "Rice"],
          photo: "/placeholder.svg?height=300&width=400&text=Tinola+Dinner",
        },
      },
    },
    {
      date: "2025-04-07",
      meals: {
        breakfast: {
          foods: ["Hotsilog", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Hotsilog+Breakfast",
        },
        snack: {
          foods: ["Bibingka", "Hot chocolate"],
          photo: "/placeholder.svg?height=300&width=400&text=Bibingka+Snack",
        },
        lunch: {
          foods: ["Menudo", "Rice"],
          photo: "/April7.jpg",
        },
        dinner: {
          foods: ["Grilled tilapia", "Rice", "Vegetables"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Tilapia+Dinner",
        },
      },
    },
    {
      date: "2025-04-09",
      meals: {
        breakfast: {
          foods: ["Cornsilog", "Milk"],
          photo: "/placeholder.svg?height=300&width=400&text=Cornsilog+Breakfast",
        },
        snack: {
          foods: ["Leche flan", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Leche+Flan+Snack",
        },
        lunch: {
          foods: ["Bicol express", "Rice"],
          photo: "/April9.jpeg",
        },
        dinner: {
          foods: ["Grilled chicken", "Rice", "Soup"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Chicken+Dinner",
        },
      },
    },
    {
      date: "2025-04-11",
      meals: {
        breakfast: {
          foods: ["Daingsilog", "Orange juice"],
          photo: "/placeholder.svg?height=300&width=400&text=Daingsilog+Breakfast",
        },
        snack: {
          foods: ["Ube halaya", "Milk"],
          photo: "/placeholder.svg?height=300&width=400&text=Ube+Halaya+Snack",
        },
        lunch: {
          foods: ["Pakbet", "Rice", "Fried fish"],
          photo: "/April11.jpg",
        },
        dinner: {
          foods: ["Bulalo", "Rice"],
          photo: "/placeholder.svg?height=300&width=400&text=Bulalo+Dinner",
        },
      },
    },
    {
      date: "2025-04-14",
      meals: {
        breakfast: {
          foods: ["Spam silog", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Spam+Silog+Breakfast",
        },
        snack: {
          foods: ["Taho", "Crackers"],
          photo: "/placeholder.svg?height=300&width=400&text=Taho+Snack",
        },
        lunch: {
          foods: ["Laing", "Rice", "Grilled pork"],
          photo: "/April14.jpg",
        },
        dinner: {
          foods: ["Fish sinigang", "Rice"],
          photo: "/placeholder.svg?height=300&width=400&text=Fish+Sinigang+Dinner",
        },
      },
    },
    {
      date: "2025-04-16",
      meals: {
        breakfast: {
          foods: ["Longsilog", "Milk"],
          photo: "/placeholder.svg?height=300&width=400&text=Longsilog+Breakfast",
        },
        snack: {
          foods: ["Biko", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Biko+Snack",
        },
        lunch: {
          foods: ["Mechado", "Rice"],
          photo: "/April16.jpg",
        },
        dinner: {
          foods: ["Grilled bangus", "Rice", "Vegetables"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Bangus+Dinner",
        },
      },
    },
    {
      date: "2025-04-18",
      meals: {
        breakfast: {
          foods: ["Chicksilog", "Orange juice"],
          photo: "/placeholder.svg?height=300&width=400&text=Chicksilog+Breakfast",
        },
        snack: {
          foods: ["Maja blanca", "Hot chocolate"],
          photo: "/placeholder.svg?height=300&width=400&text=Maja+Blanca+Snack",
        },
        lunch: {
          foods: ["Dinuguan", "Rice", "Puto"],
          photo: "/April18.jpg",
        },
        dinner: {
          foods: ["Grilled squid", "Rice", "Salad"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Squid+Dinner",
        },
      },
    },
    {
      date: "2025-04-20",
      meals: {
        breakfast: {
          foods: ["Beef tapa", "Rice", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Beef+Tapa+Breakfast",
        },
        snack: {
          foods: ["Suman", "Latik"],
          photo: "/placeholder.svg?height=300&width=400&text=Suman+Snack",
        },
        lunch: {
          foods: ["Pork barbecue", "Rice", "Atchara"],
          photo: "/placeholder.svg?height=300&width=400&text=Pork+Barbecue+Lunch",
        },
        dinner: {
          foods: ["Chicken tinola", "Rice"],
          photo: "/April20Dinner.jpg",
        },
      },
    },
    {
      date: "2025-04-21",
      meals: {
        breakfast: {
          foods: ["Porksilog", "Milk"],
          photo: "/placeholder.svg?height=300&width=400&text=Porksilog+Breakfast",
        },
        snack: {
          foods: ["Cassava cake", "Coffee"],
          photo: "/placeholder.svg?height=300&width=400&text=Cassava+Cake+Snack",
        },
        lunch: {
          foods: ["Morcon", "Rice", "Vegetables"],
          photo: "/April21.jpg",
        },
        dinner: {
          foods: ["Fish escabeche", "Rice"],
          photo: "/placeholder.svg?height=300&width=400&text=Fish+Escabeche+Dinner",
        },
      },
    },
    {
      date: "2025-04-23",
      meals: {
        breakfast: {
          foods: ["Bangsilog", "Orange juice"],
          photo: "/placeholder.svg?height=300&width=400&text=Bangsilog+Breakfast",
        },
        snack: {
          foods: ["Puto bumbong", "Hot chocolate"],
          photo: "/placeholder.svg?height=300&width=400&text=Puto+Bumbong+Snack",
        },
        lunch: {
          foods: ["Igado", "Rice"],
          photo: "/April23.jpg",
        },
        dinner: {
          foods: ["Grilled pork belly", "Rice", "Soup"],
          photo: "/placeholder.svg?height=300&width=400&text=Grilled+Pork+Belly+Dinner",
        },
      },
    },
    {
      date: "2025-04-25",
      meals: {
        breakfast: {
          foods: ["Bacon", "2 Eggs", "1 cup of rice"],
          photo: "/https://live.staticflickr.com/7013/6765424445_183bec145a_b.jpg",
        },
        snack: {
          foods: ["Kutsinta"],
          photo: "/https://www.willflyforfood.net/wp-content/uploads/2022/04/filipino-snacks-kutsinta.jpg.webp",
        },
        lunch: {
          foods: ["Pork estofado", "Rice"],
          photo: "/April25Lunch.jpg",
        },
        dinner: {
          foods: ["Vegetable", "1 cup of rice"],
          photo: "/https://media.cnn.com/api/v1/images/stellar/prod/160520183311-21-filipino-dishes-pinakbet.jpg?q=w_3648,h_2736,x_0,y_0,c_fill",
        },
      },
    },
  ]

  // Sample physical activity data with daily photos
  const activitySchedule = [
    {
      date: "2025-03-24",
      day: "Monday",
      photo: "/March24.jpg",
      activities: [
        { time: "6:00 AM", activity: "Morning Jog", duration: "30 minutes", intensity: "Moderate" },
        { time: "7:00 PM", activity: "Running", duration: "45 minutes", intensity: "High" },
      ],
    },
    {
      date: "2025-03-26",
      day: "Wednesday",
      photo: "/March26.jpg",
      activities: [
        { time: "6:20 AM", activity: "Jumping Jacks", duration: "20x", intensity: "Moderate" },
        { time: "7:00 AM", activity: "Mountain Climbers", duration: "20x2", intensity: "Moderate" },
        { time: "7:30 AM", activity: "Calf Raises", duration: "20x2", intensity: "Moderate" },
      ],
    },
    {
      date: "2025-03-28",
      day: "Friday",
      photo: "/March28.jpeg",
      activities: [{ time: "8:00 AM", activity: "Swimming", duration: "100 minutes", intensity: "Moderate" }],
    },
    {
      date: "2025-03-31",
      day: "Monday",
      photo: "/March31.jpg",
      activities: [{ time: "10:00 AM", activity: "Swimming", duration: "120 minutes", intensity: "Moderate" }],
    },
    {
      date: "2025-04-02",
      day: "Wednesday",
      photo: "/April2.jpg",
      activities: [{ time: "6:30 AM", activity: "Running", duration: "50 minutes", intensity: "High" }],
    },
    {
      date: "2025-04-04",
      day: "Friday",
      photo: "/April4.jpg",
      activities: [{ time: "7:00 AM", activity: "Island Hopping", duration: "180 minutes", intensity: "High" }],
    },
  ]

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
              <RobustImage
                src="https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/494001641_1257821296346643_8413648269398817876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pqXYTkMRIdIQ7kNvwEUA0FC&_nc_oc=Adn0ThhsKpY6haX0BbzZ2czl2gYksc4KvumbKOCnHcGmSx-mEFaZr00xZSZxQSIAsmkZRZWzD39Lvw_DadR7-QVx&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=TcBamuHDAW63lh3DRSam9w&oh=00_AfOkVA-aDOQuKiMuLkRA_zAF323noFz6sHzZP3jao6oS8w&oe=68488295"
                alt="Pinggang Pinoy Food Guide"
                fill
                className="object-cover"
                priority
                fallbackSrc="/placeholder.svg?height=400&width=400&text=Pinggang+Pinoy+Guide"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1 relative aspect-square overflow-hidden rounded-lg border">
              <RobustImage
                src="/Cocina.jpg"
                alt="PATHFIT Cocina"
                fill
                className="object-cover"
                priority
                fallbackSrc="/placeholder.svg?height=400&width=400&text=PATHFIT+Cocina"
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

        <ScrollableLogContainer foodLog={foodLog} activitySchedule={activitySchedule} />
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
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-md interactive-element"
            >
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
