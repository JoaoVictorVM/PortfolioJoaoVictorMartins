import type { ReactNode } from "react"

export interface ServiceItem {
  id: string
  icon: ReactNode
  category: string
  title: string
  description: string
  features: string[]
  href: string
  iconVariant: "blue" | "orange" | "pink"
  number: string
}
