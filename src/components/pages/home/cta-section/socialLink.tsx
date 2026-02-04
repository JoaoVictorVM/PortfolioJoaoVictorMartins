import { Linkedin, Github, Mail, Instagram } from "lucide-react";
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
  {
    href: "mailto:jvmartinscv@gmail.com?subject=Contato%20com%20desenvolvedor%20João&body=Olá%20João",
    icon: <Mail size={18} />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/jvvmartins/",
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/JoaoVictorVM",
    icon: <Github size={18} />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/jvvmartins.s/",
    icon: <Instagram size={18} />,
    label: "Instagram",
  },
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
