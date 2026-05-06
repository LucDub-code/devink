import Card from "@/components/ui/Card"

const cards = [
  { id: 0, background: "bg-orange", scale: 0.7, hoverScale: 0.8, zIndex: "z-40", translateY: -170, translateX: 140, rotate: 8 },
  { id: 1, background: "bg-lime", scale: 0.8, hoverScale: 0.9, zIndex: "z-20", translateY: -170, translateX: -120, rotate: -8 },
  { id: 2, background: "bg-pink", scale: 0.9, hoverScale: 1, zIndex: "z-30", translateY: 60, translateX: 0, rotate: -1 },
]

export default function Hero() {
  return (
    <section className="grid items-stretch w-full grid-cols-2 h-180">
      <div className="border-r-2 bg-purple"></div>
      <div className="relative flex items-center justify-center bg-blue">
        {cards.map(card => (
          <Card
            key={card.id}
            background={card.background}
            scale={card.scale}
            hoverScale={card.hoverScale}
            zIndex={card.zIndex}
            translateY={card.translateY}
            translateX={card.translateX}
            rotate={card.rotate}
          />
        ))}
      </div>
    </section>
  )
}