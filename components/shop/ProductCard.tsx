import Link from "next/link"
import Image from "next/image"
import { Text } from "../retroui/Text"

type ProductCardProps = {
  selectedColor: string
}

export default function ProductCard({ selectedColor }: ProductCardProps) {
  return (
    <article className="flex-1 transition-all duration-200 border-y-2 border-r-2 disabled:cursor-pointer bg-foreground outline-hidden">
      <Link href="/shop" className="block p-4">
        <div className="relative w-full aspect-square">
          <Image src="/placeholder.jpg" fill className="object-cover" alt="" />
        </div>
        <div className="flex items-center justify-between">
          <Text as="h4" variant="h4sans">Titre du produit</Text>
          <span className="text-xl font-bold">49,99€</span>
        </div>
      </Link>
    </article>
  )
}