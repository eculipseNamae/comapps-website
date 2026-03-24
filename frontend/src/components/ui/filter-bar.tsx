import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export type FilterOption = {
  label: string
  value: string
}

export type FilterGroup = {
  name: string
  options: FilterOption[]
}

interface FilterBarProps {
  searchPlaceholder?: string
  filters?: FilterGroup[]
  className?: string
}

export function FilterBar({ searchPlaceholder, filters = [], className }: FilterBarProps) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<Record<string, string>>({})

  const hasFilters = useMemo(() => filters.length > 0, [filters])

  return (
    <div className={cn("flex flex-col gap-4 md:flex-row md:items-center md:justify-between", className)}>
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {hasFilters && (
        <div className="flex flex-wrap gap-3">
          {filters.map(group => (
            <select
              key={group.name}
              value={selected[group.name] ?? ""}
              onChange={e => setSelected(prev => ({ ...prev, [group.name]: e.target.value }))}
              className="rounded-lg border border-border bg-background py-2 px-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">{group.name}</option>
              {group.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
    </div>
  )
}
