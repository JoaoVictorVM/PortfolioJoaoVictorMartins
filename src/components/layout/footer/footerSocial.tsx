import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterSocialProps {
  links?: SocialLink[];
}

const defaultLinks: SocialLink[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/jvvmartins/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/JoaoVictorVM",
    icon: <Github size={16} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jvvmartins.s/",
    icon: <Instagram size={16} />,
  },
];

export function FooterSocial({ links = defaultLinks }: FooterSocialProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-sm">Redes sociais</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
