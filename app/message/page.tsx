import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function MessagePage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <PageHeader
          title="Message for PATHFIT 2 Instructor"
          description="Share your thoughts and feedback about the course"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl space-y-8">
          <ContactForm />

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">A Personal Note</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Dear Professor Jadera,</p>
                <p>
                  I want to express my heartfelt gratitude for your guidance throughout the PATHFIT 2 course. Your
                  teaching approach has made learning about health and fitness both engaging and meaningful. The way you
                  connected theoretical concepts with practical applications helped me understand not just the "what"
                  but also the "why" behind healthy living practices.
                </p>
                <p>
                  Your emphasis on individual progress rather than comparison with others created a supportive learning
                  environment where I felt comfortable exploring new activities and pushing my boundaries. The diverse
                  range of topics covered - from nutrition and exercise physiology to mental health and community
                  advocacy - provided a comprehensive foundation that I know will serve me well beyond this course.
                </p>
                <p>
                  The reflective exercises you assigned helped me develop a deeper understanding of my own relationship
                  with health and fitness. Through these reflections, I've been able to identify patterns, celebrate
                  progress, and set meaningful goals for the future.
                </p>
                <p>
                  Thank you for your patience, encouragement, and dedication to helping us develop not just knowledge
                  but also practical skills and positive attitudes toward lifelong wellness. Your impact extends far
                  beyond the classroom, and I'm grateful to have been your student.
                </p>
                <p>
                  With sincere appreciation,
                  <br />
                  <span className="font-semibold text-foreground">Ellisa Shammah Bonete</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Course Highlights & Reflections</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Favorite Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Individual and collaboration exercises</li>
                    <li>• Mindfulness and stress management sessions</li>
                    <li>• Nutrition planning workshops</li>
                    <li>• Fitness goal setting and tracking</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Learnings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Importance of balanced nutrition</li>
                    <li>• Mental health awareness</li>
                    <li>• Building sustainable fitness habits</li>
                    <li>• Community health advocacy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
