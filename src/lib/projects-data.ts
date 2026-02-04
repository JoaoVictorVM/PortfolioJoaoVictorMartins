export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  siteUrl: string;
  repoUrl: string;
  technologies: Technology[];
}

export const projects: Project[] = [
  {
    name: "BikCraft",
    description: "E-commerce de bicicletas elétricas.",
    image: "/images/projects/previewBikcraft.png",
    siteUrl: "https://example.com/project1",
    repoUrl: "https://github.com/user/project1",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
  },
  {
    name: "Pagina profissional Preparador Físico",
    description: "Portfolio representando o trabalho de um preparador físico.",
    image: "/images/projects/previewPreparadorFisico.png",
    siteUrl: "https://joaovictorvm.github.io/PreparadorFisico/",
    repoUrl: "https://github.com/JoaoVictorVM/PreparadorFisico",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    name: "Landing Page Clair Obscur",
    description: "Página de apresentação ao Clair Obscur.",
    image: "/images/projects/previewClair.png",
    siteUrl: "https://joaovictorvm.github.io/LP-Expedition33/",
    repoUrl: "https://github.com/JoaoVictorVM/LP-Expedition33",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    name: "Exibição de álbum musical",
    description: "Página de exibição do álbum musical SWAG.",
    image: "/images/projects/previewSwag.png",
    siteUrl: "https://swag-smoky.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/SWAG",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
  },
  {
    name: "Linktree",
    description: "Linktree para compartilhar todos os links.",
    image: "/images/projects/previewLinktree.png",
    siteUrl: "https://linksjoaovictormartins.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/LinksJoaoVictorMartins",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
  },
];
