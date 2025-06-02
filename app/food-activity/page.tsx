import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FoodActivityPage() {
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

      <Section className="bg-slate-50 dark:bg-slate-900">
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
