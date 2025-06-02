"use client"

import { useActionState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail, type EmailFormState } from "@/app/actions/send-email"

const initialState: EmailFormState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  useEffect(() => {
    if (state.success) {
      // Scroll to success message
      const successElement = document.getElementById("success-message")
      if (successElement) {
        successElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [state.success])

  if (state.success) {
    return (
      <Card id="success-message">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Message Sent Successfully!</h2>
            <p className="text-muted-foreground">
              Thank you for your message. Professor Jadera will receive your email shortly and will respond as soon as
              possible.
            </p>
            <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          {state.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Your Name *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              disabled={isPending}
              className={state.fieldErrors?.name ? "border-red-500" : ""}
            />
            {state.fieldErrors?.name && <p className="text-sm text-red-500">{state.fieldErrors.name[0]}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Your Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className={state.fieldErrors?.email ? "border-red-500" : ""}
            />
            {state.fieldErrors?.email && <p className="text-sm text-red-500">{state.fieldErrors.email[0]}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share your thoughts, feedback, or questions about the PATHFIT 2 course..."
              rows={6}
              required
              disabled={isPending}
              className={`flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                state.fieldErrors?.message ? "border-red-500" : ""
              }`}
            />
            {state.fieldErrors?.message && <p className="text-sm text-red-500">{state.fieldErrors.message[0]}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Required fields. Your email will be sent directly to Professor Jadera.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
