import ProductCard from "./ProductCard"

export default function ProductGrid() {
  return (
    <section aria-label="Produits" className="grid grid-cols-3 gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}