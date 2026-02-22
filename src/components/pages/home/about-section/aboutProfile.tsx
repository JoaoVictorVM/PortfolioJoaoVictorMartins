import Image from "next/image";
import Link from "next/link";
import type { ProfileData } from "@/types/about";
import { ArrowUpRightIcon } from "@/components/pages/home/services-section/serviceIcons";
import { Download } from "lucide-react";

interface AboutProfileProps {
  profile: ProfileData;
}

export function AboutProfile({ profile }: AboutProfileProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-[var(--cor-escuro-7)]">
        <div className="relative flex-1">
          <Image
            src={profile.imageUrl || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="object-fit object-top"
          />
        </div>

        <div className="pointer-events-none absolute left-4 right-4 bottom-4 rounded-3xl border border-[var(--cor-escuro-7)] bg-[var(--cor-escuro-6)]/80 p-4 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
          <p className="text-sm text-zinc-400">{profile.title}</p>
        </div>
      </div>

      <div className="mt-auto flex gap-2">
        <Link
          href={profile.linksUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-1 border-[var(--cor-escuro-7)] hover:border-[var(--cor-primaria-1)] bg-[var(--cor-escuro-6)]/80 px-4 py-2.5 text-sm font-medium text-[var(--cor-branca)] transition-colors transition-all duration-300"
        >
          Meus Links
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>

        <a
          href="/pdf/CV-JoaoVictorVenturaMartins.pdf"
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-1 border-[var(--cor-escuro-7)] hover:border-[var(--cor-primaria-1)] bg-[var(--cor-escuro-6)]/80 px-4 py-2.5 text-sm font-medium text-[var(--cor-branca)] transition-colors transition-all duration-300"
        >
          Currículo
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
