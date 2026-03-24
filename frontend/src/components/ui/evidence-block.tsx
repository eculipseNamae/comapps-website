import { cn } from "@/lib/utils"
import { CheckCircle2, ShieldCheck, Trophy, Medal } from "lucide-react"

type EvidenceBadgeType = "aaccup" | "ched" | "aun" | "verified"

export function EvidenceBadge({ type }: { type: EvidenceBadgeType }) {
  const config: Record<EvidenceBadgeType, { label: string; icon: React.ReactNode }> = {
    aaccup: { label: "AACCUP", icon: <Trophy className="h-4 w-4" /> },
    ched: { label: "CHED", icon: <ShieldCheck className="h-4 w-4" /> },
    aun: { label: "AUN", icon: <Medal className="h-4 w-4" /> },
    verified: { label: "Verified", icon: <CheckCircle2 className="h-4 w-4" /> },
  }

  const badge = config[type]

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      {badge.icon}
      {badge.label}
    </span>
  )
}

export function MetricPlaceholder({ label, value, target }: { label: string; value: string; target?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-slate-900">{value}</span>
        {target && <span className="text-xs text-muted-foreground">{target}</span>}
      </div>
    </div>
  )
}

export function EvidenceBlock({
  title,
  description,
  accreditation,
  children,
}: {
  title: string
  description: string
  accreditation?: EvidenceBadgeType[]
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-2">
          {accreditation?.map((type, idx) => (
            <EvidenceBadge key={idx} type={type} />
          ))}
        </div>
      </div>
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
