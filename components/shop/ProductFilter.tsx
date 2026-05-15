"use client"

import { Checkbox } from "@/components/retroui/Checkbox"
import { Text } from "@/components/retroui/Text"

export default function ProductFilter() {

  const categories = ["T-shirts", "Hoodies", "Mugs"]
  const designs = ["JS-Sphere", "CaSScade", "Clash of Backends", "Devink"]

  return (
    <div className="col-span-1 px-8 py-4 mr-8 border-2 bg-background w-70 h-fit border-background shadow-lime text-foreground">
      <Text as="h3" className="mb-8">Categories</Text>
      <ul className="pb-8 space-y-4">
        {categories.map((category) => (
          <li key={category} className="flex items-center w-full gap-4 pb-4 border-b border-muted-foreground">
            <Checkbox id={category.toLowerCase()} size="md" />
            <label htmlFor={category.toLowerCase()} className="text-lg cursor-pointer">{category}</label>
          </li>
        ))}
      </ul>
      <Text as="h3" className="mb-8">Designs</Text>
      <ul className="pb-2 space-y-4">
        {designs.map((design, index) => (
          <li key={design}  className={`flex items-center gap-4 w-full pb-4 ${index < designs.length - 1 ? "border-b border-muted-foreground" : ""}`}>
            <Checkbox id={design.toLowerCase()} size="md" />
            <label htmlFor={design.toLowerCase()} className="text-lg cursor-pointer">{design}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}