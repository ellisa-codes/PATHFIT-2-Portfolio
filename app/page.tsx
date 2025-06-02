import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Section
        spacing="xl"
        className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
      >
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                John Doe
              </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PATHFIT 1 Journey
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Welcome to my portfolio showcasing my journey through the PATHFIT 1 course. Explore my reflections,
              activities, and growth throughout this health and fitness journey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" className="group transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Link href="/food-activity">
                  Explore My Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <Link href="/message">Message for Instructor</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gradient-to-r from-pink-400 to-blue-400 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Student Profile"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-20 blur-xl"></div>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="space-y-12">
          <PageHeader title="Who Am I?" description="Get to know me and my journey through PATHFIT 1" />
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="space-y-6 animate-in slide-in-from-left-6 duration-1000">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Hello! I'm John Doe, a student passionate about health and fitness. I'm currently pursuing my degree
                  in [Your Program] at [Your University]. Through the PATHFIT 1 course, I've gained valuable insights
                  into maintaining a healthy lifestyle and understanding the importance of physical activity.
                </p>
                <p>
                  Outside of academics, I enjoy [Your Hobbies/Interests], which helps me maintain a balanced lifestyle.
                  I believe that physical and mental well-being go hand in hand, and I'm excited to share my journey
                  with you through this portfolio.
                </p>
              </div>
            </div>
            <div className="space-y-6 animate-in slide-in-from-right-6 duration-1000 delay-200">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Course Details
              </h3>
              <div className="space-y-4 rounded-lg bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-6 shadow-sm">
                <div className="space-y-3 text-lg">
                  <p>
                    <strong className="text-primary">Course:</strong> PATHFIT 1
                  </p>
                  <p>
                    <strong className="text-primary">Instructor:</strong> Prof. [Instructor Name]
                  </p>
                  <p>
                    <strong className="text-primary">Semester:</strong> [Current Semester]
                  </p>
                  <p>
                    <strong className="text-primary">Focus Areas:</strong> Physical Activity, Health, Nutrition,
                    Wellness
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                This course has been instrumental in shaping my understanding of health and fitness. Through various
                activities and reflections, I've developed a deeper appreciation for the importance of maintaining a
                healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        spacing="lg"
        className="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
      >
        <div className="space-y-12">
          <PageHeader title="Portfolio Highlights" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Food & Activity",
                description: "Explore my nutritional journey with Pinggang Pinoy",
                link: "/food-activity",
                gradient: "from-green-400 to-blue-400",
              },
              {
                title: "Health Advocacy",
                description: "Learn about my health campaign initiatives",
                link: "/advocacy",
                gradient: "from-purple-400 to-pink-400",
              },
              {
                title: "PE Day 2024",
                description: "Photos and highlights from this special event",
                link: "/pe-day",
                gradient: "from-blue-400 to-green-400",
              },
              {
                title: "Health Trivias",
                description: "Test your health knowledge with fun facts",
                link: "/health-trivias",
                gradient: "from-yellow-400 to-orange-400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
              >
                <CardHeader className={`bg-gradient-to-r ${item.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <CardTitle className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="relative z-10 text-white/90">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item.title}`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
                <CardFooter className="p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link href={item.link}>
                      View Section{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
