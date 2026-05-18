"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Select } from "@/components/retroui/Select"

export default function ProductSort() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort") ?? undefined

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex items-center justify-end h-12 mb-8">
      <Select value={sort} onValueChange={handleSortChange}>
        <Select.Trigger>
          <Select.Value placeholder="Trier par" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="price-asc">Prix croissant</Select.Item>
          <Select.Item value="price-desc">Prix décroissant</Select.Item>
        </Select.Content>
      </Select>
    </div>
  )
}