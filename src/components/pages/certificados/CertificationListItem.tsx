import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
}

export function CertificationListItem({ title }: Props) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-[var(--cor-primaria-1)]">
        <ArrowRight className="w-4 h-4" />
      </span>
      <span className="text-sm text-white/80">{title}</span>
    </li>
  );
}
