import { AboutIcon } from "./aboutIcon";

export function JourneyCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--cor-escuro-7)] bg-[var(--cor-escuro-6)]/80 p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-[var(--cor-primaria-1)]/20 to-[var(--cor-primaria-1)]/20 opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--cor-primaria-1)]/20 to-[var(--cor-primaria-1)]/20 backdrop-blur-sm">
          <AboutIcon className="h-7 w-7 text-[var(--cor-primaria-1)]" />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white">Minha abordagem</h3>

        <p className="text-base leading-relaxed text-zinc-400">
          Olá! Me chamo{" "}
          <span className="text-[var(--cor-branca)]">
            João Victor Ventura Martins
          </span>{" "}
          e atuo na área de tecnologia há{" "}
          <span className="text-[var(--cor-branca)]">mais de 3 anos</span>.
          <br />
          <br />
          Sou{" "}
          <span className="text-[var(--cor-branca)]">
            graduando em Ciência da Computação
          </span>{" "}
          e{" "}
          <span className="text-[var(--cor-branca)]">
            desenvolvedor fullstack
          </span>
          , trabalhando principalmente com{" "}
          <span className="text-[var(--cor-branca)]">React e Next.js</span> no
          frontend e <span className="text-[var(--cor-branca)]">Node.js</span>{" "}
          no backend. Desenvolvo{" "}
          <span className="text-[var(--cor-branca)]">
            aplicações web modernas, responsivas e acessíveis
          </span>
          , utilizando{" "}
          <span className="text-[var(--cor-branca)]">TailwindCSS</span> e{" "}
          <span className="text-[var(--cor-branca)]">
            boas práticas de desenvolvimento
          </span>
          .
          <br />
          <br />
          Tenho forte atenção à{" "}
          <span className="text-[var(--cor-branca)]">
            estrutura de código, acessibilidade e escalabilidade
          </span>
          , atuando tanto em{" "}
          <span className="text-[var(--cor-branca)]">
            projetos próprios quanto acadêmicos
          </span>
          , sempre buscando{" "}
          <span className="text-[var(--cor-branca)]">
            evolução técnica e profissional
          </span>
          .
        </p>
      </div>
    </div>
  );
}
