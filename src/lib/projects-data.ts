export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  stack: string;
  description: string;
  image: string;
  siteUrl: string;
  repoUrl: string;
  technologies: Technology[];
}

export const projects: Project[] = [
  {
    name: "BikCraft",
    stack: "Front-end",
    description:
      "Website institucional fictício para uma loja de bicicletas elétricas, desenvolvido como parte da formação em HTML e CSS.",
    image: "/images/projects/previewBikcraft.png",
    siteUrl: "https://bikcraft-one.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/BikCraft",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
  },
  {
    name: "WildBeast",
    stack: "Front-end",
    description:
      "Website fictício de um blog sobre animais. O projeto foi idealizado para ser construído exclusivamente com os conceitos de CSS Grid Layout",
    image: "/images/projects/PreviewWildbeast.png",
    siteUrl: "https://joaovictorvm.github.io/WildBeast/",
    repoUrl: "https://github.com/JoaoVictorVM/WildBeast",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
  },
  {
    name: "Pagina profissional Preparador Físico",
    stack: "Front-end",
    description:
      "Página de apresentação desenvolvida em HTML e CSS. O projeto foi desenvolvido explorando responsividade, semântica e boas práticas de acessibilidade.",
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
    name: "FlexStore",
    stack: "Front-end",
    description:
      "Website fictício de e-commerce. O projeto foi idealizado para ser construído utilizando exclusivamente os conceitos de Flexbox",
    image: "/images/projects/PreviewFlexstore.png",
    siteUrl: "https://joaovictorvm.github.io/FlexStore/",
    repoUrl: "https://github.com/JoaoVictorVM/FlexStore",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
  },
  {
    name: "Landing Page Clair Obscur",
    stack: "Front-end",
    description:
      "Landing page inspirada no jogo Clair Obscur: Expedition 33, desenvolvida em HTML, CSS e JavaScript. Projeto criado para treinar boas práticas de estruturação, organização de código",
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
    name: "AimingGame",
    stack: "Front-end",
    description:
      "Projeto de gamificação voltado ao desenvolvimento de um jogo de mira, construído com foco em arquitetura escalável e organização de código.",
    image: "/images/projects/PreviewAiminggame.png",
    siteUrl: "https://github.com/JoaoVictorVM/AimingGame",
    repoUrl: "https://github.com/JoaoVictorVM/AimingGame",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    name: "Exibição de álbum musical",
    stack: "Front-end",
    description:
      "Pagina de apresentação do álbum SWAG. desenvolvido para aperfeiçoar minha estruturação com Next.js e TailwindCSS, aplicando boas práticas de componentização, responsividade e organização visual.",
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
    name: "API de agendamento",
    stack: "Back-end",
    description:
      "Projeto focado na construção de uma API REST para gerenciamento de agendamentos, aplicando conceitos de arquitetura modular, organização de camadas e integração com banco de dados relacional.",
    image: "/images/projects/PreviewApiagendamento.png",
    siteUrl: "https://github.com/JoaoVictorVM/Scheduling-API",
    repoUrl: "https://github.com/JoaoVictorVM/Scheduling-API",
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Nest.js", icon: "/icons/nestjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
    ],
  },
];
