"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
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
                <p className="text-[var(--detail-color)]">
                  Abaixo alguns projetos selecionados
                </p>
              </div>

              <div className="space-y-6">
                {PROJECT_DETAILS.map((project) => {
                  const isOpen = openProject === project.id;

                  return (
                    <div key={project.id}>
                      <button
                        type="button"
                        onClick={() => toggleProject(project.id)}
                        className="group flex w-full items-center gap-3 text-left text-[var(--text-color)] transition hover:text-[var(--text-color)]/80 hover:bg-[var(--line-color)]/10 cursor-pointer rounded-lg py-3"
                      >
                        <span className="">{project.title}</span>
                        <span className="flex-1 border-t border-[var(--line-color)]" />
                        <ChevronDown
                          size={18}
                          className={`text-[var(--text-color)] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="text-sm text-[var(--detail-color)] px-2">
                          {project.details}
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
