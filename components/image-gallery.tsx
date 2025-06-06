"use client"

import { useState } from "react"
import { RobustImage } from "@/components/robust-image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length)
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg border bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-video overflow-hidden">
              <RobustImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                fallbackSrc={`/placeholder.svg?height=400&width=600&text=Gallery+Image+${index + 1}`}
              />
            </div>
            {image.caption && (
              <div className="p-3">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>

              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              <div className="relative w-full h-full">
                <RobustImage
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill
                  className="object-contain"
                  fallbackSrc={`/placeholder.svg?height=600&width=800&text=Gallery+Image+${selectedImageIndex + 1}`}
                />
              </div>

              {images[selectedImageIndex].caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-center">{images[selectedImageIndex].caption}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
