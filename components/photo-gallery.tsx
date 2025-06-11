"use client"

import { useState } from "react"
import Image from "next/image"
import { GalleryModal } from "./gallery-modal"
import { Card } from "@/components/ui/card"

interface PhotoGalleryProps {
  title: string
  description?: string
  images: {
    src: string
    alt: string
    aspectRatio?: "square" | "video" | "portrait"
  }[]
  className?: string
}

export function PhotoGallery({ title, description, images, className = "" }: PhotoGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const getAspectRatioClass = (aspectRatio?: string) => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "video":
        return "aspect-video"
      case "portrait":
        return "aspect-[3/4]"
      default:
        return "aspect-[4/3]"
    }
  }

  return (
    <div className={className}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            onClick={() => openModal(index)}
          >
            <div className="relative w-full h-full">
              <div className={`relative w-full ${getAspectRatioClass(image.aspectRatio)}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white text-xs sm:text-sm p-2 rounded-md">
                  Click to enlarge
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <GalleryModal
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={currentIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}
