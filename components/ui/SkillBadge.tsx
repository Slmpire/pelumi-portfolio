import { cn } from "@/lib/cn"

interface SkillBadgeProps {
  label: string
  variant?: "default" | "lime" | "coral"
}

export default function SkillBadge({ label, variant = "default" }: SkillBadgeProps) {
  return (
    <span className={cn(
      "px-3 py-1 text-xs font-medium rounded-full border",
      variant === "default" && "bg-(--color-brand-ink)/5 text-(--color-brand-ink)/60 border-(--color-brand-ink)/10",
      variant === "lime"    && "bg-(--color-brand-lime) text-(--color-brand-ink) border-(--color-brand-lime)",
      variant === "coral"   && "bg-(--color-brand-coral)/10 text-(--color-brand-coral) border-(--color-brand-coral)/20",
    )}>
      {label}
    </span>
  )
}