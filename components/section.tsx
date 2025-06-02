import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  spacing?: "sm" | "md" | "lg" | "xl"
}

export function Section({ children, className, id, spacing = "lg" }: SectionProps) {
  const spacingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-20 lg:py-24",
    xl: "py-20 md:py-24 lg:py-32",
  }

  return (
    <section id={id} className={cn(spacingClasses[spacing], className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </section>
  )
}
