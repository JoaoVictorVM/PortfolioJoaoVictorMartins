import Link from "next/link"
import type { ServiceItem } from "@/types/services"
import { ServiceCard } from "./serviceCard"
import { ArrowUpRightIcon, GridIcon, PenToolIcon, RocketIcon } from "./serviceIcons"

const services: ServiceItem[] = [
  {
    id: "landing-pages",
    icon: <RocketIcon className="h-6 w-6" />,
    category: "Alta Conversão",
    title: "Landing Pages",
    description:
      "Páginas otimizadas para converter visitantes em clientes. Design persuasivo com foco em resultados mensuráveis.",
    features: ["Otimização SEO", "Performance A+", "Design Responsivo", "CTA Estratégicos"],
    href: "#landing-pages",
    iconVariant: "blue",
    number: "01",
  },
  {
    id: "web-apps",
    icon: <GridIcon className="h-6 w-6" />,
    category: "Dashboards & SaaS",
    title: "Aplicações Web",
    description:
      "Sistemas complexos com interfaces intuitivas. Da autenticação aos relatórios, tudo com UX impecável.",
    features: ["React Ecosystem", "APIs RESTful", "Real-time Data", "Scalable Code"],
    href: "#web-apps",
    iconVariant: "orange",
    number: "02",
  },
  {
    id: "ui-ux-design",
    icon: <PenToolIcon className="h-6 w-6" />,
    category: "Design & Prototipagem",
    title: "UI/UX Design",
    description:
      "Do conceito ao pixel final. Pesquisa de usuário, wireframes, protótipos interativos e design systems.",
    features: ["Design Systems", "User Research", "Protótipos Hi-Fi", "Handoff Perfeito"],
    href: "#ui-ux-design",
    iconVariant: "pink",
    number: "03",
  },
]

export function ServicesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Meus{" "}
            <span className="bg-gradient-to-r from-[var(--cor-primaria-1)] to-[var(--cor-primaria-3)] bg-clip-text text-transparent">
              servicos
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Soluções sob medida para transformar sua presença digital em resultados concretos.
          </p>
        </header>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-zinc-500">Tem um projeto diferente em mente?</p>
          <Link
            href="#contato"
            className="mt-2 inline-flex items-center gap-1 text-base font-medium text-[var(--cor-primaria-1)] transition-colors hover:text-[var(--cor-primaria-2)]"
          >
            Vamos conversar
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
