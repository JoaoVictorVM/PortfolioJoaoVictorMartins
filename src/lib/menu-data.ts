export type MenuItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

export const MENU: MenuItem[] = [
  {
    label: "Início",
    href: "/#inicio",
  },
  {
    label: "Projetos",
    dropdown: [
      { label: "Seção de Projetos", href: "/#projetos" },
      { label: "Todos os Projetos", href: "/projetos" },
    ],
  },
  {
    label: "Certificados",
    dropdown: [
      { label: "Seção Certificado", href: "/#certificados" },
      { label: "Todos os Certificados", href: "/certificados" },
    ],
  },
  {
    label: "Pessoal",
    dropdown: [
      { label: "Seção Sobre mim", href: "/#sobre-mim" },
      {
        label: "Meus Links",
        href: "https://linksjoaovictormartins.vercel.app/",
      },
      {
        label: "Saiba Mais",
        href: "https://sobrejoaovictormartins.vercel.app/",
      },
    ],
  },
  {
    label: "Serviços",
    dropdown: [
      { label: "Seção Serviços", href: "/#servicos" },
      { label: "Aplicações", href: "/#servicos" },
      { label: "Sistemas", href: "/#servicos" },
      { label: "Design", href: "/#servicos" },
    ],
  },
];
