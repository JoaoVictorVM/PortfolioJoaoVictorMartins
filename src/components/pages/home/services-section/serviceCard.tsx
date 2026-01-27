import Link from "next/link"
import type { ServiceItem } from "@/types/services"
import { ServiceIcon } from "./serviceIcon"
import { ArrowUpRightIcon } from "./serviceIcons"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  service: ServiceItem
}

const gradientVariants = {
  blue: "from-cyan-500/30 to-blue-600/30",
  orange: "from-orange-500/30 to-red-600/30",
  pink: "from-pink-500/30 to-purple-600/30",
}

const bulletVariants = {
  blue: "bg-cyan-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--cor-escuro-3)] bg-[var(--cor-escuro-5)] p-6 transition-all sm:p-8">
      {/* Gradient Blur Background */}
      <div
        className={cn(
          "pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-opacity",
          gradientVariants[service.iconVariant]
        )}
        aria-hidden="true"
      />

      {/* Background Number
      <span
        className="pointer-events-none absolute bottom-0 right-4 select-none text-[10rem] font-bold leading-none text-zinc-900/50 sm:text-[12rem]"
        aria-hidden="true"
      >
        {service.number}
      </span> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <ServiceIcon variant={service.iconVariant}>{service.icon}</ServiceIcon>

        {/* Category & Title */}
        <div className="mt-6">
          <span className="text-sm text-zinc-500">{service.category}</span>
          <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="mt-6 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
              <span className={cn("h-1.5 w-1.5 rounded-full", bulletVariants[service.iconVariant])} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href={service.href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium p-2 text-white transition-colors hover:text-zinc-300"
        >
          Saiba mais
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
