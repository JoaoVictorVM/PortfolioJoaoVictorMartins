import { TechBadge } from "@/components/ui/techBadge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

export function CardProjects() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--cor-escuro-1)]">
        <div className="max-w-7xl mx-auto space-y-6">
            {projects.map((project) => (
                <div 
                  className="p-4 bg-[#121619] rounded-lg"
                  key={project.name}
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-auto mb-4 rounded" 
                  />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <TechBadge 
                        key={tech.name} 
                        name={tech.name} 
                        icon={tech.icon} 
                        size="sm" 
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/50 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Site
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/50 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Repositório
                    </a>
                  </div>
                </div>
            ))}
        </div>
    </section>
  );
}