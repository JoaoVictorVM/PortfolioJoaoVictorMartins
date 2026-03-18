export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  details: string;
  links?: ProjectLink[];
};

export const PROJECT_DETAILS: Project[] = [
  {
    id: "bikcraft",
    title: "BikCraft",
    details:
      "E-commerce de bicicletas eltricas com landing page focada em converso e catlogo organizado por categorias.",
    links: [
      { label: "Repositorio", url: "https://github.com/JoaoVictorVM/BikCraft" },
      { label: "Site", url: "https://bikcraft-one.vercel.app/" },
    ],
  },
  {
    id: "forest-imoveis",
    title: "Forest Imóveis",
    details:
      "Site institucional para uma imobiliária localizada em áreas de floresta, com foco em apresentar imóveis e informações da empresa de forma clara e moderna.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/ForestImoveis",
      },
      { label: "Site", url: "https://joaovictorvm.github.io/ForestImoveis/" },
    ],
  },
  {
    id: "scheduling-api",
    title: "Scheduling API",
    details:
      "A SchedulingAPI é uma RESTful API desenvolvida com NestJS para gerenciamento de agendamentos entre clientes e profissionais.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/ForestImoveis",
      },
    ],
  },
  {
    id: "product-client-hub",
    title: "Product Client Hub",
    details:
      "O Product Client Hub é umaAPI REST para gestão de clientes e produtos.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/ForestImoveis",
      },
    ],
  },
  {
    id: "aiming-game",
    title: "Aiming Game",
    details: "Jogo web com objetivo de acertar alvos, para treinar mira",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/AimingGame",
      },
      { label: "Site", url: "https://joaovictorvm.github.io/AimingGame/" },
    ],
  },
];
