import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ErrorBoundary } from "@/components/error-boundary"

// Import the updated components
import { CookingVideoSection } from "@/components/cooking-video-section"
import { EnhancedRecipeShowcase } from "@/components/enhanced-recipe-showcase"
import { SimpleRecipeSection } from "@/components/simple-recipe-section"

export default function PathfitCocinaPage() {
  return (
    <div className="min-h-screen">
      <ErrorBoundary>
        <Section className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20">
          <PageHeader
            title="PATHFIT Cocina"
            description="Highlights and memories from our PATHFIT Cocina cooking activities"
          />
        </Section>

        {/* Krispi Prince Featured Recipe with Photo */}
        <Section>
          <ErrorBoundary
            fallback={
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold mb-2">Featured Recipe Unavailable</h3>
                <p className="text-muted-foreground">The featured recipe section is temporarily unavailable.</p>
              </div>
            }
          >
            <EnhancedRecipeShowcase />
          </ErrorBoundary>
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
                group's creations. This not only made the experience enjoyable but also allowed students to appreciate
                the variety and creativity in preparing healthy meals.
              </p>
            </div>

            {/* Cooking Video Section - Replaces Photo Gallery */}
            <ErrorBoundary
              fallback={
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-2">Video Unavailable</h3>
                  <p className="text-muted-foreground">The cooking video is temporarily unavailable.</p>
                </div>
              }
            >
              <CookingVideoSection />
            </ErrorBoundary>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Experience</h2>
              <p>
                Participating in PATHFIT Cocina 2024 was a memorable highlight of my PATHFIT 2 journey. The activity
                gave me a deeper understanding of how nutrition supports an active and healthy lifestyle. It was
                exciting to apply what we learned in class by actually preparing and presenting balanced meals guided by
                the Pinggang Pinoy model.
              </p>
              <p>
                I especially enjoyed collaborating with my group during the cooking and plating process. It allowed us
                to be creative while also staying mindful of nutritional value. Seeing the variety of dishes prepared by
                other groups showed me how healthy food can also be fun, diverse, and culturally meaningful.
              </p>
              <p>
                Most of all, PATHFIT Cocina reminded me that taking care of our bodies starts with what we put on our
                plates. It was an eye-opening and rewarding experience that inspired me to make better food choices and
                to share what I've learned with others. It wasn't just a cooking activity — it was a step toward a
                healthier lifestyle.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Key Takeaways</h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Practical Nutrition Application:</strong> PATHFIT Cocina demonstrated how to apply the
                  Pinggang Pinoy guidelines in real cooking scenarios, making nutrition education hands-on and
                  memorable.
                </li>
                <li>
                  <strong>Creative Healthy Cooking:</strong> The activity showed that healthy meals can be both
                  nutritious and delicious, encouraging creativity in meal preparation while maintaining nutritional
                  balance.
                </li>
                <li>
                  <strong>Teamwork and Collaboration:</strong> Working in groups during the cooking process fostered
                  teamwork and allowed us to learn from each other's culinary skills and cultural food traditions.
                </li>
                <li>
                  <strong>Food as Medicine:</strong> The experience reinforced the concept that food is medicine, and
                  that proper nutrition is fundamental to supporting an active and healthy lifestyle.
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
          <ErrorBoundary
            fallback={
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold mb-2">Recipe Section Unavailable</h3>
                <p className="text-muted-foreground">The recipe section is temporarily unavailable.</p>
              </div>
            }
          >
            <SimpleRecipeSection />
          </ErrorBoundary>
        </Section>
      </ErrorBoundary>
    </div>
  )
}
