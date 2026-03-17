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
      { label: "Repositrio", url: "https://github.com/username/bikcraft" },
      { label: "Site", url: "https://bikcraft.example" },
    ],
  },
];
