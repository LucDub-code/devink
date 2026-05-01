import Marquee from "@/components/ui/Marquee";

export default function Marquees() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <Marquee
        bgColor="bg-lime" 
        borderColor="border-background"
        textColor="text-background"
        translateY={20}
        rotation={-1}
        zIndex={3}
      >
        <span>Lorem ipsum dolor sit amet.</span>
        <span aria-hidden="true">⚫</span>
        <em>Lorem ipsum dolor sit amet.</em>
        <span aria-hidden="true">⚫</span>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <span aria-hidden="true">⚫</span>
      </Marquee>
      <Marquee
        bgColor="bg-background" 
        borderColor="border-foreground" 
        textColor="text-foreground"
        translateY={0}
        rotation={1} 
        zIndex={2}
      >
        <span>Lorem ipsum dolor sit amet.</span>
        <span aria-hidden="true">⚪</span>
        <em>Lorem ipsum dolor sit amet.</em>
        <span aria-hidden="true">⚪</span>
        <strong>Lorem ipsum dolor sit amet.</strong>
        <span aria-hidden="true">⚪</span>
      </Marquee>
    </div>
  )
}