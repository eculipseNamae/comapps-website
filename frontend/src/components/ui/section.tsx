import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted"
  children: React.ReactNode
}

export function Section({ className, variant = "default", children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        variant === "muted" ? "bg-slate-50" : "bg-white",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeader({ className, title, subtitle, align = "center", ...props }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && (
        <p className={cn("text-slate-600", align === "center" && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
