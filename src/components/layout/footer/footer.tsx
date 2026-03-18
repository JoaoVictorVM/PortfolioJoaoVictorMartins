"use client";

import { useReveal } from "@/hooks/useReveal";

export function Footer() {
  const year = new Date().getFullYear();
  const isVisible = useReveal();

  return (
    <footer className="border-t border-[var(--line-color)] bg-[var(--bg-color)]">
      <div className={`mx-auto max-w-2xl px-4 section-fade diagonal-fade delay-150 ${isVisible ? "visible" : ""}`}>
        <div
          className={`flex items-center justify-between py-4 font-normal text-sm text-[var(--detail-color)] text-appear delay-250 ${
            isVisible ? "visible" : ""
          }`}
        >
          <span>Cabo Verde - MG 37880-000</span>
          <span>{year}</span>
        </div>
      </div>
    </footer>
  );
}
