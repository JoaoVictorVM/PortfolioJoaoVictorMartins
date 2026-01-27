import { AboutIcon } from "./aboutIcon"

export function JourneyCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
      {/* Gradient Blur Background */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-[var(--cor-primaria-1)]/20 to-[var(--cor-primaria-1)]/20 opacity-60 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--cor-primaria-1)]/20 to-[var(--cor-primaria-1)]/20 backdrop-blur-sm">
          <AboutIcon className="h-7 w-7 text-[var(--cor-primaria-1)]" />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold text-white">
          A Jornada
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed text-zinc-400">
          <span className="font-semibold text-white">
            Olá! Meu nome é João Victor Ventura Martins
          </span>{" "}
          e atuo na área de tecnologia há mais de 3 anos. Ao longo desse tempo,
          venho construindo minha trajetória com foco em desenvolvimento web,
          aprendizado contínuo e evolução profissional.
          <br /><br />
          Sou graduando em Ciência da Computação e desenvolvedor fullstack, com
          foco em React e Next.js no frontend e Node.js no backend. Desenvolvo
          aplicações web modernas, responsivas e acessíveis, utilizando
          TailwindCSS e boas práticas para garantir código organizado,
          escalável e de fácil manutenção.
          <br /><br />
          Tenho forte atenção à estruturação de código e acessibilidade,
          desenvolvendo projetos próprios e acadêmicos, sempre buscando
          evolução técnica e um portfólio sólido.
        </p>
      </div>
    </div>
  )
}