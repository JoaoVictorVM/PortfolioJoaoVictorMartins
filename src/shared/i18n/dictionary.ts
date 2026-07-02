import type { Language } from "@/types/preferences";

const pt = {
  skipToContent: "Pular para o conteúdo",
  header: {
    home: "Início",
    theme: {
      toLight: "Ativar modo claro",
      toDark: "Ativar modo escuro",
    },
    language: {
      pt: "Mudar para português",
      en: "Mudar para inglês",
    },
  },
  footer: {
    location: "Cabo Verde - MG 37880-000",
  },
  common: {
    backToIndex: "← Index",
  },
  certificates: {
    title: "Certificados",
    subtitle: "Qualidade e excelência comprovadas",
  },
  projects: {
    title: "Projetos",
    subtitle: "Abaixo alguns projetos selecionados",
  },
  notFound: {
    code: "404",
    title: "Página não encontrada",
    message: "A página que você procura não existe ou foi movida.",
    backHome: "← Voltar ao início",
  },
  error: {
    title: "Algo deu errado",
    message: "Ocorreu um erro inesperado. Tente novamente.",
    retry: "Tentar novamente",
  },
  home: {
    intro: {
      name: "João Victor Ventura Martins",
      roles: ["Software Engineer", "FullStack Developer"],
      lead: "Software Engineer com foco em Frontend Engineering, desenvolvendo aplicações com ênfase em arquitetura, performance, escalabilidade, manutenibilidade e organização de código.",
      summary:
        "Sinta-se a vontade para conhecer mais sobre minha trajetória, o que venho estudando e os projetos em que estou trabalhando.",
      suffix: "Caso queira, você também pode acessar meu",
      resumeLabel: "currículo",
    },
    highlights: {
      certificatesTitle: "Certificados",
      projectsTitle: "Projetos",
      certificatesCta: "Todos os Certificados",
      projectsCta: "Demais Projetos",
      certificates: [
        {
          title: "Front End & UX/UI Design",
          description:
            "Certificação concluída pela Origamid em 06/02/2026, validando conhecimentos na área.",
        },
        {
          title: "NLW Operator - FullStack",
          description:
            "Certificação concluída pela Rocketseat em 17/03/2026, validando conhecimentos na área.",
        },
      ],
      projects: [
        {
          title: "BikCraft",
          description: "E-commerce de bicicletas elétricas com foco em UI.",
          url: "https://bikcraft-one.vercel.app/",
        },
        {
          title: "Forest Imóveis",
          description:
            "Site institucional de imobiliária com foco em Tailwind.",
          url: "https://joaovictorvm.github.io/ForestImoveis/",
        },
        {
          title: "Scheduling API",
          description: "API Node.js/Nest.js organizada para agendamentos.",
          url: "https://github.com/JoaoVictorVM/Scheduling-API",
        },
      ],
    },
    now: {
      title: "Atualmente",
      paragraphs: [
        "Tenho direcionado meu foco para a parte mais arquitetural dos projetos, com maior atenção a System Design e à estruturação das aplicações. Busco construir soluções escaláveis e de fácil manutenção, reduzindo retrabalho e garantindo uma evolução consistente do código ao longo do tempo.",
        "Trabalho principalmente com React e Node.js utilizando TypeScript, além de Next.js para aplicações mais complexas. Atuo na integração com bancos de dados como PostgreSQL e SQLite. Também venho aprofundando meus estudos em .NET e possuo domínio de ferramentas como Git, GitHub, Figma, OpenCode e MCPs no fluxo de desenvolvimento.",
      ],
    },
    connect: {
      title: "Contato",
      prefix: "Me encontre em",
      orWord: "ou",
    },
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  skipToContent: "Skip to content",
  header: {
    home: "Home",
    theme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    language: {
      pt: "Switch to Portuguese",
      en: "Switch to English",
    },
  },
  footer: {
    location: "Cabo Verde - MG, Brazil",
  },
  common: {
    backToIndex: "← Index",
  },
  certificates: {
    title: "Certificates",
    subtitle: "Proven quality and excellence",
  },
  projects: {
    title: "Projects",
    subtitle: "Below are some selected projects",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    message: "The page you are looking for does not exist or was moved.",
    backHome: "← Back home",
  },
  error: {
    title: "Something went wrong",
    message: "An unexpected error occurred. Please try again.",
    retry: "Try again",
  },
  home: {
    intro: {
      name: "João Victor Ventura Martins",
      roles: ["Software Engineer", "FullStack Developer"],
      lead: "Software Engineer focused on Frontend Engineering, developing applications with emphasis on architecture, performance, scalability, maintainability, and clean code organization.",
      summary:
        "Feel free to explore my journey, what I am currently studying, and the projects I am working on.",
      suffix: "If you wish, you can also download my",
      resumeLabel: "resume",
    },
    highlights: {
      certificatesTitle: "Certificates",
      projectsTitle: "Projects",
      certificatesCta: "All Certificates",
      projectsCta: "Other Projects",
      certificates: [
        {
          title: "Front End & UX/UI Design",
          description:
            "Origamid certification completed on 02/06/2026, confirming practical knowledge.",
        },
        {
          title: "NLW Operator - FullStack",
          description:
            "Rocketseat certification completed on 03/17/2026, confirming practical knowledge.",
        },
      ],
      projects: [
        {
          title: "BikCraft",
          description: "Electric bike e-commerce with a UI-first approach.",
          url: "https://bikcraft-one.vercel.app/",
        },
        {
          title: "Forest",
          description: "Real-estate corporate site built with Tailwind.",
          url: "https://joaovictorvm.github.io/ForestImoveis/",
        },
        {
          title: "Scheduling API",
          description: "Node.js/Nest.js API crafted for appointment flows.",
          url: "https://github.com/JoaoVictorVM/Scheduling-API",
        },
      ],
    },
    now: {
      title: "Now",
      paragraphs: [
        "I have been focusing on the architectural side of my projects, putting extra care into System Design and application structure. I aim to build scalable, maintainable setups that reduce rework and ensure consistent growth over time.",
        "I mainly build with React and Node.js using TypeScript, often leveraging Next.js for more sophisticated experiences. I integrate PostgreSQL and SQLite, and continue developing .NET expertise along with tools like Git, GitHub, Figma, OpenCode, and MCP workflows.",
      ],
    },
    connect: {
      title: "Connect",
      prefix: "Reach me at",
      orWord: "or",
    },
  },
};

export const dictionary: Record<Language, Dictionary> = { pt, en };
