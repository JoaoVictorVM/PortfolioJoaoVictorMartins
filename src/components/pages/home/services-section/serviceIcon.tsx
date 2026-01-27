import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceIconProps {
  children: ReactNode
  variant: "blue" | "orange" | "pink"
}

const variantStyles = {
  blue: "bg-gradient-to-br from-blue-500 to-blue-600",
  orange: "bg-gradient-to-br from-orange-400 to-pink-500",
  pink: "bg-gradient-to-br from-pink-500 to-purple-600",
}

export function ServiceIcon({ children, variant }: ServiceIconProps) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-xl text-white",
        variantStyles[variant]
      )}
    >
      {children}
    </div>
  )
}