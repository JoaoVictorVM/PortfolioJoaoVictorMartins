import type { ComponentType, SVGProps } from "react";
import { Language } from "@/context/preferences/PreferenceProvider";
import {
  Code,
  FileUser,
  Github,
  Instagram,
  Linkedin,
  Laptop,
  Mail,
  Phone,
} from "lucide-react";
import { LinkCardVariant } from "@/types/linkCard";

export type LinkTreeItemText = Record<Language, string>;

export interface LinkTreeItemData {
  title: LinkTreeItemText;
  description: LinkTreeItemText;
  href?: string;
  variant?: LinkCardVariant;
  external?: boolean;
  download?: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const linkTreeItems: LinkTreeItemData[] = [
  {
    title: { pt: "Portfólio", en: "Portfolio" },
    description: {
      pt: "Explore meus projetos e minha atuação profissional completa.",
      en: "Discover my portfolio and professional work.",
    },
    href: "/",
    variant: "gradient",
    icon: Laptop,
  },
  {
    title: { pt: "LinkedIn", en: "LinkedIn" },
    description: {
      pt: "Perfil profissional no LinkedIn. Conecte-se comigo.",
      en: "Professional profile on LinkedIn. Let’s connect.",
    },
    href: "https://www.linkedin.com/in/jvvmartins/",
    variant: "light",
    external: true,
    icon: Linkedin,
  },
  {
    title: { pt: "GitHub", en: "GitHub" },
    description: {
      pt: "Veja meus repositórios no GitHub e explore meus projetos.",
      en: "Browse my GitHub repos and explore the projects I ship.",
    },
    href: "https://github.com/JoaoVictorVM",
    variant: "light",
    external: true,
    icon: Github,
  },
  {
    title: { pt: "Instagram", en: "Instagram" },
    description: {
      pt: "Conheça meu Instagram com conteúdos e aprendizados compartilhados.",
      en: "Follow my Instagram for shared learnings and reflections.",
    },
    href: "https://www.instagram.com/jvvmartins.s/",
    variant: "light",
    external: true,
    icon: Instagram,
  },
  {
    title: { pt: "Currículo", en: "Resume" },
    description: {
      pt: "Baixe meu currículo e conheça minha trajetória profissional.",
      en: "Download my resume and learn about my professional journey.",
    },
    href: "/pdf/CV-JoaoVictorVenturaMartins.pdf",
    variant: "light",
    icon: FileUser,
    download: true,
  },
  {
    title: { pt: "WhatsApp", en: "WhatsApp" },
    description: {
      pt: "Chame no WhatsApp para alinhar ideias e novos trabalhos juntos.",
      en: "Ping me on WhatsApp to align ideas or new projects.",
    },
    href: "https://wa.me/5535998095841?text=Ol%C3%A1,%20Jo%C3%A3o.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!",
    variant: "light",
    external: true,
    icon: Phone,
  },
  {
    title: { pt: "Email", en: "Email" },
    description: {
      pt: "Envie um recado rápido para discutir oportunidades ou dúvidas.",
      en: "Send a quick message to discuss opportunities or questions.",
    },
    href: "mailto:jvmartinscv@gmail.com?subject=Contato%20com%20desenvolvedor%20João",
    variant: "light",
    external: true,
    icon: Mail,
  },
];
