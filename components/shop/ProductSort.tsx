"use client"

import { useState } from "react"
import { Select } from "@/components/retroui/Select"

export default function ProductSort() {

  const [sort, setSort] = useState<string | undefined>(undefined)

  return (
    <div className="flex items-center justify-end h-12 mb-8">
      <Select value={sort} onValueChange={setSort}>
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