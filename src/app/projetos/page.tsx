"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PROJECT_DETAILS } from "@/data/projectDetails";

export default function Projetos() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setOpenProject((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4">
          <div className="relative mb-8">
            <Link
              href="/"
              className="home-link block text-sm font-normal text-[var(--detail-color)] no-underline transition hover:text-[var(--text-color)] mb-4 md:mb-0 md:absolute md:left-0 md:-translate-x-[150px] italic"
            >
              ← Index
            </Link>
            <div className="space-y-10">
              <div>
                <h1 className="text-lg text-[var(--text-color)]">Projetos</h1>
                <p className="text-sm text-[var(--detail-color)]">
                  Abaixo alguns projetos selecionados
                </p>
              </div>

              <div className="space-y-6">
                {PROJECT_DETAILS.map((project, index) => {
                  const isOpen = openProject === project.id;
                  const delay = index * 0.25;

                  return (
                    <div key={project.id}>
                      <button
                        type="button"
                        onClick={() => toggleProject(project.id)}
                        className="group flex w-full items-center gap-3 text-left text-[var(--text-color)] transition hover:text-[var(--text-color)]/80 hover:bg-[var(--line-color)]/30 cursor-pointer rounded-lg p-3"
                      >
                        <span
                          className="project-title"
                          style={{ animationDelay: `${delay}s` }}
                        >
                          {project.title}
                        </span>
                        <span
                          className="project-line flex-1 border-t border-[var(--line-color)]"
                          style={{ animationDelay: `${delay + 0.2}s` }}
                        />
                        <ChevronDown
                          size={18}
                          className={`project-chevron text-[var(--text-color)] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          style={{ animationDelay: `${delay + 0.4}s` }}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="text-sm text-[var(--detail-color)] px-2 space-y-2">
                          <p>{project.details}</p>
                          {project.links && project.links.length > 0 && (
                            <div className="flex gap-1 text-[var(--detail-color)]">
                              {project.links.map((link) => (
                                <a
                                  key={link.url}
                                  href={link.url}
                                  className="flex items-center gap-2 underline decoration-[var(--detail-color)]"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {link.label}
                                  <ArrowUpRight size={12} />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
