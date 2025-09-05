"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = contactSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    })

    // Create email content
    const emailContent = `
New Contact Form Submission from Iqbal Law Website

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}

Message:
${validatedData.message}

---
This message was sent from the Iqbal Law contact form.
    `.trim()

    // In a real implementation, you would use a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("Email would be sent to: info@iqbalslaw.com")
    console.log("Email content:", emailContent)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Message sent successfully! We'll get back to you within 24 hours." }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data: " + error.errors.map((e) => e.message).join(", "),
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again or contact us directly at info@iqbalslaw.com",
    }
  }
}
