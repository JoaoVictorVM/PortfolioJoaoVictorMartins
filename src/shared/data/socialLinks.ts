import type { ComponentType, SVGProps } from "react";
import { Mail, Phone } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/jvvmartins/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/JoaoVictorVM",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jvvmartins.s/",
    icon: InstagramIcon,
  },
  { label: "WhatsApp", href: "https://wa.me/5535998095841", icon: Phone },
  { label: "Email", href: "mailto:jvmartinscv@gmail.com", icon: Mail },
];
