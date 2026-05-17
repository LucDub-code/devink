"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const isFirst = currentIndex === 0
  const isLast = currentIndex === images.length - 1

  return (
    <div className="relative p-4 group">
      <Link href="/shop" className="relative block w-full aspect-square">
        <Image src={images[currentIndex]} fill className="object-cover" alt="" />
      </Link>

      {!isFirst && (
        <button
          type="button"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          aria-label="Image précédente"
          className="absolute hidden p-2 cursor-pointer group-hover:block left-4 top-1/2 bg-muted-foreground hover:bg-lime"
        >
          <Image src="/icons/arrow-left.svg" alt="" width={20} height={20} />
        </button>
      )}

      {!isLast && (
        <button
          type="button"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          aria-label="Image suivante"
          className="absolute hidden p-2 cursor-pointer group-hover:block right-4 top-1/2 bg-muted-foreground hover:bg-lime"
        >
          <Image src="/icons/arrow-right.svg" alt="" width={20} height={20} />
        </button>
      )}
    </div>
  )
}