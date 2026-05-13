"use client"

import { Checkbox } from "@/components/retroui/Checkbox"
import { Text } from "@/components/retroui/Text"

export default function ProductFilter() {

  const categories = ["T-shirts", "Hoodies", "Mugs"]
  const designs = ["JS-Sphere", "CaSScade", "Clash of Backends"]

  return (
    <div className="col-span-1 px-8 py-4 border-2 bg-background w-70 border-background shadow-lime text-foreground">
      <Text as="h3" className="mb-8">Categories</Text>
      <ul className="space-y-4 pb-8">
        {categories.map((category) => (
          <li key={category} className="flex items-center gap-4 w-full border-b border-muted-foreground pb-4">
            <Checkbox id={category.toLowerCase()} size="md" />
            <label htmlFor={category.toLowerCase()} className="cursor-pointer text-lg">{category}</label>
          </li>
        ))}
      </ul>
      <Text as="h3" className="mb-8">Designs</Text>
      <ul className="space-y-4 pb-2">
        {designs.map((design, index) => (
          <li key={design}  className={`flex items-center gap-4 w-full pb-4 ${index < designs.length - 1 ? "border-b border-muted-foreground" : ""}`}>
            <Checkbox id={design.toLowerCase()} size="md" />
            <label htmlFor={design.toLowerCase()} className="cursor-pointer text-lg">{design}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}