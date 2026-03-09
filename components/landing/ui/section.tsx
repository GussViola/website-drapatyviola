import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string
}

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6 max-w-5xl", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900", className)} {...props}>
      {children}
    </h2>
  )
}
