import { ArrowUpRight } from "lucide-react";

interface PostLinkProps {
  href: string;
  label: string;
  description: string;
}

/**
 * Link em destaque dentro do corpo do post, para repositórios e perfis
 * citados no texto. Segue o mesmo card da listagem de posts.
 */
export function PostLink({ href, label, description }: PostLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="post-link border-line hover:bg-line/40 group my-8 flex items-center justify-between gap-4 rounded-lg border px-5 py-4 transition-colors"
    >
      <span className="space-y-1">
        <span className="text-text block">{label}</span>
        <span className="text-detail block text-sm">{description}</span>
      </span>
      <ArrowUpRight
        size={16}
        aria-hidden
        className="text-detail shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
