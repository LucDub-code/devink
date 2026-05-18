import ShopHeader from "@/components/shop/ShopHeader"
import ProductFilter from "@/components/shop/ProductFilter"
import ProductSort from "@/components/shop/ProductSort"
import ProductGrid from "@/components/shop/ProductGrid"
import { getProducts } from "@/lib/products"

type SearchParams = {
  category?: string | string[]
  design?: string | string[]
  sort?: string
}

export default async function ShopPage({ searchParams }: { searchParams: Promise<SearchParams> }) {

  const { category, design, sort } = await searchParams

  const toArray = (v: string | string[] | undefined) =>
    v === undefined ? [] : Array.isArray(v) ? v : [v]

  const categories = toArray(category)
  const designs = toArray(design)

  const products = await getProducts()

  const filteredProducts = products.filter(product =>
    (categories.length === 0 || categories.includes(product.category)) &&
    (designs.length === 0 || designs.includes(product.design))
  )

  const sortedProducts =
    sort === "price-asc" ? [...filteredProducts].sort((a, b) => a.price - b.price) :
    sort === "price-desc" ? [...filteredProducts].sort((a, b) => b.price - a.price) :
    filteredProducts

  return (
    <div className="flex flex-col grow">
      <ShopHeader />
      <div className="bg-muted-foreground grow grid grid-cols-[auto_1fr] p-8">
        <ProductFilter />
        <div>
          <ProductSort />
          <ProductGrid products={sortedProducts} />
        </div>
      </div>
    </div>
  )
}