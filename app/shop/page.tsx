import ShopHeader from "@/components/shop/ShopHeader"
import ProductFilter from "@/components/shop/ProductFilter"
import ProductSort from "@/components/shop/ProductSort"
import ProductGrid from "@/components/shop/ProductGrid"
import { getProducts } from "@/lib/products"

export default async function ShopPage() {

  const products = await getProducts()

  return (
    <div className="flex flex-col grow">
      <ShopHeader />
      <div className="bg-muted-foreground grow grid grid-cols-[auto_1fr] p-8">
        <ProductFilter />
        <div>
          <ProductSort />
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}