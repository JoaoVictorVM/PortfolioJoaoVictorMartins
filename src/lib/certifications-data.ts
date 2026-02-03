export interface CertificationItem {
  title: string;
}

export interface CompanyCertifications {
  name: string;
  logo: string;
  accentColor?: string;
  items: CertificationItem[];
}

export const companies: CompanyCertifications[] = [
  {
    name: "Rocketseat",
    logo: "/instituicao/rocketseat.svg",
    accentColor: "#605CD4",
    items: [{ title: "NLW Pocket | Fullstack" }],
  },
  {
    name: "Origamid",
    logo: "/instituicao/origamid.svg",
    accentColor: "#7B3CEE",
    items: [{ title: "HTML e CSS para Iniciantes" }],
  },
  {
    name: "DevClub",
    logo: "/instituicao/devclub.webp",
    accentColor: "#39D353",
    items: [{ title: "Programador em 72H. O desafio" }],
  },
];
