import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTAButtons({
  primaryText = "Vamos conversar",
  primaryHref = "/contato",
  secondaryText = "Ver Projetos",
  secondaryHref = "/projetos",
}: CTAButtonsProps) {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={primaryHref}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-colors duration-200"
      >
        {primaryText}
        <ArrowUpRight size={16} />
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm border border-gray-700 transition-colors duration-200"
      >
        {secondaryText}
      </Link>
    </div>
  );
}