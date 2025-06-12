"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hammer, Heart, Home, Car, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HammersLifePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snacks%20and%20facts%20logo-TNPSF5djY9qkumP2uzk8YFhG1aMa0G.png"
            width="40"
            height="40"
            alt="Hammer Fit Logo"
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white">Hammer Fit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="/hammers-life" className="text-sm font-medium text-white">
            Hammer's Life, Hammer's Wife!
          </Link>
          <Link href="/hammer-clients" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Hammer Clients
          </Link>
          <Link href="/hammer-gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Hammer Gallery
          </Link>
          <Link
            href="https://youtube.com/@hammer-snf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            YouTube
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="ml-auto md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/hammers-life"
                className="text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hammer's Life, Hammer's Wife!
              </Link>
              <Link
                href="/hammer-clients"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hammer Clients
              </Link>
              <Link
                href="/hammer-gallery"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hammer Gallery
              </Link>
              <Link
                href="https://youtube.com/@hammer-snf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                YouTube
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-white/5">
              <Heart className="h-32 w-32" />
            </div>
            <div className="absolute bottom-20 right-20 text-white/5">
              <Home className="h-40 w-40" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-red-500" />
                  <Hammer className="h-8 w-8 text-white" />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Hammer's Life, Hammer's Wife!
                  </h1>
                  <Hammer className="h-8 w-8 text-white" />
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get to know the man behind the muscle - Hammer's personal life, adventures, and the amazing woman who
                  supports his journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Life Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black flex items-center gap-2">
                  <Hammer className="h-6 w-6" />
                  The Hammer's Journey
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Behind every strong man is an even stronger woman. My wife has been my rock, my motivation, and my
                  biggest supporter throughout this incredible transformation journey. Together, we've built not just a
                  fitness empire, but a life filled with love, laughter, and shared dreams.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From early morning workouts to late-night meal prep sessions, she's been there every step of the way.
                  Our relationship is built on mutual respect, shared goals, and the understanding that we're stronger
                  together than we could ever be apart.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-500 text-white">Love</Badge>
                  <Badge className="bg-black text-white">Partnership</Badge>
                  <Badge className="bg-red-500 text-white">Support</Badge>
                  <Badge className="bg-black text-white">Together</Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/hammer-dealership.png"
                  width="600"
                  height="600"
                  alt="Hammer in his element"
                  className="aspect-square overflow-hidden rounded-3xl object-cover shadow-2xl border border-gray-200 mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Family Moments Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Family Moments</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                The moments that matter most - our family, our love, and the memories we create together.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative group">
                <Image
                  src="/images/hammer-wife-wedding.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer and his wife on their wedding day in beautiful formal attire"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Our Wedding Day</h3>
                  <p className="text-sm text-gray-200">The beginning of forever</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/wedding-kiss-bw.jpeg"
                  width="400"
                  height="300"
                  alt="Beautiful black and white wedding photo of Hammer and his wife sharing a romantic kiss"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Wedding Kiss</h3>
                  <p className="text-sm text-gray-200">A moment of pure love</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/family-three-outdoor.jpeg"
                  width="400"
                  height="300"
                  alt="Family photo with Hammer, his wife, and their son outdoors"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Family Time</h3>
                  <p className="text-sm text-gray-200">Together we're stronger</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/hammer-son-restaurant.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer and his son enjoying a meal together at a restaurant"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Father & Son</h3>
                  <p className="text-sm text-gray-200">Quality time together</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/family-son-portrait.jpeg"
                  width="400"
                  height="300"
                  alt="School portrait of Hammer's son in a plaid shirt, smiling brightly"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Our Pride & Joy</h3>
                  <p className="text-sm text-gray-200">The future is bright</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/hammer-hulk-kids.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer dressed as the Hulk with children in superhero costumes during Halloween"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Family Fun</h3>
                  <p className="text-sm text-gray-200">Being a superhero dad</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/hammer-wife-bathtub.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer and his wife relaxing together in a vintage bathtub by the lake"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Lake Adventures</h3>
                  <p className="text-sm text-gray-200">Making memories by the water</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/beach-couple-selfie.jpeg"
                  width="400"
                  height="300"
                  alt="Beach selfie of Hammer and his wife enjoying vacation time together"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Beach Getaway</h3>
                  <p className="text-sm text-gray-200">Vacation vibes and sunshine</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/couple-casual-sunglasses.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer and his wife in casual attire with sunglasses, looking relaxed and happy"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Casual Days</h3>
                  <p className="text-sm text-gray-200">Everyday happiness together</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Family Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Extended Family & Friends</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Family extends beyond blood - celebrating the people who make our lives richer and more meaningful.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative group">
                <Image
                  src="/images/hammer-with-dog.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer with a small dog in his car, showing his gentle and caring side"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Furry Family</h3>
                  <p className="text-sm text-gray-200">Love extends to all creatures</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/hammer-with-elderly-woman.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer with an elderly woman in a home setting with beautiful flowers"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Family Love</h3>
                  <p className="text-sm text-gray-200">Honoring our elders</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/welcome-home-family.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer with family members in front of a Welcome Home neon sign"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Welcome Home</h3>
                  <p className="text-sm text-gray-200">Celebrating together</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/intimate-couple-selfie.jpeg"
                  width="400"
                  height="300"
                  alt="Intimate close-up selfie of Hammer and his wife showing their loving relationship"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Quiet Moments</h3>
                  <p className="text-sm text-gray-200">Love in the little things</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/hammer-wife-gym.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer and his wife together at the gym, both in workout attire"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Gym Partners</h3>
                  <p className="text-sm text-gray-200">Training together, growing together</p>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="/images/home-relaxing-couple.jpeg"
                  width="400"
                  height="300"
                  alt="Hammer relaxing at home with his wife, showing their comfortable domestic life"
                  className="aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Home Sweet Home</h3>
                  <p className="text-sm text-gray-200">Comfort and love at home</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Our Life Together</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Beyond the gym and the cameras, we're just two people who love life, adventure, and each other.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Love & Support</h3>
                  <p className="text-gray-600">
                    The foundation of everything we do is built on love, trust, and unwavering support for each other's
                    dreams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Home Life</h3>
                  <p className="text-gray-600">
                    Creating a warm, loving home where we can relax, recharge, and plan our next adventures together.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Adventures</h3>
                  <p className="text-gray-600">
                    From road trips to new experiences, we believe life is meant to be lived to the fullest together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Transform Your Life?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Join the Hammer Fit family and start your own transformation journey with the support you need.
              </p>
              <Link href="/subscribe">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Hammer className="h-5 w-5" />
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="ml-2">Join Hammer Fit</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black">
        <div className="flex items-center gap-2">
          <Hammer className="h-4 w-4 text-gray-400" />
          <Heart className="h-4 w-4 text-red-400" />
          <p className="text-xs text-gray-400">© 2024 Hammer Fit. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/hammer-gallery"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Gallery
          </Link>
        </nav>
      </footer>
    </div>
  )
}
