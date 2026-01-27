"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MENU } from "@/lib/menu-data";
import { useClickOutside } from "@/hooks/useClickOutside";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        className="p-2 text-[var(--cor-cinza-1)] hover:text-[var(--cor-branco)] transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="
            fixed left-1/2 -translate-x-1/2 top-20
            w-[calc(100vw-2rem)] max-w-md
            rounded-xl
            bg-[var(--cor-escuro-5)]
            border border-[var(--cor-escuro-4)]
            shadow-lg p-4
            z-50
          "
        >
          {MENU.map((item) => (
            <div key={item.label} className="mb-4 last:mb-0">
              {item.dropdown ? (
                <>
                  {/* Título da seção em destaque */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--cor-primaria-1)] mb-2 px-2">
                    {item.label}
                  </h3>
                  {/* Sub-itens abaixo do título */}
                  <div className="space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMenu}
                        className="
                          block rounded-lg px-3 py-2.5
                          text-sm text-[var(--cor-cinza-1)]
                          hover:bg-white/5 hover:text-[var(--cor-branco)]
                          transition
                        "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Item sem dropdown - também como seção */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--cor-primaria-1)] mb-2 px-2">
                    Menu
                  </h3>
                  <Link
                    href={item.href!}
                    onClick={closeMenu}
                    className="
                      block rounded-lg px-3 py-2.5
                      text-sm text-[var(--cor-cinza-1)]
                      hover:bg-white/5 hover:text-[var(--cor-branco)]
                      transition
                    "
                  >
                    {item.label}
                  </Link>
                </>
              )}
            </div>
          ))}


        </div>
      )}
    </div>
  );
}
