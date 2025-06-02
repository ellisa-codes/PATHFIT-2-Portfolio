"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg border shadow-lg hover:shadow-xl transition-all duration-500 group">
        <Image
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        {images[selectedImage].caption && (
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-sm text-white transition-all duration-300 group-hover:from-black/90">
            {images[selectedImage].caption}
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-md border transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-md group",
              selectedImage === index
                ? "ring-2 ring-primary ring-offset-2 shadow-lg scale-105"
                : "hover:ring-1 hover:ring-primary/50",
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  )
}
