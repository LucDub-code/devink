"use client"

type Color = {
  name: string
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
      {colors.map((color, index) => (
        <button
          key={color.name}
          onClick={() => onSelectColor(color.name)}
          aria-label={`Sélectionner ${color.name}`}
          className={`
            flex-1 cursor-pointer transition-all
            ${color.bgClass}
            ${selectedColor === color.name ? "ring-6 ring-inset ring-lime" : "border-2 border-background"}
            ${index !== colors.length - 1 && selectedColor !== color.name ? "border-b-transparent" : ""}
            ${index > 0 && colors[index - 1]?.name === selectedColor ? "border-t-transparent" : ""}
          `}
        />
      ))}
    </div>
  )
}