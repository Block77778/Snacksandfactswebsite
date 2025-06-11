"use client"

import type React from "react"

import { useState } from "react"
import { Hammer, Dumbbell, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

export default function SubscribePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("formType", "subscription")

    try {
      const response = await fetch("https://formspree.io/f/xblyoldd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your subscription request has been received. We'll contact you within 24-48 hours to complete your subscription and deliver your personalized plans.",
        })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snacks%20and%20facts%20logo-TNPSF5djY9qkumP2uzk8YFhG1aMa0G.png"
            width="40"
            height="40"
            alt="Hammer Fit Logo - Muscular arms holding hammer"
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white">Hammer Fit</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="/#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#programs" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Programs
          </Link>
          <Link
            href="/#transformation"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Transformation
          </Link>
          <Link href="/#hammer-fit" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Membership
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="sm" className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Hammer className="h-8 w-8 text-white" />
                <Dumbbell className="h-8 w-8 text-white" />
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-white">
                  Subscribe to Hammer Fit Program
                </h1>
                <Dumbbell className="h-8 w-8 text-white" />
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to request your personalized workout and meal plans
              </p>
            </div>
          </div>

          {submitStatus.type && (
            <Card className={`mb-8 ${submitStatus.type === "success" ? "bg-green-50" : "bg-red-50"}`}>
              <CardContent className="p-6 flex items-start gap-4">
                {submitStatus.type === "success" ? (
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <h3
                    className={`font-bold text-lg ${submitStatus.type === "success" ? "text-green-800" : "text-red-800"}`}
                  >
                    {submitStatus.type === "success" ? "Request Submitted Successfully!" : "Error"}
                  </h3>
                  <p className={submitStatus.type === "success" ? "text-green-700" : "text-red-700"}>
                    {submitStatus.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1 space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Subscription Options</CardTitle>
                  <CardDescription className="text-gray-300">Choose the plan that works best for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-2">MONTHLY Subscription</h3>
                      <div className="text-2xl font-bold text-white mb-2">$29.99</div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Access the entire Hammer Fit Program</li>
                        <li>• Meal Plan</li>
                        <li>• Workout Routine</li>
                        <li>• New workout routines and meal plans monthly</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-2">QUARTERLY Subscription</h3>
                      <div className="text-2xl font-bold text-white mb-2">$99.99</div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Everything from monthly subscription</li>
                        <li>• 1 monthly personalized accountability check in</li>
                        <li>• Quarterly progress and goal setting</li>
                        <li>• Exclusive access to merchandise and discounts</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-2">ANNUAL Subscription</h3>
                      <div className="text-2xl font-bold text-white mb-2">$199.99</div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Everything from Quarterly Subscription</li>
                        <li>• Personal Coaching - Once per week</li>
                        <li>• An autographed T-Shirt from The Hammer</li>
                        <li>• A spot on the website for Hammer Jr. Of the month</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle>Request Subscription</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you to complete your subscription
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Select Package</Label>
                      <div className="grid gap-4">
                        <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                          <input
                            type="radio"
                            name="package"
                            value="MONTHLY Subscription - $29.99"
                            id="monthly"
                            required
                          />
                          <Label htmlFor="monthly" className="flex-1 cursor-pointer">
                            <span className="font-medium">MONTHLY Subscription</span>
                            <span className="ml-2 text-gray-500">$29.99</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                          <input type="radio" name="package" value="QUARTERLY Subscription - $99.99" id="quarterly" />
                          <Label htmlFor="quarterly" className="flex-1 cursor-pointer">
                            <span className="font-medium">QUARTERLY Subscription</span>
                            <span className="ml-2 text-gray-500">$99.99</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                          <input type="radio" name="package" value="ANNUAL Subscription - $199.99" id="annual" />
                          <Label htmlFor="annual" className="flex-1 cursor-pointer">
                            <span className="font-medium">ANNUAL Subscription</span>
                            <span className="ml-2 text-gray-500">$199.99</span>
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your fitness goals, any health concerns, or questions you may have..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg shadow-lg shadow-black/20 transition-all duration-300 disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <Hammer className="h-5 w-5" />
                        <Dumbbell className="h-5 w-5" />
                        <span>{isSubmitting ? "Submitting Request..." : "Submit Subscription Request"}</span>
                      </div>
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      After submitting, we'll contact you within 24-48 hours to arrange payment and deliver your
                      personalized plans.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black">
        <div className="flex items-center gap-2">
          <Hammer className="h-4 w-4 text-gray-400" />
          <Dumbbell className="h-4 w-4 text-gray-400" />
          <p className="text-xs text-gray-400">© 2024 Hammer Fit Program. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/#contact"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
