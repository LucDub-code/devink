import Image from "next/image"
import Cart from "@/components/navbar/Cart"
import { Button } from "@/components/retroui/Button"

export default function Navbar() {
  return (
    <nav className="w-full h-20 border-b-2 bg-foreground">
      <div className="flex items-center justify-between h-full px-8 mx-auto max-w-360">
        <div className="flex h-full items-center">
          <Image src="/images/logo-lime.svg"
            alt="Devink"
            width={500}
            height={200}
            priority
            className="h-20 w-auto"
          />
        </div>
        <div className="flex items-center gap-6">
          <Cart />
          <Button>Connexion</Button>
        </div>
      </div>
    </nav>
  )
}