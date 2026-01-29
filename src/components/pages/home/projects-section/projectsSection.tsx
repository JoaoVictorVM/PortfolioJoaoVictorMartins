import { ProjectCard, Project } from "./projectCard";
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    name: "Bikcraft E-commerce",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "/images/projects/previewBikcraft.png",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
    siteUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    name: "Pagina profissional Preparador Físico",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "/images/projects/previewPreparadorFisico.png",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
    siteUrl: "https://joaovictorvm.github.io/PreparadorFisico/",
    repoUrl: "https://github.com/JoaoVictorVM/PreparadorFisico",
  },
  {
    id: 3,
    name: "Landing Page Clair Obscur",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "/images/projects/previewClair.png",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
    siteUrl: "https://joaovictorvm.github.io/LP-Expedition33/",
    repoUrl: "https://github.com/JoaoVictorVM/LP-Expedition33",
  },
  {
    id: 4,
    name: "Linktree",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "/images/projects/previewLinktree.png",
    technologies: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
    siteUrl: "https://linksjoaovictormartins.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/LinksJoaoVictorMartins",
  },
  {
    id: 5,
    name: "Exibicao de album musical",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "/images/projects/previewSwag.png",
    technologies: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
    siteUrl: "https://swag-smoky.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/SWAG",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--cor-escuro-1)]">
      <div className="max-w-7xl mx-auto">
        <div className=" md:flex justify-between mb-6 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-0">
            Projetos em <span className="bg-gradient-to-r from-[var(--cor-primaria-1)] to-[var(--cor-primaria-3)] bg-clip-text text-transparent">destaque</span>
          </h2>
          <a href="/projetos" className="inline-flex flex items-center gap-1 text-[var(--cor-branco)] bg-[var(--cor-escuro-3)] border-[1px] border-[var(--cor-escuro-4)] hover:bg-[var(--cor-escuro-4)] p-2 md:p-3 rounded-full hover:scale-105 hover:shadow-2xl transition">Ver todos <ArrowUpRight className="w-4 h-4" /></a>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-4 auto-rows-[280px]">

          <ProjectCard
            project={projects[0]}
            className="col-span-3 row-span-1"
          />

          <ProjectCard
            project={projects[1]}
            className="col-span-2 row-span-1"
          />

          <ProjectCard
            project={projects[2]}
            className="col-span-1 row-span-1"
          />

          <ProjectCard
            project={projects[3]}
            className="col-span-1 row-span-1"
          />

          <ProjectCard
            project={projects[4]}
            className="col-span-2 row-span-1"
          />
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="h-[300px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}