"use server"

import { z } from "zod"
import sgMail from "@sendgrid/mail"

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

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    // Prepare email content
    const msg = {
      to: "ellisashammah.bonete@wvsu.edu.ph", // Replace with actual professor email
      from: "ellisabonete@pathfit-portfolio.com", // Replace with your verified sender email
      replyTo: email, // Allow professor to reply directly to student
      subject: `PATHFIT 2 Message from ${name}`,
      text: `
New message from PATHFIT 2 student:

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from PATHFIT 2 Portfolio Website
  `,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        New message from PATHFIT 2 student
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
        Sent from PATHFIT 2 Portfolio Website on ${new Date().toLocaleString()}
      </p>
    </div>
  `,
    }

    // Send the email
    await sgMail.send(msg)

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
