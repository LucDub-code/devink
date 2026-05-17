"use client"

import { useState } from "react"
import ColorSelector from "./ColorSelector"
import ProductCard from "./ProductCard"
import type { Product } from "@/lib/products"

type ProductItemProps = {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {

  const [selectedColor, setSelectedColor] = useState(product.variants[0].color)

  const activeVariant = product.variants.find(v => v.color === selectedColor) ?? product.variants[0]

  return (
    <div className="flex shadow-lg hover:shadow-none">
      <ColorSelector
        colors={product.variants}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <ProductCard 
        title={product.title}
        price={product.price}
        images={activeVariant.images}
      />
    </div>
  )
}