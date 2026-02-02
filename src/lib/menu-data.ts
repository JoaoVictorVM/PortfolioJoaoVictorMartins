export type MenuItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

export const MENU: MenuItem[] = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Projetos",
    dropdown: [
      { label: "Secao de Projetos", href: "/#projetos" },
      { label: "Todos os Projetos", href: "/projetos" },
    ],
  },
  {
    label: "Certificados",
    dropdown: [
      { label: "Secao Certificado", href: "/#certificados" },
      { label: "Todos os Certificados", href: "/certificados" },
    ],
  },
  {
    label: "Pessoal",
    dropdown: [
      { label: "Secao sobre mim", href: "/#sobre-mim" },
      { label: "Meus Links", href: "/#links" },
      { label: "Saiba mais", href: "/#sobre-mim" },
    ],
  },
  {
    label: "Servicos",
    dropdown: [
      { label: "Secao servicos", href: "/#servicos" },
      { label: "Front-end", href: "/#servicos" },
      { label: "Sistema", href: "/#servicos" },
      { label: "UX/UI", href: "/#servicos" },
    ],
  },
];
