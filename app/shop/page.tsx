import ShopHeader from "@/components/shop/ShopHeader"
import ProductFilter from "@/components/shop/ProductFilter"
import ProductSort from "@/components/shop/ProductSort"
import ProductGrid from "@/components/shop/ProductGrid"

export default function ShopPage() {
  return (
    <div className="flex flex-col grow">
      <ShopHeader />
      <div className="bg-muted-foreground grow grid grid-cols-4">
        <ProductFilter />
        <div className="col-span-3">
          <ProductSort />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}