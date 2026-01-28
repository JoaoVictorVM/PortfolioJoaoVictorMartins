import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
}

const defaultLinks: SocialLink[] = [
  { href: "https://linkedin.com", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "https://github.com", icon: <Github size={18} />, label: "GitHub" },
  { href: "mailto:contato@email.com", icon: <Mail size={18} />, label: "Email" },
];

export function SocialLinks({ links = defaultLinks }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 bg-gray-800/50 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-200"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}