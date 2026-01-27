'use client';

import Link from "next/link";

export function DropdownItem({ item, onClick }: { item: { label: string; href: string }; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="
        block rounded-lg px-4 py-3
        text-sm hover:bg-white/5
        transition
      "
    >
      {item.label}
    </Link>
  );
}
