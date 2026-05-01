type MarqueeProps = {
  bgColor: string,
  borderColor: string,
  textColor: string,
  children: React.ReactNode,
  translateY: number,
  rotation: number,
  zIndex: number
}

export default function Marquee({ bgColor, borderColor, textColor, children, translateY, rotation, zIndex }: MarqueeProps) {

  return (
    <div 
      className={`relative w-[110%] -ml-[5%] h-20 border-y-2 ${bgColor} ${borderColor} ${textColor}`} 
      style={{ 
        transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
        transformOrigin: "left",
        zIndex
      }}
    >
      <div className="wrapper overflow-hidden h-full flex items-center">
        <div className="track flex whitespace-nowrap">
          {[0,1].map((i) => (
            <div key={i} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={i > 0}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}