import Link from "next/link";
import type { ServiceItem } from "@/types/services";
import { ServiceCard } from "./serviceCard";
import {
  ArrowUpRightIcon,
  GridIcon,
  PenToolIcon,
  RocketIcon,
} from "./serviceIcons";

const services: ServiceItem[] = [
  {
    id: "landing-pages",
    icon: <RocketIcon className="h-6 w-6" />,
    category: "Alta Conversão",
    title: "Aplicações Web Frontend",
    description:
      "Páginas e sites focados em presença digital, performance e conversão. Soluções rápidas, modernas e responsivas para apresentar seu negócio da melhor forma.",
    features: [
      "Landing Pages",
      "Sites Institucionais",
      "Blogs e Portfólios",
      "Design Responsivo e SEO",
    ],
    href: "https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20as%20suas%20páginas%20e%20aplicações%20web!",
    iconVariant: "blue",
    number: "01",
  },
  {
    id: "web-apps",
    icon: <GridIcon className="h-6 w-6" />,
    category: "Sistemas & Soluções Digitais",
    title: "Sistemas Web Completos",
    description:
      "Aplicações robustas e escaláveis, com frontend moderno e backend estruturado. Ideal para projetos que exigem lógica de negócio, dados e integrações.",
    features: [
      "Painel Administrativo",
      "APIs e Integrações",
      "Banco de Dados",
      "Autenticação e Segurança",
    ],
    href: "https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20sistemas%20e%20aplicações%20complexas!",
    iconVariant: "orange",
    number: "02",
  },
  {
    id: "ui-ux-design",
    icon: <PenToolIcon className="h-6 w-6" />,
    category: "Design & Prototipagem",
    title: "Design & UX/UI",
    description:
      "Design centrado no usuário, focado em clareza, usabilidade e estética. Do conceito ao layout final, criando experiências digitais consistentes.",
    features: [
      "Web Design",
      "Prototipagem Interativa",
      "UX Research",
      "Design Systems",
    ],
    href: "https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20designer!",
    iconVariant: "pink",
    number: "03",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Meus{" "}
            <span className="bg-gradient-to-br from-[var(--cor-primaria-1)] via-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Da ideia à aplicação final: soluções digitais sob medida, com
            tecnologia, estratégia e atenção aos detalhes.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <p className="text-zinc-500">Tem um projeto diferente em mente?</p>
          <Link
            href="https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!"
            target="_blank"
            className="mt-2 inline-flex items-center gap-1 text-base font-medium text-[var(--cor-primaria-3)] transition-colors hover:text-[var(--cor-primaria-1)]"
          >
            Vamos conversar
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
