import Image from "next/image"
import Cart from "@/components/navbar/Cart"
import { Button } from "@/components/retroui/Button"

export default function Navbar() {
  return (
    <nav className="w-full h-20 border-b-2 bg-background">
      <div className="flex items-center justify-between h-full px-8 mx-auto max-w-360">
        {/* <Image src="/logo.svg" alt="Devink" width={120} height={40} priority /> */}
        <div>Logo</div>
        <div className="flex items-center gap-6">
          <Cart />
          <Button>Connexion</Button>
        </div>
      </div>
    </nav>
  )
}