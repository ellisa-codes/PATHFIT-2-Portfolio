"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Heart,
  Sparkles,
  Clock,
  NotebookIcon as Lotus,
  Users,
  BookOpen,
  UserPlus,
  Smile,
  MessageCircle,
  CheckCircle2,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Mental health topics with detailed information
const mentalHealthTopics = [
  {
    id: "mental-health",
    title: "Mental Health",
    icon: <Brain className="h-6 w-6" />,
    description:
      "Mental health encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act, helping determine how we handle stress, relate to others, and make choices.",
    tips: [
      "Recognize that mental health is just as important as physical health",
      "Understand that mental health conditions are medical conditions",
      "Know that recovery is possible with proper support and treatment",
      "Learn to identify early warning signs of mental health challenges",
    ],
    color: "from-purple-400 to-blue-400",
  },
  {
    id: "student-wellness",
    title: "Student Wellness",
    icon: <Heart className="h-6 w-6" />,
    description:
      "Student wellness refers to the active process of becoming aware of and making choices toward a healthy and fulfilling life, particularly within the unique context and challenges of student life.",
    tips: [
      "Balance academic responsibilities with personal time",
      "Develop healthy study habits and time management skills",
      "Connect with campus resources designed to support student well-being",
      "Build a supportive social network within your academic community",
    ],
    color: "from-pink-400 to-red-400",
  },
  {
    id: "self-care",
    title: "Self-Care",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "Self-care involves taking deliberate actions to care for your physical, mental, and emotional health. It's about identifying your needs and taking steps to meet them.",
    tips: [
      "Schedule regular self-care activities in your calendar",
      "Identify activities that genuinely recharge you",
      "Practice saying 'no' to protect your time and energy",
      "Remember that self-care is not selfish but necessary",
    ],
    color: "from-green-400 to-teal-400",
  },
  {
    id: "stress-management",
    title: "Stress Management",
    icon: <Clock className="h-6 w-6" />,
    description:
      "Stress management comprises techniques and psychotherapies aimed at controlling a person's level of stress, especially chronic stress, to improve everyday functioning.",
    tips: [
      "Identify your stress triggers and develop specific strategies for each",
      "Practice deep breathing exercises when feeling overwhelmed",
      "Break large tasks into smaller, manageable steps",
      "Establish healthy boundaries in your relationships and commitments",
    ],
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: "mindfulness",
    title: "Mindfulness",
    icon: <Lotus className="h-6 w-6" />,
    description:
      "Mindfulness is the practice of purposely bringing one's attention to the present moment without judgment, a skill developed through meditation or other training.",
    tips: [
      "Start with short, 5-minute mindfulness sessions and gradually increase",
      "Use guided meditation apps for structured practice",
      "Practice mindful eating by savoring each bite without distractions",
      "Incorporate mindful walking by paying attention to each step and your surroundings",
    ],
    color: "from-blue-400 to-indigo-400",
  },
]

// Campaign initiatives tailored for first-year college students
const campaignInitiatives = [
  {
    title: "Wellness Wednesdays",
    description:
      "Host weekly 30-minute sessions in your dorm common area or a quiet campus spot where students can practice guided meditation, journaling, or simple stretching exercises.",
    icon: <Calendar className="h-10 w-10" />,
    difficulty: "Easy",
    impact: "Medium",
    timeRequired: "1-2 hours weekly",
    resources: "Meditation app, journal prompts, comfortable space",
    steps: [
      "Reserve a quiet space on campus",
      "Create a simple schedule alternating between activities",
      "Promote through social media and dorm bulletin boards",
      "Prepare simple handouts with benefits of each practice",
    ],
  },
  {
    title: "Stress-Free Zone",
    description:
      "Create a designated area in your residence hall or student center with stress-relief resources like coloring books, fidget toys, and information about campus mental health services.",
    icon: <Smile className="h-10 w-10" />,
    difficulty: "Easy",
    impact: "High",
    timeRequired: "3-4 hours setup, minimal maintenance",
    resources: "Stress-relief items, informational materials, small table or shelf",
    steps: [
      "Get permission from residence life staff",
      "Collect affordable stress-relief items",
      "Create an attractive display with clear instructions",
      "Include QR codes linking to mental health resources",
    ],
  },
  {
    title: "Peer Support Circle",
    description:
      "Organize a weekly meetup where students can share challenges and successes in a supportive, non-judgmental environment. Focus on listening skills and emotional support.",
    icon: <Users className="h-10 w-10" />,
    difficulty: "Medium",
    impact: "High",
    timeRequired: "1-2 hours weekly",
    resources: "Meeting space, basic ground rules, refreshments",
    steps: [
      "Establish clear guidelines for confidentiality and respect",
      "Prepare conversation starters and reflection questions",
      "Start with friends and gradually expand",
      "Consider partnering with a campus counselor for guidance",
    ],
  },
  {
    title: "Mental Health Resource Guide",
    description:
      "Create a simple digital or printed guide highlighting campus and community mental health resources, including counseling services, crisis lines, and self-help tools.",
    icon: <BookOpen className="h-10 w-10" />,
    difficulty: "Medium",
    impact: "High",
    timeRequired: "8-10 hours initial creation, periodic updates",
    resources: "Design software or template, information from campus services",
    steps: [
      "Research all available campus mental health resources",
      "Contact services to verify information",
      "Design a user-friendly format (digital or print)",
      "Distribute through social media, email, and physical locations",
    ],
  },
  {
    title: "Kindness Campaign",
    description:
      "Launch a week-long initiative encouraging random acts of kindness across campus, with a focus on how helping others can improve your own mental well-being.",
    icon: <Heart className="h-10 w-10" />,
    difficulty: "Easy",
    impact: "Medium",
    timeRequired: "5-6 hours preparation, 1 week implementation",
    resources: "Social media templates, kindness suggestion cards",
    steps: [
      "Create a list of simple kindness acts suitable for campus",
      "Design shareable social media graphics",
      "Prepare small kindness cards to distribute",
      "Encourage participants to share their experiences",
    ],
  },
  {
    title: "Wellness Ambassador Program",
    description:
      "Recruit fellow students to become wellness ambassadors who promote mental health awareness and resources within their social circles and residence halls.",
    icon: <UserPlus className="h-10 w-10" />,
    difficulty: "Hard",
    impact: "Very High",
    timeRequired: "Ongoing commitment, 2-3 hours weekly",
    resources: "Training materials, regular meetings, support from campus health services",
    steps: [
      "Develop a simple training program with campus health services",
      "Recruit interested students through classes and clubs",
      "Hold monthly meetings to share strategies and resources",
      "Create recognition system for ambassador contributions",
    ],
  },
]

// Success stories from the campaign
const successStories = [
  {
    name: "Alex",
    story:
      "Before joining the Peer Support Circle, I felt isolated and overwhelmed by my coursework. Now I have a community that understands my struggles and celebrates my victories.",
    impact: "Found community and reduced feelings of isolation",
    image: "https://www.shutterstock.com/image-photo/portrait-cool-young-asian-philippines-260nw-2038343798.jpg", // Add this line
    imageAlt: "Alex smiling confidently after joining the peer support group", // Add this line
  },
  {
    name: "Hannah",
    story:
      "The Mental Health Resource Guide helped me find counseling services when I was struggling with anxiety. I wouldn't have known where to turn without it.",
    impact: "Connected with professional support services",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/270f70ec-1d93-485d-9747-ca4450ba921d/2024-09-17T11:39:23.979Z.jpg", // Add this line
    imageAlt: "Hannah holding mental health resources with a hopeful expression", // Add this line
  },
  {
    name: "Dave",
    story:
      "Participating in Wellness Wednesdays gave me tools to manage stress during midterms. The breathing techniques I learned have become part of my daily routine.",
    impact: "Developed practical stress management skills",
    image: "https://www.shutterstock.com/image-photo/modern-education-concept-portrait-smiling-260nw-2018780909.jpg", // Add this line
    imageAlt: "Dave practicing mindfulness techniques during a wellness session", // Add this line
  },
]

export default function AdvocacyPage() {
  const [activeTopicId, setActiveTopicId] = useState("mental-health")
  const [selectedInitiative, setSelectedInitiative] = useState<number | null>(null)

  const activeTopic = mentalHealthTopics.find((topic) => topic.id === activeTopicId)

  return (
    <>
      <Section
        spacing="xl"
        className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"
      >
        <PageHeader
          title="Mental Health Advocacy"
          description="My campaign for promoting mental wellness in the student community"
        />
      </Section>

      <Section spacing="lg">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-in slide-in-from-left-6 duration-1000">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mind Matters Campaign
            </h2>
            <p className="text-lg leading-relaxed">
              My advocacy focuses on promoting mental health awareness among first-year college students. Through the
              "Mind Matters" campaign, I aim to reduce stigma, provide accessible resources, and create supportive
              environments for those navigating the challenges of college life.
            </p>
            <p className="text-lg leading-relaxed">
              Mental health is just as important as physical health, yet it often receives less attention and faces more
              stigma. This campaign works to change this by educating peers about mental health, sharing resources, and
              promoting self-care practices that support overall well-being during the critical first year of college.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3">Key Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {mentalHealthTopics.map((topic) => (
                  <Button
                    key={topic.id}
                    variant={activeTopicId === topic.id ? "default" : "outline"}
                    className={`rounded-full transition-all duration-300 hover:shadow-md ${
                      activeTopicId === topic.id ? "bg-gradient-to-r " + topic.color + " text-white" : ""
                    }`}
                    onClick={() => setActiveTopicId(topic.id)}
                  >
                    <span className="mr-2">{topic.icon}</span>
                    {topic.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl animate-in slide-in-from-right-6 duration-1000 delay-300">
            <div className="aspect-video relative">
              <Image
                src="https://rightsidestory.com/wp-content/uploads/2023/02/15.png"
                alt="Students participating in a mental health awareness workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Building a Supportive Community</h3>
                  <p className="text-sm opacity-90">Students engaging in open conversations about mental health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Understanding {activeTopic?.title}</h2>

          <Card className="border-0 shadow-lg overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className={`bg-gradient-to-r ${activeTopic?.color} text-white`}>
              <div className="flex items-center gap-3">
                {activeTopic?.icon}
                <CardTitle className="text-2xl">{activeTopic?.title}</CardTitle>
              </div>
              <CardDescription className="text-white/90 text-lg">{activeTopic?.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Key Tips</h3>
              <ul className="space-y-3">
                {activeTopic?.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
              <Image
                src="https://sites.dartmouth.edu/mindfulness/files/2023/05/Copy-of-20230418-Meditation-kl-00-8.jpg"
                alt="Students practicing mindfulness meditation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
              <Image
                src="https://www.malvernbh.com/wp-content/uploads/2022/03/shutterstock_508251865-1-min-1-scaled.jpg"
                alt="Students in a peer support circle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
              <Image
                src="https://images.theconversation.com/files/482162/original/file-20220831-12-x7euw1.jpg?ixlib=rb-4.1.0&rect=33%2C517%2C7315%2C3657&q=45&auto=format&w=1356&h=668&fit=crop"
                alt="Student engaging in self-care activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Campaign Initiatives for First-Year Students</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical and achievable activities designed specifically for first-year college students to promote
              mental health awareness and support
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Initiatives</TabsTrigger>
                <TabsTrigger value="easy">Easy to Start</TabsTrigger>
                <TabsTrigger value="medium">Medium Effort</TabsTrigger>
                <TabsTrigger value="high">High Impact</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {campaignInitiatives.map((initiative, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0",
                      selectedInitiative === index ? "ring-2 ring-primary" : "",
                    )}
                    onClick={() => setSelectedInitiative(selectedInitiative === index ? null : index)}
                  >
                    <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                      <div className="flex justify-center text-primary">{initiative.icon}</div>
                      <CardTitle className="text-center">{initiative.title}</CardTitle>
                      <CardDescription className="text-center">
                        Difficulty:{" "}
                        <span
                          className={
                            initiative.difficulty === "Easy"
                              ? "text-green-600 dark:text-green-400"
                              : initiative.difficulty === "Medium"
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400"
                          }
                        >
                          {initiative.difficulty}
                        </span>{" "}
                        | Impact: <span className="text-blue-600 dark:text-blue-400">{initiative.impact}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-4">{initiative.description}</p>

                      {selectedInitiative === index && (
                        <div className="mt-4 space-y-4 animate-in slide-in-from-top-4 duration-300">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Time Required</h4>
                            <p>{initiative.timeRequired}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Resources Needed</h4>
                            <p>{initiative.resources}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Implementation Steps</h4>
                            <ul className="ml-5 list-disc space-y-1 text-sm">
                              {initiative.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="easy" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {campaignInitiatives
                  .filter((initiative) => initiative.difficulty === "Easy")
                  .map((initiative, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0"
                      onClick={() =>
                        setSelectedInitiative(campaignInitiatives.findIndex((i) => i.title === initiative.title))
                      }
                    >
                      <CardHeader className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30">
                        <div className="flex justify-center text-primary">{initiative.icon}</div>
                        <CardTitle className="text-center">{initiative.title}</CardTitle>
                        <CardDescription className="text-center">
                          Difficulty:{" "}
                          <span className="text-green-600 dark:text-green-400">{initiative.difficulty}</span> | Impact:{" "}
                          <span className="text-blue-600 dark:text-blue-400">{initiative.impact}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p>{initiative.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="medium" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {campaignInitiatives
                  .filter((initiative) => initiative.difficulty === "Medium")
                  .map((initiative, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0"
                      onClick={() =>
                        setSelectedInitiative(campaignInitiatives.findIndex((i) => i.title === initiative.title))
                      }
                    >
                      <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
                        <div className="flex justify-center text-primary">{initiative.icon}</div>
                        <CardTitle className="text-center">{initiative.title}</CardTitle>
                        <CardDescription className="text-center">
                          Difficulty:{" "}
                          <span className="text-yellow-600 dark:text-yellow-400">{initiative.difficulty}</span> |
                          Impact: <span className="text-blue-600 dark:text-blue-400">{initiative.impact}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p>{initiative.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="high" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {campaignInitiatives
                  .filter((initiative) => initiative.impact === "High" || initiative.impact === "Very High")
                  .map((initiative, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0"
                      onClick={() =>
                        setSelectedInitiative(campaignInitiatives.findIndex((i) => i.title === initiative.title))
                      }
                    >
                      <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                        <div className="flex justify-center text-primary">{initiative.icon}</div>
                        <CardTitle className="text-center">{initiative.title}</CardTitle>
                        <CardDescription className="text-center">
                          Difficulty:{" "}
                          <span
                            className={
                              initiative.difficulty === "Easy"
                                ? "text-green-600 dark:text-green-400"
                                : initiative.difficulty === "Medium"
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400"
                            }
                          >
                            {initiative.difficulty}
                          </span>{" "}
                          | Impact: <span className="text-blue-600 dark:text-blue-400">{initiative.impact}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p>{initiative.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      <Section
        spacing="lg"
        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
      >
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold text-center">Success Stories</h2>
          <p className="text-center text-lg text-muted-foreground">
            Real experiences from students who have benefited from the Mind Matters campaign
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={story.image || `/placeholder.svg?height=100&width=100&text=${story.name}`}
                        alt={story.imageAlt || `${story.name}'s profile`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-sm text-primary">{story.impact}</p>
                  </div>
                  <div className="relative">
                    <MessageCircle className="absolute -top-2 -left-2 h-6 w-6 text-primary opacity-30" />
                    <p className="italic text-muted-foreground">"{story.story}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Movement!</h3>
            <p className="text-lg mb-6">
              Ready to make a difference in mental health awareness on campus? Get involved with the Mind Matters
              campaign today!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Become a Mental Health Advocate
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Impact and Outcomes</h2>
          <p className="text-lg">
            Through my advocacy work, I've been able to reach over 100 students, providing them with mental health
            resources and support. Feedback from participants has been overwhelmingly positive, with many reporting
            increased awareness of mental health issues and improved self-care practices.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                100+
              </p>
              <p className="text-sm">Students Reached</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                3
              </p>
              <p className="text-sm">Workshops Conducted</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                96%
              </p>
              <p className="text-sm">Positive Feedback</p>
            </div>
          </div>
          <p>
            Moving forward, I plan to expand my advocacy work by collaborating with campus health services and student
            organizations to reach an even wider audience and create lasting change in how mental health is perceived
            and addressed in our community.
          </p>
        </div>
      </Section>
    </>
  )
}
