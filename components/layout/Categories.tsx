import Image from "next/image";
import Link from "next/link";
import { Text } from "../retroui/Text";
import { Button } from "../retroui/Button";

export default function Categories() {

  const categories = [
    { label: "Mugs", bg: "bg-pink", btnHoverColor: "hover:bg-pink" },
    { label: "Shirts", bg: "bg-lime", btnHoverColor: "hover:bg-lime" },
    { label: "Hoodies", bg: "bg-orange", btnHoverColor: "hover:bg-orange" },
  ];

  return (
    <section className="w-full h-160 bg-muted-foreground p-4">
      <div className="w-full flex items-center justify-between px-4 my-8">
        <Text as="h2">Catégories</Text>
        <Button variant="secondary" className="">Voir tous les produits</Button>
      </div>
      <div className="grid grid-cols-3">
        {categories.map((category) => (
          <Button 
            asChild size="lg" key={category.label} className={`m-4 ${category.bg} ${category.btnHoverColor}`}
          >
            <Link href="/" className="flex flex-col">
              <div className="relative w-full aspect-square">
                <Image src="/placeholder.jpg" fill className="object-cover" alt={category.label} />
              </div>
              <Text as="h3" className="text-center mt-6 mb-4">{category.label}</Text>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}