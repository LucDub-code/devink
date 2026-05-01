"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


type MarqueeProps = {
  bgColor: string,
  borderColor: string,
  textColor: string,
  children: React.ReactNode,
  translateY: number,
  rotation: number,
  zIndex: number,
  animationDirection: "left" | "right"
}

export default function Marquee({ bgColor, borderColor, textColor, children, translateY, rotation, zIndex, animationDirection }: MarqueeProps) {

  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useGSAP(() => {

    const xFrom = animationDirection === "left" ? 0 : -50
    const xTo = animationDirection === "left" ? -50 : 0

    tweenRef.current = gsap.fromTo(
      trackRef.current,
      { xPercent: xFrom },
      {
        xPercent: xTo,
        duration: 20,
        ease: "none",
        repeat: -1
      }
    )
  }, [animationDirection])

  const handleMouseEnter = () => {
    if (!tweenRef.current) return
    gsap.to(tweenRef.current, { timeScale: 0, duration: 2, ease: "power2.out" })
  }

  const handleMouseLeave = () => {
    if (!tweenRef.current) return
    gsap.to(tweenRef.current, { timeScale: 1, duration: 2, ease: "power2.out" })
  }

  return (
    <div 
      className={`relative w-[110%] -ml-[5%] h-20 border-y-2 ${bgColor} ${borderColor} ${textColor}`} 
      style={{ 
        transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
        transformOrigin: "left",
        zIndex
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden h-full flex items-center">
        <div ref={trackRef} className="flex whitespace-nowrap font-head text-lg">
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