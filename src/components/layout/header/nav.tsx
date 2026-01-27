"use client";

import { useState } from "react";
import { MENU } from "./menu.config";
import { NavItem } from "./navItem";

export function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function toggleMenu(label: string) {
    setOpenMenu((prev) => (prev === label ? null : label));
  }

  function closeMenu() {
    setOpenMenu(null);
  }

  return (
    <nav className="flex gap-8 text-sm text-white">
      {MENU.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          isOpen={openMenu === item.label}
          onToggle={() => toggleMenu(item.label)}
          onClose={closeMenu}
        />
      ))}
    </nav>
  );
}
