import Marquee from "@/components/ui/Marquee";

export default function Marquees() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <Marquee 
        bgColor="bg-lime" 
        borderColor="border-background" 
        translateY={20}
        rotation={-1}
        zIndex={3}
      />
      <Marquee 
        bgColor="bg-background" 
        borderColor="border-foreground" 
        translateY={0}
        rotation={1} 
        zIndex={2}
      />
    </div>
  )
}