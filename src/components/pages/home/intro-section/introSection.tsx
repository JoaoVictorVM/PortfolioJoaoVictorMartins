"use client";
import { usePreference } from "@/context/preferences/PreferenceProvider";

const copy = {
  pt: {
    name: "João Victor Ventura Martins",
    roles: ["Software Engineer", "FullStack Developer"],
    lead: "Software Engineer com foco em Frontend Engineering, desenvolvendo aplicações com ênfase em arquitetura, performance, escalabilidade, manutenibilidade e organização de código.",
    summary:
      "Sinta-se a vontade para conhecer mais sobre minha trajetória, o que venho estudando e os projetos em que estou trabalhando.",
    suffix: "Caso queira, você também pode acessar meu",
    linkLabel: "currículo",
  },
  en: {
    name: "João Victor Ventura Martins",
    roles: ["Software Engineer", "FullStack Developer"],
    lead: "Software Engineer focused on Frontend Engineering, developing applications with emphasis on architecture, performance, scalability, maintainability, and clean code organization.",
    summary:
      "Feel free to explore my journey, what I am currently studying, and the projects I am working on.",
    suffix: "If you wish, you can also download my",
    linkLabel: "resume",
  },
};

export function IntroSection() {
  const { language } = usePreference();
  const texts = copy[language];

  return (
    <section id="inicio" className="pt-32">
      <div className="mx-auto max-w-2xl px-4 space-y-8 text-[var(--text-color)]">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-lg">{texts.name}</h1>
            <ul className="list-disc pl-5 text-[var(--detail-color)] text-sm font-normal italic">
              {texts.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 text-base font-normal text-[var(--detail-color)]">
          <p className="text-[var(--text-color)]">{texts.lead}</p>
          <p className="text-[var(--text-color)]">
            {texts.summary} {texts.suffix}{" "}
            <a
              href="/pdf/CV-JoaoVictorVenturaMartins.pdf"
              download
              className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition"
            >
              {texts.linkLabel}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
