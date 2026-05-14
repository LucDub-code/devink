import { Button } from "@/components/retroui/Button"
import Link from "next/link"

export default function BrowserMockup() {
  return (
    <div className="flex flex-col -translate-x-1 -translate-y-10 border-2 shadow-xl h-120 bg-foreground w-140">
      <div className="flex items-center h-12 gap-2 pl-2 border-b-2 bg-muted-foreground">
        <div className="p-2 border-2 rounded-full bg-pink" />
        <div className="p-2 border-2 rounded-full bg-orange" />
        <div className="p-2 border-2 rounded-full bg-lime" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-8">
        <div>{/* texte / future anim GSAP */}</div>
        <div className="flex justify-end">
          <Button asChild size="lgSans" className="bg-lime w-fit shadow-lg">
            <Link href="/shop" className="uppercase">Voir les produits</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}