"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MessagePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the message to a server
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
  }

  return (
    <>
      <Section className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <PageHeader
          title="Message for PATHFIT 1 Instructor"
          description="Share your thoughts and feedback about the course"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          {!isSubmitted ? (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share your thoughts, feedback, or questions about the PATHFIT 1 course..."
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="text-6xl">✅</div>
                  <h2 className="text-2xl font-bold">Message Sent Successfully!</h2>
                  <p className="text-muted-foreground">
                    Thank you for your feedback. Your instructor will receive your message shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold">A Personal Note</h2>
                <div className="mt-4 space-y-4">
                  <p>Dear Professor Jadera,</p>
                  <p>
                    I want to express my heartfelt gratitude for your guidance throughout the PATHFIT 2 course. Your
                    teaching approach has made learning about health and fitness both engaging and meaningful. The way
                    you connected theoretical concepts with practical applications helped me understand not just the
                    "what" but also the "why" behind healthy living practices.
                  </p>
                  <p>
                    Your emphasis on individual progress rather than comparison with others created a supportive
                    learning environment where I felt comfortable exploring new activities and pushing my boundaries.
                    The diverse range of topics covered - from nutrition and exercise physiology to mental health and
                    community advocacy - provided a comprehensive foundation that I know will serve me well beyond this
                    course.
                  </p>
                  <p>
                    The reflective exercises you assigned helped me develop a deeper understanding of my own
                    relationship with health and fitness. Through these reflections, I've been able to identify
                    patterns, celebrate progress, and set meaningful goals for the future.
                  </p>
                  <p>
                    Thank you for your patience, encouragement, and dedication to helping us develop not just knowledge
                    but also practical skills and positive attitudes toward lifelong wellness. Your impact extends far
                    beyond the classroom, and I'm grateful to have been your student.
                  </p>
                  <p>
                    With sincere appreciation,
                    <br />
                    Ellisa Shammah Bonete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
