"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
  const lastDirectionRef = useRef(1)

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

    let resetCall: gsap.core.Tween | null = null

    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!tweenRef.current) return

        const velocity = self.getVelocity()
        const scrollDirection = velocity >= 0 ? 1 : -1
        const boost = Math.min(Math.abs(velocity) / 500, 5)

        lastDirectionRef.current = scrollDirection

        gsap.to(tweenRef.current, {
           timeScale: scrollDirection * (1 + boost),
           duration: 0.3,
           overwrite: true, 
          })

          if (resetCall) resetCall.kill()
          resetCall = gsap.delayedCall(0.3, () => {
            if (tweenRef.current) {
              gsap.to(tweenRef.current, { timeScale: lastDirectionRef.current, duration: 1 })
            }
          })
      }
    })

  }, [animationDirection])

  const handleMouseEnter = () => {
    if (!tweenRef.current) return
    gsap.to(tweenRef.current, { timeScale: 0, duration: 2, ease: "power2.out" })
  }

  const handleMouseLeave = () => {
    if (!tweenRef.current) return
    gsap.to(tweenRef.current, { timeScale: lastDirectionRef.current, duration: 2, ease: "power2.out" })
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
      <div className="flex items-center h-full overflow-hidden">
        <div ref={trackRef} className="flex text-lg whitespace-nowrap font-head">
          {[0,1].map((i) => (
            <div key={i} className="flex items-center gap-4 pr-4 shrink-0" aria-hidden={i > 0}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}