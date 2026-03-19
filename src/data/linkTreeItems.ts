import type { ComponentType, SVGProps } from "react";
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

export interface LinkTreeItemData {
  title: string;
  description: string;
  href?: string;
  variant?: LinkCardVariant;
  external?: boolean;
  download?: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const linkTreeItems: LinkTreeItemData[] = [
  {
    title: "Portfólio",
    description: "Explore meus projetos e minha atuação profissional completa.",
    href: "/",
    variant: "gradient",
    icon: Laptop,
  },
  {
    title: "LinkedIn",
    description: "Perfil profissional no LinkedIn. Conecte-se comigo.",
    href: "https://www.linkedin.com/in/jvvmartins/",
    variant: "light",
    external: true,
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Veja meus repositórios no GitHub e explore meus projetos.",
    href: "https://github.com/JoaoVictorVM",
    variant: "light",
    external: true,
    icon: Github,
  },
  {
    title: "Currículo",
    description: "Baixe meu currículo e conheça minha trajetória profissional.",
    href: "/pdf/CV-JoaoVictorVenturaMartins.pdf",
    variant: "light",
    icon: FileUser,
    download: true,
  },
  {
    title: "Instagram",
    description:
      "Conheça meu Instagram com conteúdos e aprendizados compartilhados.",
    href: "https://www.instagram.com/jvvmartins.s/",
    variant: "light",
    external: true,
    icon: Instagram,
  },
  {
    title: "WhatsApp",
    description:
      "Chame no WhatsApp para alinhar ideias e novos trabalhos juntos.",
    href: "https://wa.me/5535998095841?text=Ol%C3%A1,%20Jo%C3%A3o.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!",
    variant: "light",
    external: true,
    icon: Phone,
  },
  {
    title: "Email",
    description:
      "Envie um recado rápido para discutir oportunidades ou dúvidas.",
    href: "mailto:jvmartinscv@gmail.com?subject=Contato%20com%20desenvolvedor%20João",
    variant: "light",
    external: true,
    icon: Mail,
  },
];
