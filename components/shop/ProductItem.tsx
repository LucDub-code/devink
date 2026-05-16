"use client"

import { useState } from "react"
import ColorSelector from "./ColorSelector"
import ProductCard from "./ProductCard"

export default function ProductItem() {
  const [selectedColor, setSelectedColor] = useState("white")

  return (
    <div className="flex shadow-lg hover:shadow-none">
      <ColorSelector
        colors={[
          { name: "white", bgClass: "bg-foreground" },
          { name: "black", bgClass: "bg-background" },
          { name: "grey", bgClass: "bg-slate-400" },
        ]}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <ProductCard selectedColor={selectedColor} />
    </div>
  )
}