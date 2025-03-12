import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "success" | "warning" | "danger"
  className?: string
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary-light text-primary",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

