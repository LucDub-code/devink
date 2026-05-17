import Image from "next/image"
import Link from "next/link"

type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="p-4">
      <Link href="/shop" className="block relative w-full aspect-square">
        <Image src={images[0]} fill className="object-cover" alt="" />
      </Link>
    </div>
  )
}