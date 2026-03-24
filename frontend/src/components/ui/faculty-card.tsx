import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export type FacultyCard = {
  id: string
  name: string
  position: string
  education?: string
  specializations?: string[]
  href?: string
}

interface FacultyGridProps {
  faculty: FacultyCard[]
  variant?: "default" | "detailed"
  className?: string
}

export function FacultyGrid({ faculty, variant = "default", className }: FacultyGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {faculty.map(member => (
        <Link
          key={member.id}
          to={member.href ?? "#"}
          className={cn(
            "group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg",
            variant === "detailed" && "hover:-translate-y-1"
          )}
        >
          <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
          <p className="text-sm text-secondary mb-2">{member.position}</p>
          {member.education && (
            <p className="text-sm text-muted-foreground">{member.education}</p>
          )}
          {variant === "detailed" && member.specializations?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {member.specializations.map(spec => (
                <span
                  key={spec}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {spec}
                </span>
              ))}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  )
}
