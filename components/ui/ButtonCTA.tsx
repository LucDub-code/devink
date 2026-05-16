import Link from "next/link"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type ButtonCTAProps = {
  href: string
  children: ReactNode
  className?: string
}

export default function ButtonCTA({ href, children, className }: ButtonCTAProps) {
  return (
    <Link
      href={href}
      className={cn("group relative inline-block w-max", className)}
    >
      <span className="absolute inset-0 translate-x-3 translate-y-3 border-2 bg-pink transition-transform group-hover:translate-x-3.75 group-hover:translate-y-3.75 group-active:translate-x-0 group-active:translate-y-0" />
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 border-2 bg-blue transition-transform group-hover:translate-x-1.75 group-hover:translate-y-1.75 group-active:translate-x-0 group-active:translate-y-0" />
      <span className="relative flex items-center justify-center gap-3 border-2 bg-lime px-8 py-3 font-sans text-xl font-bold uppercase transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0 group-active:translate-y-0 lg:text-3xl">
        {children}
      </span>
    </Link>
  )
}