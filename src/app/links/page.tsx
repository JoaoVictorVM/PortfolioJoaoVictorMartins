"use client";

import "@/styles/fastFadeUp.css";
import { cn } from "@/lib/utils";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";
import { LinkTreeItem } from "@/components/pages/links/linkTree/linkTreeItem";
import { linkTreeItems } from "@/data/linkTreeItems";

const LINK_TREE_COPY = {
  pt: {
    label: "Linktree",
    roles: ["Engenheiro de Software", "Desenvolvedor FullStack"],
  },
  en: {
    label: "Linktree",
    roles: ["Software Engineer", "FullStack Developer"],
  },
} as const;

export default function Links() {
  const { language } = usePreference();
  const isVisible = useReveal(language);
  const texts = LINK_TREE_COPY[language];
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
        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4">
          <div key={`links-hero-${language}`} className={heroClass}>
            <p className="text-sm text-[var(--detail-color)]">{texts.label}</p>
            <h1 className="text-lg text-[var(--text-color)]">
              João Victor Ventura Martins
            </h1>
            <ul className="text-[var(--detail-color)] text-sm font-normal italic">
              {texts.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div key={`links-grid-${language}`} className={gridClass}>
            {linkTreeItems.map((item) => (
              <LinkTreeItem
                key={item.title.pt}
                title={item.title[language]}
                description={item.description[language]}
                href={item.href}
                variant={item.variant}
                icon={item.icon}
                external={item.external}
                download={item.download}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
