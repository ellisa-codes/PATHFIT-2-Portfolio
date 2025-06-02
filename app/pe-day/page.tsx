import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ImageGallery } from "@/components/image-gallery"

export default function PEDayPage() {
  // Sample PE Day photos - in a real implementation, these would be actual event photos
  const peDayPhotos = [
    {
      src: "/placeholder.svg?height=600&width=800&text=PE+Day+Group+Photo",
      alt: "PE Day Group Photo",
      caption: "Group photo of all participants at PE Day 2024",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Sports+Activity",
      alt: "Sports Activity",
      caption: "Students participating in team sports activities",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Fitness+Challenge",
      alt: "Fitness Challenge",
      caption: "The fitness challenge competition",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Dance+Performance",
      alt: "Dance Performance",
      caption: "Dance performance showcasing traditional dances",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Yoga+Session",
      alt: "Yoga Session",
      caption: "Morning yoga session to start the day",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Awards+Ceremony",
      alt: "Awards Ceremony",
      caption: "Closing awards ceremony recognizing achievements",
    },
  ]

  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
        <PageHeader title="PE Day 2024" description="Highlights and memories from our annual Physical Education Day" />
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Event Overview</h2>
            <p className="text-lg">
              PE Day 2024 was a celebration of physical fitness, teamwork, and the joy of movement. Held on [Event
              Date], the event brought together students from various classes to participate in a day filled with
              sports, games, fitness challenges, and performances.
            </p>
            <p>
              The day began with an opening ceremony and warm-up exercises, followed by a series of rotating activities
              that allowed students to experience different aspects of physical education. From team sports to
              individual challenges, dance performances to yoga sessions, the event showcased the diversity of physical
              activities covered in our PATHFIT curriculum.
            </p>
            <p>
              One of the highlights was the inter-class competition, where teams competed in various challenges that
              tested strength, endurance, agility, and teamwork. The friendly competition fostered camaraderie and
              school spirit while encouraging everyone to push their limits.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Photo Gallery</h2>
            <p>
              Below are some memorable moments captured during PE Day 2024. These photos showcase the energy,
              enthusiasm, and community spirit that made the event so special.
            </p>
            <ImageGallery images={peDayPhotos} />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">My Experience</h2>
            <p>
              Participating in PE Day 2024 was a highlight of my PATHFIT 1 journey. The event allowed me to apply the
              skills and knowledge I've gained throughout the course in a fun, collaborative environment. I particularly
              enjoyed the team challenges, which pushed me outside my comfort zone while reinforcing the importance of
              teamwork and communication.
            </p>
            <p>
              The day also gave me a deeper appreciation for the diversity of physical activities available to us.
              Watching my peers excel in different areas—whether it was dance, sports, or yoga—was inspiring and
              reminded me that physical fitness comes in many forms.
            </p>
            <p>
              Perhaps most importantly, PE Day reinforced the joy of movement. In our often sedentary academic lives, it
              was refreshing to spend a day fully engaged in physical activity, surrounded by the energy and enthusiasm
              of my peers. The event left me with a renewed commitment to incorporating regular physical activity into
              my routine and exploring new forms of movement that bring me joy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Key Takeaways</h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Community Building:</strong> PE Day demonstrated how physical activities can bring people
                together, fostering connections and building community.
              </li>
              <li>
                <strong>Diverse Approaches to Fitness:</strong> The variety of activities showcased that there are many
                paths to physical fitness, allowing everyone to find activities that resonate with them.
              </li>
              <li>
                <strong>Practical Application:</strong> The event provided an opportunity to apply the theoretical
                knowledge from our PATHFIT course in practical, real-world scenarios.
              </li>
              <li>
                <strong>Joy of Movement:</strong> Above all, PE Day reminded us that physical activity should be
                enjoyable and can be a source of joy, not just a requirement for health.
              </li>
              <li>
                <strong>Celebration of Progress:</strong> The event celebrated the progress we've all made in our
                fitness journeys, regardless of our starting points or natural abilities.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
