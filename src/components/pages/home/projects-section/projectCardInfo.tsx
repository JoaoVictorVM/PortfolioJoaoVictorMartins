import { ExternalLink, Github } from "lucide-react";
import { TechBadge } from "@/components/ui/techBadge";

export interface Technology {
  name: string;
  icon: string;
}

interface ProjectCardInfoProps {
  name: string;
  description: string;
  technologies: Technology[];
  siteUrl: string;
  repoUrl: string;
}

export function ProjectCardInfo({ 
  name, 
  description, 
  technologies, 
  siteUrl, 
  repoUrl 
}: ProjectCardInfoProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
      <h3 className="text-lg md:text-xl font-bold text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-[var(--cor-branco)] mb-3 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-0 group-hover:mb-3 transition-all duration-300">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} icon={tech.icon} size="sm" />
        ))}
      </div>

      <div className="flex gap-3 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-300">
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver Site
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/50 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
        >
          <Github className="w-4 h-4" />
          Repositório
        </a>
      </div>
    </div>
  );
}