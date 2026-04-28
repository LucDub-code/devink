type MarqueeProps = {
  bgColor: string,
  borderColor: string,
  translateY: number,
  rotation: number,
  zIndex: number
}

export default function Marquee({ bgColor, borderColor, translateY, rotation, zIndex }: MarqueeProps) {
  return (
    <div 
      className={`relative w-[110%] -ml-[5%] h-20 border-y-2 ${bgColor} ${borderColor}`} 
      style={{ 
        transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
        transformOrigin: "left",
        zIndex
      }}
    >

    </div>
  )
}