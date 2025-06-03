"use server"

import { z } from "zod"

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type EmailFormState = {
  success?: boolean
  error?: string
  fieldErrors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function sendEmail(prevState: EmailFormState, formData: FormData): Promise<EmailFormState> {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validationResult = emailSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        error: "Please correct the errors below",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validationResult.data

    // Mailgun configuration
    const MAILGUN_API_KEY = "a8ceaf4bc4b37a46aace7f7280912f70-08c79601-ad96f98d"
    const MAILGUN_DOMAIN = "sandboxababd584b2004860919dde24c9e83430.mailgun.org"
    const MAILGUN_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`

    // Prepare form data for Mailgun API
    const mailgunData = new FormData()
    mailgunData.append("from", `EllisaShammahBonete_PATHFIT2_Portfolio <postmaster@${MAILGUN_DOMAIN}>`)
    mailgunData.append("to", "ionalvarez50@gmail.com") // Professor's email
    mailgunData.append("subject", `EllisaShammahBonete_PATHFIT2_Portfolio Message from ${name}`)
    mailgunData.append(
      "text",
      `
New message from EllisaShammahBonete_PATHFIT2_Portfolio:

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from EllisaShammahBonete_PATHFIT2_Portfolio on ${new Date().toLocaleString()}
Reply to: ${email}
    `,
    )
    mailgunData.append(
      "html",
      `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
    New message from EllisaShammahBonete_PATHFIT2_Portfolio
  </h2>
  <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  </div>
  <h3 style="color: #374151;">Message:</h3>
  <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; margin: 10px 0;">
    <p style="line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
  </div>
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
  <p style="color: #6b7280; font-size: 12px; text-align: center;">
    Sent from EllisaShammahBonete_PATHFIT2_Portfolio on ${new Date().toLocaleString()}
  </p>
  <p style="color: #6b7280; font-size: 12px; text-align: center;">
    Reply to: <a href="mailto:${email}">${email}</a>
  </p>
</div>
    `,
    )

    // Send email using Mailgun API
    const response = await fetch(MAILGUN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
      },
      body: mailgunData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Mailgun API error:", errorText)
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Email sending error:", error)

    return {
      error: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
    }
  }
}
