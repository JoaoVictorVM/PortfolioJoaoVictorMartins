import { ReactNode } from "react"

export type LinkCardVariant =
    | "dark"
    | "light"
    | "gradient"

export interface LinkCardProps {
  children: ReactNode
  href?: string
  variant?: LinkCardVariant
  download?: boolean
  external?: boolean
}