import ButtonCTA from "./ButtonCTA"
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
          <ButtonCTA href="/shop">
            Voir la boutique
            <Image 
              src="/icons/arrow-right.svg" alt="arrow right" width={42} height={32}
            />
          </ButtonCTA>
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
        className="absolute -rotate-12 bottom-0 left-2 drop-shadow-lg"
      />
    </div>
  )
}