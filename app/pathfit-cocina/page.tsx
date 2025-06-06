import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { CookingVideoSection } from "@/components/cooking-video-section"

export default function PathfitCocinaPage() {
  return (
    <div className="min-h-screen">
      <Section className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20">
        <PageHeader
          title="PATHFIT Cocina"
          description="Highlights and memories from our PATHFIT Cocina cooking activities"
        />
      </Section>

      {/* Krispi Prince Featured Recipe */}
      <Section>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">⭐</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Featured Recipe: Krispi Prince
              </h2>
              <span className="text-4xl">⭐</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our signature creation that perfectly balances flavor, nutrition, and visual appeal - showcasing the
              creativity of PATHFIT Cocina
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Recipe Image */}
            <div className="flex flex-col h-full overflow-hidden border-2 border-yellow-200 dark:border-yellow-800 shadow-xl rounded-lg">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-4">
                <h3 className="text-2xl font-bold">Krispi Prince</h3>
              </div>
              <div className="p-0">
                <div className="relative h-[300px] w-full bg-gradient-to-br from-yellow-400/20 to-orange-600/20 overflow-hidden rounded-b-lg">
                  <img
                    src="/Cocina.jpg"
                    alt="Krispi Prince Dish"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-4xl">👨‍🍳</span>
                      </div>
                      <p className="text-white font-medium">Krispi Prince Recipe</p>
                      <p className="text-white/80 text-sm">Healthy crispy chicken dish</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Details */}
            <div className="border-2 border-yellow-200 dark:border-yellow-800 shadow-xl rounded-lg">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Recipe Details</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <span>🕐</span>
                    <span>25 minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>4 servings</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👨‍🍳</span>
                    <span>Medium</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Description</h4>
                  <p className="text-muted-foreground">
                    Krispi Prince is our creative take on kwek-kwek, made to fit the Pinggang Pinoy guide for healthy eating. Instead of the usual batter, we use a nutrient-packed mix that gives it a unique crunch and flavor. Paired with a variety of veggies and whole grains, it turns a popular street food into a complete, balanced meal that’s both satisfying and wholesome.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-center">
                      High Protein
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-center">
                      Balanced Nutrition
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-center">
                      Filipino Fusion
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-center">
                      Student Favorite
                    </span>
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
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Event Overview</h2>
            <p className="text-lg">
              PATHFIT Cocina is a fun and interactive activity under the PATHFIT (Physical Activity Towards Health and
              Fitness) program that focuses on nutrition and healthy eating. It combines practical cooking knowledge
              with scientific nutrition concepts to help students understand the value of balanced meals. Using the
              Pinggang Pinoy model as a guide, PATHFIT Cocina teaches how to prepare nutritious dishes that support
              energy, focus, and overall wellness in everyday life.
            </p>
            <p>
              The day began with each group preparing and plating their nutritious dishes, guided by the principles of
              the Pinggang Pinoy model. Once the meals were ready, a panel of judges evaluated the dishes based on
              presentation, balance, and nutritional value.
            </p>
            <p>
              One of the highlights of the event was the food tasting, where everyone had the chance to sample each
              group's creations. This not only made the experience enjoyable but also allowed students to appreciate the
              variety and creativity in preparing healthy meals.
            </p>
          </div>

          {/* Enhanced Cooking Video Section */}
          <CookingVideoSection />

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">My Experience</h2>
            <p>
              Participating in PATHFIT Cocina 2024 was a memorable highlight of my PATHFIT 2 journey. The activity gave
              me a deeper understanding of how nutrition supports an active and healthy lifestyle. It was exciting to
              apply what we learned in class by actually preparing and presenting balanced meals guided by the Pinggang
              Pinoy model.
            </p>
            <p>
              I especially enjoyed collaborating with my group during the cooking and plating process. It allowed us to
              be creative while also staying mindful of nutritional value. Seeing the variety of dishes prepared by
              other groups showed me how healthy food can also be fun, diverse, and culturally meaningful.
            </p>
            <p>
              Most of all, PATHFIT Cocina reminded me that taking care of our bodies starts with what we put on our
              plates. It was an eye-opening and rewarding experience that inspired me to make better food choices and to
              share what I've learned with others. It wasn't just a cooking activity — it was a step toward a healthier
              lifestyle.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Key Takeaways</h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Practical Nutrition Application:</strong> PATHFIT Cocina demonstrated how to apply the Pinggang
                Pinoy guidelines in real cooking scenarios, making nutrition education hands-on and memorable.
              </li>
              <li>
                <strong>Creative Healthy Cooking:</strong> The activity showed that healthy meals can be both nutritious
                and delicious, encouraging creativity in meal preparation while maintaining nutritional balance.
              </li>
              <li>
                <strong>Teamwork and Collaboration:</strong> Working in groups during the cooking process fostered
                teamwork and allowed us to learn from each other's culinary skills and cultural food traditions.
              </li>
              <li>
                <strong>Food as Medicine:</strong> The experience reinforced the concept that food is medicine, and that
                proper nutrition is fundamental to supporting an active and healthy lifestyle.
              </li>
              <li>
                <strong>Sustainable Healthy Habits:</strong> PATHFIT Cocina inspired long-term commitment to making
                better food choices and incorporating balanced nutrition into daily life beyond the classroom.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Cooking Techniques Learned</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <h4 className="font-semibold text-lg mb-2">🥗 Healthy Preparation Methods</h4>
                <ul className="text-sm space-y-1">
                  <li>• Steaming vegetables to retain nutrients</li>
                  <li>• Grilling proteins without excess oil</li>
                  <li>• Using herbs and spices for flavor</li>
                  <li>• Proper portion control techniques</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <h4 className="font-semibold text-lg mb-2">🍽️ Pinggang Pinoy Implementation</h4>
                <ul className="text-sm space-y-1">
                  <li>• Balancing Go, Grow, and Glow foods</li>
                  <li>• Creative plating for visual appeal</li>
                  <li>• Incorporating local ingredients</li>
                  <li>• Understanding food group proportions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recipe Section */}
      <Section>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">👨‍🍳</span>
              <h2 className="text-4xl font-bold">PATHFIT Cocina Recipes</h2>
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover healthy recipes that follow the Pinggang Pinoy guidelines. Each recipe is categorized by food
              groups to help you create balanced, nutritious meals.
            </p>
          </div>

          {/* Sample Recipes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Krispi Prince</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs">
                    Grow
                  </span>
                </div>
              </div>
              <div className="p-4">
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
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Rainbow Vegetable Salad</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 rounded-full text-xs">
                    Glow
                  </span>
                </div>
              </div>
              <div className="p-4">
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
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Brown Rice Energy Bowl</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-xs">
                    Go
                  </span>
                </div>
              </div>
              <div className="p-4">
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
              </div>
            </div>
          </div>

          {/* Pinggang Pinoy Guide */}
          <div className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-6">Pinggang Pinoy Food Groups</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-sm">
                  Go Foods
                </span>
                <p className="text-sm">
                  <strong>Energy-giving foods:</strong> Rice, bread, pasta, cereals, and other carbohydrates that fuel
                  your body.
                </p>
              </div>
              <div className="text-center space-y-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-sm">
                  Grow Foods
                </span>
                <p className="text-sm">
                  <strong>Body-building foods:</strong> Fish, meat, poultry, eggs, beans, and dairy for muscle growth
                  and repair.
                </p>
              </div>
              <div className="text-center space-y-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 rounded-full text-sm">
                  Glow Foods
                </span>
                <p className="text-sm">
                  <strong>Protective foods:</strong> Fruits and vegetables rich in vitamins and minerals for healthy
                  skin and immunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
