import { cache } from "react"
import productsData from "./products.json"

export type Variant = {
  color: string
  colorLabel: string
  bgClass: string
  images: string[]
}

export type Product = {
  slug: string
  title: string
  price: number
  category: string
  design: string
  variants: Variant[]
}

const MOCK_PRODUCTS = productsData as Product[]

export const getProducts = cache(async (): Promise<Product[]> => {
  return MOCK_PRODUCTS
})

export const getProductBySlug = cache(async (slug: string): Promise<Product | null> => {
  return MOCK_PRODUCTS.find(p => p.slug === slug) ?? null
})