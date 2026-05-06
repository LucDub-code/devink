import Card from "@/components/ui/Card"

export default function Hero() {
  return (
    <section className="grid items-stretch w-full grid-cols-2 h-180">
      <div className="border-r-2 bg-purple"></div>
      <div className="relative flex items-center justify-center bg-blue">
        <Card 
          background="bg-orange" 
          translateY={-170} 
          translateX={140} 
          rotate={8} 
          scale={0.7} 
          hoverScale={0.8}
          zIndex="z-40" 
        />
        <Card 
          background="bg-lime" 
          translateY={-170} 
          translateX={-120} 
          rotate={-8} 
          scale={0.8} 
          hoverScale={0.9} 
          zIndex="z-20" 
        />
        <Card 
          background="bg-pink" 
          translateY={60} 
          translateX={0} 
          rotate={-1} 
          scale={0.9} 
          hoverScale={1} 
          zIndex="z-30" 
        /> 
      </div>
    </section>
  )
}