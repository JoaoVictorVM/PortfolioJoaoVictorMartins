import { ProjectCardInfo } from "./projectCardInfo";
import { Technology } from "./projectCardInfo";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: Technology[];
  siteUrl: string;
  repoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-transparent hover:border-white/30 transition-all duration-300 ${className}`}
    >

      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <ProjectCardInfo
        name={project.name}
        description={project.description}
        technologies={project.technologies}
        siteUrl={project.siteUrl}
        repoUrl={project.repoUrl}
      />
    </div>
  );
}