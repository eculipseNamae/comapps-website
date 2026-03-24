import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
  backgroundClassName?: string
}

export function PageHero({ title, subtitle, className, backgroundClassName }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-20", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20",
          backgroundClassName
        )}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-slate-600">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export const HeroSection = PageHero
