import Link from "next/link";
import { useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
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
    return (
      <Link
        href={item.href!}
        className="text-xs text-[var(--cor-cinza-1)] hover:text-[var(--cor-branco)] transition"
      >
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

      {/* 🔽 DROPDOWN AQUI */}
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
