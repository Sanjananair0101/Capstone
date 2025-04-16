"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    try {
      // In a real implementation, this would be a fetch call to your API route
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulating API call for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // if (!response.ok) throw new Error('Failed to send message')

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError("Failed to send message. Please try again later.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#5C7650] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <div className="max-w-2xl mx-auto bg-[#3A5A40] p-8 rounded-lg shadow-lg">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DAD7CD] text-[#344E41] mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-[#DAD7CD] text-[#344E41] font-bold rounded-md hover:bg-white transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-md bg-[#DAD7CD] text-[#344E41] focus:outline-none focus:ring-2 focus:ring-[#A3B18A] ${
                    errors.name ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby="name-error"
                  {...register("name")}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-300">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-md bg-[#DAD7CD] text-[#344E41] focus:outline-none focus:ring-2 focus:ring-[#A3B18A] ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Your Email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby="email-error"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-300">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-3 rounded-md bg-[#DAD7CD] text-[#344E41] focus:outline-none focus:ring-2 focus:ring-[#A3B18A] ${
                    errors.subject ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Message Subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby="subject-error"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-300">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md bg-[#DAD7CD] text-[#344E41] focus:outline-none focus:ring-2 focus:ring-[#A3B18A] ${
                    errors.message ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Your Message"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby="message-error"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-300">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitError && <div className="p-3 bg-red-900 text-white rounded-md">{submitError}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#DAD7CD] text-[#344E41] font-bold rounded-md hover:bg-white transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-[#5C7650]">
            <p className="mb-2">Email: 01sanjananair@gmail.com</p>
            <p>Mobile: 9958488077</p>
          </div>
        </div>
      </div>
    </section>
  )
}
