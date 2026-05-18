import Image from "next/image"
import Link from "next/link"
import { Text } from "@/components/retroui/Text"
import { Button } from "@/components/retroui/Button"

export default function Categories() {

  const categories = [
    {
      label: "T-shirts",
      bg: "bg-lime",
      btnHoverColor: "hover:bg-lime",
      imageUrl: "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943417/category-black-shirt_gxggab.png"
    },
    {
      label: "Hoodies",
      bg: "bg-orange",
      btnHoverColor: "hover:bg-orange",
      imageUrl: "https://res.cloudinary.com/dwblp4axc/image/upload/v1778940595/category-black-hoodie_sdp4du.png"
    },
    {
      label: "Mugs",
      bg: "bg-pink",
      btnHoverColor: "hover:bg-pink",
      imageUrl: "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943510/category-black-mug_x7jkxw.png"
    },
  ]

  return (
    <section className="w-full p-4 h-180 bg-muted-foreground bg-[url(/grids/grid-perspective-horizon.svg)] bg-no-repeat bg-cover bg-center">
      <div className="flex items-center justify-between w-full px-4 mt-24 mb-2">
        <Text as="h2" variant="h2" className="uppercase text-outline-foreground">Catégories</Text>
        <Button asChild variant="secondary">
          <Link href="/shop">Voir tous les produits</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3">
        {categories.map((category) => (
          <Button
            asChild size="lg" key={category.label} className={`m-4 ${category.bg} ${category.btnHoverColor}`}
          >
            <Link href={`/shop?category=${category.label.toLowerCase()}`} className="flex flex-col">
              <div className="relative w-full mt-4 aspect-square">
                <Image src={category.imageUrl} fill className="object-cover" alt={category.label} />
              </div>
              <Text as="h3" variant="h3" className="mt-8 mb-4 text-center uppercase text-outline-foreground">{category.label}</Text>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}