import Link from "next/link";

export function DropdownItem({ item }: any) {
  return (
    <Link
      href={item.href}
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
