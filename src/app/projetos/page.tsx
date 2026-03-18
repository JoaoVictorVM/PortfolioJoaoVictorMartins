"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PROJECT_DETAILS } from "@/data/projectDetails";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";

const PROJECTS_COPY = {
  pt: {
    title: "Projetos",
    subtitle: "Abaixo alguns projetos selecionados",
  },
  en: {
    title: "Projects",
    subtitle: "Below are some selected projects",
  },
} as const;

export default function Projetos() {
  const { language } = usePreference();
  const [openProject, setOpenProject] = useState<string | null>(null);
  const isVisible = useReveal(language);
  const texts = PROJECTS_COPY[language];

  const toggleProject = (id: string) => {
    setOpenProject((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4">
          <div
            key={`projects-top-${language}`}
            className={`relative mb-8 fast-fade-up delay-100 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Link
              href="/"
              className={`home-link block text-sm font-normal text-[var(--detail-color)] no-underline transition hover:text-[var(--text-color)] mb-4 md:mb-0 md:absolute md:left-0 md:-translate-x-[150px] italic fast-fade-up delay-150 ${
                isVisible ? "visible" : ""
              }`}
            >
              ← Index
            </Link>
            <div className="space-y-10">
              <div>
                <h1
                  className={`text-lg text-[var(--text-color)] fast-fade-up delay-200 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  {texts.title}
                </h1>
                <p
                  className={`text-sm text-[var(--detail-color)] fast-fade-up delay-250 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  {texts.subtitle}
                </p>
              </div>

              <div className="space-y-2">
                {PROJECT_DETAILS.map((project, index) => {
                  const isOpen = openProject === project.id;
                  const delay = index * 0.25;

                  return (
                    <div key={project.id}>
                        <button
                        type="button"
                        onClick={() => toggleProject(project.id)}
                        className="group flex w-full items-center gap-3 text-left text-[var(--text-color)] transition hover:text-[var(--text-color)]/80 hover:bg-[var(--line-color)]/30 cursor-pointer rounded-lg py-2"
                      >
                        <span
                          className="project-title"
                          style={{ animationDelay: `${delay}s` }}
                        >
                          {project.title[language]}
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
                      <div
                        className="project-details mt-2 px-2 text-sm text-[var(--detail-color)]"
                        aria-hidden={!isOpen}
                        style={{
                          maxHeight: isOpen ? "500px" : "0px",
                          opacity: isOpen ? 1 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.5s ease, opacity 0.4s ease",
                        }}
                      >
                          <p
                            className="project-details-text"
                            style={{
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                ? "translateY(0)"
                                : "translateY(-6px)",
                              transition:
                                "opacity 0.35s ease, transform 0.35s ease",
                              transitionDelay: isOpen ? "0.1s" : "0s",
                            }}
                          >
                            {project.details[language]}
                          </p>
                        {project.links && project.links.length > 0 && (
                          <div
                            className="project-details-links flex gap-2"
                            style={{
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                ? "translateY(0)"
                                : "translateY(-6px)",
                              transition:
                                "opacity 0.35s ease, transform 0.35s ease",
                              transitionDelay: isOpen ? "0.25s" : "0s",
                            }}
                          >
                            {project.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                className="flex items-center underline decoration-[var(--detail-color)]/50 hover:decoration-[var(--detail-color)] transition p-3"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label[language]}
                                <ArrowUpRight size={12} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
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
