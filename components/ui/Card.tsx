"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

type CardProps = {
  background: string,
  scale: number,
  hoverScale: number,
  zIndex: string,
  translateY: number,
  translateX: number,
  rotate: number
}

export default function Card({ background, scale, hoverScale, zIndex, translateY, translateX, rotate }: CardProps) {

  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.set(cardRef.current, {
      x: translateX,
      y: translateY,
      rotation: rotate,
      scale,
    })
  }, [])

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      scale: hoverScale,
      duration: 0.4,
      ease: "back.out(2)",
    })
  }

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale,
      duration: 0.4,
      ease: "back.out(2)",
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`absolute h-80 w-80 border-2 border-background shadow-lg ${background} ${zIndex}`}
    >
    </div>
  )
}
