export function IntroSection() {
  return (
    <section id="inicio" className="pt-32">
      <div className="mx-auto max-w-2xl px-4 space-y-8 text-[var(--text-color)]">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-lg">João Victor Ventura Martins</h1>
            <ul className="list-disc pl-5 text-[var(--detail-color)] text-sm font-normal italic">
              <li>Software Engineer</li>
              <li>FullStack Developer</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 text-base font-normal text-[var(--detail-color)]">
          <p className="text-[var(--text-color)]">
            Software Engineer com foco em Frontend Engineering, desenvolvendo
            aplicações com ênfase em arquitetura, performance, escalabilidade,
            manutenibilidade e organização de código.
          </p>
          <p className="text-[var(--text-color)]">
            Sinta-se à vontade para conhecer mais sobre minha trajetória, o que
            venho estudando e os projetos em que estou trabalhando. Caso queira,
            você também pode acessar meu{" "}
            <a
              href="/pdf/CV-JoaoVictorVenturaMartins.pdf"
              download
              className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition"
            >
              currículo
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
