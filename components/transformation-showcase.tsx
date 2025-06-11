"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TransformationImage {
  src: string
  alt: string
  featured?: boolean
}

interface TransformationShowcaseProps {
  title: string
  description?: string
  images: TransformationImage[]
  className?: string
}

export function TransformationShowcase({ title, description, images, className = "" }: TransformationShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const featuredImages = images.filter((img) => img.featured)
  const displayImages = featuredImages.length > 0 ? featuredImages : images

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1))
  }

  const openModal = (src: string) => {
    setModalImage(src)
    setModalOpen(true)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Main Transformation Display */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Image
              src={displayImages[currentIndex].src || "/placeholder.svg"}
              alt={displayImages[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 hover:bg-white"
                onClick={() => openModal(displayImages[currentIndex].src)}
              >
                <Maximize2 className="h-4 w-4 mr-2" />
                View Full Size
              </Button>
            </div>
          </div>

          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Transformation Description */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Real Results, Real Transformation</h3>
          <p className="text-gray-600">
            These are authentic, unedited photos documenting my personal fitness journey. Through consistent training,
            proper nutrition, and the exact methods I share in the Hammer Fit Program, I've transformed my physique and
            overall health.
          </p>
          <p className="text-gray-600">
            My program isn't about quick fixes or unrealistic promises. It's about sustainable habits, proper form, and
            the mental discipline needed to achieve lasting results. If you're ready to commit to your transformation,
            I'm ready to guide you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-black text-white hover:bg-gray-800">Join Hammer Fit Program</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-8 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
        {images.map((image, index) => (
          <Card
            key={index}
            className={cn(
              "overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300",
              displayImages[currentIndex].src === image.src && "ring-2 ring-black",
            )}
            onClick={() => {
              const newIndex = displayImages.findIndex((img) => img.src === image.src)
              if (newIndex !== -1) {
                setCurrentIndex(newIndex)
              } else {
                // If not in display images, add it temporarily
                setModalImage(image.src)
                setModalOpen(true)
              }
            }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 20vw, 10vw"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Full-size Modal */}
      {modalOpen && modalImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute top-4 right-4 z-[60]">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={modalImage || "/placeholder.svg"}
              alt="Transformation full view"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
