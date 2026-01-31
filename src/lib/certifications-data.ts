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
    name: 'Rocketseat',
    logo: '/instituicao/rocketseat.svg',
    accentColor: '#605CD4',
    items: [
      { title: 'Oracle Academy Java for AP CSA' },
      { title: 'Database Design' },
      { title: 'Database Programming with SQL' },
      { title: 'AZ-900 - Microsoft' }
    ]
  },
  {
    name: 'Origamid',
    logo: '/instituicao/origamid.svg',
    accentColor: '#7B3CEE',
    items: [
      { title: 'Desenvolvimento Web Avançado com PHP, Laravel e Vue.js' },
      { title: 'Oracle SQL Especialista: do Básico ao Avançado - 2025' },
      { title: 'Docker: Ferramenta essencial para Desenvolvedores' },
      { title: 'Domine a Arquitetura Limpa e Hexagonal' },
      { title: 'Padrões de Projeto em Java na Prática!' },
      { title: 'Curso Web Frontend Fundamentos HTML CSS JS + de 10 Projetos' },
      { title: 'Spring Boot Expert: JPA, REST, JWT, OAuth2 com Docker e AWS' }
    ]
  },
  {
    name: 'DevClub',
    logo: '/instituicao/devclub.webp',
    accentColor: '#39D353',
    items: [
      { title: 'Pacote de Cursos - ITIL 4 Foundation' },
      { title: 'Blockchain: Criação de Contratos Inteligentes Avançados' },
      { title: 'Cadeia de Valor de Serviço' },
      { title: 'Criação de Valores de Serviço' },
      { title: 'Gerenciamento de Sistemas de Valores' },
      { title: 'DevOps: Explorando Conceitos, Comandos e Scripts' },
      { title: 'Gestão de Fornecedores' }
    ]
  }
];