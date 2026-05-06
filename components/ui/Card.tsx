type CardProps = {
  background: string,
  scale: number,
  zIndex: string,
  translateY: number,
  translateX: number,
  rotate: number
}

export default function Card({ background, scale, zIndex, translateY, translateX, rotate }: CardProps) {
  return (
    <div 
      className={`absolute h-75 w-75 border-2 border-background shadow-lg ${background} ${zIndex}`}
      style={{transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`}}
    >
    </div>
  )
}
