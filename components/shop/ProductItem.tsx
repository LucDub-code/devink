"use client"

import { useState } from "react"
import ColorSelector from "./ColorSelector"
import ProductCard from "./ProductCard"

export default function ProductItem() {
  const [selectedColor, setSelectedColor] = useState("black")

  return (
    <div className="flex shadow-lg hover:shadow-none">
      <ColorSelector
        colors={[
          { name: "black", bgClass: "bg-background" },
          { name: "white", bgClass: "bg-muted" },
          { name: "grey", bgClass: "bg-slate-400" },
        ]}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <ProductCard selectedColor={selectedColor} />
    </div>
  )
}