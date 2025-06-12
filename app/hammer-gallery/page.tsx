"use client"

import { Button } from "@/components/ui/button"
import { Hammer, Camera, ImageIcon, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PhotoGallery } from "@/components/photo-gallery"
import { useState } from "react"
import { TransformationSlider } from "@/components/transformation-slider"

export default function HammerGalleryPage() {
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
          <Link href="/hammer-clients" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Hammer Clients
          </Link>
          <Link href="/hammer-gallery" className="text-sm font-medium text-white">
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
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hammer Clients
              </Link>
              <Link
                href="/hammer-gallery"
                className="text-sm font-medium text-white"
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
              <Camera className="h-32 w-32" />
            </div>
            <div className="absolute bottom-20 right-20 text-white/5">
              <ImageIcon className="h-40 w-40" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Camera className="h-8 w-8 text-white" />
                  <Hammer className="h-8 w-8 text-white" />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Hammer Gallery</h1>
                  <Hammer className="h-8 w-8 text-white" />
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Capturing the journey, the transformation, and the moments that define the Hammer Fit lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Slider Section - Reduced gap */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <TransformationSlider
              title="Hammer's Complete Transformation"
              description="Witness the incredible journey from start to finish - slide through each stage of this amazing transformation."
              images={[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%20start-UUTse4Ftx0JvyG3hTbPucPj1QeLv2e.jpeg",
                  alt: "Hammer's transformation starting point - mirror selfie in green shorts showing the beginning of his fitness journey",
                  stage: "Starting Point",
                  description:
                    "The beginning of an incredible transformation journey. Every great change starts with a single decision.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%201-G1wyE1G5mpRy3vuzFr5cHQegfeIOyZ.jpeg",
                  alt: "Hammer's early transformation progress in patterned shorts",
                  stage: "Month 1-2",
                  description: "Early progress showing dedication and consistency. The foundation is being built.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%202-hvITzzZRIlLx2GNpLrAZsxzICp1nMY.jpeg",
                  alt: "Hammer's continued transformation progress showing improved muscle definition",
                  stage: "Month 3-4",
                  description:
                    "Noticeable changes in muscle definition and overall physique. The hard work is paying off.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%203-OkqC1cafBTciGsd4ywoEBjzt1vOoPn.jpeg",
                  alt: "Hammer's mid-transformation progress in green shorts showing significant changes",
                  stage: "Month 5-6",
                  description:
                    "Significant improvements in muscle mass and body composition. The transformation is accelerating.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%204-WRlqKvCRfq7N00AQlS71nsMpyyiQwe.jpeg",
                  alt: "Hammer's advanced transformation progress in gray sweatpants showing excellent muscle definition",
                  stage: "Month 7-8",
                  description:
                    "Advanced stage showing excellent muscle definition and strength gains. The results speak for themselves.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%206-lU6I0sMWslswaGujdnMH6rBdP6iEzF.jpeg",
                  alt: "Hammer's incredible final transformation result showing peak physique with visible abs and cross necklace",
                  stage: "Final Result",
                  description:
                    "The incredible final result - peak physique achieved through dedication, proper nutrition, and consistent training.",
                },
              ]}
              className="text-white"
            />
          </div>
        </section>

        {/* Fitness Gallery Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <PhotoGallery
              title="Fitness Moments"
              description="Celebrating progress, dedication, and results from the Hammer Fit journey"
              images={[
                {
                  src: "/images/hammer-gym-1.jpeg",
                  alt: "Hammer showcasing his incredible physique in gray shorts next to gym equipment, displaying visible abs and muscle definition",
                  aspectRatio: "video",
                },
                {
                  src: "/images/hammer-gym-2.jpeg",
                  alt: "Hammer giving a thumbs up while seated on gym equipment, showing his muscular build and positive attitude",
                  aspectRatio: "video",
                },
                {
                  src: "/images/hammer-gym-3.jpeg",
                  alt: "Hammer in beige pants and sunglasses giving a thumbs up next to tanning equipment with blue LED lighting",
                  aspectRatio: "video",
                },
                {
                  src: "/images/hammer-gym-4.jpeg",
                  alt: "Hammer in bright green shorts giving a thumbs up next to gym equipment, showing his impressive transformation results",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20boat%20transformation-m1DpqyF3XKxdZqMf7HHvlnxd0jgv6t.jpeg",
                  alt: "Hammer showcasing his peak physique on a boat in red shorts and sunglasses",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%206-lU6I0sMWslswaGujdnMH6rBdP6iEzF.jpeg",
                  alt: "Hammer's final transformation result showing incredible muscle definition and visible abs",
                  aspectRatio: "video",
                },
              ]}
            />
          </div>
        </section>

        {/* Call to Action - Fixed button */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Create Your Own Gallery?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Start your transformation journey and create your own success story with Hammer Fit.
              </p>
              <Link href="/subscribe">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-lg font-semibold">
                  <Hammer className="h-5 w-5 mr-2" />
                  Join Hammer Fit Program
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
          <Camera className="h-4 w-4 text-gray-400" />
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
            href="/hammer-clients"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Clients
          </Link>
        </nav>
      </footer>
    </div>
  )
}
