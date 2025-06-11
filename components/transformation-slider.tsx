"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface TransformationImage {
  src: string
  alt: string
  stage: string
  description: string
}

interface TransformationSliderProps {
  title: string
  description?: string
  images: TransformationImage[]
  className?: string
}

export function TransformationSlider({ title, description, images, className = "" }: TransformationSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-black" />
          {title}
        </h2>
        {description && <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Slider */}
        <div className="relative mb-8">
          <Card className="overflow-hidden shadow-2xl border-2 border-gray-200">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Stage Indicator */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {images[currentIndex].stage}
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-600" />
                {images[currentIndex].stage}
              </h3>
              <p className="text-gray-600">{images[currentIndex].description}</p>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={handlePrevious}
            aria-label="Previous transformation stage"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={handleNext}
            aria-label="Next transformation stage"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md",
                currentIndex === index ? "ring-2 ring-black shadow-lg scale-105" : "hover:scale-102",
              )}
              onClick={() => goToSlide(index)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-black/60 px-1 py-0.5 rounded">{index + 1}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          ></div>
        </div>

        {/* Transformation Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <Card className="p-4">
            <div className="text-2xl font-bold text-black">{images.length}</div>
            <div className="text-sm text-gray-600">Transformation Stages</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-black">100%</div>
            <div className="text-sm text-gray-600">Natural Results</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-black">Real</div>
            <div className="text-sm text-gray-600">Unedited Photos</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Own Transformation?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This transformation didn't happen overnight. It took dedication, the right nutrition plan, and consistent
            training. If you're ready to commit to the process, I'm ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Join Hammer Fit Program
            </Button>
            <Button size="lg" variant="outline">
              Learn About My Methods
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
