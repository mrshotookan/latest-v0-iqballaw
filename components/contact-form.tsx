"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResult(null)

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const response = await submitContactForm(formData)
      setResult(response)

      // Reset form on success
      if (response.success) {
        e.currentTarget.reset()
      }
    })
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Request a Consultation</CardTitle>
        <p className="text-gray-700">
          Fill out the form below and we'll get back to you within 24 hours to discuss your tax law needs.
        </p>
      </CardHeader>
      <CardContent>
        {result && (
          <Alert className={`mb-6 ${result.success ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
            <AlertDescription className={result.success ? "text-green-700" : "text-red-700"}>
              {result.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Please describe your tax law needs or questions..."
              className="w-full min-h-[120px]"
              disabled={isPending}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-white"
            disabled={isPending}
          >
            {isPending ? "Sending Message..." : "Send Message"}
          </Button>

          <p className="text-sm text-gray-600 text-center">
            * Required fields. All information is kept strictly confidential.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
