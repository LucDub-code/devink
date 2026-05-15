import { ElementType, HTMLAttributes } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva("font-head", {
  variants: {
    variant: {
      p: "font-sans text-base",
      li: "font-sans text-base",
      a: "font-sans text-base hover:underline underline-offset-2 decoration-primary",
      h1: "text-4xl lg:text-5xl font-bold",
      h1sans: "text-4xl lg:text-5xl font-sans font-bold",
      h2: "text-3xl lg:text-4xl font-semibold",
      h2sans: "text-3xl lg:text-4xl font-sans font-bold",
      h3: "text-2xl font-medium",
      h3sans: "text-2xl font-sans font-bold",
      h4: "text-xl font-normal",
      h4sans: "text-xl font-sans font-bold",
      h5: "text-lg font-normal",
      h6: "text-base font-normal",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string
  as?: ElementType
}

export const Text = (props: TextProps) => {
  const { className, as, variant, ...otherProps } = props
  const Tag: ElementType = as || "p"

  return (
    <Tag className={cn(textVariants({ variant }), className)} {...otherProps} />
  )
}