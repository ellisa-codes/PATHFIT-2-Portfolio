import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { TriviaCard } from "@/components/trivia-card"

export default function HealthTriviasPage() {
  const triviaQuestions = [
    {
      question: "What percentage of the human body is water?",
      options: ["50-60%", "60-70%", "70-80%", "80-90%"],
      correctAnswer: 1,
      explanation:
        "The human body is composed of approximately 60-70% water. This percentage varies based on age, sex, and body composition.",
    },
    {
      question: "How many hours of sleep does the average adult need per night?",
      options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
      correctAnswer: 2,
      explanation:
        "According to the National Sleep Foundation, adults need 7-9 hours of sleep per night for optimal health and well-being.",
    },
    {
      question: "Which of these is NOT one of the three macronutrients?",
      options: ["Protein", "Carbohydrates", "Vitamins", "Fats"],
      correctAnswer: 2,
      explanation:
        "Vitamins are micronutrients, not macronutrients. The three macronutrients are proteins, carbohydrates, and fats.",
    },
    {
      question: "What is the recommended daily water intake for adults?",
      options: ["1-2 liters", "2-3 liters", "3-4 liters", "4-5 liters"],
      correctAnswer: 1,
      explanation:
        "The general recommendation is about 2-3 liters (or 8-10 glasses) of water per day, though this can vary based on activity level, climate, and individual needs.",
    },
    {
      question: "Which vitamin is produced when your skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: 3,
      explanation:
        "Vitamin D is produced when your skin is exposed to sunlight. It's essential for bone health and immune function.",
    },
    {
      question: "What is the average resting heart rate for adults?",
      options: ["40-50 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
      correctAnswer: 1,
      explanation:
        "The normal resting heart rate for adults ranges from 60 to 100 beats per minute (bpm). Athletes and very physically fit people might have lower resting heart rates.",
    },
  ]

  return (
    <>
      <Section className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20">
        <PageHeader title="Health Trivias" description="Test your knowledge with these interesting health facts" />
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-lg">
              How much do you know about health and fitness? Challenge yourself with these trivia questions and learn
              some interesting facts along the way!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {triviaQuestions.map((trivia, index) => (
              <TriviaCard
                key={index}
                question={trivia.question}
                options={trivia.options}
                correctAnswer={trivia.correctAnswer}
                explanation={trivia.explanation}
              />
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-muted p-6">
            <h2 className="text-2xl font-bold">Did You Know?</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <p className="font-medium">The human heart beats about 100,000 times per day.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  That's approximately 35 million times per year and 2.5 billion times in an average lifetime!
                </p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <p className="font-medium">Your brain uses about 20% of your body's total energy.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Despite making up only about 2% of your body weight, your brain requires a significant amount of
                  energy to function.
                </p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <p className="font-medium">Laughing for 10-15 minutes can burn up to 40 calories.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Laughter increases your heart rate and oxygen consumption, providing a mini workout!
                </p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <p className="font-medium">The human body has over 650 muscles.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  These muscles make up about 40% of your total body weight and are responsible for movement, posture,
                  and circulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
