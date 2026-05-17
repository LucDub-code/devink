import { cache } from "react"

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
  variants: Variant[]
}

const MOCK_PRODUCTS: Product[] = [
  {
    slug: "t-shirt-test",
    title: "T-shirt test",
    price: 29.99,
    variants: [
      {
        color: "black",
        colorLabel: "Noir",
        bgClass: "bg-black",
        images: [
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943555/front-black-shirt_sx0gau.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943558/three-quarter-black-shirt_xx7o9h.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943552/back-black-shirt_qhy08f.png",
        ],
      },
      {
        color: "white",
        colorLabel: "Blanc",
        bgClass: "bg-white",
        images: [
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943557/front-white-shirt_xbywzw.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943561/three-quarter-white-shirt_rithwe.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943553/back-white-shirt_soc1xm.png",
        ],
      },
      {
        color: "grey",
        colorLabel: "Gris",
        bgClass: "bg-gray-400",
        images: [
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943556/front-grey-shirt_lrk76h.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943559/three-quarter-grey-shirt_mggc4m.png",
          "https://res.cloudinary.com/dwblp4axc/image/upload/v1778943553/back-grey-shirt_uxuepk.png",
        ],
      },
    ],
  },
]

export const getProducts = cache(async (): Promise<Product[]> => {
  return MOCK_PRODUCTS
})

export const getProductBySlug = cache(async (slug: string): Promise<Product | null> => {
  return MOCK_PRODUCTS.find(p => p.slug === slug) ?? null
})