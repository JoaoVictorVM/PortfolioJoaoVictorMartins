import Image from "next/image"
import Link from "next/link"
import type { ProfileData } from "@/types/about"
import { ArrowUpRightIcon } from "@/components/pages/home/services-section/serviceIcons"
import { Download } from 'lucide-react'

interface AboutProfileProps {
  profile: ProfileData
}

export function AboutProfile({ profile }: AboutProfileProps) {
  return (
    <div className="flex h-full flex-col gap-4">

      {/* Image + floating card */}
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80">

        {/* Profile Image (fills available space) */}
        <div className="relative flex-1">
          <Image
            src={profile.imageUrl || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="object-fit object-top"
          />
        </div>

        {/* Floating info card */}
        <div className="pointer-events-none absolute left-4 right-4 bottom-4 rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white">
            {profile.name}
          </h3>
          <p className="text-sm text-zinc-400">
            {profile.title}
          </p>
        </div>
      </div>

      {/* Buttons always aligned with bottom of Journey */}
      <div className="mt-auto flex gap-2">
        <Link
          href={profile.linksUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--cor-primaria-1)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--cor-primaria-2)]"
        >
          Meus Links
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>

        <Link
          href={profile.aboutUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Saiba mais
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>

        <a 
          href=""
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Curriculo
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
