import React from "react";
export function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      absolute top-full mt-8 w-64
      rounded-xl bg-gradient-to-br from-[var(--cor-escuro-6)] via-[var(--cor-escuro-6)] to-[var(--cor-escuro-1)]
      border border-[var(--cor-escuro-7)]
      shadow-lg p-2
    "
    >
      {children}
    </div>
  );
}
