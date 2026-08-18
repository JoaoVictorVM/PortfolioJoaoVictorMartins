import { Link } from "@tanstack/react-router";
import { cn } from "@/shared/lib/cn";

interface BackLinkProps {
  label: string;
  to?: "/" | "/blog";
  className?: string;
}

export function BackLink({ label, to = "/", className }: BackLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "text-detail hover:text-text mb-4 block text-sm font-normal italic transition-colors md:absolute md:left-0 md:mb-0 md:-translate-x-38",
        className,
      )}
    >
      {label}
    </Link>
  );
}
