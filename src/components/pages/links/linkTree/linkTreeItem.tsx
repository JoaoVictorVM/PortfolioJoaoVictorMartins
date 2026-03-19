import type { ComponentType, SVGProps } from "react";
import { LinkCard } from "../linkCard/linkCard";
import { LinkCardProps } from "../../../../types/linkCard";

export interface LinkTreeItemProps extends LinkCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export function LinkTreeItem({
  icon,
  title,
  description,
  ...cardProps
}: LinkTreeItemProps) {
  const resolvedFullWidth = cardProps.fullWidth ?? true;
  const Icon = icon;

  return (
    <LinkCard {...cardProps} fullWidth={resolvedFullWidth}>
      <div className="flex h-full items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--cor-primaria-1)] shadow-inner">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col gap-1 text-left">
          <p className="text-lg text-[var(--text-color)]">{title}</p>
          <p className="text-sm text-[var(--detail-color)]">{description}</p>
        </div>
      </div>
    </LinkCard>
  );
}
