import { ProjectCard, Project } from "./projectCard";
import { ArrowUpRight } from "lucide-react";

const projects: Project[] = [
  {
    id: 1,
    name: "Bikcraft",
    description: "E-commerce de bicicletas elétricas.",
    image: "/images/projects/previewBikcraft.png",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
    siteUrl: "https://bikcraft-one.vercel.app/",
    repoUrl: "https://github.com/JoaoVictorVM/BikCraft",
  },
  {
    id: 2,
    name: "Pagina profissional Preparador Físico",
    description: "Portfolio representando o trabalho de um preparador físico.",
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
    name: "WildBeast",
    description: "Website fictício de um blog sobre animais.",
    image: "/images/projects/",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
    siteUrl: "https://joaovictorvm.github.io/WildBeast/",
    repoUrl: "https://github.com/JoaoVictorVM/WildBeast",
  },
  {
    id: 4,
    name: "FlexStore",
    description: "Website fictício de e-commerce.",
    image: "/images/projects/",
    technologies: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
    siteUrl: "https://joaovictorvm.github.io/FlexStore/",
    repoUrl: "https://github.com/JoaoVictorVM/FlexStore",
  },
  {
    id: 5,
    name: "Exibição de álbum musical",
    description: "Página de exibição do álbum musical SWAG.",
    image: "/images/projects/previewSwag.png",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
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
    <section id="projetos" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className=" md:flex justify-between mb-6 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-0">
            Projetos em{" "}
            <span className="bg-gradient-to-br from-[var(--cor-primaria-1)] via-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
              destaque
            </span>
          </h2>
          <a
            href="/projetos"
            className="inline-flex flex items-center gap-1 text-[var(--cor-branca)] border-2 border-[var(--cor-primaria-1)] hover:border-[var(--cor-branca)] hover:bg-[var(--cor-primaria-3)]/20 py-3 px-8 rounded-full hover:shadow-2xl transition-all duration-300 "
          >
            Ver todos <ArrowUpRight className="w-4 h-4" />
          </a>
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
