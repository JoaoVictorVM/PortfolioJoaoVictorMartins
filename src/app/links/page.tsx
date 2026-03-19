"use client";

import "@/styles/fastFadeUp.css";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";
import { LinkTreeItem } from "@/components/pages/links/linkTree/linkTreeItem";
import { linkTreeItems } from "@/data/linkTreeItems";

export default function Links() {
  const { language } = usePreference();
  const isVisible = useReveal(language);
  const heroClass = `text-center fast-fade-up delay-150 ${
    isVisible ? "visible" : ""
  }`;
  const gridClass = `grid gap-5 fast-fade-up delay-250 ${
    isVisible ? "visible" : ""
  }`;

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <section className="py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4">
          <div className={heroClass}>
            <p className="text-xs uppercase tracking-[0.4rem] text-[var(--cor-primaria-3)]">
              Linktree
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[var(--text-color)]">
              João Victor Ventura Martins
            </h1>
            <ul className="mt-3 flex flex-col gap-1 text-sm text-[var(--text-color)]/70">
              <li>Software Engineer</li>
              <li>Fullstack Developer</li>
            </ul>
          </div>
          <div className={gridClass}>
            {linkTreeItems.map((item) => (
              <LinkTreeItem children={undefined} key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
