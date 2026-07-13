export interface StackCategory {
  name: {
    pt: string;
    en: string;
  };
  techs: string[];
}

export const stack: StackCategory[] = [
  {
    name: { pt: "Frontend", en: "Frontend" },
    techs: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: { pt: "Backend", en: "Backend" },
    techs: ["Go", "TypeScript (Node.js, Nest.js)"],
  },
  {
    name: { pt: "Banco de Dados", en: "Database" },
    techs: ["PostgreSQL", "SQLite"],
  },
  {
    name: { pt: "DevOps", en: "DevOps" },
    techs: ["Docker", "GitHub Actions", "GoReleaser"],
  },
  {
    name: { pt: "Ferramentas", en: "Tools" },
    techs: ["Git/GitHub", "Figma", "Claude"],
  },
  {
    name: { pt: "GameDev", en: "GameDev" },
    techs: ["Unity", "GameMaker", "Phaser", "Aseprite"],
  },
];
