"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Hammer, Dumbbell, Check, Trophy, Heart, Crown, FileText, Download, CreditCard } from "lucide-react"
import Link from "next/link"

interface Package {
  id: string
  name: string
  description: string
  price: number
  files: {
    name: string
    url: string
    type: "meal" | "exercise"
  }[]
}

export default function ShopPage() {
  const [packages, setPackages] = useState<Package[]>([])
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    fetchPackages()
    loadSquareSDK()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await fetch("/api/packages")
      if (response.ok) {
        const data = await response.json()
        setPackages(data)
      }
    } catch (error) {
      console.error("Error fetching packages:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadSquareSDK = () => {
    if (document.getElementById("square-js")) return

    const script = document.createElement("script")
    script.id = "square-js"
    script.src = "https://sandbox.web.squarecdn.com/v1/square.js"
    script.async = true
    document.head.appendChild(script)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData((prev) => ({ ...prev, cardNumber: formatted }))
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value)
    setFormData((prev) => ({ ...prev, expiryDate: formatted }))
  }

  const processPayment = async () => {
    if (!selectedPackage) return

    setProcessing(true)
    try {
      // Initialize Square Payments
      const payments = (window as any).Square.payments(
        process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
      )

      // Create card payment method
      const card = await payments.card()
      await card.attach("#card-container")

      // Tokenize the card
      const tokenResult = await card.tokenize()
      if (tokenResult.status === "OK") {
        // Process payment
        const response = await fetch("/api/create-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceId: tokenResult.token,
            packageId: selectedPackage.id,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
          }),
        })

        const result = await response.json()
        if (result.success) {
          // Send download link
          await fetch("/api/send-download-link", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              purchaseId: result.purchaseId,
            }),
          })

          // Redirect to download page
          window.location.href = `/download/${result.downloadToken}`
        } else {
          alert("Payment failed: " + (result.error || "Unknown error"))
        }
      } else {
        alert("Card tokenization failed: " + tokenResult.errors.map((e: any) => e.message).join(", "))
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment processing failed. Please try again.")
    } finally {
      setProcessing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Hammer className="h-12 w-12 animate-spin mx-auto mb-4 text-white" />
          <p className="text-white">Loading packages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="relative">
            <Hammer className="h-8 w-8 text-white animate-bounce" />
            <div className="absolute inset-0 h-8 w-8 text-white/20 animate-ping">
              <Hammer className="h-8 w-8" />
            </div>
          </div>
          <span className="text-2xl font-bold text-white">Hammer Fit</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#packages" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Packages
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-fit backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Hammer className="h-4 w-4 animate-pulse" />
                  <Dumbbell className="h-4 w-4 animate-bounce" />
                  <Trophy className="h-4 w-4 animate-pulse" />
                </div>
                <span className="ml-2">Digital Fitness Programs</span>
              </Badge>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hammer Fit Programs
                </span>
                <br />
                <span className="text-3xl sm:text-4xl xl:text-5xl">Digital Downloads</span>
              </h1>

              <p className="max-w-[800px] text-gray-300 md:text-xl leading-relaxed">
                Get instant access to professional workout routines and meal plans. Download immediately after purchase
                and start your transformation today.
              </p>

              <div className="flex items-center gap-8 text-white">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Instant Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">PDF Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black mb-4">Choose Your Program</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select the package that fits your goals. All programs include detailed workout routines and meal plans
                for immediate download.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    selectedPackage?.id === pkg.id ? "border-black shadow-xl" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  {pkg.id === "premium-hammer" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-black text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        pkg.id === "basic-hammer"
                          ? "bg-gray-100"
                          : pkg.id === "premium-hammer"
                            ? "bg-black"
                            : "bg-gradient-to-r from-yellow-400 to-yellow-600"
                      }`}
                    >
                      {pkg.id === "basic-hammer" && <Dumbbell className="h-8 w-8 text-black" />}
                      {pkg.id === "premium-hammer" && <Hammer className="h-8 w-8 text-white" />}
                      {pkg.id === "elite-hammer" && <Crown className="h-8 w-8 text-white" />}
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold">${(pkg.price / 100).toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{pkg.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Included Files:</h4>
                      {pkg.files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{file.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {file.type === "exercise" ? "Exercise" : "Meal"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full ${
                        selectedPackage?.id === pkg.id
                          ? "bg-black text-white"
                          : "bg-gray-100 text-black hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      {selectedPackage?.id === pkg.id ? "Selected" : "Select Package"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Checkout Section */}
        {selectedPackage && (
          <section className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <Card className="border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Complete Your Purchase</CardTitle>
                    <div className="text-center">
                      <Badge className="bg-black text-white">
                        {selectedPackage.name} - ${(selectedPackage.price / 100).toFixed(2)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                      <p className="text-xs text-gray-500">Download link will be sent to this email</p>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Information
                      </h3>

                      {/* Square Card Container */}
                      <div id="card-container" className="border rounded-md p-4 min-h-[60px]">
                        {/* Square will inject the card form here */}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Package:</span>
                        <span>{selectedPackage.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Files included:</span>
                        <span>{selectedPackage.files.length} PDF files</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total:</span>
                        <span>${(selectedPackage.price / 100).toFixed(2)}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg"
                      onClick={processPayment}
                      disabled={processing || !formData.firstName || !formData.lastName || !formData.email}
                    >
                      {processing ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Payment...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Hammer className="h-5 w-5" />
                          Complete Purchase
                        </div>
                      )}
                    </Button>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-blue-800 mb-2">
                        <Download className="h-5 w-5" />
                        <span className="font-semibold">Instant Download</span>
                      </div>
                      <p className="text-blue-700 text-sm">
                        After successful payment, you'll receive an email with download links. Files are available for 7
                        days.
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      By purchasing, you agree to our Terms of Service and Privacy Policy. All sales are final. Digital
                      products are for personal use only.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black mb-4">
                Why Choose Digital Programs?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get instant access to professional fitness programs designed by Hammer
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instant Access</h3>
                  <p className="text-gray-600">Download immediately after purchase - no waiting</p>
                </CardContent>
              </Card>

              <Card className="text-center border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional PDFs</h3>
                  <p className="text-gray-600">High-quality, detailed guides you can print or view offline</p>
                </CardContent>
              </Card>

              <Card className="text-center border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-gray-600">Programs based on Hammer's own transformation journey</p>
                </CardContent>
              </Card>

              <Card className="text-center border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lifetime Access</h3>
                  <p className="text-gray-600">Keep your files forever - no monthly subscriptions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black">
        <div className="flex items-center gap-2">
          <Hammer className="h-4 w-4 text-gray-400 animate-pulse" />
          <Dumbbell className="h-4 w-4 text-gray-400 animate-bounce" />
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
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
