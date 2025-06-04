import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Portfolio sections data with specific images
const portfolioSections = [
  {
    id: "food-activity",
    title: "Food & Activity",
    description: "Explore my nutritional journey with Pinggang Pinoy and PATHFIT Cocina",
    link: "/food-activity",
    gradient: "from-green-400 to-blue-400",
    image: "/food.jpg",
    imageAlt: "Healthy food and nutrition following Pinggang Pinoy guidelines",
  },
  {
    id: "health-advocacy",
    title: "Health Advocacy",
    description: "Learn about my mental health campaign initiatives and community outreach",
    link: "/advocacy",
    gradient: "from-purple-400 to-pink-400",
    image: "/placeholder.svg?height=400&width=600&text=Mental+Health+Advocacy",
    imageAlt: "Mental health awareness and advocacy campaign",
  },
  {
    id: "pe-day",
    title: "PATHFIT Cocina",
    description: "Photos and highlights from our cooking activities and healthy meal preparation",
    link: "/pe-day",
    gradient: "from-blue-400 to-green-400",
    image: "/Cocina.jpg",
    imageAlt: "PATHFIT Cocina cooking activities and healthy meal preparation",
  },
  {
    id: "health-trivias",
    title: "Health Trivias",
    description: "Test your health knowledge with interactive quizzes and fun facts",
    link: "/health-trivias",
    gradient: "from-yellow-400 to-orange-400",
    image: "/placeholder.svg?height=400&width=600&text=Health+Trivias+%26+Quizzes",
    imageAlt: "Health trivia and knowledge testing interface",
  },
]

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
                Ellisa Shammah Bonete
              </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PATHFIT 2 Journey
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Welcome to my portfolio showcasing my journey through the PATHFIT 2 course.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Explore my reflections, activities, and growth throughout this health and fitness journey.
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
                src="/prof.jpg"
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
          <PageHeader title="Who Am I?" description="Get to know me and my journey through PATHFIT 2" />
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="space-y-6 animate-in slide-in-from-left-6 duration-1000">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Hello! I'm Ellisa Shammah Bonete, a first-year college student passionate about health and fitness.
                  I'm currently pursuing my degree in BS Information Technology at West Visayas State University.
                  Through the PATHFIT 2 course, I've gained valuable insights into maintaining a healthy lifestyle and
                  understanding the importance of physical activity.
                </p>
                <p>
                  Outside of academics, I enjoy playing the guitar, listening to music, reading books, watching anime
                  and K-dramas, doing photography, cycling, traveling, and more — all of which help me maintain a
                  balanced lifestyle. I believe that physical and mental well-being go hand in hand, and I'm excited to
                  share my journey with you through this portfolio.
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
                    <strong className="text-primary">Course:</strong> PATHFIT 2
                  </p>
                  <p>
                    <strong className="text-primary">Instructor:</strong> Prof. Jude Reyben Geroy Jadera
                  </p>
                  <p>
                    <strong className="text-primary">Semester:</strong> 2nd Semester
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
          <PageHeader
            title="Portfolio Highlights"
            description="Explore the different aspects of my PATHFIT 2 journey"
          />

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {portfolioSections.map((section, index) => (
              <PortfolioCard key={section.id} section={section} index={index} />
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8">
            {portfolioSections.map((section, index) => (
              <PortfolioCard key={section.id} section={section} index={index} />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="grid grid-cols-1 md:hidden gap-6">
            {portfolioSections.map((section, index) => (
              <PortfolioCard key={section.id} section={section} index={index} isMobile />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

// Portfolio Card Component with Error Handling
function PortfolioCard({
  section,
  index,
  isMobile = false,
}: {
  section: (typeof portfolioSections)[0]
  index: number
  isMobile?: boolean
}) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${
        isMobile ? "h-auto" : "h-full"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <CardHeader className={`bg-gradient-to-r ${section.gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        <CardTitle className="relative z-10 group-hover:scale-105 transition-transform duration-300 text-lg font-bold">
          {section.title}
        </CardTitle>
        <CardDescription className="relative z-10 text-white/90 text-sm leading-relaxed">
          {section.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className={`relative overflow-hidden ${isMobile ? "aspect-[16/10]" : "aspect-video"}`}>
          <Image
            src={section.image || "/placeholder.svg"}
            alt={section.imageAlt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"}
            priority={index < 2} // Prioritize loading for first two images
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(section.title)}`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Image overlay with section info */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
            <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              <p className="text-sm font-medium">{section.title}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6">
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:shadow-md"
        >
          <Link href={section.link}>
            <span className="flex items-center justify-center gap-2">
              View Section
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
