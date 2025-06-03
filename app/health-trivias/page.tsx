import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { TriviaCard } from "@/components/trivia-card"

export default function HealthTriviasPage() {
  const nutritionQuestions = [
    {
      question: "What percentage of the human body is water?",
      options: ["50-60%", "60-70%", "70-80%", "80-90%"],
      correctAnswer: 1,
      explanation:
        "The human body is composed of approximately 60-70% water. This percentage varies based on age, sex, and body composition.",
      category: "Nutrition",
    },
    {
      question: "Which vitamin is produced when your skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: 3,
      explanation:
        "Vitamin D is produced when your skin is exposed to sunlight. It's essential for bone health and immune function.",
      category: "Nutrition",
    },
    {
      question: "What is the recommended daily water intake for adults?",
      options: ["1-2 liters", "2-3 liters", "3-4 liters", "4-5 liters"],
      correctAnswer: 1,
      explanation:
        "The general recommendation is about 2-3 liters (or 8-10 glasses) of water per day, though this can vary based on activity level, climate, and individual needs.",
      category: "Nutrition",
    },
    {
      question: "Which of these is NOT one of the three macronutrients?",
      options: ["Protein", "Carbohydrates", "Vitamins", "Fats"],
      correctAnswer: 2,
      explanation:
        "Vitamins are micronutrients, not macronutrients. The three macronutrients are proteins, carbohydrates, and fats.",
      category: "Nutrition",
    },
    {
      question: "How many calories does one gram of fat provide?",
      options: ["4 calories", "7 calories", "9 calories", "12 calories"],
      correctAnswer: 2,
      explanation:
        "Fat provides 9 calories per gram, making it the most calorie-dense macronutrient. Carbohydrates and proteins provide 4 calories per gram.",
      category: "Nutrition",
    },
    {
      question: "Which mineral is essential for healthy bones and teeth?",
      options: ["Iron", "Calcium", "Potassium", "Zinc"],
      correctAnswer: 1,
      explanation:
        "Calcium is crucial for building and maintaining strong bones and teeth. It also plays a role in muscle function and blood clotting.",
      category: "Nutrition",
    },
    {
      question: "What is the primary function of antioxidants in the body?",
      options: ["Provide energy", "Build muscle", "Fight free radicals", "Regulate temperature"],
      correctAnswer: 2,
      explanation:
        "Antioxidants help protect cells from damage caused by free radicals, which can contribute to aging and various diseases.",
      category: "Nutrition",
    },
    {
      question: "Which food group should make up the largest portion of your plate according to MyPlate?",
      options: ["Protein", "Grains", "Vegetables", "Dairy"],
      correctAnswer: 2,
      explanation:
        "According to MyPlate guidelines, vegetables should make up the largest portion of your plate, followed by grains.",
      category: "Nutrition",
    },
    {
      question: "How many essential amino acids does the human body need?",
      options: ["6", "9", "12", "20"],
      correctAnswer: 1,
      explanation:
        "There are 9 essential amino acids that the human body cannot produce on its own and must obtain from food sources.",
      category: "Nutrition",
    },
    {
      question: "Which vitamin helps with iron absorption?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
      correctAnswer: 1,
      explanation:
        "Vitamin C significantly enhances iron absorption, especially from plant-based sources. This is why it's beneficial to eat vitamin C-rich foods with iron-rich meals.",
      category: "Nutrition",
    },
  ]

  const fitnessQuestions = [
    {
      question: "How many hours of sleep does the average adult need per night?",
      options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
      correctAnswer: 2,
      explanation:
        "According to the National Sleep Foundation, adults need 7-9 hours of sleep per night for optimal health and well-being.",
      category: "Sleep & Recovery",
    },
    {
      question: "What is the average resting heart rate for adults?",
      options: ["40-50 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
      correctAnswer: 1,
      explanation:
        "The normal resting heart rate for adults ranges from 60 to 100 beats per minute (bpm). Athletes and very physically fit people might have lower resting heart rates.",
      category: "Cardiovascular",
    },
    {
      question: "How many minutes of moderate exercise per week does WHO recommend?",
      options: ["75 minutes", "150 minutes", "300 minutes", "450 minutes"],
      correctAnswer: 1,
      explanation:
        "The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic activity per week for adults.",
      category: "Exercise",
    },
    {
      question: "Which type of exercise is best for building bone density?",
      options: ["Swimming", "Cycling", "Weight lifting", "Yoga"],
      correctAnswer: 2,
      explanation:
        "Weight-bearing and resistance exercises like weight lifting are most effective for building and maintaining bone density.",
      category: "Exercise",
    },
    {
      question:
        "What is the recommended recovery time between intense strength training sessions for the same muscle group?",
      options: ["12 hours", "24 hours", "48 hours", "72 hours"],
      correctAnswer: 2,
      explanation:
        "Muscles need 48-72 hours to recover and rebuild after intense strength training. This allows for proper muscle protein synthesis and growth.",
      category: "Recovery",
    },
    {
      question: "At what age does muscle mass typically start to decline?",
      options: ["25 years", "30 years", "35 years", "40 years"],
      correctAnswer: 1,
      explanation:
        "Muscle mass typically begins to decline around age 30, with a loss of 3-8% per decade. Regular strength training can help slow this process.",
      category: "Aging & Fitness",
    },
    {
      question: "Which component of fitness refers to the ability of muscles to work continuously?",
      options: ["Strength", "Power", "Endurance", "Flexibility"],
      correctAnswer: 2,
      explanation:
        "Muscular endurance is the ability of muscles to perform repeated contractions over time without fatigue.",
      category: "Fitness Components",
    },
    {
      question: "What is the target heart rate zone for moderate exercise?",
      options: ["50-60% of max HR", "60-70% of max HR", "70-85% of max HR", "85-95% of max HR"],
      correctAnswer: 1,
      explanation:
        "The target heart rate for moderate exercise is typically 60-70% of your maximum heart rate (220 minus your age).",
      category: "Cardiovascular",
    },
    {
      question: "How long should you hold a static stretch?",
      options: ["5-10 seconds", "15-30 seconds", "45-60 seconds", "2-3 minutes"],
      correctAnswer: 1,
      explanation:
        "Static stretches should be held for 15-30 seconds to effectively improve flexibility without causing muscle damage.",
      category: "Flexibility",
    },
    {
      question: "Which energy system is primarily used during high-intensity, short-duration activities?",
      options: ["Aerobic system", "Phosphocreatine system", "Glycolytic system", "Fat oxidation"],
      correctAnswer: 1,
      explanation:
        "The phosphocreatine (ATP-PC) system provides immediate energy for high-intensity activities lasting up to 10-15 seconds.",
      category: "Exercise Physiology",
    },
  ]

  const mentalHealthQuestions = [
    {
      question: "How many minutes of meditation per day can show measurable benefits?",
      options: ["5 minutes", "10 minutes", "20 minutes", "60 minutes"],
      correctAnswer: 1,
      explanation:
        "Research shows that even 10 minutes of daily meditation can provide measurable benefits for stress reduction and mental clarity.",
      category: "Mental Wellness",
    },
    {
      question: "Which hormone is often called the 'stress hormone'?",
      options: ["Insulin", "Cortisol", "Adrenaline", "Serotonin"],
      correctAnswer: 1,
      explanation:
        "Cortisol is often called the stress hormone because it's released in response to stress and low blood glucose concentration.",
      category: "Stress Management",
    },
    {
      question: "What percentage of adults experience anxiety disorders in their lifetime?",
      options: ["10%", "18%", "25%", "40%"],
      correctAnswer: 2,
      explanation:
        "Approximately 25% of adults will experience an anxiety disorder at some point in their lifetime, making it one of the most common mental health conditions.",
      category: "Mental Health",
    },
    {
      question: "Which neurotransmitter is associated with feelings of happiness and well-being?",
      options: ["Dopamine", "Serotonin", "GABA", "Acetylcholine"],
      correctAnswer: 1,
      explanation:
        "Serotonin is often called the 'happiness chemical' because it contributes to feelings of well-being and happiness.",
      category: "Brain Chemistry",
    },
    {
      question: "How much time in nature per week is recommended for mental health benefits?",
      options: ["30 minutes", "2 hours", "5 hours", "10 hours"],
      correctAnswer: 1,
      explanation:
        "Studies suggest that spending at least 2 hours per week in nature can significantly improve mental health and well-being.",
      category: "Nature Therapy",
    },
    {
      question: "What is the recommended screen time limit before bedtime for better sleep?",
      options: ["30 minutes", "1 hour", "2 hours", "No limit"],
      correctAnswer: 1,
      explanation:
        "Experts recommend avoiding screens for at least 1 hour before bedtime to improve sleep quality, as blue light can interfere with melatonin production.",
      category: "Sleep Hygiene",
    },
    {
      question: "Which breathing technique is most effective for immediate stress relief?",
      options: ["Rapid breathing", "4-7-8 breathing", "Mouth breathing", "Shallow breathing"],
      correctAnswer: 1,
      explanation:
        "The 4-7-8 breathing technique (inhale for 4, hold for 7, exhale for 8) is highly effective for immediate stress relief and relaxation.",
      category: "Stress Management",
    },
    {
      question: "How does regular exercise affect mental health?",
      options: ["No effect", "Increases anxiety", "Reduces depression", "Causes mood swings"],
      correctAnswer: 2,
      explanation:
        "Regular exercise has been shown to reduce symptoms of depression and anxiety by releasing endorphins and improving overall brain health.",
      category: "Exercise & Mental Health",
    },
    {
      question: "What is the most common mental health disorder worldwide?",
      options: ["Bipolar disorder", "Schizophrenia", "Depression", "PTSD"],
      correctAnswer: 2,
      explanation:
        "Depression is the most common mental health disorder worldwide, affecting over 264 million people globally.",
      category: "Mental Health",
    },
    {
      question: "Which social factor has the strongest impact on mental health?",
      options: ["Income level", "Social connections", "Education", "Job status"],
      correctAnswer: 1,
      explanation:
        "Strong social connections and relationships have the most significant positive impact on mental health and overall well-being.",
      category: "Social Wellness",
    },
  ]

  const generalWellnessQuestions = [
    {
      question: "How often should adults get a comprehensive health checkup?",
      options: ["Every 6 months", "Every year", "Every 2 years", "Every 5 years"],
      correctAnswer: 1,
      explanation:
        "Most health experts recommend annual comprehensive health checkups for adults to catch potential health issues early.",
      category: "Preventive Care",
    },
    {
      question: "What is the leading cause of preventable death worldwide?",
      options: ["Poor diet", "Tobacco use", "Lack of exercise", "Alcohol abuse"],
      correctAnswer: 1,
      explanation:
        "Tobacco use is the leading cause of preventable death worldwide, responsible for over 8 million deaths annually.",
      category: "Public Health",
    },
    {
      question: "How many steps per day are recommended for general health?",
      options: ["5,000 steps", "8,000 steps", "10,000 steps", "15,000 steps"],
      correctAnswer: 2,
      explanation:
        "While 10,000 steps is a popular goal, recent research suggests 8,000-10,000 steps per day provides significant health benefits.",
      category: "Daily Activity",
    },
    {
      question: "What is the recommended frequency for handwashing to prevent illness?",
      options: ["Once per hour", "Before and after meals", "Frequently throughout the day", "Only when visibly dirty"],
      correctAnswer: 2,
      explanation:
        "Frequent handwashing throughout the day, especially before eating, after using the bathroom, and after touching public surfaces, is crucial for preventing illness.",
      category: "Hygiene",
    },
    {
      question: "Which factor has the greatest impact on longevity?",
      options: ["Genetics", "Lifestyle choices", "Medical care", "Environment"],
      correctAnswer: 1,
      explanation:
        "Lifestyle choices account for approximately 70-80% of factors affecting longevity, while genetics account for only 20-30%.",
      category: "Longevity",
    },
    {
      question: "What is the recommended room temperature for optimal sleep?",
      options: ["60-65°F (15-18°C)", "65-70°F (18-21°C)", "70-75°F (21-24°C)", "75-80°F (24-27°C)"],
      correctAnswer: 0,
      explanation:
        "The optimal room temperature for sleep is 60-65°F (15-18°C), as cooler temperatures help facilitate the natural drop in body temperature that promotes sleep.",
      category: "Sleep Environment",
    },
    {
      question: "How much of your plate should be filled with fruits and vegetables?",
      options: ["1/4", "1/3", "1/2", "2/3"],
      correctAnswer: 2,
      explanation:
        "According to dietary guidelines, fruits and vegetables should fill half of your plate at each meal for optimal nutrition.",
      category: "Nutrition Guidelines",
    },
    {
      question: "What is the maximum recommended daily sodium intake for adults?",
      options: ["1,500 mg", "2,300 mg", "3,000 mg", "4,000 mg"],
      correctAnswer: 1,
      explanation:
        "The American Heart Association recommends no more than 2,300 mg of sodium per day, with an ideal limit of 1,500 mg for most adults.",
      category: "Nutrition",
    },
    {
      question: "How long can the human body survive without water?",
      options: ["1-2 days", "3-5 days", "7-10 days", "2-3 weeks"],
      correctAnswer: 1,
      explanation:
        "The human body can typically survive only 3-5 days without water, depending on environmental conditions and individual factors.",
      category: "Survival Physiology",
    },
    {
      question: "What percentage of the immune system is located in the gut?",
      options: ["50%", "60%", "70%", "80%"],
      correctAnswer: 2,
      explanation:
        "Approximately 70% of the immune system is located in the gut, highlighting the importance of digestive health for overall immunity.",
      category: "Immune System",
    },
  ]

  return (
    <>
      <Section className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20">
        <PageHeader
          title="Health Trivias"
          description="Test your knowledge with dynamic health questions across multiple categories"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground">
              Challenge yourself with our dynamic trivia system! Each box contains 10 unique questions that cycle
              through different topics. Track your progress and see how much you know about health, fitness, and
              wellness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <TriviaCard questions={nutritionQuestions} cardTitle="Nutrition & Diet" />
            <TriviaCard questions={fitnessQuestions} cardTitle="Fitness & Exercise" />
            <TriviaCard questions={mentalHealthQuestions} cardTitle="Mental Health & Wellness" />
            <TriviaCard questions={generalWellnessQuestions} cardTitle="General Health & Wellness" />
          </div>

          <div className="mt-16 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Health & Wellness Facts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white/80 dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100,000</div>
                <p className="font-medium">Times your heart beats per day</p>
                <p className="mt-2 text-sm text-muted-foreground">That's approximately 35 million times per year!</p>
              </div>
              <div className="rounded-lg bg-white/80 dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20%</div>
                <p className="font-medium">Of your body's energy used by your brain</p>
                <p className="mt-2 text-sm text-muted-foreground">Despite being only 2% of your body weight!</p>
              </div>
              <div className="rounded-lg bg-white/80 dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">650+</div>
                <p className="font-medium">Muscles in the human body</p>
                <p className="mt-2 text-sm text-muted-foreground">Making up about 40% of your total body weight!</p>
              </div>
              <div className="rounded-lg bg-white/80 dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">40</div>
                <p className="font-medium">Calories burned by 15 minutes of laughter</p>
                <p className="mt-2 text-sm text-muted-foreground">Laughter truly is good medicine!</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
