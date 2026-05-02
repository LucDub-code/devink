"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

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

export default function Marquee({ bgColor, borderColor, textColor, children, translateY, rotation, zIndex,
  animationDirection }: MarqueeProps) {

  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const speedFactorsRef = useRef({ hover: 1, scroll: 1 })

  const applyTimeScale = () => {
    animationRef.current?.timeScale(speedFactorsRef.current.hover * speedFactorsRef.current.scroll)
  }

  useGSAP(() => {

    // Infinite marquee loop (target: the trackRef in the DOM)

    const xFrom = animationDirection === "left" ? 0 : -50
    const xTo = animationDirection === "left" ? -50 : 0

    animationRef.current = gsap.fromTo(
      trackRef.current,
      { xPercent: xFrom },
      { xPercent: xTo, duration: 20, ease: "none", repeat: -1 }
    )

    // Scroll reaction: boosts speed, then eases back to normal (target: stateRef.scroll)

    let resetScroll: gsap.core.Tween | null = null

    const scrollTrigger = ScrollTrigger.create({

      onUpdate: (self) => {

        const velocity = self.getVelocity()
        if (Math.abs(velocity) < 50) return

        const boost = Math.min(Math.abs(velocity) / 500, 5)

        gsap.to(speedFactorsRef.current, {
          scroll: 1 + boost,
          duration: 0.3,
          onUpdate: applyTimeScale,
          overwrite: "auto",
        })

        resetScroll?.kill()
        resetScroll = gsap.to(speedFactorsRef.current, {
          scroll: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          onUpdate: applyTimeScale,
        })
      }
    })

    return () => {
      scrollTrigger.kill()
      resetScroll?.kill()
    }

  }, [])

  // Hover slowdown (target: stateRef.hover)

  const handleMouseEnter = () => {
    gsap.to(speedFactorsRef.current, {
      hover: 0,
      duration: 2,
      ease: "power2.out",
      onUpdate: applyTimeScale,
      overwrite: "auto",
    })
  }

  const handleMouseLeave = () => {
    gsap.to(speedFactorsRef.current, {
      hover: 1,
      duration: 2,
      ease: "power2.out",
      onUpdate: applyTimeScale,
      overwrite: "auto",
    })
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
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-4 pr-4 shrink-0" aria-hidden={i > 0}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}