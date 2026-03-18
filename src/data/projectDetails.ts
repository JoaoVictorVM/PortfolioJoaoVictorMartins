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
      "Website institucional fictício desenvolvido com o objetivo de consolidar conhecimentos em HTML, CSS e responsividade. Utilizei HTML5 semântico, CSS3, JavaScript e CSS Grid, aplicando uma metodologia de CSS utilitário e boas práticas de acessibilidade. O projeto contribuiu para minha evolução na criação de interfaces responsivas e na organização de código front-end.",
    links: [
      { label: "Repositorio", url: "https://github.com/JoaoVictorVM/BikCraft" },
      { label: "Site", url: "https://bikcraft-one.vercel.app/" },
    ],
  },
  {
    id: "forest-imoveis",
    title: "Forest Imóveis",
    details:
      "Website institucional fictício criado com foco no aprofundamento em Tailwind CSS e construção de interfaces responsivas. Desenvolvido com HTML e Tailwind CSS v4, aplicando a abordagem utility-first e explorando configurações personalizadas para melhor organização dos estilos. O projeto fortaleceu minha experiência no ecossistema do Tailwind e na criação de layouts modernos e consistentes.",
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
      "API REST para gerenciamento de agendamentos desenvolvida com foco em aplicar conceitos de arquitetura backend e segurança. Construída com NestJS, Prisma ORM e PostgreSQL, a aplicação implementa autenticação com JWT, controle de acesso baseado em roles (RBAC) e organização modular. O projeto fortaleceu minha experiência em desenvolvimento de APIs escaláveis, boas práticas de segurança e estruturação de aplicações backend.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/SchedulingAPI",
      },
    ],
  },
  {
    id: "product-client-hub",
    title: "Product Client Hub",
    details:
      "API REST para gestão de clientes e produtos, com foco em fundamentos de backend. Construída com .NET, Entity Framework e SQLite, aplicando Programação Orientada a Objetos, separação de camadas e validações com FluentValidation, além de tratamento de exceções com filtros personalizados. O projeto consolidou minha base em desenvolvimento backend e boas práticas na construção de APIs.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/ProductClientHub",
      },
    ],
  },
  {
    id: "aiming-game",
    title: "Aiming Game",
    details:
      "Jogo web interativo desenvolvido com foco em evolução contínua e escalabilidade de produto, partindo de uma ideia simples e expandindo com novas funcionalidades ao longo do tempo. Construído com HTML, CSS e JavaScript, o projeto envolve manipulação de eventos, sistema de pontuação, controle de tempo, efeitos sonoros e responsividade. Essa experiência tem fortalecido minha capacidade de manter e evoluir um projeto, com foco em organização de código e controle de qualidade ao longo do desenvolvimento.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/AimingGame",
      },
      { label: "Site", url: "https://joaovictorvm.github.io/AimingGame/" },
    ],
  },
  {
    id: "devroast",
    title: "DevRoast",
    details:
      "Aplicação web interativa, com foco em explorar integração com IA e análise de código. A ferramenta permite enviar trechos de código para receber avaliações com pontuação, feedback detalhado e sugestões de melhoria, incluindo um modo opcional de análise com tom humorado (“roast mode”). O projeto contribuiu para minha evolução na construção de aplicações dinâmicas, tratamento de dados e criação de experiências mais interativas para o usuário.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/DevRoast",
      },
    ],
  },
  {
    id: "pomodoro-idle-game",
    title: "Pomodoro Idle Game",
    details:
      "Aplicação web de produtividade com gamificação desenvolvida para explorar a construção de um projeto fullstack mais complexo, combinando a técnica Pomodoro com mecânicas de jogo idle. Construída com Next.js, Node.js, PostgreSQL, TypeScript e Tailwind CSS, a aplicação inclui sistema de autenticação, persistência de progresso e evolução de personagem. O projeto tem contribuído significativamente para minha evolução em arquitetura fullstack, organização de código e planejamento de funcionalidades em um produto em crescimento.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/Pomodoro-IdleGame",
      },
    ],
  },
  {
    id: "caravan",
    title: "Caravan",
    details:
      "Site institucional de viagens desenvolvido com foco na construção de layouts utilizando Bootstrap e SCSS. Construído com HTML, CSS, JavaScript e Bootstrap, o projeto inclui componentes como modais, sliders, formulários e elementos interativos, explorando configurações e recursos do framework. Essa experiência contribuiu para minha evolução na criação de interfaces mais completas e no uso de frameworks para acelerar o desenvolvimento front-end.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/Caravan",
      },
      { label: "Site", url: "https://joaovictorvm.github.io/Caravan/" },
    ],
  },
  {
    id: "swag",
    title: "SWAG",
    details:
      "Página interativa de exibição de álbum desenvolvida com foco em aprimorar a estruturação com Next.js e estilização com Tailwind CSS. Construída com Next.js e TypeScript, a aplicação conta com responsividade, navegação entre conteúdos e integração com player do YouTube. O projeto contribuiu para minha evolução na criação de interfaces dinâmicas e na organização de componentes em aplicações front-end.",
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JoaoVictorVM/SWAG",
      },
      { label: "Site", url: "https://swag-smoky.vercel.app/" },
    ],
  },
  {
    id: "all-projects",
    title: "Todos os projetos",
    details:
      "Apresentei aqui alguns dos meus principais projetos, mas fique à vontade para explorar todos os meus repositórios, conhecer outras experiências e acompanhar meu desenvolvimento no GitHub.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/JoaoVictorVM?tab=repositories",
      },
    ],
  },
];
