import Link from "next/link"
import ImageCarousel from "./ImageCarousel"
import { Text } from "../retroui/Text"

type ProductCardProps = {
  title: string
  price: number
  images: string[]
}

export default function ProductCard({ title, price, images }: ProductCardProps) {
  return (
    <article className="flex-1 transition-all duration-200 border-y-2 border-r-2 disabled:cursor-pointer bg-foreground outline-hidden">
      <ImageCarousel images={images} />
      <Link href="/shop" className="block px-4 pb-4">
        <div className="flex items-center justify-between">
          <Text as="h4" variant="h4sans">{title}</Text>
          <span className="text-xl font-bold">{price.toFixed(2)}€</span>
        </div>
      </Link>
    </article>
  )
}