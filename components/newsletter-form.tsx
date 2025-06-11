"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Hammer, Zap, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterForm() {
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
    formData.append("formType", "newsletter")

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
          message: "Thanks for subscribing! You'll receive the latest updates soon.",
        })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      {submitStatus.type && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
            submitStatus.type === "success"
              ? "bg-green-900/20 border border-green-500/30"
              : "bg-red-900/20 border border-red-500/30"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
          )}
          <p className={`text-sm ${submitStatus.type === "success" ? "text-green-300" : "text-red-300"}`}>
            {submitStatus.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-1 bg-white border-white text-black placeholder:text-gray-500"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 group disabled:opacity-50"
        >
          <div className="flex items-center gap-1">
            <Hammer className="h-4 w-4" />
            <Zap className="h-4 w-4" />
          </div>
          <span className="ml-2">{isSubmitting ? "..." : "Subscribe"}</span>
        </Button>
      </form>
      <p className="text-xs text-gray-400">Join the community. Unsubscribe anytime.</p>
    </div>
  )
}
