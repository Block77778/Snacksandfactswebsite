"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hammer, Star, Trophy, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HammerClientsPage() {
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
          <Link href="/hammers-life" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Hammer's Life, Hammer's Wife!
          </Link>
          <Link href="/hammer-clients" className="text-sm font-medium text-white">
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
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hammer's Life, Hammer's Wife!
              </Link>
              <Link
                href="/hammer-clients"
                className="text-sm font-medium text-white"
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
              <Trophy className="h-32 w-32" />
            </div>
            <div className="absolute bottom-20 right-20 text-white/5">
              <Star className="h-40 w-40" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <Hammer className="h-8 w-8 text-white" />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Hammer Clients</h1>
                  <Hammer className="h-8 w-8 text-white" />
                  <Trophy className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the incredible people who have transformed their lives with Hammer Fit. Their success stories
                  inspire us every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Success Stories</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Real transformations from real people who committed to the Hammer Fit lifestyle.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Client Success Story 1 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">JS</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">John S.</h3>
                    <p className="text-gray-600 text-sm">Lost 45 lbs in 6 months</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "Hammer's program changed my life. The accountability and support made all the difference. I'm
                    stronger and more confident than ever!"
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-green-100 text-green-800">Weight Loss</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Strength</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Client Success Story 2 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">MR</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">Maria R.</h3>
                    <p className="text-gray-600 text-sm">Gained 15 lbs muscle</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "The nutrition plan and workout routines are incredible. Hammer's coaching helped me build the
                    muscle I always wanted!"
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-purple-100 text-purple-800">Muscle Gain</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Nutrition</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Client Success Story 3 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">DT</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">David T.</h3>
                    <p className="text-gray-600 text-sm">Complete lifestyle transformation</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "Not just a fitness program, but a complete life transformation. Hammer taught me discipline that
                    extends beyond the gym."
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-indigo-100 text-indigo-800">Lifestyle</Badge>
                    <Badge className="bg-green-100 text-green-800">Discipline</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Client Success Story 4 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">AL</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">Amanda L.</h3>
                    <p className="text-gray-600 text-sm">Lost 30 lbs, gained confidence</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "The personal coaching calls were game-changers. Hammer's motivation kept me on track even when I
                    wanted to quit!"
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-pink-100 text-pink-800">Confidence</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Motivation</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Client Success Story 5 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">RC</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">Robert C.</h3>
                    <p className="text-gray-600 text-sm">Improved health markers</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "The meal plans are delicious and easy to follow. My doctor was amazed at my improved blood work!"
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-red-100 text-red-800">Health</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Nutrition</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Client Success Story 6 */}
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">SK</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black">Sarah K.</h3>
                    <p className="text-gray-600 text-sm">Marathon finisher</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center italic">
                    "From couch to marathon! Hammer's training program gave me the endurance and mental strength to
                    achieve my dreams."
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge className="bg-blue-100 text-blue-800">Endurance</Badge>
                    <Badge className="bg-green-100 text-green-800">Achievement</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">What Clients Say</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Hear directly from the Hammer Fit family about their transformation journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">TM</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Tom M.</h4>
                      <p className="text-gray-600 text-sm">12-month transformation</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Hammer doesn't just train your body, he transforms your mindset. The mental toughness I've gained
                    has helped me in every area of my life."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">LB</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Lisa B.</h4>
                      <p className="text-gray-600 text-sm">Lifetime member</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The community Hammer has built is incredible. We support each other through every challenge and
                    celebrate every victory together."
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
                Ready to Join Our Success Stories?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Your transformation story could be next. Join the Hammer Fit family and start your journey today.
              </p>
              <Link href="/subscribe">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-lg font-semibold">
                  <Hammer className="h-5 w-5 mr-2" />
                  Start Your Transformation
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
          <Trophy className="h-4 w-4 text-yellow-400" />
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
            href="/hammers-life"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Hammer's Life
          </Link>
        </nav>
      </footer>
    </div>
  )
}
