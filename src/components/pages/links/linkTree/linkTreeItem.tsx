import { ReactNode } from "react"
import { LinkCard } from "../linkCard/linkCard"
import { LinkCardProps } from "../../../../types/linkCard"

export interface LinkTreeItemProps extends LinkCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function LinkTreeItem({
  icon,
  title,
  description,
  ...cardProps
}: LinkTreeItemProps) {
  const resolvedFullWidth = cardProps.fullWidth ?? true

  return (
    <LinkCard {...cardProps} fullWidth={resolvedFullWidth}>
      <div className="flex h-full items-center gap-5">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-[var(--cor-primaria-1)]
            shadow-inner
          "
        >
          {icon}
        </div>

        <div className="flex flex-1 flex-col gap-1 text-left">
          <p className="text-lg font-semibold leading-tight text-[var(--text-color)]">
            {title}
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-color)]/70">
            {description}
          </p>
        </div>
      </div>
    </LinkCard>
  )
}
