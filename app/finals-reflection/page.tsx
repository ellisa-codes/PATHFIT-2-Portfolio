import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"

export default function FinalsReflectionPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <PageHeader title="Finals Reflection" description="Looking back on my complete PATHFIT 1 journey" />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Course Overview</h2>
              <div className="mt-4 space-y-4">
                <p>
                  As I reach the end of my PATHFIT 1 journey, I'm taking time to reflect on the comprehensive experience
                  this course has provided. From the theoretical foundations of health and fitness to practical
                  applications in daily life, PATHFIT 1 has equipped me with knowledge and skills that extend far beyond
                  the classroom.
                </p>
                <p>The course covered a wide range of topics, including:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Fundamentals of physical fitness and its components</li>
                  <li>Nutrition principles and the Pinggang Pinoy framework</li>
                  <li>Exercise techniques and program design</li>
                  <li>Mental health and its connection to physical well-being</li>
                  <li>Health advocacy and community engagement</li>
                  <li>Sustainable lifestyle practices for long-term health</li>
                </ul>
                <p>
                  Through lectures, discussions, practical activities, and reflective exercises, the course provided a
                  holistic approach to understanding health and fitness that I will carry with me long after this
                  semester ends.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Personal Growth</h2>
              <div className="mt-4 space-y-4">
                <p>Looking back at where I started, I can see significant growth in multiple areas:</p>
                <h3 className="text-xl font-medium">Physical Development</h3>
                <p>
                  I've seen measurable improvements in my physical capabilities. My endurance has increased, allowing me
                  to engage in activities for longer periods without fatigue. I've developed better coordination and
                  body awareness through various movement exercises. Most importantly, I've established a consistent
                  physical activity routine that fits my lifestyle and preferences.
                </p>
                <h3 className="text-xl font-medium">Knowledge Acquisition</h3>
                <p>
                  My understanding of health and fitness has deepened significantly. I can now explain the science
                  behind different exercise modalities, understand nutritional principles, and make informed decisions
                  about my health. I've moved beyond following generic advice to developing personalized approaches
                  based on sound principles.
                </p>
                <h3 className="text-xl font-medium">Mindset Shift</h3>
                <p>
                  Perhaps the most profound change has been in my mindset. I no longer view physical activity as
                  something I "should" do but as something I want to do. I've developed a more positive relationship
                  with my body, focusing on what it can do rather than how it looks. I've also learned to appreciate the
                  mental health benefits of regular physical activity, using movement as a tool for stress management
                  and emotional regulation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Challenges and Lessons</h2>
              <div className="mt-4 space-y-4">
                <p>The journey wasn't without its challenges, each of which provided valuable lessons:</p>
                <h3 className="text-xl font-medium">Time Management</h3>
                <p>
                  Balancing academic responsibilities with regular physical activity was challenging. I learned to
                  integrate movement into my daily routine in smaller, manageable chunks rather than trying to find
                  large blocks of time for exercise. This approach made consistency more achievable and sustainable.
                </p>
                <h3 className="text-xl font-medium">Overcoming Plateaus</h3>
                <p>
                  There were periods when progress seemed to stall, which was frustrating. Through these experiences, I
                  learned the importance of patience and persistence. I also discovered the value of variety in my
                  routine, introducing new activities to challenge my body in different ways.
                </p>
                <h3 className="text-xl font-medium">Social Pressures</h3>
                <p>
                  Navigating social situations while trying to maintain healthy habits was sometimes difficult. I
                  learned to communicate my priorities effectively and find compromises that allowed me to enjoy social
                  activities without completely abandoning my health goals. I also found that sharing my journey with
                  friends created unexpected support systems.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Moving Forward</h2>
              <div className="mt-4 space-y-4">
                <p>
                  As I complete PATHFIT 1, I'm not viewing this as the end of a journey but rather as the beginning of a
                  lifelong commitment to health and well-being. Moving forward, I plan to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Continue Regular Physical Activity:</strong> Maintain my established routine while exploring
                    new activities that interest me.
                  </li>
                  <li>
                    <strong>Deepen My Knowledge:</strong> Continue learning about health and fitness through additional
                    courses, workshops, and independent research.
                  </li>
                  <li>
                    <strong>Share With Others:</strong> Use my knowledge and experience to support friends and family in
                    their health journeys, perhaps expanding my advocacy work.
                  </li>
                  <li>
                    <strong>Practice Adaptability:</strong> Recognize that life circumstances will change, and my
                    approach to health and fitness will need to adapt accordingly.
                  </li>
                  <li>
                    <strong>Maintain Balance:</strong> Remember that health encompasses physical, mental, and social
                    well-being, and strive for balance among these dimensions.
                  </li>
                </ul>
                <p>
                  PATHFIT 1 has provided me with a strong foundation, but the journey of health and fitness is ongoing.
                  I'm grateful for the knowledge, skills, and perspectives I've gained and am excited to continue
                  building upon them in the future.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Gratitude</h2>
              <div className="mt-4 space-y-4">
                <p>
                  I want to express my sincere gratitude to our instructor, [Instructor Name], whose guidance,
                  expertise, and encouragement made this learning journey both informative and enjoyable. I also
                  appreciate my classmates, whose diverse perspectives enriched our discussions and whose support
                  created a positive learning environment.
                </p>
                <p>
                  PATHFIT 1 has been more than just a course—it has been a transformative experience that has equipped
                  me with knowledge and skills that will benefit me throughout my life. For that, I am truly thankful.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
