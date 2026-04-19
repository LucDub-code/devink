import { Button } from "@/components/retroui/Button"
import Image from "next/image"

export default function Cart() {
  return (
    <Button size="icon">
      <Image src="/icons/cart.svg" alt="Cart" width={20} height={20} />
    </Button>
  )
}