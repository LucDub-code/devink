import Link from "next/link"
import Image from "next/image"
import { Text } from "../retroui/Text"

export default function ProductCard() {
  return (
    <article className="p-4 transition-all duration-200 border-2 shadow-lg cursor-pointer bg-foreground outline-hidden hover:shadow-none">
      <Link href="/shop">
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