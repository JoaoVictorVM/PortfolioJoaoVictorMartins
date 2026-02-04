"use client";
import React, { useEffect, useState } from "react";
import ProjectCardInfo, { Technology } from "./projectCardInfo";

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
  const [isHoverable, setIsHoverable] = useState<boolean>(true);
  const [forceShowLinks, setForceShowLinks] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia === "undefined"
    ) {
      return;
    }

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsHoverable(Boolean(mq.matches));
    update();

    const handler = (e: MediaQueryListEvent) =>
      setIsHoverable(Boolean(e.matches));
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
    } else {
      mq.addListener(handler);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, []);

  useEffect(() => {
    if (isHoverable && forceShowLinks) {
      setForceShowLinks(false);
    }
  }, [isHoverable, forceShowLinks]);

  const onOverlayClick = () => {
    if (!isHoverable) {
      setForceShowLinks((s) => !s);
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl cursor-pointer border-2 border-transparent hover:border-white/30 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {!isHoverable && (
        <button
          aria-pressed={forceShowLinks}
          aria-label={
            forceShowLinks
              ? "Ocultar links do projeto"
              : "Mostrar links do projeto"
          }
          onClick={onOverlayClick}
          className="absolute inset-0 z-0 bg-transparent border-0 p-0 m-0"
          style={{ pointerEvents: "auto" }}
        />
      )}

      <ProjectCardInfo
        name={project.name}
        description={project.description}
        technologies={project.technologies}
        siteUrl={project.siteUrl}
        repoUrl={project.repoUrl}
        isHoverable={isHoverable}
        forceShowLinks={forceShowLinks}
      />
    </div>
  );
}
