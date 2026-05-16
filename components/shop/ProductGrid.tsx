import ProductItem from "./ProductItem"

export default function ProductGrid() {
  return (
    <section aria-label="Produits" className="grid grid-cols-3 gap-8">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  )
}