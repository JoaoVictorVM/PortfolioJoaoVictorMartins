"use client";

import "@/styles/fastFadeUp.css";
import { cn } from "@/lib/utils";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";
import { LinkTreeItem } from "@/components/pages/links/linkTree/linkTreeItem";
import { linkTreeItems } from "@/data/linkTreeItems";

export default function Links() {
  const { language } = usePreference();
  const isVisible = useReveal(language);
  const heroClass = cn(
    "text-center",
    "fast-fade-up",
    "delay-150",
    isVisible && "visible",
  );
  const gridClass = cn(
    "grid",
    "gap-5",
    "fast-fade-up",
    "delay-250",
    isVisible && "visible",
  );

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <section className="py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 ">
          <div className={heroClass}>
            <p className="text-sm text-[var(--detail-color)]">Linktree</p>
            <h1 className="text-lg text-[var(--text-color)]">
              João Victor Ventura Martins
            </h1>
            <ul className="text-[var(--detail-color)] text-sm font-normal italic">
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
