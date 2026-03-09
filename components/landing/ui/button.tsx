import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    
    // Simplistic variants for the LP
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700 disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default: "bg-orange-600 text-white shadow hover:bg-orange-700",
      outline: "border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50",
      ghost: "hover:bg-orange-50 hover:text-orange-900 text-orange-700",
      link: "text-orange-700 underline-offset-4 hover:underline",
    }
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
