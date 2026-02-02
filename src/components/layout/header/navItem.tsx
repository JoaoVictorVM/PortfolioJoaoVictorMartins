"use client";

import Link from "next/link";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Dropdown } from "./dropdown";
import { DropdownItem } from "./dropdownItem";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

type Props = {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function NavItem({ item, isOpen, onToggle, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);

  if (!item.dropdown) {
    const href = item.href!;
    const isAnchor = href.startsWith("#");
    const className =
      "text-xs text-[var(--cor-cinza-1)] hover:text-[var(--cor-branco)] transition";
    
    if (isAnchor) {
      const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.substring(1); // Remove o #
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calcula o offset do header fixo (aproximadamente 100px)
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      return (
        <a href={href} onClick={handleAnchorClick} className={className}>
          {item.label}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(
          "flex items-center gap-1 text-xs font-medium transition-colors",
          isOpen ? "text-[var(--cor-branco)]" : "text-zinc-300",
          "hover:text-[var(--cor-branco)] hover:cursor-pointer"
        )}
      >
        {item.label}

        <ChevronDown
          size={16}
          className={cn(
            "transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <Dropdown>
          {item.dropdown.map((sub) => (
            <DropdownItem
              key={sub.label}
              item={sub}
              onClick={onClose}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
}
