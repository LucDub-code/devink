import ProductItem from "./ProductItem"
import type { Product } from "@/lib/products"

type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section aria-label="Produits" className="grid grid-cols-3 gap-8">
      {products.map(product => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </section>
  )
}