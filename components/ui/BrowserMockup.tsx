import { Button } from "@/components/retroui/Button"
import Link from "next/link"
import Image from "next/image"

export default function BrowserMockup() {
  return (
    <div className="relative flex flex-col -translate-x-1 -translate-y-12 border-2 shadow-xl h-120 bg-foreground w-140">
      <div className="flex items-center h-12 gap-2 pl-2 border-b-2 bg-muted-foreground">
        <div className="p-2 border-2 rounded-full bg-pink" />
        <div className="p-2 border-2 rounded-full bg-orange" />
        <div className="p-2 border-2 rounded-full bg-lime" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-8">
        <div>{/* texte / future anim GSAP */}</div>
        <div className="flex justify-end">
          <Button asChild size="lgSans" className="shadow-lg bg-lime w-fit">
            <Link href="/shop" className="uppercase">Voir la boutique</Link>
          </Button>
        </div>
      </div>
      <Image
        src="/shapes/star-burst-lime.svg"
        alt="star"
        width={120}
        height={120}
        priority
        className="absolute -rotate-12 -top-12 -right-8 drop-shadow-lg"
      />
      <Image
        src="/shapes/star-sparkle-pink.svg"
        alt="star"
        width={120}
        height={120}
        priority
        className="absolute -rotate-12 bottom-0 left-8 drop-shadow-lg"
      />
    </div>
  )
}