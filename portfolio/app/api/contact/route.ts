import { NextResponse } from "next/server"
import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the form data
    const result = formSchema.safeParse(body)

    if (!result.success) {
      // Return validation errors
      return NextResponse.json({ success: false, errors: result.error.flatten().fieldErrors }, { status: 400 })
    }

    const { name, email, subject, message } = result.data

    // In a real implementation, you would send an email or store the contact form data
    // For example, using a service like SendGrid, Mailgun, or storing in a database

    // Example: Send email using an email service (pseudocode)
    // await sendEmail({
    //   to: "01sanjananair@gmail.com",
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // })

    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
