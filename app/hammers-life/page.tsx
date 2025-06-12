"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hammer, Heart, Home, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HammersLifePage() {
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

        {/* Lifestyle Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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
