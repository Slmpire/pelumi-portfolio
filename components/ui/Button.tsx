"use client"

import { cn } from "@/lib/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2",
        variant === "primary" && "bg-(--color-brand-ink) text-(--color-brand-mist) hover:bg-(--color-brand-coral)",
        variant === "outline" && "border border-(--color-brand-ink)/20 text-(--color-brand-ink) hover:border-(--color-brand-ink)",
        variant === "ghost"   && "text-(--color-brand-ink)/60 hover:text-(--color-brand-ink)",
        size === "sm" && "text-xs px-4 py-2",
        size === "md" && "text-sm px-6 py-3",
        size === "lg" && "text-base px-8 py-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}