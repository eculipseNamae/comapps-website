import { cn } from "@/lib/utils"

export type TimelineItem = {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative pl-8 border-l border-slate-200", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="mb-10 last:mb-0">
          <div className="absolute -left-3 top-1 h-6 w-6 rounded-full bg-primary" />
          <p className="text-sm font-semibold text-secondary">{item.year}</p>
          <h3 className="text-xl font-semibold text-slate-900 mt-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
