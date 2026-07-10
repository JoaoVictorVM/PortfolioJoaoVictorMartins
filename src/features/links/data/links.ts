import type { ComponentType, SVGProps } from "react";
import { FileUser, Laptop, Mail, Phone } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";
import { asset } from "@/shared/lib/asset";

export type LinkVariant = "default" | "featured";

export interface LinkItem {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  variant: LinkVariant;
  external?: boolean;
  download?: boolean;
}

export const links: LinkItem[] = [
  {
    title: { pt: "Portfólio", en: "Portfolio" },
    description: {
      pt: "Explore meus projetos e minha atuação profissional completa.",
      en: "Discover my portfolio and professional work.",
    },
    href: "/",
    icon: Laptop,
    variant: "featured",
  },
  {
    title: { pt: "LinkedIn", en: "LinkedIn" },
    description: {
      pt: "Perfil profissional no LinkedIn. Conecte-se comigo.",
      en: "Professional profile on LinkedIn. Let’s connect.",
    },
    href: "https://www.linkedin.com/in/jvvmartins/",
    icon: LinkedinIcon,
    variant: "default",
    external: true,
  },
  {
    title: { pt: "GitHub", en: "GitHub" },
    description: {
      pt: "Veja meus repositórios no GitHub e explore meus projetos.",
      en: "Browse my GitHub repos and explore the projects I ship.",
    },
    href: "https://github.com/JoaoVictorVM",
    icon: GithubIcon,
    variant: "default",
    external: true,
  },
  {
    title: { pt: "Instagram", en: "Instagram" },
    description: {
      pt: "Conheça meu Instagram com conteúdos e aprendizados compartilhados.",
      en: "Follow my Instagram for shared learnings and reflections.",
    },
    href: "https://www.instagram.com/jvvmartins.s/",
    icon: InstagramIcon,
    variant: "default",
    external: true,
  },
  {
    title: { pt: "Currículo", en: "Resume" },
    description: {
      pt: "Baixe meu currículo e conheça minha trajetória profissional.",
      en: "Download my resume and learn about my professional journey.",
    },
    href: asset("pdf/CV-JoaoVictorVenturaMartins.pdf"),
    icon: FileUser,
    variant: "default",
    download: true,
  },
  {
    title: { pt: "WhatsApp", en: "WhatsApp" },
    description: {
      pt: "Chame no WhatsApp para alinhar ideias e novos trabalhos juntos.",
      en: "Ping me on WhatsApp to align ideas or new projects.",
    },
    href: "https://wa.me/5535998095841?text=Ol%C3%A1,%20Jo%C3%A3o.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!",
    icon: Phone,
    variant: "default",
    external: true,
  },
  {
    title: { pt: "Email", en: "Email" },
    description: {
      pt: "Envie um recado rápido para discutir oportunidades ou dúvidas.",
      en: "Send a quick message to discuss opportunities or questions.",
    },
    href: "mailto:jvmartinscv@gmail.com?subject=Contato%20com%20desenvolvedor%20João",
    icon: Mail,
    variant: "default",
    external: true,
  },
];
