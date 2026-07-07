export interface ProjectLink {
  label: {
    pt: string;
    en: string;
  };
  url: string;
}

export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  details: {
    pt: string;
    en: string;
  };
  stack?: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "bikcraft",
    title: { pt: "BikCraft", en: "BikCraft" },
    details: {
      pt: "Website institucional fictício desenvolvido com o objetivo de consolidar conhecimentos em HTML, CSS e responsividade. Utilizei HTML5 semântico, CSS3, JavaScript e CSS Grid, aplicando uma metodologia de CSS utilitário e boas práticas de acessibilidade. O projeto contribuiu para minha evolução na criação de interfaces responsivas e na organização de código front-end.",
      en: "Fictional institutional site built to reinforce HTML, CSS, and responsive foundations. Developed with semantic HTML5, CSS3, JavaScript, and CSS Grid, I applied utility-first styling and accessibility best practices, steering the project toward cleaner front-end structure.",
    },
    stack: ["HTML5", "CSS3", "JavaScript", "CSS Grid"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/BikCraft",
      },
      {
        label: { pt: "Site", en: "Site" },
        url: "https://bikcraft-one.vercel.app/",
      },
    ],
  },
  {
    id: "forest-imoveis",
    title: { pt: "Forest Imóveis", en: "Forest Imóveis" },
    details: {
      pt: "Website institucional fictício criado com foco no aprofundamento em Tailwind CSS e construção de interfaces responsivas. Desenvolvido com HTML e Tailwind CSS v4, aplicando a abordagem utility-first e explorando configurações personalizadas para melhor organização dos estilos. O projeto fortaleceu minha experiência no ecossistema do Tailwind e na criação de layouts modernos e consistentes.",
      en: "Corporate landing page crafted to deepen Tailwind CSS expertise and responsive thinking. Built with HTML and Tailwind v4, it leaned on utility-first practices and custom setups for consistent styling, reinforcing modern layout techniques.",
    },
    stack: ["HTML", "Tailwind CSS v4"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/ForestImoveis",
      },
      {
        label: { pt: "Site", en: "Site" },
        url: "https://joaovictorvm.github.io/ForestImoveis/",
      },
    ],
  },
  {
    id: "scheduling-api",
    title: { pt: "Scheduling API", en: "Scheduling API" },
    details: {
      pt: "API REST para gerenciamento de agendamentos desenvolvida com foco em aplicar conceitos de arquitetura backend e segurança. Construída com NestJS, Prisma ORM e PostgreSQL, a aplicação implementa autenticação com JWT, controle de acesso baseado em roles (RBAC) e organização modular. O projeto fortaleceu minha experiência em desenvolvimento de APIs escaláveis, boas práticas de segurança e estruturação de aplicações backend.",
      en: "REST API targeting scheduling workflows, built to evolve backend architecture and security patterns. With NestJS, Prisma ORM, and PostgreSQL, it layers JWT auth, RBAC-style access control, and modular organization to deliver scalable, secure endpoints.",
    },
    stack: ["NestJS", "Prisma ORM", "PostgreSQL", "JWT"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/SchedulingAPI",
      },
    ],
  },
  {
    id: "product-client-hub",
    title: { pt: "Product Client Hub", en: "Product Client Hub" },
    details: {
      pt: "API REST para gestão de clientes e produtos, com foco em fundamentos de backend. Construída com .NET, Entity Framework e SQLite, aplicando Programação Orientada a Objetos, separação de camadas e validações com FluentValidation, além de tratamento de exceções com filtros personalizados. O projeto consolidou minha base em desenvolvimento backend e boas práticas na construção de APIs.",
      en: "REST solution for managing clients and products with a backend-first mindset. Built on .NET, Entity Framework, and SQLite, it demonstrates layered architecture, OOP principles, FluentValidation checks, and custom exception filters to reinforce API craftsmanship.",
    },
    stack: [".NET", "Entity Framework", "SQLite", "FluentValidation"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/ProductClientHub",
      },
    ],
  },
  {
    id: "aiming-game",
    title: { pt: "Aiming Game", en: "Aiming Game" },
    details: {
      pt: "Jogo web interativo desenvolvido com foco em evolução contínua e escalabilidade de produto, partindo de uma ideia simples e expandindo com novas funcionalidades ao longo do tempo. Construído com HTML, CSS e JavaScript, o projeto envolve manipulação de eventos, sistema de pontuação, controle de tempo, efeitos sonoros e responsividade. Essa experiência tem fortalecido minha capacidade de manter e evoluir um projeto, com foco em organização de código e controle de qualidade ao longo do desenvolvimento.",
      en: "Interactive web game designed to iterate continuously and scale as a product. Built with HTML, CSS, and JavaScript, it covers event handling, scoring systems, timers, sound effects, and responsive layout, helping me sharpen long-term maintenance and quality control skills.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/AimingGame",
      },
      {
        label: { pt: "Site", en: "Site" },
        url: "https://joaovictorvm.github.io/AimingGame/",
      },
    ],
  },
  {
    id: "devroast",
    title: { pt: "DevRoast", en: "DevRoast" },
    details: {
      pt: "Aplicação web interativa, com foco em explorar integração com IA e análise de código. A ferramenta permite enviar trechos de código para receber avaliações com pontuação, feedback detalhado e sugestões de melhoria, incluindo um modo opcional de análise com tom humorado (“roast mode”). O projeto contribuiu para minha evolução na construção de aplicações dinâmicas, tratamento de dados e criação de experiências mais interativas para o usuário.",
      en: "Interactive web tool that experiments with AI and code review. You can submit snippets for scored feedback and improvement suggestions, including an optional humorous “roast mode.” It helped me advance in building dynamic apps, handling data, and delivering engaging experiences.",
    },
    stack: ["JavaScript", "API de IA"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/DevRoast",
      },
    ],
  },
  {
    id: "pomodoro-idle-game",
    title: { pt: "Pomodoro Idle Game", en: "Pomodoro Idle Game" },
    details: {
      pt: "Aplicação web de produtividade com gamificação desenvolvida para explorar a construção de um projeto fullstack mais complexo, combinando a técnica Pomodoro com mecânicas de jogo idle. Construída com Next.js, Node.js, PostgreSQL, TypeScript e Tailwind CSS, a aplicação inclui sistema de autenticação, persistência de progresso e evolução de personagem. O projeto tem contribuído significativamente para minha evolução em arquitetura fullstack, organização de código e planejamento de funcionalidades em um produto em crescimento.",
      en: "Productivity web app blending gamification and the Pomodoro technique as part of a more advanced fullstack project. Built with Next.js, Node.js, PostgreSQL, TypeScript, and Tailwind CSS, it features authentication, progress persistence, and character evolution—pushing my architecture, planning, and organization skills.",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/Pomodoro-IdleGame",
      },
    ],
  },
  {
    id: "caravan",
    title: { pt: "Caravan", en: "Caravan" },
    details: {
      pt: "Site institucional de viagens desenvolvido com foco na construção de layouts utilizando Bootstrap e SCSS. Construído com HTML, CSS, JavaScript e Bootstrap, o projeto inclui componentes como modais, sliders, formulários e elementos interativos, explorando configurações e recursos do framework. Essa experiência contribuiu para minha evolução na criação de interfaces mais completas e no uso de frameworks para acelerar o desenvolvimento front-end.",
      en: "Travel institutional site focused on mastering layout creation with Bootstrap and SCSS. Implemented in HTML, CSS, JavaScript, and Bootstrap, it includes modals, sliders, forms, and interactive elements, showcasing how frameworks can accelerate production.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/Caravan",
      },
      {
        label: { pt: "Site", en: "Site" },
        url: "https://joaovictorvm.github.io/Caravan/",
      },
    ],
  },
  {
    id: "swag",
    title: { pt: "SWAG", en: "SWAG" },
    details: {
      pt: "Página interativa de exibição de álbum desenvolvida com foco em aprimorar a estruturação com Next.js e estilização com Tailwind CSS. Construída com Next.js e TypeScript, a aplicação conta com responsividade, navegação entre conteúdos e integração com player do YouTube. O projeto contribuiu para minha evolução na criação de interfaces dinâmicas e na organização de componentes em aplicações front-end.",
      en: "Interactive album showcase focused on improving structure with Next.js and styling with Tailwind CSS. Built with Next.js and TypeScript, it supports responsive layouts, content navigation, and a YouTube player integration—helping me refine dynamic interface design.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/SWAG",
      },
      {
        label: { pt: "Site", en: "Site" },
        url: "https://swag-smoky.vercel.app/",
      },
    ],
  },
  {
    id: "all-projects",
    title: { pt: "Todos os projetos", en: "All projects" },
    details: {
      pt: "Apresentei aqui alguns dos meus principais projetos, mas fique à vontade para explorar todos os meus repositórios, conhecer outras experiências e acompanhar meu desenvolvimento no GitHub.",
      en: "These are a few highlighted projects—feel free to explore the full repository list, discover other experiences, and track my evolution on GitHub.",
    },
    links: [
      {
        label: { pt: "GitHub", en: "GitHub" },
        url: "https://github.com/JoaoVictorVM?tab=repositories",
      },
    ],
  },
];
