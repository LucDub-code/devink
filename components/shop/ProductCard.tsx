import Link from "next/link"

export default function ProductCard() {
  return (
    <article className="transition-all duration-200 border-2 shadow-lg cursor-pointer h-90 bg-foreground outline-hidden hover:shadow-none">
      <Link href="/shop">
      </Link>
    </article>
  )
}