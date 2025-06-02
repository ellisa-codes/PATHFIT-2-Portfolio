import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"

export default function MidtermReflectionPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
        <PageHeader
          title="Midterm Reflection"
          description="My thoughts and insights from the first half of the PATHFIT 2 course"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Learning Journey</h2>
              <div className="mt-4 space-y-4">
                <p>
                  As I reflect on the first half of the PATHFIT 2 course, I'm amazed at how much I've learned about
                  health, fitness, and overall well-being. The journey began with understanding the fundamental concepts
                  of physical fitness and its importance in our daily lives.
                </p>
                <p>
                  One of the most valuable lessons I've gained is the understanding that fitness is not just about
                  physical appearance but about overall health and functionality. The course has helped me shift my
                  perspective from focusing solely on aesthetics to appreciating the importance of strength, endurance,
                  flexibility, and cardiovascular health.
                </p>
                <p>
                  I've also developed a deeper understanding of nutrition through the Pinggang Pinoy framework, which
                  has transformed how I approach meal planning and food choices. Learning about the balance of
                  macronutrients and the importance of variety in our diet has been eye-opening.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Challenges and Growth</h2>
              <div className="mt-4 space-y-4">
                <p>
                  The journey hasn't been without challenges. Initially, I struggled with maintaining consistency in my
                  physical activities. Finding time between academic responsibilities and other commitments was
                  difficult, but the course structure helped me develop better time management skills.
                </p>
                <p>
                  Another challenge was overcoming preconceived notions about fitness and health. I had to unlearn
                  several myths and misconceptions that I had internalized over the years. This process of unlearning
                  and relearning has been both challenging and rewarding.
                </p>
                <p>
                  Despite these challenges, I've experienced significant growth. My endurance has improved, I've
                  developed better eating habits, and I've become more mindful of my overall well-being. The course has
                  also helped me develop a more positive relationship with physical activity, seeing it as an enjoyable
                  part of my routine rather than a chore.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Key Insights</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="italic">
                    "Physical activity is not just about exercise; it's about incorporating movement into our daily
                    lives in ways that are sustainable and enjoyable."
                  </p>
                </div>
                <p>
                  This insight has been transformative for me. I've learned that I don't need to spend hours at the gym
                  to be physically active. Simple changes like taking the stairs instead of the elevator, walking
                  instead of driving short distances, and taking short movement breaks during study sessions can
                  significantly impact my overall activity level.
                </p>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="italic">
                    "Nutrition is not about strict diets but about making informed choices that nourish our bodies."
                  </p>
                </div>
                <p>
                  The course has helped me move away from the diet mentality and towards a more balanced approach to
                  nutrition. I've learned to appreciate food not just for its nutritional value but also for the joy and
                  cultural significance it brings to our lives.
                </p>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="italic">"Mental and physical health are deeply interconnected."</p>
                </div>
                <p>
                  Perhaps the most profound insight has been understanding the connection between mental and physical
                  well-being. Physical activity has become a tool for managing stress and improving my mental health,
                  while a positive mindset has helped me stay motivated in my fitness journey.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Looking Ahead</h2>
              <div className="mt-4 space-y-4">
                <p>
                  As I look towards the second half of the course, I'm excited to build on the foundation I've
                  established. I aim to further improve my physical fitness, particularly focusing on strength training
                  and flexibility, areas where I still have room for growth.
                </p>
                <p>
                  I also plan to deepen my understanding of nutrition and explore how different foods affect my energy
                  levels, mood, and overall performance. The Pinggang Pinoy framework will continue to guide my food
                  choices, but I want to develop a more intuitive understanding of my body's needs.
                </p>
                <p>
                  Additionally, I'm looking forward to exploring the social aspects of fitness and health. I plan to
                  engage more with my peers, perhaps forming a small group for physical activities or sharing healthy
                  recipes and meal ideas.
                </p>
                <p>
                  Overall, I'm grateful for the knowledge and experiences gained so far and am committed to continuing
                  this journey of growth and learning in the second half of the PATHFIT 2 course.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
