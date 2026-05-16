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
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => onSelectColor(color.name)}
          aria-label={`Sélectionner ${color.name}`}
          className={`
            flex-1 cursor-pointer transition-all
            ${color.bgClass}
            ${selectedColor === color.name ? "border-4 border-blue" : "border-2 border-background"}
          `}
        />
      ))}
    </div>
  )
}