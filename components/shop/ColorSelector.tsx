"use client"

type Color = {
  color: string
  bgClass: string
}

type ColorSelectorProps = {
  colors: Color[]
  selectedColor: string
  onSelectColor: (color: string) => void
}

export default function ColorSelector({ colors, selectedColor, onSelectColor }: ColorSelectorProps) {
  return (
    <div className="flex flex-col h-full w-8">
      {colors.map(({ color, bgClass }, index) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          aria-label={`Sélectionner ${color}`}
          className={`
            flex-1 cursor-pointer transition-all
            ${bgClass}
            ${selectedColor === color ? "ring-6 ring-inset ring-lime" : "border-2 border-background"}
            ${index !== colors.length - 1 && selectedColor !== color ? "border-b-transparent" : ""}
            ${index > 0 && colors[index - 1]?.color === selectedColor ? "border-t-transparent" : ""}
          `}
        />
      ))}
    </div>
  )
}